package team.lodestar.lodestone.helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.stats.Stats;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.enchantment.EnchantmentHelper;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.items.IItemHandler;
import net.minecraftforge.items.ItemHandlerHelper;
import net.minecraftforge.items.wrapper.PlayerMainInvWrapper;
import team.lodestar.lodestone.compability.CuriosCompat;
import team.lodestar.lodestone.systems.item.IEventResponderItem;

public class ItemHelper {

    public static ArrayList<ItemStack> copyWithNewCount(List<ItemStack> stacks, int newCount) {
        ArrayList<ItemStack> newStacks = new ArrayList();
        for (ItemStack stack : stacks) {
            ItemStack copy = stack.copy();
            copy.setCount(newCount);
            newStacks.add(copy);
        }
        return newStacks;
    }

    public static ItemStack copyWithNewCount(ItemStack stack, int newCount) {
        ItemStack newStack = stack.copy();
        newStack.setCount(newCount);
        return newStack;
    }

    public static <T extends LivingEntity> boolean damageItem(ItemStack stack, int amount, T entityIn, Consumer<T> onBroken) {
        if (!entityIn.m_9236_().isClientSide && (!(entityIn instanceof Player) || !((Player) entityIn).getAbilities().instabuild) && stack.isDamageableItem()) {
            amount = stack.getItem().damageItem(stack, amount, entityIn, onBroken);
            if (stack.hurt(amount, entityIn.getRandom(), entityIn instanceof ServerPlayer ? (ServerPlayer) entityIn : null)) {
                onBroken.accept(entityIn);
                Item item = stack.getItem();
                stack.shrink(1);
                if (entityIn instanceof Player) {
                    ((Player) entityIn).awardStat(Stats.ITEM_BROKEN.get(item));
                }
                stack.setDamageValue(0);
                return true;
            }
        }
        return false;
    }

    public static <T extends Entity> Entity getClosestEntity(List<T> entities, Vec3 pos) {
        double cachedDistance = -1.0;
        Entity resultEntity = null;
        for (T entity : entities) {
            double newDistance = entity.distanceToSqr(pos.x, pos.y, pos.z);
            if (cachedDistance == -1.0 || newDistance < cachedDistance) {
                cachedDistance = newDistance;
                resultEntity = entity;
            }
        }
        return resultEntity;
    }

    public static ArrayList<ItemStack> nonEmptyStackList(ArrayList<ItemStack> stacks) {
        ArrayList<ItemStack> nonEmptyStacks = new ArrayList();
        for (ItemStack stack : stacks) {
            if (!stack.isEmpty()) {
                nonEmptyStacks.add(stack);
            }
        }
        return nonEmptyStacks;
    }

    public static ArrayList<ItemStack> getEventResponders(LivingEntity attacker) {
        ArrayList<ItemStack> itemStacks = CuriosCompat.LOADED ? CurioHelper.getEquippedCurios(attacker, p -> p.getItem() instanceof IEventResponderItem) : new ArrayList();
        ItemStack stack = attacker.getMainHandItem();
        if (stack.getItem() instanceof IEventResponderItem) {
            itemStacks.add(stack);
        }
        attacker.getArmorSlots().forEach(s -> {
            if (s.getItem() instanceof IEventResponderItem) {
                itemStacks.add(s);
            }
        });
        return itemStacks;
    }

    public static void applyEnchantments(LivingEntity user, Entity target, ItemStack stack) {
        EnchantmentHelper.EnchantmentVisitor visitor = (enchantment, level) -> enchantment.doPostAttack(user, target, level);
        if (user != null) {
            EnchantmentHelper.runIterationOnInventory(visitor, user.m_20158_());
        }
        if (user instanceof Player) {
            EnchantmentHelper.runIterationOnItem(visitor, stack);
        }
    }

    public static void giveItemToEntity(LivingEntity entity, ItemStack stack) {
        if (entity instanceof Player player) {
            ItemHandlerHelper.giveItemToPlayer(player, stack);
        } else {
            spawnItemOnEntity(entity, stack);
        }
    }

    public static void quietlyGiveItemToPlayer(Player player, ItemStack stack) {
        if (!stack.isEmpty()) {
            IItemHandler inventory = new PlayerMainInvWrapper(player.getInventory());
            Level level = player.m_9236_();
            ItemStack remainder = stack;
            if (!stack.isEmpty()) {
                remainder = ItemHandlerHelper.insertItemStacked(inventory, stack, false);
            }
            if (!remainder.isEmpty() && !level.isClientSide) {
                spawnItemOnEntity(player, stack);
            }
        }
    }

    public static void spawnItemOnEntity(LivingEntity entity, ItemStack stack) {
        Level level = entity.m_9236_();
        ItemEntity itemEntity = new ItemEntity(level, entity.m_20185_(), entity.m_20186_() + 0.5, entity.m_20189_(), stack);
        itemEntity.setPickUpDelay(40);
        itemEntity.m_20256_(itemEntity.m_20184_().multiply(0.0, 1.0, 0.0));
        level.m_7967_(itemEntity);
    }
}