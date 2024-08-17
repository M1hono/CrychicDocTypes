package dev.ftb.mods.ftbquests.quest.task.forge;

import dev.ftb.mods.ftblibrary.util.StringUtils;
import dev.ftb.mods.ftbquests.client.EnergyTaskClientData;
import dev.ftb.mods.ftbquests.quest.Quest;
import dev.ftb.mods.ftbquests.quest.task.EnergyTask;
import dev.ftb.mods.ftbquests.quest.task.TaskType;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class ForgeEnergyTask extends EnergyTask {

    public static TaskType TYPE;

    public static final ResourceLocation EMPTY_TEXTURE = new ResourceLocation("ftbquests", "textures/tasks/fe_empty.png");

    public static final ResourceLocation FULL_TEXTURE = new ResourceLocation("ftbquests", "textures/tasks/fe_full.png");

    public ForgeEnergyTask(long id, Quest quest) {
        super(id, quest);
    }

    @Override
    public TaskType getType() {
        return TYPE;
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public MutableComponent getAltTitle() {
        return Component.translatable("ftbquests.task.ftbquests.forge_energy.text", StringUtils.formatDouble((double) this.getValue(), true));
    }

    @Override
    public EnergyTaskClientData getClientData() {
        return ForgeEnergyTaskClientData.INSTANCE;
    }
}