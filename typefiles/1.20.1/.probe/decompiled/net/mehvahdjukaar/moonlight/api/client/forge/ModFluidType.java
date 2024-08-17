package net.mehvahdjukaar.moonlight.api.client.forge;

import java.util.function.Consumer;
import net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid;
import net.minecraftforge.client.extensions.common.IClientFluidTypeExtensions;
import net.minecraftforge.fluids.FluidType;

public class ModFluidType extends FluidType {

    private static final ThreadLocal<ModFlowingFluid> HACK = new ThreadLocal();

    public static ModFluidType create(ModFlowingFluid.Properties properties, ModFlowingFluid fluid) {
        HACK.set(fluid);
        ModFluidType m = new ModFluidType(properties);
        HACK.remove();
        return m;
    }

    private ModFluidType(ModFlowingFluid.Properties properties) {
        super(FluidType.Properties.create().adjacentPathType(properties.adjacentPathType).canExtinguish(properties.canExtinguish).fallDistanceModifier(properties.fallDistanceModifier).pathType(properties.pathType).canConvertToSource(properties.canConvertToSource).supportsBoating(properties.supportsBoating).canDrown(properties.canDrown).canHydrate(properties.canHydrate).lightLevel(properties.lightLevel).canPushEntity(properties.canPushEntity).density(properties.density).temperature(properties.temperature).viscosity(properties.viscosity).rarity(properties.rarity).descriptionId(properties.descriptionId).motionScale(properties.motionScale).canSwim(properties.canSwim));
    }

    @Override
    public void initializeClient(Consumer<IClientFluidTypeExtensions> consumer) {
        consumer.accept((IClientFluidTypeExtensions) ((ModFlowingFluid) HACK.get()).createRenderProperties());
    }
}