package de.keksuccino.fancymenu.networking.packets.commands.closegui;

import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class ClientSideCloseGuiCommandPacketLogic {

    private static final Logger LOGGER = LogManager.getLogger();

    protected static boolean handle(@NotNull CloseGuiCommandPacket packet) {
        if (Minecraft.getInstance().player == null) {
            return false;
        } else {
            try {
                Minecraft.getInstance().setScreen(null);
                return true;
            } catch (Exception var2) {
                packet.sendChatFeedback(Component.translatable("fancymenu.commands.closeguiscreen.error"), true);
                LOGGER.error("[FANCYMENU] Failed to close GUI screen via /closeguiscreen command!", var2);
                return false;
            }
        }
    }
}