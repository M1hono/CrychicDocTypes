package dev.latvian.mods.kubejs.gui.chest;

import net.minecraft.world.inventory.ClickType;

public class ChestMenuClickEvent {

    public final ChestMenuSlot slot;

    public final ClickType type;

    public final int button;

    public transient boolean handled;

    public ChestMenuClickEvent(ChestMenuSlot slot, ClickType type, int button) {
        this.slot = slot;
        this.type = type;
        this.button = button;
        this.handled = false;
    }

    public void setHandled() {
        this.handled = true;
    }

    public interface Callback {

        void onClick(ChestMenuClickEvent var1);
    }
}