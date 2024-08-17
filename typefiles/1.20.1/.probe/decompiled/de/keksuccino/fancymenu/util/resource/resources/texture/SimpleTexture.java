package de.keksuccino.fancymenu.util.resource.resources.texture;

import com.mojang.blaze3d.platform.NativeImage;
import de.keksuccino.fancymenu.util.CloseableUtils;
import de.keksuccino.fancymenu.util.WebUtils;
import de.keksuccino.fancymenu.util.input.TextValidators;
import de.keksuccino.fancymenu.util.rendering.AspectRatio;
import de.keksuccino.fancymenu.util.resource.ResourceSource;
import de.keksuccino.fancymenu.util.resource.ResourceSourceType;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.threading.MainThreadTaskExecutor;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;
import java.util.Optional;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.texture.DynamicTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.Resource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class SimpleTexture implements ITexture {

    private static final Logger LOGGER = LogManager.getLogger();

    public static final ResourceSupplier<ITexture> FULLY_TRANSPARENT_SIMPLE_TEXTURE_SUPPLIER = ResourceSupplier.image(ResourceSource.of(FULLY_TRANSPARENT_TEXTURE.toString(), ResourceSourceType.LOCATION).getSourceWithPrefix());

    @Nullable
    protected ResourceLocation resourceLocation;

    protected volatile int width = 10;

    protected volatile int height = 10;

    protected volatile AspectRatio aspectRatio = new AspectRatio(10, 10);

    protected volatile boolean decoded = false;

    protected volatile boolean loadedIntoMinecraft = false;

    protected volatile NativeImage nativeImage;

    protected DynamicTexture dynamicTexture;

    protected ResourceLocation sourceLocation;

    protected File sourceFile;

    protected String sourceURL;

    protected volatile boolean loadingCompleted = false;

    protected volatile boolean loadingFailed = false;

    protected volatile boolean closed = false;

    @NotNull
    public static SimpleTexture location(@NotNull ResourceLocation location) {
        return location(location, null);
    }

    @NotNull
    public static SimpleTexture location(@NotNull ResourceLocation location, @Nullable SimpleTexture writeTo) {
        Objects.requireNonNull(location);
        SimpleTexture texture = writeTo != null ? writeTo : new SimpleTexture();
        texture.sourceLocation = location;
        try {
            Optional<Resource> resource = Minecraft.getInstance().getResourceManager().m_213713_(location);
            if (resource.isPresent()) {
                NativeImage image = NativeImage.read(((Resource) resource.get()).open());
                texture.width = image.getWidth();
                texture.height = image.getHeight();
                texture.aspectRatio = new AspectRatio(texture.width, texture.height);
                CloseableUtils.closeQuietly(image);
            } else {
                texture.loadingFailed = true;
                LOGGER.error("[FANCYMENU] Failed to read texture from ResourceLocation! Resource not present: " + location, new IOException());
            }
        } catch (Exception var5) {
            texture.loadingFailed = true;
            LOGGER.error("[FANCYMENU] Failed to read texture from ResourceLocation: " + location, var5);
        }
        texture.loadedIntoMinecraft = true;
        texture.loadingCompleted = true;
        texture.decoded = true;
        texture.resourceLocation = location;
        return texture;
    }

    @NotNull
    public static SimpleTexture local(@NotNull File textureFile) {
        return local(textureFile, null);
    }

    @NotNull
    public static SimpleTexture local(@NotNull File textureFile, @Nullable SimpleTexture writeTo) {
        Objects.requireNonNull(textureFile);
        SimpleTexture texture = writeTo != null ? writeTo : new SimpleTexture();
        texture.sourceFile = textureFile;
        if (!textureFile.isFile()) {
            texture.loadingFailed = true;
            LOGGER.error("[FANCYMENU] Failed to read texture from file! File not found: " + textureFile.getPath());
            return texture;
        } else {
            try {
                InputStream in = new FileInputStream(textureFile);
                of(in, textureFile.getPath(), texture);
            } catch (Exception var4) {
                texture.loadingFailed = true;
                LOGGER.error("[FANCYMENU] Failed to read texture from file: " + textureFile.getPath(), var4);
            }
            return texture;
        }
    }

    @NotNull
    public static SimpleTexture web(@NotNull String textureURL) {
        return web(textureURL, null);
    }

    @NotNull
    public static SimpleTexture web(@NotNull String textureURL, @Nullable SimpleTexture writeTo) {
        Objects.requireNonNull(textureURL);
        SimpleTexture texture = writeTo != null ? writeTo : new SimpleTexture();
        texture.sourceURL = textureURL;
        if (!TextValidators.BASIC_URL_TEXT_VALIDATOR.get(textureURL)) {
            texture.loadingFailed = true;
            LOGGER.error("[FANCYMENU] Failed to read texture from URL! Invalid URL: " + textureURL);
            return texture;
        } else {
            new Thread(() -> {
                try {
                    InputStream in = WebUtils.openResourceStream(textureURL);
                    if (in == null) {
                        throw new NullPointerException("Web resource input stream was NULL!");
                    }
                    of(in, textureURL, texture);
                } catch (Exception var3) {
                    texture.loadingFailed = true;
                    LOGGER.error("[FANCYMENU] Failed to read texture from URL: " + textureURL, var3);
                }
            }).start();
            return texture;
        }
    }

    @NotNull
    public static SimpleTexture of(@NotNull InputStream in, @Nullable String textureName, @Nullable SimpleTexture writeTo) {
        Objects.requireNonNull(in);
        SimpleTexture texture = writeTo != null ? writeTo : new SimpleTexture();
        new Thread(() -> {
            populateTexture(texture, in, textureName != null ? textureName : "[Generic InputStream Source]");
            if (texture.closed) {
                MainThreadTaskExecutor.executeInMainThread(texture::close, MainThreadTaskExecutor.ExecuteTiming.PRE_CLIENT_TICK);
            }
        }).start();
        return texture;
    }

    @NotNull
    public static SimpleTexture of(@NotNull InputStream in) {
        return of(in, null, null);
    }

    @NotNull
    public static SimpleTexture of(@NotNull NativeImage nativeImage) {
        Objects.requireNonNull(nativeImage);
        SimpleTexture texture = new SimpleTexture();
        texture.nativeImage = nativeImage;
        texture.width = nativeImage.getWidth();
        texture.height = nativeImage.getHeight();
        texture.aspectRatio = new AspectRatio(nativeImage.getWidth(), nativeImage.getHeight());
        texture.decoded = true;
        texture.loadingCompleted = true;
        return texture;
    }

    protected SimpleTexture() {
    }

    protected static void populateTexture(@NotNull SimpleTexture texture, @NotNull InputStream in, @NotNull String textureName) {
        if (!texture.closed) {
            try {
                texture.nativeImage = NativeImage.read(in);
                if (texture.nativeImage != null) {
                    texture.width = texture.nativeImage.getWidth();
                    texture.height = texture.nativeImage.getHeight();
                    texture.aspectRatio = new AspectRatio(texture.width, texture.height);
                    texture.loadingCompleted = true;
                } else {
                    texture.loadingFailed = true;
                    LOGGER.error("[FANCYMENU] Failed to read texture, NativeImage was NULL: " + textureName);
                }
            } catch (Exception var4) {
                texture.loadingFailed = true;
                LOGGER.error("[FANCYMENU] Failed to load texture: " + textureName, var4);
            }
        }
        texture.decoded = true;
        CloseableUtils.closeQuietly(in);
    }

    @Nullable
    @Override
    public ResourceLocation getResourceLocation() {
        if (this.closed) {
            return FULLY_TRANSPARENT_TEXTURE;
        } else {
            if (this.resourceLocation == null && !this.loadedIntoMinecraft && this.nativeImage != null) {
                try {
                    this.dynamicTexture = new DynamicTexture(this.nativeImage);
                    this.resourceLocation = Minecraft.getInstance().getTextureManager().register("fancymenu_simple_texture", this.dynamicTexture);
                } catch (Exception var2) {
                    var2.printStackTrace();
                }
                this.loadedIntoMinecraft = true;
            }
            return this.resourceLocation;
        }
    }

    @Override
    public int getWidth() {
        return this.width;
    }

    @Override
    public int getHeight() {
        return this.height;
    }

    @NotNull
    @Override
    public AspectRatio getAspectRatio() {
        return this.aspectRatio;
    }

    @Nullable
    @Override
    public InputStream open() throws IOException {
        return this.nativeImage != null ? new ByteArrayInputStream(this.nativeImage.asByteArray()) : null;
    }

    @Override
    public boolean isReady() {
        return this.decoded;
    }

    @Override
    public boolean isLoadingCompleted() {
        return !this.closed && !this.loadingFailed && this.loadingCompleted;
    }

    @Override
    public boolean isLoadingFailed() {
        return this.loadingFailed;
    }

    @Override
    public void reset() {
    }

    @Override
    public boolean isClosed() {
        return this.closed;
    }

    public void close() {
        this.closed = true;
        try {
            if (this.dynamicTexture != null) {
                this.dynamicTexture.close();
            }
        } catch (Exception var3) {
            var3.printStackTrace();
        }
        try {
            if (this.nativeImage != null) {
                this.nativeImage.close();
            }
        } catch (Exception var2) {
            var2.printStackTrace();
        }
        this.dynamicTexture = null;
        this.nativeImage = null;
        this.resourceLocation = null;
        this.decoded = false;
        this.loadedIntoMinecraft = true;
    }
}