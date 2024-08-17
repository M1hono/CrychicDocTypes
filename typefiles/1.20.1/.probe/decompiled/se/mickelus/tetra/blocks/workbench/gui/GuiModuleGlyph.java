package se.mickelus.tetra.blocks.workbench.gui;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.resources.ResourceLocation;
import se.mickelus.mutil.gui.GuiTexture;
import se.mickelus.tetra.module.data.GlyphData;

@ParametersAreNonnullByDefault
public class GuiModuleGlyph extends GuiTexture {

    boolean shift = true;

    public GuiModuleGlyph(int x, int y, int width, int height, int tint, int textureX, int textureY, ResourceLocation textureLocation) {
        super(x, y, width + 1, height + 1, textureX, textureY, textureLocation);
        this.color = tint;
    }

    public GuiModuleGlyph(int x, int y, int width, int height, int tint, GlyphData glyphData) {
        this(x, y, width, height, tint, glyphData.textureX, glyphData.textureY, glyphData.textureLocation);
    }

    public GuiModuleGlyph(int x, int y, int width, int height, GlyphData glyphData) {
        this(x, y, width, height, glyphData.tint, glyphData.textureX, glyphData.textureY, glyphData.textureLocation);
    }

    public GuiModuleGlyph setShift(boolean shift) {
        this.shift = shift;
        return this;
    }

    @Override
    public void draw(GuiGraphics graphics, int refX, int refY, int screenWidth, int screenHeight, int mouseX, int mouseY, float opacity) {
        if (this.shift) {
            graphics.pose().pushPose();
            graphics.pose().translate(0.5, 0.5, 0.0);
            this.drawTexture(graphics, this.textureLocation, refX + this.x, refY + this.y, this.width - 1, this.height - 1, this.textureX, this.textureY, this.color, this.getOpacity() * opacity);
            graphics.pose().popPose();
        } else {
            this.drawTexture(graphics, this.textureLocation, refX + this.x, refY + this.y, this.width - 1, this.height - 1, this.textureX, this.textureY, this.color, this.getOpacity() * opacity);
        }
    }
}