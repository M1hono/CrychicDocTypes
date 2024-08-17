package net.mehvahdjukaar.supplementaries.client.renderers.tiles;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import net.mehvahdjukaar.supplementaries.client.renderers.VertexUtils;
import net.mehvahdjukaar.supplementaries.common.block.tiles.BubbleBlockTile;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.Sheets;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;

public class BubbleBlockTileRenderer implements BlockEntityRenderer<BubbleBlockTile> {

    public BubbleBlockTileRenderer(BlockEntityRendererProvider.Context context) {
    }

    public void render(BubbleBlockTile tile, float partialTicks, PoseStack poseStack, MultiBufferSource buffer, int light, int overlay) {
        poseStack.pushPose();
        poseStack.translate(0.5, 0.5, 0.5);
        float scale = tile.getScale(partialTicks);
        poseStack.scale(scale, scale, scale);
        VertexConsumer cons = buffer.getBuffer(Minecraft.useShaderTransparency() ? Sheets.translucentItemSheet() : Sheets.translucentCullBlockSheet());
        VertexUtils.renderBubble(cons, poseStack, light, tile.m_58899_(), tile.m_58904_(), partialTicks);
        poseStack.popPose();
    }
}