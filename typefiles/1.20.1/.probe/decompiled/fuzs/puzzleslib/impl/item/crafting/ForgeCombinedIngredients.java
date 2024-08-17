package fuzs.puzzleslib.impl.item.crafting;

import fuzs.puzzleslib.api.item.v2.crafting.CombinedIngredients;
import java.util.Objects;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraftforge.common.crafting.CompoundIngredient;
import net.minecraftforge.common.crafting.DifferenceIngredient;
import net.minecraftforge.common.crafting.IntersectionIngredient;
import net.minecraftforge.common.crafting.PartialNBTIngredient;
import net.minecraftforge.common.crafting.StrictNBTIngredient;

public final class ForgeCombinedIngredients implements CombinedIngredients {

    @Override
    public Ingredient all(Ingredient... ingredients) {
        Objects.requireNonNull(ingredients, "ingredients is null");
        for (Ingredient ingredient : ingredients) {
            Objects.requireNonNull(ingredient, "ingredient is null");
        }
        return IntersectionIngredient.of(ingredients);
    }

    @Override
    public Ingredient any(Ingredient... ingredients) {
        Objects.requireNonNull(ingredients, "ingredients is null");
        for (Ingredient ingredient : ingredients) {
            Objects.requireNonNull(ingredient, "ingredient is null");
        }
        return CompoundIngredient.of(ingredients);
    }

    @Override
    public Ingredient difference(Ingredient ingredient, Ingredient subtracted) {
        Objects.requireNonNull(ingredient, "ingredient is null");
        Objects.requireNonNull(subtracted, "subtracted is null");
        return DifferenceIngredient.of(ingredient, subtracted);
    }

    @Override
    public Ingredient nbt(ItemStack stack, boolean strict) {
        Objects.requireNonNull(stack, "stack is null");
        if (strict) {
            return StrictNBTIngredient.of(stack);
        } else {
            CompoundTag tag = stack.getTag();
            Objects.requireNonNull(tag, "tag is null");
            return PartialNBTIngredient.of(tag, stack.getItem());
        }
    }
}