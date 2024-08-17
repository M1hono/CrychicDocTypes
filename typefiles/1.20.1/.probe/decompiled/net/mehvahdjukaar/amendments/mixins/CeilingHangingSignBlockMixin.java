package net.mehvahdjukaar.amendments.mixins;

import java.util.ArrayList;
import java.util.List;
import net.mehvahdjukaar.amendments.common.ExtendedHangingSign;
import net.mehvahdjukaar.amendments.configs.ClientConfigs;
import net.mehvahdjukaar.amendments.events.behaviors.HangingSignDisplayItem;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.CeilingHangingSignBlock;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityTicker;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.storage.loot.LootParams;
import net.minecraft.world.level.storage.loot.parameters.LootContextParams;
import net.minecraft.world.phys.BlockHitResult;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ CeilingHangingSignBlock.class })
public abstract class CeilingHangingSignBlockMixin extends Block implements EntityBlock {

    protected CeilingHangingSignBlockMixin(BlockBehaviour.Properties properties) {
        super(properties);
    }

    @Inject(method = { "updateShape" }, at = { @At("HEAD") })
    public void amendments$updateExtension(BlockState state, Direction direction, BlockState neighborState, LevelAccessor level, BlockPos currentPos, BlockPos neighborPos, CallbackInfoReturnable<BlockState> cir) {
        if (level.m_7702_(currentPos) instanceof ExtendedHangingSign tile) {
            tile.getExtension().updateShape(state, direction, neighborState, level, currentPos, neighborPos);
        }
    }

    @Override
    public void setPlacedBy(Level level, BlockPos pos, BlockState state, @Nullable LivingEntity placer, ItemStack stack) {
        super.setPlacedBy(level, pos, state, placer, stack);
        if (level.getBlockEntity(pos) instanceof ExtendedHangingSign tile) {
            tile.getExtension().updateAttachments(level, pos, state);
        }
    }

    @Override
    public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) {
        super.m_7892_(state, level, pos, entity);
        if (level.isClientSide && (Boolean) ClientConfigs.SWINGING_SIGNS.get() && level.getBlockEntity(pos) instanceof ExtendedHangingSign tile && tile.getExtension().canSwing()) {
            tile.getExtension().getClientAnimation().hitByEntity(entity, state, pos);
        }
    }

    @Nullable
    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level pLevel, BlockState pState, BlockEntityType<T> pBlockEntityType) {
        return !pLevel.isClientSide ? null : (level, blockPos, blockState, blockEntity) -> {
            if ((Boolean) ClientConfigs.SWINGING_SIGNS.get() && blockEntity instanceof ExtendedHangingSign te) {
                te.getExtension().clientTick(level, blockPos, blockState);
            }
        };
    }

    @Inject(method = { "use" }, at = { @At("HEAD") }, cancellable = true)
    public void amendments$use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit, CallbackInfoReturnable<InteractionResult> cir) {
        InteractionResult ret = HangingSignDisplayItem.INSTANCE.tryPerformingAction(state, pos, level, player, hand, player.m_21120_(hand), hit);
        if (ret != InteractionResult.PASS) {
            cir.setReturnValue(ret);
        }
    }

    @Override
    public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) {
        ArrayList<ItemStack> list = new ArrayList(super.m_49635_(state, params));
        if (params.getOptionalParameter(LootContextParams.BLOCK_ENTITY) instanceof ExtendedHangingSign tile) {
            ItemStack backItem = tile.getExtension().getBackItem();
            if (!backItem.isEmpty()) {
                list.add(backItem);
            }
            ItemStack frontItem = tile.getExtension().getFrontItem();
            if (!frontItem.isEmpty()) {
                list.add(frontItem);
            }
        }
        return list;
    }
}