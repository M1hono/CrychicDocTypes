package com.github.alexthe666.iceandfire.client.model;

import com.github.alexthe666.citadel.animation.IAnimatedEntity;
import com.github.alexthe666.citadel.client.model.AdvancedModelBox;
import com.github.alexthe666.citadel.client.model.ModelAnimator;
import com.github.alexthe666.citadel.client.model.basic.BasicModelPart;
import com.github.alexthe666.iceandfire.entity.EntityCyclops;
import com.google.common.collect.ImmutableList;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.world.entity.Entity;

public class ModelCyclops extends ModelDragonBase<EntityCyclops> {

    public AdvancedModelBox body;

    public AdvancedModelBox UpperBody;

    public AdvancedModelBox Loin;

    public AdvancedModelBox rightleg;

    public AdvancedModelBox leftleg;

    public AdvancedModelBox Head;

    public AdvancedModelBox rightarm;

    public AdvancedModelBox leftarm;

    public AdvancedModelBox Belly;

    public AdvancedModelBox Chest;

    public AdvancedModelBox Eye;

    public AdvancedModelBox Horn;

    public AdvancedModelBox rightear;

    public AdvancedModelBox Leftear;

    public AdvancedModelBox Jaw;

    public AdvancedModelBox topTeethL;

    public AdvancedModelBox topTeethR;

    public AdvancedModelBox Eye_1;

    public AdvancedModelBox Horn2;

    public AdvancedModelBox bottomTeethR;

    public AdvancedModelBox bottomTeethL;

    public AdvancedModelBox rightarm2;

    public AdvancedModelBox leftarm2;

    public AdvancedModelBox LoinBack;

    public AdvancedModelBox rightleg2;

    public AdvancedModelBox leftleg2;

    private final ModelAnimator animator;

    public ModelCyclops() {
        this.texWidth = 128;
        this.texHeight = 128;
        this.rightear = new AdvancedModelBox(this, 0, 7);
        this.rightear.setPos(-4.5F, -2.7F, -1.1F);
        this.rightear.addBox(-1.0F, -2.7F, -1.3F, 1.0F, 4.0F, 2.0F, 0.0F);
        this.setRotateAngle(this.rightear, -0.06981317F, (float) (-Math.PI / 6), 0.0F);
        this.Eye_1 = new AdvancedModelBox(this, 8, 6);
        this.Eye_1.setPos(0.0F, 0.0F, 0.0F);
        this.Eye_1.addBox(-1.5F, -1.5F, -4.6F, 3.0F, 3.0F, 1.0F, 0.0F);
        this.Horn2 = new AdvancedModelBox(this, 17, 0);
        this.Horn2.setPos(0.0F, -5.0F, 0.5F);
        this.Horn2.addBox(-1.0F, -2.9F, -3.3F, 2.0F, 3.0F, 2.0F, 0.0F);
        this.UpperBody = new AdvancedModelBox(this, 85, 21);
        this.UpperBody.setPos(0.0F, -6.0F, 0.5F);
        this.UpperBody.addBox(-6.0F, -13.9F, -4.1F, 12.0F, 14.0F, 9.0F, 0.0F);
        this.topTeethL = new AdvancedModelBox(this, 90, 70);
        this.topTeethL.mirror = true;
        this.topTeethL.setPos(0.0F, 2.3F, 0.3F);
        this.topTeethL.addBox(-0.6F, -0.5F, -6.2F, 5.0F, 1.0F, 6.0F, 0.0F);
        this.body = new AdvancedModelBox(this, 88, 46);
        this.body.setPos(0.0F, -3.5F, 0.0F);
        this.body.addBox(-5.0F, -7.0F, -3.0F, 10.0F, 9.0F, 8.0F, 0.0F);
        this.Belly = new AdvancedModelBox(this, 35, 25);
        this.Belly.mirror = true;
        this.Belly.setPos(0.0F, -2.3F, -0.2F);
        this.Belly.addBox(-4.5F, -2.0F, -4.8F, 9.0F, 13.0F, 3.0F, 0.0F);
        this.setRotateAngle(this.Belly, 0.045553092F, 0.0F, 0.0F);
        this.Loin = new AdvancedModelBox(this, 52, 49);
        this.Loin.setPos(0.0F, 0.0F, 0.0F);
        this.Loin.addBox(-5.5F, 0.0F, -4.1F, 11.0F, 16.0F, 5.0F, 0.0F);
        this.leftleg2 = new AdvancedModelBox(this, 0, 15);
        this.leftleg2.mirror = true;
        this.leftleg2.setPos(0.0F, 10.0F, 0.2F);
        this.leftleg2.addBox(-3.0F, 1.0F, -3.0F, 6.0F, 15.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.leftleg2, 0.0F, 0.0F, (float) (Math.PI / 180.0));
        this.bottomTeethL = new AdvancedModelBox(this, 90, 70);
        this.bottomTeethL.mirror = true;
        this.bottomTeethL.setPos(0.0F, 2.3F, 0.3F);
        this.bottomTeethL.addBox(-0.2F, -3.7F, -6.6F, 5.0F, 1.0F, 6.0F, 0.0F);
        this.LoinBack = new AdvancedModelBox(this, 49, 45);
        this.LoinBack.setPos(0.0F, 0.0F, 0.0F);
        this.LoinBack.addBox(-5.5F, 0.0F, -5.6F, 11.0F, 16.0F, 8.0F, 0.0F);
        this.setRotateAngle(this.LoinBack, 0.0F, (float) -Math.PI, 0.0F);
        this.Leftear = new AdvancedModelBox(this, 0, 7);
        this.Leftear.mirror = true;
        this.Leftear.setPos(4.5F, -2.7F, -1.1F);
        this.Leftear.addBox(0.0F, -2.7F, -1.3F, 1.0F, 4.0F, 2.0F, 0.0F);
        this.setRotateAngle(this.Leftear, -0.06981317F, (float) (Math.PI / 6), 0.0F);
        this.Chest = new AdvancedModelBox(this, 93, 30);
        this.Chest.mirror = true;
        this.Chest.setPos(0.0F, -9.7F, -0.1F);
        this.Chest.addBox(-5.0F, -2.0F, -4.8F, 10.0F, 5.0F, 2.0F, 0.0F);
        this.leftarm = new AdvancedModelBox(this, 64, 0);
        this.leftarm.mirror = true;
        this.leftarm.setPos(5.0F, -11.2F, -0.4F);
        this.leftarm.addBox(0.0F, -2.0F, -2.0F, 6.0F, 13.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.leftarm, 0.045553092F, 0.0F, (float) (-Math.PI / 18));
        this.Horn = new AdvancedModelBox(this, 29, 0);
        this.Horn.setPos(0.0F, -5.7F, -1.2F);
        this.Horn.addBox(-1.5F, -5.6F, -2.8F, 3.0F, 3.0F, 3.0F, 0.0F);
        this.setRotateAngle(this.Horn, 0.4553564F, 0.0F, 0.0F);
        this.Jaw = new AdvancedModelBox(this, 90, 80);
        this.Jaw.setPos(0.0F, 2.3F, 0.3F);
        this.Jaw.addBox(-5.0F, -0.5F, -6.6F, 10.0F, 2.0F, 9.0F, 0.0F);
        this.setRotateAngle(this.Jaw, 0.091106184F, 0.0F, 0.0F);
        this.Eye = new AdvancedModelBox(this, 0, 0);
        this.Eye.setPos(0.0F, -5.1F, -2.3F);
        this.Eye.addBox(-2.5F, -2.0F, -4.4F, 5.0F, 4.0F, 1.0F, 0.0F);
        this.setRotateAngle(this.Eye, 0.091106184F, 0.0F, 0.0F);
        this.rightarm2 = new AdvancedModelBox(this, 60, 22);
        this.rightarm2.setPos(-3.1F, 10.0F, 0.1F);
        this.rightarm2.addBox(-3.0F, -2.0F, -1.7F, 5.0F, 15.0F, 5.0F, 0.0F);
        this.setRotateAngle(this.rightarm2, -0.08726646F, 0.0F, 0.0F);
        this.leftleg = new AdvancedModelBox(this, 0, 45);
        this.leftleg.mirror = true;
        this.leftleg.setPos(4.0F, 1.2F, 1.0F);
        this.leftleg.addBox(-3.0F, 1.0F, -3.0F, 6.0F, 13.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.leftleg, 0.0F, 0.0F, (float) (-Math.PI / 180.0));
        this.Head = new AdvancedModelBox(this, 90, 0);
        this.Head.setPos(0.0F, -16.1F, 0.6F);
        this.Head.addBox(-4.5F, -8.0F, -6.0F, 9.0F, 10.0F, 9.0F, 0.0F);
        this.bottomTeethR = new AdvancedModelBox(this, 90, 70);
        this.bottomTeethR.setPos(0.0F, 2.3F, 0.3F);
        this.bottomTeethR.addBox(-4.6F, -3.7F, -6.6F, 5.0F, 1.0F, 6.0F, 0.0F);
        this.topTeethR = new AdvancedModelBox(this, 90, 70);
        this.topTeethR.setPos(0.0F, 2.3F, 0.3F);
        this.topTeethR.addBox(-4.3F, -0.5F, -6.2F, 5.0F, 1.0F, 6.0F, 0.0F);
        this.rightleg2 = new AdvancedModelBox(this, 0, 15);
        this.rightleg2.setPos(0.0F, 10.0F, 0.2F);
        this.rightleg2.addBox(-3.0F, 1.0F, -3.0F, 6.0F, 15.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.rightleg2, 0.0F, 0.0F, (float) (-Math.PI / 180.0));
        this.leftarm2 = new AdvancedModelBox(this, 60, 22);
        this.leftarm2.mirror = true;
        this.leftarm2.setPos(3.1F, 10.0F, -0.1F);
        this.leftarm2.addBox(-2.0F, -2.0F, -1.7F, 5.0F, 15.0F, 5.0F, 0.0F);
        this.setRotateAngle(this.leftarm2, -0.08726646F, 0.0F, 0.0F);
        this.rightleg = new AdvancedModelBox(this, 0, 45);
        this.rightleg.setPos(-4.0F, 1.2F, 1.0F);
        this.rightleg.addBox(-3.0F, 1.0F, -3.0F, 6.0F, 13.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.rightleg, 0.0F, 0.0F, (float) (Math.PI / 180.0));
        this.rightarm = new AdvancedModelBox(this, 64, 0);
        this.rightarm.setPos(-5.0F, -11.2F, -0.4F);
        this.rightarm.addBox(-6.0F, -2.0F, -2.0F, 6.0F, 13.0F, 6.0F, 0.0F);
        this.setRotateAngle(this.rightarm, 0.0F, 0.0F, (float) (Math.PI / 18));
        this.Head.addChild(this.rightear);
        this.Eye.addChild(this.Eye_1);
        this.Horn.addChild(this.Horn2);
        this.body.addChild(this.UpperBody);
        this.Head.addChild(this.topTeethL);
        this.UpperBody.addChild(this.Belly);
        this.body.addChild(this.Loin);
        this.leftleg.addChild(this.leftleg2);
        this.Jaw.addChild(this.bottomTeethL);
        this.Loin.addChild(this.LoinBack);
        this.Head.addChild(this.Leftear);
        this.UpperBody.addChild(this.Chest);
        this.UpperBody.addChild(this.leftarm);
        this.Head.addChild(this.Horn);
        this.Head.addChild(this.Jaw);
        this.Head.addChild(this.Eye);
        this.rightarm.addChild(this.rightarm2);
        this.body.addChild(this.leftleg);
        this.UpperBody.addChild(this.Head);
        this.Jaw.addChild(this.bottomTeethR);
        this.Head.addChild(this.topTeethR);
        this.rightleg.addChild(this.rightleg2);
        this.leftarm.addChild(this.leftarm2);
        this.body.addChild(this.rightleg);
        this.UpperBody.addChild(this.rightarm);
        this.animator = ModelAnimator.create();
        this.updateDefaultPose();
    }

    @Override
    public Iterable<BasicModelPart> parts() {
        return ImmutableList.of(this.body);
    }

    @Override
    public Iterable<AdvancedModelBox> getAllParts() {
        return ImmutableList.of(this.body, this.UpperBody, this.Loin, this.rightleg, this.leftleg, this.Head, this.rightarm, this.leftarm, this.Belly, this.Chest, this.Eye, this.Horn, new AdvancedModelBox[] { this.rightear, this.Leftear, this.Jaw, this.topTeethL, this.topTeethR, this.Eye_1, this.Horn2, this.bottomTeethR, this.bottomTeethL, this.rightarm2, this.leftarm2, this.LoinBack, this.rightleg2, this.leftleg2 });
    }

    public void animate(IAnimatedEntity entity, float f, float f1, float f2, float f3, float f4) {
        this.resetToDefaultPose();
        this.animator.update(entity);
        if (this.animator.setAnimation(EntityCyclops.ANIMATION_STOMP)) {
            this.animator.startKeyframe(7);
            this.rotate(this.animator, this.rightleg, -62.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg2, 46.0F, 0.0F, 0.0F);
            this.animator.move(this.rightleg2, 0.0F, 1.1F, -1.7F);
            this.rotate(this.animator, this.leftleg, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg2, 10.0F, 0.0F, 0.0F);
            this.animator.move(this.leftleg2, 0.0F, 0.0F, -0.3F);
            this.rotate(this.animator, this.body, -15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.UpperBody, 7.0F, 0.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.setStaticKeyframe(5);
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 5.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.UpperBody, 7.5F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg, -46.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg2, 36.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, 7.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg2, 2.0F, 0.0F, 0.0F);
            this.animator.move(this.rightleg2, 0.0F, 1.1F, -0.9F);
            this.animator.move(this.body, 0.0F, 1.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.resetKeyframe(10);
        }
        if (this.animator.setAnimation(EntityCyclops.ANIMATION_KICK)) {
            this.animator.startKeyframe(10);
            this.rotate(this.animator, this.body, 3.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, 13.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg2, 18.0F, 0.0F, 0.0F);
            this.animator.move(this.leftleg2, 0.0F, 1.0F, -0.9F);
            this.rotate(this.animator, this.rightleg, -26.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg2, 23.0F, 0.0F, 0.0F);
            this.animator.move(this.leftleg2, 0.0F, 1.2F, -1.1F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, -2.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg, -55.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg2, 18.0F, 0.0F, 0.0F);
            this.animator.move(this.leftleg2, 0.0F, 2.0F, -0.5F);
            this.rotate(this.animator, this.leftleg, 10.0F, 0.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.resetKeyframe(5);
        }
        if (this.animator.setAnimation(EntityCyclops.ANIMATION_EATPLAYER)) {
            this.animator.startKeyframe(10);
            this.animator.move(this.body, 0.0F, 7.0F, 0.0F);
            this.rotate(this.animator, this.body, 25.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -7.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg, -85.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightleg2, 50.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg2, 52.0F, 0.0F, 0.0F);
            this.animator.move(this.leftleg2, 0.0F, 1.1F, -2.0F);
            this.animator.move(this.rightleg2, 0.0F, 1.0F, -2.0F);
            this.rotate(this.animator, this.UpperBody, 40.0F, 0.0F, 0.0F);
            this.animator.move(this.UpperBody, 0.0F, 1.7F, 0.0F);
            this.rotate(this.animator, this.rightarm, -80.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm, -80.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm2, 0.0F, 0.0F, -23.0F);
            this.rotate(this.animator, this.leftarm2, 0.0F, 0.0F, 23.0F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(15);
            this.rotate(this.animator, this.rightarm, -40.0F, -25.0F, 40.0F);
            this.rotate(this.animator, this.rightarm2, -120.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm, -40.0F, 25.0F, -40.0F);
            this.rotate(this.animator, this.leftarm2, -120.0F, 0.0F, 0.0F);
            this.animator.move(this.rightarm2, 0.0F, 1.2F, 1.4F);
            this.animator.move(this.leftarm2, 0.0F, 1.2F, 1.4F);
            this.rotate(this.animator, this.Head, -25.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, -0.5F, 0.0F);
            this.rotate(this.animator, this.Jaw, 5.0F, 0.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.rightarm, -40.0F, -25.0F, 40.0F);
            this.rotate(this.animator, this.rightarm2, -120.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm, -40.0F, 25.0F, -40.0F);
            this.rotate(this.animator, this.leftarm2, -120.0F, 0.0F, 0.0F);
            this.animator.move(this.rightarm2, 0.0F, 1.2F, 1.4F);
            this.animator.move(this.leftarm2, 0.0F, 1.2F, 1.4F);
            this.rotate(this.animator, this.Head, -48.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, -0.8F, 0.0F);
            this.rotate(this.animator, this.Jaw, 57.0F, 0.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.rightarm, -40.0F, -25.0F, 40.0F);
            this.rotate(this.animator, this.rightarm2, -120.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm, -40.0F, 25.0F, -40.0F);
            this.rotate(this.animator, this.leftarm2, -120.0F, 0.0F, 0.0F);
            this.animator.move(this.rightarm2, 0.0F, 1.2F, 1.4F);
            this.animator.move(this.leftarm2, 0.0F, 1.2F, 1.4F);
            this.rotate(this.animator, this.Head, -25.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, -0.5F, 0.0F);
            this.rotate(this.animator, this.Jaw, 5.0F, 0.0F, 0.0F);
            this.animator.endKeyframe();
            this.animator.resetKeyframe(5);
        }
        if (this.animator.setAnimation(EntityCyclops.ANIMATION_ROAR)) {
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -20.0F, -15.0F, -15.0F);
            this.rotate(this.animator, this.leftleg2, 15.0F, 0.0F, 15.0F);
            this.rotate(this.animator, this.rightleg, -20.0F, 15.0F, 15.0F);
            this.rotate(this.animator, this.rightleg2, 15.0F, 0.0F, -15.0F);
            this.animator.move(this.leftleg2, -0.4F, 1.5F, -0.5F);
            this.animator.move(this.rightleg2, 0.4F, 1.5F, -0.5F);
            this.rotate(this.animator, this.UpperBody, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.Head, -25.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm, -25.0F, 35.0F, 25.0F);
            this.rotate(this.animator, this.leftarm, -25.0F, -35.0F, -25.0F);
            this.rotate(this.animator, this.rightarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm2, -28.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, 0.0F, -0.5F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -20.0F, -15.0F, -15.0F);
            this.rotate(this.animator, this.leftleg2, 15.0F, 0.0F, 15.0F);
            this.rotate(this.animator, this.rightleg, -20.0F, 15.0F, 15.0F);
            this.rotate(this.animator, this.rightleg2, 15.0F, 0.0F, -15.0F);
            this.animator.move(this.leftleg2, -0.4F, 1.5F, -0.5F);
            this.animator.move(this.rightleg2, 0.4F, 1.5F, -0.5F);
            this.rotate(this.animator, this.UpperBody, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm, -25.0F, 35.0F, 25.0F);
            this.rotate(this.animator, this.leftarm, -25.0F, -35.0F, -25.0F);
            this.rotate(this.animator, this.rightarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.Head, -45.0F, 20.0F, 0.0F);
            this.rotate(this.animator, this.Jaw, 45.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, 0.0F, -0.5F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -20.0F, -15.0F, -15.0F);
            this.rotate(this.animator, this.leftleg2, 15.0F, 0.0F, 15.0F);
            this.rotate(this.animator, this.rightleg, -20.0F, 15.0F, 15.0F);
            this.rotate(this.animator, this.rightleg2, 15.0F, 0.0F, -15.0F);
            this.animator.move(this.leftleg2, -0.4F, 1.5F, -0.5F);
            this.animator.move(this.rightleg2, 0.4F, 1.5F, -0.5F);
            this.rotate(this.animator, this.UpperBody, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm, -25.0F, 35.0F, 25.0F);
            this.rotate(this.animator, this.leftarm, -25.0F, -35.0F, -25.0F);
            this.rotate(this.animator, this.rightarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.Head, -45.0F, -20.0F, 0.0F);
            this.rotate(this.animator, this.Jaw, 45.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, 0.0F, -0.5F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -20.0F, -15.0F, -15.0F);
            this.rotate(this.animator, this.leftleg2, 15.0F, 0.0F, 15.0F);
            this.rotate(this.animator, this.rightleg, -20.0F, 15.0F, 15.0F);
            this.rotate(this.animator, this.rightleg2, 15.0F, 0.0F, -15.0F);
            this.animator.move(this.leftleg2, -0.4F, 1.5F, -0.5F);
            this.animator.move(this.rightleg2, 0.4F, 1.5F, -0.5F);
            this.rotate(this.animator, this.UpperBody, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm, -25.0F, 35.0F, 25.0F);
            this.rotate(this.animator, this.leftarm, -25.0F, -35.0F, -25.0F);
            this.rotate(this.animator, this.rightarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.Head, -45.0F, 20.0F, 0.0F);
            this.rotate(this.animator, this.Jaw, 45.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, 0.0F, -0.5F);
            this.animator.endKeyframe();
            this.animator.startKeyframe(5);
            this.rotate(this.animator, this.body, 15.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftleg, -20.0F, -15.0F, -15.0F);
            this.rotate(this.animator, this.leftleg2, 15.0F, 0.0F, 15.0F);
            this.rotate(this.animator, this.rightleg, -20.0F, 15.0F, 15.0F);
            this.rotate(this.animator, this.rightleg2, 15.0F, 0.0F, -15.0F);
            this.animator.move(this.leftleg2, -0.4F, 1.5F, -0.5F);
            this.animator.move(this.rightleg2, 0.4F, 1.5F, -0.5F);
            this.rotate(this.animator, this.UpperBody, 10.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.rightarm, -25.0F, 35.0F, 25.0F);
            this.rotate(this.animator, this.leftarm, -25.0F, -35.0F, -25.0F);
            this.rotate(this.animator, this.rightarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.leftarm2, -28.0F, 0.0F, 0.0F);
            this.rotate(this.animator, this.Head, -45.0F, -20.0F, 0.0F);
            this.rotate(this.animator, this.Jaw, 45.0F, 0.0F, 0.0F);
            this.animator.move(this.Head, 0.0F, 0.0F, -0.5F);
            this.animator.endKeyframe();
            this.animator.resetKeyframe(5);
            this.Loin.rotateAngleX = Math.min(0.0F, Math.min(this.leftleg.rotateAngleX, this.rightleg.rotateAngleX));
            this.LoinBack.rotateAngleX = this.Loin.rotateAngleX - Math.max(this.leftleg.rotateAngleX, this.rightleg.rotateAngleX);
        }
    }

    public void setupAnim(EntityCyclops entity, float f, float f1, float f2, float f3, float f4) {
        this.animate(entity, f, f1, f2, f3, f4);
        float speed_walk = 0.2F;
        float speed_idle = 0.05F;
        float degree_walk = 0.75F;
        float degree_idle = 0.5F;
        this.walk(this.rightleg, speed_walk, degree_walk * -0.75F, true, 0.0F, 0.0F, f, f1);
        this.walk(this.leftleg, speed_walk, degree_walk * -0.75F, false, 0.0F, 0.0F, f, f1);
        this.walk(this.rightleg2, speed_walk, degree_walk * -0.5F, true, 1.0F, -0.3F, f, f1);
        this.walk(this.leftleg2, speed_walk, degree_walk * -0.5F, false, 1.0F, 0.3F, f, f1);
        this.walk(this.rightarm, speed_walk, degree_walk * -0.75F, false, 0.0F, 0.0F, f, f1);
        this.walk(this.leftarm, speed_walk, degree_walk * -0.75F, true, 0.0F, 0.0F, f, f1);
        this.walk(this.rightarm2, speed_walk, degree_walk * -0.5F, false, 1.0F, -0.3F, f, f1);
        this.walk(this.leftarm2, speed_walk, degree_walk * -0.5F, true, 1.0F, 0.3F, f, f1);
        this.swing(this.body, speed_walk, degree_walk * -0.5F, false, 0.0F, 0.0F, f, f1);
        this.swing(this.UpperBody, speed_walk, degree_walk * -0.25F, true, 0.0F, 0.0F, f, f1);
        this.swing(this.Belly, speed_walk, degree_walk * -0.25F, false, 0.0F, 0.0F, f, f1);
        this.walk(this.UpperBody, speed_idle, degree_idle * -0.1F, true, 0.0F, -0.1F, f2, 1.0F);
        this.flap(this.leftarm, speed_idle, degree_idle * -0.1F, true, 0.0F, 0.0F, f2, 1.0F);
        this.flap(this.rightarm, speed_idle, degree_idle * -0.1F, false, 0.0F, 0.0F, f2, 1.0F);
        this.flap(this.leftarm2, speed_idle, degree_idle * -0.1F, true, 0.0F, -0.1F, f2, 1.0F);
        this.flap(this.rightarm2, speed_idle, degree_idle * -0.1F, false, 0.0F, -0.1F, f2, 1.0F);
        if (entity.getAnimation() != EntityCyclops.ANIMATION_EATPLAYER) {
            this.faceTarget(f3, f4, 1.0F, new AdvancedModelBox[] { this.Head });
        }
        this.walk(this.Jaw, speed_idle, degree_idle * -0.15F, true, 0.0F, -0.1F, f2, 1.0F);
    }

    @Override
    public void renderStatue(PoseStack matrixStackIn, VertexConsumer bufferIn, int packedLightIn, Entity living) {
        this.m_7695_(matrixStackIn, bufferIn, packedLightIn, OverlayTexture.NO_OVERLAY, 1.0F, 1.0F, 1.0F, 1.0F);
    }
}