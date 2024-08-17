package com.simibubi.create.content.trains.signal;

import com.jozufozu.flywheel.util.transform.TransformStack;
import com.mojang.blaze3d.vertex.PoseStack;
import com.simibubi.create.AllPartialModels;
import com.simibubi.create.content.trains.track.ITrackBlock;
import com.simibubi.create.content.trains.track.TrackTargetingBehaviour;
import com.simibubi.create.foundation.blockEntity.renderer.SafeBlockEntityRenderer;
import com.simibubi.create.foundation.render.CachedBufferer;
import com.simibubi.create.foundation.utility.AnimationTickHolder;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;

public class SignalRenderer extends SafeBlockEntityRenderer<SignalBlockEntity> {

    public SignalRenderer(BlockEntityRendererProvider.Context context) {
    }

    protected void renderSafe(SignalBlockEntity be, float partialTicks, PoseStack ms, MultiBufferSource buffer, int light, int overlay) {
        BlockState blockState = be.m_58900_();
        SignalBlockEntity.SignalState signalState = be.getState();
        SignalBlockEntity.OverlayState overlayState = be.getOverlay();
        float renderTime = AnimationTickHolder.getRenderTime(be.m_58904_());
        if (signalState.isRedLight(renderTime)) {
            CachedBufferer.partial(AllPartialModels.SIGNAL_ON, blockState).renderInto(ms, buffer.getBuffer(RenderType.solid()));
        } else {
            CachedBufferer.partial(AllPartialModels.SIGNAL_OFF, blockState).light(light).renderInto(ms, buffer.getBuffer(RenderType.solid()));
        }
        BlockPos pos = be.m_58899_();
        TrackTargetingBehaviour<SignalBoundary> target = be.edgePoint;
        BlockPos targetPosition = target.getGlobalPosition();
        Level level = be.m_58904_();
        BlockState trackState = level.getBlockState(targetPosition);
        Block block = trackState.m_60734_();
        if (block instanceof ITrackBlock) {
            if (overlayState != SignalBlockEntity.OverlayState.SKIP) {
                ms.pushPose();
                TransformStack.cast(ms).translate(targetPosition.subtract(pos));
                TrackTargetingBehaviour.RenderedTrackOverlayType type = overlayState == SignalBlockEntity.OverlayState.DUAL ? TrackTargetingBehaviour.RenderedTrackOverlayType.DUAL_SIGNAL : TrackTargetingBehaviour.RenderedTrackOverlayType.SIGNAL;
                TrackTargetingBehaviour.render(level, targetPosition, target.getTargetDirection(), target.getTargetBezier(), ms, buffer, light, overlay, type, 1.0F);
                ms.popPose();
            }
        }
    }
}