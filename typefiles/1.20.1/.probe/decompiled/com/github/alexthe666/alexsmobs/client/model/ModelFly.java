package com.github.alexthe666.alexsmobs.client.model;

import com.github.alexthe666.alexsmobs.entity.EntityFly;
import com.github.alexthe666.alexsmobs.entity.util.Maths;
import com.github.alexthe666.citadel.client.model.AdvancedEntityModel;
import com.github.alexthe666.citadel.client.model.AdvancedModelBox;
import com.github.alexthe666.citadel.client.model.basic.BasicModelPart;
import com.google.common.collect.ImmutableList;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;

public class ModelFly extends AdvancedEntityModel<EntityFly> {

    private final AdvancedModelBox root;

    private final AdvancedModelBox body;

    private final AdvancedModelBox legs;

    private final AdvancedModelBox left_wing;

    private final AdvancedModelBox right_wing;

    private final AdvancedModelBox mouth;

    public ModelFly() {
        this.texWidth = 32;
        this.texHeight = 32;
        this.root = new AdvancedModelBox(this, "root");
        this.root.setPos(0.0F, 24.0F, 0.0F);
        this.body = new AdvancedModelBox(this, "body");
        this.body.setPos(0.0F, -3.0F, 0.0F);
        this.root.addChild(this.body);
        this.body.setTextureOffset(0, 0).addBox(-2.0F, -2.0F, -3.0F, 4.0F, 4.0F, 6.0F, 0.0F, false);
        this.legs = new AdvancedModelBox(this, "legs");
        this.legs.setPos(0.0F, 2.0F, -2.0F);
        this.body.addChild(this.legs);
        this.legs.setTextureOffset(0, 11).addBox(-1.5F, 0.0F, 0.0F, 3.0F, 1.0F, 5.0F, 0.0F, false);
        this.left_wing = new AdvancedModelBox(this, "left_wing");
        this.left_wing.setPos(1.0F, -2.0F, -1.0F);
        this.body.addChild(this.left_wing);
        this.left_wing.setTextureOffset(12, 11).addBox(0.0F, 0.0F, -1.0F, 4.0F, 0.0F, 3.0F, 0.0F, false);
        this.right_wing = new AdvancedModelBox(this, "right_wing");
        this.right_wing.setPos(-1.0F, -2.0F, -1.0F);
        this.body.addChild(this.right_wing);
        this.right_wing.setTextureOffset(12, 11).addBox(-4.0F, 0.0F, -1.0F, 4.0F, 0.0F, 3.0F, 0.0F, true);
        this.mouth = new AdvancedModelBox(this, "mouth");
        this.mouth.setPos(0.0F, 0.0F, -3.0F);
        this.body.addChild(this.mouth);
        this.mouth.setTextureOffset(15, 16).addBox(0.0F, 0.0F, -1.0F, 0.0F, 4.0F, 2.0F, 0.0F, false);
        this.updateDefaultPose();
    }

    @Override
    public void renderToBuffer(PoseStack matrixStackIn, VertexConsumer bufferIn, int packedLightIn, int packedOverlayIn, float red, float green, float blue, float alpha) {
        if (this.f_102610_) {
            matrixStackIn.pushPose();
            matrixStackIn.scale(0.65F, 0.65F, 0.65F);
            matrixStackIn.translate(0.0, 0.95, 0.125);
            this.parts().forEach(p_228292_8_ -> p_228292_8_.render(matrixStackIn, bufferIn, packedLightIn, packedOverlayIn, red, green, blue, alpha));
            matrixStackIn.popPose();
        } else {
            matrixStackIn.pushPose();
            this.parts().forEach(p_228290_8_ -> p_228290_8_.render(matrixStackIn, bufferIn, packedLightIn, packedOverlayIn, red, green, blue, alpha));
            matrixStackIn.popPose();
        }
    }

    public void setupAnim(EntityFly entityIn, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch) {
        this.resetToDefaultPose();
        float flySpeed = 1.4F;
        float flyDegree = 0.8F;
        float idleSpeed = 1.4F;
        float idleDegree = 0.8F;
        this.walk(this.mouth, idleSpeed * 0.2F, idleDegree * 0.1F, false, -1.0F, 0.2F, ageInTicks, 1.0F);
        this.flap(this.mouth, idleSpeed * 0.2F, idleDegree * 0.05F, false, -2.0F, 0.0F, ageInTicks, 1.0F);
        boolean flag = entityIn.m_20096_() && entityIn.m_20184_().lengthSqr() < 1.0E-7;
        if (flag) {
            this.left_wing.rotateAngleZ = Maths.rad(-35.0);
            this.right_wing.rotateAngleZ = Maths.rad(35.0);
            this.swing(this.legs, flySpeed * 0.6F, flyDegree * 0.2F, false, 1.0F, 0.0F, limbSwing, limbSwingAmount);
        } else {
            this.flap(this.left_wing, flySpeed * 1.3F, flyDegree, true, 0.0F, 0.2F, ageInTicks, 1.0F);
            this.flap(this.right_wing, flySpeed * 1.3F, flyDegree, false, 0.0F, 0.2F, ageInTicks, 1.0F);
            this.walk(this.legs, flySpeed * 0.2F, flyDegree * 0.2F, false, 1.0F, 0.2F, ageInTicks, 1.0F);
        }
    }

    @Override
    public Iterable<BasicModelPart> parts() {
        return ImmutableList.of(this.root);
    }

    @Override
    public Iterable<AdvancedModelBox> getAllParts() {
        return ImmutableList.of(this.root, this.body, this.left_wing, this.right_wing, this.legs, this.mouth);
    }

    public void setRotationAngle(AdvancedModelBox advancedModelBox, float x, float y, float z) {
        advancedModelBox.rotateAngleX = x;
        advancedModelBox.rotateAngleY = y;
        advancedModelBox.rotateAngleZ = z;
    }
}