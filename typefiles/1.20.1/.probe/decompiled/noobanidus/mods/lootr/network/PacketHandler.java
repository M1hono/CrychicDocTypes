package noobanidus.mods.lootr.network;

import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.function.Supplier;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.common.util.FakePlayer;
import net.minecraftforge.network.NetworkDirection;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.NetworkRegistry;
import net.minecraftforge.network.PacketDistributor;
import net.minecraftforge.network.simple.SimpleChannel;

public class PacketHandler {

    private static final String PROTOCOL_VERSION = Integer.toString(2);

    public static final SimpleChannel HANDLER = NetworkRegistry.ChannelBuilder.named(new ResourceLocation("lootr", "main_network_channel")).clientAcceptedVersions(PROTOCOL_VERSION::equals).serverAcceptedVersions(PROTOCOL_VERSION::equals).networkProtocolVersion(() -> PROTOCOL_VERSION).simpleChannel();

    private static short index = 0;

    public static void registerMessages() {
        registerMessage(OpenCart.class, OpenCart::encode, OpenCart::new, OpenCart::handle);
        registerMessage(CloseCart.class, CloseCart::encode, CloseCart::new, CloseCart::handle);
        registerMessage(UpdateModelData.class, UpdateModelData::encode, UpdateModelData::new, UpdateModelData::handle);
    }

    public static void sendToInternal(Object msg, ServerPlayer player) {
        if (!(player instanceof FakePlayer)) {
            HANDLER.sendTo(msg, player.connection.connection, NetworkDirection.PLAY_TO_CLIENT);
        }
    }

    public static void sendToServerInternal(Object msg) {
        HANDLER.sendToServer(msg);
    }

    public static <MSG> void sendInternal(PacketDistributor.PacketTarget target, MSG message) {
        HANDLER.send(target, message);
    }

    public static <MSG> void registerMessage(Class<MSG> messageType, BiConsumer<MSG, FriendlyByteBuf> encoder, Function<FriendlyByteBuf, MSG> decoder, BiConsumer<MSG, Supplier<NetworkEvent.Context>> messageConsumer) {
        HANDLER.registerMessage(index, messageType, encoder, decoder, messageConsumer);
        index++;
        if (index > 255) {
            throw new RuntimeException("Too many messages!");
        }
    }
}