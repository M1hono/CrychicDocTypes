package io.redspace.ironsspellbooks.render;

import com.mojang.blaze3d.platform.Lighting;
import com.mojang.blaze3d.vertex.PoseStack;
import io.redspace.ironsspellbooks.IronsSpellbooks;
import io.redspace.ironsspellbooks.api.item.curios.AffinityData;
import io.redspace.ironsspellbooks.api.spells.SchoolType;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.geom.EntityModelSet;
import net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;

public class AffinityRingRenderer extends BlockEntityWithoutLevelRenderer {

    private final ItemRenderer renderer;

    private final ResourceLocation defaultModel = IronsSpellbooks.id("item/affinity_ring_evocation");

    public AffinityRingRenderer(ItemRenderer renderDispatcher, EntityModelSet modelSet) {
        super(Minecraft.getInstance().getBlockEntityRenderDispatcher(), modelSet);
        this.renderer = renderDispatcher;
    }

    @Override
    public void renderByItem(ItemStack itemStack, ItemDisplayContext transformType, PoseStack poseStack, MultiBufferSource bufferSource, int combinedLightIn, int combinedOverlayIn) {
        poseStack.pushPose();
        poseStack.translate(0.5F, 0.5F, 0.5F);
        BakedModel model;
        if (!AffinityData.hasAffinityData(itemStack)) {
            model = this.renderer.getItemModelShaper().getModelManager().getModel(this.defaultModel);
        } else {
            ResourceLocation modelResource = getAffinityRingModelLocation(AffinityData.getAffinityData(itemStack).getSpell().getSchoolType());
            model = this.renderer.getItemModelShaper().getModelManager().getModel(modelResource);
        }
        if (transformType == ItemDisplayContext.GUI) {
            Lighting.setupForFlatItems();
            this.renderer.render(itemStack, transformType, false, poseStack, bufferSource, 15728880, OverlayTexture.NO_OVERLAY, model);
            Minecraft.getInstance().renderBuffers().bufferSource().endBatch();
            Lighting.setupFor3DItems();
        } else {
            boolean leftHand = transformType == ItemDisplayContext.FIRST_PERSON_LEFT_HAND || transformType == ItemDisplayContext.THIRD_PERSON_LEFT_HAND;
            this.renderer.render(itemStack, transformType, leftHand, poseStack, bufferSource, combinedLightIn, combinedOverlayIn, model);
        }
        poseStack.popPose();
    }

    public static ResourceLocation getAffinityRingModelLocation(SchoolType schoolType) {
        return new ResourceLocation(schoolType.getId().getNamespace(), String.format("item/affinity_ring_%s", schoolType.getId().getPath()));
    }
}