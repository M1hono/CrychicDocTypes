package se.mickelus.tetra.items.modular.impl.toolbelt.inventory;

import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.ItemTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.Container;
import net.minecraft.world.ContainerHelper;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.tags.ITag;
import se.mickelus.tetra.effect.ItemEffect;
import se.mickelus.tetra.items.modular.impl.toolbelt.ModularToolbeltItem;
import se.mickelus.tetra.items.modular.impl.toolbelt.SlotType;

@ParametersAreNonnullByDefault
public class ToolbeltInventory implements Container {

    protected static final String slotKey = "slot";

    protected final String inventoryKey;

    protected ItemStack toolbeltItemStack;

    protected SlotType inventoryType;

    protected NonNullList<ItemStack> inventoryContents;

    protected int numSlots = 0;

    protected int maxSize = 0;

    protected Predicate<ItemStack> predicate = itemStack -> true;

    public ToolbeltInventory(String inventoryKey, ItemStack stack, int maxSize, SlotType inventoryType) {
        this.inventoryKey = inventoryKey;
        this.toolbeltItemStack = stack;
        this.inventoryType = inventoryType;
        this.maxSize = maxSize;
        this.inventoryContents = NonNullList.withSize(maxSize, ItemStack.EMPTY);
    }

    protected static Predicate<ItemStack> getPredicate(String inventory) {
        TagKey<Item> acceptKey = ItemTags.create(new ResourceLocation("tetra", "toolbelt/" + inventory + "_accept"));
        TagKey<Item> rejectKey = ItemTags.create(new ResourceLocation("tetra", "toolbelt/" + inventory + "_reject"));
        ITag<Item> acceptTag = ForgeRegistries.ITEMS.tags().getTag(acceptKey);
        return itemStack -> (acceptTag.isEmpty() || itemStack.is(acceptKey)) && !itemStack.is(rejectKey);
    }

    public void readFromNBT(CompoundTag compound) {
        ListTag items = compound.getList(this.inventoryKey, 10);
        for (int i = 0; i < items.size(); i++) {
            CompoundTag itemTag = items.getCompound(i);
            int slot = itemTag.getByte("slot") & 255;
            if (0 <= slot && slot < this.maxSize) {
                this.inventoryContents.set(slot, ItemStack.of(itemTag));
            }
        }
    }

    public void writeToNBT(CompoundTag tagcompound) {
        ListTag items = new ListTag();
        for (int i = 0; i < this.maxSize; i++) {
            if (this.getItem(i) != null) {
                CompoundTag compound = new CompoundTag();
                this.getItem(i).save(compound);
                compound.putByte("slot", (byte) i);
                items.add(compound);
            }
        }
        tagcompound.put(this.inventoryKey, items);
    }

    @Override
    public int getContainerSize() {
        return this.numSlots;
    }

    @Override
    public boolean isEmpty() {
        for (int i = 0; i < this.getContainerSize(); i++) {
            if (!this.getItem(i).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    @Override
    public ItemStack getItem(int index) {
        return this.inventoryContents.get(index);
    }

    @Override
    public ItemStack removeItem(int index, int count) {
        ItemStack itemstack = ContainerHelper.removeItem(this.inventoryContents, index, count);
        if (!itemstack.isEmpty()) {
            this.setChanged();
        }
        return itemstack;
    }

    @Override
    public ItemStack removeItemNoUpdate(int index) {
        ItemStack itemStack = this.inventoryContents.get(index);
        if (itemStack.isEmpty()) {
            return itemStack;
        } else {
            this.inventoryContents.set(index, ItemStack.EMPTY);
            return itemStack;
        }
    }

    @Override
    public void setItem(int index, ItemStack stack) {
        this.inventoryContents.set(index, stack);
        if (!stack.isEmpty() && stack.getCount() > this.getMaxStackSize()) {
            stack.setCount(this.getMaxStackSize());
        }
        this.setChanged();
    }

    @Override
    public int getMaxStackSize() {
        return 64;
    }

    @Override
    public void setChanged() {
        for (int i = 0; i < this.getContainerSize(); i++) {
            if (this.getItem(i).getCount() == 0) {
                this.inventoryContents.set(i, ItemStack.EMPTY);
            }
        }
        this.writeToNBT(this.toolbeltItemStack.getOrCreateTag());
    }

    @Override
    public boolean stillValid(Player player) {
        return true;
    }

    @Override
    public void startOpen(Player player) {
    }

    @Override
    public void stopOpen(Player player) {
    }

    @Override
    public boolean canPlaceItem(int index, ItemStack stack) {
        return this.isItemValid(stack);
    }

    @Override
    public void clearContent() {
        this.inventoryContents.clear();
    }

    public ItemStack takeItemStack(int index) {
        ItemStack itemStack = this.getItem(index);
        this.setItem(index, ItemStack.EMPTY);
        return itemStack;
    }

    public void emptyOverflowSlots(Player player) {
        for (int i = this.getContainerSize(); i < this.maxSize; i++) {
            this.moveStackToPlayer(this.removeItemNoUpdate(i), player);
        }
        this.setChanged();
    }

    protected void moveStackToPlayer(ItemStack itemStack, Player player) {
        if (!itemStack.isEmpty() && !player.getInventory().add(itemStack)) {
            player.drop(itemStack, false);
        }
    }

    public boolean isItemValid(ItemStack itemStack) {
        return !ModularToolbeltItem.instance.get().equals(itemStack.getItem()) && this.predicate.test(itemStack);
    }

    public boolean storeItemInInventory(ItemStack itemStack) {
        if (!this.isItemValid(itemStack)) {
            return false;
        } else {
            for (int i = 0; i < this.getContainerSize(); i++) {
                ItemStack storedStack = this.getItem(i);
                if (ItemStack.isSameItemSameTags(itemStack, storedStack) && storedStack.getCount() < storedStack.getMaxStackSize()) {
                    int moveCount = Math.min(itemStack.getCount(), storedStack.getMaxStackSize() - storedStack.getCount());
                    storedStack.grow(moveCount);
                    this.setItem(i, storedStack);
                    itemStack.shrink(moveCount);
                    if (itemStack.isEmpty()) {
                        return true;
                    }
                }
            }
            for (int ix = 0; ix < this.getContainerSize(); ix++) {
                if (this.getItem(ix).isEmpty()) {
                    this.setItem(ix, itemStack);
                    return true;
                }
            }
            return false;
        }
    }

    public int getFirstIndexForItem(Item item) {
        for (int i = 0; i < this.inventoryContents.size(); i++) {
            if (!this.inventoryContents.get(i).isEmpty() && this.inventoryContents.get(i).getItem().equals(item)) {
                return i;
            }
        }
        return -1;
    }

    public List<Collection<ItemEffect>> getSlotEffects() {
        return ModularToolbeltItem.instance.get().getSlotEffects(this.toolbeltItemStack, this.inventoryType);
    }
}