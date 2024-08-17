package net.minecraft.client.renderer.texture;

import com.mojang.blaze3d.platform.NativeImage;
import com.mojang.blaze3d.platform.TextureUtil;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.logging.LogUtils;
import java.io.IOException;
import java.nio.file.Path;
import javax.annotation.Nullable;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManager;
import org.slf4j.Logger;

public class DynamicTexture extends AbstractTexture implements Dumpable {

    private static final Logger LOGGER = LogUtils.getLogger();

    @Nullable
    private NativeImage pixels;

    public DynamicTexture(NativeImage nativeImage0) {
        this.pixels = nativeImage0;
        if (!RenderSystem.isOnRenderThread()) {
            RenderSystem.recordRenderCall(() -> {
                TextureUtil.prepareImage(this.m_117963_(), this.pixels.getWidth(), this.pixels.getHeight());
                this.upload();
            });
        } else {
            TextureUtil.prepareImage(this.m_117963_(), this.pixels.getWidth(), this.pixels.getHeight());
            this.upload();
        }
    }

    public DynamicTexture(int int0, int int1, boolean boolean2) {
        RenderSystem.assertOnGameThreadOrInit();
        this.pixels = new NativeImage(int0, int1, boolean2);
        TextureUtil.prepareImage(this.m_117963_(), this.pixels.getWidth(), this.pixels.getHeight());
    }

    @Override
    public void load(ResourceManager resourceManager0) {
    }

    public void upload() {
        if (this.pixels != null) {
            this.m_117966_();
            this.pixels.upload(0, 0, 0, false);
        } else {
            LOGGER.warn("Trying to upload disposed texture {}", this.m_117963_());
        }
    }

    @Nullable
    public NativeImage getPixels() {
        return this.pixels;
    }

    public void setPixels(NativeImage nativeImage0) {
        if (this.pixels != null) {
            this.pixels.close();
        }
        this.pixels = nativeImage0;
    }

    @Override
    public void close() {
        if (this.pixels != null) {
            this.pixels.close();
            this.m_117964_();
            this.pixels = null;
        }
    }

    @Override
    public void dumpContents(ResourceLocation resourceLocation0, Path path1) throws IOException {
        if (this.pixels != null) {
            String $$2 = resourceLocation0.toDebugFileName() + ".png";
            Path $$3 = path1.resolve($$2);
            this.pixels.writeToFile($$3);
        }
    }
}