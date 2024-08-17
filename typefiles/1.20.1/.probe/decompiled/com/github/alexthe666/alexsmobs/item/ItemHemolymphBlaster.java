package com.github.alexthe666.alexsmobs.item;

import com.github.alexthe666.alexsmobs.entity.EntityHemolymph;
import java.util.function.Predicate;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.util.RandomSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.HumanoidArm;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.Vec3;

public class ItemHemolymphBlaster extends Item {

    public static final Predicate<ItemStack> HEMOLYMPH = stack -> stack.getItem() == AMItemRegistry.HEMOLYMPH_SAC.get();

    public ItemHemolymphBlaster(Item.Properties properties) {
        super(properties);
    }

    @Override
    public int getUseDuration(ItemStack stack) {
        return isUsable(stack) ? Integer.MAX_VALUE : 0;
    }

    @Override
    public boolean isBarVisible(ItemStack itemStack) {
        return super.isBarVisible(itemStack) && isUsable(itemStack);
    }

    @Override
    public UseAnim getUseAnimation(ItemStack stack) {
        return UseAnim.BOW;
    }

    public static boolean isUsable(ItemStack stack) {
        return stack.getDamageValue() < stack.getMaxDamage() - 1;
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level worldIn, Player playerIn, InteractionHand handIn) {
        ItemStack itemstack = playerIn.m_21120_(handIn);
        playerIn.m_6672_(handIn);
        if (!isUsable(itemstack)) {
            ItemStack ammo = this.findAmmo(playerIn);
            boolean flag = playerIn.isCreative();
            if (!ammo.isEmpty()) {
                ammo.shrink(1);
                flag = true;
            }
            if (flag) {
                itemstack.setDamageValue(0);
            }
        }
        return InteractionResultHolder.consume(itemstack);
    }

    public ItemStack findAmmo(Player entity) {
        if (entity.isCreative()) {
            return ItemStack.EMPTY;
        } else {
            for (int i = 0; i < entity.getInventory().getContainerSize(); i++) {
                ItemStack itemstack1 = entity.getInventory().getItem(i);
                if (HEMOLYMPH.test(itemstack1)) {
                    return itemstack1;
                }
            }
            return ItemStack.EMPTY;
        }
    }

    public boolean shouldCauseReequipAnimation(ItemStack oldStack, ItemStack newStack, boolean slotChanged) {
        return !ItemStack.isSameItem(oldStack, newStack);
    }

    @Override
    public void onUseTick(Level worldIn, LivingEntity livingEntityIn, ItemStack stack, int count) {
        if (isUsable(stack)) {
            if (count % 2 == 0) {
                boolean left = false;
                if (livingEntityIn.getUsedItemHand() == InteractionHand.OFF_HAND && livingEntityIn.getMainArm() == HumanoidArm.RIGHT || livingEntityIn.getUsedItemHand() == InteractionHand.MAIN_HAND && livingEntityIn.getMainArm() == HumanoidArm.LEFT) {
                    left = true;
                }
                EntityHemolymph blood = new EntityHemolymph(worldIn, livingEntityIn, !left);
                Vec3 vector3d = livingEntityIn.m_20252_(1.0F);
                RandomSource rand = worldIn.getRandom();
                livingEntityIn.m_146850_(GameEvent.ITEM_INTERACT_START);
                livingEntityIn.m_5496_(SoundEvents.LAVA_POP, 1.0F, 0.5F + (rand.nextFloat() - rand.nextFloat()) * 0.2F);
                blood.shoot(vector3d.x(), vector3d.y(), vector3d.z(), 1.0F, 3.0F);
                if (!worldIn.isClientSide) {
                    worldIn.m_7967_(blood);
                }
                stack.hurtAndBreak(1, livingEntityIn, player -> player.broadcastBreakEvent(livingEntityIn.getUsedItemHand()));
            }
        } else if (livingEntityIn instanceof Player) {
            ItemStack ammo = this.findAmmo((Player) livingEntityIn);
            boolean flag = ((Player) livingEntityIn).isCreative();
            if (!ammo.isEmpty()) {
                ammo.shrink(1);
                flag = true;
            }
            if (flag) {
                ((Player) livingEntityIn).getCooldowns().addCooldown(this, 20);
                stack.setDamageValue(0);
            }
            livingEntityIn.stopUsingItem();
        }
    }
}