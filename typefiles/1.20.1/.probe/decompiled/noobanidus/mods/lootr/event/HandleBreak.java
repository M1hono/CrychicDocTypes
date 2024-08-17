package noobanidus.mods.lootr.event;

import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.Style;
import net.minecraft.network.chat.TextColor;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.common.util.FakePlayer;
import net.minecraftforge.event.level.BlockEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import noobanidus.mods.lootr.LootrTags;
import noobanidus.mods.lootr.config.ConfigManager;

@EventBusSubscriber(modid = "lootr")
public class HandleBreak {

    @SubscribeEvent
    public static void onBlockBreak(BlockEvent.BreakEvent event) {
        Player player = event.getPlayer();
        if (!event.getLevel().m_5776_() && event.getState().m_204336_(LootrTags.Blocks.CONTAINERS)) {
            if (player instanceof FakePlayer && ConfigManager.ENABLE_FAKE_PLAYER_BREAK.get() || ConfigManager.ENABLE_BREAK.get()) {
                return;
            }
            if (ConfigManager.DISABLE_BREAK.get()) {
                if (player.getAbilities().instabuild) {
                    if (!player.m_6144_()) {
                        event.setCanceled(true);
                        player.displayClientMessage(Component.translatable("lootr.message.cannot_break_sneak").setStyle(getChatStyle()), false);
                    }
                } else {
                    event.setCanceled(true);
                    player.displayClientMessage(Component.translatable("lootr.message.cannot_break").setStyle(getChatStyle()), false);
                }
            } else if (!event.getPlayer().m_6144_()) {
                event.setCanceled(true);
                event.getPlayer().displayClientMessage(Component.translatable("lootr.message.should_sneak").setStyle(getChatStyle()), false);
                event.getPlayer().displayClientMessage(Component.translatable("lootr.message.should_sneak2", Component.translatable("lootr.message.should_sneak3").setStyle(Style.EMPTY.withBold(true))).setStyle(getChatStyle()), false);
            }
        }
    }

    public static Style getChatStyle() {
        return ConfigManager.DISABLE_MESSAGE_STYLES.get() ? Style.EMPTY : Style.EMPTY.withColor(TextColor.fromLegacyFormat(ChatFormatting.AQUA));
    }
}