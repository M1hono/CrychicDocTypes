package org.violetmoon.zeta.util.handler;

import com.google.common.collect.HashBiMap;
import com.google.common.collect.HashMultimap;
import com.google.common.collect.Multimap;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import net.minecraft.advancements.CriteriaTriggers;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BooleanProperty;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraftforge.common.ToolAction;
import net.minecraftforge.common.ToolActions;
import org.apache.commons.lang3.tuple.Pair;
import org.violetmoon.zeta.advancement.modifier.WaxModifier;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.bus.PlayEvent;
import org.violetmoon.zeta.event.load.ZCommonSetup;
import org.violetmoon.zeta.event.play.ZBlock;
import org.violetmoon.zeta.event.play.entity.player.ZRightClickBlock;
import org.violetmoon.zeta.module.ZetaModule;

public final class ToolInteractionHandler {

    private static final Map<Block, Block> cleanToWaxMap = HashBiMap.create();

    private static final List<ToolInteractionHandler.BooleanPropertyWaxableBlock> booleanPropertySet = new ArrayList();

    private static final Map<ToolAction, Map<Block, Block>> interactionMaps = new HashMap();

    private static final Multimap<ZetaModule, Pair<Block, Block>> waxingByModule = HashMultimap.create();

    public static void registerWaxedBlock(ZetaModule module, Block clean, Block waxed) {
        cleanToWaxMap.put(clean, waxed);
        registerInteraction(ToolActions.AXE_WAX_OFF, waxed, clean);
        waxingByModule.put(module, Pair.of(clean, waxed));
    }

    public static void registerWaxedBlockBooleanProperty(ZetaModule module, Block block, BooleanProperty property) {
        ToolInteractionHandler.BooleanPropertyWaxableBlock booleanPropertyWaxableBlock = new ToolInteractionHandler.BooleanPropertyWaxableBlock(module, block, property, ToolActions.AXE_WAX_OFF);
        booleanPropertySet.add(booleanPropertyWaxableBlock);
        waxingByModule.put(module, Pair.of(block, block));
    }

    public static void registerInteraction(ToolAction action, Block in, Block out) {
        if (!interactionMaps.containsKey(action)) {
            interactionMaps.put(action, new HashMap());
        }
        Map<Block, Block> map = (Map<Block, Block>) interactionMaps.get(action);
        map.put(in, out);
    }

    @LoadEvent
    public static void addModifiers(ZCommonSetup event) {
        event.enqueueWork(() -> {
            for (ZetaModule module : waxingByModule.keySet()) {
                Collection<Pair<Block, Block>> pairs = waxingByModule.get(module);
                Set<Block> unwaxed = new HashSet();
                Set<Block> waxed = new HashSet();
                for (Pair<Block, Block> pair : pairs) {
                    unwaxed.add((Block) pair.getLeft());
                    waxed.add((Block) pair.getRight());
                }
                module.zeta.advancementModifierRegistry.addModifier(new WaxModifier(module, unwaxed, waxed));
            }
        });
    }

    @PlayEvent
    public static void toolActionEvent(ZBlock.BlockToolModification event) {
        ToolAction action = event.getToolAction();
        if (interactionMaps.containsKey(action)) {
            Map<Block, Block> map = (Map<Block, Block>) interactionMaps.get(action);
            BlockState state = event.getState();
            Block block = state.m_60734_();
            if (map.containsKey(block)) {
                Block finalBlock = (Block) map.get(block);
                event.setFinalState(copyState(state, finalBlock));
            }
        }
        for (ToolInteractionHandler.BooleanPropertyWaxableBlock waxableBlock : booleanPropertySet) {
            if (waxableBlock.action == action) {
                BlockState state = event.getState();
                Block block = state.m_60734_();
                if (waxableBlock.block == block && (Boolean) state.m_61143_(waxableBlock.property)) {
                    event.setFinalState((BlockState) copyState(state, waxableBlock.block).m_61124_(waxableBlock.property, false));
                }
            }
        }
    }

    @PlayEvent
    public static void itemUse(ZRightClickBlock event) {
        ItemStack stack = event.getItemStack();
        if (stack.getItem() == Items.HONEYCOMB) {
            BlockPos pos = event.getPos();
            Level world = event.getLevel();
            BlockState state = world.getBlockState(pos);
            Block block = state.m_60734_();
            if (cleanToWaxMap.containsKey(block)) {
                Block alternate = (Block) cleanToWaxMap.get(block);
                if (event.getEntity() instanceof ServerPlayer sp) {
                    CriteriaTriggers.ITEM_USED_ON_BLOCK.trigger(sp, pos, stack);
                }
                if (!world.isClientSide) {
                    world.setBlockAndUpdate(pos, copyState(state, alternate));
                }
                world.m_5898_(event.getPlayer(), 3003, pos, 0);
                if (!event.getPlayer().getAbilities().instabuild) {
                    stack.setCount(stack.getCount() - 1);
                }
                event.setCanceled(true);
                event.setCancellationResult(InteractionResult.SUCCESS);
            }
            for (ToolInteractionHandler.BooleanPropertyWaxableBlock waxableBlock : booleanPropertySet) {
                if (waxableBlock.block == block && !(Boolean) state.m_61143_(waxableBlock.property)) {
                    if (event.getEntity() instanceof ServerPlayer sp) {
                        CriteriaTriggers.ITEM_USED_ON_BLOCK.trigger(sp, pos, stack);
                    }
                    if (!world.isClientSide) {
                        world.setBlockAndUpdate(pos, (BlockState) copyState(state, waxableBlock.block).m_61124_(waxableBlock.property, true));
                    }
                    world.m_5898_(event.getPlayer(), 3003, pos, 0);
                    if (!event.getPlayer().getAbilities().instabuild) {
                        stack.setCount(stack.getCount() - 1);
                    }
                    event.setCanceled(true);
                    event.setCancellationResult(InteractionResult.SUCCESS);
                }
            }
        }
    }

    private static BlockState copyState(BlockState original, Block newBlock) {
        BlockState retState = newBlock.defaultBlockState();
        for (Property prop : original.m_61147_()) {
            if (retState.m_61138_(prop)) {
                retState = (BlockState) retState.m_61124_(prop, original.m_61143_(prop));
            }
        }
        return retState;
    }

    public static class BooleanPropertyWaxableBlock {

        public ZetaModule module;

        public Block block;

        public BooleanProperty property;

        public ToolAction action;

        private BooleanPropertyWaxableBlock(ZetaModule module, Block block, BooleanProperty property, ToolAction action) {
            this.module = module;
            this.block = block;
            this.property = property;
            this.action = action;
        }
    }
}