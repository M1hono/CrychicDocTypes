package net.mehvahdjukaar.supplementaries.common.block.tiles;

import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;

public class JarBoatTile extends BlockEntity {

    public JarBoatTile(BlockPos pos, BlockState state) {
        super((BlockEntityType<?>) ModRegistry.JAR_BOAT_TILE.get(), pos, state);
    }
}