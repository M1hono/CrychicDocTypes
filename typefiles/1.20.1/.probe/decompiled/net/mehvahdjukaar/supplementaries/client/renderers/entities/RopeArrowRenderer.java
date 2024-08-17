package net.mehvahdjukaar.supplementaries.client.renderers.entities;

import net.mehvahdjukaar.supplementaries.client.renderers.entities.funny.JarredRenderer;
import net.mehvahdjukaar.supplementaries.client.renderers.entities.funny.PickleRenderer;
import net.mehvahdjukaar.supplementaries.common.entities.RopeArrowEntity;
import net.mehvahdjukaar.supplementaries.reg.ModTextures;
import net.minecraft.client.renderer.entity.ArrowRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.resources.ResourceLocation;

public class RopeArrowRenderer extends ArrowRenderer<RopeArrowEntity> {

    public RopeArrowRenderer(EntityRendererProvider.Context context) {
        super(context);
        PickleRenderer.INSTANCE = new PickleRenderer(context);
        JarredRenderer.INSTANCE = new JarredRenderer(context);
    }

    public ResourceLocation getTextureLocation(RopeArrowEntity entity) {
        return ModTextures.ROPE_ARROW;
    }
}