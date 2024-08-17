package io.github.lightman314.lightmanscurrency.common.items;

import com.google.common.collect.ImmutableList;
import io.github.lightman314.lightmanscurrency.LCConfig;
import io.github.lightman314.lightmanscurrency.LCText;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.alchemy.PotionUtils;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;

public class ChocolateCoinItem extends Item {

    private final List<MobEffectInstance> effects;

    private final float healing;

    public ChocolateCoinItem(MobEffectInstance... effects) {
        this(0.0F, effects);
    }

    public ChocolateCoinItem(float healing, MobEffectInstance... effects) {
        this(new Item.Properties(), healing, effects);
    }

    public ChocolateCoinItem(Item.Properties properties, MobEffectInstance... effects) {
        this(properties, 0.0F, effects);
    }

    public ChocolateCoinItem(Item.Properties properties, float healing, MobEffectInstance... effects) {
        super(properties.food(new FoodProperties.Builder().alwaysEat().nutrition(2).saturationMod(0.1F).build()));
        this.effects = ImmutableList.copyOf(effects);
        this.healing = healing;
    }

    @Override
    public void appendHoverText(@Nonnull ItemStack stack, @Nullable Level level, @Nonnull List<Component> tooltip, @Nonnull TooltipFlag flag) {
        super.appendHoverText(stack, level, tooltip, flag);
        if (level != null) {
            if (LCConfig.SERVER.chocolateCoinEffects.get()) {
                if (this.healing > 0.0F) {
                    tooltip.add(LCText.TOOLTIP_HEALING.get((int) this.healing).withStyle(ChatFormatting.BLUE));
                }
                if (!this.effects.isEmpty()) {
                    PotionUtils.addPotionTooltip(this.effects, tooltip, 1.0F);
                }
            }
        }
    }

    @Nonnull
    @Override
    public ItemStack finishUsingItem(@Nonnull ItemStack stack, @Nonnull Level level, @Nonnull LivingEntity entity) {
        if (LCConfig.SERVER.chocolateCoinEffects.get()) {
            if (this.healing > 0.0F) {
                entity.heal(this.healing);
            }
            for (MobEffectInstance effect : this.effects) {
                entity.addEffect(new MobEffectInstance(effect));
            }
        }
        return super.finishUsingItem(stack, level, entity);
    }
}