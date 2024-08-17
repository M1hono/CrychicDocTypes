package de.keksuccino.fancymenu.customization.panorama;

import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.BufferBuilder;
import com.mojang.blaze3d.vertex.DefaultVertexFormat;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.Tesselator;
import com.mojang.blaze3d.vertex.VertexFormat;
import com.mojang.blaze3d.vertex.VertexSorting;
import com.mojang.math.Axis;
import de.keksuccino.fancymenu.util.ScreenUtils;
import de.keksuccino.fancymenu.util.properties.PropertiesParser;
import de.keksuccino.fancymenu.util.properties.PropertyContainer;
import de.keksuccino.fancymenu.util.properties.PropertyContainerSet;
import de.keksuccino.fancymenu.util.rendering.RenderingUtils;
import de.keksuccino.fancymenu.util.resource.ResourceSource;
import de.keksuccino.fancymenu.util.resource.ResourceSourceType;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.resource.resources.texture.ITexture;
import de.keksuccino.konkrete.math.MathUtils;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Renderable;
import net.minecraft.client.renderer.GameRenderer;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.joml.Matrix4f;

public class LocalTexturePanoramaRenderer implements Renderable {

    private static final Logger LOGGER = LogManager.getLogger();

    @NotNull
    public File propertiesFile;

    @NotNull
    public File panoramaImageDir;

    @Nullable
    public File overlayImageFile;

    protected String name = null;

    public final List<ResourceSupplier<ITexture>> panoramaImageSuppliers = new ArrayList();

    @Nullable
    public ResourceSupplier<ITexture> overlayTextureSupplier;

    protected float speed = 1.0F;

    protected double fov = 85.0;

    protected float angle = 25.0F;

    public float opacity = 1.0F;

    protected volatile boolean tickerThreadRunning = false;

    protected volatile float currentRotation = 0.0F;

    protected volatile long lastRenderCall = -1L;

    @Nullable
    public static LocalTexturePanoramaRenderer build(@NotNull File propertiesFile, @NotNull File panoramaImageDir, @Nullable File overlayImageFile) {
        LocalTexturePanoramaRenderer renderer = new LocalTexturePanoramaRenderer(propertiesFile, panoramaImageDir, overlayImageFile);
        try {
            if (renderer.propertiesFile.isFile() && renderer.panoramaImageDir.isDirectory()) {
                PropertyContainerSet panoProperties = PropertiesParser.deserializeSetFromFile(renderer.propertiesFile.getAbsolutePath());
                if (panoProperties != null) {
                    PropertyContainer panoMeta = panoProperties.getFirstContainerOfType("panorama-meta");
                    if (panoMeta != null) {
                        renderer.name = panoMeta.getValue("name");
                        if (renderer.name == null) {
                            LOGGER.error("[FANCYMENU] Unable to load panorama! Missing 'name' value in panorama meta section: " + renderer.propertiesFile.getAbsolutePath(), new NullPointerException());
                            return null;
                        }
                        String sp = panoMeta.getValue("speed");
                        if (sp != null && MathUtils.isFloat(sp)) {
                            renderer.speed = Float.parseFloat(sp);
                        }
                        String fo = panoMeta.getValue("fov");
                        if (fo != null && MathUtils.isDouble(fo)) {
                            renderer.fov = Double.parseDouble(fo);
                        }
                        String an = panoMeta.getValue("angle");
                        if (an != null && MathUtils.isFloat(an)) {
                            renderer.angle = Float.parseFloat(an);
                        }
                        String rot = panoMeta.getValue("start_rotation");
                        if (rot != null && MathUtils.isFloat(rot)) {
                            renderer.currentRotation = Float.parseFloat(rot);
                            if (renderer.currentRotation > 360.0F || renderer.currentRotation < 0.0F) {
                                renderer.currentRotation = 0.0F;
                            }
                        }
                        renderer.prepare();
                        return renderer;
                    }
                    LOGGER.error("[FANCYMENU] Unable to load panorama! Missing 'panorama-meta' section in properties instance: " + renderer.propertiesFile.getAbsolutePath(), new NullPointerException());
                } else {
                    LOGGER.error("[FANCYMENU] Unable to load panorama! Parsed properties instance was NULL: " + renderer.propertiesFile.getAbsolutePath(), new NullPointerException());
                }
            }
        } catch (Exception var10) {
            LOGGER.error("[FANCYMENU] An error happened while trying to build a cubic panorama!", var10);
        }
        return null;
    }

    protected LocalTexturePanoramaRenderer(@NotNull File propertiesFile, @NotNull File panoramaImageDir, @Nullable File overlayImageFile) {
        this.propertiesFile = (File) Objects.requireNonNull(propertiesFile);
        this.panoramaImageDir = (File) Objects.requireNonNull(panoramaImageDir);
        this.overlayImageFile = overlayImageFile;
    }

    protected void prepare() {
        this.panoramaImageSuppliers.clear();
        this.overlayTextureSupplier = null;
        for (int i = 0; i < 6; i++) {
            File panoImage = new File(this.panoramaImageDir, "panorama_" + i + ".png");
            if (!panoImage.isFile()) {
                LOGGER.error("[FANCYMENU] Unable to load panorama! Missing panorama image 'panorama_" + i + ".png': " + this.name);
                return;
            }
            this.panoramaImageSuppliers.add(ResourceSupplier.image(ResourceSource.of(panoImage.getAbsolutePath(), ResourceSourceType.LOCAL).getSourceWithPrefix()));
        }
        if (this.overlayImageFile != null && this.overlayImageFile.isFile()) {
            this.panoramaImageSuppliers.add(ResourceSupplier.image(ResourceSource.of(this.overlayImageFile.getAbsolutePath(), ResourceSourceType.LOCAL).getSourceWithPrefix()));
        }
    }

    protected void startTickerThreadIfNeeded() {
        if (!this.tickerThreadRunning) {
            this.lastRenderCall = System.currentTimeMillis();
            this.tickerThreadRunning = true;
            new Thread(() -> {
                while (this.lastRenderCall + 5000L > System.currentTimeMillis()) {
                    try {
                        this.currentRotation += 0.03F;
                        if (this.currentRotation >= 360.0F) {
                            this.currentRotation = 0.0F;
                        }
                    } catch (Exception var3) {
                        LOGGER.error("[FANCYMENU] Error while ticking panorama!", var3);
                    }
                    try {
                        Thread.sleep((long) Math.max(2, (int) (20.0F / this.speed)));
                    } catch (Exception var2) {
                        LOGGER.error("[FANCYMENU] Error while ticking panorama!", var2);
                    }
                }
                this.tickerThreadRunning = false;
            }, "FancyMenu Panorama Ticker Thread").start();
        }
    }

    @Override
    public void render(@NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        this.lastRenderCall = System.currentTimeMillis();
        this.startTickerThreadIfNeeded();
        if (this.panoramaImageSuppliers.size() < 6) {
            RenderSystem.enableBlend();
            RenderingUtils.resetShaderColor(graphics);
            graphics.blit(ITexture.MISSING_TEXTURE_LOCATION, 0, 0, 0.0F, 0.0F, ScreenUtils.getScreenWidth(), ScreenUtils.getScreenHeight(), ScreenUtils.getScreenWidth(), ScreenUtils.getScreenHeight());
            RenderingUtils.resetShaderColor(graphics);
        } else {
            this.renderRaw(graphics, this.opacity, partial);
        }
    }

    public void renderRaw(@NotNull GuiGraphics graphics, float panoramaAlpha, float partial) {
        Minecraft mc = Minecraft.getInstance();
        int screenW = ScreenUtils.getScreenWidth();
        int screenH = ScreenUtils.getScreenHeight();
        float pitch = this.angle;
        float yaw = -this.currentRotation;
        float fovF = (float) this.fov * (float) (Math.PI / 180.0);
        graphics.pose().pushPose();
        RenderingUtils.resetShaderColor(graphics);
        Tesselator tesselator = Tesselator.getInstance();
        BufferBuilder bufferBuilder = tesselator.getBuilder();
        Matrix4f matrix4f = new Matrix4f().setPerspective(fovF, (float) mc.getWindow().getWidth() / (float) mc.getWindow().getHeight(), 0.05F, 10.0F);
        RenderSystem.backupProjectionMatrix();
        RenderSystem.setProjectionMatrix(matrix4f, VertexSorting.DISTANCE_TO_ORIGIN);
        PoseStack modelViewStack = RenderSystem.getModelViewStack();
        modelViewStack.pushPose();
        modelViewStack.setIdentity();
        modelViewStack.mulPose(Axis.XP.rotationDegrees(180.0F));
        RenderSystem.applyModelViewMatrix();
        RenderSystem.setShader(GameRenderer::m_172820_);
        graphics.setColor(1.0F, 1.0F, 1.0F, this.opacity);
        RenderSystem.enableBlend();
        RenderSystem.disableCull();
        RenderSystem.depthMask(false);
        for (int j = 0; j < 4; j++) {
            modelViewStack.pushPose();
            float k = ((float) (j % 2) / 2.0F - 0.5F) / 256.0F;
            float l = ((float) (j / 2) / 2.0F - 0.5F) / 256.0F;
            modelViewStack.translate(k, l, 0.0F);
            modelViewStack.mulPose(Axis.XP.rotationDegrees(pitch));
            modelViewStack.mulPose(Axis.YP.rotationDegrees(yaw));
            RenderSystem.applyModelViewMatrix();
            for (int n = 0; n < 6; n++) {
                ResourceLocation location = null;
                if (this.panoramaImageSuppliers.size() >= n + 1) {
                    ResourceSupplier<ITexture> texSupplier = (ResourceSupplier<ITexture>) this.panoramaImageSuppliers.get(n);
                    ITexture texture = texSupplier.get();
                    if (texture != null) {
                        location = texture.getResourceLocation();
                    }
                }
                if (location == null) {
                    location = ITexture.MISSING_TEXTURE_LOCATION;
                }
                RenderSystem.setShaderTexture(0, location);
                bufferBuilder.begin(VertexFormat.Mode.QUADS, DefaultVertexFormat.POSITION_TEX_COLOR);
                int o = Math.round(255.0F * panoramaAlpha) / (j + 1);
                if (n == 0) {
                    bufferBuilder.m_5483_(-1.0, -1.0, 1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, 1.0, 1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, 1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, -1.0, 1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                if (n == 1) {
                    bufferBuilder.m_5483_(1.0, -1.0, 1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, 1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, -1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, -1.0, -1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                if (n == 2) {
                    bufferBuilder.m_5483_(1.0, -1.0, -1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, -1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, 1.0, -1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, -1.0, -1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                if (n == 3) {
                    bufferBuilder.m_5483_(-1.0, -1.0, -1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, 1.0, -1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, 1.0, 1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, -1.0, 1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                if (n == 4) {
                    bufferBuilder.m_5483_(-1.0, -1.0, -1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, -1.0, 1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, -1.0, 1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, -1.0, -1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                if (n == 5) {
                    bufferBuilder.m_5483_(-1.0, 1.0, 1.0).uv(0.0F, 0.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(-1.0, 1.0, -1.0).uv(0.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, -1.0).uv(1.0F, 1.0F).color(255, 255, 255, o).endVertex();
                    bufferBuilder.m_5483_(1.0, 1.0, 1.0).uv(1.0F, 0.0F).color(255, 255, 255, o).endVertex();
                }
                tesselator.end();
            }
            modelViewStack.popPose();
            RenderSystem.applyModelViewMatrix();
            RenderSystem.colorMask(true, true, true, false);
        }
        RenderSystem.colorMask(true, true, true, true);
        RenderSystem.restoreProjectionMatrix();
        modelViewStack.popPose();
        RenderSystem.applyModelViewMatrix();
        RenderSystem.depthMask(true);
        RenderSystem.enableCull();
        RenderSystem.enableDepthTest();
        graphics.pose().popPose();
        RenderSystem.defaultBlendFunc();
        if (this.overlayTextureSupplier != null) {
            ITexture texture = this.overlayTextureSupplier.get();
            if (texture != null) {
                ResourceLocation locationx = texture.getResourceLocation();
                if (locationx != null) {
                    graphics.setColor(1.0F, 1.0F, 1.0F, this.opacity);
                    RenderSystem.enableBlend();
                    graphics.blit(locationx, 0, 0, 0.0F, 0.0F, screenW, screenH, screenW, screenH);
                }
            }
        }
        RenderingUtils.resetShaderColor(graphics);
    }

    public String getName() {
        return this.name;
    }

    public void setSpeed(float speed) {
        if (speed < 0.0F) {
            speed = 0.0F;
        }
        this.speed = speed;
    }

    public void setFov(double fov) {
        if (fov > 179.0) {
            fov = 179.0;
        }
        this.fov = fov;
    }

    public void setAngle(float angle) {
        this.angle = angle;
    }
}