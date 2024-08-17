package net.mehvahdjukaar.supplementaries.client.screens.widgets;

import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.PoseStack;
import net.mehvahdjukaar.supplementaries.client.screens.BlackBoardScreen;
import net.mehvahdjukaar.supplementaries.reg.ModTextures;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Renderable;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.client.gui.narration.NarratableEntry;
import net.minecraft.client.gui.narration.NarrationElementOutput;
import net.minecraft.client.resources.sounds.SimpleSoundInstance;
import net.minecraft.client.sounds.SoundManager;
import net.minecraft.sounds.SoundEvents;

public abstract class BlackboardButton implements GuiEventListener, Renderable, NarratableEntry {

    protected final BlackBoardScreen parent;

    public final int size;

    public final int x;

    public final int y;

    protected boolean shouldDrawOverlay;

    protected byte color;

    protected boolean focused;

    public BlackboardButton(BlackBoardScreen screen, int x, int y, byte color, int size) {
        this.x = x;
        this.y = y;
        this.parent = screen;
        this.color = color;
        this.size = size;
    }

    public byte getColor() {
        return this.color;
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTicks) {
        this.shouldDrawOverlay = this.isMouseOver((double) mouseX, (double) mouseY);
        this.renderButton(graphics);
        if (this.isShouldDrawOverlay()) {
            this.renderHoverOverlay(graphics);
        }
    }

    protected abstract void renderButton(GuiGraphics var1);

    public void renderHoverOverlay(GuiGraphics graphics) {
        PoseStack pose = graphics.pose();
        pose.pushPose();
        pose.translate(0.0F, 0.0F, 90.0F);
        RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
        graphics.blit(ModTextures.BLACKBOARD_GUI_GRID, this.x - 1, this.y - 1, this.size + 2, this.size + 2, 0.0F, 0.0F, 16, 16, 16, 16);
        pose.popPose();
    }

    @Override
    public boolean mouseClicked(double mouseX, double mouseY, int button) {
        if (this.isValidClickButton(button)) {
            boolean flag = this.isMouseOver(mouseX, mouseY);
            if (flag) {
                this.playDownSound(Minecraft.getInstance().getSoundManager());
                this.onClick();
                return true;
            }
        }
        return false;
    }

    protected abstract void onClick();

    protected boolean isValidClickButton(int button) {
        return button == 0;
    }

    public boolean isShouldDrawOverlay() {
        return this.shouldDrawOverlay;
    }

    @Override
    public boolean isFocused() {
        return this.focused;
    }

    @Override
    public void setFocused(boolean focused) {
        this.focused = focused;
    }

    @Override
    public boolean isMouseOver(double mouseX, double mouseY) {
        return mouseX >= (double) this.x && mouseY >= (double) this.y && mouseX < (double) (this.x + this.size) && mouseY < (double) (this.y + this.size);
    }

    public void playDownSound(SoundManager handler) {
        handler.play(SimpleSoundInstance.forUI(SoundEvents.UI_BUTTON_CLICK, 1.0F));
    }

    @Override
    public NarratableEntry.NarrationPriority narrationPriority() {
        return NarratableEntry.NarrationPriority.NONE;
    }

    @Override
    public void updateNarration(NarrationElementOutput narrationElementOutput) {
    }

    public interface IDraggable {

        void onDragged(double var1, double var3, byte var5);
    }

    public interface IPressable {

        void onPress(int var1, int var2, byte var3);
    }
}