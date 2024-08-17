package com.github.alexthe666.citadel.server.message;

import com.github.alexthe666.citadel.Citadel;
import java.util.function.Supplier;
import net.minecraft.core.BlockPos;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.fml.LogicalSide;
import net.minecraftforge.network.NetworkEvent;

public class DanceJukeboxMessage {

    public int entityID;

    public boolean dance;

    public BlockPos jukeBox;

    public DanceJukeboxMessage(int entityID, boolean dance, BlockPos jukeBox) {
        this.entityID = entityID;
        this.dance = dance;
        this.jukeBox = jukeBox;
    }

    public DanceJukeboxMessage() {
    }

    public static DanceJukeboxMessage read(FriendlyByteBuf buf) {
        return new DanceJukeboxMessage(buf.readInt(), buf.readBoolean(), buf.readBlockPos());
    }

    public static void write(DanceJukeboxMessage message, FriendlyByteBuf buf) {
        buf.writeInt(message.entityID);
        buf.writeBoolean(message.dance);
        buf.writeBlockPos(message.jukeBox);
    }

    public static class Handler {

        public static void handle(DanceJukeboxMessage message, Supplier<NetworkEvent.Context> context) {
            ((NetworkEvent.Context) context.get()).setPacketHandled(true);
            ((NetworkEvent.Context) context.get()).enqueueWork(() -> {
                Player player = ((NetworkEvent.Context) context.get()).getSender();
                if (((NetworkEvent.Context) context.get()).getDirection().getReceptionSide() == LogicalSide.CLIENT) {
                    player = Citadel.PROXY.getClientSidePlayer();
                }
                if (player != null) {
                    Citadel.PROXY.handleJukeboxPacket(player.m_9236_(), message.entityID, message.jukeBox, message.dance);
                }
            });
        }
    }
}