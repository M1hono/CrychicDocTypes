package team.lodestar.lodestone.recipe;

import com.google.gson.JsonObject;
import javax.annotation.Nonnull;
import net.minecraft.core.RegistryAccess;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.ShapedRecipe;
import team.lodestar.lodestone.registry.common.LodestoneRecipeSerializerRegistry;

public class NBTCarryRecipe extends ShapedRecipe {

    public static final String NAME = "nbt_carry";

    public final Ingredient nbtCarry;

    public NBTCarryRecipe(ShapedRecipe compose, Ingredient nbtCarry, ItemStack output) {
        super(compose.getId(), compose.getGroup(), compose.category(), compose.getWidth(), compose.getHeight(), compose.getIngredients(), output);
        this.nbtCarry = nbtCarry;
    }

    @Nonnull
    @Override
    public ItemStack assemble(@Nonnull CraftingContainer inv, @Nonnull RegistryAccess registryAccess) {
        ItemStack out = super.assemble(inv, registryAccess);
        for (int i = 0; i < inv.m_6643_(); i++) {
            ItemStack stack = inv.m_8020_(i);
            if (!stack.isEmpty() && this.nbtCarry.test(stack) && stack.hasTag()) {
                out.setTag(stack.getTag());
                break;
            }
        }
        return out;
    }

    @Nonnull
    @Override
    public RecipeSerializer<?> getSerializer() {
        return LodestoneRecipeSerializerRegistry.NBT_CARRY_RECIPE_SERIALIZER.get();
    }

    public static class Serializer implements RecipeSerializer<NBTCarryRecipe> {

        public NBTCarryRecipe fromJson(@Nonnull ResourceLocation recipeId, @Nonnull JsonObject json) {
            return new NBTCarryRecipe((ShapedRecipe) f_44076_.fromJson(recipeId, json), Ingredient.fromJson(GsonHelper.getAsJsonObject(json, "nbtCarry")), ShapedRecipe.itemStackFromJson(GsonHelper.getAsJsonObject(json, "result")));
        }

        public NBTCarryRecipe fromNetwork(@Nonnull ResourceLocation recipeId, @Nonnull FriendlyByteBuf buffer) {
            ShapedRecipe recipe = (ShapedRecipe) f_44076_.fromNetwork(recipeId, buffer);
            Ingredient nbtCarry = Ingredient.fromNetwork(buffer);
            ItemStack stack = buffer.readItem();
            return new NBTCarryRecipe(recipe, nbtCarry, stack);
        }

        public void toNetwork(@Nonnull FriendlyByteBuf buffer, @Nonnull NBTCarryRecipe recipe) {
            f_44076_.toNetwork(buffer, recipe);
            recipe.nbtCarry.toNetwork(buffer);
            buffer.writeItem(recipe.f_44149_);
        }
    }
}