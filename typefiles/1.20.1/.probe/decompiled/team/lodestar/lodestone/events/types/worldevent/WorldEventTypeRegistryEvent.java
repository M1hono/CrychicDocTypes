package team.lodestar.lodestone.events.types.worldevent;

import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.eventbus.api.Event;
import net.minecraftforge.fml.event.IModBusEvent;
import team.lodestar.lodestone.LodestoneLib;
import team.lodestar.lodestone.registry.common.LodestoneWorldEventTypeRegistry;
import team.lodestar.lodestone.systems.worldevent.WorldEventType;

public class WorldEventTypeRegistryEvent extends Event implements IModBusEvent {

    public WorldEventType create(ResourceLocation id, WorldEventType.EventInstanceSupplier instanceSupplier, boolean clientSynced) {
        LodestoneLib.LOGGER.info("Registering world event type: " + id);
        WorldEventType worldEventType = new WorldEventType(id, instanceSupplier, clientSynced);
        LodestoneWorldEventTypeRegistry.registerEventType(worldEventType);
        return worldEventType;
    }
}