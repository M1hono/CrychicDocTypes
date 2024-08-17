package snownee.kiwi.mixin.client;

import net.minecraft.client.telemetry.ClientTelemetryManager;
import net.minecraft.client.telemetry.TelemetryEventSender;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;
import snownee.kiwi.Kiwi;
import snownee.kiwi.KiwiClientConfig;

@Mixin(value = { ClientTelemetryManager.class }, priority = -114514)
public class ClientTelemetryManagerMixin {

    @Inject(method = { "createEventSender" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$createEventSender(CallbackInfoReturnable<TelemetryEventSender> ci) {
        if (KiwiClientConfig.noMicrosoftTelemetry) {
            Kiwi.LOGGER.info("Canceling Microsoft telemetry");
            ci.setReturnValue(TelemetryEventSender.DISABLED);
        }
    }
}