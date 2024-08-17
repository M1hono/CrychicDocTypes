package org.embeddedt.modernfix.forge.mixin.feature.branding;

import com.google.common.collect.ImmutableList.Builder;
import java.util.Optional;
import net.minecraftforge.fml.ModContainer;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.internal.BrandingControl;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.LocalCapture;

@Mixin(value = { BrandingControl.class }, remap = false, priority = 1100)
public class BrandingControlMixin {

    @Inject(method = { "computeBranding" }, at = { @At(value = "INVOKE", target = "Lnet/minecraftforge/fml/ModList;get()Lnet/minecraftforge/fml/ModList;") }, locals = LocalCapture.CAPTURE_FAILHARD, require = 0)
    private static void addModernFixBranding(CallbackInfo ci, Builder<String> builder) {
        Optional<? extends ModContainer> mfContainer = ModList.get().getModContainerById("modernfix");
        if (mfContainer.isPresent()) {
            builder.add("ModernFix " + ((ModContainer) mfContainer.get()).getModInfo().getVersion().toString());
        }
    }
}