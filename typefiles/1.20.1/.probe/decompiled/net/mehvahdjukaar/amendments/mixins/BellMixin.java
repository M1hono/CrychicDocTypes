package net.mehvahdjukaar.amendments.mixins;

import net.mehvahdjukaar.amendments.common.IBellConnections;
import net.mehvahdjukaar.amendments.integration.CompatHandler;
import net.mehvahdjukaar.amendments.integration.SuppCompat;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.BellBlock;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.ChainBlock;
import net.minecraft.world.level.block.RotatedPillarBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ BellBlock.class })
public abstract class BellMixin extends Block {

    protected BellMixin(BlockBehaviour.Properties properties) {
        super(properties);
    }

    public boolean tryConnect(BlockPos pos, BlockState facingState, LevelAccessor world) {
        BlockEntity te = world.m_7702_(pos);
        if (!(te instanceof IBellConnections)) {
            return false;
        } else {
            IBellConnections.BellConnection connection = IBellConnections.BellConnection.NONE;
            if (facingState.m_60734_() instanceof ChainBlock && facingState.m_61143_(RotatedPillarBlock.AXIS) == Direction.Axis.Y) {
                connection = IBellConnections.BellConnection.CHAIN;
            } else if (CompatHandler.SUPPLEMENTARIES && SuppCompat.isRope(facingState.m_60734_())) {
                connection = IBellConnections.BellConnection.ROPE;
            }
            ((IBellConnections) te).amendments$setConnected(connection);
            te.setChanged();
            return true;
        }
    }

    @Inject(method = { "updateShape" }, at = { @At("HEAD") })
    public void updateShape(BlockState stateIn, Direction facing, BlockState facingState, LevelAccessor worldIn, BlockPos currentPos, BlockPos facingPos, CallbackInfoReturnable<BlockState> info) {
        try {
            if (facing == Direction.DOWN && this.tryConnect(currentPos, facingState, worldIn) && worldIn instanceof Level level) {
                level.sendBlockUpdated(currentPos, stateIn, stateIn, 2);
            }
        } catch (Exception var9) {
        }
    }

    @Override
    public void setPlacedBy(Level worldIn, BlockPos pos, BlockState state, LivingEntity placer, ItemStack stack) {
        super.setPlacedBy(worldIn, pos, state, placer, stack);
        this.tryConnect(pos, worldIn.getBlockState(pos.below()), worldIn);
    }
}