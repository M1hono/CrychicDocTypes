package com.simibubi.create.content.kinetics.drill;

import com.simibubi.create.AllBlockEntityTypes;
import com.simibubi.create.AllBlocks;
import com.simibubi.create.AllShapes;
import com.simibubi.create.content.kinetics.base.BlockBreakingKineticBlockEntity;
import com.simibubi.create.content.kinetics.base.DirectionalKineticBlock;
import com.simibubi.create.foundation.block.IBE;
import com.simibubi.create.foundation.damageTypes.CreateDamageSources;
import com.simibubi.create.foundation.placement.IPlacementHelper;
import com.simibubi.create.foundation.placement.PlacementHelpers;
import com.simibubi.create.foundation.placement.PlacementOffset;
import java.util.List;
import java.util.function.Predicate;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.MethodsReturnNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.util.Mth;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.LevelReader;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SimpleWaterloggedBlock;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.world.level.material.Fluids;
import net.minecraft.world.level.material.PushReaction;
import net.minecraft.world.level.pathfinder.PathComputationType;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.VoxelShape;

@ParametersAreNonnullByDefault
@MethodsReturnNonnullByDefault
public class DrillBlock extends DirectionalKineticBlock implements IBE<DrillBlockEntity>, SimpleWaterloggedBlock {

    private static final int placementHelperId = PlacementHelpers.register(new DrillBlock.PlacementHelper());

    public DrillBlock(BlockBehaviour.Properties properties) {
        super(properties);
        this.m_49959_((BlockState) super.m_49966_().m_61124_(BlockStateProperties.WATERLOGGED, false));
    }

    @Override
    public void entityInside(BlockState state, Level worldIn, BlockPos pos, Entity entityIn) {
        if (!(entityIn instanceof ItemEntity)) {
            if (new AABB(pos).deflate(0.1F).intersects(entityIn.getBoundingBox())) {
                this.withBlockEntityDo(worldIn, pos, be -> {
                    if (be.getSpeed() != 0.0F) {
                        entityIn.hurt(CreateDamageSources.drill(worldIn), (float) getDamage(be.getSpeed()));
                    }
                });
            }
        }
    }

    @Override
    public VoxelShape getShape(BlockState state, BlockGetter worldIn, BlockPos pos, CollisionContext context) {
        return AllShapes.CASING_12PX.get((Direction) state.m_61143_(FACING));
    }

    @Override
    public void neighborChanged(BlockState state, Level worldIn, BlockPos pos, Block blockIn, BlockPos fromPos, boolean isMoving) {
        this.withBlockEntityDo(worldIn, pos, BlockBreakingKineticBlockEntity::destroyNextTick);
    }

    @Override
    public Direction.Axis getRotationAxis(BlockState state) {
        return ((Direction) state.m_61143_(FACING)).getAxis();
    }

    @Override
    public boolean hasShaftTowards(LevelReader world, BlockPos pos, BlockState state, Direction face) {
        return face == ((Direction) state.m_61143_(FACING)).getOpposite();
    }

    public PushReaction getPistonPushReaction(BlockState state) {
        return PushReaction.NORMAL;
    }

    @Override
    public boolean isPathfindable(BlockState state, BlockGetter reader, BlockPos pos, PathComputationType type) {
        return false;
    }

    @Override
    public FluidState getFluidState(BlockState state) {
        return state.m_61143_(BlockStateProperties.WATERLOGGED) ? Fluids.WATER.getSource(false) : Fluids.EMPTY.defaultFluidState();
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> builder) {
        builder.add(BlockStateProperties.WATERLOGGED);
        super.createBlockStateDefinition(builder);
    }

    @Override
    public BlockState updateShape(BlockState state, Direction direction, BlockState neighbourState, LevelAccessor world, BlockPos pos, BlockPos neighbourPos) {
        if ((Boolean) state.m_61143_(BlockStateProperties.WATERLOGGED)) {
            world.scheduleTick(pos, Fluids.WATER, Fluids.WATER.m_6718_(world));
        }
        return state;
    }

    @Override
    public BlockState getStateForPlacement(BlockPlaceContext context) {
        FluidState FluidState = context.m_43725_().getFluidState(context.getClickedPos());
        return (BlockState) super.getStateForPlacement(context).m_61124_(BlockStateProperties.WATERLOGGED, FluidState.getType() == Fluids.WATER);
    }

    public static double getDamage(float speed) {
        float speedAbs = Math.abs(speed);
        double sub1 = (double) Math.min(speedAbs / 16.0F, 2.0F);
        double sub2 = (double) Math.min(speedAbs / 32.0F, 4.0F);
        double sub3 = (double) Math.min(speedAbs / 64.0F, 4.0F);
        return Mth.clamp(sub1 + sub2 + sub3, 1.0, 10.0);
    }

    @Override
    public Class<DrillBlockEntity> getBlockEntityClass() {
        return DrillBlockEntity.class;
    }

    @Override
    public BlockEntityType<? extends DrillBlockEntity> getBlockEntityType() {
        return (BlockEntityType<? extends DrillBlockEntity>) AllBlockEntityTypes.DRILL.get();
    }

    @Override
    public InteractionResult use(BlockState state, Level world, BlockPos pos, Player player, InteractionHand hand, BlockHitResult ray) {
        ItemStack heldItem = player.m_21120_(hand);
        IPlacementHelper placementHelper = PlacementHelpers.get(placementHelperId);
        if (!player.m_6144_() && player.mayBuild() && placementHelper.matchesItem(heldItem)) {
            placementHelper.getOffset(player, world, state, pos, ray).placeInWorld(world, (BlockItem) heldItem.getItem(), player, hand, ray);
            return InteractionResult.SUCCESS;
        } else {
            return InteractionResult.PASS;
        }
    }

    @MethodsReturnNonnullByDefault
    private static class PlacementHelper implements IPlacementHelper {

        @Override
        public Predicate<ItemStack> getItemPredicate() {
            return AllBlocks.MECHANICAL_DRILL::isIn;
        }

        @Override
        public Predicate<BlockState> getStatePredicate() {
            return AllBlocks.MECHANICAL_DRILL::has;
        }

        @Override
        public PlacementOffset getOffset(Player player, Level world, BlockState state, BlockPos pos, BlockHitResult ray) {
            List<Direction> directions = IPlacementHelper.orderedByDistanceExceptAxis(pos, ray.m_82450_(), ((Direction) state.m_61143_(DirectionalKineticBlock.FACING)).getAxis(), dir -> world.getBlockState(pos.relative(dir)).m_247087_());
            return directions.isEmpty() ? PlacementOffset.fail() : PlacementOffset.success(pos.relative((Direction) directions.get(0)), s -> (BlockState) s.m_61124_(DirectionalKineticBlock.FACING, (Direction) state.m_61143_(DirectionalKineticBlock.FACING)));
        }
    }
}