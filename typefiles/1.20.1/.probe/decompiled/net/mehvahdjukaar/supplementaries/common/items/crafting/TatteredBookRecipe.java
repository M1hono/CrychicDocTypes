package net.mehvahdjukaar.supplementaries.common.items.crafting;

import net.mehvahdjukaar.supplementaries.common.items.AntiqueInkItem;
import net.mehvahdjukaar.supplementaries.reg.ModRecipes;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.NonNullList;
import net.minecraft.core.RegistryAccess;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.CustomRecipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.level.Level;

public class TatteredBookRecipe extends CustomRecipe {

    public TatteredBookRecipe(ResourceLocation idIn, CraftingBookCategory category) {
        super(idIn, category);
    }

    public boolean matches(CraftingContainer inv, Level worldIn) {
        ItemStack itemstack = null;
        ItemStack itemstack1 = null;
        Boolean clear = null;
        for (int i = 0; i < inv.m_6643_(); i++) {
            ItemStack stack = inv.m_8020_(i);
            if (!stack.isEmpty()) {
                if (isValidBook(stack)) {
                    if (itemstack != null) {
                        return false;
                    }
                    itemstack = stack;
                } else {
                    if (stack.getItem() != ModRegistry.ANTIQUE_INK.get()) {
                        return false;
                    }
                    if (itemstack1 != null) {
                        return false;
                    }
                    itemstack1 = stack;
                }
            }
        }
        return itemstack != null && itemstack1 != null;
    }

    private static boolean isValidBook(ItemStack stack) {
        return stack.getItem() == Items.WRITTEN_BOOK && (!stack.hasTag() || stack.getTag().getInt("generation") == 0);
    }

    public ItemStack assemble(CraftingContainer inv, RegistryAccess access) {
        boolean antique = true;
        for (int i = 0; i < inv.m_6643_(); i++) {
            if (inv.m_8020_(i).getItem() == ModRegistry.SOAP.get()) {
                antique = false;
                break;
            }
        }
        for (int ix = 0; ix < inv.m_6643_(); ix++) {
            ItemStack stack = inv.m_8020_(ix);
            if (isValidBook(stack)) {
                ItemStack s = stack.copy();
                s.setCount(1);
                AntiqueInkItem.setAntiqueInk(s, antique);
                return s;
            }
        }
        return ItemStack.EMPTY;
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
        return (RecipeSerializer<?>) ModRecipes.ANTIQUE_BOOK.get();
    }
}