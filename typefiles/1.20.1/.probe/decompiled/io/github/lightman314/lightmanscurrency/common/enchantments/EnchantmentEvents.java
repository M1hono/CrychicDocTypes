package io.github.lightman314.lightmanscurrency.common.enchantments;

import io.github.lightman314.lightmanscurrency.LCConfig;
import io.github.lightman314.lightmanscurrency.api.enchantments.EnchantmentUtil;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;

@EventBusSubscriber
public final class EnchantmentEvents {

    private static int ticker = 0;

    private EnchantmentEvents() {
    }

    @SubscribeEvent
    public static void onServerTick(TickEvent.ServerTickEvent event) {
        if (event.phase == TickEvent.Phase.START) {
            ticker++;
            if (ticker >= LCConfig.SERVER.enchantmentMaxTickDelay.get() || event.haveTime() && ticker >= LCConfig.SERVER.enchantmentTickDelay.get()) {
                ticker = 0;
                for (ServerPlayer player : event.getServer().getPlayerList().getPlayers()) {
                    if (!player.isSpectator()) {
                        EnchantmentUtil.tickAllEnchantments(player, null);
                    }
                }
            }
        }
    }
}