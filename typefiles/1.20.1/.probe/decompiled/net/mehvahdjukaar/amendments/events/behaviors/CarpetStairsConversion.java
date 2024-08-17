package net.mehvahdjukaar.amendments.events.behaviors;

import net.mehvahdjukaar.amendments.common.tile.CarpetedBlockTile;
import net.mehvahdjukaar.amendments.configs.CommonConfigs;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.mehvahdjukaar.amendments.reg.ModTags;
import net.minecraft.core.BlockPos;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.CarpetBlock;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.StairBlock;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Half;
import net.minecraft.world.phys.BlockHitResult;

public class CarpetStairsConversion implements ItemUseOnBlock {

    @Override
    public boolean altersWorld() {
        return true;
    }

    @Override
    public boolean placesBlock() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return (Boolean) CommonConfigs.CARPETED_STAIRS.get();
    }

    @Override
    public boolean appliesToItem(Item item) {
        if (!(item instanceof BlockItem bi)) {
            return false;
        } else {
            Block b = bi.getBlock();
            return b instanceof CarpetBlock || b.builtInRegistryHolder().is(ModTags.STAIRS_CARPETS);
        }
    }

    @Override
    public InteractionResult tryPerformingAction(Level level, Player player, InteractionHand hand, ItemStack stack, BlockHitResult hit) {
        if (!player.isSecondaryUseActive()) {
            BlockPos pos = hit.getBlockPos();
            BlockState stairsState = level.getBlockState(pos);
            Block block = stairsState.m_60734_();
            if (block instanceof StairBlock && stairsState.m_61143_(StairBlock.HALF) == Half.BOTTOM && !(block instanceof EntityBlock)) {
                BlockState carpet = ((BlockItem) stack.getItem()).getBlock().defaultBlockState();
                InteractionResult result = InteractEvents.replaceSimilarBlock((Block) ModRegistry.CARPET_STAIRS.get(), player, stack, pos, level, stairsState, carpet.m_60827_(), false, false, StairBlock.FACING, StairBlock.WATERLOGGED, StairBlock.SHAPE, StairBlock.HALF);
                if (result.consumesAction() && level.getBlockEntity(pos) instanceof CarpetedBlockTile tile) {
                    tile.initialize(stairsState, carpet);
                    return result;
                }
            }
        }
        return InteractionResult.PASS;
    }
}