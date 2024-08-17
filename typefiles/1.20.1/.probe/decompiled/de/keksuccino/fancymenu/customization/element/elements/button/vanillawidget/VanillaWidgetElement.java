package de.keksuccino.fancymenu.customization.element.elements.button.vanillawidget;

import de.keksuccino.fancymenu.customization.animation.AdvancedAnimation;
import de.keksuccino.fancymenu.customization.animation.AnimationHandler;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.customization.element.HideableElement;
import de.keksuccino.fancymenu.customization.element.anchor.ElementAnchorPoints;
import de.keksuccino.fancymenu.customization.element.elements.button.custombutton.ButtonEditorElement;
import de.keksuccino.fancymenu.customization.element.elements.button.custombutton.ButtonElement;
import de.keksuccino.fancymenu.customization.widget.WidgetMeta;
import de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableSlider;
import de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget;
import de.keksuccino.fancymenu.util.resource.RenderableResource;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.resource.resources.texture.ITexture;
import java.util.List;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.events.GuiEventListener;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class VanillaWidgetElement extends ButtonElement implements HideableElement {

    private static final Logger LOGGER = LogManager.getLogger();

    public WidgetMeta widgetMeta;

    public boolean vanillaButtonHidden = false;

    public int automatedButtonClicks = 0;

    public ResourceSupplier<ITexture> sliderBackgroundTextureNormal;

    public ResourceSupplier<ITexture> sliderBackgroundTextureHighlighted;

    public String sliderBackgroundAnimationNormal;

    public String sliderBackgroundAnimationHighlighted;

    public boolean nineSliceSliderHandle = false;

    public int nineSliceSliderHandleBorderX = 5;

    public int nineSliceSliderHandleBorderY = 5;

    protected boolean automatedButtonClicksDone = false;

    public VanillaWidgetElement(ElementBuilder<ButtonElement, ButtonEditorElement> builder) {
        super(builder);
    }

    @Override
    public void tick() {
        if (!isEditor() && !this.automatedButtonClicksDone && this.automatedButtonClicks > 0) {
            for (int i = 0; i < this.automatedButtonClicks; i++) {
                if (this.getWidget() != null) {
                    this.getWidget().onClick((double) (this.getWidget().getX() + 1), (double) (this.getWidget().getY() + 1));
                }
            }
            this.automatedButtonClicksDone = true;
        }
        super.tick();
    }

    @Override
    protected void renderElementWidget(@NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        if (isEditor()) {
            super.renderElementWidget(graphics, mouseX, mouseY, partial);
        }
        if (this.anchorPoint == ElementAnchorPoints.VANILLA) {
            this.resetVanillaWidgetSizeAndPosition();
            this.mirrorVanillaWidgetSizeAndPosition();
        }
    }

    @Nullable
    @Override
    public List<GuiEventListener> getWidgetsToRegister() {
        return null;
    }

    @Override
    public void updateWidgetNavigatable() {
    }

    @Override
    public void updateWidgetTexture() {
        super.updateWidgetTexture();
        RenderableResource sliderBackNormal = null;
        RenderableResource sliderBackHighlighted = null;
        if (this.sliderBackgroundAnimationNormal != null && AnimationHandler.animationExists(this.sliderBackgroundAnimationNormal) && AnimationHandler.getAnimation(this.sliderBackgroundAnimationNormal) instanceof AdvancedAnimation a) {
            a.setLooped(this.loopBackgroundAnimations);
            sliderBackNormal = a;
        }
        if (sliderBackNormal == null && this.sliderBackgroundTextureNormal != null) {
            sliderBackNormal = this.sliderBackgroundTextureNormal.get();
        }
        if (this.sliderBackgroundAnimationHighlighted != null && AnimationHandler.animationExists(this.sliderBackgroundAnimationHighlighted) && AnimationHandler.getAnimation(this.sliderBackgroundAnimationHighlighted) instanceof AdvancedAnimation a) {
            a.setLooped(this.loopBackgroundAnimations);
            sliderBackHighlighted = a;
        }
        if (sliderBackHighlighted == null && this.sliderBackgroundTextureHighlighted != null) {
            sliderBackHighlighted = this.sliderBackgroundTextureHighlighted.get();
        }
        if (this.getWidget() instanceof CustomizableSlider w) {
            w.setNineSliceCustomSliderHandle_FancyMenu(this.nineSliceSliderHandle);
            w.setNineSliceSliderHandleBorderX_FancyMenu(this.nineSliceSliderHandleBorderX);
            w.setNineSliceSliderHandleBorderY_FancyMenu(this.nineSliceSliderHandleBorderY);
            w.setCustomSliderBackgroundNormalFancyMenu(sliderBackNormal);
            w.setCustomSliderBackgroundHighlightedFancyMenu(sliderBackHighlighted);
        }
    }

    @Override
    public void updateWidgetVisibility() {
        super.updateWidgetVisibility();
        if (this.getWidget() instanceof CustomizableWidget w) {
            boolean forceVisible = isEditor() || this.isCopyrightButton();
            if (this.vanillaButtonHidden) {
                w.setHiddenFancyMenu(true);
            }
            if (forceVisible) {
                w.setHiddenFancyMenu(false);
            }
        }
    }

    @Override
    public void updateWidgetPosition() {
        if (this.getWidget() instanceof CustomizableWidget w) {
            if (this.anchorPoint != ElementAnchorPoints.VANILLA) {
                w.setCustomXFancyMenu(this.getAbsoluteX());
                w.setCustomYFancyMenu(this.getAbsoluteY());
            } else {
                w.setCustomXFancyMenu(null);
                w.setCustomYFancyMenu(null);
            }
        }
    }

    @Override
    public void updateWidgetSize() {
        if (this.getWidget() instanceof CustomizableWidget w) {
            if (this.anchorPoint != ElementAnchorPoints.VANILLA) {
                w.setCustomWidthFancyMenu(this.getAbsoluteWidth());
                w.setCustomHeightFancyMenu(this.getAbsoluteHeight());
            } else {
                w.setCustomWidthFancyMenu(null);
                w.setCustomHeightFancyMenu(null);
            }
        }
    }

    @Override
    public void updateWidgetLabels() {
        if (this.getWidget() != null) {
            ((CustomizableWidget) this.getWidget()).setCustomLabelFancyMenu(this.label != null ? buildComponent(this.label) : null);
            ((CustomizableWidget) this.getWidget()).setHoverLabelFancyMenu(this.hoverLabel != null ? buildComponent(this.hoverLabel) : null);
        }
    }

    @NotNull
    @Override
    public String getInstanceIdentifier() {
        return this.widgetMeta != null ? this.widgetMeta.getIdentifier().replace("vanillabtn:", "").replace("button_compatibility_id:", "") : super.getInstanceIdentifier().replace("vanillabtn:", "").replace("button_compatibility_id:", "");
    }

    public void setVanillaWidget(WidgetMeta data, boolean mirrorWidgetSizeAndPos) {
        this.widgetMeta = data;
        this.setWidget(data.getWidget());
        if (this.baseWidth <= 0) {
            this.baseWidth = data.width;
        }
        if (this.baseHeight <= 0) {
            this.baseHeight = data.height;
        }
        if (mirrorWidgetSizeAndPos) {
            this.mirrorVanillaWidgetSizeAndPosition();
        }
    }

    public void mirrorVanillaWidgetSizeAndPosition() {
        this.mirrorVanillaWidgetSize();
        this.mirrorVanillaWidgetPosition();
    }

    public void mirrorVanillaWidgetSize() {
        if (this.getWidget() != null) {
            this.baseWidth = this.getWidget().getWidth();
            this.baseHeight = this.getWidget().getHeight();
        }
    }

    public void mirrorVanillaWidgetPosition() {
        if (this.getWidget() != null) {
            this.posOffsetX = this.getWidget().getX();
            this.posOffsetY = this.getWidget().getY();
        }
    }

    public void resetVanillaWidgetSizeAndPosition() {
        if (this.getWidget() instanceof CustomizableWidget w) {
            w.resetWidgetSizeAndPositionFancyMenu();
        }
    }

    @Override
    public boolean isHidden() {
        return this.isCopyrightButton() ? false : this.vanillaButtonHidden;
    }

    @Override
    public void setHidden(boolean hidden) {
        if (this.isCopyrightButton()) {
            hidden = false;
        }
        this.vanillaButtonHidden = hidden;
    }

    public boolean isCopyrightButton() {
        if (this.widgetMeta == null) {
            return false;
        } else {
            String compId = this.widgetMeta.getUniversalIdentifier();
            return compId != null && compId.equals("mc_titlescreen_copyright_button");
        }
    }
}