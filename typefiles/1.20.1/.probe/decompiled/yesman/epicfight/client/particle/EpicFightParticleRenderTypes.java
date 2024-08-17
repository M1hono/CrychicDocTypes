package yesman.epicfight.client.particle;

import com.mojang.blaze3d.platform.GlStateManager;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.BufferBuilder;
import com.mojang.blaze3d.vertex.DefaultVertexFormat;
import com.mojang.blaze3d.vertex.Tesselator;
import com.mojang.blaze3d.vertex.VertexFormat;
import com.mojang.blaze3d.vertex.VertexSorting;
import net.minecraft.client.Minecraft;
import net.minecraft.client.particle.ParticleRenderType;
import net.minecraft.client.renderer.GameRenderer;
import net.minecraft.client.renderer.texture.TextureAtlas;
import net.minecraft.client.renderer.texture.TextureManager;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

@OnlyIn(Dist.CLIENT)
public class EpicFightParticleRenderTypes {

    public static final ParticleRenderType BLEND_LIGHTMAP_PARTICLE = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.enableBlend();
            RenderSystem.blendFunc(770, 771);
            RenderSystem.depthMask(false);
            RenderSystem.setShader(GameRenderer::m_172829_);
            RenderSystem.setShaderTexture(0, TextureAtlas.LOCATION_PARTICLES);
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOnLightLayer();
            bufferBuilder.begin(VertexFormat.Mode.QUADS, DefaultVertexFormat.PARTICLE);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.end();
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOffLightLayer();
        }

        public String toString() {
            return "BLEND_LIGHTMAP_PARTICLE";
        }
    };

    public static final ParticleRenderType PARTICLE_MODEL_NO_NORMAL = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.disableCull();
            RenderSystem.blendFunc(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE_MINUS_SRC_ALPHA);
            RenderSystem.enableBlend();
            RenderSystem.depthMask(true);
            RenderSystem.setShader(GameRenderer::m_172835_);
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.overlayTexture().setupOverlayColor();
            mc.gameRenderer.lightTexture().turnOnLightLayer();
            bufferBuilder.begin(VertexFormat.Mode.TRIANGLES, DefaultVertexFormat.POSITION_COLOR_TEX_LIGHTMAP);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.getBuilder().setQuadSorting(VertexSorting.DISTANCE_TO_ORIGIN);
            tesselator.end();
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.overlayTexture().teardownOverlayColor();
            mc.gameRenderer.lightTexture().turnOffLightLayer();
        }

        public String toString() {
            return "PARTICLE_MODEL_NO_NORMAL";
        }
    };

    public static final ParticleRenderType LIGHTNING = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.enableBlend();
            RenderSystem.disableCull();
            RenderSystem.blendFunc(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE);
            RenderSystem.colorMask(true, true, true, true);
            RenderSystem.depthMask(false);
            RenderSystem.setShader(GameRenderer::m_172753_);
            bufferBuilder.begin(VertexFormat.Mode.QUADS, DefaultVertexFormat.POSITION_COLOR);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.end();
            RenderSystem.depthMask(true);
            RenderSystem.disableBlend();
            RenderSystem.defaultBlendFunc();
            RenderSystem.enableCull();
        }

        public String toString() {
            return "LIGHTING";
        }
    };

    public static final ParticleRenderType TRAIL = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.enableBlend();
            RenderSystem.disableCull();
            Minecraft.getInstance().gameRenderer.lightTexture().turnOnLightLayer();
            RenderSystem.blendFunc(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE_MINUS_SRC_ALPHA);
            RenderSystem.enableDepthTest();
            RenderSystem.depthMask(true);
            RenderSystem.setShader(GameRenderer::m_172829_);
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOnLightLayer();
            bufferBuilder.begin(VertexFormat.Mode.QUADS, DefaultVertexFormat.PARTICLE);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.getBuilder().setQuadSorting(VertexSorting.DISTANCE_TO_ORIGIN);
            tesselator.end();
            RenderSystem.disableBlend();
            RenderSystem.defaultBlendFunc();
            RenderSystem.enableCull();
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOffLightLayer();
        }

        public String toString() {
            return "EPICFIGHT:TRAIL";
        }
    };

    public static final ParticleRenderType TRANSLUCENT_GLOWING = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.enableBlend();
            RenderSystem.disableCull();
            RenderSystem.blendFunc(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE_MINUS_SRC_ALPHA);
            RenderSystem.enableDepthTest();
            RenderSystem.depthMask(true);
            RenderSystem.setShader(GameRenderer::m_172811_);
            bufferBuilder.begin(VertexFormat.Mode.TRIANGLES, DefaultVertexFormat.POSITION_COLOR);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.getBuilder().setQuadSorting(VertexSorting.DISTANCE_TO_ORIGIN);
            tesselator.end();
            RenderSystem.disableBlend();
            RenderSystem.defaultBlendFunc();
            RenderSystem.enableCull();
        }

        public String toString() {
            return "EPICFIGHT:TRANSLUCENT_GLOWING";
        }
    };

    public static final ParticleRenderType TRANSLUCENT = new ParticleRenderType() {

        @Override
        public void begin(BufferBuilder bufferBuilder, TextureManager textureManager) {
            RenderSystem.enableBlend();
            RenderSystem.disableCull();
            RenderSystem.blendFunc(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE_MINUS_SRC_ALPHA);
            RenderSystem.enableDepthTest();
            RenderSystem.setShader(GameRenderer::m_172832_);
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOnLightLayer();
            bufferBuilder.begin(VertexFormat.Mode.TRIANGLES, DefaultVertexFormat.POSITION_COLOR_LIGHTMAP);
        }

        @Override
        public void end(Tesselator tesselator) {
            tesselator.getBuilder().setQuadSorting(VertexSorting.DISTANCE_TO_ORIGIN);
            tesselator.end();
            RenderSystem.disableBlend();
            RenderSystem.defaultBlendFunc();
            RenderSystem.enableCull();
            Minecraft mc = Minecraft.getInstance();
            mc.gameRenderer.lightTexture().turnOffLightLayer();
        }

        public String toString() {
            return "EPICFIGHT:TRANSLUCENT";
        }
    };
}