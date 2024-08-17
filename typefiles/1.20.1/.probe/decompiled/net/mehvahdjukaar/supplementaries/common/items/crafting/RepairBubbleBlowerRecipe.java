package net.mehvahdjukaar.supplementaries.common.items.crafting;

import net.mehvahdjukaar.supplementaries.reg.ModRecipes;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.NonNullList;
import net.minecraft.core.RegistryAccess;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.CustomRecipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.level.Level;

public class RepairBubbleBlowerRecipe extends CustomRecipe {

    public RepairBubbleBlowerRecipe(ResourceLocation idIn, CraftingBookCategory category) {
        super(idIn, category);
    }

    public boolean matches(CraftingContainer inv, Level worldIn) {
        ItemStack bubbleBlower = null;
        ItemStack soap = null;
        for (int i = 0; i < inv.m_6643_(); i++) {
            ItemStack stack = inv.m_8020_(i);
            if (stack.getItem() == ModRegistry.BUBBLE_BLOWER.get() && stack.getDamageValue() != 0) {
                if (bubbleBlower != null) {
                    return false;
                }
                bubbleBlower = stack;
            } else if (stack.is((Item) ModRegistry.SOAP.get())) {
                if (soap != null) {
                    return false;
                }
                soap = stack;
            } else if (!stack.isEmpty()) {
                return false;
            }
        }
        return bubbleBlower != null && soap != null;
    }

    public ItemStack assemble(CraftingContainer inv, RegistryAccess access) {
        ItemStack blower = null;
        for (int i = 0; i < inv.m_6643_(); i++) {
            ItemStack stack = inv.m_8020_(i);
            if (stack.getItem() == ModRegistry.BUBBLE_BLOWER.get()) {
                blower = stack;
            }
        }
        ItemStack repaired = blower.copy();
        repaired.setDamageValue(0);
        return repaired;
    }

    public NonNullList<ItemStack> getRemainingItems(CraftingContainer inv) {
        return NonNullList.withSize(inv.m_6643_(), ItemStack.EMPTY);
    }

    @Override
    public boolean canCraftInDimensions(int width, int height) {
        return width * height >= 2;
    }

    @Override
    public RecipeSerializer<?> getSerializer() {
        return (RecipeSerializer<?>) ModRecipes.BUBBLE_BLOWER_REPAIR.get();
    }
}