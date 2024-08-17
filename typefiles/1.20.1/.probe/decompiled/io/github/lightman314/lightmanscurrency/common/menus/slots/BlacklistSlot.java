package io.github.lightman314.lightmanscurrency.common.menus.slots;

import javax.annotation.Nonnull;
import net.minecraft.world.Container;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;

public class BlacklistSlot extends Slot {

    Container blacklistInventory;

    int blacklistIndex;

    public BlacklistSlot(Container inventory, int index, int x, int y, Container blacklistInventory, int blacklistIndex) {
        super(inventory, index, x, y);
        this.setBlacklist(blacklistInventory, blacklistIndex);
    }

    public void setBlacklist(Container blacklistInventory, int blacklistIndex) {
        this.blacklistInventory = blacklistInventory;
        this.blacklistIndex = blacklistIndex;
    }

    public ItemStack getBlacklistedItem() {
        return this.blacklistInventory.getItem(this.blacklistIndex);
    }

    @Override
    public boolean mayPlace(@Nonnull ItemStack item) {
        return this.blacklistIndex >= 0 ? item != this.getBlacklistedItem() : true;
    }
}