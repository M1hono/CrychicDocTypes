package net.mehvahdjukaar.supplementaries.common.inventories;

import net.mehvahdjukaar.moonlight.api.misc.IContainerProvider;
import net.mehvahdjukaar.supplementaries.common.block.tiles.NoticeBoardBlockTile;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.mehvahdjukaar.supplementaries.reg.ModMenuTypes;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.entity.BlockEntityType;

public class NoticeBoardContainerMenu extends AbstractContainerMenu implements IContainerProvider {

    public final NoticeBoardBlockTile container;

    public NoticeBoardContainerMenu(int id, Inventory playerInventory, FriendlyByteBuf packetBuffer) {
        this(id, playerInventory, (NoticeBoardBlockTile) ((BlockEntityType) ModRegistry.NOTICE_BOARD_TILE.get()).getBlockEntity(playerInventory.player.m_9236_(), packetBuffer.readBlockPos()));
    }

    public NoticeBoardContainerMenu(int id, Inventory playerInventory, NoticeBoardBlockTile container) {
        super((MenuType<?>) ModMenuTypes.NOTICE_BOARD.get(), id);
        this.container = container;
        m_38869_(container, 1);
        container.m_5856_(playerInventory.player);
        this.m_38897_(new Slot(container, 0, 35, 33) {

            @Override
            public boolean mayPlace(ItemStack stack) {
                return (Boolean) CommonConfigs.Building.NOTICE_BOARDS_UNRESTRICTED.get() || NoticeBoardBlockTile.isPageItem(stack.getItem());
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

    public NoticeBoardBlockTile getContainer() {
        return this.container;
    }

    @Override
    public boolean stillValid(Player playerIn) {
        return this.container.m_6542_(playerIn);
    }

    @Override
    public ItemStack quickMoveStack(Player player, int index) {
        ItemStack itemCopy = ItemStack.EMPTY;
        Slot slot = (Slot) this.f_38839_.get(index);
        if (slot.hasItem()) {
            ItemStack item = slot.getItem();
            itemCopy = item.copy();
            if (index < this.container.m_6643_()) {
                if (!this.m_38903_(item, this.container.m_6643_(), this.f_38839_.size(), true)) {
                    return ItemStack.EMPTY;
                }
            } else if (this.m_38903_(item, 0, this.container.m_6643_(), false)) {
                return ItemStack.EMPTY;
            }
            if (item.isEmpty()) {
                slot.setByPlayer(ItemStack.EMPTY);
            } else {
                slot.setChanged();
            }
            if (item.getCount() == itemCopy.getCount()) {
                return ItemStack.EMPTY;
            }
            slot.onTake(player, item);
        }
        return itemCopy;
    }

    @Override
    public void removed(Player playerIn) {
        super.removed(playerIn);
        this.container.m_5785_(playerIn);
    }
}