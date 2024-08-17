package net.mehvahdjukaar.supplementaries.common.block.faucet;

import net.mehvahdjukaar.moonlight.api.fluids.SoftFluid;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack;
import net.minecraft.core.Holder;

public record FluidOffer(SoftFluidStack fluid, int minAmount) {

    public static FluidOffer of(SoftFluidStack stack, int min) {
        if (stack.getCount() < min) {
            throw new IllegalStateException("Minimum fluid amount was bigger than actual fluid amount");
        } else {
            return new FluidOffer(stack, min);
        }
    }

    public static FluidOffer of(SoftFluidStack stack) {
        return of(stack, 1);
    }

    public static FluidOffer of(Holder<SoftFluid> fluid, int amount, int minAmount) {
        return of(SoftFluidStack.of(fluid, amount), minAmount);
    }

    public static FluidOffer of(Holder<SoftFluid> fluid, int amount) {
        return of(SoftFluidStack.of(fluid, amount), 1);
    }

    public static FluidOffer of(Holder<SoftFluid> fluid) {
        return of(SoftFluidStack.of(fluid, 1), 1);
    }
}