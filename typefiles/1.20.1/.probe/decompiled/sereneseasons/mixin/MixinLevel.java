package sereneseasons.mixin;

import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;
import sereneseasons.season.SeasonHooks;

@Mixin({ Level.class })
public class MixinLevel {

    @Inject(method = { "isRainingAt" }, at = { @At("HEAD") }, cancellable = true)
    public void onIsRainingAt(BlockPos pos, CallbackInfoReturnable<Boolean> cir) {
        cir.setReturnValue(SeasonHooks.isRainingAtHook((Level) this, pos));
    }
}