package de.keksuccino.fancymenu.networking;

import net.minecraft.ChatFormatting;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.server.level.ServerPlayer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public abstract class Packet {

    private static final Logger LOGGER = LogManager.getLogger();

    public abstract boolean processPacket(@Nullable ServerPlayer var1);

    public void sendChatFeedback(@NotNull MutableComponent message, boolean failure) {
        try {
            if (Minecraft.getInstance().player != null && Minecraft.getInstance().level != null) {
                if (failure) {
                    message = message.withStyle(ChatFormatting.RED);
                }
                Minecraft.getInstance().player.sendSystemMessage(message);
            }
        } catch (Exception var4) {
            LOGGER.error("[FANCYMENU] Failed to send packet chat feedback!", var4);
        }
    }
}