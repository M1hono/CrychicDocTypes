package de.keksuccino.fancymenu.networking.packets.commands.opengui;

import de.keksuccino.fancymenu.customization.customgui.CustomGuiHandler;
import de.keksuccino.fancymenu.customization.screen.ScreenInstanceFactory;
import de.keksuccino.fancymenu.customization.screen.identifier.ScreenIdentifierHandler;
import java.util.Objects;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.worldselection.CreateWorldScreen;
import net.minecraft.network.chat.Component;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class ClientSideOpenGuiCommandPacketLogic {

    private static final Logger LOGGER = LogManager.getLogger();

    protected static boolean handle(@NotNull OpenGuiCommandPacket packet) {
        if (Minecraft.getInstance().player == null) {
            return false;
        } else {
            try {
                Objects.requireNonNull(packet.screen_identifier);
                if (packet.screen_identifier.equalsIgnoreCase(CreateWorldScreen.class.getName())) {
                    CreateWorldScreen.openFresh(Minecraft.getInstance(), Minecraft.getInstance().screen);
                    return true;
                }
                if (CustomGuiHandler.guiExists(packet.screen_identifier)) {
                    Screen custom = CustomGuiHandler.constructInstance(packet.screen_identifier, Minecraft.getInstance().screen, null);
                    if (custom != null) {
                        Minecraft.getInstance().setScreen(custom);
                    }
                    return true;
                }
                Screen s = ScreenInstanceFactory.tryConstruct(ScreenIdentifierHandler.getBestIdentifier(packet.screen_identifier));
                if (s != null) {
                    Minecraft.getInstance().setScreen(s);
                    return true;
                }
                packet.sendChatFeedback(Component.translatable("fancymenu.commmands.openguiscreen.unable_to_open_gui", packet.screen_identifier), true);
            } catch (Exception var2) {
                packet.sendChatFeedback(Component.translatable("fancymenu.commands.openguiscreen.error"), true);
                LOGGER.error("[FANCYMENU] An error happened while trying to open a GUI via the /openguiscreen command!", var2);
            }
            return false;
        }
    }
}