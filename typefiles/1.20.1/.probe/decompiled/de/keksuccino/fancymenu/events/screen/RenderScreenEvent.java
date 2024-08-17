package de.keksuccino.fancymenu.events.screen;

import de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen;
import de.keksuccino.fancymenu.util.event.acara.EventBase;
import java.util.List;
import java.util.Objects;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Renderable;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.client.gui.narration.NarratableEntry;
import net.minecraft.client.gui.screens.Screen;
import org.jetbrains.annotations.NotNull;

public class RenderScreenEvent extends EventBase {

    private final Screen screen;

    private final GuiGraphics graphics;

    private final int mouseX;

    private final int mouseY;

    private final float partial;

    protected RenderScreenEvent(@NotNull Screen screen, @NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        this.screen = (Screen) Objects.requireNonNull(screen);
        this.graphics = (GuiGraphics) Objects.requireNonNull(graphics);
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.partial = partial;
    }

    public Screen getScreen() {
        return this.screen;
    }

    @NotNull
    public GuiGraphics getGraphics() {
        return this.graphics;
    }

    public int getMouseX() {
        return this.mouseX;
    }

    public int getMouseY() {
        return this.mouseY;
    }

    public float getPartial() {
        return this.partial;
    }

    public <T extends GuiEventListener & NarratableEntry> void addWidget(T widget) {
        this.getWidgets().add(widget);
        this.getNarratables().add(widget);
    }

    public <T extends GuiEventListener & NarratableEntry & Renderable> void addRenderableWidget(T widget) {
        this.addWidget(widget);
        this.getRenderables().add(widget);
    }

    public List<GuiEventListener> getWidgets() {
        return ((IMixinScreen) this.getScreen()).getChildrenFancyMenu();
    }

    public List<Renderable> getRenderables() {
        return ((IMixinScreen) this.getScreen()).getRenderablesFancyMenu();
    }

    public List<NarratableEntry> getNarratables() {
        return ((IMixinScreen) this.getScreen()).getNarratablesFancyMenu();
    }

    @Override
    public boolean isCancelable() {
        return false;
    }

    public static class Post extends RenderScreenEvent {

        public Post(Screen screen, GuiGraphics graphics, int mouseX, int mouseY, float partial) {
            super(screen, graphics, mouseX, mouseY, partial);
        }
    }

    public static class Pre extends RenderScreenEvent {

        public Pre(Screen screen, GuiGraphics graphics, int mouseX, int mouseY, float partial) {
            super(screen, graphics, mouseX, mouseY, partial);
        }
    }
}