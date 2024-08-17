package team.lodestar.lodestone.mixin.client;

import net.minecraft.client.renderer.GameRenderer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import team.lodestar.lodestone.handlers.RenderHandler;
import team.lodestar.lodestone.systems.postprocess.PostProcessHandler;

@Mixin({ GameRenderer.class })
public class GameRendererMixin {

    @Inject(method = { "resize" }, at = { @At("HEAD") })
    public void lodestone$injectionResizeListener(int width, int height, CallbackInfo ci) {
        RenderHandler.resize(width, height);
        PostProcessHandler.resize(width, height);
    }
}