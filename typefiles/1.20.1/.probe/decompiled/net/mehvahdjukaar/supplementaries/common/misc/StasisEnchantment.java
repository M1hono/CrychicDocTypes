package net.mehvahdjukaar.supplementaries.common.misc;

import net.mehvahdjukaar.supplementaries.common.items.BubbleBlowerItem;
import net.mehvahdjukaar.supplementaries.common.items.SlingshotItem;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.enchantment.Enchantment;
import net.minecraft.world.item.enchantment.EnchantmentCategory;
import net.minecraft.world.item.enchantment.Enchantments;

public class StasisEnchantment extends Enchantment {

    public StasisEnchantment() {
        super(Enchantment.Rarity.VERY_RARE, EnchantmentCategory.CROSSBOW, new EquipmentSlot[] { EquipmentSlot.MAINHAND, EquipmentSlot.OFFHAND });
    }

    @Override
    public int getMinCost(int level) {
        return 10 + level * 5;
    }

    @Override
    public int getMaxCost(int level) {
        return 40;
    }

    @Override
    public boolean isTreasureOnly() {
        return true;
    }

    @Override
    public boolean isTradeable() {
        return CommonConfigs.stasisEnabled();
    }

    @Override
    public boolean isDiscoverable() {
        return CommonConfigs.stasisEnabled();
    }

    public boolean isAllowedOnBooks() {
        return CommonConfigs.stasisEnabled();
    }

    @Override
    public int getMaxLevel() {
        return 1;
    }

    @Override
    public boolean checkCompatibility(Enchantment enchantment) {
        return super.checkCompatibility(enchantment) && enchantment != Enchantments.MULTISHOT;
    }

    @Override
    public boolean canEnchant(ItemStack stack) {
        Item i = stack.getItem();
        return i instanceof SlingshotItem || i instanceof BubbleBlowerItem || super.canEnchant(stack);
    }

    public boolean canApplyAtEnchantingTable(ItemStack stack) {
        Item i = stack.getItem();
        return i instanceof SlingshotItem || i instanceof BubbleBlowerItem;
    }
}