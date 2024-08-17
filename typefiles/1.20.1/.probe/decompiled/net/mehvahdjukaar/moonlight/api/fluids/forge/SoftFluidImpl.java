package net.mehvahdjukaar.moonlight.api.fluids.forge;

import net.mehvahdjukaar.moonlight.api.fluids.SoftFluid;
import net.mehvahdjukaar.moonlight.api.misc.Triplet;
import net.mehvahdjukaar.moonlight.core.Moonlight;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.material.Fluid;
import net.minecraft.world.level.material.Fluids;
import net.minecraftforge.client.extensions.common.IClientFluidTypeExtensions;
import net.minecraftforge.fluids.FluidStack;
import net.minecraftforge.fluids.FluidType;
import net.minecraftforge.registries.ForgeRegistries;

public class SoftFluidImpl {

    public static void addFluidSpecificAttributes(SoftFluid.Builder builder, Fluid fluid) {
        FluidType type = fluid.getFluidType();
        builder.luminosity(type.getLightLevel());
        Component tr = type.getDescription();
        if (tr != null) {
            builder.translation(tr);
        }
    }

    public static Triplet<ResourceLocation, ResourceLocation, Integer> getRenderingData(ResourceLocation useTexturesFrom) {
        Fluid f = ForgeRegistries.FLUIDS.getValue(useTexturesFrom);
        if (f != null && f != Fluids.EMPTY) {
            IClientFluidTypeExtensions prop = IClientFluidTypeExtensions.of(f);
            if (prop != IClientFluidTypeExtensions.DEFAULT) {
                FluidStack s = new FluidStack(f, 1000);
                ResourceLocation still = prop.getStillTexture(s);
                ResourceLocation flowing = prop.getFlowingTexture(s);
                int tint = prop.getTintColor(s);
                if (still != null && flowing != null) {
                    return Triplet.of(still, flowing, tint);
                }
                Moonlight.LOGGER.warn("Fluid " + useTexturesFrom + " returned null on its textures. Its soft fluid might not render well");
                return null;
            }
        }
        return null;
    }
}