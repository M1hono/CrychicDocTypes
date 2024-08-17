package team.lodestar.lodestone.network.worldevent;

import java.util.UUID;
import java.util.function.Supplier;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.simple.SimpleChannel;
import team.lodestar.lodestone.capability.LodestoneWorldDataCapability;
import team.lodestar.lodestone.systems.network.LodestoneClientPacket;
import team.lodestar.lodestone.systems.worldevent.WorldEventInstance;

public class UpdateWorldEventPacket extends LodestoneClientPacket {

    private UUID uuid;

    private CompoundTag eventData;

    public UpdateWorldEventPacket(UUID uuid, CompoundTag eventData) {
        this.uuid = uuid;
        this.eventData = eventData;
    }

    @Override
    public void encode(FriendlyByteBuf buf) {
        buf.writeUUID(this.uuid);
        buf.writeNbt(this.eventData);
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void execute(Supplier<NetworkEvent.Context> context) {
        ClientLevel level = Minecraft.getInstance().level;
        if (level != null) {
            level.getCapability(LodestoneWorldDataCapability.CAPABILITY).ifPresent(capability -> {
                for (WorldEventInstance instance : capability.activeWorldEvents) {
                    if (instance.uuid.equals(this.uuid)) {
                        instance.deserializeNBT(this.eventData);
                        break;
                    }
                }
            });
        }
    }

    public static void register(SimpleChannel instance, int index) {
        instance.registerMessage(index, UpdateWorldEventPacket.class, UpdateWorldEventPacket::encode, UpdateWorldEventPacket::decode, LodestoneClientPacket::handle);
    }

    public static UpdateWorldEventPacket decode(FriendlyByteBuf buf) {
        return new UpdateWorldEventPacket(buf.readUUID(), buf.readNbt());
    }
}