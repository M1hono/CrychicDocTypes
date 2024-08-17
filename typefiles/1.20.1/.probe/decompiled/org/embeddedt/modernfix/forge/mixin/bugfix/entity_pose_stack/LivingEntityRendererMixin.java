package org.embeddedt.modernfix.forge.mixin.bugfix.entity_pose_stack;

import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.entity.LivingEntityRenderer;
import net.minecraftforge.client.event.RenderLivingEvent;
import net.minecraftforge.eventbus.api.Event;
import net.minecraftforge.eventbus.api.IEventBus;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin({ LivingEntityRenderer.class })
@ClientOnlyMixin
public class LivingEntityRendererMixin {

    @Redirect(method = { "render(Lnet/minecraft/world/entity/LivingEntity;FFLcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;I)V" }, at = @At(value = "INVOKE", target = "Lnet/minecraftforge/eventbus/api/IEventBus;post(Lnet/minecraftforge/eventbus/api/Event;)Z", ordinal = 0))
    private boolean fireCheckingPoseStack(IEventBus instance, Event event) {
        PoseStack stack = ((RenderLivingEvent) event).getPoseStack();
        int size = ((PoseStackAccessor) stack).getPoseStack().size();
        if (!instance.post(event)) {
            return false;
        } else {
            while (((PoseStackAccessor) stack).getPoseStack().size() > size) {
                stack.popPose();
            }
            return true;
        }
    }
}