package net.mehvahdjukaar.supplementaries.common.items;

import java.util.List;
import net.mehvahdjukaar.supplementaries.common.entities.RopeArrowEntity;
import net.mehvahdjukaar.supplementaries.common.utils.MiscUtils;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.minecraft.ChatFormatting;
import net.minecraft.core.Holder;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.AbstractArrow;
import net.minecraft.world.item.ArrowItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import org.jetbrains.annotations.Nullable;

public class RopeArrowItem extends ArrowItem {

    public RopeArrowItem(Item.Properties builder) {
        super(builder);
    }

    @Override
    public AbstractArrow createArrow(Level world, ItemStack stack, LivingEntity shooter) {
        int charges = stack.getMaxDamage() - stack.getDamageValue();
        return new RopeArrowEntity(world, shooter, charges);
    }

    public int getMaxDamage(ItemStack stack) {
        return (Integer) CommonConfigs.Tools.ROPE_ARROW_CAPACITY.get();
    }

    public boolean isInfinite(ItemStack stack, ItemStack bow, Player player) {
        return false;
    }

    public boolean isRepairable(ItemStack stack) {
        return false;
    }

    public boolean isBookEnchantable(ItemStack stack, ItemStack book) {
        return false;
    }

    @Override
    public int getBarWidth(ItemStack stack) {
        return Math.round(13.0F - (float) stack.getDamageValue() * 13.0F / (float) this.getMaxDamage(stack));
    }

    @Override
    public boolean isValidRepairItem(ItemStack toRepair, ItemStack repair) {
        return false;
    }

    @Override
    public int getBarColor(ItemStack stack) {
        return 7294006;
    }

    @Override
    public boolean isBarVisible(ItemStack stack) {
        return true;
    }

    @Override
    public int getEnchantmentValue() {
        return 0;
    }

    @Override
    public boolean isEnchantable(ItemStack stack) {
        return false;
    }

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        super.m_7373_(stack, worldIn, tooltip, flagIn);
        tooltip.add(Component.translatable("message.supplementaries.rope_arrow_tooltip", stack.getMaxDamage() - stack.getDamageValue(), stack.getMaxDamage()));
        if (MiscUtils.showsHints(worldIn, flagIn)) {
            if (worldIn != null) {
                Holder.Reference<Block> override = CommonConfigs.getRopeOverride();
                if (override != null) {
                    tooltip.add(Component.translatable("message.supplementaries.rope_arrow", override.key().location()).withStyle(ChatFormatting.ITALIC).withStyle(ChatFormatting.GRAY));
                }
            }
        }
    }
}