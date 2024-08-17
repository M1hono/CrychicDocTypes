package dev.ftb.mods.ftblibrary.ui;

import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import org.jetbrains.annotations.Nullable;

public abstract class BaseContainer extends AbstractContainerMenu {

    public BaseContainer(@Nullable MenuType<?> type, int id, Inventory playerInventory) {
        super(type, id);
    }

    public abstract int getNonPlayerSlots();

    @Override
    public boolean stillValid(Player player) {
        return true;
    }

    public void addPlayerSlots(Inventory playerInventory, int posX, int posY, boolean ignoreCurrent) {
        for (int y = 0; y < 3; y++) {
            for (int x = 0; x < 9; x++) {
                this.m_38897_(new Slot(playerInventory, x + y * 9 + 9, posX + x * 18, posY + y * 18));
            }
        }
        int i = ignoreCurrent ? playerInventory.selected : -1;
        for (int x = 0; x < 9; x++) {
            if (x != i) {
                this.m_38897_(new Slot(playerInventory, x, posX + x * 18, posY + 58));
            } else {
                this.m_38897_(new Slot(playerInventory, x, posX + x * 18, posY + 58) {

                    @Override
                    public boolean mayPickup(Player ep) {
                        return false;
                    }
                });
            }
        }
    }

    public void addPlayerSlots(Inventory playerInventory, int posX, int posY) {
        this.addPlayerSlots(playerInventory, posX, posY, false);
    }

    @Override
    public ItemStack quickMoveStack(Player player, int index) {
        int nonPlayerSlots = this.getNonPlayerSlots();
        if (nonPlayerSlots <= 0) {
            return ItemStack.EMPTY;
        } else {
            ItemStack stack = ItemStack.EMPTY;
            Slot slot = (Slot) this.f_38839_.get(index);
            if (slot.hasItem()) {
                ItemStack stack1 = slot.getItem();
                stack = stack1.copy();
                if (index < nonPlayerSlots) {
                    if (!this.m_38903_(stack1, nonPlayerSlots, this.f_38839_.size(), true)) {
                        return ItemStack.EMPTY;
                    }
                } else if (!this.m_38903_(stack1, 0, nonPlayerSlots, false)) {
                    return ItemStack.EMPTY;
                }
                if (stack1.isEmpty()) {
                    slot.set(ItemStack.EMPTY);
                } else {
                    slot.setChanged();
                }
            }
            return stack;
        }
    }
}