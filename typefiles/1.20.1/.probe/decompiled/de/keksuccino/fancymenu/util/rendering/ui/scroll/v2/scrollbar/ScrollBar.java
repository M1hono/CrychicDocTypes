package de.keksuccino.fancymenu.util.rendering.ui.scroll.v2.scrollbar;

import com.mojang.blaze3d.systems.RenderSystem;
import de.keksuccino.fancymenu.util.rendering.DrawableColor;
import de.keksuccino.fancymenu.util.rendering.ui.UIBase;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Renderable;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.client.gui.narration.NarratableEntry;
import net.minecraft.client.gui.narration.NarrationElementOutput;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class ScrollBar extends UIBase implements GuiEventListener, Renderable, NarratableEntry {

    private static final Logger LOGGER = LogManager.getLogger();

    protected final ScrollBar.ScrollBarDirection direction;

    public float grabberWidth;

    public float grabberHeight;

    public float scrollAreaStartX;

    public float scrollAreaStartY;

    public float scrollAreaEndX;

    public float scrollAreaEndY;

    public Supplier<DrawableColor> idleBarColor;

    public Supplier<DrawableColor> hoverBarColor;

    public ResourceLocation idleBarTexture;

    public ResourceLocation hoverBarTexture;

    public boolean active = true;

    protected boolean allowScrollWheel = false;

    protected float grabberScrollSpeed = 1.0F;

    protected float wheelScrollSpeed = 1.0F;

    protected float scroll = 0.0F;

    protected boolean leftMouseDownOnGrabber = false;

    protected double leftMouseDownOnGrabberAtMouseX = 0.0;

    protected double leftMouseDownOnGrabberAtMouseY = 0.0;

    protected float lastGrabberX = 0.0F;

    protected float lastGrabberY = 0.0F;

    protected float leftMouseDownOnGrabberAtScroll = 0.0F;

    protected List<Consumer<ScrollBar>> scrollListeners = new ArrayList();

    protected boolean grabberHovered = false;

    public ScrollBar(@NotNull ScrollBar.ScrollBarDirection direction, float grabberWidth, float grabberHeight, float scrollAreaStartX, float scrollAreaStartY, float scrollAreaEndX, float scrollAreaEndY, @NotNull Supplier<DrawableColor> idleBarColor, @NotNull Supplier<DrawableColor> hoverBarColor) {
        this(direction, grabberWidth, grabberHeight, scrollAreaStartX, scrollAreaStartY, scrollAreaEndX, scrollAreaEndY);
        this.idleBarColor = idleBarColor;
        this.hoverBarColor = hoverBarColor;
    }

    public ScrollBar(@NotNull ScrollBar.ScrollBarDirection direction, float grabberWidth, float grabberHeight, float scrollAreaStartX, float scrollAreaStartY, float scrollAreaEndX, float scrollAreaEndY, @NotNull ResourceLocation idleBarTexture, @NotNull ResourceLocation hoverBarTexture) {
        this(direction, grabberWidth, grabberHeight, scrollAreaStartX, scrollAreaStartY, scrollAreaEndX, scrollAreaEndY);
        this.idleBarTexture = idleBarTexture;
        this.hoverBarTexture = hoverBarTexture;
    }

    protected ScrollBar(ScrollBar.ScrollBarDirection direction, float grabberWidth, float grabberHeight, float scrollAreaStartX, float scrollAreaStartY, float scrollAreaEndX, float scrollAreaEndY) {
        this.direction = direction;
        this.grabberWidth = grabberWidth;
        this.grabberHeight = grabberHeight;
        this.scrollAreaStartX = scrollAreaStartX;
        this.scrollAreaStartY = scrollAreaStartY;
        this.scrollAreaEndX = scrollAreaEndX;
        this.scrollAreaEndY = scrollAreaEndY;
    }

    @Override
    public void render(@NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        this.grabberHovered = this.isMouseOverGrabber((double) mouseX, (double) mouseY);
        float x = this.scrollAreaEndX - this.grabberWidth;
        float y = this.scrollAreaEndY - this.grabberHeight;
        if (this.direction == ScrollBar.ScrollBarDirection.VERTICAL) {
            float usableAreaHeight = this.scrollAreaEndY - this.scrollAreaStartY - this.grabberHeight;
            y = this.scrollAreaStartY + usableAreaHeight * this.scroll;
        } else {
            float usableAreaWidth = this.scrollAreaEndX - this.scrollAreaStartX - this.grabberWidth;
            x = this.scrollAreaStartX + usableAreaWidth * this.scroll;
        }
        this.lastGrabberX = x;
        this.lastGrabberY = y;
        RenderSystem.enableBlend();
        resetShaderColor(graphics);
        DrawableColor normalC = (DrawableColor) this.idleBarColor.get();
        DrawableColor hoverC = (DrawableColor) this.hoverBarColor.get();
        if (!this.isGrabberHovered() && !this.isGrabberGrabbed()) {
            if (this.idleBarTexture != null) {
                blitF(graphics, this.idleBarTexture, x, y, 0.0F, 0.0F, this.grabberWidth, this.grabberHeight, this.grabberWidth, this.grabberHeight);
            } else if (normalC != null) {
                fillF(graphics, x, y, x + this.grabberWidth, y + this.grabberHeight, normalC.getColorInt());
            }
        } else if (this.hoverBarTexture != null) {
            blitF(graphics, this.hoverBarTexture, x, y, 0.0F, 0.0F, this.grabberWidth, this.grabberHeight, this.grabberWidth, this.grabberHeight);
        } else if (hoverC != null) {
            fillF(graphics, x, y, x + this.grabberWidth, y + this.grabberHeight, hoverC.getColorInt());
        }
    }

    public boolean isGrabberHovered() {
        return !this.active ? false : this.grabberHovered;
    }

    public boolean isMouseOverGrabber(double mouseX, double mouseY) {
        if (!this.active) {
            return false;
        } else {
            float x = this.lastGrabberX;
            float y = this.lastGrabberY;
            return mouseX >= (double) x && mouseX <= (double) (x + this.grabberWidth) && mouseY >= (double) y && mouseY <= (double) (y + this.grabberHeight);
        }
    }

    public boolean isGrabberGrabbed() {
        return this.active && this.leftMouseDownOnGrabber;
    }

    public boolean isMouseInsideScrollArea(double mouseX, double mouseY, boolean ignoreGrabber) {
        if (!this.active) {
            return false;
        } else if (ignoreGrabber || !this.isGrabberGrabbed() && !this.isGrabberHovered()) {
            float x = this.scrollAreaStartX;
            float y = this.scrollAreaStartY;
            float width = this.scrollAreaEndX - this.scrollAreaStartX;
            float height = this.scrollAreaEndY - this.scrollAreaStartY;
            return mouseX >= (double) x && mouseX <= (double) (x + width) && mouseY >= (double) y && mouseY <= (double) (y + height);
        } else {
            return false;
        }
    }

    public float getScroll() {
        return this.scroll;
    }

    public void setScroll(float scroll) {
        this.setScroll(scroll, true);
    }

    public void setScroll(float scroll, boolean informScrollListeners) {
        this.scroll = Math.min(1.0F, Math.max(0.0F, scroll));
        if (informScrollListeners) {
            for (Consumer<ScrollBar> listener : this.scrollListeners) {
                listener.accept(this);
            }
        }
    }

    public float getGrabberScrollSpeed() {
        return this.grabberScrollSpeed;
    }

    public void setGrabberScrollSpeed(float speed) {
        this.grabberScrollSpeed = Math.max(0.0F, speed);
    }

    public float getWheelScrollSpeed() {
        return this.wheelScrollSpeed;
    }

    public void setWheelScrollSpeed(float speed) {
        this.wheelScrollSpeed = Math.max(0.0F, speed);
    }

    public boolean isScrollWheelAllowed() {
        return this.allowScrollWheel;
    }

    public void setScrollWheelAllowed(boolean allowed) {
        this.allowScrollWheel = allowed;
    }

    public ScrollBar.ScrollBarDirection getDirection() {
        return this.direction;
    }

    public void registerScrollListener(Consumer<ScrollBar> listener) {
        this.scrollListeners.add(listener);
    }

    @Override
    public boolean mouseClicked(double mouseX, double mouseY, int button) {
        if (button == 0) {
            if (!this.active) {
                return false;
            }
            if (this.isGrabberHovered()) {
                this.leftMouseDownOnGrabber = true;
                this.leftMouseDownOnGrabberAtMouseX = mouseX;
                this.leftMouseDownOnGrabberAtMouseY = mouseY;
                this.leftMouseDownOnGrabberAtScroll = this.scroll;
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean mouseReleased(double mouseX, double mouseY, int button) {
        this.leftMouseDownOnGrabber = false;
        return false;
    }

    @Override
    public boolean mouseDragged(double mouseX, double mouseY, int button, double $$3, double $$4) {
        if (this.leftMouseDownOnGrabber) {
            float usableAreaWidth = this.scrollAreaEndX - this.scrollAreaStartX - this.grabberWidth;
            float usableAreaHeight = this.scrollAreaEndY - this.scrollAreaStartY - this.grabberHeight;
            float offsetX = (float) (mouseX - this.leftMouseDownOnGrabberAtMouseX);
            float offsetY = (float) (mouseY - this.leftMouseDownOnGrabberAtMouseY);
            float scrollOffset;
            if (this.direction == ScrollBar.ScrollBarDirection.VERTICAL) {
                scrollOffset = offsetY / usableAreaHeight;
            } else {
                scrollOffset = offsetX / usableAreaWidth;
            }
            this.setScroll(this.leftMouseDownOnGrabberAtScroll + scrollOffset);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean mouseScrolled(double mouseX, double mouseY, double scrollDelta) {
        if (this.active && this.allowScrollWheel && this.isMouseInsideScrollArea(mouseX, mouseY, true) && !this.leftMouseDownOnGrabber) {
            float scrollOffset = 0.1F * this.wheelScrollSpeed;
            if (scrollDelta > 0.0) {
                scrollOffset = -scrollOffset;
            }
            this.setScroll(this.getScroll() + scrollOffset);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean isMouseOver(double mouseX, double mouseY) {
        return this.leftMouseDownOnGrabber ? true : this.isMouseInsideScrollArea(mouseX, mouseY, true);
    }

    @Override
    public void setFocused(boolean var1) {
    }

    @Override
    public boolean isFocused() {
        return false;
    }

    @NotNull
    @Override
    public NarratableEntry.NarrationPriority narrationPriority() {
        return NarratableEntry.NarrationPriority.NONE;
    }

    @Override
    public void updateNarration(@NotNull NarrationElementOutput var1) {
    }

    public static enum ScrollBarDirection {

        HORIZONTAL, VERTICAL
    }
}