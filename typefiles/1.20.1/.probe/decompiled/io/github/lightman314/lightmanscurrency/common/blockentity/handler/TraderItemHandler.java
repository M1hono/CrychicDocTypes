package io.github.lightman314.lightmanscurrency.common.blockentity.handler;

import io.github.lightman314.lightmanscurrency.common.traders.item.ItemTraderData;
import io.github.lightman314.lightmanscurrency.common.traders.item.TraderItemStorage;
import io.github.lightman314.lightmanscurrency.common.traders.item.tradedata.ItemTradeData;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Nonnull;
import net.minecraft.core.Direction;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.items.IItemHandler;

public class TraderItemHandler {

    private final ItemTraderData trader;

    private final Map<Direction, IItemHandler> handlers = new HashMap();

    public TraderItemHandler(ItemTraderData trader) {
        this.trader = trader;
    }

    public IItemHandler getHandler(Direction side) {
        if (!this.handlers.containsKey(side)) {
            this.handlers.put(side, new TraderItemHandler.TraderHandler(this.trader, side));
        }
        return (IItemHandler) this.handlers.get(side);
    }

    private static class TraderHandler implements IItemHandler {

        private final ItemTraderData trader;

        private final Direction side;

        protected TraderHandler(ItemTraderData trader, Direction side) {
            this.trader = trader;
            this.side = side;
        }

        protected final TraderItemStorage getStorage() {
            return this.trader.getStorage();
        }

        protected final boolean allowsInputs() {
            return this.trader.allowInputSide(this.side);
        }

        protected final boolean allowsOutputs() {
            return this.trader.allowOutputSide(this.side);
        }

        @Override
        public int getSlots() {
            return this.getStorage().getContents().size() + 1;
        }

        @Nonnull
        @Override
        public ItemStack getStackInSlot(int slot) {
            return slot >= 0 && slot < this.getStorage().getContents().size() ? (ItemStack) this.getStorage().getContents().get(slot) : ItemStack.EMPTY;
        }

        @Override
        public int getSlotLimit(int slot) {
            return this.getStorage().getMaxAmount();
        }

        @Override
        public boolean isItemValid(int slot, @Nonnull ItemStack stack) {
            return this.allowsInputs() && this.getStorage().allowItem(stack);
        }

        public boolean allowExtraction(ItemStack stack) {
            for (ItemTradeData trade : this.trader.getTradeData()) {
                if (trade.isSale() || trade.isBarter()) {
                    for (int i = 0; i < 2; i++) {
                        if (trade.getItemRequirement(i).test(stack)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        @Nonnull
        @Override
        public ItemStack insertItem(int slot, ItemStack stack, boolean simulate) {
            ItemStack copyStack = stack.copy();
            if (this.allowsInputs() && this.getStorage().allowItem(stack)) {
                if (simulate) {
                    int inputAmount = Math.min(this.getStorage().getFittableAmount(copyStack), copyStack.getCount());
                    copyStack.shrink(inputAmount);
                } else {
                    this.getStorage().tryAddItem(copyStack);
                    this.trader.markStorageDirty();
                }
                return copyStack;
            } else {
                return copyStack;
            }
        }

        @Nonnull
        @Override
        public ItemStack extractItem(int slot, int amount, boolean simulate) {
            if (this.allowsOutputs()) {
                ItemStack stackInSlot = this.getStackInSlot(slot).copy();
                if (stackInSlot.isEmpty() || !this.allowExtraction(stackInSlot)) {
                    return ItemStack.EMPTY;
                }
                int amountToRemove = Math.min(amount, Math.min(stackInSlot.getCount(), stackInSlot.getMaxStackSize()));
                if (amountToRemove > 0) {
                    ItemStack result = stackInSlot.copy();
                    result.setCount(amountToRemove);
                    if (!simulate) {
                        stackInSlot.setCount(amountToRemove);
                        result = this.getStorage().removeItem(stackInSlot);
                    }
                    this.trader.markStorageDirty();
                    return result;
                }
            }
            return ItemStack.EMPTY;
        }
    }
}