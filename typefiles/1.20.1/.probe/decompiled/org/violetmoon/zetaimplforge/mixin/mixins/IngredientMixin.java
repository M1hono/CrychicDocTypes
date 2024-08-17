package org.violetmoon.zetaimplforge.mixin.mixins;

import net.minecraft.world.item.crafting.Ingredient;
import net.minecraftforge.common.crafting.IIngredientSerializer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;
import org.violetmoon.zeta.recipe.IZetaIngredient;
import org.violetmoon.zeta.recipe.IZetaIngredientSerializer;
import org.violetmoon.zetaimplforge.registry.ForgeCraftingExtensionsRegistry;

@Mixin({ Ingredient.class })
public class IngredientMixin {

    @Inject(method = { "getSerializer" }, remap = false, at = { @At("HEAD") }, cancellable = true)
    public void blah(CallbackInfoReturnable<IIngredientSerializer<? extends Ingredient>> cir) {
        Ingredient self = (Ingredient) this;
        if (self instanceof IZetaIngredient<?> zIng) {
            IZetaIngredientSerializer<?> ser = zIng.zetaGetSerializer();
            IIngredientSerializer<? extends Ingredient> forge = (IIngredientSerializer<? extends Ingredient>) ((ForgeCraftingExtensionsRegistry) ser.getZeta().craftingExtensions).toForgeIngredientSerializers.get(ser);
            if (forge != null) {
                cir.setReturnValue(forge);
            }
        }
    }
}