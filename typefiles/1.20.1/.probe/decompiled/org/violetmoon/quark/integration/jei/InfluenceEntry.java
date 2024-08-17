package org.violetmoon.quark.integration.jei;

import java.util.List;
import mezz.jei.api.recipe.category.extensions.IRecipeCategoryExtension;
import net.minecraft.ChatFormatting;
import net.minecraft.core.NonNullList;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.EnchantedBookItem;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.enchantment.Enchantment;
import net.minecraft.world.item.enchantment.EnchantmentInstance;
import net.minecraft.world.level.block.Block;
import org.violetmoon.quark.addons.oddities.util.Influence;
import org.violetmoon.quark.content.experimental.module.EnchantmentsBegoneModule;
import org.violetmoon.quark.content.tools.base.RuneColor;
import org.violetmoon.quark.content.tools.module.ColorRunesModule;
import org.violetmoon.zeta.util.ItemNBTHelper;

public class InfluenceEntry implements IRecipeCategoryExtension {

    private final ItemStack candleStack;

    private final ItemStack boost;

    private final ItemStack dampen;

    private final List<ItemStack> associatedBooks;

    public InfluenceEntry(Block candle, Influence influence) {
        this.candleStack = new ItemStack(candle);
        this.boost = getEnchantedBook(influence.boost(), RuneColor.GREEN, ChatFormatting.GREEN, "quark.jei.boost_influence");
        this.dampen = getEnchantedBook(influence.dampen(), RuneColor.RED, ChatFormatting.RED, "quark.jei.dampen_influence");
        this.associatedBooks = buildAssociatedBooks(influence);
    }

    public ItemStack getBoostBook() {
        return this.boost;
    }

    public ItemStack getDampenBook() {
        return this.dampen;
    }

    public ItemStack getCandleStack() {
        return this.candleStack;
    }

    public List<ItemStack> getAssociatedBooks() {
        return this.associatedBooks;
    }

    private static ItemStack getEnchantedBook(List<Enchantment> enchantments, RuneColor runeColor, ChatFormatting chatColor, String locKey) {
        ItemStack stack = ItemStack.EMPTY;
        for (Enchantment enchantment : enchantments) {
            if (!EnchantmentsBegoneModule.shouldBegone(enchantment)) {
                if (stack.isEmpty()) {
                    stack = ColorRunesModule.withRune(new ItemStack(Items.ENCHANTED_BOOK), runeColor).setHoverName(Component.translatable(locKey).withStyle(chatColor));
                    ItemNBTHelper.setBoolean(stack, "quark:only_show_table_enchantments", true);
                }
                EnchantedBookItem.addEnchantment(stack, new EnchantmentInstance(enchantment, enchantment.getMaxLevel()));
            }
        }
        return stack;
    }

    private static List<ItemStack> buildAssociatedBooks(Influence influence) {
        NonNullList<ItemStack> books = NonNullList.create();
        for (Enchantment enchantment : influence.boost()) {
            for (int i = 0; i < enchantment.getMaxLevel(); i++) {
                books.add(EnchantedBookItem.createForEnchantment(new EnchantmentInstance(enchantment, i + 1)));
            }
        }
        for (Enchantment enchantment : influence.dampen()) {
            for (int i = 0; i < enchantment.getMaxLevel(); i++) {
                books.add(EnchantedBookItem.createForEnchantment(new EnchantmentInstance(enchantment, i + 1)));
            }
        }
        return books;
    }

    public boolean hasAny() {
        return !this.boost.isEmpty() || !this.dampen.isEmpty();
    }
}