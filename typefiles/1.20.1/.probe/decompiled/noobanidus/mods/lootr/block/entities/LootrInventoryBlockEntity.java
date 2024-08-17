package noobanidus.mods.lootr.block.entities;

import javax.annotation.Nullable;
import net.minecraft.core.BlockPos;
import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.Connection;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.ContainerHelper;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import noobanidus.mods.lootr.config.ConfigManager;
import noobanidus.mods.lootr.init.ModBlockEntities;
import org.jetbrains.annotations.NotNull;

public class LootrInventoryBlockEntity extends LootrChestBlockEntity {

    private NonNullList<ItemStack> customInventory;

    public LootrInventoryBlockEntity(BlockPos pWorldPosition, BlockState pBlockState) {
        super(ModBlockEntities.LOOTR_INVENTORY.get(), pWorldPosition, pBlockState);
    }

    @Override
    public void load(CompoundTag compound) {
        super.load(compound);
        if (compound.contains("customInventory") && compound.contains("customSize")) {
            int size = compound.getInt("customSize");
            this.customInventory = NonNullList.withSize(size, ItemStack.EMPTY);
            ContainerHelper.loadAllItems(compound.getCompound("customInventory"), this.customInventory);
        }
    }

    @Override
    protected void saveAdditional(CompoundTag compound) {
        super.saveAdditional(compound);
        if (this.customInventory != null) {
            compound.putInt("customSize", this.customInventory.size());
            compound.put("customInventory", ContainerHelper.saveAllItems(new CompoundTag(), this.customInventory));
        }
    }

    @Nullable
    public NonNullList<ItemStack> getCustomInventory() {
        return this.customInventory;
    }

    public void setCustomInventory(NonNullList<ItemStack> customInventory) {
        this.customInventory = customInventory;
    }

    @Override
    public void onDataPacket(@NotNull Connection net, @NotNull ClientboundBlockEntityDataPacket pkt) {
        this.load(pkt.getTag());
    }

    @Override
    protected void signalOpenCount(Level level, BlockPos pos, BlockState state, int int0, int int1) {
        super.m_142151_(level, pos, state, int0, int1);
        if (ConfigManager.TRAPPED_CUSTOM.get() && int0 != int1) {
            Block block = state.m_60734_();
            level.updateNeighborsAt(pos, block);
            level.updateNeighborsAt(pos.below(), block);
        }
    }
}