package com.simibubi.create.content.contraptions.bearing;

import com.jozufozu.flywheel.backend.Backend;
import com.jozufozu.flywheel.core.PartialModel;
import com.mojang.blaze3d.vertex.PoseStack;
import com.simibubi.create.AllPartialModels;
import com.simibubi.create.content.kinetics.base.KineticBlockEntity;
import com.simibubi.create.content.kinetics.base.KineticBlockEntityRenderer;
import com.simibubi.create.foundation.render.CachedBufferer;
import com.simibubi.create.foundation.render.SuperByteBuffer;
import com.simibubi.create.foundation.utility.AngleHelper;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.core.Direction;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;

public class BearingRenderer<T extends KineticBlockEntity & IBearingBlockEntity> extends KineticBlockEntityRenderer<T> {

    public BearingRenderer(BlockEntityRendererProvider.Context context) {
        super(context);
    }

    @Override
    protected void renderSafe(T be, float partialTicks, PoseStack ms, MultiBufferSource buffer, int light, int overlay) {
        if (!Backend.canUseInstancing(be.m_58904_())) {
            super.renderSafe(be, partialTicks, ms, buffer, light, overlay);
            Direction facing = (Direction) be.m_58900_().m_61143_(BlockStateProperties.FACING);
            PartialModel top = be.isWoodenTop() ? AllPartialModels.BEARING_TOP_WOODEN : AllPartialModels.BEARING_TOP;
            SuperByteBuffer superBuffer = CachedBufferer.partial(top, be.m_58900_());
            float interpolatedAngle = be.getInterpolatedAngle(partialTicks - 1.0F);
            kineticRotationTransform(superBuffer, be, facing.getAxis(), (float) ((double) (interpolatedAngle / 180.0F) * Math.PI), light);
            if (facing.getAxis().isHorizontal()) {
                superBuffer.rotateCentered(Direction.UP, AngleHelper.rad((double) AngleHelper.horizontalAngle(facing.getOpposite())));
            }
            superBuffer.rotateCentered(Direction.EAST, AngleHelper.rad((double) (-90.0F - AngleHelper.verticalAngle(facing))));
            superBuffer.renderInto(ms, buffer.getBuffer(RenderType.solid()));
        }
    }

    @Override
    protected SuperByteBuffer getRotatedModel(KineticBlockEntity be, BlockState state) {
        return CachedBufferer.partialFacing(AllPartialModels.SHAFT_HALF, state, ((Direction) state.m_61143_(BearingBlock.FACING)).getOpposite());
    }
}