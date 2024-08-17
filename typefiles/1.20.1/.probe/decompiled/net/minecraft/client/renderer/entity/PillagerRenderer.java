package net.minecraft.client.renderer.entity;

import net.minecraft.client.model.IllagerModel;
import net.minecraft.client.model.geom.ModelLayers;
import net.minecraft.client.renderer.entity.layers.ItemInHandLayer;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.monster.Pillager;

public class PillagerRenderer extends IllagerRenderer<Pillager> {

    private static final ResourceLocation PILLAGER = new ResourceLocation("textures/entity/illager/pillager.png");

    public PillagerRenderer(EntityRendererProvider.Context entityRendererProviderContext0) {
        super(entityRendererProviderContext0, new IllagerModel<>(entityRendererProviderContext0.bakeLayer(ModelLayers.PILLAGER)), 0.5F);
        this.m_115326_(new ItemInHandLayer<>(this, entityRendererProviderContext0.getItemInHandRenderer()));
    }

    public ResourceLocation getTextureLocation(Pillager pillager0) {
        return PILLAGER;
    }
}