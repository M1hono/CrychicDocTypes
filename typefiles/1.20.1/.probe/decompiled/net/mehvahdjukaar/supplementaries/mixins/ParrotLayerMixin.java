package net.mehvahdjukaar.supplementaries.mixins;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import net.mehvahdjukaar.supplementaries.integration.CompatHandler;
import net.minecraft.client.model.ParrotModel;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.ParrotRenderer;
import net.minecraft.client.renderer.entity.layers.ParrotOnShoulderLayer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.animal.Parrot;
import net.minecraft.world.entity.player.Player;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.At.Shift;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.LocalCapture;

@Mixin({ ParrotOnShoulderLayer.class })
public abstract class ParrotLayerMixin<T extends Player> {

    @Shadow
    @Final
    private ParrotModel model;

    @Inject(method = { "render(Lcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;ILnet/minecraft/world/entity/player/Player;FFFFZ)V" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/nbt/CompoundTag;getString(Ljava/lang/String;)Ljava/lang/String;", shift = Shift.BEFORE) }, locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void renderParty(PoseStack matrixStack, MultiBufferSource buffer, int packedLight, T livingEntity, float limbSwing, float limbSwingAmount, float netHeadYaw, float headPitch, boolean leftShoulder, CallbackInfo ci, CompoundTag compoundTag) {
        if (compoundTag.getBoolean("record_playing")) {
            EntityType.byString(compoundTag.getString("id")).filter(entityType -> entityType == EntityType.PARROT).ifPresent(entityType -> {
                matrixStack.pushPose();
                matrixStack.translate(leftShoulder ? 0.4F : -0.4F, livingEntity.m_6047_() ? -1.3F : -1.5, 0.0);
                Parrot.Variant variant = Parrot.Variant.byId(compoundTag.getInt("Variant"));
                VertexConsumer vertexConsumer = buffer.getBuffer(this.model.m_103119_(ParrotRenderer.getVariantTexture(variant)));
                renderOnShoulderPartying(this.model, matrixStack, vertexConsumer, packedLight, OverlayTexture.NO_OVERLAY, limbSwing, limbSwingAmount, netHeadYaw, headPitch, livingEntity.f_19797_, 0.0F);
                matrixStack.popPose();
            });
            if (CompatHandler.CUSTOM_PLAYER_MODELS) {
                matrixStack.popPose();
            }
            ci.cancel();
        }
    }

    @Unique
    private static void renderOnShoulderPartying(ParrotModel model, PoseStack poseStack, VertexConsumer buffer, int packedLight, int packedOverlay, float limbSwing, float limbSwingAmount, float netHeadYaw, float headPitch, int tickCount, float bob) {
        model.prepare(ParrotModel.State.PARTY);
        model.setupAnim(ParrotModel.State.PARTY, tickCount, limbSwing, limbSwingAmount, bob, netHeadYaw, headPitch);
        model.root().render(poseStack, buffer, packedLight, packedOverlay);
    }
}