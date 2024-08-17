package org.violetmoon.zeta.block;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.BlockAndTintGetter;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.RenderLayerRegistry;

public class ZetaGlassBlock extends ZetaBlock {

    public ZetaGlassBlock(String regname, @Nullable ZetaModule module, boolean translucent, BlockBehaviour.Properties properties) {
        super(regname, module, properties.noOcclusion().isValidSpawn((state, world, pos, entityType) -> false).isRedstoneConductor((state, world, pos) -> false).isSuffocating((state, world, pos) -> false).isViewBlocking((state, world, pos) -> false));
        if (module != null) {
            module.zeta.renderLayerRegistry.put(this, translucent ? RenderLayerRegistry.Layer.TRANSLUCENT : RenderLayerRegistry.Layer.CUTOUT);
        }
    }

    @Override
    public boolean skipRendering(@NotNull BlockState state, BlockState adjacentBlockState, @NotNull Direction side) {
        return adjacentBlockState.m_60713_(this) || super.m_6104_(state, adjacentBlockState, side);
    }

    @NotNull
    @Override
    public VoxelShape getVisualShape(@NotNull BlockState state, @NotNull BlockGetter worldIn, @NotNull BlockPos pos, @NotNull CollisionContext context) {
        return Shapes.empty();
    }

    @Override
    public float getShadeBrightness(@NotNull BlockState state, @NotNull BlockGetter worldIn, @NotNull BlockPos pos) {
        return 1.0F;
    }

    @Override
    public boolean propagatesSkylightDown(@NotNull BlockState state, @NotNull BlockGetter reader, @NotNull BlockPos pos) {
        return true;
    }

    public boolean shouldDisplayFluidOverlay(BlockState state, BlockAndTintGetter world, BlockPos pos, FluidState fluidState) {
        return true;
    }
}