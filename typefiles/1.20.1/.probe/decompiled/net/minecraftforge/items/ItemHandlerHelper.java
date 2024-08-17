package net.minecraftforge.items;

import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraftforge.items.wrapper.PlayerMainInvWrapper;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ItemHandlerHelper {

    @NotNull
    public static ItemStack insertItem(IItemHandler dest, @NotNull ItemStack stack, boolean simulate) {
        if (dest != null && !stack.isEmpty()) {
            for (int i = 0; i < dest.getSlots(); i++) {
                stack = dest.insertItem(i, stack, simulate);
                if (stack.isEmpty()) {
                    return ItemStack.EMPTY;
                }
            }
            return stack;
        } else {
            return stack;
        }
    }

    public static boolean canItemStacksStack(@NotNull ItemStack a, @NotNull ItemStack b) {
        return !a.isEmpty() && ItemStack.isSameItem(a, b) && a.hasTag() == b.hasTag() ? (!a.hasTag() || a.getTag().equals(b.getTag())) && a.areCapsCompatible(b) : false;
    }

    public static boolean canItemStacksStackRelaxed(@NotNull ItemStack a, @NotNull ItemStack b) {
        if (a.isEmpty() || b.isEmpty() || a.getItem() != b.getItem()) {
            return false;
        } else if (!a.isStackable()) {
            return false;
        } else {
            return a.hasTag() != b.hasTag() ? false : (!a.hasTag() || a.getTag().equals(b.getTag())) && a.areCapsCompatible(b);
        }
    }

    @NotNull
    public static ItemStack copyStackWithSize(@NotNull ItemStack itemStack, int size) {
        if (size == 0) {
            return ItemStack.EMPTY;
        } else {
            ItemStack copy = itemStack.copy();
            copy.setCount(size);
            return copy;
        }
    }

    @NotNull
    public static ItemStack insertItemStacked(IItemHandler inventory, @NotNull ItemStack stack, boolean simulate) {
        if (inventory == null || stack.isEmpty()) {
            return stack;
        } else if (!stack.isStackable()) {
            return insertItem(inventory, stack, simulate);
        } else {
            int sizeInventory = inventory.getSlots();
            for (int i = 0; i < sizeInventory; i++) {
                ItemStack slot = inventory.getStackInSlot(i);
                if (canItemStacksStackRelaxed(slot, stack)) {
                    stack = inventory.insertItem(i, stack, simulate);
                    if (stack.isEmpty()) {
                        break;
                    }
                }
            }
            if (!stack.isEmpty()) {
                for (int ix = 0; ix < sizeInventory; ix++) {
                    if (inventory.getStackInSlot(ix).isEmpty()) {
                        stack = inventory.insertItem(ix, stack, simulate);
                        if (stack.isEmpty()) {
                            break;
                        }
                    }
                }
            }
            return stack;
        }
    }

    public static void giveItemToPlayer(Player player, @NotNull ItemStack stack) {
        giveItemToPlayer(player, stack, -1);
    }

    public static void giveItemToPlayer(Player player, @NotNull ItemStack stack, int preferredSlot) {
        if (!stack.isEmpty()) {
            IItemHandler inventory = new PlayerMainInvWrapper(player.getInventory());
            Level level = player.m_9236_();
            ItemStack remainder = stack;
            if (preferredSlot >= 0 && preferredSlot < inventory.getSlots()) {
                remainder = inventory.insertItem(preferredSlot, stack, false);
            }
            if (!remainder.isEmpty()) {
                remainder = insertItemStacked(inventory, remainder, false);
            }
            if (remainder.isEmpty() || remainder.getCount() != stack.getCount()) {
                level.playSound(null, player.m_20185_(), player.m_20186_() + 0.5, player.m_20189_(), SoundEvents.ITEM_PICKUP, SoundSource.PLAYERS, 0.2F, ((level.random.nextFloat() - level.random.nextFloat()) * 0.7F + 1.0F) * 2.0F);
            }
            if (!remainder.isEmpty() && !level.isClientSide) {
                ItemEntity entityitem = new ItemEntity(level, player.m_20185_(), player.m_20186_() + 0.5, player.m_20189_(), remainder);
                entityitem.setPickUpDelay(40);
                entityitem.m_20256_(entityitem.m_20184_().multiply(0.0, 1.0, 0.0));
                level.m_7967_(entityitem);
            }
        }
    }

    public static int calcRedstoneFromInventory(@Nullable IItemHandler inv) {
        if (inv == null) {
            return 0;
        } else {
            int itemsFound = 0;
            float proportion = 0.0F;
            for (int j = 0; j < inv.getSlots(); j++) {
                ItemStack itemstack = inv.getStackInSlot(j);
                if (!itemstack.isEmpty()) {
                    proportion += (float) itemstack.getCount() / (float) Math.min(inv.getSlotLimit(j), itemstack.getMaxStackSize());
                    itemsFound++;
                }
            }
            proportion /= (float) inv.getSlots();
            return Mth.floor(proportion * 14.0F) + (itemsFound > 0 ? 1 : 0);
        }
    }
}