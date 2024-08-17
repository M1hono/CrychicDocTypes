package net.mehvahdjukaar.supplementaries.common.network;

import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.common.misc.globe.GlobeData;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.FriendlyByteBuf;

public class ClientBoundSyncGlobeDataPacket implements Message {

    public final GlobeData data;

    public ClientBoundSyncGlobeDataPacket(FriendlyByteBuf buffer) {
        this.data = new GlobeData(buffer.readNbt());
    }

    public ClientBoundSyncGlobeDataPacket(GlobeData data) {
        this.data = data;
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf buf) {
        buf.writeNbt(this.data.save(new CompoundTag()));
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        GlobeData.setClientData(this.data);
        Supplementaries.LOGGER.info("Synced Globe data");
    }
}