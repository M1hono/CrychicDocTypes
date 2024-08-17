package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.client.QuiverArrowSelectGui;
import net.minecraft.client.KeyboardHandler;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.At.Shift;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ KeyboardHandler.class })
public abstract class KeyboardHandlerMixin {

    @Inject(method = { "keyPress" }, at = { @At(target = "Lcom/mojang/blaze3d/platform/InputConstants;getKey(II)Lcom/mojang/blaze3d/platform/InputConstants$Key;", value = "INVOKE", shift = Shift.BEFORE) }, cancellable = true)
    protected void onKeyPressCancellable(long windowPointer, int key, int scanCode, int action, int modifiers, CallbackInfo ci) {
        if (QuiverArrowSelectGui.isActive() && QuiverArrowSelectGui.onKeyPressed(key, action, modifiers)) {
            ci.cancel();
        }
    }
}