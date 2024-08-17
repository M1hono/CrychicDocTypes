package io.redspace.ironsspellbooks.render;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import io.redspace.ironsspellbooks.player.ClientMagicData;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.EntityModel;
import net.minecraft.client.player.AbstractClientPlayer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.renderer.entity.RenderLayerParent;
import net.minecraft.client.renderer.entity.layers.RenderLayer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.PlayerModelPart;
import net.minecraft.world.item.Items;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

@OnlyIn(Dist.CLIENT)
public class AngelWingsLayer<T extends LivingEntity, M extends EntityModel<T>> extends RenderLayer<T, M> {

    private static final ResourceLocation WINGS_LOCATION = new ResourceLocation("irons_spellbooks", "textures/entity/angel_wings.png");

    private final AngelWingsModel<T> angelWingsModel = new AngelWingsModel<>(Minecraft.getInstance().getEntityModels().bakeLayer(AngelWingsModel.ANGEL_WINGS_LAYER));

    public AngelWingsLayer(RenderLayerParent<T, M> pRenderer) {
        super(pRenderer);
    }

    public void render(PoseStack pMatrixStack, MultiBufferSource pBuffer, int pPackedLight, T pLivingEntity, float pLimbSwing, float pLimbSwingAmount, float pPartialTicks, float pAgeInTicks, float pNetHeadYaw, float pHeadPitch) {
        if (this.shouldRender(pLivingEntity)) {
            ResourceLocation resourcelocation;
            if (pLivingEntity instanceof AbstractClientPlayer abstractclientplayer) {
                if (abstractclientplayer.isElytraLoaded() && abstractclientplayer.getElytraTextureLocation() != null) {
                    resourcelocation = abstractclientplayer.getElytraTextureLocation();
                } else if (abstractclientplayer.isCapeLoaded() && abstractclientplayer.getCloakTextureLocation() != null && abstractclientplayer.m_36170_(PlayerModelPart.CAPE)) {
                    resourcelocation = abstractclientplayer.getCloakTextureLocation();
                } else {
                    resourcelocation = this.getAngelWingsTexture(pLivingEntity);
                }
            } else {
                resourcelocation = this.getAngelWingsTexture(pLivingEntity);
            }
            pMatrixStack.pushPose();
            pMatrixStack.translate(0.0, 0.0, 0.125);
            this.m_117386_().copyPropertiesTo(this.angelWingsModel);
            this.angelWingsModel.setupAnim(pLivingEntity, pLimbSwing, pLimbSwingAmount, pAgeInTicks, pNetHeadYaw, pHeadPitch);
            VertexConsumer vertexconsumer = ItemRenderer.getArmorFoilBuffer(pBuffer, RenderType.energySwirl(resourcelocation, 0.0F, 0.0F), false, false);
            this.angelWingsModel.m_7695_(pMatrixStack, vertexconsumer, pPackedLight, OverlayTexture.NO_OVERLAY, 1.0F, 1.0F, 1.0F, 1.0F);
            pMatrixStack.popPose();
        }
    }

    public boolean shouldRender(T entity) {
        return !entity.getItemBySlot(EquipmentSlot.CHEST).is(Items.ELYTRA) && ClientMagicData.getSyncedSpellData(entity).hasEffect(1L);
    }

    public ResourceLocation getAngelWingsTexture(T entity) {
        return WINGS_LOCATION;
    }
}