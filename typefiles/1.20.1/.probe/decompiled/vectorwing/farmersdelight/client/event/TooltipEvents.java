package vectorwing.farmersdelight.client.event;

import com.mojang.datafixers.util.Pair;
import java.util.List;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffectUtil;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.Item;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.event.entity.player.ItemTooltipEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import vectorwing.farmersdelight.common.Configuration;
import vectorwing.farmersdelight.common.FoodValues;

@EventBusSubscriber(modid = "farmersdelight", value = { Dist.CLIENT })
public class TooltipEvents {

    @SubscribeEvent
    public static void addTooltipToVanillaSoups(ItemTooltipEvent event) {
        if (Configuration.VANILLA_SOUP_EXTRA_EFFECTS.get()) {
            Item food = event.getItemStack().getItem();
            FoodProperties soupEffects = (FoodProperties) FoodValues.VANILLA_SOUP_EFFECTS.get(food);
            if (soupEffects != null) {
                List<Component> tooltip = event.getToolTip();
                for (Pair<MobEffectInstance, Float> pair : soupEffects.getEffects()) {
                    MobEffectInstance effect = (MobEffectInstance) pair.getFirst();
                    MutableComponent effectText = Component.translatable(effect.getDescriptionId());
                    if (effect.getDuration() > 20) {
                        effectText = Component.translatable("potion.withDuration", effectText, MobEffectUtil.formatDuration(effect, 1.0F));
                    }
                    tooltip.add(effectText.withStyle(effect.getEffect().getCategory().getTooltipFormatting()));
                }
            }
        }
    }
}