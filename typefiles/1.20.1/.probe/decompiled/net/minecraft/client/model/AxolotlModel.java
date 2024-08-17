package net.minecraft.client.model;

import com.google.common.collect.ImmutableList;
import java.util.Map;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.model.geom.PartPose;
import net.minecraft.client.model.geom.builders.CubeDeformation;
import net.minecraft.client.model.geom.builders.CubeListBuilder;
import net.minecraft.client.model.geom.builders.LayerDefinition;
import net.minecraft.client.model.geom.builders.MeshDefinition;
import net.minecraft.client.model.geom.builders.PartDefinition;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.LerpingModel;
import net.minecraft.world.entity.animal.axolotl.Axolotl;
import org.joml.Vector3f;

public class AxolotlModel<T extends Axolotl & LerpingModel> extends AgeableListModel<T> {

    public static final float SWIMMING_LEG_XROT = 1.8849558F;

    private final ModelPart tail;

    private final ModelPart leftHindLeg;

    private final ModelPart rightHindLeg;

    private final ModelPart leftFrontLeg;

    private final ModelPart rightFrontLeg;

    private final ModelPart body;

    private final ModelPart head;

    private final ModelPart topGills;

    private final ModelPart leftGills;

    private final ModelPart rightGills;

    public AxolotlModel(ModelPart modelPart0) {
        super(true, 8.0F, 3.35F);
        this.body = modelPart0.getChild("body");
        this.head = this.body.getChild("head");
        this.rightHindLeg = this.body.getChild("right_hind_leg");
        this.leftHindLeg = this.body.getChild("left_hind_leg");
        this.rightFrontLeg = this.body.getChild("right_front_leg");
        this.leftFrontLeg = this.body.getChild("left_front_leg");
        this.tail = this.body.getChild("tail");
        this.topGills = this.head.getChild("top_gills");
        this.leftGills = this.head.getChild("left_gills");
        this.rightGills = this.head.getChild("right_gills");
    }

    public static LayerDefinition createBodyLayer() {
        MeshDefinition $$0 = new MeshDefinition();
        PartDefinition $$1 = $$0.getRoot();
        PartDefinition $$2 = $$1.addOrReplaceChild("body", CubeListBuilder.create().texOffs(0, 11).addBox(-4.0F, -2.0F, -9.0F, 8.0F, 4.0F, 10.0F).texOffs(2, 17).addBox(0.0F, -3.0F, -8.0F, 0.0F, 5.0F, 9.0F), PartPose.offset(0.0F, 20.0F, 5.0F));
        CubeDeformation $$3 = new CubeDeformation(0.001F);
        PartDefinition $$4 = $$2.addOrReplaceChild("head", CubeListBuilder.create().texOffs(0, 1).addBox(-4.0F, -3.0F, -5.0F, 8.0F, 5.0F, 5.0F, $$3), PartPose.offset(0.0F, 0.0F, -9.0F));
        CubeListBuilder $$5 = CubeListBuilder.create().texOffs(3, 37).addBox(-4.0F, -3.0F, 0.0F, 8.0F, 3.0F, 0.0F, $$3);
        CubeListBuilder $$6 = CubeListBuilder.create().texOffs(0, 40).addBox(-3.0F, -5.0F, 0.0F, 3.0F, 7.0F, 0.0F, $$3);
        CubeListBuilder $$7 = CubeListBuilder.create().texOffs(11, 40).addBox(0.0F, -5.0F, 0.0F, 3.0F, 7.0F, 0.0F, $$3);
        $$4.addOrReplaceChild("top_gills", $$5, PartPose.offset(0.0F, -3.0F, -1.0F));
        $$4.addOrReplaceChild("left_gills", $$6, PartPose.offset(-4.0F, 0.0F, -1.0F));
        $$4.addOrReplaceChild("right_gills", $$7, PartPose.offset(4.0F, 0.0F, -1.0F));
        CubeListBuilder $$8 = CubeListBuilder.create().texOffs(2, 13).addBox(-1.0F, 0.0F, 0.0F, 3.0F, 5.0F, 0.0F, $$3);
        CubeListBuilder $$9 = CubeListBuilder.create().texOffs(2, 13).addBox(-2.0F, 0.0F, 0.0F, 3.0F, 5.0F, 0.0F, $$3);
        $$2.addOrReplaceChild("right_hind_leg", $$9, PartPose.offset(-3.5F, 1.0F, -1.0F));
        $$2.addOrReplaceChild("left_hind_leg", $$8, PartPose.offset(3.5F, 1.0F, -1.0F));
        $$2.addOrReplaceChild("right_front_leg", $$9, PartPose.offset(-3.5F, 1.0F, -8.0F));
        $$2.addOrReplaceChild("left_front_leg", $$8, PartPose.offset(3.5F, 1.0F, -8.0F));
        $$2.addOrReplaceChild("tail", CubeListBuilder.create().texOffs(2, 19).addBox(0.0F, -3.0F, 0.0F, 0.0F, 5.0F, 12.0F), PartPose.offset(0.0F, 0.0F, 1.0F));
        return LayerDefinition.create($$0, 64, 64);
    }

    @Override
    protected Iterable<ModelPart> headParts() {
        return ImmutableList.of();
    }

    @Override
    protected Iterable<ModelPart> bodyParts() {
        return ImmutableList.of(this.body);
    }

    public void setupAnim(T t0, float float1, float float2, float float3, float float4, float float5) {
        this.setupInitialAnimationValues(t0, float4, float5);
        if (t0.isPlayingDead()) {
            this.setupPlayDeadAnimation(float4);
            this.saveAnimationValues(t0);
        } else {
            boolean $$6 = float2 > 1.0E-5F || t0.m_146909_() != t0.f_19860_ || t0.m_146908_() != t0.f_19859_;
            if (t0.m_20072_()) {
                if ($$6) {
                    this.setupSwimmingAnimation(float3, float5);
                } else {
                    this.setupWaterHoveringAnimation(float3);
                }
                this.saveAnimationValues(t0);
            } else {
                if (t0.m_20096_()) {
                    if ($$6) {
                        this.setupGroundCrawlingAnimation(float3, float4);
                    } else {
                        this.setupLayStillOnGroundAnimation(float3, float4);
                    }
                }
                this.saveAnimationValues(t0);
            }
        }
    }

    private void saveAnimationValues(T t0) {
        Map<String, Vector3f> $$1 = t0.getModelRotationValues();
        $$1.put("body", this.getRotationVector(this.body));
        $$1.put("head", this.getRotationVector(this.head));
        $$1.put("right_hind_leg", this.getRotationVector(this.rightHindLeg));
        $$1.put("left_hind_leg", this.getRotationVector(this.leftHindLeg));
        $$1.put("right_front_leg", this.getRotationVector(this.rightFrontLeg));
        $$1.put("left_front_leg", this.getRotationVector(this.leftFrontLeg));
        $$1.put("tail", this.getRotationVector(this.tail));
        $$1.put("top_gills", this.getRotationVector(this.topGills));
        $$1.put("left_gills", this.getRotationVector(this.leftGills));
        $$1.put("right_gills", this.getRotationVector(this.rightGills));
    }

    private Vector3f getRotationVector(ModelPart modelPart0) {
        return new Vector3f(modelPart0.xRot, modelPart0.yRot, modelPart0.zRot);
    }

    private void setRotationFromVector(ModelPart modelPart0, Vector3f vectorF1) {
        modelPart0.setRotation(vectorF1.x(), vectorF1.y(), vectorF1.z());
    }

    private void setupInitialAnimationValues(T t0, float float1, float float2) {
        this.body.x = 0.0F;
        this.head.y = 0.0F;
        this.body.y = 20.0F;
        Map<String, Vector3f> $$3 = t0.getModelRotationValues();
        if ($$3.isEmpty()) {
            this.body.setRotation(float2 * (float) (Math.PI / 180.0), float1 * (float) (Math.PI / 180.0), 0.0F);
            this.head.setRotation(0.0F, 0.0F, 0.0F);
            this.leftHindLeg.setRotation(0.0F, 0.0F, 0.0F);
            this.rightHindLeg.setRotation(0.0F, 0.0F, 0.0F);
            this.leftFrontLeg.setRotation(0.0F, 0.0F, 0.0F);
            this.rightFrontLeg.setRotation(0.0F, 0.0F, 0.0F);
            this.leftGills.setRotation(0.0F, 0.0F, 0.0F);
            this.rightGills.setRotation(0.0F, 0.0F, 0.0F);
            this.topGills.setRotation(0.0F, 0.0F, 0.0F);
            this.tail.setRotation(0.0F, 0.0F, 0.0F);
        } else {
            this.setRotationFromVector(this.body, (Vector3f) $$3.get("body"));
            this.setRotationFromVector(this.head, (Vector3f) $$3.get("head"));
            this.setRotationFromVector(this.leftHindLeg, (Vector3f) $$3.get("left_hind_leg"));
            this.setRotationFromVector(this.rightHindLeg, (Vector3f) $$3.get("right_hind_leg"));
            this.setRotationFromVector(this.leftFrontLeg, (Vector3f) $$3.get("left_front_leg"));
            this.setRotationFromVector(this.rightFrontLeg, (Vector3f) $$3.get("right_front_leg"));
            this.setRotationFromVector(this.leftGills, (Vector3f) $$3.get("left_gills"));
            this.setRotationFromVector(this.rightGills, (Vector3f) $$3.get("right_gills"));
            this.setRotationFromVector(this.topGills, (Vector3f) $$3.get("top_gills"));
            this.setRotationFromVector(this.tail, (Vector3f) $$3.get("tail"));
        }
    }

    private float lerpTo(float float0, float float1) {
        return this.lerpTo(0.05F, float0, float1);
    }

    private float lerpTo(float float0, float float1, float float2) {
        return Mth.rotLerp(float0, float1, float2);
    }

    private void lerpPart(ModelPart modelPart0, float float1, float float2, float float3) {
        modelPart0.setRotation(this.lerpTo(modelPart0.xRot, float1), this.lerpTo(modelPart0.yRot, float2), this.lerpTo(modelPart0.zRot, float3));
    }

    private void setupLayStillOnGroundAnimation(float float0, float float1) {
        float $$2 = float0 * 0.09F;
        float $$3 = Mth.sin($$2);
        float $$4 = Mth.cos($$2);
        float $$5 = $$3 * $$3 - 2.0F * $$3;
        float $$6 = $$4 * $$4 - 3.0F * $$3;
        this.head.xRot = this.lerpTo(this.head.xRot, -0.09F * $$5);
        this.head.yRot = this.lerpTo(this.head.yRot, 0.0F);
        this.head.zRot = this.lerpTo(this.head.zRot, -0.2F);
        this.tail.yRot = this.lerpTo(this.tail.yRot, -0.1F + 0.1F * $$5);
        this.topGills.xRot = this.lerpTo(this.topGills.xRot, 0.6F + 0.05F * $$6);
        this.leftGills.yRot = this.lerpTo(this.leftGills.yRot, -this.topGills.xRot);
        this.rightGills.yRot = this.lerpTo(this.rightGills.yRot, -this.leftGills.yRot);
        this.lerpPart(this.leftHindLeg, 1.1F, 1.0F, 0.0F);
        this.lerpPart(this.leftFrontLeg, 0.8F, 2.3F, -0.5F);
        this.applyMirrorLegRotations();
        this.body.xRot = this.lerpTo(0.2F, this.body.xRot, 0.0F);
        this.body.yRot = this.lerpTo(this.body.yRot, float1 * (float) (Math.PI / 180.0));
        this.body.zRot = this.lerpTo(this.body.zRot, 0.0F);
    }

    private void setupGroundCrawlingAnimation(float float0, float float1) {
        float $$2 = float0 * 0.11F;
        float $$3 = Mth.cos($$2);
        float $$4 = ($$3 * $$3 - 2.0F * $$3) / 5.0F;
        float $$5 = 0.7F * $$3;
        this.head.xRot = this.lerpTo(this.head.xRot, 0.0F);
        this.head.yRot = this.lerpTo(this.head.yRot, 0.09F * $$3);
        this.head.zRot = this.lerpTo(this.head.zRot, 0.0F);
        this.tail.yRot = this.lerpTo(this.tail.yRot, this.head.yRot);
        this.topGills.xRot = this.lerpTo(this.topGills.xRot, 0.6F - 0.08F * ($$3 * $$3 + 2.0F * Mth.sin($$2)));
        this.leftGills.yRot = this.lerpTo(this.leftGills.yRot, -this.topGills.xRot);
        this.rightGills.yRot = this.lerpTo(this.rightGills.yRot, -this.leftGills.yRot);
        this.lerpPart(this.leftHindLeg, 0.9424779F, 1.5F - $$4, -0.1F);
        this.lerpPart(this.leftFrontLeg, 1.0995574F, (float) (Math.PI / 2) - $$5, 0.0F);
        this.lerpPart(this.rightHindLeg, this.leftHindLeg.xRot, -1.0F - $$4, 0.0F);
        this.lerpPart(this.rightFrontLeg, this.leftFrontLeg.xRot, (float) (-Math.PI / 2) - $$5, 0.0F);
        this.body.xRot = this.lerpTo(0.2F, this.body.xRot, 0.0F);
        this.body.yRot = this.lerpTo(this.body.yRot, float1 * (float) (Math.PI / 180.0));
        this.body.zRot = this.lerpTo(this.body.zRot, 0.0F);
    }

    private void setupWaterHoveringAnimation(float float0) {
        float $$1 = float0 * 0.075F;
        float $$2 = Mth.cos($$1);
        float $$3 = Mth.sin($$1) * 0.15F;
        this.body.xRot = this.lerpTo(this.body.xRot, -0.15F + 0.075F * $$2);
        this.body.y -= $$3;
        this.head.xRot = this.lerpTo(this.head.xRot, -this.body.xRot);
        this.topGills.xRot = this.lerpTo(this.topGills.xRot, 0.2F * $$2);
        this.leftGills.yRot = this.lerpTo(this.leftGills.yRot, -0.3F * $$2 - 0.19F);
        this.rightGills.yRot = this.lerpTo(this.rightGills.yRot, -this.leftGills.yRot);
        this.lerpPart(this.leftHindLeg, (float) (Math.PI * 3.0 / 4.0) - $$2 * 0.11F, 0.47123894F, 1.7278761F);
        this.lerpPart(this.leftFrontLeg, (float) (Math.PI / 4) - $$2 * 0.2F, 2.042035F, 0.0F);
        this.applyMirrorLegRotations();
        this.tail.yRot = this.lerpTo(this.tail.yRot, 0.5F * $$2);
        this.head.yRot = this.lerpTo(this.head.yRot, 0.0F);
        this.head.zRot = this.lerpTo(this.head.zRot, 0.0F);
    }

    private void setupSwimmingAnimation(float float0, float float1) {
        float $$2 = float0 * 0.33F;
        float $$3 = Mth.sin($$2);
        float $$4 = Mth.cos($$2);
        float $$5 = 0.13F * $$3;
        this.body.xRot = this.lerpTo(0.1F, this.body.xRot, float1 * (float) (Math.PI / 180.0) + $$5);
        this.head.xRot = -$$5 * 1.8F;
        this.body.y -= 0.45F * $$4;
        this.topGills.xRot = this.lerpTo(this.topGills.xRot, -0.5F * $$3 - 0.8F);
        this.leftGills.yRot = this.lerpTo(this.leftGills.yRot, 0.3F * $$3 + 0.9F);
        this.rightGills.yRot = this.lerpTo(this.rightGills.yRot, -this.leftGills.yRot);
        this.tail.yRot = this.lerpTo(this.tail.yRot, 0.3F * Mth.cos($$2 * 0.9F));
        this.lerpPart(this.leftHindLeg, 1.8849558F, -0.4F * $$3, (float) (Math.PI / 2));
        this.lerpPart(this.leftFrontLeg, 1.8849558F, -0.2F * $$4 - 0.1F, (float) (Math.PI / 2));
        this.applyMirrorLegRotations();
        this.head.yRot = this.lerpTo(this.head.yRot, 0.0F);
        this.head.zRot = this.lerpTo(this.head.zRot, 0.0F);
    }

    private void setupPlayDeadAnimation(float float0) {
        this.lerpPart(this.leftHindLeg, 1.4137167F, 1.0995574F, (float) (Math.PI / 4));
        this.lerpPart(this.leftFrontLeg, (float) (Math.PI / 4), 2.042035F, 0.0F);
        this.body.xRot = this.lerpTo(this.body.xRot, -0.15F);
        this.body.zRot = this.lerpTo(this.body.zRot, 0.35F);
        this.applyMirrorLegRotations();
        this.body.yRot = this.lerpTo(this.body.yRot, float0 * (float) (Math.PI / 180.0));
        this.head.xRot = this.lerpTo(this.head.xRot, 0.0F);
        this.head.yRot = this.lerpTo(this.head.yRot, 0.0F);
        this.head.zRot = this.lerpTo(this.head.zRot, 0.0F);
        this.tail.yRot = this.lerpTo(this.tail.yRot, 0.0F);
        this.lerpPart(this.topGills, 0.0F, 0.0F, 0.0F);
        this.lerpPart(this.leftGills, 0.0F, 0.0F, 0.0F);
        this.lerpPart(this.rightGills, 0.0F, 0.0F, 0.0F);
    }

    private void applyMirrorLegRotations() {
        this.lerpPart(this.rightHindLeg, this.leftHindLeg.xRot, -this.leftHindLeg.yRot, -this.leftHindLeg.zRot);
        this.lerpPart(this.rightFrontLeg, this.leftFrontLeg.xRot, -this.leftFrontLeg.yRot, -this.leftFrontLeg.zRot);
    }
}