package io.github.lightman314.lightmanscurrency.api.misc.player;

import io.github.lightman314.lightmanscurrency.api.ownership.IOwnerData;
import io.github.lightman314.lightmanscurrency.api.ownership.Owner;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.FakeOwner;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.PlayerOwner;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.TeamOwner;
import io.github.lightman314.lightmanscurrency.common.player.LCAdminMode;
import io.github.lightman314.lightmanscurrency.common.teams.Team;
import io.github.lightman314.lightmanscurrency.common.teams.TeamSaveData;
import io.github.lightman314.lightmanscurrency.common.util.IClientTracker;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.entity.player.Player;

public final class OwnerData implements IOwnerData {

    private Owner backupOwner = Owner.NULL;

    private Owner currentOwner = Owner.NULL;

    private final IClientTracker parent;

    private final Consumer<OwnerData> onChanged;

    public OwnerData(IClientTracker parent, Consumer<OwnerData> onChanged) {
        this.parent = parent;
        this.onChanged = onChanged;
    }

    @Nonnull
    public Owner getValidOwner() {
        return this.currentOwner.stillValid() ? this.currentOwner : this.backupOwner;
    }

    public boolean hasOwner() {
        return this.currentOwner.stillValid() || this.backupOwner.stillValid();
    }

    public void flagAsClient() {
        this.backupOwner.flagAsClient();
        this.currentOwner.flagAsClient();
    }

    public CompoundTag save() {
        CompoundTag compound = new CompoundTag();
        compound.put("BackupOwner", this.backupOwner.save());
        compound.put("Owner", this.currentOwner.save());
        return compound;
    }

    public void load(CompoundTag compound) {
        if (compound.contains("BackupOwner") && compound.contains("Owner")) {
            this.backupOwner = Owner.load(compound.getCompound("BackupOwner"));
            this.currentOwner = Owner.load(compound.getCompound("Owner"));
            if (this.parent.isClient()) {
                this.backupOwner.flagAsClient();
                this.currentOwner.flagAsClient();
            }
        } else {
            this.backupOwner = FakeOwner.of("NULL");
            if (compound.contains("Custom")) {
                MutableComponent custom = Component.Serializer.fromJson(compound.getString("Custom"));
                this.backupOwner = FakeOwner.of(custom.m_6881_());
                this.currentOwner = FakeOwner.of(custom);
            }
            if (compound.contains("Player")) {
                PlayerReference player = PlayerReference.load(compound.getCompound("Player"));
                this.backupOwner = PlayerOwner.of(player);
                this.currentOwner = PlayerOwner.of(player);
            }
            if (compound.contains("Team")) {
                this.currentOwner = TeamOwner.of(compound.getLong("Team"));
            }
        }
    }

    public void copyFrom(OwnerData owner) {
        this.backupOwner = owner.backupOwner;
        this.currentOwner = owner.currentOwner;
    }

    @Deprecated(since = "2.2.1.4")
    public boolean hasPlayer() {
        return this.getPlayer() != null;
    }

    @Deprecated(since = "2.2.1.4")
    public PlayerReference getPlayer() {
        if (this.currentOwner instanceof PlayerOwner po) {
            return po.player;
        } else {
            return this.backupOwner instanceof PlayerOwner po ? po.player : null;
        }
    }

    @Deprecated(since = "2.2.1.4")
    public boolean hasTeam() {
        return this.getTeam() != null;
    }

    @Deprecated(since = "2.2.1.4")
    public Team getTeam() {
        return this.currentOwner instanceof TeamOwner to ? TeamSaveData.GetTeam(this.parent.isClient(), to.teamID) : null;
    }

    @Nonnull
    public PlayerReference getPlayerForContext() {
        return this.getValidOwner().asPlayerReference();
    }

    public boolean isAdmin(@Nonnull Player player) {
        return LCAdminMode.isAdminPlayer(player) || this.isAdmin(PlayerReference.of(player));
    }

    public boolean isAdmin(@Nonnull PlayerReference player) {
        return this.getValidOwner().isAdmin(player);
    }

    public boolean isMember(@Nonnull Player player) {
        return LCAdminMode.isAdminPlayer(player) || this.isMember(PlayerReference.of(player));
    }

    public boolean isMember(@Nonnull PlayerReference player) {
        return this.getValidOwner().isMember(player);
    }

    @Deprecated(since = "2.2.1.4")
    public String getOwnerName() {
        return this.getName().getString();
    }

    @Deprecated(since = "2.2.1.4")
    public String getOwnerName(boolean ignored) {
        return this.getName().getString();
    }

    @Nonnull
    public MutableComponent getName() {
        return this.getValidOwner().getName();
    }

    @Deprecated(since = "2.2.1.4")
    public void SetCustomOwner(String customOwner) {
        this.SetOwner(FakeOwner.of(customOwner));
    }

    @Deprecated(since = "2.2.1.4")
    public void SetCustomOwner(MutableComponent customOwner) {
        this.SetOwner(FakeOwner.of(customOwner));
    }

    @Deprecated(since = "2.2.1.4")
    public void SetOwner(PlayerReference player) {
        this.SetOwner(PlayerOwner.of(player));
    }

    @Deprecated(since = "2.2.1.4")
    public void SetOwner(Player player) {
        this.SetOwner(PlayerReference.of(player));
    }

    @Deprecated(since = "2.2.1.4")
    public void SetOwner(Team team) {
        if (team != null) {
            this.SetOwner(TeamOwner.of(team));
        }
    }

    public void SetOwner(@Nonnull Owner newOwner) {
        this.currentOwner = newOwner;
        if (newOwner.alwaysValid()) {
            this.backupOwner = newOwner;
        }
        this.onChanged.accept(this);
    }
}