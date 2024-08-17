package team.lodestar.lodestone.network.worldevent;

import java.util.function.Supplier;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.simple.SimpleChannel;
import team.lodestar.lodestone.handlers.WorldEventHandler;
import team.lodestar.lodestone.registry.common.LodestoneWorldEventTypeRegistry;
import team.lodestar.lodestone.systems.network.LodestoneClientPacket;
import team.lodestar.lodestone.systems.worldevent.WorldEventType;

public class SyncWorldEventPacket extends LodestoneClientPacket {

    ResourceLocation type;

    public boolean start;

    public CompoundTag eventData;

    public SyncWorldEventPacket(ResourceLocation type, boolean start, CompoundTag eventData) {
        this.type = type;
        this.start = start;
        this.eventData = eventData;
    }

    @Override
    public void encode(FriendlyByteBuf buf) {
        buf.writeResourceLocation(this.type);
        buf.writeBoolean(this.start);
        buf.writeNbt(this.eventData);
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void execute(Supplier<NetworkEvent.Context> context) {
        WorldEventType eventType = (WorldEventType) LodestoneWorldEventTypeRegistry.EVENT_TYPES.get(this.type);
        ClientLevel level = Minecraft.getInstance().level;
        WorldEventHandler.addWorldEvent(level, this.start, eventType.createInstance(this.eventData));
    }

    public static void register(SimpleChannel instance, int index) {
        instance.registerMessage(index, SyncWorldEventPacket.class, SyncWorldEventPacket::encode, SyncWorldEventPacket::decode, LodestoneClientPacket::handle);
    }

    public static SyncWorldEventPacket decode(FriendlyByteBuf buf) {
        return new SyncWorldEventPacket(buf.readResourceLocation(), buf.readBoolean(), buf.readNbt());
    }
}