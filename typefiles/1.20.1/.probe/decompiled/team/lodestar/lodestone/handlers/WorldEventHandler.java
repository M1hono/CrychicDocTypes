package team.lodestar.lodestone.handlers;

import com.mojang.blaze3d.vertex.PoseStack;
import java.util.Iterator;
import net.minecraft.client.Minecraft;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.event.entity.EntityJoinLevelEvent;
import net.minecraftforge.network.PacketDistributor;
import team.lodestar.lodestone.capability.LodestonePlayerDataCapability;
import team.lodestar.lodestone.capability.LodestoneWorldDataCapability;
import team.lodestar.lodestone.events.types.worldevent.WorldEventCreationEvent;
import team.lodestar.lodestone.events.types.worldevent.WorldEventDiscardEvent;
import team.lodestar.lodestone.events.types.worldevent.WorldEventRenderEvent;
import team.lodestar.lodestone.events.types.worldevent.WorldEventTickEvent;
import team.lodestar.lodestone.network.worldevent.UpdateWorldEventPacket;
import team.lodestar.lodestone.registry.client.LodestoneWorldEventRendererRegistry;
import team.lodestar.lodestone.registry.common.LodestonePacketRegistry;
import team.lodestar.lodestone.registry.common.LodestoneWorldEventTypeRegistry;
import team.lodestar.lodestone.systems.worldevent.WorldEventInstance;
import team.lodestar.lodestone.systems.worldevent.WorldEventRenderer;
import team.lodestar.lodestone.systems.worldevent.WorldEventType;

public class WorldEventHandler {

    public static <T extends WorldEventInstance> T addWorldEvent(Level level, T instance) {
        return addWorldEvent(level, true, instance);
    }

    public static <T extends WorldEventInstance> T addWorldEvent(Level level, boolean shouldStart, T instance) {
        MinecraftForge.EVENT_BUS.post(new WorldEventCreationEvent(instance, level));
        LodestoneWorldDataCapability.getCapabilityOptional(level).ifPresent(capability -> {
            capability.inboundWorldEvents.add(instance);
            if (shouldStart) {
                instance.start(level);
            }
            instance.sync(level);
        });
        return instance;
    }

    public static void playerJoin(EntityJoinLevelEvent event) {
        if (event.getEntity() instanceof Player player && player.m_9236_() instanceof ServerLevel level) {
            LodestonePlayerDataCapability.getCapabilityOptional(player).ifPresent(capability -> LodestoneWorldDataCapability.getCapabilityOptional(level).ifPresent(worldCapability -> {
                if (player instanceof ServerPlayer serverPlayer) {
                    for (WorldEventInstance instance : worldCapability.activeWorldEvents) {
                        if (instance.type.isClientSynced()) {
                            WorldEventInstance.sync(instance, serverPlayer);
                        }
                    }
                }
            }));
        }
    }

    public static void worldTick(TickEvent.LevelTickEvent event) {
        if (event.phase.equals(TickEvent.Phase.END) && !event.level.isClientSide) {
            tick(event.level);
        }
    }

    public static void tick(Level level) {
        LodestoneWorldDataCapability.getCapabilityOptional(level).ifPresent(c -> {
            c.activeWorldEvents.addAll(c.inboundWorldEvents);
            c.inboundWorldEvents.clear();
            Iterator<WorldEventInstance> iterator = c.activeWorldEvents.iterator();
            while (iterator.hasNext()) {
                WorldEventInstance instance = (WorldEventInstance) iterator.next();
                if (instance.discarded) {
                    MinecraftForge.EVENT_BUS.post(new WorldEventDiscardEvent(instance, level));
                    iterator.remove();
                } else {
                    if (!instance.isFrozen()) {
                        MinecraftForge.EVENT_BUS.post(new WorldEventTickEvent(instance, level));
                        instance.tick(level);
                    }
                    if (instance.dirty) {
                        LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.ALL.noArg(), new UpdateWorldEventPacket(instance.uuid, instance.synchronizeNBT()));
                        instance.dirty = false;
                    }
                }
            }
        });
    }

    public static void serializeNBT(LodestoneWorldDataCapability capability, CompoundTag tag) {
        CompoundTag worldTag = new CompoundTag();
        worldTag.putInt("worldEventCount", capability.activeWorldEvents.size());
        for (int i = 0; i < capability.activeWorldEvents.size(); i++) {
            WorldEventInstance instance = (WorldEventInstance) capability.activeWorldEvents.get(i);
            CompoundTag instanceTag = new CompoundTag();
            instance.serializeNBT(instanceTag);
            worldTag.put("worldEvent_" + i, instanceTag);
        }
        tag.put("worldEventData", worldTag);
    }

    public static void deserializeNBT(LodestoneWorldDataCapability capability, CompoundTag tag) {
        capability.activeWorldEvents.clear();
        CompoundTag worldTag = tag.getCompound("worldEventData");
        int worldEventCount = worldTag.getInt("worldEventCount");
        for (int i = 0; i < worldEventCount; i++) {
            CompoundTag instanceTag = worldTag.getCompound("worldEvent_" + i);
            WorldEventType reader = (WorldEventType) LodestoneWorldEventTypeRegistry.EVENT_TYPES.get(new ResourceLocation(instanceTag.getString("type")));
            WorldEventInstance eventInstance = reader.createInstance(instanceTag);
            capability.activeWorldEvents.add(eventInstance);
        }
    }

    public static class ClientOnly {

        public static void renderWorldEvents(PoseStack stack, float partialTicks) {
            LodestoneWorldDataCapability.getCapabilityOptional(Minecraft.getInstance().level).ifPresent(capability -> {
                for (WorldEventInstance instance : capability.activeWorldEvents) {
                    WorldEventRenderer<WorldEventInstance> renderer = (WorldEventRenderer<WorldEventInstance>) LodestoneWorldEventRendererRegistry.RENDERERS.get(instance.type);
                    if (renderer != null && renderer.canRender(instance)) {
                        MinecraftForge.EVENT_BUS.post(new WorldEventRenderEvent(instance, renderer, stack, RenderHandler.DELAYED_RENDER.getTarget(), partialTicks));
                        renderer.render(instance, stack, RenderHandler.DELAYED_RENDER.getTarget(), partialTicks);
                    }
                }
            });
        }
    }
}