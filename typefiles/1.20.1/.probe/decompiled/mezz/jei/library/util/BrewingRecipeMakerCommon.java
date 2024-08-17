package mezz.jei.library.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import mezz.jei.api.constants.VanillaTypes;
import mezz.jei.api.ingredients.IIngredientHelper;
import mezz.jei.api.ingredients.subtypes.UidContext;
import mezz.jei.api.recipe.vanilla.IJeiBrewingRecipe;
import mezz.jei.api.recipe.vanilla.IVanillaRecipeFactory;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.common.platform.IPlatformIngredientHelper;
import mezz.jei.common.platform.IPlatformRegistry;
import mezz.jei.common.platform.Services;
import mezz.jei.common.util.ErrorUtil;
import mezz.jei.library.ingredients.IngredientSet;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.alchemy.Potion;
import net.minecraft.world.item.alchemy.PotionBrewing;
import net.minecraft.world.item.alchemy.PotionUtils;
import net.minecraft.world.item.alchemy.Potions;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BrewingRecipeMakerCommon {

    private static final Logger LOGGER = LogManager.getLogger();

    public static Set<IJeiBrewingRecipe> getVanillaBrewingRecipes(IVanillaRecipeFactory recipeFactory, IIngredientManager ingredientManager, BrewingRecipeMakerCommon.IVanillaPotionOutputSupplier vanillaOutputSupplier) {
        Set<IJeiBrewingRecipe> recipes = new HashSet();
        IPlatformRegistry<Potion> potionRegistry = Services.PLATFORM.getRegistry(Registries.POTION);
        IngredientSet<ItemStack> knownPotions = getBaseKnownPotions(ingredientManager, potionRegistry);
        List<ItemStack> potionReagents = ingredientManager.getAllItemStacks().stream().filter(BrewingRecipeMakerCommon::isIngredient).toList();
        boolean foundNewPotions;
        do {
            List<ItemStack> newPotions = getNewPotions(recipeFactory, potionRegistry, knownPotions, potionReagents, vanillaOutputSupplier, recipes);
            foundNewPotions = !newPotions.isEmpty();
            knownPotions.addAll(newPotions);
        } while (foundNewPotions);
        return recipes;
    }

    private static boolean isIngredient(ItemStack itemStack) {
        try {
            return PotionBrewing.isIngredient(itemStack);
        } catch (LinkageError | RuntimeException var3) {
            String itemStackInfo = ErrorUtil.getItemStackInfo(itemStack);
            LOGGER.error("Failed to check if item is a potion reagent {}.", itemStackInfo, var3);
            return false;
        }
    }

    private static IngredientSet<ItemStack> getBaseKnownPotions(IIngredientManager ingredientManager, IPlatformRegistry<Potion> potionRegistry) {
        IPlatformIngredientHelper ingredientHelper = Services.PLATFORM.getIngredientHelper();
        List<ItemStack> potionContainers = ingredientHelper.getPotionContainers().stream().flatMap(potionItem -> Arrays.stream(potionItem.getItems())).toList();
        IIngredientHelper<ItemStack> itemStackHelper = ingredientManager.getIngredientHelper(VanillaTypes.ITEM_STACK);
        IngredientSet<ItemStack> knownPotions = IngredientSet.create(itemStackHelper, UidContext.Ingredient);
        potionRegistry.getValues().filter(potion -> potion != Potions.EMPTY).forEach(potion -> {
            for (ItemStack potionContainer : potionContainers) {
                ItemStack result = PotionUtils.setPotion(potionContainer.copy(), potion);
                knownPotions.add(result);
            }
        });
        return knownPotions;
    }

    private static List<ItemStack> getNewPotions(IVanillaRecipeFactory recipeFactory, IPlatformRegistry<Potion> potionRegistry, Collection<ItemStack> knownPotions, List<ItemStack> potionReagents, BrewingRecipeMakerCommon.IVanillaPotionOutputSupplier vanillaOutputSupplier, Collection<IJeiBrewingRecipe> recipes) {
        List<ItemStack> newPotions = new ArrayList();
        for (ItemStack potionInput : knownPotions) {
            for (ItemStack potionReagent : potionReagents) {
                ItemStack potionOutput = vanillaOutputSupplier.getOutput(potionInput.copy(), potionReagent);
                if (!potionOutput.isEmpty()) {
                    if (potionInput.getItem() == potionOutput.getItem()) {
                        Potion potionOutputType = PotionUtils.getPotion(potionOutput);
                        if (potionOutputType == Potions.WATER) {
                            continue;
                        }
                        Potion potionInputType = PotionUtils.getPotion(potionInput);
                        ResourceLocation inputId = (ResourceLocation) potionRegistry.getRegistryName(potionInputType).orElse(null);
                        ResourceLocation outputId = (ResourceLocation) potionRegistry.getRegistryName(potionOutputType).orElse(null);
                        if (Objects.equals(inputId, outputId)) {
                            continue;
                        }
                    }
                    IJeiBrewingRecipe recipe = recipeFactory.createBrewingRecipe(List.of(potionReagent), potionInput.copy(), potionOutput);
                    if (!recipes.contains(recipe)) {
                        recipes.add(recipe);
                        newPotions.add(potionOutput);
                    }
                }
            }
        }
        return newPotions;
    }

    @FunctionalInterface
    public interface IVanillaPotionOutputSupplier {

        ItemStack getOutput(ItemStack var1, ItemStack var2);
    }
}