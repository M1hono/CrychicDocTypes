package me.jellysquid.mods.lithium.mixin.alloc.explosion_behavior;

import java.util.Optional;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.EntityBasedExplosionDamageCalculator;
import net.minecraft.world.level.Explosion;
import net.minecraft.world.level.ExplosionDamageCalculator;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.FluidState;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Overwrite;
import org.spongepowered.asm.mixin.Shadow;

@Mixin({ EntityBasedExplosionDamageCalculator.class })
public class EntityExplosionBehaviorMixin extends ExplosionDamageCalculator {

    @Shadow
    @Final
    private Entity source;

    @Overwrite
    @Override
    public Optional<Float> getBlockExplosionResistance(Explosion explosion, BlockGetter world, BlockPos pos, BlockState blockState, FluidState fluidState) {
        Optional<Float> optionalBlastResistance = super.getBlockExplosionResistance(explosion, world, pos, blockState, fluidState);
        if (optionalBlastResistance.isPresent()) {
            float blastResistance = (Float) optionalBlastResistance.get();
            float effectiveExplosionResistance = this.source.getBlockExplosionResistance(explosion, world, pos, blockState, fluidState, blastResistance);
            if (effectiveExplosionResistance != blastResistance) {
                return Optional.of(effectiveExplosionResistance);
            }
        }
        return optionalBlastResistance;
    }
}