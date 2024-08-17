package io.github.lightman314.lightmanscurrency.common.traders.item.tradedata.restrictions;

import com.mojang.datafixers.util.Pair;
import io.github.lightman314.lightmanscurrency.LCTags;
import io.github.lightman314.lightmanscurrency.util.InventoryUtil;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.inventory.InventoryMenu;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class BookRestriction extends ItemTradeRestriction {

    public static BookRestriction INSTANCE = new BookRestriction();

    public static final ResourceLocation EMPTY_BOOK_SLOT = new ResourceLocation("lightmanscurrency", "item/empty_book_slot");

    private BookRestriction() {
    }

    public static boolean CanSellAsBook(ItemStack item) {
        return InventoryUtil.ItemHasTag(item, LCTags.Items.TRADABLE_BOOK);
    }

    @Override
    public boolean allowSellItem(ItemStack itemStack) {
        return CanSellAsBook(itemStack);
    }

    @Override
    public boolean allowItemSelectItem(ItemStack itemStack) {
        return CanSellAsBook(itemStack);
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public Pair<ResourceLocation, ResourceLocation> getEmptySlotBG() {
        return Pair.of(InventoryMenu.BLOCK_ATLAS, EMPTY_BOOK_SLOT);
    }
}