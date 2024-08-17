package team.lodestar.lodestone.systems.block.sign;

import net.minecraft.core.BlockPos;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.WallSignBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.WoodType;
import team.lodestar.lodestone.systems.blockentity.LodestoneSignBlockEntity;

public class LodestoneWallSignBlock extends WallSignBlock implements EntityBlock {

    public LodestoneWallSignBlock(BlockBehaviour.Properties properties, WoodType type) {
        super(properties, type);
    }

    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new LodestoneSignBlockEntity(pos, state);
    }
}