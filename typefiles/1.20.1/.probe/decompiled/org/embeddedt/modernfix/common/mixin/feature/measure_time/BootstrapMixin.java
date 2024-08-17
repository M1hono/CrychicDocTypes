package org.embeddedt.modernfix.common.mixin.feature.measure_time;

import com.google.common.base.Stopwatch;
import java.util.concurrent.TimeUnit;
import net.minecraft.server.Bootstrap;
import org.slf4j.Logger;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ Bootstrap.class })
public class BootstrapMixin {

    @Shadow
    @Final
    private static Logger LOGGER;

    private static Stopwatch startWatch;

    @Inject(method = { "bootStrap" }, at = { @At(value = "FIELD", opcode = 179, target = "Lnet/minecraft/server/Bootstrap;isBootstrapped:Z", ordinal = 0) })
    private static void recordStartTime(CallbackInfo ci) {
        startWatch = Stopwatch.createStarted();
    }

    @Inject(method = { "bootStrap" }, at = { @At("RETURN") })
    private static void printStartTime(CallbackInfo ci) {
        if (startWatch != null && startWatch.isRunning()) {
            startWatch.stop();
            LOGGER.info("Vanilla bootstrap took " + startWatch.elapsed(TimeUnit.MILLISECONDS) + " milliseconds");
        }
    }
}