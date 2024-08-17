package com.github.alexthe666.alexsmobs.client.model;

import com.github.alexthe666.alexsmobs.entity.EntityGrizzlyBear;
import com.github.alexthe666.alexsmobs.entity.util.Maths;
import com.github.alexthe666.citadel.animation.IAnimatedEntity;
import com.github.alexthe666.citadel.client.model.AdvancedEntityModel;
import com.github.alexthe666.citadel.client.model.AdvancedModelBox;
import com.github.alexthe666.citadel.client.model.ModelAnimator;
import com.github.alexthe666.citadel.client.model.basic.BasicModelPart;
import com.google.common.collect.ImmutableList;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import net.minecraft.client.Minecraft;

public class ModelGrizzlyBear extends AdvancedEntityModel<EntityGrizzlyBear> {

    public final AdvancedModelBox root;

    public final AdvancedModelBox body;

    public final AdvancedModelBox midbody;

    public final AdvancedModelBox head;

    public final AdvancedModelBox snout;

    public final AdvancedModelBox left_ear;

    public final AdvancedModelBox right_ear;

    public final AdvancedModelBox left_leg;

    public final AdvancedModelBox right_leg;

    public final AdvancedModelBox left_arm;

    public final AdvancedModelBox right_arm;

    private final AdvancedModelBox hat;

    private final AdvancedModelBox microphone;

    public final ModelAnimator animator;

    public ModelGrizzlyBear() {
        this.texWidth = 128;
        this.texHeight = 128;
        this.root = new AdvancedModelBox(this, "root");
        this.root.setPos(0.0F, 24.0F, 0.0F);
        this.body = new AdvancedModelBox(this, "body");
        this.body.setPos(0.0F, -19.0F, 6.0F);
        this.root.addChild(this.body);
        this.body.setTextureOffset(0, 0).addBox(-7.0F, -7.0F, -19.0F, 14.0F, 15.0F, 28.0F, 0.0F, false);
        this.body.setTextureOffset(0, 44).addBox(-6.0F, 8.0F, -19.0F, 12.0F, 3.0F, 28.0F, 0.0F, false);
        this.midbody = new AdvancedModelBox(this, "midbody");
        this.midbody.setPos(0.0F, 0.5F, -4.0F);
        this.body.addChild(this.midbody);
        this.midbody.setTextureOffset(27, 99).addBox(-8.0F, -8.5F, -6.0F, 16.0F, 17.0F, 12.0F, 0.1F, false);
        this.head = new AdvancedModelBox(this, "head");
        this.head.setPos(0.0F, -0.8F, -21.0F);
        this.body.addChild(this.head);
        this.head.setTextureOffset(57, 0).addBox(-5.0F, -5.0F, -6.0F, 10.0F, 10.0F, 8.0F, 0.0F, false);
        this.snout = new AdvancedModelBox(this, "snout");
        this.snout.setPos(0.0F, 0.0F, -6.0F);
        this.head.addChild(this.snout);
        this.snout.setTextureOffset(0, 17).addBox(-2.0F, 0.0F, -5.0F, 4.0F, 5.0F, 5.0F, 0.0F, false);
        this.left_ear = new AdvancedModelBox(this, "left_ear");
        this.left_ear.setPos(3.5F, -5.0F, -3.0F);
        this.head.addChild(this.left_ear);
        this.left_ear.setTextureOffset(14, 17).addBox(-1.5F, -2.0F, -1.0F, 3.0F, 2.0F, 2.0F, 0.0F, false);
        this.right_ear = new AdvancedModelBox(this, "right_ear");
        this.right_ear.setPos(-3.5F, -5.0F, -3.0F);
        this.head.addChild(this.right_ear);
        this.right_ear.setTextureOffset(14, 17).addBox(-1.5F, -2.0F, -1.0F, 3.0F, 2.0F, 2.0F, 0.0F, true);
        this.left_leg = new AdvancedModelBox(this, "left_leg");
        this.left_leg.setPos(3.8F, 8.0F, 4.0F);
        this.body.addChild(this.left_leg);
        this.left_leg.setTextureOffset(0, 76).addBox(-3.0F, 0.0F, -3.0F, 6.0F, 11.0F, 8.0F, 0.0F, false);
        this.right_leg = new AdvancedModelBox(this, "right_leg");
        this.right_leg.setPos(-3.8F, 8.0F, 4.0F);
        this.body.addChild(this.right_leg);
        this.right_leg.setTextureOffset(0, 76).addBox(-3.0F, 0.0F, -3.0F, 6.0F, 11.0F, 8.0F, 0.0F, true);
        this.left_arm = new AdvancedModelBox(this, "left_arm");
        this.left_arm.setPos(4.5F, 4.0F, -13.0F);
        this.body.addChild(this.left_arm);
        this.left_arm.setTextureOffset(74, 78).addBox(-3.0F, -3.0F, -3.0F, 6.0F, 18.0F, 7.0F, 0.0F, false);
        this.right_arm = new AdvancedModelBox(this, "right_arm");
        this.right_arm.setPos(-4.5F, 4.0F, -13.0F);
        this.body.addChild(this.right_arm);
        this.right_arm.setTextureOffset(74, 78).addBox(-3.0F, -3.0F, -3.0F, 6.0F, 18.0F, 7.0F, 0.0F, true);
        this.hat = new AdvancedModelBox(this, "hat");
        this.hat.setRotationPoint(0.0F, -5.0F, -4.0F);
        this.head.addChild(this.hat);
        this.hat.setTextureOffset(0, 57).addBox(-3.0F, -1.0F, -1.0F, 6.0F, 1.0F, 6.0F, 0.0F, false);
        this.hat.setTextureOffset(0, 48).addBox(-2.0F, -5.0F, 0.0F, 4.0F, 4.0F, 4.0F, 0.0F, false);
        this.microphone = new AdvancedModelBox(this, "microphone");
        this.microphone.setRotationPoint(0.0F, 13.0F, -3.0F);
        this.right_arm.addChild(this.microphone);
        this.microphone.setTextureOffset(0, 0).addBox(-1.0F, -1.0F, -4.0F, 2.0F, 2.0F, 5.0F, 0.0F, false);
        this.microphone.setTextureOffset(15, 0).addBox(-1.5F, -1.5F, -6.0F, 3.0F, 3.0F, 3.0F, 0.0F, false);
        this.updateDefaultPose();
        this.animator = ModelAnimator.create();
    }

    public void animate(IAnimatedEntity entity, float f, float f1, float f2, float f3, float f4) {
        this.resetToDefaultPose();
        this.animator.update(entity);
        this.animator.setAnimation(EntityGrizzlyBear.ANIMATION_MAUL);
        this.animator.startKeyframe(4);
        this.animator.rotate(this.body, Maths.rad(6.0), 0.0F, 0.0F);
        this.animator.rotate(this.left_arm, Maths.rad(70.0), 0.0F, 0.0F);
        this.animator.rotate(this.right_arm, Maths.rad(-25.0), 0.0F, 0.0F);
        this.animator.endKeyframe();
        this.animator.startKeyframe(4);
        this.animator.rotate(this.body, Maths.rad(2.0), 0.0F, 0.0F);
        this.animator.rotate(this.left_arm, Maths.rad(-25.0), 0.0F, 0.0F);
        this.animator.rotate(this.right_arm, Maths.rad(70.0), 0.0F, 0.0F);
        this.animator.endKeyframe();
        this.animator.startKeyframe(4);
        this.animator.rotate(this.body, Maths.rad(6.0), 0.0F, 0.0F);
        this.animator.rotate(this.left_arm, Maths.rad(70.0), 0.0F, 0.0F);
        this.animator.rotate(this.right_arm, Maths.rad(-25.0), 0.0F, 0.0F);
        this.animator.endKeyframe();
        this.animator.startKeyframe(4);
        this.animator.rotate(this.body, Maths.rad(2.0), 0.0F, 0.0F);
        this.animator.rotate(this.left_arm, Maths.rad(-25.0), 0.0F, 0.0F);
        this.animator.rotate(this.right_arm, Maths.rad(70.0), 0.0F, 0.0F);
        this.animator.endKeyframe();
        this.animator.resetKeyframe(4);
        this.animator.endKeyframe();
        this.animator.setAnimation(EntityGrizzlyBear.ANIMATION_SWIPE_R);
        this.animator.startKeyframe(7);
        this.animator.rotate(this.body, 0.0F, Maths.rad(20.0), 0.0F);
        this.animator.rotate(this.midbody, 0.0F, Maths.rad(10.0), 0.0F);
        this.animator.rotate(this.head, 0.0F, 0.0F, Maths.rad(10.0));
        this.animator.rotate(this.left_arm, Maths.rad(65.0), 0.0F, Maths.rad(-100.0));
        this.animator.rotate(this.right_arm, Maths.rad(-15.0), 0.0F, Maths.rad(10.0));
        this.animator.endKeyframe();
        this.animator.startKeyframe(5);
        this.animator.rotate(this.body, 0.0F, Maths.rad(-30.0), 0.0F);
        this.animator.rotate(this.midbody, 0.0F, Maths.rad(-15.0), 0.0F);
        this.animator.rotate(this.head, 0.0F, 0.0F, Maths.rad(0.0));
        this.animator.rotate(this.left_arm, Maths.rad(20.0), 0.0F, Maths.rad(80.0));
        this.animator.rotate(this.right_arm, Maths.rad(-15.0), 0.0F, Maths.rad(20.0));
        this.animator.endKeyframe();
        this.animator.resetKeyframe(3);
        this.animator.setAnimation(EntityGrizzlyBear.ANIMATION_SWIPE_L);
        this.animator.startKeyframe(7);
        this.animator.rotate(this.body, 0.0F, Maths.rad(-20.0), 0.0F);
        this.animator.rotate(this.midbody, 0.0F, Maths.rad(-10.0), 0.0F);
        this.animator.rotate(this.head, 0.0F, 0.0F, Maths.rad(-10.0));
        this.animator.rotate(this.right_arm, Maths.rad(65.0), 0.0F, Maths.rad(100.0));
        this.animator.rotate(this.left_arm, Maths.rad(-15.0), 0.0F, Maths.rad(-10.0));
        this.animator.endKeyframe();
        this.animator.startKeyframe(5);
        this.animator.rotate(this.body, 0.0F, Maths.rad(30.0), 0.0F);
        this.animator.rotate(this.midbody, 0.0F, Maths.rad(15.0), 0.0F);
        this.animator.rotate(this.head, 0.0F, 0.0F, Maths.rad(0.0));
        this.animator.rotate(this.right_arm, Maths.rad(-20.0), 0.0F, Maths.rad(-80.0));
        this.animator.rotate(this.left_arm, Maths.rad(15.0), 0.0F, Maths.rad(-20.0));
        this.animator.endKeyframe();
        this.animator.resetKeyframe(3);
        this.animator.setAnimation(EntityGrizzlyBear.ANIMATION_SNIFF);
        this.animator.startKeyframe(3);
        this.animator.rotate(this.head, Maths.rad(20.0), Maths.rad(3.0), 0.0F);
        this.animator.endKeyframe();
        this.animator.startKeyframe(3);
        this.animator.rotate(this.head, Maths.rad(-10.0), 0.0F, 0.0F);
        this.animator.endKeyframe();
        this.animator.startKeyframe(3);
        this.animator.rotate(this.head, Maths.rad(20.0), Maths.rad(-3.0), 0.0F);
        this.animator.endKeyframe();
        this.animator.resetKeyframe(3);
        this.animator.endKeyframe();
    }

    @Override
    public void renderToBuffer(PoseStack matrixStackIn, VertexConsumer bufferIn, int packedLightIn, int packedOverlayIn, float red, float green, float blue, float alpha) {
        if (this.f_102610_) {
            float f = 1.75F;
            this.head.setScale(f, f, f);
            this.head.setShouldScaleChildren(true);
            matrixStackIn.pushPose();
            matrixStackIn.scale(0.35F, 0.35F, 0.35F);
            matrixStackIn.translate(0.0, 2.75, 0.125);
            this.parts().forEach(p_228292_8_ -> p_228292_8_.render(matrixStackIn, bufferIn, packedLightIn, packedOverlayIn, red, green, blue, alpha));
            matrixStackIn.popPose();
            this.head.setScale(1.0F, 1.0F, 1.0F);
        } else {
            matrixStackIn.pushPose();
            this.parts().forEach(p_228290_8_ -> p_228290_8_.render(matrixStackIn, bufferIn, packedLightIn, packedOverlayIn, red, green, blue, alpha));
            matrixStackIn.popPose();
        }
    }

    public void setupAnim(EntityGrizzlyBear entityIn, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch) {
        this.resetToDefaultPose();
        this.head.setShouldScaleChildren(true);
        this.animate(entityIn, limbSwing, limbSwingAmount, ageInTicks, netHeadYaw, headPitch);
        float walkSpeed = 0.7F;
        float walkDegree = 0.7F;
        float eatSpeed = 0.8F;
        float eatDegree = 0.3F;
        float partialTick = Minecraft.getInstance().getFrameTime();
        float sitProgress = entityIn.prevSitProgress + (entityIn.sitProgress - entityIn.prevSitProgress) * partialTick;
        float standProgress = entityIn.prevStandProgress + (entityIn.standProgress - entityIn.prevStandProgress) * partialTick;
        this.progressRotationPrev(this.body, sitProgress, Maths.rad(-80.0), 0.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.head, sitProgress, Maths.rad(80.0), 0.0F, 0.0F, 10.0F);
        this.progressPositionPrev(this.body, sitProgress, 0.0F, 10.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.left_leg, sitProgress, 0.0F, Maths.rad(10.0), Maths.rad(-30.0), 10.0F);
        this.progressRotationPrev(this.right_leg, sitProgress, 0.0F, Maths.rad(-10.0), Maths.rad(30.0), 10.0F);
        this.progressRotationPrev(this.left_arm, sitProgress, Maths.rad(25.0), Maths.rad(10.0), 0.0F, 10.0F);
        this.progressRotationPrev(this.right_arm, sitProgress, Maths.rad(25.0), Maths.rad(-10.0), 0.0F, 10.0F);
        this.progressPositionPrev(this.head, sitProgress, 0.0F, 4.0F, -1.0F, 10.0F);
        if (Math.max(standProgress, sitProgress) > 5.0F) {
            this.head.rotateAngleZ += netHeadYaw * (float) (Math.PI / 180.0);
        } else {
            this.head.rotateAngleY += netHeadYaw * (float) (Math.PI / 180.0);
        }
        this.head.rotateAngleX += headPitch * (float) (Math.PI / 180.0);
        if (entityIn.isFreddy()) {
            if (standProgress > 0.0F) {
                this.walk(this.right_arm, walkSpeed, walkDegree, false, 0.0F, 0.0F, limbSwing, limbSwingAmount);
                this.walk(this.left_arm, walkSpeed, walkDegree, true, 0.0F, 0.0F, limbSwing, limbSwingAmount);
            }
            this.head.setScale(1.2F, 1.2F, 1.2F);
            this.snout.setScale(1.4F, 1.0F, 1.0F);
            this.progressPositionPrev(this.snout, 10.0F, 0.0F, 0.0F, 2.0F, 10.0F);
            this.progressPositionPrev(this.head, standProgress, 0.0F, -0.5F, -3.0F, 10.0F);
            this.progressPositionPrev(this.body, standProgress, 0.0F, 0.0F, -5.0F, 10.0F);
            this.progressRotationPrev(this.body, standProgress, Maths.rad(-90.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.head, standProgress, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.left_arm, standProgress, Maths.rad(80.0), Maths.rad(15.0), 0.0F, 10.0F);
            this.progressRotationPrev(this.right_arm, standProgress, Maths.rad(80.0), Maths.rad(-15.0), 0.0F, 10.0F);
            this.progressPositionPrev(this.left_arm, standProgress, 2.0F, 0.0F, 0.0F, 10.0F);
            this.progressPositionPrev(this.right_arm, standProgress, -2.0F, 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.left_leg, standProgress, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.right_leg, standProgress, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
            this.progressPositionPrev(this.left_leg, standProgress, 0.0F, -4.0F, 4.0F, 10.0F);
            this.progressPositionPrev(this.right_leg, standProgress, 0.0F, -4.0F, 4.0F, 10.0F);
        } else {
            this.head.setScale(1.0F, 1.0F, 1.0F);
            this.snout.setScale(1.0F, 1.0F, 1.0F);
            this.progressRotationPrev(this.left_leg, standProgress, Maths.rad(80.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.right_leg, standProgress, Maths.rad(80.0), 0.0F, 0.0F, 10.0F);
            this.progressPositionPrev(this.left_leg, standProgress, 0.0F, -4.0F, 4.0F, 10.0F);
            this.progressPositionPrev(this.right_leg, standProgress, 0.0F, -4.0F, 4.0F, 10.0F);
            this.progressPositionPrev(this.head, standProgress, 0.0F, 0.0F, 2.0F, 10.0F);
            this.progressPositionPrev(this.body, standProgress, 0.0F, -1.0F, -5.0F, 10.0F);
            this.progressPositionPrev(this.head, standProgress, 0.0F, 1.0F, -3.0F, 10.0F);
            this.progressRotationPrev(this.body, standProgress, Maths.rad(-80.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.head, standProgress, Maths.rad(80.0), 0.0F, 0.0F, 10.0F);
            this.progressRotationPrev(this.left_arm, standProgress, Maths.rad(35.0), Maths.rad(-10.0), 0.0F, 10.0F);
            this.progressRotationPrev(this.right_arm, standProgress, Maths.rad(35.0), Maths.rad(10.0), 0.0F, 10.0F);
        }
        this.walk(this.left_leg, walkSpeed, walkDegree, false, 0.0F, 0.0F, limbSwing, limbSwingAmount);
        this.bob(this.left_leg, walkSpeed, walkDegree, false, limbSwing, limbSwingAmount);
        this.walk(this.right_leg, walkSpeed, walkDegree, true, 0.0F, 0.0F, limbSwing, limbSwingAmount);
        this.bob(this.left_leg, walkSpeed, walkDegree, false, limbSwing, limbSwingAmount);
        if (standProgress == 0.0F && sitProgress == 0.0F) {
            this.walk(this.right_arm, walkSpeed, walkDegree, false, 0.0F, 0.0F, limbSwing, limbSwingAmount);
            this.walk(this.left_arm, walkSpeed, walkDegree, true, 0.0F, 0.0F, limbSwing, limbSwingAmount);
            this.flap(this.midbody, walkSpeed, walkDegree * 0.2F, false, 1.0F, 0.0F, limbSwing, limbSwingAmount);
            this.flap(this.body, walkSpeed, walkDegree * 0.2F, false, 2.0F, 0.0F, limbSwing, limbSwingAmount);
        } else {
            this.walk(this.right_arm, walkSpeed, walkDegree * 0.1F, false, 0.0F, 0.0F, limbSwing, limbSwingAmount);
            this.walk(this.left_arm, walkSpeed, walkDegree * 0.1F, true, 0.0F, 0.0F, limbSwing, limbSwingAmount);
            if (entityIn.isEating()) {
                this.walk(this.right_arm, eatSpeed, eatDegree, true, 1.0F, 0.6F, ageInTicks, 1.0F);
                this.walk(this.left_arm, eatSpeed, eatDegree, true, 1.0F, 0.6F, ageInTicks, 1.0F);
                this.walk(this.body, eatSpeed, eatDegree * 0.1F, true, 2.0F, 0.1F, ageInTicks, 1.0F);
                this.walk(this.head, eatSpeed, eatDegree * 0.3F, false, 1.0F, 0.3F, ageInTicks, 1.0F);
            }
        }
        this.flap(this.head, walkSpeed, walkDegree * -0.1F, false, 2.0F, 0.0F, limbSwing, limbSwingAmount);
        this.bob(this.body, walkSpeed, walkDegree, true, limbSwing, limbSwingAmount);
    }

    @Override
    public Iterable<BasicModelPart> parts() {
        return ImmutableList.of(this.root);
    }

    @Override
    public Iterable<AdvancedModelBox> getAllParts() {
        return ImmutableList.of(this.root, this.body, this.right_arm, this.left_arm, this.head, this.left_ear, this.right_ear, this.snout, this.midbody, this.left_leg, this.right_leg, this.microphone, new AdvancedModelBox[] { this.hat });
    }

    public void positionForParticle(float partialTicks, float ageInTicks) {
        this.resetToDefaultPose();
        float walkSpeed = 0.7F;
        float walkDegree = 0.7F;
        this.walk(this.head, walkSpeed, walkDegree * 0.2F, false, 1.0F, -0.4F, ageInTicks, 1.0F);
        this.walk(this.right_arm, walkSpeed, walkDegree, false, 1.0F, 0.0F, ageInTicks, 1.0F);
        this.walk(this.left_arm, walkSpeed, walkDegree, true, 1.0F, 0.0F, ageInTicks, 1.0F);
        this.swing(this.right_arm, walkSpeed, walkDegree, false, 2.0F, -1.7F, ageInTicks, 1.0F);
        this.swing(this.left_arm, walkSpeed, walkDegree, false, 2.0F, 1.7F, ageInTicks, 1.0F);
        this.progressPositionPrev(this.snout, 10.0F, 0.0F, 0.0F, 2.0F, 10.0F);
        this.progressPositionPrev(this.head, 10.0F, 0.0F, -0.5F, -3.0F, 10.0F);
        this.progressPositionPrev(this.body, 10.0F, 0.0F, 0.0F, -5.0F, 10.0F);
        this.progressRotationPrev(this.body, 10.0F, Maths.rad(-90.0), 0.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.head, 10.0F, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.left_arm, 10.0F, Maths.rad(80.0), Maths.rad(15.0), 0.0F, 10.0F);
        this.progressRotationPrev(this.right_arm, 10.0F, Maths.rad(80.0), Maths.rad(-15.0), 0.0F, 10.0F);
        this.progressPositionPrev(this.left_arm, 10.0F, 2.0F, 0.0F, 0.0F, 10.0F);
        this.progressPositionPrev(this.right_arm, 10.0F, -2.0F, 0.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.left_leg, 10.0F, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
        this.progressRotationPrev(this.right_leg, 10.0F, Maths.rad(90.0), 0.0F, 0.0F, 10.0F);
        this.progressPositionPrev(this.left_leg, 10.0F, 0.0F, -4.0F, 4.0F, 10.0F);
        this.progressPositionPrev(this.right_leg, 10.0F, 0.0F, -4.0F, 4.0F, 10.0F);
    }

    public void setRotationAngle(AdvancedModelBox box, float x, float y, float z) {
        box.rotateAngleX = x;
        box.rotateAngleY = y;
        box.rotateAngleZ = z;
    }
}