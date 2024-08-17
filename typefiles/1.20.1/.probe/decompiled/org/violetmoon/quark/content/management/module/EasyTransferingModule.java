package org.violetmoon.quark.content.management.module;

import java.util.List;
import java.util.function.Supplier;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.violetmoon.quark.base.QuarkClient;
import org.violetmoon.quark.base.client.handler.InventoryButtonHandler;
import org.violetmoon.quark.base.network.message.InventoryTransferMessage;
import org.violetmoon.quark.content.management.client.screen.widgets.MiniInventoryButton;
import org.violetmoon.zeta.client.event.load.ZKeyMapping;
import org.violetmoon.zeta.config.Config;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;

@ZetaLoadModule(category = "management")
public class EasyTransferingModule extends ZetaModule {

    public static boolean shiftLocked = false;

    @Config
    public static boolean enableShiftLock = true;

    @ZetaLoadModule(clientReplacement = true)
    public static class Client extends EasyTransferingModule {

        @LoadEvent
        public void registerKeybinds(ZKeyMapping event) {
            this.addButton(event, 1, "insert", false);
            this.addButton(event, 2, "extract", true);
            InventoryButtonHandler.addButtonProvider(event, this, InventoryButtonHandler.ButtonTargetType.CONTAINER_PLAYER_INVENTORY, 3, "quark.keybind.shift_lock", screen -> shiftLocked = !shiftLocked, (parent, x, y) -> new MiniInventoryButton(parent, 4, x, y, "quark.gui.button.shift_lock", b -> shiftLocked = !shiftLocked).setTextureShift(() -> shiftLocked), () -> enableShiftLock);
        }

        private void addButton(ZKeyMapping event, int priority, String name, boolean restock) {
            List<Component> shiftedTooltip = List.of(Component.translatable("quark.gui.button." + name + "_filtered"));
            List<Component> regularTooltip = List.of(Component.translatable("quark.gui.button." + name));
            InventoryButtonHandler.addButtonProvider(event, this, InventoryButtonHandler.ButtonTargetType.CONTAINER_PLAYER_INVENTORY, priority, "quark.keybind.transfer_" + name, screen -> QuarkClient.ZETA_CLIENT.sendToServer(new InventoryTransferMessage(Screen.hasShiftDown(), restock)), (parent, x, y) -> new MiniInventoryButton(parent, priority, x, y, (Supplier<List<Component>>) (() -> Screen.hasShiftDown() ? shiftedTooltip : regularTooltip), b -> QuarkClient.ZETA_CLIENT.sendToServer(new InventoryTransferMessage(Screen.hasShiftDown(), restock))).setTextureShift(Screen::m_96638_), null);
        }

        public static boolean hasShiftDown(boolean ret) {
            return ret || enableShiftLock && shiftLocked;
        }
    }
}