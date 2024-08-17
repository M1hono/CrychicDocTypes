package snownee.kiwi.contributor.impl.client.model;

import com.google.common.collect.ImmutableList;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.AgeableListModel;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.model.geom.PartPose;
import net.minecraft.client.model.geom.builders.CubeListBuilder;
import net.minecraft.client.model.geom.builders.LayerDefinition;
import net.minecraft.client.model.geom.builders.MeshDefinition;
import net.minecraft.client.model.geom.builders.PartDefinition;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.LivingEntity;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

@OnlyIn(Dist.CLIENT)
public class SunnyMilkModel<T extends LivingEntity> extends AgeableListModel<T> {

    private float ticks;

    private ModelPart wingRight;

    private ModelPart wingLeft;

    public SunnyMilkModel(LayerDefinition definition) {
        ModelPart root = definition.bakeRoot();
        this.wingLeft = root.getChild("wingLeft");
        this.wingRight = root.getChild("wingRight");
    }

    public static LayerDefinition create() {
        MeshDefinition meshdefinition = new MeshDefinition();
        PartDefinition root = meshdefinition.getRoot();
        CubeListBuilder wingLeft = CubeListBuilder.create();
        wingLeft.texOffs(0, 12).addBox(0.5F, -5.5F, 0.0F, 0.0F, 12.0F, 20.0F);
        wingLeft.texOffs(0, 28).addBox(0.5F, 6.5F, 0.0F, 0.0F, 10.0F, 16.0F);
        CubeListBuilder wingRight = CubeListBuilder.create();
        wingRight.texOffs(0, 12).addBox(-0.5F, -5.5F, 0.0F, 0.0F, 12.0F, 20.0F);
        wingRight.texOffs(0, 28).addBox(-0.5F, 6.5F, 0.0F, 0.0F, 10.0F, 16.0F);
        root.addOrReplaceChild("wingLeft", wingLeft, PartPose.offset(-1.9641F, -2.0F, 2.0F));
        root.addOrReplaceChild("wingRight", wingRight, PartPose.offset(1.9641F, -2.0F, 2.0F));
        return LayerDefinition.create(meshdefinition, 64, 64);
    }

    @Override
    protected Iterable<ModelPart> headParts() {
        return ImmutableList.of();
    }

    @Override
    protected Iterable<ModelPart> bodyParts() {
        return ImmutableList.of(this.wingLeft, this.wingRight);
    }

    public void setupAnim(T entityIn, float limbSwing, float limbSwingAmount, float partialTicks, float netHeadYaw, float headPitch) {
        float f = (float) entityIn.m_20184_().length() * 10.0F;
        this.ticks = this.ticks + Minecraft.getInstance().getDeltaFrameTime() * (1.0F + Math.min(9.0F, f * f * f)) * 0.1F;
        this.wingLeft.yRot = -1.0472F + Mth.sin(this.ticks) * 0.25F;
        this.wingRight.yRot = -this.wingLeft.yRot;
    }
}