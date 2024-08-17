package team.lodestar.lodestone.capability;

import net.minecraft.client.Minecraft;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.CapabilityManager;
import net.minecraftforge.common.capabilities.CapabilityToken;
import net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent;
import net.minecraftforge.common.util.LazyOptional;
import net.minecraftforge.event.AttachCapabilitiesEvent;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.event.entity.EntityJoinLevelEvent;
import net.minecraftforge.event.entity.player.PlayerEvent;
import net.minecraftforge.network.PacketDistributor;
import team.lodestar.lodestone.LodestoneLib;
import team.lodestar.lodestone.helpers.NBTHelper;
import team.lodestar.lodestone.network.capability.SyncLodestonePlayerCapabilityPacket;
import team.lodestar.lodestone.network.interaction.UpdateLeftClickPacket;
import team.lodestar.lodestone.network.interaction.UpdateRightClickPacket;
import team.lodestar.lodestone.registry.common.LodestonePacketRegistry;
import team.lodestar.lodestone.systems.capability.LodestoneCapability;
import team.lodestar.lodestone.systems.capability.LodestoneCapabilityProvider;

public class LodestonePlayerDataCapability implements LodestoneCapability {

    public static Capability<LodestonePlayerDataCapability> CAPABILITY = CapabilityManager.get(new CapabilityToken<LodestonePlayerDataCapability>() {
    });

    public boolean hasJoinedBefore;

    public boolean rightClickHeld;

    public int rightClickTime;

    public boolean leftClickHeld;

    public int leftClickTime;

    public static void registerCapabilities(RegisterCapabilitiesEvent event) {
        event.register(LodestonePlayerDataCapability.class);
    }

    public static void attachPlayerCapability(AttachCapabilitiesEvent<Entity> event) {
        if (event.getObject() instanceof Player) {
            LodestonePlayerDataCapability capability = new LodestonePlayerDataCapability();
            event.addCapability(LodestoneLib.lodestonePath("player_data"), new LodestoneCapabilityProvider<>(CAPABILITY, () -> capability));
        }
    }

    public static void playerJoin(EntityJoinLevelEvent event) {
        if (event.getEntity() instanceof ServerPlayer serverPlayer) {
            getCapabilityOptional(serverPlayer).ifPresent(capability -> capability.hasJoinedBefore = true);
            syncSelf(serverPlayer);
        }
    }

    public static void syncPlayerCapability(PlayerEvent.StartTracking event) {
        if (event.getTarget() instanceof Player player && player.m_9236_() instanceof ServerLevel) {
            syncTracking(player);
        }
    }

    public static void playerTick(TickEvent.PlayerTickEvent event) {
        getCapabilityOptional(event.player).ifPresent(c -> {
            c.rightClickTime = c.rightClickHeld ? c.rightClickTime + 1 : 0;
            c.leftClickTime = c.leftClickHeld ? c.leftClickTime + 1 : 0;
        });
    }

    public static void playerClone(PlayerEvent.Clone event) {
        event.getOriginal().revive();
        getCapabilityOptional(event.getOriginal()).ifPresent(o -> getCapabilityOptional(event.getEntity()).ifPresent(c -> c.deserializeNBT(o.serializeNBT())));
    }

    public CompoundTag serializeNBT() {
        CompoundTag tag = new CompoundTag();
        tag.putBoolean("firstTimeJoin", this.hasJoinedBefore);
        return tag;
    }

    public void deserializeNBT(CompoundTag tag) {
        this.hasJoinedBefore = tag.getBoolean("firstTimeJoin");
    }

    public static void syncServer(Player player, NBTHelper.TagFilter filter) {
        sync(player, PacketDistributor.SERVER.noArg(), filter);
    }

    public static void syncSelf(ServerPlayer player, NBTHelper.TagFilter filter) {
        sync(player, PacketDistributor.PLAYER.with(() -> player), filter);
    }

    public static void syncTrackingAndSelf(Player player, NBTHelper.TagFilter filter) {
        sync(player, PacketDistributor.TRACKING_ENTITY_AND_SELF.with(() -> player), filter);
    }

    public static void syncTracking(Player player, NBTHelper.TagFilter filter) {
        sync(player, PacketDistributor.TRACKING_ENTITY.with(() -> player), filter);
    }

    public static void sync(Player player, PacketDistributor.PacketTarget target, NBTHelper.TagFilter filter) {
        getCapabilityOptional(player).ifPresent(c -> LodestonePacketRegistry.LODESTONE_CHANNEL.send(target, new SyncLodestonePlayerCapabilityPacket(player.m_20148_(), NBTHelper.filterTag(c.serializeNBT(), filter))));
    }

    public static void syncServer(Player player) {
        sync(player, PacketDistributor.SERVER.noArg());
    }

    public static void syncSelf(ServerPlayer player) {
        sync(player, PacketDistributor.PLAYER.with(() -> player));
    }

    public static void syncTrackingAndSelf(Player player) {
        sync(player, PacketDistributor.TRACKING_ENTITY_AND_SELF.with(() -> player));
    }

    public static void syncTracking(Player player) {
        sync(player, PacketDistributor.TRACKING_ENTITY.with(() -> player));
    }

    public static void sync(Player player, PacketDistributor.PacketTarget target) {
        getCapabilityOptional(player).ifPresent(c -> LodestonePacketRegistry.LODESTONE_CHANNEL.send(target, new SyncLodestonePlayerCapabilityPacket(player.m_20148_(), c.serializeNBT())));
    }

    public static LazyOptional<LodestonePlayerDataCapability> getCapabilityOptional(Player player) {
        return player.getCapability(CAPABILITY);
    }

    public static LodestonePlayerDataCapability getCapability(Player player) {
        return player.getCapability(CAPABILITY).orElse(new LodestonePlayerDataCapability());
    }

    public static class ClientOnly {

        public static void clientTick(TickEvent.ClientTickEvent event) {
            Minecraft minecraft = Minecraft.getInstance();
            Player player = minecraft.player;
            LodestonePlayerDataCapability.getCapabilityOptional(player).ifPresent(c -> {
                boolean left = minecraft.options.keyAttack.isDown();
                boolean right = minecraft.options.keyUse.isDown();
                if (left != c.leftClickHeld) {
                    c.leftClickHeld = left;
                    LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.SERVER.noArg(), new UpdateLeftClickPacket(c.leftClickHeld));
                }
                if (right != c.rightClickHeld) {
                    c.rightClickHeld = right;
                    LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.SERVER.noArg(), new UpdateRightClickPacket(c.rightClickHeld));
                }
            });
        }
    }
}