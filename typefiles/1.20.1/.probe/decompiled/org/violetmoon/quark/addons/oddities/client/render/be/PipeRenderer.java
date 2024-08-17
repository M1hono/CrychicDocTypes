package org.violetmoon.quark.addons.oddities.client.render.be;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import java.util.Iterator;
import java.util.Random;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.Sheets;
import net.minecraft.client.renderer.block.BlockRenderDispatcher;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.client.resources.model.ModelManager;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.core.Direction;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.addons.oddities.block.be.PipeBlockEntity;
import org.violetmoon.quark.addons.oddities.module.PipesModule;

public class PipeRenderer implements BlockEntityRenderer<PipeBlockEntity> {

    private static final ModelResourceLocation LOCATION_MODEL = new ModelResourceLocation(new ResourceLocation("quark", "extra/pipe_flare"), "inventory");

    private final Random random = new Random();

    public PipeRenderer(BlockEntityRendererProvider.Context context) {
    }

    public void render(PipeBlockEntity te, float partialTicks, PoseStack matrix, @NotNull MultiBufferSource buffer, int light, int overlay) {
        matrix.pushPose();
        matrix.translate(0.5, 0.5, 0.5);
        ItemRenderer render = Minecraft.getInstance().getItemRenderer();
        Iterator<PipeBlockEntity.PipeItem> items = te.getItemIterator();
        if (PipesModule.renderPipeItems) {
            while (items.hasNext()) {
                this.renderItem((PipeBlockEntity.PipeItem) items.next(), render, matrix, buffer, partialTicks, light, overlay, te.m_58904_());
            }
        }
        BlockRenderDispatcher blockrendererdispatcher = Minecraft.getInstance().getBlockRenderer();
        ModelManager modelmanager = blockrendererdispatcher.getBlockModelShaper().getModelManager();
        BakedModel model = modelmanager.getModel(LOCATION_MODEL);
        for (Direction d : Direction.values()) {
            this.renderFlare(te, blockrendererdispatcher, model, matrix, buffer, partialTicks, light, overlay, d);
        }
        matrix.popPose();
    }

    private void renderFlare(PipeBlockEntity te, BlockRenderDispatcher disp, BakedModel model, PoseStack matrix, MultiBufferSource buffer, float partial, int light, int overlay, Direction dir) {
        PipeBlockEntity.ConnectionType type = te.getConnectionTo(dir);
        if (type.isFlared) {
            matrix.pushPose();
            switch(dir.getAxis()) {
                case X:
                    matrix.mulPose(Axis.YP.rotationDegrees(-dir.toYRot()));
                    break;
                case Z:
                    matrix.mulPose(Axis.YP.rotationDegrees(dir.toYRot()));
                    break;
                case Y:
                    matrix.mulPose(Axis.XP.rotationDegrees(90.0F));
                    if (dir == Direction.UP) {
                        matrix.mulPose(Axis.YP.rotationDegrees(180.0F));
                    }
            }
            matrix.translate(-0.5, -0.5, type.getFlareShift(te));
            disp.getModelRenderer().renderModel(matrix.last(), buffer.getBuffer(Sheets.cutoutBlockSheet()), null, model, 1.0F, 1.0F, 1.0F, light, OverlayTexture.NO_OVERLAY);
            matrix.popPose();
        }
    }

    private void renderItem(PipeBlockEntity.PipeItem item, ItemRenderer render, PoseStack matrix, MultiBufferSource buffer, float partial, int light, int overlay, Level level) {
        matrix.pushPose();
        float scale = 0.4F;
        float fract = item.getTimeFract(partial);
        float shiftFract = fract - 0.5F;
        Direction face = item.outgoingFace;
        if ((double) fract < 0.5) {
            face = item.incomingFace.getOpposite();
        }
        float offX = (float) face.getStepX() * 1.0F;
        float offY = (float) face.getStepY() * 1.0F;
        float offZ = (float) face.getStepZ() * 1.0F;
        matrix.translate(offX * shiftFract, offY * shiftFract, offZ * shiftFract);
        matrix.scale(scale, scale, scale);
        float speed = 4.0F;
        matrix.mulPose(Axis.YP.rotationDegrees(((float) item.timeInWorld + partial) * speed));
        int seed = item.stack.isEmpty() ? 187 : Item.getId(item.stack.getItem());
        this.random.setSeed((long) seed);
        int count = this.getModelCount(item.stack);
        for (int i = 0; i < count; i++) {
            matrix.pushPose();
            if (i > 0) {
                float spread = 0.15F;
                float x = (this.random.nextFloat() * 2.0F - 1.0F) * spread;
                float y = (this.random.nextFloat() * 2.0F - 1.0F) * spread;
                float z = (this.random.nextFloat() * 2.0F - 1.0F) * spread;
                matrix.translate(x, y, z);
            }
            render.renderStatic(item.stack, ItemDisplayContext.FIXED, light, overlay, matrix, buffer, level, 0);
            matrix.popPose();
        }
        matrix.popPose();
    }

    protected int getModelCount(ItemStack stack) {
        if (stack.getCount() > 48) {
            return 5;
        } else if (stack.getCount() > 32) {
            return 4;
        } else if (stack.getCount() > 16) {
            return 3;
        } else {
            return stack.getCount() > 1 ? 2 : 1;
        }
    }
}