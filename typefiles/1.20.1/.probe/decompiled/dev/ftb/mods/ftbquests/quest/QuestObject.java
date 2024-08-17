package dev.ftb.mods.ftbquests.quest;

import dev.ftb.mods.ftblibrary.config.ConfigGroup;
import dev.ftb.mods.ftblibrary.icon.Color4I;
import dev.ftb.mods.ftbquests.events.QuestProgressEventData;
import dev.ftb.mods.ftbquests.quest.theme.property.ThemeProperties;
import dev.ftb.mods.ftbquests.util.ProgressChange;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public abstract class QuestObject extends QuestObjectBase {

    protected boolean disableToast = false;

    public QuestObject(long id) {
        super(id);
    }

    @Override
    public void writeData(CompoundTag nbt) {
        super.writeData(nbt);
        if (this.disableToast) {
            nbt.putBoolean("disable_toast", true);
        }
    }

    @Override
    public void readData(CompoundTag nbt) {
        super.readData(nbt);
        this.disableToast = nbt.getBoolean("disable_toast");
    }

    @Override
    public void writeNetData(FriendlyByteBuf buffer) {
        super.writeNetData(buffer);
        buffer.writeBoolean(this.disableToast);
    }

    @Override
    public void readNetData(FriendlyByteBuf buffer) {
        super.readNetData(buffer);
        this.disableToast = buffer.readBoolean();
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void fillConfigGroup(ConfigGroup config) {
        super.fillConfigGroup(config);
        config.addBool("disable_toast", this.disableToast, v -> this.disableToast = v, false).setNameKey("ftbquests.disable_completion_toast").setCanEdit(this.getQuestChapter() == null || !this.getQuestChapter().isAlwaysInvisible()).setOrder(127);
    }

    @Override
    public void forceProgress(TeamData teamData, ProgressChange progressChange) {
        if (progressChange.shouldReset()) {
            teamData.setStarted(this.id, null);
            teamData.setCompleted(this.id, null);
        } else {
            teamData.setStarted(this.id, progressChange.getDate());
            teamData.setCompleted(this.id, progressChange.getDate());
        }
        for (QuestObject child : this.getChildren()) {
            child.forceProgress(teamData, progressChange);
        }
    }

    public abstract int getRelativeProgressFromChildren(TeamData var1);

    public boolean cacheProgress() {
        return true;
    }

    public static int getRelativeProgressFromChildren(int progressSum, int count) {
        if (count <= 0 || progressSum <= 0) {
            return 0;
        } else {
            return progressSum >= count * 100 ? 100 : Math.max(1, (int) ((double) progressSum / (double) count));
        }
    }

    public boolean isVisible(TeamData data) {
        return true;
    }

    public void onStarted(QuestProgressEventData<?> data) {
    }

    public void onCompleted(QuestProgressEventData<?> data) {
    }

    protected void verifyDependenciesInternal(long original, int depth) {
    }

    @OnlyIn(Dist.CLIENT)
    public Color4I getProgressColor(TeamData data) {
        if (data.isCompleted(this)) {
            return ThemeProperties.QUEST_COMPLETED_COLOR.get();
        } else {
            return data.isStarted(this) ? ThemeProperties.QUEST_STARTED_COLOR.get() : Color4I.WHITE;
        }
    }

    @OnlyIn(Dist.CLIENT)
    public Color4I getProgressColor(TeamData data, boolean dim) {
        Color4I c = this.getProgressColor(data);
        return dim ? c.addBrightness(-0.35F) : c;
    }

    public Collection<? extends QuestObject> getChildren() {
        return List.of();
    }

    public boolean isCompletedRaw(TeamData data) {
        return this.getChildren().stream().noneMatch(child -> !child.isOptionalForProgression() && !data.isCompleted(child));
    }

    public boolean isOptionalForProgression() {
        return false;
    }

    public boolean hasUnclaimedRewardsRaw(TeamData teamData, UUID player) {
        return false;
    }
}