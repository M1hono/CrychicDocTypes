package se.mickelus.tetra.mixin;

import net.minecraft.world.inventory.GrindstoneMenu;
import net.minecraft.world.item.ItemStack;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;
import se.mickelus.tetra.aspect.TetraEnchantmentHelper;
import se.mickelus.tetra.items.modular.IModularItem;

@Mixin({ GrindstoneMenu.class })
public class GrindstoneContainerMixin {

    @Inject(at = { @At("HEAD") }, method = { "removeNonCurses" }, cancellable = true)
    private void removeEnchantments(ItemStack itemStack, int damage, int count, CallbackInfoReturnable<ItemStack> callback) {
        if (itemStack.getItem() instanceof IModularItem) {
            ItemStack result = TetraEnchantmentHelper.removeAllEnchantments(itemStack.copy());
            callback.setReturnValue(result);
            callback.cancel();
        }
    }
}