package io.redspace.ironsspellbooks.entity.spells.poison_arrow;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.math.Axis;
import io.redspace.ironsspellbooks.IronsSpellbooks;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.phys.Vec3;
import org.joml.Matrix3f;
import org.joml.Matrix4f;

public class PoisonArrowRenderer extends EntityRenderer<PoisonArrow> {

    private static final ResourceLocation TEXTURE = IronsSpellbooks.id("textures/entity/arrow.png");

    public PoisonArrowRenderer(EntityRendererProvider.Context context) {
        super(context);
    }

    public void render(PoisonArrow entity, float yaw, float partialTicks, PoseStack poseStack, MultiBufferSource bufferSource, int light) {
        poseStack.pushPose();
        Vec3 motion = entity.m_20184_();
        float xRot = -((float) (Mth.atan2(motion.horizontalDistance(), motion.y) * 180.0F / (float) Math.PI) - 90.0F);
        float yRot = -((float) (Mth.atan2(motion.z, motion.x) * 180.0F / (float) Math.PI) + 90.0F);
        poseStack.mulPose(Axis.YP.rotationDegrees(yRot));
        poseStack.mulPose(Axis.XP.rotationDegrees(xRot));
        float f9 = (float) entity.shakeTime - partialTicks;
        if (f9 > 0.0F) {
            float f10 = -Mth.sin(f9 * 3.0F) * f9;
            poseStack.mulPose(Axis.XP.rotationDegrees(f10));
        }
        renderModel(poseStack, bufferSource, light);
        poseStack.popPose();
        super.render(entity, yaw, partialTicks, poseStack, bufferSource, light);
    }

    public static void renderModel(PoseStack poseStack, MultiBufferSource bufferSource, int light) {
        poseStack.scale(0.125F, 0.125F, 0.125F);
        PoseStack.Pose pose = poseStack.last();
        Matrix4f poseMatrix = pose.pose();
        Matrix3f normalMatrix = pose.normal();
        VertexConsumer consumer = bufferSource.getBuffer(RenderType.entityCutout(getTextureLocation()));
        poseStack.mulPose(Axis.YP.rotationDegrees(90.0F));
        poseStack.translate(-2.0F, 0.0F, 0.0F);
        for (int j = 0; j < 4; j++) {
            poseStack.mulPose(Axis.XP.rotationDegrees(90.0F));
            vertex(poseMatrix, normalMatrix, consumer, -8, -2, 0, 0.0F, 0.0F, 0, 1, 0, light);
            vertex(poseMatrix, normalMatrix, consumer, 8, -2, 0, 0.5F, 0.0F, 0, 1, 0, light);
            vertex(poseMatrix, normalMatrix, consumer, 8, 2, 0, 0.5F, 0.15625F, 0, 1, 0, light);
            vertex(poseMatrix, normalMatrix, consumer, -8, 2, 0, 0.0F, 0.15625F, 0, 1, 0, light);
        }
    }

    public static void vertex(Matrix4f pMatrix, Matrix3f pNormals, VertexConsumer pVertexBuilder, int pOffsetX, int pOffsetY, int pOffsetZ, float pTextureX, float pTextureY, int pNormalX, int int0, int int1, int pPackedLight) {
        pVertexBuilder.vertex(pMatrix, (float) pOffsetX, (float) pOffsetY, (float) pOffsetZ).color(255, 255, 255, 255).uv(pTextureX, pTextureY).overlayCoords(OverlayTexture.NO_OVERLAY).uv2(pPackedLight).normal(pNormals, (float) pNormalX, (float) int1, (float) int0).endVertex();
    }

    public ResourceLocation getTextureLocation(PoisonArrow entity) {
        return getTextureLocation();
    }

    public static ResourceLocation getTextureLocation() {
        return TEXTURE;
    }
}