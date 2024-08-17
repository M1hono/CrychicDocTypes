package net.mehvahdjukaar.supplementaries.common.block.blocks;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import net.mehvahdjukaar.moonlight.api.block.IRotatable;
import net.mehvahdjukaar.supplementaries.common.block.tiles.SignPostBlockTile;
import net.mehvahdjukaar.supplementaries.common.utils.BlockUtil;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.RenderShape;
import net.minecraft.world.level.block.Rotation;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.storage.loot.LootParams;
import net.minecraft.world.level.storage.loot.parameters.LootContextParams;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.HitResult;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.Nullable;

public class SignPostBlock extends FenceMimicBlock implements EntityBlock, IRotatable {

    public SignPostBlock(BlockBehaviour.Properties properties) {
        super(properties);
    }

    @Override
    public RenderShape getRenderShape(BlockState state) {
        return RenderShape.MODEL;
    }

    @Override
    public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand handIn, BlockHitResult hit) {
        if (level instanceof ServerLevel serverLevel) {
            ItemStack itemstack = player.m_21120_(handIn);
            if (level.getBlockEntity(pos) instanceof SignPostBlockTile tile && tile.isAccessibleBy(player)) {
                return tile.handleInteraction(state, serverLevel, pos, player, handIn, hit, itemstack);
            }
            return InteractionResult.PASS;
        } else {
            return InteractionResult.SUCCESS;
        }
    }

    public ItemStack getCloneItemStack(BlockState state, HitResult target, BlockGetter world, BlockPos pos, Player player) {
        if (world.getBlockEntity(pos) instanceof SignPostBlockTile tile) {
            SignPostBlockTile.Sign sign = tile.getClickedSign(target.getLocation());
            return sign.active() ? sign.getItem() : new ItemStack(tile.getHeldBlock().m_60734_());
        } else {
            return new ItemStack(this);
        }
    }

    @Override
    public List<ItemStack> getDrops(BlockState state, LootParams.Builder builder) {
        if (builder.getOptionalParameter(LootContextParams.BLOCK_ENTITY) instanceof SignPostBlockTile tile) {
            List<ItemStack> list = new ArrayList();
            list.add(new ItemStack(tile.getHeldBlock().m_60734_()));
            SignPostBlockTile.Sign up = tile.getSignUp();
            SignPostBlockTile.Sign down = tile.getSignDown();
            if (up.active()) {
                list.add(up.getItem());
            }
            if (down.active()) {
                list.add(down.getItem());
            }
            return list;
        } else {
            return super.m_49635_(state, builder);
        }
    }

    public BlockState rotate(BlockState state, LevelAccessor world, BlockPos pos, Rotation rot) {
        return state;
    }

    @Override
    public Optional<BlockState> getRotatedState(BlockState state, LevelAccessor world, BlockPos pos, Rotation rotation, Direction axis, @Nullable Vec3 hit) {
        return Optional.of(state);
    }

    @Override
    public Optional<Direction> rotateOverAxis(BlockState state, LevelAccessor world, BlockPos pos, Rotation rot, Direction axis, @Nullable Vec3 hit) {
        boolean success = false;
        if (world.m_7702_(pos) instanceof SignPostBlockTile tile) {
            boolean simple = hit == null;
            boolean ccw = rot.equals(Rotation.COUNTERCLOCKWISE_90);
            float angle = simple ? (float) (ccw ? 90 : -90) : 22.5F * (float) (ccw ? 1 : -1);
            if (simple) {
                if (tile.rotateSign(true, angle, false)) {
                    success = true;
                }
                if (tile.rotateSign(false, angle, false)) {
                    success = true;
                }
            } else {
                boolean up = hit.y % (double) ((int) hit.y) > 0.5;
                if (tile.rotateSign(up, angle, true)) {
                    success = true;
                } else if (tile.rotateSign(!up, angle, true)) {
                    success = true;
                }
            }
            if (success) {
                tile.m_6596_();
                if (world instanceof Level level) {
                    level.sendBlockUpdated(pos, state, state, 3);
                }
                return Optional.of(Direction.UP);
            }
        }
        return Optional.empty();
    }

    @Nullable
    @Override
    public BlockEntity newBlockEntity(BlockPos pPos, BlockState pState) {
        return new SignPostBlockTile(pPos, pState);
    }

    @Override
    public void setPlacedBy(Level worldIn, BlockPos pos, BlockState state, LivingEntity placer, ItemStack stack) {
        BlockUtil.addOptionalOwnership(placer, worldIn, pos);
    }
}