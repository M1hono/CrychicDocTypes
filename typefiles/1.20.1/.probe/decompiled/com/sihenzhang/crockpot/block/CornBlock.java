package com.sihenzhang.crockpot.block;

import com.sihenzhang.crockpot.item.CrockPotItems;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;

public class CornBlock extends AbstractCrockPotDoubleCropBlock {

    private static final VoxelShape[] SHAPES = new VoxelShape[] { Block.box(0.0, 0.0, 0.0, 16.0, 4.0, 16.0), Block.box(0.0, 0.0, 0.0, 16.0, 8.0, 16.0), Block.box(0.0, 0.0, 0.0, 16.0, 12.0, 16.0), Shapes.block(), Block.box(0.0, 0.0, 0.0, 16.0, 8.0, 16.0), Block.box(0.0, 0.0, 0.0, 16.0, 14.0, 16.0), Shapes.block(), Shapes.block() };

    @Override
    public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) {
        return SHAPES[state.m_61143_(this.m_7959_())];
    }

    @Override
    protected ItemLike getBaseSeedId() {
        return CrockPotItems.CORN_SEEDS.get();
    }
}