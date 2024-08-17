package net.mehvahdjukaar.supplementaries.common.items.forge;

import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.ArmorMaterial;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;

public class ShulkerShellItem extends ArmorItem {

    public ShulkerShellItem(Item.Properties properties) {
        super(new ShulkerShellItem.SkulkerShellArmorMaterial(), ArmorItem.Type.HELMET, properties);
    }

    public int getMaxStackSize(ItemStack stack) {
        return 64;
    }

    @Override
    public boolean isEnchantable(ItemStack stack) {
        return false;
    }

    public boolean isDamageable(ItemStack stack) {
        return false;
    }

    private static class SkulkerShellArmorMaterial implements ArmorMaterial {

        private static final int[] HEALTH_PER_SLOT = new int[] { 13, 15, 16, 11 };

        @Override
        public int getDurabilityForType(ArmorItem.Type slotType) {
            return HEALTH_PER_SLOT[slotType.ordinal()] * 10;
        }

        @Override
        public int getDefenseForType(ArmorItem.Type arg) {
            return 0;
        }

        @Override
        public int getEnchantmentValue() {
            return 0;
        }

        @Override
        public SoundEvent getEquipSound() {
            return SoundEvents.SHULKER_CLOSE;
        }

        @Override
        public Ingredient getRepairIngredient() {
            return Ingredient.EMPTY;
        }

        @Override
        public String getName() {
            return "shulker_shell";
        }

        @Override
        public float getToughness() {
            return 1.0F;
        }

        @Override
        public float getKnockbackResistance() {
            return 0.2F;
        }
    }
}