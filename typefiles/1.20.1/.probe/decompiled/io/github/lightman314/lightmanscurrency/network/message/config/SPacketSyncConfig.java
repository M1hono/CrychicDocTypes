package io.github.lightman314.lightmanscurrency.network.message.config;

import io.github.lightman314.lightmanscurrency.api.config.SyncedConfigFile;
import io.github.lightman314.lightmanscurrency.network.packet.CustomPacket;
import io.github.lightman314.lightmanscurrency.network.packet.ServerToClientPacket;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Nonnull;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import org.jetbrains.annotations.Nullable;

public class SPacketSyncConfig extends ServerToClientPacket {

    public static final CustomPacket.Handler<SPacketSyncConfig> HANDLER = new SPacketSyncConfig.H();

    private final ResourceLocation configID;

    private final Map<String, String> data;

    public SPacketSyncConfig(@Nonnull ResourceLocation configID, @Nonnull Map<String, String> data) {
        this.configID = configID;
        this.data = data;
    }

    @Override
    public void encode(@Nonnull FriendlyByteBuf buffer) {
        buffer.writeResourceLocation(this.configID);
        buffer.writeInt(this.data.size());
        this.data.forEach((id, dat) -> {
            buffer.writeUtf(id);
            buffer.writeUtf(dat);
        });
    }

    private static class H extends CustomPacket.Handler<SPacketSyncConfig> {

        @Nonnull
        public SPacketSyncConfig decode(@Nonnull FriendlyByteBuf buffer) {
            ResourceLocation configID = buffer.readResourceLocation();
            int count = buffer.readInt();
            Map<String, String> data = new HashMap();
            for (int i = 0; i < count; i++) {
                String id = buffer.readUtf();
                String dat = buffer.readUtf();
                data.put(id, dat);
            }
            return new SPacketSyncConfig(configID, data);
        }

        protected void handle(@Nonnull SPacketSyncConfig message, @Nullable ServerPlayer sender) {
            SyncedConfigFile.handleSyncData(message.configID, message.data);
        }
    }
}