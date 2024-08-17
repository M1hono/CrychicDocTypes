package net.mehvahdjukaar.supplementaries.common.inventories;

import net.mehvahdjukaar.moonlight.api.misc.IContainerProvider;
import net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties;
import net.mehvahdjukaar.supplementaries.common.block.tiles.PulleyBlockTile;
import net.mehvahdjukaar.supplementaries.reg.ModMenuTypes;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.Container;
import net.minecraft.world.SimpleContainer;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;

public class PulleyContainerMenu extends AbstractContainerMenu implements IContainerProvider {

    public final Container inventory;

    @Override
    public Container getContainer() {
        return this.inventory;
    }

    public PulleyContainerMenu(int id, Inventory playerInventory, FriendlyByteBuf packetBuffer) {
        this(id, playerInventory);
    }

    public PulleyContainerMenu(int id, Inventory playerInventory) {
        this(id, playerInventory, new SimpleContainer(1));
    }

    public PulleyContainerMenu(int id, Inventory playerInventory, Container inventory) {
        super((MenuType<?>) ModMenuTypes.PULLEY_BLOCK.get(), id);
        this.inventory = inventory;
        m_38869_(inventory, 1);
        inventory.startOpen(playerInventory.player);
        this.m_38897_(new Slot(inventory, 0, 79, 39) {

            @Override
            public boolean mayPlace(ItemStack stack) {
                return PulleyBlockTile.getContentType(stack.getItem()) != ModBlockProperties.Winding.NONE;
            }
        });
        for (int si = 0; si < 3; si++) {
            for (int sj = 0; sj < 9; sj++) {
                this.m_38897_(new Slot(playerInventory, sj + (si + 1) * 9, 8 + sj * 18, 84 + si * 18));
            }
        }
        for (int si = 0; si < 9; si++) {
            this.m_38897_(new Slot(playerInventory, si, 8 + si * 18, 142));
        }
    }

    @Override
    public boolean stillValid(Player playerIn) {
        return this.inventory.stillValid(playerIn);
    }

    @Override
    public ItemStack quickMoveStack(Player playerIn, int index) {
        ItemStack itemstack = ItemStack.EMPTY;
        Slot slot = (Slot) this.f_38839_.get(index);
        if (slot.hasItem()) {
            ItemStack itemstack1 = slot.getItem();
            itemstack = itemstack1.copy();
            if (index < this.inventory.getContainerSize()) {
                if (!this.m_38903_(itemstack1, this.inventory.getContainerSize(), this.f_38839_.size(), true)) {
                    return ItemStack.EMPTY;
                }
            } else if (!this.m_38903_(itemstack1, 0, this.inventory.getContainerSize(), false)) {
                return ItemStack.EMPTY;
            }
            if (itemstack1.isEmpty()) {
                slot.set(ItemStack.EMPTY);
            } else {
                slot.setChanged();
            }
        }
        return itemstack;
    }

    @Override
    public void removed(Player playerIn) {
        super.removed(playerIn);
        this.inventory.stopOpen(playerIn);
    }
}