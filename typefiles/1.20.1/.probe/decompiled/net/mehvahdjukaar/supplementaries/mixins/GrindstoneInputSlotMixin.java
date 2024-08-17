package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(targets = { "net.minecraft.world.inventory.GrindstoneMenu$2", "net.minecraft.world.inventory.GrindstoneMenu$2" })
public abstract class GrindstoneInputSlotMixin {

    @Inject(method = { "mayPlace" }, at = { @At("HEAD") }, cancellable = true)
    private void mayPlace(ItemStack stack, CallbackInfoReturnable<Boolean> cir) {
        Item i = stack.getItem();
        if ((i == Items.ENCHANTED_GOLDEN_APPLE || i == ModRegistry.BOMB_BLUE_ITEM.get()) && (Boolean) CommonConfigs.Tweaks.APPLE_DISENCHANT.get()) {
            cir.setReturnValue(true);
            cir.cancel();
        }
    }
}