package snownee.kiwi.mixin;

import net.minecraft.core.RegistryAccess;
import net.minecraft.server.ReloadableServerResources;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import snownee.kiwi.Kiwi;

@Mixin({ ReloadableServerResources.class })
public class ReloadableServerResourcesMixin {

    @Inject(method = { "updateRegistryTags(Lnet/minecraft/core/RegistryAccess;)V" }, at = { @At("RETURN") })
    private void kiwi$updateRegistryTags(RegistryAccess registryAccess, CallbackInfo ci) {
        Kiwi.onTagsUpdated();
    }
}