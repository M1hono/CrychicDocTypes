package net.raphimc.immediatelyfast.forge.injection.mixins.hud_batching;

import net.minecraftforge.client.gui.overlay.ForgeGui;
import net.raphimc.immediatelyfast.ImmediatelyFast;
import net.raphimc.immediatelyfast.feature.batching.BatchingBuffers;
import net.raphimc.immediatelyfast.injection.processors.InjectAboveEverything;
import net.raphimc.immediatelyfast.injection.processors.InjectOnAllReturns;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(value = { ForgeGui.class }, priority = 1500)
public abstract class MixinForgeGui {

    @InjectAboveEverything
    @Inject(method = { "renderArmor", "renderAir", "renderFood", "renderTitle", "renderHealthMount" }, at = { @At("HEAD") })
    private void beginBatching(CallbackInfo ci) {
        if (ImmediatelyFast.runtimeConfig.hud_batching) {
            BatchingBuffers.beginHudBatching();
        }
    }

    @InjectOnAllReturns
    @Inject(method = { "renderArmor", "renderAir", "renderFood", "renderTitle", "renderHealthMount" }, at = { @At("RETURN") })
    private void endBatching(CallbackInfo ci) {
        if (ImmediatelyFast.runtimeConfig.hud_batching) {
            BatchingBuffers.endHudBatching();
        }
    }
}