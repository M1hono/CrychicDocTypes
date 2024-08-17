package net.mehvahdjukaar.supplementaries.common.block.tiles;

import net.mehvahdjukaar.supplementaries.common.block.blocks.ClockBlock;
import net.mehvahdjukaar.supplementaries.common.items.AbstractMobContainerItem;
import net.mehvahdjukaar.supplementaries.common.misc.mob_container.IMobContainerProvider;
import net.mehvahdjukaar.supplementaries.common.misc.mob_container.MobContainer;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.NotNull;

public class CageBlockTile extends BlockEntity implements IMobContainerProvider {

    @NotNull
    public MobContainer mobContainer;

    public CageBlockTile(BlockPos pos, BlockState state) {
        super((BlockEntityType<?>) ModRegistry.CAGE_TILE.get(), pos, state);
        AbstractMobContainerItem item = (AbstractMobContainerItem) ModRegistry.CAGE_ITEM.get();
        this.mobContainer = new MobContainer(item.getMobContainerWidth(), item.getMobContainerHeight(), false);
    }

    public void saveToNbt(ItemStack stack) {
        if (!this.mobContainer.isEmpty()) {
            CompoundTag compound = new CompoundTag();
            this.saveAdditional(compound);
            stack.addTagElement("BlockEntityTag", compound);
        }
    }

    @Override
    public void load(CompoundTag compound) {
        super.load(compound);
        this.mobContainer.load(compound);
    }

    @Override
    public void saveAdditional(CompoundTag compound) {
        super.saveAdditional(compound);
        this.mobContainer.save(compound);
    }

    public ClientboundBlockEntityDataPacket getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }

    @Override
    public CompoundTag getUpdateTag() {
        return this.m_187482_();
    }

    @Override
    public MobContainer getMobContainer() {
        return this.mobContainer;
    }

    @Override
    public Direction getDirection() {
        return (Direction) this.m_58900_().m_61143_(ClockBlock.FACING);
    }

    public static void tick(Level pLevel, BlockPos pPos, BlockState pState, CageBlockTile tile) {
        tile.mobContainer.tick(pLevel, pPos);
    }
}