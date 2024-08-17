package net.mehvahdjukaar.supplementaries.common.network;

import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.mehvahdjukaar.supplementaries.configs.ConfigUtils;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.server.level.ServerPlayer;

public class ServerBoundRequestConfigReloadPacket implements Message {

    public ServerBoundRequestConfigReloadPacket(FriendlyByteBuf buffer) {
    }

    public ServerBoundRequestConfigReloadPacket() {
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf friendlyByteBuf) {
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        ConfigUtils.configScreenReload((ServerPlayer) context.getSender());
    }
}