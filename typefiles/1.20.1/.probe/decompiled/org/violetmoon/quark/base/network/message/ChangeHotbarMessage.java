package org.violetmoon.quark.base.network.message;

import net.minecraft.world.Container;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import org.violetmoon.zeta.network.IZetaMessage;
import org.violetmoon.zeta.network.IZetaNetworkEventContext;

public class ChangeHotbarMessage implements IZetaMessage {

    private static final long serialVersionUID = -3942423443215625756L;

    public int bar;

    public ChangeHotbarMessage() {
    }

    public ChangeHotbarMessage(int bar) {
        this.bar = bar;
    }

    @Override
    public boolean receive(IZetaNetworkEventContext context) {
        context.enqueueWork(() -> {
            Player player = context.getSender();
            if (this.bar > 0 && this.bar <= 3) {
                for (int i = 0; i < 9; i++) {
                    this.swap(player.getInventory(), i, i + this.bar * 9);
                }
            }
        });
        return true;
    }

    public void swap(Container inv, int slot1, int slot2) {
        ItemStack stack1 = inv.getItem(slot1);
        ItemStack stack2 = inv.getItem(slot2);
        inv.setItem(slot2, stack1);
        inv.setItem(slot1, stack2);
    }
}