package org.violetmoon.quark.content.building.item;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.decoration.HangingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.base.util.TriFunction;
import org.violetmoon.zeta.item.ZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;

public class QuarkItemFrameItem extends ZetaItem {

    private final TriFunction<? extends HangingEntity, Level, BlockPos, Direction> entityProvider;

    public QuarkItemFrameItem(String name, ZetaModule module, TriFunction<? extends HangingEntity, Level, BlockPos, Direction> entityProvider) {
        super(name, module, new Item.Properties());
        this.entityProvider = entityProvider;
        CreativeTabManager.addToCreativeTabNextTo(CreativeModeTabs.FUNCTIONAL_BLOCKS, this, Items.GLOW_ITEM_FRAME, false);
    }

    @NotNull
    @Override
    public InteractionResult useOn(UseOnContext context) {
        BlockPos pos = context.getClickedPos();
        Direction facing = context.getClickedFace();
        BlockPos placeLocation = pos.relative(facing);
        Player player = context.getPlayer();
        ItemStack stack = context.getItemInHand();
        if (player != null && !this.canPlace(player, facing, stack, placeLocation)) {
            return InteractionResult.FAIL;
        } else {
            Level world = context.getLevel();
            HangingEntity frame = this.entityProvider.apply(world, placeLocation, facing);
            CompoundTag tag = stack.getTag();
            if (tag != null) {
                EntityType.updateCustomEntityTag(world, player, frame, tag);
            }
            if (frame.survives()) {
                if (!world.isClientSide) {
                    world.m_220400_(player, GameEvent.ENTITY_PLACE, frame.m_20182_());
                    frame.playPlacementSound();
                    world.m_7967_(frame);
                }
                stack.shrink(1);
            }
            return InteractionResult.sidedSuccess(world.isClientSide);
        }
    }

    protected boolean canPlace(Player player, Direction facing, ItemStack stack, BlockPos pos) {
        return !player.m_9236_().m_151570_(pos) && player.mayUseItemAt(pos, facing, stack);
    }
}