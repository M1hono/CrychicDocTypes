package snownee.kiwi.contributor.network;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.ImmutableMap.Builder;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.function.Consumer;
import java.util.function.Function;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import snownee.kiwi.contributor.Contributors;
import snownee.kiwi.network.KPacketTarget;
import snownee.kiwi.network.KiwiPacket;
import snownee.kiwi.network.PacketHandler;
import snownee.kiwi.util.Util;

@KiwiPacket(value = "sync_cosmetic", dir = KiwiPacket.Direction.PLAY_TO_CLIENT)
public class SSyncCosmeticPacket extends PacketHandler {

    public static SSyncCosmeticPacket I;

    @Override
    public CompletableFuture<FriendlyByteBuf> receive(Function<Runnable, CompletableFuture<FriendlyByteBuf>> executor, FriendlyByteBuf buf, ServerPlayer sender) {
        Builder<String, ResourceLocation> builder = ImmutableMap.builder();
        int size = buf.readVarInt();
        for (int i = 0; i < size; i++) {
            String k = buf.readUtf();
            String v = buf.readUtf();
            builder.put(k, Util.RL(v));
        }
        return (CompletableFuture<FriendlyByteBuf>) executor.apply((Runnable) () -> Contributors.changeCosmetic(builder.build()));
    }

    public static void send(Map<String, ResourceLocation> map, ServerPlayer player, boolean except) {
        Consumer<FriendlyByteBuf> consumer = buf -> {
            buf.writeVarInt(map.size());
            map.forEach((k, v) -> {
                buf.writeUtf(k);
                buf.writeResourceLocation(v);
            });
        };
        if (except) {
            I.send(KPacketTarget.allExcept(player), consumer);
        } else {
            I.send(player, consumer);
        }
    }
}