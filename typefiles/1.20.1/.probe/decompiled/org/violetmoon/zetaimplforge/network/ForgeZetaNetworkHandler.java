package org.violetmoon.zetaimplforge.network;

import java.util.List;
import java.util.function.Function;
import java.util.function.Supplier;
import net.minecraft.network.protocol.Packet;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.network.HandshakeHandler;
import net.minecraftforge.network.NetworkDirection;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.NetworkRegistry;
import net.minecraftforge.network.simple.SimpleChannel;
import org.apache.commons.lang3.tuple.Pair;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.network.IZetaMessage;
import org.violetmoon.zeta.network.ZetaHandshakeMessage;
import org.violetmoon.zeta.network.ZetaNetworkDirection;
import org.violetmoon.zeta.network.ZetaNetworkHandler;
import org.violetmoon.zetaimplforge.ForgeZeta;

public class ForgeZetaNetworkHandler extends ZetaNetworkHandler {

    protected final SimpleChannel channel;

    protected int i = 0;

    public ForgeZetaNetworkHandler(ForgeZeta zeta, int protocolVersion) {
        super(zeta, protocolVersion);
        String protocolStr = Integer.toString(protocolVersion);
        this.channel = NetworkRegistry.ChannelBuilder.named(new ResourceLocation(zeta.modid, "main")).networkProtocolVersion(() -> protocolStr).clientAcceptedVersions(protocolStr::equals).serverAcceptedVersions(protocolStr::equals).simpleChannel();
    }

    protected <T extends IZetaMessage> SimpleChannel.MessageBuilder<T> builder(Class<T> clazz, NetworkDirection dir) {
        return this.builder(clazz, this.i++, dir);
    }

    protected <T extends IZetaMessage> SimpleChannel.MessageBuilder<T> builder(Class<T> clazz, int id, NetworkDirection dir) {
        return this.channel.<T>messageBuilder(clazz, id, dir).encoder(this.serializer::writeObject).decoder(buf -> this.serializer.instantiateAndReadObject(clazz, buf));
    }

    @Override
    public <T extends IZetaMessage> void register(Class<T> clazz, ZetaNetworkDirection dir) {
        NetworkDirection forgeDir = toForge(dir);
        this.builder(clazz, forgeDir).consumerNetworkThread((msg, ctxS) -> this.handlePacket(msg, ctxS, forgeDir)).add();
    }

    @Override
    public <T extends ZetaHandshakeMessage> void registerLogin(Class<T> clazz, ZetaNetworkDirection dir, int id, boolean hasResponse, @Nullable Function<Boolean, List<Pair<String, T>>> loginPacketGenerators) {
        NetworkDirection forgeDir = toForge(dir);
        SimpleChannel.MessageBuilder<T> builder = this.<T>builder(clazz, id, forgeDir).loginIndex(ZetaHandshakeMessage::getLoginIndex, ZetaHandshakeMessage::setLoginIndex);
        if (loginPacketGenerators != null) {
            builder.buildLoginPacketList(loginPacketGenerators);
        }
        if (dir == ZetaNetworkDirection.LOGIN_TO_SERVER) {
            builder = builder.consumerNetworkThread(HandshakeHandler.indexFirst((handshakeCrap, msg, ctxS) -> this.handlePacket(msg, ctxS, forgeDir)));
        } else {
            builder = builder.consumerNetworkThread((msg, ctxS) -> this.handlePacket(msg, ctxS, forgeDir));
        }
        if (!hasResponse) {
            builder = builder.noResponse();
        }
        builder.add();
    }

    private <T extends IZetaMessage> void handlePacket(T msg, Supplier<NetworkEvent.Context> contextSupplier, NetworkDirection forgeDir) {
        NetworkEvent.Context context = (NetworkEvent.Context) contextSupplier.get();
        if (context.getDirection() == forgeDir) {
            context.setPacketHandled(msg.receive(new ForgeNetworkEventContextImpl(context, this.channel)));
        }
    }

    @Override
    public void sendToPlayer(IZetaMessage msg, ServerPlayer player) {
        this.channel.sendTo(msg, player.connection.connection, NetworkDirection.PLAY_TO_CLIENT);
    }

    @Override
    public void sendToServer(IZetaMessage msg) {
        this.channel.sendToServer(msg);
    }

    @Override
    public Packet<?> wrapInVanilla(IZetaMessage msg, ZetaNetworkDirection dir) {
        return this.channel.toVanillaPacket(msg, toForge(dir));
    }

    public static ZetaNetworkDirection fromForge(NetworkDirection dir) {
        return switch(dir) {
            case PLAY_TO_SERVER ->
                ZetaNetworkDirection.PLAY_TO_SERVER;
            case PLAY_TO_CLIENT ->
                ZetaNetworkDirection.PLAY_TO_CLIENT;
            case LOGIN_TO_SERVER ->
                ZetaNetworkDirection.LOGIN_TO_SERVER;
            case LOGIN_TO_CLIENT ->
                ZetaNetworkDirection.LOGIN_TO_CLIENT;
        };
    }

    public static NetworkDirection toForge(ZetaNetworkDirection dir) {
        return switch(dir) {
            case PLAY_TO_SERVER ->
                NetworkDirection.PLAY_TO_SERVER;
            case PLAY_TO_CLIENT ->
                NetworkDirection.PLAY_TO_CLIENT;
            case LOGIN_TO_SERVER ->
                NetworkDirection.LOGIN_TO_SERVER;
            case LOGIN_TO_CLIENT ->
                NetworkDirection.LOGIN_TO_CLIENT;
        };
    }
}