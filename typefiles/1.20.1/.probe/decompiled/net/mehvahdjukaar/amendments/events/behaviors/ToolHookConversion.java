package net.mehvahdjukaar.amendments.events.behaviors;

import net.mehvahdjukaar.amendments.common.block.ToolHookBlock;
import net.mehvahdjukaar.amendments.common.tile.ToolHookBlockTile;
import net.mehvahdjukaar.amendments.configs.CommonConfigs;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.TripWireHookBlock;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;

public class ToolHookConversion implements BlockUse {

    @Override
    public boolean altersWorld() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return (Boolean) CommonConfigs.TOOL_HOOK.get();
    }

    @Override
    public boolean appliesToBlock(Block block) {
        return block == Blocks.TRIPWIRE_HOOK;
    }

    @Override
    public InteractionResult tryPerformingAction(BlockState state, BlockPos pos, Level level, Player player, InteractionHand hand, ItemStack stack, BlockHitResult hit) {
        if (player.isSecondaryUseActive() && ToolHookBlockTile.isValidTool(stack.getItem()) && !(Boolean) state.m_61143_(TripWireHookBlock.POWERED) && !(Boolean) state.m_61143_(TripWireHookBlock.ATTACHED)) {
            level.setBlockAndUpdate(pos, ((ToolHookBlock) ModRegistry.TOOL_HOOK.get()).m_152465_(state));
            if (level.getBlockEntity(pos) instanceof ToolHookBlockTile tile) {
                return tile.interact(player, hand);
            }
        }
        return InteractionResult.PASS;
    }
}