package net.mehvahdjukaar.supplementaries.common.items.crafting;

import net.mehvahdjukaar.supplementaries.reg.ModRecipes;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.mehvahdjukaar.supplementaries.reg.ModTags;
import net.minecraft.core.NonNullList;
import net.minecraft.core.RegistryAccess;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.CustomRecipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.Level;

public class RopeArrowCreateRecipe extends CustomRecipe {

    public RopeArrowCreateRecipe(ResourceLocation idIn, CraftingBookCategory category) {
        super(idIn, category);
    }

    public boolean matches(CraftingContainer inv, Level worldIn) {
        ItemStack itemstack = null;
        ItemStack itemstack1 = null;
        for (int i = 0; i < inv.m_6643_(); i++) {
            ItemStack stack = inv.m_8020_(i);
            if (stack.getItem() == Items.ARROW) {
                if (itemstack != null) {
                    return false;
                }
                itemstack = stack;
            } else if (stack.is(ModTags.ROPES)) {
                itemstack1 = stack;
            } else if (!stack.isEmpty()) {
                return false;
            }
        }
        return itemstack != null && itemstack1 != null;
    }

    public ItemStack assemble(CraftingContainer inv, RegistryAccess access) {
        int ropes = 0;
        for (int i = 0; i < inv.m_6643_(); i++) {
            if (inv.m_8020_(i).is(ModTags.ROPES)) {
                ropes++;
            }
        }
        ItemStack stack = new ItemStack((ItemLike) ModRegistry.ROPE_ARROW_ITEM.get());
        stack.setDamageValue(stack.getMaxDamage() - ropes);
        return stack;
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
        return (RecipeSerializer<?>) ModRecipes.ROPE_ARROW_CREATE.get();
    }
}