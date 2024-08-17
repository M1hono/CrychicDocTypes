package io.redspace.ironsspellbooks.jei;

import io.redspace.ironsspellbooks.api.registry.SpellRegistry;
import io.redspace.ironsspellbooks.api.spells.AbstractSpell;
import io.redspace.ironsspellbooks.api.spells.ISpellContainer;
import io.redspace.ironsspellbooks.api.util.Utils;
import io.redspace.ironsspellbooks.item.UpgradeOrbItem;
import java.util.Comparator;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import mezz.jei.api.recipe.vanilla.IVanillaRecipeFactory;
import mezz.jei.api.runtime.IIngredientManager;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.registries.ForgeRegistries;

public final class ArcaneAnvilRecipeMaker {

    private ArcaneAnvilRecipeMaker() {
    }

    public static List<ArcaneAnvilRecipe> getRecipes(IVanillaRecipeFactory vanillaRecipeFactory, IIngredientManager ingredientManager) {
        return Stream.of(getScrollRecipes(vanillaRecipeFactory, ingredientManager), getImbueRecipes(vanillaRecipeFactory, ingredientManager), getUpgradeRecipes(vanillaRecipeFactory, ingredientManager)).flatMap(x -> x).toList();
    }

    private static Stream<ArcaneAnvilRecipe> getScrollRecipes(IVanillaRecipeFactory vanillaRecipeFactory, IIngredientManager ingredientManager) {
        return SpellRegistry.getEnabledSpells().stream().sorted(Comparator.comparing(AbstractSpell::getSpellId)).flatMap(spell -> IntStream.rangeClosed(spell.getMinLevel(), spell.getMaxLevel() - 1).mapToObj(i -> new ArcaneAnvilRecipe(spell, i)));
    }

    private static Stream<ArcaneAnvilRecipe> getImbueRecipes(IVanillaRecipeFactory vanillaRecipeFactory, IIngredientManager ingredientManager) {
        return getVisibleItems().stream().filter(item -> Utils.canImbue(new ItemStack(item))).map(item -> new ArcaneAnvilRecipe(new ItemStack(item), (AbstractSpell) null));
    }

    private static Stream<ArcaneAnvilRecipe> getUpgradeRecipes(IVanillaRecipeFactory vanillaRecipeFactory, IIngredientManager ingredientManager) {
        return ForgeRegistries.ITEMS.getValues().stream().filter(item -> item instanceof UpgradeOrbItem).flatMap(upgradeOrb -> getVisibleItems().stream().filter(item -> Utils.canBeUpgraded(new ItemStack(item))).map(item -> new ArcaneAnvilRecipe(new ItemStack(item), List.of(new ItemStack(upgradeOrb)))));
    }

    public static List<Item> getVisibleItems() {
        return ForgeRegistries.ITEMS.getValues().stream().filter(item -> CreativeModeTabs.allTabs().stream().anyMatch(tab -> tab.contains(new ItemStack(item)))).toList();
    }

    private static ItemStack getScrollStack(ItemStack stack, AbstractSpell spell, int spellLevel) {
        ItemStack scrollStack = stack.copy();
        ISpellContainer.createScrollContainer(spell, spellLevel, scrollStack);
        return scrollStack;
    }
}