package net.mehvahdjukaar.moonlight.core.misc;

import java.nio.file.Path;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import net.mehvahdjukaar.moonlight.api.platform.PlatHelper;
import net.mehvahdjukaar.moonlight.core.Moonlight;
import net.minecraft.ChatFormatting;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.ClickEvent;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.TextColor;
import net.minecraft.world.entity.player.Player;

public class AntiRepostWarning {

    private static final Set<String> MODS = new HashSet();

    public static void addMod(String id) {
        if (!Objects.equals(id, "minecraft")) {
            MODS.add(id);
        }
    }

    public static void run() {
        if (!PlatHelper.isDev()) {
            Player player = Minecraft.getInstance().player;
            if (player != null) {
                Set<String> reposted = (Set<String>) MODS.stream().filter(AntiRepostWarning::isFileNameSus).collect(Collectors.toSet());
                try {
                    for (String m : reposted) {
                        String url = PlatHelper.getModPageUrl(m);
                        if (url == null) {
                            url = "https://curseforge.com/minecraft/mc-mods";
                        }
                        MutableComponent link = Component.translatable("message.moonlight.anti_repost_link");
                        String modName = PlatHelper.getModName(m);
                        MutableComponent name = Component.literal(modName).withStyle(ChatFormatting.BOLD);
                        ClickEvent click = new ClickEvent(ClickEvent.Action.OPEN_URL, url);
                        link.setStyle(link.getStyle().withClickEvent(click).withUnderlined(true).withColor(TextColor.fromLegacyFormat(ChatFormatting.GOLD)));
                        player.displayClientMessage(Component.translatable("message.moonlight.anti_repost", name, link), false);
                    }
                } catch (Exception var9) {
                }
            }
        }
    }

    private static boolean isFileNameSus(String mod) {
        Path path = PlatHelper.getModFilePath(mod);
        if (path != null && path.getFileName() != null) {
            String fileName = path.getFileName().toString();
            if (fileName.contains(".jar")) {
                return fileName.contains("-Mod-") || fileName.endsWith("-tw");
            }
        } else {
            Moonlight.LOGGER.warn("Failed to get file path of mod {}: {}", mod, path);
        }
        return false;
    }
}