package org.violetmoon.quark.content.tools.item;

import net.minecraft.core.BlockPos;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.ClipContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.BlockHitResult;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.base.Quark;
import org.violetmoon.quark.content.tools.module.BottledCloudModule;
import org.violetmoon.zeta.item.ZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;

public class BottledCloudItem extends ZetaItem {

    public BottledCloudItem(ZetaModule module) {
        super("bottled_cloud", module, new Item.Properties());
        CreativeTabManager.addToCreativeTabNextTo(CreativeModeTabs.TOOLS_AND_UTILITIES, this, Items.MILK_BUCKET, false);
    }

    @NotNull
    @Override
    public InteractionResultHolder<ItemStack> use(@NotNull Level world, Player player, @NotNull InteractionHand hand) {
        ItemStack stack = player.m_21120_(hand);
        if (Quark.ZETA.raytracingUtil.rayTrace(player, world, player, ClipContext.Block.OUTLINE, ClipContext.Fluid.ANY) instanceof BlockHitResult bresult) {
            BlockPos pos = bresult.getBlockPos();
            if (!world.m_46859_(pos)) {
                pos = pos.relative(bresult.getDirection());
            }
            if (world.m_46859_(pos) && Quark.FLAN_INTEGRATION.canPlace(player, pos)) {
                if (!world.isClientSide) {
                    world.m_142346_(player, GameEvent.BLOCK_PLACE, pos);
                    world.setBlockAndUpdate(pos, BottledCloudModule.cloud.defaultBlockState());
                }
                stack.shrink(1);
                if (!player.getAbilities().instabuild) {
                    ItemStack returnStack = new ItemStack(Items.GLASS_BOTTLE);
                    if (stack.isEmpty()) {
                        stack = returnStack;
                    } else if (!player.addItem(returnStack)) {
                        player.drop(returnStack, false);
                    }
                }
                player.getCooldowns().addCooldown(this, 10);
                return InteractionResultHolder.sidedSuccess(stack, world.isClientSide);
            }
        }
        return InteractionResultHolder.pass(stack);
    }
}