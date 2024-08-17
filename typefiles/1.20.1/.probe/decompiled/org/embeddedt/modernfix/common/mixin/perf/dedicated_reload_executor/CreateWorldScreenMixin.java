package org.embeddedt.modernfix.common.mixin.perf.dedicated_reload_executor;

import java.util.concurrent.Executor;
import net.minecraft.client.gui.screens.worldselection.CreateWorldScreen;
import org.embeddedt.modernfix.ModernFix;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;

@Mixin({ CreateWorldScreen.class })
@ClientOnlyMixin
public class CreateWorldScreenMixin {

    @ModifyArg(method = { "applyNewPackConfig" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/server/WorldLoader;load(Lnet/minecraft/server/WorldLoader$InitConfig;Lnet/minecraft/server/WorldLoader$WorldDataSupplier;Lnet/minecraft/server/WorldLoader$ResultFactory;Ljava/util/concurrent/Executor;Ljava/util/concurrent/Executor;)Ljava/util/concurrent/CompletableFuture;"), index = 3)
    private Executor getReloadExecutorService(Executor e) {
        return ModernFix.resourceReloadExecutor();
    }

    @ModifyArg(method = { "openFresh" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/server/WorldLoader;load(Lnet/minecraft/server/WorldLoader$InitConfig;Lnet/minecraft/server/WorldLoader$WorldDataSupplier;Lnet/minecraft/server/WorldLoader$ResultFactory;Ljava/util/concurrent/Executor;Ljava/util/concurrent/Executor;)Ljava/util/concurrent/CompletableFuture;"), index = 3)
    private static Executor getCreationExecutorService(Executor e) {
        return ModernFix.resourceReloadExecutor();
    }
}