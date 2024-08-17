package fuzs.puzzleslib.api.container.v1;

import net.minecraft.core.NonNullList;
import net.minecraft.world.Container;
import net.minecraft.world.ContainerHelper;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;

@FunctionalInterface
public interface ContainerImpl extends Container {

    static ContainerImpl of(NonNullList<ItemStack> items) {
        return () -> items;
    }

    static ContainerImpl of(int size) {
        return of(NonNullList.withSize(size, ItemStack.EMPTY));
    }

    NonNullList<ItemStack> getItems();

    @Override
    default int getContainerSize() {
        return this.getItems().size();
    }

    @Override
    default boolean isEmpty() {
        for (ItemStack stack : this.getItems()) {
            if (!stack.isEmpty()) {
                return false;
            }
        }
        return true;
    }

    @Override
    default ItemStack getItem(int slot) {
        return slot >= 0 && slot < this.getContainerSize() ? this.getItems().get(slot) : ItemStack.EMPTY;
    }

    @Override
    default ItemStack removeItem(int slot, int count) {
        ItemStack result = ContainerHelper.removeItem(this.getItems(), slot, count);
        if (!result.isEmpty()) {
            this.setChanged();
        }
        return result;
    }

    @Override
    default ItemStack removeItemNoUpdate(int slot) {
        return ContainerHelper.takeItem(this.getItems(), slot);
    }

    @Override
    default void setItem(int slot, ItemStack stack) {
        if (slot >= 0 && slot < this.getContainerSize()) {
            this.getItems().set(slot, stack);
            if (!stack.isEmpty() && stack.getCount() > this.m_6893_()) {
                stack.setCount(this.m_6893_());
            }
            this.setChanged();
        }
    }

    @Override
    default void clearContent() {
        this.getItems().clear();
        this.setChanged();
    }

    @Override
    default void setChanged() {
    }

    @Override
    default boolean stillValid(Player player) {
        return true;
    }
}