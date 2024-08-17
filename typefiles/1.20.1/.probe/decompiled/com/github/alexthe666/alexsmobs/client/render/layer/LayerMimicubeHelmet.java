package com.github.alexthe666.alexsmobs.client.render.layer;

import com.github.alexthe666.alexsmobs.client.model.ModelMimicube;
import com.github.alexthe666.alexsmobs.client.render.RenderMimicube;
import com.github.alexthe666.alexsmobs.entity.EntityMimicube;
import com.google.common.collect.Maps;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.math.Axis;
import java.util.Map;
import javax.annotation.Nullable;
import net.minecraft.client.model.HumanoidModel;
import net.minecraft.client.model.Model;
import net.minecraft.client.model.geom.ModelLayers;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.renderer.entity.layers.RenderLayer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.DyeableLeatherItem;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.client.ForgeHooksClient;

public class LayerMimicubeHelmet extends RenderLayer<EntityMimicube, ModelMimicube> {

    private static final Map<String, ResourceLocation> ARMOR_TEXTURE_RES_MAP = Maps.newHashMap();

    private final HumanoidModel defaultBipedModel;

    private final RenderMimicube renderer;

    public LayerMimicubeHelmet(RenderMimicube render, EntityRendererProvider.Context renderManagerIn) {
        super(render);
        this.renderer = render;
        this.defaultBipedModel = new HumanoidModel(renderManagerIn.bakeLayer(ModelLayers.ARMOR_STAND_OUTER_ARMOR));
    }

    public static ResourceLocation getArmorResource(Entity entity, ItemStack stack, EquipmentSlot slot, @Nullable String type) {
        ArmorItem item = (ArmorItem) stack.getItem();
        String texture = item.getMaterial().getName();
        String domain = "minecraft";
        int idx = texture.indexOf(58);
        if (idx != -1) {
            domain = texture.substring(0, idx);
            texture = texture.substring(idx + 1);
        }
        String s1 = String.format("%s:textures/models/armor/%s_layer_%d%s.png", domain, texture, 1, type == null ? "" : String.format("_%s", type));
        s1 = ForgeHooksClient.getArmorTexture(entity, stack, s1, slot, type);
        ResourceLocation resourcelocation = (ResourceLocation) ARMOR_TEXTURE_RES_MAP.get(s1);
        if (resourcelocation == null) {
            resourcelocation = new ResourceLocation(s1);
            ARMOR_TEXTURE_RES_MAP.put(s1, resourcelocation);
        }
        return resourcelocation;
    }

    public void render(PoseStack matrixStackIn, MultiBufferSource bufferIn, int packedLightIn, EntityMimicube cube, float limbSwing, float limbSwingAmount, float partialTicks, float ageInTicks, float netHeadYaw, float headPitch) {
        matrixStackIn.pushPose();
        ItemStack itemstack = cube.m_6844_(EquipmentSlot.HEAD);
        float helmetSwap = Mth.lerp(partialTicks, cube.prevHelmetSwapProgress, cube.helmetSwapProgress) * 0.2F;
        if (itemstack.getItem() instanceof ArmorItem) {
            ArmorItem armoritem = (ArmorItem) itemstack.getItem();
            if (armoritem.getEquipmentSlot() == EquipmentSlot.HEAD) {
                HumanoidModel a = this.defaultBipedModel;
                a = this.getArmorModelHook(cube, itemstack, EquipmentSlot.HEAD, a);
                boolean notAVanillaModel = a != this.defaultBipedModel;
                this.setModelSlotVisible(a, EquipmentSlot.HEAD);
                boolean flag = false;
                ((ModelMimicube) this.renderer.m_7200_()).root.translateAndRotate(matrixStackIn);
                ((ModelMimicube) this.renderer.m_7200_()).innerbody.translateAndRotate(matrixStackIn);
                matrixStackIn.translate(0.0F, notAVanillaModel ? 0.25F : -0.75F, 0.0F);
                matrixStackIn.scale(1.0F + 0.3F * (1.0F - helmetSwap), 1.0F + 0.3F * (1.0F - helmetSwap), 1.0F + 0.3F * (1.0F - helmetSwap));
                boolean flag1 = itemstack.hasFoil();
                int clampedLight = helmetSwap > 0.0F ? (int) (-100.0F * helmetSwap) : packedLightIn;
                matrixStackIn.mulPose(Axis.YP.rotationDegrees(360.0F * helmetSwap));
                if (armoritem instanceof DyeableLeatherItem) {
                    int i = ((DyeableLeatherItem) armoritem).getColor(itemstack);
                    float f = (float) (i >> 16 & 0xFF) / 255.0F;
                    float f1 = (float) (i >> 8 & 0xFF) / 255.0F;
                    float f2 = (float) (i & 0xFF) / 255.0F;
                    this.renderArmor(cube, matrixStackIn, bufferIn, clampedLight, flag1, a, f, f1, f2, getArmorResource(cube, itemstack, EquipmentSlot.HEAD, null), notAVanillaModel);
                    this.renderArmor(cube, matrixStackIn, bufferIn, clampedLight, flag1, a, 1.0F, 1.0F, 1.0F, getArmorResource(cube, itemstack, EquipmentSlot.HEAD, "overlay"), notAVanillaModel);
                } else {
                    this.renderArmor(cube, matrixStackIn, bufferIn, clampedLight, flag1, a, 1.0F, 1.0F, 1.0F, getArmorResource(cube, itemstack, EquipmentSlot.HEAD, null), notAVanillaModel);
                }
            }
        }
        matrixStackIn.popPose();
    }

    private void renderArmor(EntityMimicube entity, PoseStack matrixStackIn, MultiBufferSource bufferIn, int packedLightIn, boolean glintIn, HumanoidModel modelIn, float red, float green, float blue, ResourceLocation armorResource, boolean notAVanillaModel) {
        VertexConsumer ivertexbuilder = ItemRenderer.getFoilBuffer(bufferIn, RenderType.entityCutoutNoCull(armorResource), false, glintIn);
        if (notAVanillaModel) {
            ((ModelMimicube) this.renderer.m_7200_()).m_102624_(modelIn);
            modelIn.body.y = 0.0F;
            modelIn.head.setPos(0.0F, 1.0F, 0.0F);
            modelIn.hat.y = 0.0F;
            modelIn.head.xRot = ((ModelMimicube) this.renderer.m_7200_()).body.rotateAngleX;
            modelIn.head.yRot = ((ModelMimicube) this.renderer.m_7200_()).body.rotateAngleY;
            modelIn.head.zRot = ((ModelMimicube) this.renderer.m_7200_()).body.rotateAngleZ;
            modelIn.head.x = ((ModelMimicube) this.renderer.m_7200_()).body.rotationPointX;
            modelIn.head.y = ((ModelMimicube) this.renderer.m_7200_()).body.rotationPointY;
            modelIn.head.z = ((ModelMimicube) this.renderer.m_7200_()).body.rotationPointZ;
            modelIn.hat.copyFrom(modelIn.head);
            modelIn.body.copyFrom(modelIn.head);
        }
        modelIn.m_7695_(matrixStackIn, ivertexbuilder, packedLightIn, OverlayTexture.NO_OVERLAY, red, green, blue, 1.0F);
    }

    protected void setModelSlotVisible(HumanoidModel p_188359_1_, EquipmentSlot slotIn) {
        this.setModelVisible(p_188359_1_);
        switch(slotIn) {
            case HEAD:
                p_188359_1_.head.visible = true;
                p_188359_1_.hat.visible = true;
                break;
            case CHEST:
                p_188359_1_.body.visible = true;
                p_188359_1_.rightArm.visible = true;
                p_188359_1_.leftArm.visible = true;
                break;
            case LEGS:
                p_188359_1_.body.visible = true;
                p_188359_1_.rightLeg.visible = true;
                p_188359_1_.leftLeg.visible = true;
                break;
            case FEET:
                p_188359_1_.rightLeg.visible = true;
                p_188359_1_.leftLeg.visible = true;
        }
    }

    protected void setModelVisible(HumanoidModel model) {
        model.setAllVisible(false);
    }

    protected HumanoidModel<?> getArmorModelHook(LivingEntity entity, ItemStack itemStack, EquipmentSlot slot, HumanoidModel model) {
        try {
            Model basicModel = ForgeHooksClient.getArmorModel(entity, itemStack, slot, model);
            return basicModel instanceof HumanoidModel ? (HumanoidModel) basicModel : model;
        } catch (Exception var6) {
            return model;
        }
    }
}