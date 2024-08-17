package net.mehvahdjukaar.amendments.client.renderers;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.math.Axis;
import net.mehvahdjukaar.amendments.AmendmentsClient;
import net.mehvahdjukaar.amendments.common.IBetterJukebox;
import net.mehvahdjukaar.amendments.configs.ClientConfigs;
import net.mehvahdjukaar.amendments.integration.CompatObjects;
import net.mehvahdjukaar.moonlight.api.client.util.RotHlpr;
import net.mehvahdjukaar.moonlight.api.client.util.VertexUtil;
import net.minecraft.client.renderer.LevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.resources.model.Material;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.util.FastColor;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.JukeboxBlock;
import net.minecraft.world.level.block.entity.JukeboxBlockEntity;

public class JukeboxTileRenderer implements BlockEntityRenderer<JukeboxBlockEntity> {

    public JukeboxTileRenderer(BlockEntityRendererProvider.Context context) {
    }

    public void render(JukeboxBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay) {
        ItemStack item = blockEntity.m_272036_();
        if (!item.isEmpty() && (Boolean) blockEntity.m_58900_().m_61143_(JukeboxBlock.HAS_RECORD)) {
            poseStack.translate(0.5, 0.953125, 0.5);
            if ((Boolean) ClientConfigs.JUKEBOX_SPIN.get()) {
                poseStack.mulPose(Axis.YP.rotationDegrees(((IBetterJukebox) blockEntity).amendments$getRotation(partialTick)));
            }
            poseStack.mulPose(RotHlpr.X90);
            Material material = AmendmentsClient.getRecordMaterial(item.getItem());
            int upLight = LevelRenderer.getLightColor(blockEntity.m_58904_(), blockEntity.m_58899_().above(2));
            int lu = upLight & 65535;
            int lv = upLight >> 16 & 65535;
            CompoundTag tag = item.getTag();
            if (tag != null && item.getItem() == CompatObjects.ETCHED_DISC.get()) {
                int color = tag.getInt("DiscColor");
                if (color != 5329233) {
                    VertexConsumer builder = AmendmentsClient.TINTED_RECORD.buffer(bufferSource, RenderType::m_110452_);
                    drawColoredQuad(poseStack, builder, lu, lv, color);
                } else {
                    VertexConsumer builder = AmendmentsClient.DEFAULT_RECORD.buffer(bufferSource, RenderType::m_110452_);
                    VertexUtil.addQuad(builder, poseStack, -0.5F, -0.5F, 0.5F, 0.5F, lu, lv);
                }
                CompoundTag label = tag.getCompound("LabelColor");
                int pattern = tag.getInt("Pattern");
                if (!label.isEmpty() && pattern < 6) {
                    VertexConsumer var21 = ((Material) AmendmentsClient.RECORD_PATTERNS.get(pattern)).buffer(bufferSource, RenderType::m_110452_);
                    int primaryColor = label.getInt("Primary");
                    if (primaryColor == 0) {
                        primaryColor = -1;
                    }
                    drawColoredQuad(poseStack, var21, lu, lv, primaryColor);
                    var21 = ((Material) AmendmentsClient.RECORD_PATTERNS_OVERLAY.get(pattern)).buffer(bufferSource, RenderType::m_110452_);
                    int secondaryColor = label.getInt("Secondary");
                    if (secondaryColor == 0) {
                        secondaryColor = -1;
                    }
                    drawColoredQuad(poseStack, var21, lu, lv, secondaryColor);
                }
            } else {
                VertexConsumer builder = material.buffer(bufferSource, RenderType::m_110452_);
                VertexUtil.addQuad(builder, poseStack, -0.5F, -0.5F, 0.5F, 0.5F, lu, lv);
            }
        }
    }

    private static void drawColoredQuad(PoseStack poseStack, VertexConsumer builder, int lu, int lv, int color) {
        int r = FastColor.ARGB32.red(color);
        int g = FastColor.ARGB32.green(color);
        int b = FastColor.ARGB32.blue(color);
        VertexUtil.addQuad(builder, poseStack, -0.5F, -0.5F, 0.5F, 0.5F, r, g, b, 255, lu, lv);
    }
}