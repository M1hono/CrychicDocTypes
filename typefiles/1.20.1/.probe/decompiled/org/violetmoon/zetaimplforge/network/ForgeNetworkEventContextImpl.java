package org.violetmoon.zetaimplforge.network;

import java.util.concurrent.CompletableFuture;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.simple.SimpleChannel;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.network.IZetaNetworkEventContext;
import org.violetmoon.zeta.network.ZetaHandshakeMessage;

public class ForgeNetworkEventContextImpl implements IZetaNetworkEventContext {

    private final NetworkEvent.Context ctx;

    private final SimpleChannel channel;

    public ForgeNetworkEventContextImpl(NetworkEvent.Context ctx, SimpleChannel channel) {
        this.ctx = ctx;
        this.channel = channel;
    }

    @Override
    public CompletableFuture<Void> enqueueWork(Runnable runnable) {
        return this.ctx.enqueueWork(runnable);
    }

    @Nullable
    @Override
    public ServerPlayer getSender() {
        return this.ctx.getSender();
    }

    @Override
    public void reply(ZetaHandshakeMessage msg) {
        this.channel.reply(msg, this.ctx);
    }
}