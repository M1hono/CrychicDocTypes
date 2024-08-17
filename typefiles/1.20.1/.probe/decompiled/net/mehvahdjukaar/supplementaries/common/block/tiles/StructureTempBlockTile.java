package net.mehvahdjukaar.supplementaries.common.block.tiles;

import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;

public class StructureTempBlockTile extends BlockEntity {

    public StructureTempBlockTile(BlockPos pos, BlockState state) {
        super((BlockEntityType<?>) ModRegistry.STRUCTURE_TEMP_TILE.get(), pos, state);
    }

    public static void tick(Level level, BlockPos pos, BlockState state, StructureTempBlockTile e) {
        if (state.m_60734_() == ModRegistry.STRUCTURE_TEMP.get()) {
            level.removeBlock(pos, false);
        }
    }
}