package yalter.mousetweaks.handlers;

import java.util.List;
import net.minecraft.world.inventory.ClickType;
import net.minecraft.world.inventory.Slot;
import yalter.mousetweaks.IGuiScreenHandler;
import yalter.mousetweaks.MouseButton;
import yalter.mousetweaks.api.IMTModGuiContainer3Ex;

public class IMTModGuiContainer3ExHandler implements IGuiScreenHandler {

    private final IMTModGuiContainer3Ex modGuiContainer;

    public IMTModGuiContainer3ExHandler(IMTModGuiContainer3Ex modGuiContainer) {
        this.modGuiContainer = modGuiContainer;
    }

    @Override
    public boolean isMouseTweaksDisabled() {
        return this.modGuiContainer.MT_isMouseTweaksDisabled();
    }

    @Override
    public boolean isWheelTweakDisabled() {
        return this.modGuiContainer.MT_isWheelTweakDisabled();
    }

    @Override
    public List<Slot> getSlots() {
        return this.modGuiContainer.MT_getSlots();
    }

    @Override
    public Slot getSlotUnderMouse(double mouseX, double mouseY) {
        return this.modGuiContainer.MT_getSlotUnderMouse(mouseX, mouseY);
    }

    @Override
    public boolean disableRMBDraggingFunctionality() {
        return this.modGuiContainer.MT_disableRMBDraggingFunctionality();
    }

    @Override
    public void clickSlot(Slot slot, MouseButton mouseButton, boolean shiftPressed) {
        this.modGuiContainer.MT_clickSlot(slot, mouseButton.getValue(), shiftPressed ? ClickType.QUICK_MOVE : ClickType.PICKUP);
    }

    @Override
    public boolean isCraftingOutput(Slot slot) {
        return this.modGuiContainer.MT_isCraftingOutput(slot);
    }

    @Override
    public boolean isIgnored(Slot slot) {
        return this.modGuiContainer.MT_isIgnored(slot);
    }
}