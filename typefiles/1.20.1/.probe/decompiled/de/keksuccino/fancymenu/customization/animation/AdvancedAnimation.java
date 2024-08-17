package de.keksuccino.fancymenu.customization.animation;

import de.keksuccino.fancymenu.customization.animation.exceptions.AnimationNotFoundException;
import de.keksuccino.fancymenu.util.rendering.AspectRatio;
import de.keksuccino.fancymenu.util.resource.PlayableResource;
import de.keksuccino.fancymenu.util.resource.RenderableResource;
import de.keksuccino.konkrete.rendering.animation.ExternalTextureAnimationRenderer;
import de.keksuccino.konkrete.rendering.animation.IAnimationRenderer;
import de.keksuccino.konkrete.resources.ExternalTextureResourceLocation;
import de.keksuccino.konkrete.sound.SoundHandler;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.Resource;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class AdvancedAnimation implements IAnimationRenderer, RenderableResource, PlayableResource {

    private final IAnimationRenderer introRenderer;

    private final IAnimationRenderer animationRenderer;

    private boolean started = false;

    private final String mainAudioPath;

    private final String introAudioPath;

    private boolean muted = false;

    private final boolean replayIntro;

    public String propertiesPath = null;

    protected boolean prepared = false;

    protected boolean playing = false;

    public AdvancedAnimation(@Nullable IAnimationRenderer introAnimation, IAnimationRenderer mainAnimation, @Nullable String introAudioPath, @Nullable String mainAudioPath, boolean replayIntro) throws AnimationNotFoundException {
        if (mainAnimation != null) {
            this.animationRenderer = mainAnimation;
            this.introRenderer = introAnimation;
            this.mainAudioPath = mainAudioPath;
            this.introAudioPath = introAudioPath;
            this.replayIntro = replayIntro;
        } else {
            throw new AnimationNotFoundException("Animation cannot be null!");
        }
    }

    public boolean hasIntro() {
        return this.introRenderer != null;
    }

    @Nullable
    @Override
    public InputStream open() throws IOException {
        return null;
    }

    @Override
    public boolean isReady() {
        if (this.animationRenderer != null && this.hasIntro()) {
            if (this.animationRenderer.isReady() && this.introRenderer.isReady()) {
                return true;
            }
        } else if (this.animationRenderer != null) {
            return this.animationRenderer.isReady();
        }
        return false;
    }

    @Override
    public boolean isLoadingCompleted() {
        return true;
    }

    @Override
    public boolean isLoadingFailed() {
        return false;
    }

    @Override
    public boolean isClosed() {
        return false;
    }

    @Override
    public void prepareAnimation() {
        if (!this.prepared) {
            if (this.animationRenderer != null) {
                this.animationRenderer.prepareAnimation();
            }
            if (this.hasIntro()) {
                this.introRenderer.prepareAnimation();
            }
            this.prepared = true;
        }
    }

    @Override
    public void resetAnimation() {
        this.stopAudio();
        this.resetAudio();
        if (this.animationRenderer != null) {
            this.animationRenderer.resetAnimation();
        }
        if (this.hasIntro()) {
            this.introRenderer.resetAnimation();
        }
        this.started = false;
    }

    public boolean hasStarted() {
        return this.started;
    }

    @Deprecated
    @Override
    public void render(GuiGraphics graphics) {
        if (this.isReady()) {
            this.playing = true;
            this.started = true;
            if (!this.muted) {
                if (this.hasIntroAudio() && !this.introRenderer.isFinished() && (this.introRenderer.currentFrame() == 1 || this.introRenderer.currentFrame() > 1 && !SoundHandler.isPlaying(this.introAudioPath))) {
                    SoundHandler.stopSound(this.mainAudioPath);
                    SoundHandler.registerSound(this.introAudioPath, this.introAudioPath);
                    SoundHandler.resetSound(this.introAudioPath);
                    SoundHandler.playSound(this.introAudioPath);
                }
                if (this.hasIntroAudio() && this.introRenderer.isFinished()) {
                    SoundHandler.stopSound(this.introAudioPath);
                }
                if (this.hasMainAudio() && !this.animationRenderer.isFinished() && (this.animationRenderer.currentFrame() == 1 || this.animationRenderer.currentFrame() > 1 && !SoundHandler.isPlaying(this.mainAudioPath))) {
                    if (this.hasIntroAudio()) {
                        SoundHandler.stopSound(this.introAudioPath);
                    }
                    SoundHandler.registerSound(this.mainAudioPath, this.mainAudioPath);
                    SoundHandler.resetSound(this.mainAudioPath);
                    SoundHandler.playSound(this.mainAudioPath);
                    SoundHandler.setLooped(this.mainAudioPath, true);
                }
            }
            if (this.hasIntro()) {
                this.introRenderer.setFPS(this.animationRenderer.getFPS());
                this.introRenderer.setWidth(this.animationRenderer.getWidth());
                this.introRenderer.setHeight(this.animationRenderer.getHeight());
                this.introRenderer.setPosX(this.animationRenderer.getPosX());
                this.introRenderer.setPosY(this.animationRenderer.getPosY());
                this.introRenderer.setLooped(false);
                if (!this.introRenderer.isFinished()) {
                    if (canRenderFrameOf(this.introRenderer, this.introRenderer.currentFrame())) {
                        this.introRenderer.render(graphics);
                    }
                } else if (canRenderFrameOf(this.animationRenderer, this.animationRenderer.currentFrame())) {
                    this.animationRenderer.render(graphics);
                }
            } else if (canRenderFrameOf(this.animationRenderer, this.animationRenderer.currentFrame())) {
                this.animationRenderer.render(graphics);
            }
        }
        if (this.isFinished() || this.muted) {
            this.stopAudio();
        }
    }

    @Override
    public void setStretchImageToScreensize(boolean b) {
        if (this.hasIntro()) {
            this.introRenderer.setStretchImageToScreensize(b);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setStretchImageToScreensize(b);
        }
    }

    @Override
    public void setHideAfterLastFrame(boolean b) {
        if (this.hasIntro()) {
            this.introRenderer.setHideAfterLastFrame(b);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setHideAfterLastFrame(b);
        }
    }

    @Override
    public boolean isFinished() {
        if (this.hasIntro() && this.animationRenderer != null) {
            if (this.introRenderer.isFinished() && this.animationRenderer.isFinished()) {
                return true;
            }
        } else if (this.animationRenderer != null) {
            return this.animationRenderer.isFinished();
        }
        return false;
    }

    @Override
    public void setWidth(int width) {
        if (this.hasIntro()) {
            this.introRenderer.setWidth(width);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setWidth(width);
        }
    }

    @Override
    public void setHeight(int height) {
        if (this.hasIntro()) {
            this.introRenderer.setHeight(height);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setHeight(height);
        }
    }

    @Override
    public void setPosX(int x) {
        if (this.hasIntro()) {
            this.introRenderer.setPosX(x);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setPosX(x);
        }
    }

    @Override
    public void setPosY(int y) {
        if (this.hasIntro()) {
            this.introRenderer.setPosY(y);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setPosY(y);
        }
    }

    @Override
    public int currentFrame() {
        int i = 0;
        if (this.hasIntro()) {
            i = this.introRenderer.currentFrame();
        }
        if (this.animationRenderer != null) {
            i += this.animationRenderer.currentFrame();
        }
        return i;
    }

    @Override
    public int animationFrames() {
        int i = 0;
        if (this.hasIntro()) {
            i = this.introRenderer.animationFrames();
        }
        if (this.animationRenderer != null) {
            i += this.animationRenderer.animationFrames();
        }
        return i;
    }

    @Override
    public String getPath() {
        return this.animationRenderer != null ? new File(this.animationRenderer.getPath()).toPath().getParent().toString() : null;
    }

    @Override
    public void setFPS(int fps) {
        if (this.hasIntro()) {
            this.introRenderer.setFPS(fps);
        }
        if (this.animationRenderer != null) {
            this.animationRenderer.setFPS(fps);
        }
    }

    @Override
    public void setLooped(boolean b) {
        if (this.animationRenderer != null) {
            this.animationRenderer.setLooped(b);
        }
    }

    @Override
    public int getFPS() {
        return this.animationRenderer != null ? this.animationRenderer.getFPS() : 0;
    }

    @Override
    public boolean isGettingLooped() {
        return this.animationRenderer.isGettingLooped();
    }

    @Override
    public boolean isStretchedToStreensize() {
        return this.animationRenderer != null ? this.animationRenderer.isStretchedToStreensize() : false;
    }

    @Override
    public int getWidth() {
        return this.animationRenderer.getWidth();
    }

    @Override
    public int getHeight() {
        return this.animationRenderer.getHeight();
    }

    @NotNull
    @Override
    public AspectRatio getAspectRatio() {
        return null;
    }

    @Override
    public int getPosX() {
        return this.animationRenderer.getPosX();
    }

    @Override
    public int getPosY() {
        return this.animationRenderer.getPosY();
    }

    public void setMuteAudio(boolean b) {
        this.muted = b;
    }

    public boolean hasMainAudio() {
        return this.mainAudioPath != null;
    }

    public boolean hasIntroAudio() {
        return this.hasIntro() && this.introAudioPath != null;
    }

    public void stopAudio() {
        SoundHandler.stopSound(this.mainAudioPath);
        if (this.hasIntro()) {
            SoundHandler.stopSound(this.introAudioPath);
        }
    }

    public void resetAudio() {
        SoundHandler.resetSound(this.mainAudioPath);
        if (this.hasIntro()) {
            SoundHandler.resetSound(this.introAudioPath);
        }
    }

    public IAnimationRenderer getMainAnimationRenderer() {
        return this.animationRenderer;
    }

    public IAnimationRenderer getIntroAnimationRenderer() {
        return this.introRenderer;
    }

    public boolean replayIntro() {
        return this.replayIntro;
    }

    @Override
    public void setOpacity(float opacity) {
        if (this.animationRenderer != null) {
            this.animationRenderer.setOpacity(opacity);
        }
        if (this.introRenderer != null) {
            this.introRenderer.setOpacity(opacity);
        }
    }

    protected static void tickRenderer(@NotNull IAnimationRenderer renderer) {
        List<ResourceLocation> frames = getFramesOf(renderer);
        int fps = renderer.getFPS();
        if (!frames.isEmpty()) {
            if (fps <= 0) {
                fps = -1;
            }
            if (renderer.currentFrame() >= frames.size() && renderer.isGettingLooped()) {
                renderer.resetAnimation();
            }
            Consumer<Long> updateFrameInvoker = timex -> {
                if (renderer.currentFrame() < frames.size()) {
                    try {
                        if (renderer instanceof ResourcePackAnimationRenderer r) {
                            r.updateFrame(timex);
                        } else if (renderer instanceof ExternalTextureAnimationRenderer e) {
                            Method m = ExternalTextureAnimationRenderer.class.getDeclaredMethod("updateFrame", long.class);
                            m.setAccessible(true);
                            m.invoke(e, timex);
                        }
                    } catch (Exception var6) {
                    }
                }
            };
            Supplier<Long> prevTimeSupplier = () -> {
                try {
                    if (renderer instanceof ResourcePackAnimationRenderer r) {
                        return r.prevTime;
                    }
                    if (renderer instanceof ExternalTextureAnimationRenderer e) {
                        Field f = ExternalTextureAnimationRenderer.class.getDeclaredField("prevTime");
                        f.setAccessible(true);
                        return (Long) f.get(e);
                    }
                } catch (Exception var4x) {
                }
                return 0L;
            };
            long time = System.currentTimeMillis();
            if (fps == -1) {
                updateFrameInvoker.accept(time);
            } else if ((Long) prevTimeSupplier.get() + (long) (1000 / fps) <= time) {
                updateFrameInvoker.accept(time);
            }
        }
    }

    @NotNull
    protected static List<ResourceLocation> getFramesOf(@NotNull IAnimationRenderer renderer) {
        try {
            if (renderer.isReady()) {
                if (renderer instanceof ResourcePackAnimationRenderer r) {
                    return r.resources;
                }
                if (renderer instanceof ExternalTextureAnimationRenderer e) {
                    Field f = ExternalTextureAnimationRenderer.class.getDeclaredField("resources");
                    f.setAccessible(true);
                    List<ExternalTextureResourceLocation> resources = (List<ExternalTextureResourceLocation>) f.get(renderer);
                    List<ResourceLocation> locations = new ArrayList();
                    for (ExternalTextureResourceLocation external : resources) {
                        ResourceLocation loc = external.getResourceLocation();
                        if (loc == null) {
                            loc = FULLY_TRANSPARENT_TEXTURE;
                        }
                        locations.add(loc);
                    }
                    return locations;
                }
            }
        } catch (Exception var9) {
        }
        return new ArrayList();
    }

    @Nullable
    protected static ResourceLocation getCurrentFrameOf(@NotNull IAnimationRenderer renderer) {
        List<ResourceLocation> locations = getFramesOf(renderer);
        if (!locations.isEmpty()) {
            return renderer.currentFrame() < locations.size() ? (ResourceLocation) locations.get(renderer.currentFrame()) : (ResourceLocation) locations.get(locations.size() - 1);
        } else {
            return null;
        }
    }

    protected static boolean canRenderFrameOf(@NotNull IAnimationRenderer renderer, int frame) {
        try {
            if (renderer.isReady()) {
                if (renderer instanceof ResourcePackAnimationRenderer) {
                    List<ResourceLocation> l = ((ResourcePackAnimationRenderer) renderer).resources;
                    if (!l.isEmpty()) {
                        if (l.size() > frame) {
                            ResourceLocation r = (ResourceLocation) l.get(frame);
                            Resource res = (Resource) Minecraft.getInstance().getResourceManager().m_213713_(r).get();
                            return res != null;
                        }
                        return true;
                    }
                } else {
                    if (!(renderer instanceof ExternalTextureAnimationRenderer)) {
                        return true;
                    }
                    Field f = ExternalTextureAnimationRenderer.class.getDeclaredField("resources");
                    f.setAccessible(true);
                    List<ExternalTextureResourceLocation> l = (List<ExternalTextureResourceLocation>) f.get(renderer);
                    if (l == null || l.size() <= frame) {
                        return true;
                    }
                    ResourceLocation r = ((ExternalTextureResourceLocation) l.get(frame)).getResourceLocation();
                    if (r != null) {
                        Resource res = (Resource) Minecraft.getInstance().getResourceManager().m_213713_(r).get();
                        return res != null;
                    }
                }
            }
        } catch (Exception var6) {
        }
        return false;
    }

    @Override
    public void play() {
        this.playing = true;
        this.started = true;
    }

    @Override
    public void pause() {
        this.playing = false;
        this.stopAudio();
    }

    @Override
    public boolean isPaused() {
        return false;
    }

    @Override
    public void stop() {
        this.playing = false;
        this.started = false;
        this.resetAnimation();
        this.stopAudio();
    }

    @Override
    public boolean isPlaying() {
        return !this.isFinished() && this.playing;
    }

    @Nullable
    @Override
    public ResourceLocation getResourceLocation() {
        if (!this.playing) {
            return null;
        } else {
            if (!this.muted) {
                if (this.hasIntroAudio() && !this.introRenderer.isFinished() && (this.introRenderer.currentFrame() == 1 || this.introRenderer.currentFrame() > 1 && !SoundHandler.isPlaying(this.introAudioPath))) {
                    SoundHandler.stopSound(this.mainAudioPath);
                    SoundHandler.registerSound(this.introAudioPath, this.introAudioPath);
                    SoundHandler.resetSound(this.introAudioPath);
                    SoundHandler.playSound(this.introAudioPath);
                }
                if (this.hasIntroAudio() && this.introRenderer.isFinished()) {
                    SoundHandler.stopSound(this.introAudioPath);
                }
                if (this.hasMainAudio() && !this.animationRenderer.isFinished() && (this.animationRenderer.currentFrame() == 1 || this.animationRenderer.currentFrame() > 1 && !SoundHandler.isPlaying(this.mainAudioPath))) {
                    if (this.hasIntroAudio()) {
                        SoundHandler.stopSound(this.introAudioPath);
                    }
                    SoundHandler.registerSound(this.mainAudioPath, this.mainAudioPath);
                    SoundHandler.resetSound(this.mainAudioPath);
                    SoundHandler.playSound(this.mainAudioPath);
                    SoundHandler.setLooped(this.mainAudioPath, true);
                }
            }
            if (this.hasIntro()) {
                this.introRenderer.setFPS(this.animationRenderer.getFPS());
                this.introRenderer.setLooped(false);
                if (!this.introRenderer.isFinished()) {
                    ResourceLocation current = getCurrentFrameOf(this.introRenderer);
                    tickRenderer(this.introRenderer);
                    return current;
                }
            }
            ResourceLocation current = getCurrentFrameOf(this.animationRenderer);
            tickRenderer(this.animationRenderer);
            return current;
        }
    }

    @Override
    public void reset() {
        this.playing = false;
        this.resetAnimation();
    }

    public void close() throws IOException {
    }
}