package com.github.alexthe666.alexsmobs.item;

import com.github.alexthe666.alexsmobs.entity.EntitySquidGrapple;
import com.github.alexthe666.alexsmobs.entity.util.SquidGrappleUtil;
import com.github.alexthe666.alexsmobs.misc.AMSoundRegistry;
import java.util.List;
import javax.annotation.Nullable;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.HumanoidArm;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.Vec3;

public class ItemSquidGrapple extends Item {

    public ItemSquidGrapple(Item.Properties properties) {
        super(properties);
    }

    @Override
    public int getUseDuration(ItemStack itemStack0) {
        return 72000;
    }

    @Override
    public UseAnim getUseAnimation(ItemStack stack) {
        return UseAnim.BOW;
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level0, Player player1, InteractionHand interactionHand2) {
        ItemStack itemstack = player1.m_21120_(interactionHand2);
        player1.m_6672_(interactionHand2);
        return InteractionResultHolder.pass(itemstack);
    }

    @Override
    public void onUseTick(Level worldIn, LivingEntity livingEntityIn, ItemStack stack, int count) {
    }

    @Override
    public void releaseUsing(ItemStack stack, Level worldIn, LivingEntity livingEntityIn, int i) {
        if (!livingEntityIn.isFallFlying()) {
            livingEntityIn.m_5496_(AMSoundRegistry.GIANT_SQUID_TENTACLE.get(), 1.0F, 1.0F + (livingEntityIn.getRandom().nextFloat() - livingEntityIn.getRandom().nextFloat()) * 0.2F);
            livingEntityIn.m_146850_(GameEvent.ITEM_INTERACT_FINISH);
            if (!worldIn.isClientSide) {
                boolean left = false;
                if (livingEntityIn.getUsedItemHand() == InteractionHand.OFF_HAND && livingEntityIn.getMainArm() == HumanoidArm.RIGHT || livingEntityIn.getUsedItemHand() == InteractionHand.MAIN_HAND && livingEntityIn.getMainArm() == HumanoidArm.LEFT) {
                    left = true;
                }
                int power = this.getUseDuration(stack) - i;
                EntitySquidGrapple hook = new EntitySquidGrapple(worldIn, livingEntityIn, !left);
                Vec3 vector3d = livingEntityIn.m_20252_(1.0F);
                hook.shoot(vector3d.x(), vector3d.y(), vector3d.z(), getPowerForTime(power) * 3.0F, 1.0F);
                hook.m_146926_(livingEntityIn.m_146909_());
                hook.m_146922_(livingEntityIn.m_146908_());
                if (!worldIn.isClientSide) {
                    worldIn.m_7967_(hook);
                }
                stack.hurtAndBreak(1, livingEntityIn, playerIn -> livingEntityIn.broadcastBreakEvent(playerIn.getUsedItemHand()));
                SquidGrappleUtil.onFireHook(livingEntityIn, hook.m_20148_());
            }
        }
    }

    @Override
    public boolean isValidRepairItem(ItemStack s, ItemStack s1) {
        return s1.is(AMItemRegistry.LOST_TENTACLE.get());
    }

    public static float getPowerForTime(int p) {
        float f = (float) p / 20.0F;
        f = (f * f + f + f * 2.0F) / 4.0F;
        if (f > 1.0F) {
            f = 1.0F;
        }
        return f;
    }

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        tooltip.add(Component.translatable("item.alexsmobs.squid_grapple.desc").withStyle(ChatFormatting.GRAY));
    }
}