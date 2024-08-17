package org.violetmoon.quark.content.mobs.client.layer;

import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.RenderLayerParent;
import net.minecraft.client.renderer.entity.layers.RenderLayer;
import net.minecraft.resources.ResourceLocation;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.content.mobs.client.model.FoxhoundModel;
import org.violetmoon.quark.content.mobs.entity.Foxhound;

public class FoxhoundCollarLayer extends RenderLayer<Foxhound, FoxhoundModel> {

    private static final ResourceLocation WOLF_COLLAR = new ResourceLocation("quark", "textures/model/entity/foxhound/collar.png");

    public FoxhoundCollarLayer(RenderLayerParent<Foxhound, FoxhoundModel> renderer) {
        super(renderer);
    }

    public void render(@NotNull PoseStack matrix, @NotNull MultiBufferSource buffer, int light, Foxhound foxhound, float limbAngle, float limbDistance, float tickDelta, float customAngle, float headYaw, float headPitch) {
        if (foxhound.m_21824_() && !foxhound.m_20145_()) {
            float[] afloat = foxhound.m_30428_().getTextureDiffuseColors();
            m_117376_(this.m_117386_(), WOLF_COLLAR, matrix, buffer, light, foxhound, afloat[0], afloat[1], afloat[2]);
        }
    }
}