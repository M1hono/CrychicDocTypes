package mezz.jei.library.gui;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Map.Entry;
import java.util.stream.Stream;
import mezz.jei.api.constants.VanillaTypes;
import mezz.jei.api.gui.handlers.IGhostIngredientHandler;
import mezz.jei.api.gui.handlers.IGlobalGuiHandler;
import mezz.jei.api.gui.handlers.IGuiClickableArea;
import mezz.jei.api.gui.handlers.IGuiProperties;
import mezz.jei.api.gui.handlers.IScreenHandler;
import mezz.jei.api.runtime.IClickableIngredient;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.api.runtime.IScreenHelper;
import mezz.jei.common.input.ClickableIngredient;
import mezz.jei.common.platform.IPlatformScreenHelper;
import mezz.jei.common.platform.Services;
import mezz.jei.common.util.ImmutableRect2i;
import mezz.jei.library.ingredients.TypedIngredient;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.inventory.AbstractContainerScreen;
import net.minecraft.client.renderer.Rect2i;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;

public class ScreenHelper implements IScreenHelper {

    private final IIngredientManager ingredientManager;

    private final List<IGlobalGuiHandler> globalGuiHandlers;

    private final GuiContainerHandlers guiContainerHandlers;

    private final Map<Class<?>, IGhostIngredientHandler<?>> ghostIngredientHandlers;

    private final Map<Class<?>, IScreenHandler<?>> guiScreenHandlers;

    public ScreenHelper(IIngredientManager ingredientManager, List<IGlobalGuiHandler> globalGuiHandlers, GuiContainerHandlers guiContainerHandlers, Map<Class<?>, IGhostIngredientHandler<?>> ghostIngredientHandlers, Map<Class<?>, IScreenHandler<?>> guiScreenHandlers) {
        this.ingredientManager = ingredientManager;
        this.globalGuiHandlers = globalGuiHandlers;
        this.guiContainerHandlers = guiContainerHandlers;
        this.ghostIngredientHandlers = ghostIngredientHandlers;
        this.guiScreenHandlers = guiScreenHandlers;
    }

    @Override
    public <T extends Screen> Optional<IGuiProperties> getGuiProperties(T screen) {
        IScreenHandler<T> handler = (IScreenHandler<T>) this.guiScreenHandlers.get(screen.getClass());
        if (handler != null) {
            IGuiProperties properties = handler.apply(screen);
            return Optional.ofNullable(properties);
        } else {
            for (Entry<Class<?>, IScreenHandler<?>> entry : this.guiScreenHandlers.entrySet()) {
                Class<?> guiScreenClass = (Class<?>) entry.getKey();
                if (guiScreenClass.isInstance(screen)) {
                    IScreenHandler<T> handlerx = (IScreenHandler<T>) entry.getValue();
                    if (handlerx != null) {
                        IGuiProperties properties = handlerx.apply(screen);
                        return Optional.ofNullable(properties);
                    }
                }
            }
            return Optional.empty();
        }
    }

    @Override
    public Stream<Rect2i> getGuiExclusionAreas(Screen screen) {
        Stream<Rect2i> globalGuiHandlerExclusionAreas = this.globalGuiHandlers.stream().map(IGlobalGuiHandler::getGuiExtraAreas).flatMap(Collection::stream);
        if (screen instanceof AbstractContainerScreen<?> guiContainer) {
            Stream<Rect2i> guiExtraAreas = this.guiContainerHandlers.getGuiExtraAreas(guiContainer);
            return Stream.concat(globalGuiHandlerExclusionAreas, guiExtraAreas);
        } else {
            return globalGuiHandlerExclusionAreas;
        }
    }

    @Override
    public Stream<IClickableIngredient<?>> getClickableIngredientUnderMouse(Screen screen, double mouseX, double mouseY) {
        return Stream.concat(this.getPluginsIngredientUnderMouse(screen, mouseX, mouseY), this.getSlotIngredientUnderMouse(screen).stream());
    }

    private Optional<IClickableIngredient<?>> getSlotIngredientUnderMouse(Screen guiScreen) {
        if (guiScreen instanceof AbstractContainerScreen<?> guiContainer) {
            IPlatformScreenHelper screenHelper = Services.PLATFORM.getScreenHelper();
            return screenHelper.getSlotUnderMouse(guiContainer).flatMap(slot -> this.getClickedIngredient(slot, guiContainer));
        } else {
            return Optional.empty();
        }
    }

    private Stream<IClickableIngredient<?>> getPluginsIngredientUnderMouse(Screen guiScreen, double mouseX, double mouseY) {
        Stream<IClickableIngredient<?>> globalIngredients = this.globalGuiHandlers.stream().map(a -> a.getClickableIngredientUnderMouse(mouseX, mouseY)).flatMap(Optional::stream);
        if (guiScreen instanceof AbstractContainerScreen<?> guiContainer) {
            Stream<IClickableIngredient<?>> containerIngredients = this.getGuiContainerHandlerIngredients(guiContainer, mouseX, mouseY);
            return Stream.concat(containerIngredients, globalIngredients);
        } else {
            return globalIngredients;
        }
    }

    private Optional<IClickableIngredient<?>> getClickedIngredient(Slot slot, AbstractContainerScreen<?> guiContainer) {
        ItemStack stack = slot.getItem();
        return TypedIngredient.createAndFilterInvalid(this.ingredientManager, VanillaTypes.ITEM_STACK, stack).map(typedIngredient -> {
            IPlatformScreenHelper screenHelper = Services.PLATFORM.getScreenHelper();
            ImmutableRect2i slotArea = new ImmutableRect2i(screenHelper.getGuiLeft(guiContainer) + slot.x, screenHelper.getGuiTop(guiContainer) + slot.y, 16, 16);
            return new ClickableIngredient(typedIngredient, slotArea);
        });
    }

    private <T extends AbstractContainerScreen<?>> Stream<IClickableIngredient<?>> getGuiContainerHandlerIngredients(T guiContainer, double mouseX, double mouseY) {
        return this.guiContainerHandlers.getActiveGuiHandlerStream(guiContainer).map(a -> a.getClickableIngredientUnderMouse(guiContainer, mouseX, mouseY)).flatMap(Optional::stream);
    }

    @Override
    public <T extends Screen> Optional<IGhostIngredientHandler<T>> getGhostIngredientHandler(T guiScreen) {
        IGhostIngredientHandler<T> handler = (IGhostIngredientHandler<T>) this.ghostIngredientHandlers.get(guiScreen.getClass());
        if (handler != null) {
            return Optional.of(handler);
        } else {
            for (Entry<Class<?>, IGhostIngredientHandler<?>> entry : this.ghostIngredientHandlers.entrySet()) {
                Class<?> guiScreenClass = (Class<?>) entry.getKey();
                if (guiScreenClass.isInstance(guiScreen)) {
                    IGhostIngredientHandler<T> handlerx = (IGhostIngredientHandler<T>) entry.getValue();
                    if (handlerx != null) {
                        return Optional.of(handlerx);
                    }
                }
            }
            return Optional.empty();
        }
    }

    @Override
    public Stream<IGuiClickableArea> getGuiClickableArea(AbstractContainerScreen<?> guiContainer, double guiMouseX, double guiMouseY) {
        return this.guiContainerHandlers.getGuiClickableArea(guiContainer, guiMouseX, guiMouseY);
    }
}