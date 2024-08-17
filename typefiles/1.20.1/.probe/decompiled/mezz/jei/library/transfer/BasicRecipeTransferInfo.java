package mezz.jei.library.transfer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import mezz.jei.api.recipe.RecipeType;
import mezz.jei.api.recipe.transfer.IRecipeTransferInfo;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.inventory.Slot;
import org.jetbrains.annotations.Nullable;

public class BasicRecipeTransferInfo<C extends AbstractContainerMenu, R> implements IRecipeTransferInfo<C, R> {

    private final Class<? extends C> containerClass;

    @Nullable
    private final MenuType<C> menuType;

    private final RecipeType<R> recipeType;

    private final int recipeSlotStart;

    private final int recipeSlotCount;

    private final int inventorySlotStart;

    private final int inventorySlotCount;

    public BasicRecipeTransferInfo(Class<? extends C> containerClass, @Nullable MenuType<C> menuType, RecipeType<R> recipeType, int recipeSlotStart, int recipeSlotCount, int inventorySlotStart, int inventorySlotCount) {
        this.containerClass = containerClass;
        this.menuType = menuType;
        this.recipeType = recipeType;
        this.recipeSlotStart = recipeSlotStart;
        this.recipeSlotCount = recipeSlotCount;
        this.inventorySlotStart = inventorySlotStart;
        this.inventorySlotCount = inventorySlotCount;
    }

    @Override
    public Class<? extends C> getContainerClass() {
        return this.containerClass;
    }

    @Override
    public Optional<MenuType<C>> getMenuType() {
        return Optional.ofNullable(this.menuType);
    }

    @Override
    public RecipeType<R> getRecipeType() {
        return this.recipeType;
    }

    @Override
    public boolean canHandle(C container, R recipe) {
        return true;
    }

    @Override
    public List<Slot> getRecipeSlots(C container, R recipe) {
        List<Slot> slots = new ArrayList();
        for (int i = this.recipeSlotStart; i < this.recipeSlotStart + this.recipeSlotCount; i++) {
            Slot slot = container.getSlot(i);
            slots.add(slot);
        }
        return slots;
    }

    @Override
    public List<Slot> getInventorySlots(C container, R recipe) {
        List<Slot> slots = new ArrayList();
        for (int i = this.inventorySlotStart; i < this.inventorySlotStart + this.inventorySlotCount; i++) {
            Slot slot = container.getSlot(i);
            slots.add(slot);
        }
        return slots;
    }
}