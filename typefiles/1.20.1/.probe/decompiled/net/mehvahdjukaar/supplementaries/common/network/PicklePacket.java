package net.mehvahdjukaar.supplementaries.common.network;

import java.util.UUID;
import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.mehvahdjukaar.moonlight.api.platform.network.NetworkDir;
import net.mehvahdjukaar.supplementaries.client.renderers.entities.funny.PickleData;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;

public class PicklePacket implements Message {

    protected UUID playerID;

    protected final boolean on;

    private final boolean isJar;

    public PicklePacket(UUID appliesTo, boolean on, boolean isJar) {
        this.playerID = appliesTo;
        this.on = on;
        this.isJar = isJar;
    }

    public PicklePacket(FriendlyByteBuf buf) {
        this.on = buf.readBoolean();
        this.isJar = buf.readBoolean();
        if (buf.isReadable()) {
            this.playerID = buf.readUUID();
        }
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf buf) {
        buf.writeBoolean(this.on);
        buf.writeBoolean(this.isJar);
        if (this.playerID != null) {
            buf.writeUUID(this.playerID);
        }
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        if (context.getDirection() == NetworkDir.PLAY_TO_CLIENT) {
            PickleData.set(this.playerID, this.on, this.isJar);
        } else {
            Player player = context.getSender();
            UUID id = player.getGameProfile().getId();
            if (PickleData.isDev(id, this.isJar)) {
                PickleData.set(id, this.on, this.isJar);
                this.playerID = id;
                for (ServerPlayer p : player.m_20194_().getPlayerList().getPlayers()) {
                    if (p != player) {
                        ModNetwork.CHANNEL.sendToClientPlayer(p, new PicklePacket(this.playerID, this.on, this.isJar));
                    }
                }
            }
        }
    }
}