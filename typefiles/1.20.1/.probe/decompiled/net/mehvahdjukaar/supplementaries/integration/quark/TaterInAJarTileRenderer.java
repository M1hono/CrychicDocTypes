package net.mehvahdjukaar.supplementaries.integration.quark;

import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import org.violetmoon.quark.addons.oddities.block.be.TinyPotatoBlockEntity;
import org.violetmoon.quark.addons.oddities.client.render.be.TinyPotatoRenderer;

public class TaterInAJarTileRenderer extends TinyPotatoRenderer {

    public TaterInAJarTileRenderer(BlockEntityRendererProvider.Context ctx) {
        super(ctx);
    }

    @Override
    public void render(TinyPotatoBlockEntity potato, float partialTicks, PoseStack ms, MultiBufferSource buffers, int light, int overlay) {
        ms.pushPose();
        ms.translate(0.0F, 0.0625F, 0.0F);
        super.render(potato, partialTicks, ms, buffers, light, overlay);
        ms.popPose();
    }
}