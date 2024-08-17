package net.mehvahdjukaar.amendments.mixins.forge;

import com.mojang.blaze3d.vertex.PoseStack;
import java.util.List;
import javax.annotation.Nullable;
import net.mehvahdjukaar.amendments.AmendmentsClient;
import net.mehvahdjukaar.amendments.client.renderers.HangingSignRendererExtension;
import net.mehvahdjukaar.amendments.common.ExtendedHangingSign;
import net.mehvahdjukaar.amendments.configs.ClientConfigs;
import net.mehvahdjukaar.moonlight.api.platform.PlatHelper;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.renderer.blockentity.HangingSignRenderer;
import net.minecraft.client.renderer.blockentity.SignRenderer;
import net.minecraft.client.resources.model.Material;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.level.block.SignBlock;
import net.minecraft.world.level.block.entity.SignBlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Pseudo;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.LocalCapture;
import vectorwing.farmersdelight.client.renderer.HangingCanvasSignRenderer;

@Pseudo
@Mixin({ HangingCanvasSignRenderer.class })
public abstract class CompatFarmersDelightCanvasMixin extends SignRenderer {

    @Unique
    private List<ModelPart> amendments$barModel;

    @Unique
    private ModelPart amendments$chains;

    protected CompatFarmersDelightCanvasMixin(BlockEntityRendererProvider.Context arg) {
        super(arg);
    }

    @Shadow
    public abstract Material getCanvasSignMaterial(@Nullable DyeColor var1);

    @Inject(method = { "render(Lnet/minecraft/world/level/block/entity/SignBlockEntity;FLcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;II)V" }, at = { @At(value = "INVOKE", target = "Lvectorwing/farmersdelight/client/renderer/HangingCanvasSignRenderer;renderSignWithText(Lnet/minecraft/world/level/block/entity/SignBlockEntity;Lcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;IILnet/minecraft/world/level/block/state/BlockState;Lnet/minecraft/world/level/block/SignBlock;Lnet/minecraft/world/item/DyeColor;Lnet/minecraft/client/model/Model;)V") }, locals = LocalCapture.CAPTURE_FAILEXCEPTION, cancellable = true)
    protected void renderSignWithText(SignBlockEntity tile, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay, CallbackInfo ci, BlockState state, SignBlock sign, HangingSignRenderer.HangingSignModel model, DyeColor dye) {
        if (((Boolean) ClientConfigs.SIGN_ATTACHMENT.get() || (Boolean) ClientConfigs.SWINGING_SIGNS.get()) && tile instanceof ExtendedHangingSign ext) {
            BlockState blockState = tile.m_58900_();
            HangingSignRendererExtension.render(tile, ext.getExtension(), partialTick, poseStack, bufferSource, packedLight, packedOverlay, blockState, model, this.amendments$barModel, this.amendments$chains, this.getCanvasSignMaterial(dye), AmendmentsClient.CANVAS_SIGH_MATERIAL, this, 1.5F * ClientConfigs.getSignColorMult(), false);
            ci.cancel();
        }
    }

    @Inject(method = { "<init>" }, at = { @At("TAIL") })
    public void initEnhancedSign(BlockEntityRendererProvider.Context context, CallbackInfo ci) {
        if (PlatHelper.isModLoadingValid()) {
            ModelPart model = context.bakeLayer(AmendmentsClient.HANGING_SIGN_EXTENSION);
            this.amendments$barModel = List.of(model.getChild("extension_6"), model.getChild("extension_5"), model.getChild("extension_4"), model.getChild("extension_3"));
            this.amendments$chains = context.bakeLayer(AmendmentsClient.HANGING_SIGN_EXTENSION_CHAINS);
        }
    }
}