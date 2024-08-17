package de.keksuccino.fancymenu.customization.element.elements.image;

import com.mojang.blaze3d.systems.RenderSystem;
import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.util.rendering.AspectRatio;
import de.keksuccino.fancymenu.util.rendering.RenderingUtils;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.resource.resources.texture.ITexture;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ImageElement extends AbstractElement {

    private static final Logger LOGGER = LogManager.getLogger();

    @Nullable
    public ResourceSupplier<ITexture> textureSupplier;

    public boolean repeat = false;

    public boolean nineSlice = false;

    public int nineSliceBorderX = 5;

    public int nineSliceBorderY = 5;

    public ImageElement(@NotNull ElementBuilder<?, ?> builder) {
        super(builder);
    }

    @Override
    public void render(@NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        if (this.shouldRender()) {
            int x = this.getAbsoluteX();
            int y = this.getAbsoluteY();
            RenderSystem.enableBlend();
            graphics.setColor(1.0F, 1.0F, 1.0F, this.opacity);
            ITexture t = this.getTextureResource();
            if (t != null && t.isReady()) {
                ResourceLocation loc = t.getResourceLocation();
                if (loc != null) {
                    if (this.repeat) {
                        RenderingUtils.blitRepeat(graphics, loc, x, y, this.getAbsoluteWidth(), this.getAbsoluteHeight(), t.getWidth(), t.getHeight());
                    } else if (this.nineSlice) {
                        RenderingUtils.blitNineSliced(graphics, loc, x, y, this.getAbsoluteWidth(), this.getAbsoluteHeight(), this.nineSliceBorderX, this.nineSliceBorderY, this.nineSliceBorderX, this.nineSliceBorderY, t.getWidth(), t.getHeight(), 0, 0, t.getWidth(), t.getHeight());
                    } else {
                        graphics.blit(loc, x, y, 0.0F, 0.0F, this.getAbsoluteWidth(), this.getAbsoluteHeight(), this.getAbsoluteWidth(), this.getAbsoluteHeight());
                    }
                }
            } else if (isEditor()) {
                RenderingUtils.renderMissing(graphics, this.getAbsoluteX(), this.getAbsoluteY(), this.getAbsoluteWidth(), this.getAbsoluteHeight());
            }
            RenderingUtils.resetShaderColor(graphics);
            RenderSystem.disableBlend();
        }
    }

    @Nullable
    public ITexture getTextureResource() {
        return this.textureSupplier != null ? this.textureSupplier.get() : null;
    }

    public void restoreAspectRatio() {
        ITexture t = this.getTextureResource();
        AspectRatio ratio = t != null ? t.getAspectRatio() : new AspectRatio(10, 10);
        this.baseWidth = ratio.getAspectRatioWidth(this.getAbsoluteHeight());
    }
}