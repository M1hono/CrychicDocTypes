package io.github.lightman314.lightmanscurrency.common.crafting;

import com.google.common.collect.ImmutableList;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.world.item.crafting.RecipeManager;
import net.minecraft.world.level.Level;

public class RecipeValidator {

    public static List<CoinMintRecipe> getAllMintRecipes(Level level) {
        RecipeManager recipeManager = level.getRecipeManager();
        return recipeManager.getAllRecipesFor(RecipeTypes.COIN_MINT.get());
    }

    public static List<CoinMintRecipe> getValidMintRecipes(Level level) {
        List<CoinMintRecipe> results = new ArrayList();
        for (CoinMintRecipe recipe : getAllMintRecipes(level)) {
            if (recipe.isValid()) {
                results.add(recipe);
            }
        }
        return ImmutableList.copyOf(results);
    }

    public static List<TicketStationRecipe> getValidTicketStationRecipes(Level level) {
        RecipeManager recipeManager = level.getRecipeManager();
        return recipeManager.getAllRecipesFor(RecipeTypes.TICKET.get());
    }
}