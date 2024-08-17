package com.github.alexthe666.alexsmobs.client.render;

import com.github.alexthe666.alexsmobs.client.model.ModelKangaroo;
import com.github.alexthe666.alexsmobs.client.render.layer.LayerKangarooArmor;
import com.github.alexthe666.alexsmobs.client.render.layer.LayerKangarooBaby;
import com.github.alexthe666.alexsmobs.client.render.layer.LayerKangarooItem;
import com.github.alexthe666.alexsmobs.entity.EntityKangaroo;
import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.culling.Frustum;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.MobRenderer;
import net.minecraft.resources.ResourceLocation;

public class RenderKangaroo extends MobRenderer<EntityKangaroo, ModelKangaroo> {

    private static final ResourceLocation TEXTURE = new ResourceLocation("alexsmobs:textures/entity/kangaroo.png");

    public RenderKangaroo(EntityRendererProvider.Context renderManagerIn) {
        super(renderManagerIn, new ModelKangaroo(), 0.5F);
        this.m_115326_(new LayerKangarooItem(this));
        this.m_115326_(new LayerKangarooArmor(this, renderManagerIn));
        this.m_115326_(new LayerKangarooBaby(this));
    }

    public boolean shouldRender(EntityKangaroo kangaroo, Frustum p_225626_2_, double p_225626_3_, double p_225626_5_, double p_225626_7_) {
        return kangaroo.m_6162_() && kangaroo.m_20159_() && kangaroo.m_20202_() instanceof EntityKangaroo ? false : super.shouldRender(kangaroo, p_225626_2_, p_225626_3_, p_225626_5_, p_225626_7_);
    }

    protected void scale(EntityKangaroo entitylivingbaseIn, PoseStack matrixStackIn, float partialTickTime) {
    }

    public ResourceLocation getTextureLocation(EntityKangaroo entity) {
        return TEXTURE;
    }
}