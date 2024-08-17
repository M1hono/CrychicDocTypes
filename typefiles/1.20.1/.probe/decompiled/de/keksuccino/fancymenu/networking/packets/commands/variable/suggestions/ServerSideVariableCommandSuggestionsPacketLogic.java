package de.keksuccino.fancymenu.networking.packets.commands.variable.suggestions;

import de.keksuccino.fancymenu.commands.VariableCommand;
import net.minecraft.server.level.ServerPlayer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class ServerSideVariableCommandSuggestionsPacketLogic {

    private static final Logger LOGGER = LogManager.getLogger();

    protected static boolean handle(@NotNull ServerPlayer sender, @NotNull VariableCommandSuggestionsPacket packet) {
        try {
            String uuid = sender.m_20148_().toString();
            VariableCommand.CACHED_VARIABLE_SUGGESTIONS.put(uuid, packet.variable_suggestions);
            return true;
        } catch (Exception var3) {
            LOGGER.error("[FANCYMENU] Failed to process /fmvariable command suggestions packet!", var3);
            return false;
        }
    }
}