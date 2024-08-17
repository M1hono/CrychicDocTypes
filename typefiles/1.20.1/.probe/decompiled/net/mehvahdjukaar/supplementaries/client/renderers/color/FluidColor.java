package net.mehvahdjukaar.supplementaries.client.renderers.color;

import net.mehvahdjukaar.moonlight.api.block.ISoftFluidTankProvider;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluidTank;
import net.minecraft.client.Minecraft;
import net.minecraft.client.color.block.BlockColor;
import net.minecraft.client.color.item.ItemColor;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.BlockAndTintGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public class FluidColor implements BlockColor, ItemColor {

    @Override
    public int getColor(BlockState state, @Nullable BlockAndTintGetter level, @Nullable BlockPos pos, int tint) {
        if (level != null && pos != null && level.m_7702_(pos) instanceof ISoftFluidTankProvider bh && tint == 1) {
            SoftFluidTank tank = bh.getSoftFluidTank();
            return tank.getCachedStillColor(level, pos);
        } else {
            return -1;
        }
    }

    @Override
    public int getColor(ItemStack itemStack, int i) {
        CompoundTag fluidHolder = itemStack.getTagElement("FluidHolder");
        Level level = Minecraft.getInstance().level;
        if (fluidHolder != null && level != null) {
            SoftFluidStack stack = SoftFluidStack.load(fluidHolder);
            return stack.getStillColor(level, null);
        } else {
            return 0;
        }
    }
}