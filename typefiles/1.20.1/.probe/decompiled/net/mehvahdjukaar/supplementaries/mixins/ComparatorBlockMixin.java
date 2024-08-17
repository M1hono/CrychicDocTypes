package net.mehvahdjukaar.supplementaries.mixins;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.ComparatorBlock;
import net.minecraft.world.level.block.DiodeBlock;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ ComparatorBlock.class })
public abstract class ComparatorBlockMixin extends DiodeBlock {

    protected ComparatorBlockMixin(BlockBehaviour.Properties properties) {
        super(properties);
    }

    @Inject(method = { "refreshOutputState" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/world/level/block/ComparatorBlock;updateNeighborsInFront(Lnet/minecraft/world/level/Level;Lnet/minecraft/core/BlockPos;Lnet/minecraft/world/level/block/state/BlockState;)V") })
    public void updateSideRelayers(Level level, BlockPos pos, BlockState state, CallbackInfo ci) {
        Direction facing = (Direction) state.m_61143_(ComparatorBlock.f_54117_);
        for (Direction d : Direction.values()) {
            if (d.getAxis() != facing.getAxis()) {
                level.neighborChanged(pos.relative(d), this, pos);
            }
        }
    }
}