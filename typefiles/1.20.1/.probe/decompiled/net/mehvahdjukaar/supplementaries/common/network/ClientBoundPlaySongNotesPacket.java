package net.mehvahdjukaar.supplementaries.common.network;

import it.unimi.dsi.fastutil.ints.IntList;
import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.LivingEntity;

public class ClientBoundPlaySongNotesPacket implements Message {

    public final IntList notes;

    public final int entityID;

    public ClientBoundPlaySongNotesPacket(FriendlyByteBuf buf) {
        this.entityID = buf.readVarInt();
        this.notes = buf.readIntIdList();
    }

    public ClientBoundPlaySongNotesPacket(IntList notes, LivingEntity player) {
        this.entityID = player.m_19879_();
        this.notes = notes;
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf buf) {
        buf.writeVarInt(this.entityID);
        buf.writeIntIdList(this.notes);
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        ClientReceivers.handlePlaySongNotesPacket(this);
    }
}