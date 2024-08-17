package net.mehvahdjukaar.amendments.common.recipe;

import net.mehvahdjukaar.amendments.common.item.DyeBottleItem;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.mehvahdjukaar.moonlight.api.set.BlocksColorAPI;
import net.minecraft.core.RegistryAccess;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.DyeableLeatherItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.CustomRecipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.level.Level;

public class DyeBottleRecipe extends CustomRecipe {

    public DyeBottleRecipe(ResourceLocation resourceLocation, CraftingBookCategory category) {
        super(resourceLocation, category);
    }

    public boolean matches(CraftingContainer craftingContainer, Level level) {
        boolean hasDyableItem = false;
        ItemStack dyeBottle = ItemStack.EMPTY;
        for (ItemStack itemstack : craftingContainer.getItems()) {
            if (!itemstack.isEmpty()) {
                Item item = itemstack.getItem();
                if (item == ModRegistry.DYE_BOTTLE_ITEM.get()) {
                    if (!dyeBottle.isEmpty()) {
                        return false;
                    }
                    dyeBottle = itemstack;
                }
            }
        }
        if (dyeBottle.isEmpty()) {
            return false;
        } else {
            for (ItemStack itemstackx : craftingContainer.getItems()) {
                if (!itemstackx.isEmpty()) {
                    Item item = itemstackx.getItem();
                    if (item instanceof DyeableLeatherItem || BlocksColorAPI.changeColor(item, DyeBottleItem.getClosestDye(dyeBottle)) != null) {
                        if (hasDyableItem) {
                            return false;
                        }
                        hasDyableItem = true;
                    }
                }
            }
            return hasDyableItem;
        }
    }

    public ItemStack assemble(CraftingContainer craftingContainer, RegistryAccess registryAccess) {
        ItemStack leather = ItemStack.EMPTY;
        ItemStack dyeBottle = ItemStack.EMPTY;
        for (ItemStack itemstack : craftingContainer.getItems()) {
            if (!itemstack.isEmpty()) {
                Item item = itemstack.getItem();
                if (item == ModRegistry.DYE_BOTTLE_ITEM.get()) {
                    dyeBottle = itemstack;
                } else {
                    leather = itemstack;
                }
            }
        }
        ItemStack result;
        if (leather.getItem() instanceof DyeableLeatherItem l) {
            result = leather.copy();
            if (l.hasCustomColor(leather)) {
                l.setColor(result, DyeBottleItem.mixColor(DyeBottleItem.getColor(dyeBottle), l.getColor(leather), 1, 1));
            } else {
                l.setColor(result, DyeBottleItem.getColor(dyeBottle));
            }
        } else {
            result = BlocksColorAPI.changeColor(leather.getItem(), DyeBottleItem.getClosestDye(dyeBottle)).getDefaultInstance();
        }
        return result;
    }

    @Override
    public boolean canCraftInDimensions(int width, int height) {
        return width * height > 2;
    }

    @Override
    public String getGroup() {
        return "dye_bottle";
    }

    @Override
    public RecipeSerializer<?> getSerializer() {
        return ModRegistry.DYE_BOTTLE_RECIPE.get();
    }
}