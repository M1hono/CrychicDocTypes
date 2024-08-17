package org.violetmoon.quark.content.world.item;

import net.minecraft.server.level.ServerPlayer;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.Level;
import org.violetmoon.quark.content.world.module.AncientWoodModule;
import org.violetmoon.zeta.item.ZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;

public class AncientFruitItem extends ZetaItem {

    public AncientFruitItem(ZetaModule module) {
        super("ancient_fruit", module, new Item.Properties().food(new FoodProperties.Builder().nutrition(4).saturationMod(0.3F).alwaysEat().build()));
        CreativeTabManager.addToCreativeTabNextTo(CreativeModeTabs.FOOD_AND_DRINKS, this, Items.CHORUS_FRUIT, false);
    }

    @Override
    public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity living) {
        ItemStack ret = super.m_5922_(stack, level, living);
        if (AncientWoodModule.ancientFruitGivesExp && living instanceof Player player) {
            if (player instanceof ServerPlayer sp && sp.f_36078_ >= 100) {
                AncientWoodModule.ancientFruitTrigger.trigger(sp);
            }
            player.giveExperiencePoints(AncientWoodModule.ancientFruitExpValue);
            player.playSound(SoundEvents.EXPERIENCE_ORB_PICKUP, 1.0F, 1.0F);
        }
        return ret;
    }
}