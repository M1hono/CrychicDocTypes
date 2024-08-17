package net.mehvahdjukaar.amendments.common;

import java.util.List;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.Container;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.inventory.ContainerData;
import net.minecraft.world.inventory.LecternMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.entity.LecternBlockEntity;

public class LecternEditMenu extends LecternMenu {

    private final BlockPos pos;

    public LecternEditMenu(int id, Inventory playerInventory, FriendlyByteBuf packetBuffer) {
        super(id);
        this.pos = packetBuffer.readBlockPos();
    }

    public LecternEditMenu(int i, LecternBlockEntity container, ContainerData containerData) {
        super(i, (Container) container, containerData);
        this.pos = container.m_58899_();
    }

    @Override
    public MenuType<?> getType() {
        return (MenuType<?>) ModRegistry.LECTERN_EDIT_MENU.get();
    }

    public BlockPos getPos() {
        return this.pos;
    }

    @Override
    public void initializeContents(int stateId, List<ItemStack> items, ItemStack carried) {
        super.m_182410_(stateId, items, carried);
    }
}