package org.embeddedt.modernfix.forge.mixin.perf.datapack_reload_exceptions;

import net.minecraft.world.item.crafting.RecipeManager;
import org.slf4j.Logger;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin(value = { RecipeManager.class }, priority = 2000)
public class RecipeManagerMixin {

    @Redirect(method = { "apply(Ljava/util/Map;Lnet/minecraft/server/packs/resources/ResourceManager;Lnet/minecraft/util/profiling/ProfilerFiller;)V" }, at = @At(value = "INVOKE", target = "Lorg/slf4j/Logger;error(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;)V", remap = false), require = 0)
    private void silenceException(Logger instance, String s, Object location, Object exc) {
        instance.error(s + ": {}", location, exc.toString());
    }
}