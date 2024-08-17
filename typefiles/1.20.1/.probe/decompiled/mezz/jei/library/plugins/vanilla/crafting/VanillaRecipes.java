package mezz.jei.library.plugins.vanilla.crafting;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import mezz.jei.api.recipe.category.IRecipeCategory;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.common.util.ErrorUtil;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.world.Container;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.crafting.BlastingRecipe;
import net.minecraft.world.item.crafting.CampfireCookingRecipe;
import net.minecraft.world.item.crafting.CraftingRecipe;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeManager;
import net.minecraft.world.item.crafting.RecipeType;
import net.minecraft.world.item.crafting.SmeltingRecipe;
import net.minecraft.world.item.crafting.SmithingRecipe;
import net.minecraft.world.item.crafting.SmokingRecipe;
import net.minecraft.world.item.crafting.StonecutterRecipe;

public final class VanillaRecipes {

    private final RecipeManager recipeManager;

    private final IIngredientManager ingredientManager;

    public VanillaRecipes(IIngredientManager ingredientManager) {
        Minecraft minecraft = Minecraft.getInstance();
        ErrorUtil.checkNotNull(minecraft, "minecraft");
        ClientLevel world = minecraft.level;
        ErrorUtil.checkNotNull(world, "minecraft world");
        this.recipeManager = world.getRecipeManager();
        this.ingredientManager = ingredientManager;
    }

    public Map<Boolean, List<CraftingRecipe>> getCraftingRecipes(IRecipeCategory<CraftingRecipe> craftingCategory) {
        CategoryRecipeValidator<CraftingRecipe> validator = new CategoryRecipeValidator<>(craftingCategory, this.ingredientManager, 9);
        return (Map<Boolean, List<CraftingRecipe>>) this.recipeManager.<CraftingContainer, CraftingRecipe>getAllRecipesFor(RecipeType.CRAFTING).stream().filter(validator::isRecipeValid).collect(Collectors.partitioningBy(validator::isRecipeHandled));
    }

    public List<StonecutterRecipe> getStonecuttingRecipes(IRecipeCategory<StonecutterRecipe> stonecuttingCategory) {
        CategoryRecipeValidator<StonecutterRecipe> validator = new CategoryRecipeValidator<>(stonecuttingCategory, this.ingredientManager, 1);
        return getValidHandledRecipes(this.recipeManager, RecipeType.STONECUTTING, validator);
    }

    public List<SmeltingRecipe> getFurnaceRecipes(IRecipeCategory<SmeltingRecipe> furnaceCategory) {
        CategoryRecipeValidator<SmeltingRecipe> validator = new CategoryRecipeValidator<>(furnaceCategory, this.ingredientManager, 1);
        return getValidHandledRecipes(this.recipeManager, RecipeType.SMELTING, validator);
    }

    public List<SmokingRecipe> getSmokingRecipes(IRecipeCategory<SmokingRecipe> smokingCategory) {
        CategoryRecipeValidator<SmokingRecipe> validator = new CategoryRecipeValidator<>(smokingCategory, this.ingredientManager, 1);
        return getValidHandledRecipes(this.recipeManager, RecipeType.SMOKING, validator);
    }

    public List<BlastingRecipe> getBlastingRecipes(IRecipeCategory<BlastingRecipe> blastingCategory) {
        CategoryRecipeValidator<BlastingRecipe> validator = new CategoryRecipeValidator<>(blastingCategory, this.ingredientManager, 1);
        return getValidHandledRecipes(this.recipeManager, RecipeType.BLASTING, validator);
    }

    public List<CampfireCookingRecipe> getCampfireCookingRecipes(IRecipeCategory<CampfireCookingRecipe> campfireCategory) {
        CategoryRecipeValidator<CampfireCookingRecipe> validator = new CategoryRecipeValidator<>(campfireCategory, this.ingredientManager, 1);
        return getValidHandledRecipes(this.recipeManager, RecipeType.CAMPFIRE_COOKING, validator);
    }

    public List<SmithingRecipe> getSmithingRecipes(IRecipeCategory<SmithingRecipe> smithingCategory) {
        CategoryRecipeValidator<SmithingRecipe> validator = new CategoryRecipeValidator<>(smithingCategory, this.ingredientManager, 0);
        return getValidHandledRecipes(this.recipeManager, RecipeType.SMITHING, validator);
    }

    private static <C extends Container, T extends Recipe<C>> List<T> getValidHandledRecipes(RecipeManager recipeManager, RecipeType<T> recipeType, CategoryRecipeValidator<T> validator) {
        return recipeManager.getAllRecipesFor(recipeType).stream().filter(r -> validator.isRecipeValid((T) r) && validator.isRecipeHandled((T) r)).toList();
    }
}