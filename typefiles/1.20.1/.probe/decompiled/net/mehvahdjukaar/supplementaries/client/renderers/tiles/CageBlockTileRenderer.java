package net.mehvahdjukaar.supplementaries.client.renderers.tiles;

import com.mojang.blaze3d.vertex.PoseStack;
import net.mehvahdjukaar.moonlight.api.client.util.RotHlpr;
import net.mehvahdjukaar.supplementaries.common.misc.mob_container.IMobContainerProvider;
import net.mehvahdjukaar.supplementaries.common.misc.mob_container.MobContainer;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.renderer.entity.EntityRenderDispatcher;
import net.minecraft.core.Direction;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.level.block.entity.BlockEntity;

public class CageBlockTileRenderer<T extends BlockEntity & IMobContainerProvider> implements BlockEntityRenderer<T> {

    private final EntityRenderDispatcher entityRenderer = Minecraft.getInstance().getEntityRenderDispatcher();

    public CageBlockTileRenderer(BlockEntityRendererProvider.Context context) {
    }

    @Override
    public int getViewDistance() {
        return 80;
    }

    public void renderMob(MobContainer mobHolder, float partialTicks, PoseStack matrixStack, MultiBufferSource bufferIn, int combinedLightIn, Direction dir) {
        Entity mob = mobHolder.getDisplayedMob();
        if (mob != null && mobHolder.getData() instanceof MobContainer.MobNBTData.Entity entityData) {
            matrixStack.pushPose();
            float s = entityData.getScale();
            renderMobStatic(mob, s, this.entityRenderer, matrixStack, partialTicks, bufferIn, combinedLightIn, dir.toYRot());
            matrixStack.popPose();
        }
    }

    public static void renderMobStatic(Entity mob, float scale, EntityRenderDispatcher renderer, PoseStack matrixStack, float partialTicks, MultiBufferSource bufferIn, int combinedLightIn, float rot) {
        double y = Mth.lerp((double) partialTicks, mob.yOld, mob.getY());
        double x = mob.getX();
        double z = mob.getZ();
        y = relativeOffset(y);
        x = relativeOffset(x);
        z = relativeOffset(z);
        matrixStack.translate(x, y, z);
        matrixStack.mulPose(RotHlpr.rot(-((int) rot)));
        matrixStack.scale(scale, scale, scale);
        renderer.setRenderShadow(false);
        renderer.render(mob, 0.0, 0.0, 0.0, 0.0F, partialTicks, matrixStack, bufferIn, combinedLightIn);
        renderer.setRenderShadow(true);
    }

    public static double relativeOffset(double pos) {
        return pos < 0.0 ? 1.0 + pos % 1.0 : pos % 1.0;
    }

    @Override
    public void render(T tile, float partialTicks, PoseStack matrixStackIn, MultiBufferSource bufferIn, int combinedLightIn, int combinedOverlayIn) {
        this.renderMob(tile.getMobContainer(), partialTicks, matrixStackIn, bufferIn, combinedLightIn, tile.getDirection());
    }
}