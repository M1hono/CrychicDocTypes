package org.violetmoon.quark.mixin.mixins.client;

import com.llamalad7.mixinextras.injector.ModifyExpressionValue;
import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.violetmoon.quark.content.management.module.ItemSharingModule;
import org.violetmoon.quark.content.tools.module.ColorRunesModule;

@Mixin(value = { ItemRenderer.class }, priority = 1001)
public abstract class ItemRendererMixin {

    @Inject(method = { "render" }, at = { @At("HEAD") })
    private void setColorRuneTargetStack(ItemStack itemStackIn, ItemDisplayContext itemDisplayContext, boolean leftHand, PoseStack matrixStackIn, MultiBufferSource bufferIn, int combinedLightIn, int combinedOverlayIn, BakedModel modelIn, CallbackInfo callbackInfo) {
        ColorRunesModule.setTargetStack(itemStackIn);
    }

    @ModifyExpressionValue(method = { "getArmorFoilBuffer" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;armorGlint()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getArmorGlint(RenderType prev) {
        return ColorRunesModule.Client.getArmorGlint();
    }

    @ModifyExpressionValue(method = { "getArmorFoilBuffer" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;armorEntityGlint()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getArmorEntityGlint(RenderType prev) {
        return ColorRunesModule.Client.getArmorEntityGlint();
    }

    @ModifyExpressionValue(method = { "getFoilBuffer" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;glintTranslucent()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getGlintTranslucent(RenderType prev) {
        return ColorRunesModule.Client.getGlintTranslucent();
    }

    @ModifyExpressionValue(method = { "getFoilBuffer" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;glint()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getGlint(RenderType prev) {
        return ColorRunesModule.Client.getGlint();
    }

    @ModifyExpressionValue(method = { "getFoilBuffer" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;entityGlint()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getEntityGlint(RenderType prev) {
        return ColorRunesModule.Client.getEntityGlint();
    }

    @ModifyExpressionValue(method = { "getFoilBufferDirect" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;glintDirect()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getGlintDirect(RenderType prev) {
        return ColorRunesModule.Client.getGlintDirect();
    }

    @ModifyExpressionValue(method = { "getFoilBufferDirect" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/renderer/RenderType;entityGlintDirect()Lnet/minecraft/client/renderer/RenderType;") })
    private static RenderType getEntityGlintDirect(RenderType prev) {
        return ColorRunesModule.Client.getEntityGlintDirect();
    }

    @ModifyExpressionValue(method = { "renderQuadList" }, at = { @At(value = "CONSTANT", args = { "floatValue=1F" }) }, require = 0)
    public float renderQuads(float original) {
        return ItemSharingModule.Client.alphaValue * original;
    }
}