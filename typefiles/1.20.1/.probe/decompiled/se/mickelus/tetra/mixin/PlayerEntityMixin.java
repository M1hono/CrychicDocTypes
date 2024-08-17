package se.mickelus.tetra.mixin;

import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import se.mickelus.tetra.items.modular.ItemModularHandheld;

@Mixin({ Player.class })
public abstract class PlayerEntityMixin {

    @Inject(at = { @At(value = "INVOKE", target = "Lnet/minecraft/world/entity/player/Player;stopUsingItem()V", ordinal = 0) }, method = { "disableShield" })
    private void disableShield(boolean isGuaranteed, CallbackInfo callback) {
        ItemStack itemStack = this.getInstance().m_21211_();
        if (itemStack.getItem() instanceof ItemModularHandheld) {
            ((ItemModularHandheld) itemStack.getItem()).onShieldDisabled(this.getInstance(), itemStack);
        }
    }

    private Player getInstance() {
        return (Player) this;
    }
}