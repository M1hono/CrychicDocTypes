package com.github.alexthe666.iceandfire.client.render.tile;

import com.github.alexthe666.iceandfire.client.render.IafRenderType;
import com.github.alexthe666.iceandfire.entity.tile.TileEntityDreadPortal;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.core.Direction;
import net.minecraft.resources.ResourceLocation;
import org.jetbrains.annotations.NotNull;
import org.joml.Matrix4f;

public class RenderDreadPortal<T extends TileEntityDreadPortal> implements BlockEntityRenderer<T> {

    public static final ResourceLocation DREAD_PORTAL_BACKGROUND = new ResourceLocation("iceandfire:textures/environment/dread_portal_background.png");

    public static final ResourceLocation DREAD_PORTAL = new ResourceLocation("iceandfire:textures/environment/dread_portal.png");

    public RenderDreadPortal(BlockEntityRendererProvider.Context context) {
    }

    public void render(@NotNull T tileEntityIn, float partialTicks, PoseStack matrixStackIn, MultiBufferSource bufferIn, int combinedLightIn, int combinedOverlayIn) {
        Matrix4f matrix4f = matrixStackIn.last().pose();
        this.renderCube(tileEntityIn, matrix4f, bufferIn.getBuffer(this.renderType()));
    }

    private void renderCube(T tileEntityIn, Matrix4f matrix4f, VertexConsumer consumer) {
        float f = 1.0F;
        float f1 = 1.0F;
        this.renderFace(tileEntityIn, matrix4f, consumer, 0.0F, 1.0F, 0.0F, 1.0F, 1.0F, 1.0F, 1.0F, 1.0F, Direction.SOUTH);
        this.renderFace(tileEntityIn, matrix4f, consumer, 0.0F, 1.0F, 1.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, Direction.NORTH);
        this.renderFace(tileEntityIn, matrix4f, consumer, 1.0F, 1.0F, 1.0F, 0.0F, 0.0F, 1.0F, 1.0F, 0.0F, Direction.EAST);
        this.renderFace(tileEntityIn, matrix4f, consumer, 0.0F, 0.0F, 0.0F, 1.0F, 0.0F, 1.0F, 1.0F, 0.0F, Direction.WEST);
        this.renderFace(tileEntityIn, matrix4f, consumer, 0.0F, 1.0F, f, f, 0.0F, 0.0F, 1.0F, 1.0F, Direction.DOWN);
        this.renderFace(tileEntityIn, matrix4f, consumer, 0.0F, 1.0F, f1, f1, 1.0F, 1.0F, 0.0F, 0.0F, Direction.UP);
    }

    private void renderFace(T t0, Matrix4f matrixF1, VertexConsumer vertexConsumer2, float float3, float float4, float float5, float float6, float float7, float float8, float float9, float float10, Direction direction11) {
        float r = 1.0F;
        float g = 1.0F;
        float b = 1.0F;
        if (t0.shouldRenderFace(direction11)) {
            vertexConsumer2.vertex(matrixF1, float3, float5, float7).color(r, g, b, 1.0F).endVertex();
            vertexConsumer2.vertex(matrixF1, float4, float5, float8).color(r, g, b, 1.0F).endVertex();
            vertexConsumer2.vertex(matrixF1, float4, float6, float9).color(r, g, b, 1.0F).endVertex();
            vertexConsumer2.vertex(matrixF1, float3, float6, float10).color(r, g, b, 1.0F).endVertex();
        }
    }

    protected RenderType renderType() {
        return IafRenderType.getDreadlandsPortal();
    }
}