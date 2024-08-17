package net.mehvahdjukaar.amendments.client.renderers;

import com.mojang.blaze3d.vertex.PoseStack;
import net.mehvahdjukaar.amendments.common.tile.DoubleSkullBlockTile;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.SkullBlock;
import net.minecraft.world.level.block.entity.BlockEntity;

public class DoubleSkullBlockTileRenderer extends SkullWithWaxTileRenderer<DoubleSkullBlockTile> {

    public DoubleSkullBlockTileRenderer(BlockEntityRendererProvider.Context context) {
        super(context);
    }

    public void render(DoubleSkullBlockTile tile, float pPartialTicks, PoseStack poseStack, MultiBufferSource buffer, int pCombinedLight, int pCombinedOverlay) {
        super.render(tile, pPartialTicks, poseStack, buffer, pCombinedLight, pCombinedOverlay);
        BlockEntity upSkull = tile.getSkullTileUp();
        if (upSkull != null) {
            float yawUp = -22.5F * (float) ((Integer) upSkull.getBlockState().m_61143_(SkullBlock.ROTATION)).intValue();
            poseStack.translate(0.0, 0.5, 0.0);
            this.renderInner(upSkull, pPartialTicks, poseStack, buffer, pCombinedLight, pCombinedOverlay);
            ResourceLocation texture = tile.getWaxTexture();
            if (texture != null) {
                this.renderWax(poseStack, buffer, pCombinedLight, texture, yawUp);
            }
        }
    }
}