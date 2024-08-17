package org.embeddedt.modernfix.common.mixin.feature.measure_time;

import net.minecraft.server.packs.resources.ReloadableResourceManager;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;

@Mixin({ ReloadableResourceManager.class })
public class SimpleReloadableResourceManagerMixin {

    private static final boolean ENABLE_DEBUG_RELOADER = Boolean.getBoolean("modernfix.debugReloader");

    @ModifyArg(method = { "createReload" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/server/packs/resources/SimpleReloadInstance;create(Lnet/minecraft/server/packs/resources/ResourceManager;Ljava/util/List;Ljava/util/concurrent/Executor;Ljava/util/concurrent/Executor;Ljava/util/concurrent/CompletableFuture;Z)Lnet/minecraft/server/packs/resources/ReloadInstance;"), index = 5)
    private boolean enableDebugReloader(boolean bl) {
        return bl || ENABLE_DEBUG_RELOADER;
    }
}