package net.mehvahdjukaar.amendments.events.behaviors;

import net.mehvahdjukaar.amendments.common.tile.DoubleSkullBlockTile;
import net.mehvahdjukaar.amendments.configs.CommonConfigs;
import net.mehvahdjukaar.amendments.integration.CompatHandler;
import net.mehvahdjukaar.amendments.integration.SuppCompat;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SkullBlock;
import net.minecraft.world.level.block.entity.SkullBlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;
import org.jetbrains.annotations.Nullable;

class SkullPileConversion implements ItemUseOnBlock {

    @Override
    public boolean altersWorld() {
        return true;
    }

    @Override
    public boolean placesBlock() {
        return true;
    }

    @Nullable
    @Override
    public MutableComponent getTooltip() {
        return Component.translatable("message.amendments.double_cake");
    }

    @Override
    public boolean isEnabled() {
        return (Boolean) CommonConfigs.SKULL_PILES.get();
    }

    @Override
    public boolean appliesToItem(Item item) {
        if (item instanceof BlockItem bi && bi.getBlock() instanceof SkullBlock skull && skull.m_48754_() != SkullBlock.Types.DRAGON && (!CompatHandler.SUPPLEMENTARIES || !SuppCompat.isEndermanHead(skull))) {
            return true;
        }
        return false;
    }

    @Override
    public InteractionResult tryPerformingAction(Level world, Player player, InteractionHand hand, ItemStack stack, BlockHitResult hit) {
        BlockPos pos = hit.getBlockPos();
        if (world.getBlockEntity(pos) instanceof SkullBlockEntity oldTile) {
            BlockState state = oldTile.m_58900_();
            if (state.m_60734_() instanceof SkullBlock skullBlock && skullBlock.m_48754_() != SkullBlock.Types.DRAGON) {
                ItemStack copy = stack.copy();
                InteractionResult result = InteractEvents.replaceSimilarBlock((Block) ModRegistry.SKULL_PILE.get(), player, stack, pos, world, state, null, true, true, SkullBlock.ROTATION);
                if (result.consumesAction() && world.getBlockEntity(pos) instanceof DoubleSkullBlockTile tile) {
                    tile.initialize(oldTile, copy, player, hand);
                }
                return result;
            }
        }
        return InteractionResult.PASS;
    }
}