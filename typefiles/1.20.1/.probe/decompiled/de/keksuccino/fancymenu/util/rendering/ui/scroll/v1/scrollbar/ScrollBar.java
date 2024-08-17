package de.keksuccino.fancymenu.util.rendering.ui.scroll.v1.scrollbar;

import com.mojang.blaze3d.systems.RenderSystem;
import de.keksuccino.fancymenu.events.screen.ScreenMouseScrollEvent;
import de.keksuccino.konkrete.input.MouseInput;
import java.awt.Color;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class ScrollBar {

    private static final Logger LOGGER = LogManager.getLogger();

    protected final ScrollBar.ScrollBarDirection direction;

    public int grabberWidth;

    public int grabberHeight;

    public int scrollAreaStartX;

    public int scrollAreaStartY;

    public int scrollAreaEndX;

    public int scrollAreaEndY;

    public Color idleBarColor;

    public Color hoverBarColor;

    public ResourceLocation idleBarTexture;

    public ResourceLocation hoverBarTexture;

    public boolean active = true;

    protected boolean allowScrollWheel = false;

    protected float grabberScrollSpeed = 1.0F;

    protected float wheelScrollSpeed = 1.0F;

    protected float scroll = 0.0F;

    protected boolean leftMouseDown = false;

    protected int lastGrabberX = 0;

    protected int lastGrabberY = 0;

    protected boolean grabbed = false;

    protected int grabbedAtX = 0;

    protected int grabbedAtY = 0;

    protected float grabbedAtScroll = 0.0F;

    protected volatile long lastTick;

    protected List<Consumer<ScrollBar>> scrollListeners = new ArrayList();

    public ScrollBar(@NotNull ScrollBar.ScrollBarDirection direction, int grabberWidth, int grabberHeight, int scrollAreaStartX, int scrollAreaStartY, int scrollAreaEndX, int scrollAreaEndY, Color idleBarColor, Color hoverBarColor) {
        this(direction, grabberWidth, grabberHeight, scrollAreaStartX, scrollAreaStartY, scrollAreaEndX, scrollAreaEndY);
        this.idleBarColor = idleBarColor;
        this.hoverBarColor = hoverBarColor;
    }

    public ScrollBar(@NotNull ScrollBar.ScrollBarDirection direction, int grabberWidth, int grabberHeight, int scrollAreaStartX, int scrollAreaStartY, int scrollAreaEndX, int scrollAreaEndY, ResourceLocation idleBarTexture, ResourceLocation hoverBarTexture) {
        this(direction, grabberWidth, grabberHeight, scrollAreaStartX, scrollAreaStartY, scrollAreaEndX, scrollAreaEndY);
        this.idleBarTexture = idleBarTexture;
        this.hoverBarTexture = hoverBarTexture;
    }

    protected ScrollBar(ScrollBar.ScrollBarDirection direction, int grabberWidth, int grabberHeight, int scrollAreaStartX, int scrollAreaStartY, int scrollAreaEndX, int scrollAreaEndY) {
        this.direction = direction;
        this.grabberWidth = grabberWidth;
        this.grabberHeight = grabberHeight;
        this.scrollAreaStartX = scrollAreaStartX;
        this.scrollAreaStartY = scrollAreaStartY;
        this.scrollAreaEndX = scrollAreaEndX;
        this.scrollAreaEndY = scrollAreaEndY;
    }

    public void render(GuiGraphics graphics) {
        int x = this.scrollAreaEndX - this.grabberWidth;
        int y = this.scrollAreaEndY - this.grabberHeight;
        if (this.direction == ScrollBar.ScrollBarDirection.VERTICAL) {
            int usableAreaHeight = this.scrollAreaEndY - this.scrollAreaStartY - this.grabberHeight;
            y = this.scrollAreaStartY + (int) ((float) usableAreaHeight * this.scroll);
        } else {
            int usableAreaWidth = this.scrollAreaEndX - this.scrollAreaStartX - this.grabberWidth;
            x = this.scrollAreaStartX + (int) ((float) usableAreaWidth * this.scroll);
        }
        this.lastGrabberX = x;
        this.lastGrabberY = y;
        RenderSystem.enableBlend();
        graphics.setColor(1.0F, 1.0F, 1.0F, 1.0F);
        if (!this.isGrabberHovered() && !this.isGrabberGrabbed()) {
            if (this.idleBarTexture != null) {
                graphics.blit(this.idleBarTexture, x, y, 0.0F, 0.0F, this.grabberWidth, this.grabberHeight, this.grabberWidth, this.grabberHeight);
            } else if (this.idleBarColor != null) {
                graphics.fill(x, y, x + this.grabberWidth, y + this.grabberHeight, this.idleBarColor.getRGB());
            }
        } else if (this.hoverBarTexture != null) {
            graphics.blit(this.hoverBarTexture, x, y, 0.0F, 0.0F, this.grabberWidth, this.grabberHeight, this.grabberWidth, this.grabberHeight);
        } else if (this.hoverBarColor != null) {
            graphics.fill(x, y, x + this.grabberWidth, y + this.grabberHeight, this.hoverBarColor.getRGB());
        }
        this.handleGrabberScrolling();
        ScrollBarHandler.handleScrollBar(this);
    }

    protected void handleGrabberScrolling() {
        if (this.active) {
            int mouseX = MouseInput.getMouseX();
            int mouseY = MouseInput.getMouseY();
            if (this.isGrabberHovered() && MouseInput.isLeftMouseDown()) {
                if (!this.grabbed && !this.leftMouseDown) {
                    this.grabbed = true;
                    this.grabbedAtX = mouseX;
                    this.grabbedAtY = mouseY;
                    this.grabbedAtScroll = this.scroll;
                }
            } else if (!MouseInput.isLeftMouseDown()) {
                this.grabbed = false;
            }
            this.leftMouseDown = MouseInput.isLeftMouseDown();
            if (this.grabbed) {
                int usableAreaWidth = this.scrollAreaEndX - this.scrollAreaStartX - this.grabberWidth;
                int usableAreaHeight = this.scrollAreaEndY - this.scrollAreaStartY - this.grabberHeight;
                int diffX = (int) (((float) Math.max(mouseX, this.grabbedAtX) - (float) Math.min(mouseX, this.grabbedAtX)) * this.grabberScrollSpeed);
                int diffY = (int) (((float) Math.max(mouseY, this.grabbedAtY) - (float) Math.min(mouseY, this.grabbedAtY)) * this.grabberScrollSpeed);
                float scrollOffset;
                if (this.direction == ScrollBar.ScrollBarDirection.VERTICAL) {
                    scrollOffset = (float) diffY / (float) usableAreaHeight;
                    if (mouseY < this.grabbedAtY) {
                        scrollOffset = -scrollOffset;
                    }
                } else {
                    scrollOffset = (float) diffX / (float) usableAreaWidth;
                    if (mouseX < this.grabbedAtX) {
                        scrollOffset = -scrollOffset;
                    }
                }
                this.setScroll(this.grabbedAtScroll + scrollOffset);
            }
        }
    }

    protected void handleWheelScrolling(ScreenMouseScrollEvent.Pre e) {
        if (this.active && this.allowScrollWheel && this.isMouseInsideScrollArea(true) && !this.grabbed) {
            float scrollOffset = 0.1F * this.wheelScrollSpeed;
            if (e.getScrollDelta() > 0.0) {
                scrollOffset = -scrollOffset;
            }
            this.setScroll(this.getScroll() + scrollOffset);
        }
    }

    public boolean isGrabberHovered() {
        if (!this.active) {
            return false;
        } else {
            int x = this.lastGrabberX;
            int y = this.lastGrabberY;
            int mouseX = MouseInput.getMouseX();
            int mouseY = MouseInput.getMouseY();
            return mouseX >= x && mouseX <= x + this.grabberWidth && mouseY >= y && mouseY <= y + this.grabberHeight;
        }
    }

    public boolean isGrabberGrabbed() {
        return this.active && this.grabbed;
    }

    public boolean isMouseInsideScrollArea(boolean ignoreGrabber) {
        if (!this.active) {
            return false;
        } else if (ignoreGrabber || !this.isGrabberGrabbed() && !this.isGrabberHovered()) {
            int x = this.scrollAreaStartX;
            int y = this.scrollAreaStartY;
            int width = this.scrollAreaEndX - this.scrollAreaStartX;
            int height = this.scrollAreaEndY - this.scrollAreaStartY;
            int mouseX = MouseInput.getMouseX();
            int mouseY = MouseInput.getMouseY();
            return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
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

    public static enum ScrollBarDirection {

        HORIZONTAL, VERTICAL
    }
}