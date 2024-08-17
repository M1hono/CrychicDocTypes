package net.mehvahdjukaar.supplementaries.mixins.forge.self;

import java.util.function.Consumer;
import net.mehvahdjukaar.supplementaries.common.fluids.FlammableLiquidBlock;
import net.minecraft.client.particle.ParticleEngine;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.HitResult;
import net.minecraftforge.client.extensions.common.IClientBlockExtensions;
import org.spongepowered.asm.mixin.Mixin;

@Mixin({ FlammableLiquidBlock.class })
public abstract class SelfFlammableFluidBlockMixin extends Block {

    public SelfFlammableFluidBlockMixin(BlockBehaviour.Properties arg) {
        super(arg);
    }

    public void initializeClient(Consumer<IClientBlockExtensions> consumer) {
        super.initializeClient(consumer);
        consumer.accept(new IClientBlockExtensions() {

            @Override
            public boolean addHitEffects(BlockState state, Level level, HitResult target, ParticleEngine manager) {
                return true;
            }

            @Override
            public boolean addDestroyEffects(BlockState state, Level Level, BlockPos pos, ParticleEngine manager) {
                return true;
            }
        });
    }
}