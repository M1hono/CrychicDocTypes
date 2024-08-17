package net.mehvahdjukaar.supplementaries.common.block.faucet;

import net.mehvahdjukaar.moonlight.api.fluids.BuiltInSoftFluids;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluid;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack;
import net.mehvahdjukaar.supplementaries.integration.CompatObjects;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;

public class RatsMilkInteraction implements FaucetTarget.BlState, FaucetSource.BlState {

    public FluidOffer getProvidedFluid(Level level, BlockPos pos, Direction dir, BlockState source) {
        return source.m_60734_() == CompatObjects.MILK_CAULDRON.get() ? FluidOffer.of(BuiltInSoftFluids.MILK.getHolder(), SoftFluid.BUCKET_COUNT, SoftFluid.BUCKET_COUNT) : null;
    }

    public void drain(Level level, BlockPos pos, Direction dir, BlockState source, int amount) {
        level.setBlock(pos, Blocks.CAULDRON.defaultBlockState(), 3);
    }

    public Integer fill(Level level, BlockPos pos, BlockState state, SoftFluidStack fluid, int minAmount) {
        if (state.m_60713_(Blocks.CAULDRON) && fluid.is(BuiltInSoftFluids.MILK.get()) && fluid.getCount() >= SoftFluid.BUCKET_COUNT) {
            Block b = (Block) CompatObjects.MILK_CAULDRON.get();
            if (b != null) {
                level.setBlock(pos, b.defaultBlockState(), 3);
                return SoftFluid.BUCKET_COUNT;
            }
        }
        return null;
    }
}