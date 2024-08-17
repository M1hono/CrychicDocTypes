package de.keksuccino.fancymenu.customization.element.elements.button.custombutton;

import de.keksuccino.fancymenu.customization.action.ActionInstance;
import de.keksuccino.fancymenu.customization.action.blocks.ExecutableBlockDeserializer;
import de.keksuccino.fancymenu.customization.action.blocks.GenericExecutableBlock;
import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.customization.element.SerializedElement;
import de.keksuccino.fancymenu.customization.element.elements.button.vanillawidget.VanillaWidgetElement;
import de.keksuccino.fancymenu.customization.layout.editor.LayoutEditorScreen;
import de.keksuccino.fancymenu.customization.overlay.CustomizationOverlay;
import de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableSlider;
import de.keksuccino.fancymenu.util.rendering.ui.widget.button.ExtendedButton;
import de.keksuccino.fancymenu.util.threading.MainThreadTaskExecutor;
import de.keksuccino.konkrete.input.MouseInput;
import net.minecraft.client.gui.components.AbstractButton;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ButtonElementBuilder extends ElementBuilder<ButtonElement, ButtonEditorElement> {

    public ButtonElementBuilder() {
        super("custom_button");
    }

    @NotNull
    public ButtonElement buildDefaultInstance() {
        ButtonElement element = new ButtonElement(this);
        element.baseWidth = 100;
        element.baseHeight = 20;
        element.label = "New Button";
        element.setWidget(new ExtendedButton(0, 0, 0, 0, Component.empty(), press -> {
            if (CustomizationOverlay.getCurrentMenuBarInstance() == null || !CustomizationOverlay.getCurrentMenuBarInstance().isUserNavigatingInMenuBar()) {
                boolean isMousePressed = MouseInput.isLeftMouseDown() || MouseInput.isRightMouseDown();
                element.getExecutableBlock().execute();
                MainThreadTaskExecutor.executeInMainThread(() -> {
                    if (isMousePressed) {
                        press.m_93692_(false);
                    }
                }, MainThreadTaskExecutor.ExecuteTiming.POST_CLIENT_TICK);
            }
        }));
        return element;
    }

    @NotNull
    public ButtonElement deserializeElement(@NotNull SerializedElement serialized) {
        ButtonElement element = this.buildDefaultInstance();
        element.label = serialized.getValue("label");
        String buttonExecutableBlockId = serialized.getValue("button_element_executable_block_identifier");
        if (buttonExecutableBlockId != null) {
            if (ExecutableBlockDeserializer.deserializeWithIdentifier(serialized, buttonExecutableBlockId) instanceof GenericExecutableBlock g) {
                element.actionExecutor = g;
            }
        } else {
            GenericExecutableBlock g = new GenericExecutableBlock();
            g.getExecutables().addAll(ActionInstance.deserializeAll(serialized));
            element.actionExecutor = g;
        }
        element.hoverSound = deserializeAudioResourceSupplier(serialized.getValue("hoversound"));
        element.hoverLabel = serialized.getValue("hoverlabel");
        element.tooltip = serialized.getValue("description");
        element.clickSound = deserializeAudioResourceSupplier(serialized.getValue("clicksound"));
        element.backgroundTextureNormal = deserializeImageResourceSupplier(serialized.getValue("backgroundnormal"));
        element.backgroundTextureHover = deserializeImageResourceSupplier(serialized.getValue("backgroundhovered"));
        element.backgroundTextureInactive = deserializeImageResourceSupplier(serialized.getValue("background_texture_inactive"));
        String loopBackAnimations = serialized.getValue("loopbackgroundanimations");
        if (loopBackAnimations != null && loopBackAnimations.equalsIgnoreCase("false")) {
            element.loopBackgroundAnimations = false;
        }
        String restartBackAnimationsOnHover = serialized.getValue("restartbackgroundanimations");
        if (restartBackAnimationsOnHover != null && restartBackAnimationsOnHover.equalsIgnoreCase("false")) {
            element.restartBackgroundAnimationsOnHover = false;
        }
        element.nineSliceCustomBackground = this.deserializeBoolean(element.nineSliceCustomBackground, serialized.getValue("nine_slice_custom_background"));
        element.nineSliceBorderX = (Integer) this.deserializeNumber(Integer.class, Integer.valueOf(element.nineSliceBorderX), serialized.getValue("nine_slice_border_x"));
        element.nineSliceBorderY = (Integer) this.deserializeNumber(Integer.class, Integer.valueOf(element.nineSliceBorderY), serialized.getValue("nine_slice_border_y"));
        element.backgroundAnimationNormal = serialized.getValue("backgroundanimationnormal");
        element.backgroundAnimationHover = serialized.getValue("backgroundanimationhovered");
        element.backgroundAnimationInactive = serialized.getValue("background_animation_inactive");
        element.navigatable = this.deserializeBoolean(element.navigatable, serialized.getValue("navigatable"));
        return element;
    }

    @NotNull
    protected SerializedElement serializeElement(@NotNull ButtonElement element, @NotNull SerializedElement serializeTo) {
        serializeTo.putProperty("button_element_executable_block_identifier", element.actionExecutor.identifier);
        element.actionExecutor.serializeToExistingPropertyContainer(serializeTo);
        if (element.backgroundTextureNormal != null) {
            serializeTo.putProperty("backgroundnormal", element.backgroundTextureNormal.getSourceWithPrefix());
        }
        if (element.backgroundAnimationNormal != null) {
            serializeTo.putProperty("backgroundanimationnormal", element.backgroundAnimationNormal);
        }
        if (element.backgroundTextureHover != null) {
            serializeTo.putProperty("backgroundhovered", element.backgroundTextureHover.getSourceWithPrefix());
        }
        if (element.backgroundAnimationHover != null) {
            serializeTo.putProperty("backgroundanimationhovered", element.backgroundAnimationHover);
        }
        if (element.backgroundTextureInactive != null) {
            serializeTo.putProperty("background_texture_inactive", element.backgroundTextureInactive.getSourceWithPrefix());
        }
        if (element.backgroundAnimationInactive != null) {
            serializeTo.putProperty("background_animation_inactive", element.backgroundAnimationInactive);
        }
        serializeTo.putProperty("restartbackgroundanimations", element.restartBackgroundAnimationsOnHover + "");
        serializeTo.putProperty("loopbackgroundanimations", element.loopBackgroundAnimations + "");
        serializeTo.putProperty("nine_slice_custom_background", element.nineSliceCustomBackground + "");
        serializeTo.putProperty("nine_slice_border_x", element.nineSliceBorderX + "");
        serializeTo.putProperty("nine_slice_border_y", element.nineSliceBorderY + "");
        if (element.hoverSound != null) {
            serializeTo.putProperty("hoversound", element.hoverSound.getSourceWithPrefix());
        }
        if (element.hoverLabel != null) {
            serializeTo.putProperty("hoverlabel", element.hoverLabel);
        }
        if (element.clickSound != null) {
            serializeTo.putProperty("clicksound", element.clickSound.getSourceWithPrefix());
        }
        if (element.tooltip != null) {
            serializeTo.putProperty("description", element.tooltip);
        }
        if (element.label != null) {
            serializeTo.putProperty("label", element.label);
        }
        serializeTo.putProperty("navigatable", element.navigatable + "");
        return serializeTo;
    }

    @NotNull
    public ButtonEditorElement wrapIntoEditorElement(@NotNull ButtonElement element, @NotNull LayoutEditorScreen editor) {
        return new ButtonEditorElement(element, editor);
    }

    @NotNull
    @Override
    public Component getDisplayName(@Nullable AbstractElement element) {
        if (element instanceof ButtonElement b && b.getWidget() != null && !b.getWidget().getMessage().getString().replace(" ", "").isEmpty()) {
            return b.getWidget().getMessage();
        }
        if (element instanceof VanillaWidgetElement b) {
            if (b.getWidget() instanceof AbstractButton) {
                return Component.translatable("fancymenu.editor.elements.vanilla_widget.button");
            } else {
                return b.getWidget() instanceof CustomizableSlider ? Component.translatable("fancymenu.editor.elements.vanilla_widget.slider") : Component.translatable("fancymenu.editor.elements.vanilla_widget.generic");
            }
        } else {
            return Component.translatable("fancymenu.editor.add.button");
        }
    }

    @Nullable
    @Override
    public Component[] getDescription(@Nullable AbstractElement element) {
        return null;
    }
}