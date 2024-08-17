package net.mehvahdjukaar.supplementaries.mixins.forge;

import com.llamalad7.mixinextras.injector.wrapoperation.Operation;
import com.llamalad7.mixinextras.injector.wrapoperation.WrapOperation;
import net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.level.material.FluidState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;

@Mixin({ LivingEntity.class })
public class LivingEntityMixin {

    @WrapOperation(method = { "travel" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/world/entity/LivingEntity;isInFluidType(Lnet/minecraft/world/level/material/FluidState;)Z", ordinal = 0) })
    public boolean onTravel(LivingEntity instance, FluidState state, Operation<Boolean> original) {
        boolean or = (Boolean) original.call(new Object[] { instance, state });
        return or && state.getType() instanceof FiniteFluid ff ? ff.shouldSlowDown(state) : or;
    }
}