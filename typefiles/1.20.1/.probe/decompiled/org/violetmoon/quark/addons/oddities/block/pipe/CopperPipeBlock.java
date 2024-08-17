package org.violetmoon.quark.addons.oddities.block.pipe;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.SimpleWaterloggedBlock;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.BooleanProperty;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.world.level.material.Fluids;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.quark.addons.oddities.block.be.PipeBlockEntity;
import org.violetmoon.quark.addons.oddities.module.PipesModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.MiscUtil;

public class CopperPipeBlock extends BasePipeBlock implements SimpleWaterloggedBlock {

    private static final VoxelShape CENTER_SHAPE = Shapes.box(0.3125, 0.3125, 0.3125, 0.6875, 0.6875, 0.6875);

    private static final VoxelShape DOWN_SHAPE = Shapes.box(0.3125, 0.0, 0.3125, 0.6875, 0.6875, 0.6875);

    private static final VoxelShape UP_SHAPE = Shapes.box(0.3125, 0.3125, 0.3125, 0.6875, 1.0, 0.6875);

    private static final VoxelShape NORTH_SHAPE = Shapes.box(0.3125, 0.3125, 0.0, 0.6875, 0.6875, 0.6875);

    private static final VoxelShape SOUTH_SHAPE = Shapes.box(0.3125, 0.3125, 0.3125, 0.6875, 0.6875, 1.0);

    private static final VoxelShape WEST_SHAPE = Shapes.box(0.0, 0.3125, 0.3125, 0.6875, 0.6875, 0.6875);

    private static final VoxelShape EAST_SHAPE = Shapes.box(0.3125, 0.3125, 0.3125, 1.0, 0.6875, 0.6875);

    private static final VoxelShape[] SIDE_BOXES = new VoxelShape[] { DOWN_SHAPE, UP_SHAPE, NORTH_SHAPE, SOUTH_SHAPE, WEST_SHAPE, EAST_SHAPE };

    private static final VoxelShape[] SHAPE_CACHE = new VoxelShape[64];

    public static final BooleanProperty WATERLOGGED = BlockStateProperties.WATERLOGGED;

    public CopperPipeBlock(@Nullable ZetaModule module) {
        super("pipe", SoundType.COPPER, module);
    }

    @Override
    public InteractionResult use(BlockState state, Level worldIn, BlockPos pos, Player player, InteractionHand handIn, BlockHitResult hit) {
        ItemStack stack = player.m_21120_(handIn);
        if (stack.is(Items.GLASS) && PipesModule.enableEncasedPipes) {
            if (worldIn.getBlockEntity(pos) instanceof PipeBlockEntity be) {
                CompoundTag cmp = be.m_187482_();
                if (!worldIn.isClientSide) {
                    worldIn.removeBlockEntity(pos);
                    BlockState target = ((BasePipeBlock) PipesModule.encasedPipe).getTargetState(worldIn, pos);
                    worldIn.setBlock(pos, target, 3);
                    worldIn.updateNeighborsAt(pos, PipesModule.encasedPipe);
                    BlockEntity newBe = worldIn.getBlockEntity(pos);
                    if (newBe != null) {
                        newBe.load(cmp);
                    }
                }
                SoundType type = Blocks.GLASS.defaultBlockState().getSoundType(worldIn, pos, player);
                SoundEvent sound = type.getPlaceSound();
                worldIn.playSound(player, pos, sound, SoundSource.BLOCKS, (type.getVolume() + 1.0F) / 2.0F, type.getPitch() * 0.8F);
                if (!player.getAbilities().instabuild) {
                    stack.shrink(1);
                }
            }
            return InteractionResult.sidedSuccess(worldIn.isClientSide);
        } else {
            return super.use(state, worldIn, pos, player, handIn, hit);
        }
    }

    @Override
    public BlockState getDefaultPipeState() {
        return (BlockState) super.getDefaultPipeState().m_61124_(WATERLOGGED, false);
    }

    @Override
    boolean isPipeWaterlogged(BlockState state) {
        return (Boolean) state.m_61143_(WATERLOGGED);
    }

    @Override
    protected BlockState getTargetState(LevelAccessor level, BlockPos pos) {
        return (BlockState) super.getTargetState(level, pos).m_61124_(WATERLOGGED, level.m_6425_(pos).getType() == Fluids.WATER);
    }

    @NotNull
    @Override
    public FluidState getFluidState(BlockState state) {
        return this.isPipeWaterlogged(state) ? Fluids.WATER.getSource(false) : super.m_5888_(state);
    }

    @NotNull
    @Override
    public BlockState updateShape(BlockState state, @NotNull Direction direction, @NotNull BlockState neighbor, @NotNull LevelAccessor level, @NotNull BlockPos pos, @NotNull BlockPos neighborPos) {
        if (this.isPipeWaterlogged(state)) {
            level.scheduleTick(pos, Fluids.WATER, Fluids.WATER.m_6718_(level));
        }
        return super.updateShape(state, direction, neighbor, level, pos, neighborPos);
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> builder) {
        super.createBlockStateDefinition(builder);
        builder.add(WATERLOGGED);
    }

    @NotNull
    @Override
    public VoxelShape getShape(@NotNull BlockState state, @NotNull BlockGetter worldIn, @NotNull BlockPos pos, @NotNull CollisionContext context) {
        int index = 0;
        for (Direction dir : Direction.values()) {
            if ((Boolean) state.m_61143_(MiscUtil.directionProperty(dir))) {
                index += 1 << dir.ordinal();
            }
        }
        VoxelShape cached = SHAPE_CACHE[index];
        if (cached == null) {
            VoxelShape currShape = CENTER_SHAPE;
            for (Direction dirx : Direction.values()) {
                boolean connected = isConnected(state, dirx);
                if (connected) {
                    currShape = Shapes.or(currShape, SIDE_BOXES[dirx.ordinal()]);
                }
            }
            SHAPE_CACHE[index] = currShape;
            cached = currShape;
        }
        return cached;
    }
}