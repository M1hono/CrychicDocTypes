package com.github.alexthe666.iceandfire.client.model.armor;

import net.minecraft.client.model.HumanoidModel;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.model.geom.PartPose;
import net.minecraft.client.model.geom.builders.CubeDeformation;
import net.minecraft.client.model.geom.builders.CubeListBuilder;
import net.minecraft.client.model.geom.builders.MeshDefinition;
import net.minecraft.client.model.geom.builders.PartDefinition;

public class ModelLightningDragonScaleArmor extends ArmorModelBase {

    private static final ModelPart INNER_MODEL = createMesh(CubeDeformation.NONE.extend(INNER_MODEL_OFFSET), 0.0F).getRoot().bake(64, 64);

    private static final ModelPart OUTER_MODEL = createMesh(CubeDeformation.NONE.extend(OUTER_MODEL_OFFSET), 0.0F).getRoot().bake(64, 64);

    public ModelLightningDragonScaleArmor(boolean inner) {
        super(getBakedModel(inner));
    }

    public static MeshDefinition createMesh(CubeDeformation deformation, float offset) {
        MeshDefinition meshdefinition = HumanoidModel.createMesh(deformation, offset);
        PartDefinition partdefinition = meshdefinition.getRoot();
        partdefinition.getChild("right_leg").addOrReplaceChild("RightLegSpike3", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(-0.8F, 0.0F, -0.8F, -1.2217305F, 1.2217305F, (float) (-Math.PI / 18)));
        partdefinition.getChild("right_leg").addOrReplaceChild("RightLegSpike2", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(-0.7F, 3.6F, -0.4F, -1.4114478F, 0.0F, 0.0F));
        partdefinition.getChild("right_leg").addOrReplaceChild("RightLegSpike", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.0F, 5.0F, 0.4F, -1.4114478F, 0.0F, 0.0F));
        partdefinition.getChild("left_leg").addOrReplaceChild("LeftLegSpike3", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.8F, 0.0F, -0.8F, -1.2217305F, -1.2217305F, (float) (Math.PI / 18)));
        partdefinition.getChild("left_leg").addOrReplaceChild("LeftLegSpike2", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.7F, 3.6F, -0.4F, -1.4114478F, 0.0F, 0.0F));
        partdefinition.getChild("left_leg").addOrReplaceChild("LeftLegSpike", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, 0.0F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.0F, 5.0F, 0.4F, -1.4114478F, 0.0F, 0.0F));
        partdefinition.getChild("head").addOrReplaceChild("HornR", CubeListBuilder.create().texOffs(48, 44).addBox(-1.0F, -0.5F, 0.0F, 2.0F, 3.0F, 5.0F), PartPose.offsetAndRotation(-3.6F, -8.0F, 0.0F, 0.43633232F, -0.33161256F, -0.19198622F));
        partdefinition.getChild("head").addOrReplaceChild("HornL", CubeListBuilder.create().texOffs(48, 44).mirror().addBox(-1.0F, -0.5F, 0.0F, 2.0F, 3.0F, 5.0F), PartPose.offsetAndRotation(3.6F, -8.0F, 0.0F, 0.43633232F, 0.33161256F, 0.19198622F));
        partdefinition.getChild("head").addOrReplaceChild("HornR3", CubeListBuilder.create().texOffs(47, 37).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 4.0F), PartPose.offsetAndRotation(-4.0F, -3.0F, 0.7F, -0.06981317F, -0.4886922F, -0.08726646F));
        partdefinition.getChild("head").addOrReplaceChild("HornL3", CubeListBuilder.create().texOffs(47, 37).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 4.0F), PartPose.offsetAndRotation(4.0F, -3.0F, 0.7F, -0.06981317F, 0.4886922F, 0.08726646F));
        partdefinition.getChild("head").addOrReplaceChild("HeadFront", CubeListBuilder.create().texOffs(6, 44).addBox(-3.5F, -2.8F, -8.8F, 7.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(0.0F, -5.6F, 0.0F, 0.045553092F, 0.0F, 0.0F));
        partdefinition.getChild("head").addOrReplaceChild("Jaw", CubeListBuilder.create().texOffs(6, 51).addBox(-3.5F, 4.0F, -7.4F, 7.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(0.0F, -5.4F, 0.0F, -0.091106184F, 0.0F, 0.0F));
        partdefinition.getChild("head").addOrReplaceChild("HornR4", CubeListBuilder.create().texOffs(46, 36).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(-4.0F, -5.1F, 0.1F, 0.12217305F, (float) (-Math.PI / 10), -0.034906585F));
        partdefinition.getChild("head").addOrReplaceChild("HornL4", CubeListBuilder.create().texOffs(46, 36).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(4.0F, -5.1F, -0.1F, 0.12217305F, (float) (Math.PI / 10), 0.034906585F));
        partdefinition.getChild("head").addOrReplaceChild("Teeth1", CubeListBuilder.create().texOffs(6, 34).addBox(-3.6F, 0.1F, -8.9F, 4.0F, 1.0F, 5.0F), PartPose.offset(0.0F, -6.2F, 0.0F));
        partdefinition.getChild("right_arm").addOrReplaceChild("RightShoulderSpike1", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(-0.5F, -1.2F, 0.0F, (float) -Math.PI, 0.0F, (float) (-Math.PI / 18)));
        partdefinition.getChild("left_arm").addOrReplaceChild("LeftShoulderSpike1", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.5F, -1.2F, 0.0F, (float) -Math.PI, 0.0F, (float) (Math.PI / 18)));
        partdefinition.getChild("right_arm").addOrReplaceChild("RightShoulderSpike2", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(-1.8F, -0.1F, 0.0F, (float) -Math.PI, 0.0F, (float) (-Math.PI / 12)));
        partdefinition.getChild("left_arm").addOrReplaceChild("LeftShoulderSpike2", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(1.8F, -0.1F, 0.0F, (float) -Math.PI, 0.0F, (float) (Math.PI / 12)));
        partdefinition.getChild("body").addOrReplaceChild("BackSpike1", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.0F, 0.9F, 0.2F, 1.1838568F, 0.0F, 0.0F));
        partdefinition.getChild("body").addOrReplaceChild("BackSpike2", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.0F, 3.5F, 0.6F, 1.1838568F, 0.0F, 0.0F));
        partdefinition.getChild("body").addOrReplaceChild("BackSpike3", CubeListBuilder.create().texOffs(0, 34).addBox(-0.5F, 0.0F, -0.5F, 1.0F, 3.0F, 1.0F), PartPose.offsetAndRotation(0.0F, 6.4F, 0.0F, 1.1838568F, 0.0F, 0.0F));
        partdefinition.getChild("head").getChild("HornR").addOrReplaceChild("HornR2", CubeListBuilder.create().texOffs(46, 36).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(0.0F, 0.3F, 4.5F, -0.075049154F, 0.5009095F, 0.0F));
        partdefinition.getChild("head").getChild("HornL").addOrReplaceChild("HornL2", CubeListBuilder.create().texOffs(46, 36).mirror().addBox(-0.5F, -0.8F, 0.0F, 1.0F, 2.0F, 5.0F), PartPose.offsetAndRotation(0.0F, 0.3F, 4.5F, -0.075049154F, -0.5009095F, 0.0F));
        partdefinition.getChild("head").getChild("HeadFront").addOrReplaceChild("Teeth2", CubeListBuilder.create().texOffs(6, 34).mirror().addBox(-0.4F, 0.1F, -8.9F, 4.0F, 1.0F, 5.0F), PartPose.offset(0.0F, -1.0F, 0.0F));
        partdefinition.getChild("head").getChild("Jaw").addOrReplaceChild("Teeth3", CubeListBuilder.create().texOffs(6, 34).addBox(-3.6F, 0.1F, -8.9F, 4.0F, 1.0F, 5.0F), PartPose.offset(0.0F, 3.0F, 1.4F));
        partdefinition.getChild("head").getChild("Jaw").addOrReplaceChild("Teeth4", CubeListBuilder.create().texOffs(6, 34).mirror().addBox(-0.4F, 0.1F, -8.9F, 4.0F, 1.0F, 5.0F), PartPose.offset(0.0F, 3.0F, 1.4F));
        return meshdefinition;
    }

    public static ModelPart getBakedModel(boolean inner) {
        return inner ? INNER_MODEL : OUTER_MODEL;
    }
}