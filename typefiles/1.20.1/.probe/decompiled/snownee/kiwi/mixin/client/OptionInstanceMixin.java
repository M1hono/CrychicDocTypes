package snownee.kiwi.mixin.client;

import net.minecraft.client.Minecraft;
import net.minecraft.client.OptionInstance;
import net.minecraft.client.gui.screens.MouseSettingsScreen;
import net.minecraft.client.gui.screens.Screen;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ OptionInstance.class })
public class OptionInstanceMixin {

    @Shadow
    Object value;

    @Inject(at = { @At("HEAD") }, method = { "get" }, cancellable = true)
    private void fastscroll_get(CallbackInfoReturnable<Object> ci) {
        Minecraft mc = Minecraft.getInstance();
        if (!(mc.screen instanceof MouseSettingsScreen)) {
            if (mc.options != null && this == mc.options.mouseWheelSensitivity() && Screen.hasControlDown()) {
                ci.setReturnValue((Double) this.value * 4.0);
            }
        }
    }
}