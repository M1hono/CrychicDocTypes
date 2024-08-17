package io.github.lightman314.lightmanscurrency.common.traders.terminal.filters;

import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.api.traders.terminal.ITraderSearchFilter;
import io.github.lightman314.lightmanscurrency.common.traders.item.ItemTraderData;
import io.github.lightman314.lightmanscurrency.common.traders.item.tradedata.ItemTradeData;
import java.util.concurrent.atomic.AtomicBoolean;
import javax.annotation.Nonnull;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.enchantment.EnchantmentHelper;

public class ItemTraderSearchFilter implements ITraderSearchFilter {

    @Override
    public boolean filter(@Nonnull TraderData data, @Nonnull String searchText) {
        if (data instanceof ItemTraderData trader) {
            for (ItemTradeData trade : trader.getTradeData()) {
                if (trade.isValid()) {
                    ItemStack sellItem = trade.getSellItem(0);
                    ItemStack sellItem2 = trade.getSellItem(1);
                    if (!sellItem.isEmpty() && sellItem.getHoverName().getString().toLowerCase().contains(searchText)) {
                        return true;
                    }
                    if (!sellItem2.isEmpty() && sellItem2.getHoverName().getString().toLowerCase().contains(searchText)) {
                        return true;
                    }
                    if (!sellItem.isEmpty() && trade.getCustomName(0).toLowerCase().contains(searchText)) {
                        return true;
                    }
                    if (!sellItem2.isEmpty() && trade.getCustomName(1).toLowerCase().contains(searchText)) {
                        return true;
                    }
                    AtomicBoolean foundEnchantment = new AtomicBoolean(false);
                    EnchantmentHelper.getEnchantments(sellItem).forEach((enchantment, level) -> {
                        if (enchantment.getFullname(level).getString().toLowerCase().contains(searchText)) {
                            foundEnchantment.set(true);
                        }
                    });
                    if (foundEnchantment.get()) {
                        return true;
                    }
                    EnchantmentHelper.getEnchantments(sellItem2).forEach((enchantment, level) -> {
                        if (enchantment.getFullname(level).getString().toLowerCase().contains(searchText)) {
                            foundEnchantment.set(true);
                        }
                    });
                    if (foundEnchantment.get()) {
                        return true;
                    }
                    if (trade.isBarter()) {
                        ItemStack barterItem = trade.getBarterItem(0);
                        ItemStack barterItem2 = trade.getBarterItem(1);
                        if (!barterItem.isEmpty() && barterItem.getHoverName().getString().toLowerCase().contains(searchText)) {
                            return true;
                        }
                        if (!barterItem2.isEmpty() && barterItem2.getHoverName().getString().toLowerCase().contains(searchText)) {
                            return true;
                        }
                        foundEnchantment.set(false);
                        EnchantmentHelper.getEnchantments(barterItem).forEach((enchantment, level) -> {
                            if (enchantment.getFullname(level).getString().toLowerCase().contains(searchText)) {
                                foundEnchantment.set(true);
                            }
                        });
                        if (foundEnchantment.get()) {
                            return true;
                        }
                        EnchantmentHelper.getEnchantments(barterItem2).forEach((enchantment, level) -> {
                            if (enchantment.getFullname(level).getString().toLowerCase().contains(searchText)) {
                                foundEnchantment.set(true);
                            }
                        });
                        if (foundEnchantment.get()) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}