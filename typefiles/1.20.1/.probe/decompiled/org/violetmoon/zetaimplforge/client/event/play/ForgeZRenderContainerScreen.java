package org.violetmoon.zetaimplforge.client.event.play;

import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.inventory.AbstractContainerScreen;
import net.minecraftforge.client.event.ContainerScreenEvent;
import org.violetmoon.zeta.client.event.play.ZRenderContainerScreen;

public abstract class ForgeZRenderContainerScreen implements ZRenderContainerScreen {

    protected final ContainerScreenEvent.Render e;

    public ForgeZRenderContainerScreen(ContainerScreenEvent.Render e) {
        this.e = e;
    }

    @Override
    public AbstractContainerScreen<?> getContainerScreen() {
        return this.e.getContainerScreen();
    }

    @Override
    public GuiGraphics getGuiGraphics() {
        return this.e.getGuiGraphics();
    }

    @Override
    public int getMouseX() {
        return this.e.getMouseX();
    }

    @Override
    public int getMouseY() {
        return this.e.getMouseY();
    }

    public static class Background extends ForgeZRenderContainerScreen implements ZRenderContainerScreen.Background {

        public Background(ContainerScreenEvent.Render.Background e) {
            super(e);
        }
    }

    public static class Foreground extends ForgeZRenderContainerScreen implements ZRenderContainerScreen.Foreground {

        public Foreground(ContainerScreenEvent.Render.Foreground e) {
            super(e);
        }
    }
}