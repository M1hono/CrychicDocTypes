package se.mickelus.tetra.items.modular;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import se.mickelus.tetra.items.modular.impl.ModularBladedItem;
import se.mickelus.tetra.items.modular.impl.ModularDoubleHeadedItem;
import se.mickelus.tetra.items.modular.impl.ModularSingleHeadedItem;
import se.mickelus.tetra.items.modular.impl.shield.ModularShieldItem;

@ParametersAreNonnullByDefault
@OnlyIn(Dist.CLIENT)
public class ThrownModularItemRenderer extends EntityRenderer<ThrownModularItemEntity> {

    public ThrownModularItemRenderer(EntityRendererProvider.Context manager) {
        super(manager);
    }

    public void render(ThrownModularItemEntity entity, float entityYaw, float partialTicks, PoseStack matrixStack, MultiBufferSource renderTypeBuffer, int packedLightIn) {
        matrixStack.pushPose();
        Item item = entity.getPickupItem().getItem();
        if (item instanceof ModularSingleHeadedItem) {
            this.transformSingleHeaded(entity, partialTicks, matrixStack);
        } else if (item instanceof ModularDoubleHeadedItem) {
            this.transformDoubleHeaded(entity, partialTicks, matrixStack);
        } else if (item instanceof ModularBladedItem) {
            this.transformBlade(entity, partialTicks, matrixStack);
        } else if (item instanceof ModularShieldItem) {
            this.transformShield(entity, partialTicks, matrixStack);
        }
        Minecraft.getInstance().getItemRenderer().renderStatic(entity.getPickupItem(), ItemDisplayContext.FIXED, packedLightIn, OverlayTexture.NO_OVERLAY, matrixStack, renderTypeBuffer, entity.m_9236_(), entity.m_19879_());
        matrixStack.popPose();
        super.render(entity, entityYaw, partialTicks, matrixStack, renderTypeBuffer, packedLightIn);
    }

    public ResourceLocation getTextureLocation(ThrownModularItemEntity entity) {
        return null;
    }

    private void transformSingleHeaded(ThrownModularItemEntity entity, float partialTicks, PoseStack matrixStack) {
        matrixStack.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146908_(), entity.m_146908_()) - 90.0F));
        matrixStack.mulPose(Axis.ZP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146909_(), entity.m_146909_()) + 135.0F));
        matrixStack.mulPose(Axis.XP.rotationDegrees(180.0F));
        matrixStack.translate(0.3F, -0.3F, 0.0F);
    }

    private void transformDoubleHeaded(ThrownModularItemEntity entity, float partialTicks, PoseStack matrixStack) {
        if (entity.hasDealtDamage()) {
            matrixStack.mulPose(Axis.ZP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146909_(), entity.m_146909_()) + 135.0F));
        } else {
            matrixStack.mulPose(Axis.ZP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146909_(), entity.m_146909_()) + (float) entity.f_19797_ + partialTicks));
        }
        matrixStack.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146908_(), entity.m_146908_()) - 90.0F));
        matrixStack.mulPose(Axis.XP.rotationDegrees(180.0F));
        matrixStack.translate(0.3F, -0.3F, 0.0F);
    }

    private void transformBlade(ThrownModularItemEntity entity, float partialTicks, PoseStack matrixStack) {
        matrixStack.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146908_(), entity.m_146908_()) - 90.0F));
        matrixStack.mulPose(Axis.ZP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146909_(), entity.m_146909_()) + 135.0F));
        matrixStack.mulPose(Axis.XP.rotationDegrees(180.0F));
    }

    private void transformShield(ThrownModularItemEntity entity, float partialTicks, PoseStack matrixStack) {
        matrixStack.mulPose(Axis.ZP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146909_(), entity.m_146909_())));
        if (entity.onGround()) {
            matrixStack.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146908_(), entity.m_146908_()) - 90.0F));
        } else {
            matrixStack.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTicks, entity.m_146908_(), entity.m_146908_()) + ((float) entity.f_19797_ + partialTicks) * 100.0F));
        }
        matrixStack.mulPose(Axis.XP.rotationDegrees(90.0F));
        matrixStack.translate(-0.2, 0.0, 0.0);
    }
}