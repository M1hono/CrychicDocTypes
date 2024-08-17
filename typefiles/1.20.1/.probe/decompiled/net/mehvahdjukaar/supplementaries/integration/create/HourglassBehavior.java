package net.mehvahdjukaar.supplementaries.integration.create;

import com.jozufozu.flywheel.core.virtual.VirtualRenderWorld;
import com.simibubi.create.content.contraptions.behaviour.MovementBehaviour;
import com.simibubi.create.content.contraptions.behaviour.MovementContext;
import com.simibubi.create.content.contraptions.render.ContraptionMatrices;
import java.util.function.UnaryOperator;
import net.mehvahdjukaar.supplementaries.client.renderers.tiles.HourGlassBlockTileRenderer;
import net.mehvahdjukaar.supplementaries.common.block.blocks.HourGlassBlock;
import net.mehvahdjukaar.supplementaries.common.block.hourglass.HourglassTimeData;
import net.mehvahdjukaar.supplementaries.common.block.hourglass.HourglassTimesManager;
import net.mehvahdjukaar.supplementaries.integration.CreateCompat;
import net.minecraft.client.renderer.LevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.ContainerHelper;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.Rotation;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class HourglassBehavior implements MovementBehaviour {

    private HourglassTimeData sandData;

    private float progress;

    private float prevProgress;

    private ResourceLocation cachedTexture;

    @Override
    public void tick(MovementContext context) {
        UnaryOperator<Vec3> rot = context.rotation;
        BlockState state = context.state;
        Direction dir = (Direction) state.m_61143_(HourGlassBlock.FACING);
        Rotation rotation = CreateCompat.isClockWise(rot, dir);
        CompoundTag com = context.blockEntityData;
        this.sandData = HourglassTimeData.EMPTY;
        HourglassTimeData prevSandData = this.sandData;
        NonNullList<ItemStack> l = NonNullList.create();
        ContainerHelper.loadAllItems(com, l);
        if (!l.isEmpty()) {
            this.sandData = HourglassTimesManager.getData(l.get(0).getItem());
            if (prevSandData != this.sandData && context.world.isClientSide) {
                this.cachedTexture = this.sandData.computeTexture(l.get(0), context.world);
            }
            this.progress = com.getFloat("Progress");
            this.prevProgress = com.getFloat("PrevProgress");
            if (!this.sandData.isEmpty()) {
                this.prevProgress = this.progress;
                if (rotation == Rotation.CLOCKWISE_90 && this.progress != 1.0F) {
                    this.progress = Math.min(this.progress + this.sandData.getIncrement(), 1.0F);
                } else if (rotation == Rotation.COUNTERCLOCKWISE_90 && this.progress != 0.0F) {
                    this.progress = Math.max(this.progress - this.sandData.getIncrement(), 0.0F);
                }
            }
            com.remove("Progress");
            com.remove("PrevProgress");
            com.putFloat("Progress", this.progress);
            com.putFloat("PrevProgress", this.prevProgress);
        }
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void renderInContraption(MovementContext context, VirtualRenderWorld renderWorld, ContraptionMatrices matrices, MultiBufferSource buffer) {
        float partialTicks = 1.0F;
        if (!this.sandData.isEmpty()) {
            Vec3 v = context.position;
            if (v == null) {
                v = new Vec3(0.0, 0.0, 0.0);
            }
            BlockPos pos = BlockPos.containing(v);
            int light = LevelRenderer.getLightColor(context.world, pos);
            float h = Mth.lerp(partialTicks, this.prevProgress, this.progress);
            Direction dir = (Direction) context.state.m_61143_(HourGlassBlock.FACING);
            HourGlassBlockTileRenderer.renderSand(matrices.getModelViewProjection(), buffer, light, this.cachedTexture, h, dir);
        }
    }
}