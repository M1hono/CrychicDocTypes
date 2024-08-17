package dev.kosmx.playerAnim.mixin;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import dev.kosmx.playerAnim.api.TransformType;
import dev.kosmx.playerAnim.core.impl.AnimationProcessor;
import dev.kosmx.playerAnim.core.util.Pair;
import dev.kosmx.playerAnim.core.util.Vec3f;
import dev.kosmx.playerAnim.impl.Helper;
import dev.kosmx.playerAnim.impl.IAnimatedPlayer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.layers.ItemInHandLayer;
import net.minecraft.world.entity.HumanoidArm;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import org.joml.Quaternionf;
import org.joml.Vector3f;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ ItemInHandLayer.class })
public class HeldItemMixin {

    @Inject(method = { "renderArmWithItem" }, at = { @At(value = "INVOKE", target = "Lcom/mojang/blaze3d/vertex/PoseStack;mulPose(Lorg/joml/Quaternionf;)V", ordinal = 0) })
    private void renderMixin(LivingEntity livingEntity, ItemStack stack, ItemDisplayContext itemDisplayContext, HumanoidArm arm, PoseStack matrices, MultiBufferSource vertexConsumers, int light, CallbackInfo ci) {
        if (Helper.isBendEnabled() && livingEntity instanceof IAnimatedPlayer player && player.playerAnimator_getAnimation().isActive()) {
            AnimationProcessor anim = player.playerAnimator_getAnimation();
            Vec3f data = anim.get3DTransform(arm == HumanoidArm.LEFT ? "leftArm" : "rightArm", TransformType.BEND, new Vec3f(0.0F, 0.0F, 0.0F));
            Pair<Float, Float> pair = new Pair<>(data.getX(), data.getY());
            float offset = 0.25F;
            matrices.translate(0.0F, offset, 0.0F);
            float bend = pair.getRight();
            float axisf = -pair.getLeft();
            Vector3f axis = new Vector3f((float) Math.cos((double) axisf), 0.0F, (float) Math.sin((double) axisf));
            matrices.mulPose(new Quaternionf().rotateAxis(bend, axis));
            matrices.translate(0.0F, -offset, 0.0F);
        }
    }

    @Inject(method = { "renderArmWithItem" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/ItemInHandRenderer;renderItem(Lnet/minecraft/world/entity/LivingEntity;Lnet/minecraft/world/item/ItemStack;Lnet/minecraft/world/item/ItemDisplayContext;ZLcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;I)V") })
    private void changeItemLocation(LivingEntity livingEntity, ItemStack itemStack, ItemDisplayContext itemDisplayContext, HumanoidArm arm, PoseStack matrices, MultiBufferSource multiBufferSource, int i, CallbackInfo ci) {
        if (livingEntity instanceof IAnimatedPlayer player && player.playerAnimator_getAnimation().isActive()) {
            AnimationProcessor anim = player.playerAnimator_getAnimation();
            Vec3f rot = anim.get3DTransform(arm == HumanoidArm.LEFT ? "leftItem" : "rightItem", TransformType.ROTATION, Vec3f.ZERO);
            Vec3f pos = anim.get3DTransform(arm == HumanoidArm.LEFT ? "leftItem" : "rightItem", TransformType.POSITION, Vec3f.ZERO).scale(0.0625F);
            matrices.translate(pos.getX(), pos.getY(), pos.getZ());
            matrices.mulPose(Axis.ZP.rotation(rot.getZ()));
            matrices.mulPose(Axis.YP.rotation(rot.getY()));
            matrices.mulPose(Axis.XP.rotation(rot.getX()));
        }
    }
}