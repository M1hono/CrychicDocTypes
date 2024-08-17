package de.keksuccino.fancymenu.customization.animation;

import com.mojang.blaze3d.platform.NativeImage;
import com.mojang.blaze3d.systems.RenderSystem;
import de.keksuccino.konkrete.rendering.animation.IAnimationRenderer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Nullable;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ResourcePackAnimationRenderer implements IAnimationRenderer {

    private static final Logger LOGGER = LogManager.getLogger();

    protected String resourceNamespace;

    protected List<String> frameNames;

    protected int fps;

    protected boolean loop;

    protected int width;

    protected int height;

    protected int x;

    protected int y;

    public List<ResourceLocation> resources = new ArrayList();

    protected boolean stretch = false;

    protected boolean hide = false;

    protected volatile boolean done = false;

    private int frame = 0;

    public long prevTime = 0L;

    protected float opacity = 1.0F;

    protected boolean ready = false;

    protected boolean sizeSet = false;

    public ResourcePackAnimationRenderer(@Nullable String resourceNamespace, List<String> frameNames, int fps, boolean loop, int posX, int posY, int width, int height) {
        this.fps = fps;
        this.loop = loop;
        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;
        this.resourceNamespace = resourceNamespace;
        this.frameNames = frameNames;
        this.loadAnimationFrames();
    }

    private void loadAnimationFrames() {
        try {
            for (String s : this.frameNames) {
                ResourceLocation r;
                if (this.resourceNamespace == null) {
                    r = new ResourceLocation(s);
                } else {
                    r = new ResourceLocation(this.resourceNamespace, s);
                }
                this.resources.add(r);
            }
            this.ready = true;
        } catch (Exception var4) {
            var4.printStackTrace();
        }
    }

    @Override
    public void render(GuiGraphics graphics) {
        if (this.resources != null && !this.resources.isEmpty()) {
            if (this.fps < 0) {
                this.fps = -1;
            }
            if (this.frame > this.resources.size() - 1) {
                if (this.loop) {
                    this.resetAnimation();
                } else {
                    this.done = true;
                    if (this.hide) {
                        return;
                    }
                    this.frame = this.resources.size() - 1;
                }
            }
            this.renderFrame(graphics);
            long time = System.currentTimeMillis();
            if (this.fps == -1) {
                this.updateFrame(time);
            } else if (this.prevTime + (long) (1000 / this.fps) <= time) {
                this.updateFrame(time);
            }
        }
    }

    protected void renderFrame(GuiGraphics graphics) {
        int h = this.height;
        int w = this.width;
        int x2 = this.x;
        int y2 = this.y;
        if (this.stretch && Minecraft.getInstance().screen != null) {
            h = Minecraft.getInstance().screen.height;
            w = Minecraft.getInstance().screen.width;
            x2 = 0;
            y2 = 0;
        }
        graphics.setColor(1.0F, 1.0F, 1.0F, this.opacity);
        graphics.blit((ResourceLocation) this.resources.get(this.frame), x2, y2, 0.0F, 0.0F, w, h, w, h);
        RenderSystem.disableBlend();
    }

    @Override
    public void setOpacity(float opacity) {
        this.opacity = opacity;
    }

    public void updateFrame(long time) {
        this.frame++;
        this.prevTime = time;
    }

    @Override
    public void resetAnimation() {
        this.frame = 0;
        this.prevTime = 0L;
        this.done = false;
    }

    @Override
    public void setStretchImageToScreensize(boolean b) {
        this.stretch = b;
    }

    @Override
    public void setHideAfterLastFrame(boolean b) {
        this.hide = b;
    }

    @Override
    public boolean isFinished() {
        return this.done;
    }

    @Override
    public void setWidth(int width) {
        this.width = width;
    }

    @Override
    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public int currentFrame() {
        return this.frame;
    }

    @Override
    public boolean isReady() {
        return this.ready;
    }

    @Override
    public void setPosX(int x) {
        this.x = x;
    }

    @Override
    public void setPosY(int y) {
        this.y = y;
    }

    @Override
    public int animationFrames() {
        return this.resources.size();
    }

    public List<ResourceLocation> getAnimationFrames() {
        return this.resources;
    }

    @Override
    public String getPath() {
        return this.resourceNamespace;
    }

    @Override
    public void setFPS(int fps) {
        this.fps = fps;
    }

    @Override
    public int getFPS() {
        return this.fps;
    }

    @Override
    public void setLooped(boolean b) {
        this.loop = b;
    }

    @Override
    public void prepareAnimation() {
    }

    @Override
    public boolean isGettingLooped() {
        return this.loop;
    }

    @Override
    public boolean isStretchedToStreensize() {
        return this.stretch;
    }

    @Override
    public int getWidth() {
        return this.width;
    }

    @Override
    public int getHeight() {
        return this.height;
    }

    @Override
    public int getPosX() {
        return this.x;
    }

    @Override
    public int getPosY() {
        return this.y;
    }

    public boolean setupAnimationSize() {
        if (this.sizeSet) {
            return true;
        } else {
            try {
                List<ResourceLocation> l = this.getAnimationFrames();
                if (!l.isEmpty()) {
                    ResourceLocation r = (ResourceLocation) l.get(0);
                    if (r != null) {
                        NativeImage i = NativeImage.read(Minecraft.getInstance().getResourceManager().m_215595_(r));
                        this.width = i.getWidth();
                        this.height = i.getHeight();
                        this.sizeSet = true;
                        return true;
                    }
                }
            } catch (Exception var4) {
            }
            LOGGER.error("[FANCYMENU] Failed to update width and height for resource pack animation: " + this.resourceNamespace);
            return false;
        }
    }
}