package com.simibubi.create.content.kinetics.speedController;

import com.jozufozu.flywheel.backend.Backend;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.simibubi.create.AllPartialModels;
import com.simibubi.create.content.kinetics.base.KineticBlockEntityRenderer;
import com.simibubi.create.foundation.blockEntity.renderer.SmartBlockEntityRenderer;
import com.simibubi.create.foundation.render.CachedBufferer;
import com.simibubi.create.foundation.render.SuperByteBuffer;
import net.minecraft.client.renderer.LevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;

public class SpeedControllerRenderer extends SmartBlockEntityRenderer<SpeedControllerBlockEntity> {

    public SpeedControllerRenderer(BlockEntityRendererProvider.Context context) {
        super(context);
    }

    protected void renderSafe(SpeedControllerBlockEntity blockEntity, float partialTicks, PoseStack ms, MultiBufferSource buffer, int light, int overlay) {
        super.renderSafe(blockEntity, partialTicks, ms, buffer, light, overlay);
        VertexConsumer builder = buffer.getBuffer(RenderType.solid());
        if (!Backend.canUseInstancing(blockEntity.m_58904_())) {
            KineticBlockEntityRenderer.renderRotatingBuffer(blockEntity, this.getRotatedModel(blockEntity), ms, builder, light);
        }
        if (blockEntity.hasBracket) {
            BlockPos pos = blockEntity.m_58899_();
            Level world = blockEntity.m_58904_();
            BlockState blockState = blockEntity.m_58900_();
            boolean alongX = blockState.m_61143_(SpeedControllerBlock.HORIZONTAL_AXIS) == Direction.Axis.X;
            SuperByteBuffer bracket = CachedBufferer.partial(AllPartialModels.SPEED_CONTROLLER_BRACKET, blockState);
            bracket.translate(0.0, 1.0, 0.0);
            bracket.rotateCentered(Direction.UP, (float) (alongX ? Math.PI : Math.PI / 2));
            bracket.light(LevelRenderer.getLightColor(world, pos.above()));
            bracket.renderInto(ms, builder);
        }
    }

    private SuperByteBuffer getRotatedModel(SpeedControllerBlockEntity blockEntity) {
        return CachedBufferer.block(KineticBlockEntityRenderer.KINETIC_BLOCK, KineticBlockEntityRenderer.shaft(KineticBlockEntityRenderer.getRotationAxisOf(blockEntity)));
    }
}