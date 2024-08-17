package org.violetmoon.quark.content.mobs.client.render.entity;

import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.MobRenderer;
import net.minecraft.resources.ResourceLocation;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.base.client.handler.ModelHandler;
import org.violetmoon.quark.content.mobs.client.layer.CrabMoldLayer;
import org.violetmoon.quark.content.mobs.client.model.CrabModel;
import org.violetmoon.quark.content.mobs.entity.Crab;

public class CrabRenderer extends MobRenderer<Crab, CrabModel> {

    private static final ResourceLocation[] TEXTURES = new ResourceLocation[] { new ResourceLocation("quark", "textures/model/entity/crab/red.png"), new ResourceLocation("quark", "textures/model/entity/crab/blue.png"), new ResourceLocation("quark", "textures/model/entity/crab/green.png") };

    public CrabRenderer(EntityRendererProvider.Context context) {
        super(context, ModelHandler.model(ModelHandler.crab), 0.4F);
        this.m_115326_(new CrabMoldLayer(this));
    }

    @NotNull
    public ResourceLocation getTextureLocation(@NotNull Crab entity) {
        return TEXTURES[entity.getVariant() % TEXTURES.length];
    }
}