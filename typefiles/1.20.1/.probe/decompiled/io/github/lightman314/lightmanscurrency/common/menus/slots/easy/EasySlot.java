package io.github.lightman314.lightmanscurrency.common.menus.slots.easy;

import com.mojang.datafixers.util.Pair;
import java.util.List;
import java.util.function.Function;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.Container;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.InventoryMenu;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import org.jetbrains.annotations.NotNull;

public class EasySlot extends Slot {

    public static final ResourceLocation EMPTY_SLOT_BG = new ResourceLocation("lightmanscurrency", "item/empty_item_slot");

    public static final Pair<ResourceLocation, ResourceLocation> BACKGROUND = Pair.of(InventoryMenu.BLOCK_ATLAS, EMPTY_SLOT_BG);

    public boolean active = true;

    public boolean locked = false;

    public EasySlot(Container container, int index, int x, int y) {
        super(container, index, x, y);
    }

    @Override
    public boolean isActive() {
        return this.active;
    }

    @Override
    public boolean mayPlace(@NotNull ItemStack stack) {
        return this.locked ? false : super.mayPlace(stack);
    }

    @NotNull
    @Override
    public ItemStack remove(int amount) {
        return this.locked ? ItemStack.EMPTY : super.remove(amount);
    }

    @Override
    public boolean mayPickup(@NotNull Player player) {
        return this.locked ? false : super.mayPickup(player);
    }

    public static void SetActive(AbstractContainerMenu menu) {
        SetActive(menu, slot -> true);
    }

    public static void SetActive(AbstractContainerMenu menu, Function<EasySlot, Boolean> filter) {
        menu.slots.forEach(slot -> {
            if (slot instanceof EasySlot simpleSlot && (Boolean) filter.apply(simpleSlot)) {
                simpleSlot.active = true;
            }
        });
    }

    public static void SetInactive(AbstractContainerMenu menu) {
        SetInactive(menu, slot -> true);
    }

    public static void SetInactive(AbstractContainerMenu menu, Function<EasySlot, Boolean> filter) {
        menu.slots.forEach(slot -> {
            if (slot instanceof EasySlot simpleSlot && (Boolean) filter.apply(simpleSlot)) {
                simpleSlot.active = false;
            }
        });
    }

    public static void SetActive(List<? extends EasySlot> slots) {
        SetActive(slots, true);
    }

    public static void SetInactive(List<? extends EasySlot> slots) {
        SetActive(slots, false);
    }

    public static void SetActive(List<? extends EasySlot> slots, boolean active) {
        for (EasySlot slot : slots) {
            slot.active = active;
        }
    }

    public static void SetLocked(AbstractContainerMenu menu, boolean locked) {
        SetLocked(menu, locked, slot -> true);
    }

    public static void SetLocked(AbstractContainerMenu menu, boolean locked, Function<EasySlot, Boolean> filter) {
        menu.slots.forEach(slot -> {
            if (slot instanceof EasySlot simpleSlot && (Boolean) filter.apply(simpleSlot)) {
                simpleSlot.locked = locked;
            }
        });
    }

    public static void Lock(AbstractContainerMenu menu) {
        SetLocked(menu, true);
    }

    public static void Lock(AbstractContainerMenu menu, Function<EasySlot, Boolean> filter) {
        SetLocked(menu, true, filter);
    }

    public static void Unlock(AbstractContainerMenu menu) {
        SetLocked(menu, false);
    }

    public static void Unlock(AbstractContainerMenu menu, Function<EasySlot, Boolean> filter) {
        SetLocked(menu, false, filter);
    }
}