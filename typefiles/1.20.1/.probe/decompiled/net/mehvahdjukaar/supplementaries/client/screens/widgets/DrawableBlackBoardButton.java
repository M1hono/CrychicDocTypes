package net.mehvahdjukaar.supplementaries.client.screens.widgets;

import com.mojang.blaze3d.systems.RenderSystem;
import net.mehvahdjukaar.supplementaries.client.screens.BlackBoardScreen;
import net.mehvahdjukaar.supplementaries.common.block.blocks.BlackboardBlock;
import net.mehvahdjukaar.supplementaries.reg.ModTextures;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.util.FastColor;

public class DrawableBlackBoardButton extends BlackboardButton {

    public static final int SIZE = 6;

    private final int u;

    private final int v;

    public DrawableBlackBoardButton(BlackBoardScreen screen, int centerX, int centerY, int u, int v, byte color) {
        super(screen, centerX - (8 - u) * 6, centerY - -v * 6, color, 6);
        this.u = u;
        this.v = v;
    }

    public void setColor(byte color) {
        this.parent.addHistory(this.u, this.v, this.color);
        this.color = color;
        this.parent.updateBlackboard(this.u, this.v, color);
    }

    @Override
    protected void onClick() {
        byte selectedColor = this.parent.getSelectedColor();
        this.setColor(selectedColor == this.color ? 0 : selectedColor);
    }

    @Override
    public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) {
        if (this.isValidClickButton(button)) {
            this.parent.onButtonDragged(mouseX, mouseY, this.color);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean mouseReleased(double mouseX, double mouseY, int button) {
        if (this.isValidClickButton(button)) {
            this.parent.saveHistoryStep();
            return true;
        } else {
            return false;
        }
    }

    @Override
    protected void renderButton(GuiGraphics graphics) {
        int rgb = BlackboardBlock.colorFromByte(this.color);
        float b = (float) FastColor.ARGB32.blue(rgb) / 255.0F;
        float g = (float) FastColor.ARGB32.green(rgb) / 255.0F;
        float r = (float) FastColor.ARGB32.red(rgb) / 255.0F;
        RenderSystem.setShaderColor(r, g, b, 1.0F);
        int offset = this.color > 0 ? 16 : 0;
        graphics.blit(ModTextures.BLACKBOARD_GUI_TEXTURE, this.x, this.y, (float) (this.u + offset) * (float) this.size, (float) this.v * (float) this.size, this.size, this.size, 32 * this.size, 16 * this.size);
    }
}