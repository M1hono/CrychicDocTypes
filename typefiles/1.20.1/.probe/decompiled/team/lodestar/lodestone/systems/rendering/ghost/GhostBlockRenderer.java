package team.lodestar.lodestone.systems.rendering.ghost;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.ItemBlockRenderTypes;
import net.minecraft.client.renderer.LevelRenderer;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.block.BlockRenderDispatcher;
import net.minecraft.client.renderer.block.model.BakedQuad;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.util.Mth;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.client.model.data.ModelData;
import team.lodestar.lodestone.handlers.PlacementAssistantHandler;
import team.lodestar.lodestone.handlers.RenderHandler;

public abstract class GhostBlockRenderer {

    public static final GhostBlockRenderer STANDARD = new GhostBlockRenderer.DefaultGhostBlockRenderer();

    public static final GhostBlockRenderer TRANSPARENT = new GhostBlockRenderer.TransparentGhostBlockRenderer();

    public static GhostBlockRenderer standard() {
        return STANDARD;
    }

    public static GhostBlockRenderer transparent() {
        return TRANSPARENT;
    }

    public abstract void render(PoseStack var1, GhostBlockOptions var2);

    private static class DefaultGhostBlockRenderer extends GhostBlockRenderer {

        @Override
        public void render(PoseStack ps, GhostBlockOptions options) {
            ps.pushPose();
            BlockRenderDispatcher dispatch = Minecraft.getInstance().getBlockRenderer();
            BakedModel bakedModel = dispatch.getBlockModel(options.blockState);
            RenderType renderType = ItemBlockRenderTypes.getRenderType(options.blockState, false);
            VertexConsumer consumer = RenderHandler.DELAYED_RENDER.getTarget().getBuffer(renderType);
            BlockPos pos = options.blockPos;
            ps.translate((float) pos.m_123341_(), (float) pos.m_123342_(), (float) pos.m_123343_());
            dispatch.getModelRenderer().renderModel(ps.last(), consumer, options.blockState, bakedModel, 1.0F, 1.0F, 1.0F, 15728880, OverlayTexture.NO_OVERLAY);
            ps.popPose();
        }
    }

    private static class TransparentGhostBlockRenderer extends GhostBlockRenderer {

        @Override
        public void render(PoseStack ps, GhostBlockOptions options) {
            ps.pushPose();
            Minecraft minecraft = Minecraft.getInstance();
            BlockRenderDispatcher dispatch = minecraft.getBlockRenderer();
            BakedModel bakedModel = dispatch.getBlockModel(options.blockState);
            RenderType renderType = RenderType.translucent();
            VertexConsumer consumer = RenderHandler.DELAYED_RENDER.getTarget().getBuffer(renderType);
            BlockPos pos = options.blockPos;
            ps.translate((float) pos.m_123341_(), (float) pos.m_123342_(), (float) pos.m_123343_());
            ps.translate(0.5, 0.5, 0.5);
            ps.scale(0.85F, 0.85F, 0.85F);
            ps.translate(-0.5, -0.5, -0.5);
            float alpha = (Float) options.alphaSupplier.get() * 0.75F * PlacementAssistantHandler.getCurrentAlpha();
            renderModel(ps.last(), consumer, options.blockState, bakedModel, 1.0F, 1.0F, 1.0F, alpha, LevelRenderer.getLightColor(minecraft.level, pos), OverlayTexture.NO_OVERLAY, ModelData.EMPTY, minecraft.level.m_213780_(), renderType);
            ps.popPose();
        }

        public static void renderModel(PoseStack.Pose pose, VertexConsumer consumer, BlockState state, BakedModel model, float red, float green, float blue, float alpha, int packedLight, int packedOverlay, ModelData extraData, RandomSource random, RenderType renderType) {
            for (Direction direction : Direction.values()) {
                random.setSeed(42L);
                renderQuadList(pose, consumer, red, green, blue, alpha, model.getQuads(state, direction, random, extraData, renderType), packedLight, packedOverlay);
            }
            random.setSeed(42L);
            renderQuadList(pose, consumer, red, green, blue, alpha, model.getQuads(state, null, random, extraData, renderType), packedLight, packedOverlay);
        }

        private static void renderQuadList(PoseStack.Pose pose, VertexConsumer consumer, float red, float green, float blue, float alpha, List<BakedQuad> quads, int packedLight, int packedOverlay) {
            for (BakedQuad quad : quads) {
                float r;
                float g;
                float b;
                if (quad.isTinted()) {
                    r = Mth.clamp(red, 0.0F, 1.0F);
                    g = Mth.clamp(green, 0.0F, 1.0F);
                    b = Mth.clamp(blue, 0.0F, 1.0F);
                } else {
                    r = 1.0F;
                    g = 1.0F;
                    b = 1.0F;
                }
                consumer.putBulkData(pose, quad, r, g, b, alpha, packedLight, packedOverlay, true);
            }
        }
    }
}