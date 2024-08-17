package net.mehvahdjukaar.amendments.client.colors;

import net.mehvahdjukaar.amendments.configs.ClientConfigs;
import net.minecraft.client.color.item.ItemColor;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.alchemy.PotionUtils;

public class CrossbowColor implements ItemColor {

    @Override
    public int getColor(ItemStack stack, int tint) {
        CompoundTag tag = stack.getTag();
        if (tint == 1 && (Boolean) ClientConfigs.COLORED_ARROWS.get() && tag != null && tag.contains("ChargedProjectiles", 9)) {
            ListTag chargedProjectiles = tag.getList("ChargedProjectiles", 10);
            if (!chargedProjectiles.isEmpty()) {
                CompoundTag compound = chargedProjectiles.getCompound(0);
                ItemStack arrow = ItemStack.of(compound);
                Item i = arrow.getItem();
                if (i == Items.TIPPED_ARROW) {
                    return PotionUtils.getColor(arrow);
                }
                if (i == Items.SPECTRAL_ARROW) {
                    return 16755200;
                }
            }
        }
        return -1;
    }
}