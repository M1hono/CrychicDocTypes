package net.mehvahdjukaar.supplementaries.common.network;

import java.util.UUID;
import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.mehvahdjukaar.supplementaries.common.misc.songs.SongsManager;
import net.minecraft.network.FriendlyByteBuf;

public class ClientBoundSetSongPacket implements Message {

    private final String song;

    private final UUID id;

    public ClientBoundSetSongPacket(FriendlyByteBuf buf) {
        this.song = buf.readUtf();
        this.id = buf.readUUID();
    }

    public ClientBoundSetSongPacket(UUID id, String s) {
        this.song = s;
        this.id = id;
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf buf) {
        buf.writeUtf(this.song);
        buf.writeUUID(this.id);
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        SongsManager.setCurrentlyPlaying(this.id, this.song);
    }
}