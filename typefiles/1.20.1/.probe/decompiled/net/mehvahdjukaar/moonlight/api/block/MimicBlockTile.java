package net.mehvahdjukaar.moonlight.api.block;

import net.mehvahdjukaar.moonlight.api.client.model.ExtraModelData;
import net.mehvahdjukaar.moonlight.api.client.model.IExtraModelDataProvider;
import net.mehvahdjukaar.moonlight.api.client.model.ModelDataKey;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.NbtUtils;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;

public abstract class MimicBlockTile extends BlockEntity implements IBlockHolder, IExtraModelDataProvider {

    public static final ModelDataKey<BlockState> MIMIC_KEY = new ModelDataKey<>(BlockState.class);

    protected BlockState mimic = Blocks.AIR.defaultBlockState();

    protected MimicBlockTile(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    @Override
    public void addExtraModelData(ExtraModelData.Builder builder) {
        builder.with(MIMIC_KEY, this.getHeldBlock());
    }

    @Override
    public BlockState getHeldBlock(int index) {
        return this.mimic;
    }

    @Override
    public boolean setHeldBlock(BlockState state, int index) {
        this.mimic = state;
        return true;
    }

    @Override
    public void load(CompoundTag compound) {
        super.load(compound);
        this.mimic = Utils.readBlockState(compound.getCompound("Mimic"), this.f_58857_);
    }

    @Override
    public void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        tag.put("Mimic", NbtUtils.writeBlockState(this.mimic));
    }

    public ClientboundBlockEntityDataPacket getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }

    @Override
    public CompoundTag getUpdateTag() {
        return this.m_187482_();
    }
}