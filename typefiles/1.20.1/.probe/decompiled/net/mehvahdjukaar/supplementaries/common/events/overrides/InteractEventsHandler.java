package net.mehvahdjukaar.supplementaries.common.events.overrides;

import java.util.ArrayList;
import java.util.IdentityHashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.mehvahdjukaar.supplementaries.common.utils.BlockUtil;
import net.mehvahdjukaar.supplementaries.integration.CompatHandler;
import net.mehvahdjukaar.supplementaries.integration.FlanCompat;
import net.minecraft.ChatFormatting;
import net.minecraft.advancements.CriteriaTriggers;
import net.minecraft.core.BlockPos;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.sounds.SoundSource;
import net.minecraft.tags.FluidTags;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.world.phys.BlockHitResult;
import org.jetbrains.annotations.Nullable;

public class InteractEventsHandler {

    private static final Map<Item, ItemUseOnBlockOverride> ITEM_USE_ON_BLOCK_HP = new IdentityHashMap();

    private static final Map<Item, ItemUseOnBlockOverride> ITEM_USE_ON_BLOCK = new IdentityHashMap();

    private static final Map<Item, ItemUseOverride> ITEM_USE = new IdentityHashMap();

    private static final Map<Block, BlockUseOverride> BLOCK_USE = new IdentityHashMap();

    public static boolean hasBlockPlacementAssociated(Item item) {
        ItemUseOnBlockOverride v = (ItemUseOnBlockOverride) ITEM_USE_ON_BLOCK.getOrDefault(item, (ItemUseOnBlockOverride) ITEM_USE_ON_BLOCK_HP.get(item));
        return v != null && v.placesBlock();
    }

    public static void init() {
    }

    public static void setupOverrides() {
        ITEM_USE_ON_BLOCK.clear();
        ITEM_USE_ON_BLOCK_HP.clear();
        ITEM_USE.clear();
        BLOCK_USE.clear();
        List<ItemUseOnBlockOverride> itemUseOnBlockHP = new ArrayList();
        List<ItemUseOnBlockOverride> itemUseOnBlock = new ArrayList();
        List<ItemUseOverride> itemUse = new ArrayList();
        List<BlockUseOverride> blockUse = new ArrayList();
        blockUse.add(new FDStickBehavior());
        itemUse.add(new ThrowableBricksBehavior());
        itemUse.add(new ClockItemBehavior());
        itemUse.add(new CompassItemBehavior());
        itemUseOnBlockHP.add(new AntiqueInkBehavior());
        itemUseOnBlockHP.add(new SoapBehavior());
        itemUseOnBlockHP.add(new WrenchBehavior());
        itemUseOnBlock.add(new WrittenBookHackBehavior());
        itemUseOnBlock.add(new MapMarkerBehavior());
        itemUseOnBlock.add(new XPBottlingBehavior());
        label63: for (Item i : BuiltInRegistries.ITEM) {
            for (ItemUseOnBlockOverride b : itemUseOnBlock) {
                if (b.appliesToItem(i)) {
                    ITEM_USE_ON_BLOCK.put(i, b);
                    continue label63;
                }
            }
            for (ItemUseOverride bx : itemUse) {
                if (bx.appliesToItem(i)) {
                    ITEM_USE.put(i, bx);
                    continue label63;
                }
            }
            Iterator var11 = itemUseOnBlockHP.iterator();
            ItemUseOnBlockOverride bxx;
            do {
                if (!var11.hasNext()) {
                    continue label63;
                }
                bxx = (ItemUseOnBlockOverride) var11.next();
            } while (!bxx.appliesToItem(i));
            ITEM_USE_ON_BLOCK_HP.put(i, bxx);
        }
        for (Block block : BuiltInRegistries.BLOCK) {
            for (BlockUseOverride bxx : blockUse) {
                if (bxx.appliesToBlock(block)) {
                    BLOCK_USE.put(block, bxx);
                    break;
                }
            }
        }
    }

    public static InteractionResult onItemUsedOnBlockHP(Player player, Level level, ItemStack stack, InteractionHand hand, BlockHitResult hit) {
        Item item = stack.getItem();
        ItemUseOnBlockOverride override = (ItemUseOnBlockOverride) ITEM_USE_ON_BLOCK_HP.get(item);
        if (override == null || !override.isEnabled()) {
            return InteractionResult.PASS;
        } else if (CompatHandler.FLAN && override.altersWorld() && !FlanCompat.canPlace(player, hit.getBlockPos())) {
            return InteractionResult.PASS;
        } else {
            return override.altersWorld() && !Utils.mayPerformBlockAction(player, hit.getBlockPos(), stack) ? InteractionResult.PASS : override.tryPerformingAction(level, player, hand, stack, hit);
        }
    }

    public static InteractionResult onItemUsedOnBlock(Player player, Level level, ItemStack stack, InteractionHand hand, BlockHitResult hit) {
        Item item = stack.getItem();
        ItemUseOnBlockOverride override = (ItemUseOnBlockOverride) ITEM_USE_ON_BLOCK.get(item);
        BlockPos pos = hit.getBlockPos();
        boolean canAlter = Utils.mayPerformBlockAction(player, pos, stack) && (!CompatHandler.FLAN || FlanCompat.canPlace(player, pos));
        if (override != null && override.isEnabled()) {
            if (override.altersWorld() && !canAlter) {
                return InteractionResult.PASS;
            }
            InteractionResult result = override.tryPerformingAction(level, player, hand, stack, hit);
            if (result != InteractionResult.PASS) {
                return result;
            }
        }
        if (!player.m_6144_()) {
            BlockState state = level.getBlockState(pos);
            BlockUseOverride o = (BlockUseOverride) BLOCK_USE.get(state.m_60734_());
            if (o != null && o.isEnabled()) {
                if (o.altersWorld() && !canAlter) {
                    return InteractionResult.PASS;
                }
                return o.tryPerformingAction(state, pos, level, player, hand, stack, hit);
            }
        }
        return InteractionResult.PASS;
    }

    public static InteractionResultHolder<ItemStack> onItemUse(Player player, Level level, InteractionHand hand, ItemStack stack) {
        Item item = stack.getItem();
        ItemUseOverride override = (ItemUseOverride) ITEM_USE.get(item);
        if (override != null && override.isEnabled()) {
            InteractionResult ret = override.tryPerformingAction(level, player, hand, stack, null);
            return switch(ret) {
                case CONSUME ->
                    InteractionResultHolder.consume(stack);
                case SUCCESS ->
                    InteractionResultHolder.success(stack);
                case FAIL ->
                    InteractionResultHolder.fail(stack);
                default ->
                    InteractionResultHolder.pass(stack);
            };
        } else {
            return InteractionResultHolder.pass(stack);
        }
    }

    public static void addOverrideTooltips(ItemStack itemStack, TooltipFlag tooltipFlag, List<Component> components) {
        Item item = itemStack.getItem();
        ItemUseOnBlockOverride override = (ItemUseOnBlockOverride) ITEM_USE_ON_BLOCK.get(item);
        if (override != null && override.isEnabled()) {
            MutableComponent t = override.getTooltip();
            if (t != null) {
                components.add(t.withStyle(ChatFormatting.DARK_GRAY).withStyle(ChatFormatting.ITALIC));
            }
        } else {
            ItemUseOverride o = (ItemUseOverride) ITEM_USE.get(item);
            if (o != null && o.isEnabled()) {
                MutableComponent t = o.getTooltip();
                if (t != null) {
                    components.add(t.withStyle(ChatFormatting.DARK_GRAY).withStyle(ChatFormatting.ITALIC));
                }
            }
        }
    }

    public static InteractionResult replaceSimilarBlock(Block blockOverride, Player player, ItemStack stack, BlockPos pos, Level level, BlockState replaced, @Nullable SoundType sound, Property<?>... properties) {
        BlockState newState = blockOverride.defaultBlockState();
        for (Property<?> p : properties) {
            newState = BlockUtil.replaceProperty(replaced, newState, p);
        }
        if (newState.m_61138_(BlockStateProperties.WATERLOGGED)) {
            FluidState fluidstate = level.getFluidState(pos);
            newState = (BlockState) newState.m_61124_(BlockStateProperties.WATERLOGGED, fluidstate.is(FluidTags.WATER) && fluidstate.getAmount() == 8);
        }
        if (!level.setBlock(pos, newState, 3)) {
            return InteractionResult.FAIL;
        } else {
            if (player instanceof ServerPlayer serverPlayer) {
                CriteriaTriggers.PLACED_BLOCK.trigger(serverPlayer, pos, stack);
            }
            level.m_142346_(player, GameEvent.BLOCK_PLACE, pos);
            if (sound == null) {
                sound = newState.m_60827_();
            }
            level.playSound(player, pos, sound.getPlaceSound(), SoundSource.BLOCKS, (sound.getVolume() + 1.0F) / 2.0F, sound.getPitch() * 0.8F);
            if (player == null || !player.getAbilities().instabuild) {
                stack.shrink(1);
            }
            return InteractionResult.sidedSuccess(level.isClientSide);
        }
    }
}