package net.mehvahdjukaar.dummmmmmy.client;

import net.mehvahdjukaar.dummmmmmy.DummmmmmyClient;
import net.mehvahdjukaar.dummmmmmy.common.TargetDummyEntity;
import net.mehvahdjukaar.dummmmmmy.configs.ClientConfigs;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.HumanoidMobRenderer;
import net.minecraft.resources.ResourceLocation;

public class TargetDummyRenderer extends HumanoidMobRenderer<TargetDummyEntity, TargetDummyModel<TargetDummyEntity>> {

    public TargetDummyRenderer(EntityRendererProvider.Context context) {
        super(context, new TargetDummyModel<>(context.bakeLayer(DummmmmmyClient.DUMMY_BODY)), 0.0F);
        this.m_115326_(new LayerDummyArmor<>(this, new TargetDummyModel<>(context.bakeLayer(DummmmmmyClient.DUMMY_ARMOR_INNER)), new TargetDummyModel<>(context.bakeLayer(DummmmmmyClient.DUMMY_ARMOR_OUTER)), context.getModelManager()));
    }

    public ResourceLocation getTextureLocation(TargetDummyEntity entity) {
        return ((ClientConfigs.SkinType) ClientConfigs.SKIN.get()).getSkin(entity.isSheared());
    }
}