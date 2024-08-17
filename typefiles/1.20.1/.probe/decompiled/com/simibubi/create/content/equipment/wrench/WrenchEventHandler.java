package com.simibubi.create.content.equipment.wrench;

import com.simibubi.create.AllItems;
import com.simibubi.create.AllTags;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.eventbus.api.EventPriority;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;

@EventBusSubscriber
public class WrenchEventHandler {

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void useOwnWrenchLogicForCreateBlocks(PlayerInteractEvent.RightClickBlock event) {
        Player player = event.getEntity();
        ItemStack itemStack = event.getItemStack();
        if (!event.isCanceled()) {
            if (event.getLevel() != null) {
                if (player != null && player.mayBuild()) {
                    if (!itemStack.isEmpty()) {
                        if (!AllItems.WRENCH.isIn(itemStack)) {
                            if (AllTags.AllItemTags.WRENCH.matches(itemStack.getItem())) {
                                BlockState state = event.getLevel().getBlockState(event.getPos());
                                Block block = state.m_60734_();
                                if (block instanceof IWrenchable) {
                                    BlockHitResult hitVec = event.getHitVec();
                                    UseOnContext context = new UseOnContext(player, event.getHand(), hitVec);
                                    IWrenchable actor = (IWrenchable) block;
                                    InteractionResult result = player.m_6144_() ? actor.onSneakWrenched(state, context) : actor.onWrenched(state, context);
                                    event.setCanceled(true);
                                    event.setCancellationResult(result);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}