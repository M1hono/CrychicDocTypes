package io.github.lightman314.lightmanscurrency.common.notifications.types.settings;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.player.PlayerReference;
import io.github.lightman314.lightmanscurrency.api.notifications.Notification;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationCategory;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationType;
import io.github.lightman314.lightmanscurrency.api.ownership.Owner;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.PlayerOwner;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.TeamOwner;
import io.github.lightman314.lightmanscurrency.common.notifications.categories.NullCategory;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;

public class ChangeOwnerNotification extends Notification {

    public static final NotificationType<ChangeOwnerNotification> TYPE = new NotificationType<>(new ResourceLocation("lightmanscurrency", "change_ownership"), ChangeOwnerNotification::new);

    PlayerReference player;

    Owner newOwner;

    Owner oldOwner;

    private ChangeOwnerNotification() {
    }

    public ChangeOwnerNotification(@Nonnull PlayerReference player, @Nonnull Owner newOwner, @Nonnull Owner oldOwner) {
        this.player = player;
        this.newOwner = newOwner;
        this.oldOwner = oldOwner;
    }

    @Nonnull
    @Override
    protected NotificationType<ChangeOwnerNotification> getType() {
        return TYPE;
    }

    @Nonnull
    @Override
    public NotificationCategory getCategory() {
        return NullCategory.INSTANCE;
    }

    @Nonnull
    @Override
    public MutableComponent getMessage() {
        this.newOwner.flagAsClient(this.isClient());
        this.oldOwner.flagAsClient(this.isClient());
        if (this.newOwner.asPlayerReference().isExact(this.player)) {
            return LCText.NOTIFICATION_SETTINGS_CHANGE_OWNER_TAKEN.get(this.newOwner.getName(), this.oldOwner.getName());
        } else {
            return this.oldOwner.asPlayerReference().isExact(this.player) ? LCText.NOTIFICATION_SETTINGS_CHANGE_OWNER_PASSED.get(this.oldOwner.getName(), this.newOwner.getName()) : LCText.NOTIFICATION_SETTINGS_CHANGE_OWNER_TRANSFERRED.get(this.player.getName(true), this.oldOwner.getName(), this.newOwner.getName());
        }
    }

    @Override
    protected void saveAdditional(@Nonnull CompoundTag compound) {
        compound.put("Player", this.player.save());
        compound.put("NewOwner", this.newOwner.save());
        compound.put("OldOwner", this.oldOwner.save());
    }

    @Override
    protected void loadAdditional(@Nonnull CompoundTag compound) {
        this.player = PlayerReference.load(compound.getCompound("Player"));
        this.newOwner = safeLoad(compound.getCompound("NewOwner"));
        this.oldOwner = safeLoad(compound.getCompound("OldOwner"));
    }

    @Nonnull
    private static Owner safeLoad(@Nonnull CompoundTag tag) {
        if (tag.contains("Type")) {
            Owner o = Owner.load(tag);
            return o != null ? o : Owner.NULL;
        } else {
            if (tag.contains("Player")) {
                PlayerReference pr = PlayerReference.load(tag.getCompound("Player"));
                if (pr != null) {
                    return PlayerOwner.of(pr);
                }
            }
            if (tag.contains("Team")) {
                long teamID = tag.getLong("Team");
                return TeamOwner.of(teamID);
            } else {
                return Owner.NULL;
            }
        }
    }

    @Override
    protected boolean canMerge(@Nonnull Notification other) {
        return !(other instanceof ChangeOwnerNotification n) ? false : n.player.is(this.player) && n.newOwner.matches(this.newOwner) && n.oldOwner.matches(this.oldOwner);
    }
}