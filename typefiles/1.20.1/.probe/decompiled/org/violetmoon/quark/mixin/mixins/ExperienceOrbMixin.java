package org.violetmoon.quark.mixin.mixins;

import java.util.function.Predicate;
import net.minecraft.world.entity.ExperienceOrb;
import net.minecraft.world.item.ItemStack;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;
import org.violetmoon.quark.content.experimental.module.GameNerfsModule;

@Mixin({ ExperienceOrb.class })
public class ExperienceOrbMixin {

    @ModifyArg(method = { "repairPlayerItems" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/world/item/enchantment/EnchantmentHelper;getRandomItemWith(Lnet/minecraft/world/item/enchantment/Enchantment;Lnet/minecraft/world/entity/LivingEntity;Ljava/util/function/Predicate;)Ljava/util/Map$Entry;"))
    private Predicate<ItemStack> alterPredicateForMending(Predicate<ItemStack> predicate) {
        return GameNerfsModule.limitMendingItems(predicate);
    }
}