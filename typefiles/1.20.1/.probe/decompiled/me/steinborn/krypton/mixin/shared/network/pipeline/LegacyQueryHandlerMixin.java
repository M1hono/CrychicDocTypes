package me.steinborn.krypton.mixin.shared.network.pipeline;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import net.minecraft.server.network.LegacyQueryHandler;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ LegacyQueryHandler.class })
public abstract class LegacyQueryHandlerMixin {

    @Inject(method = { "channelRead" }, at = { @At("HEAD") }, cancellable = true)
    public void channelRead(ChannelHandlerContext ctx, Object msg, CallbackInfo ci) throws Exception {
        if (!ctx.channel().isActive()) {
            ((ByteBuf) msg).clear();
            ci.cancel();
        }
    }
}