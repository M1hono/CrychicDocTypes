package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.reg.ModTags;
import net.minecraft.client.renderer.chunk.RenderChunkRegion;
import net.minecraft.core.BlockPos;
import net.minecraft.tags.TagKey;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.DoublePlantBlock;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.properties.DoubleBlockHalf;
import net.minecraft.world.phys.Vec3;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ BlockBehaviour.BlockStateBase.class })
public abstract class BlockBehaviourPlanterMixin {

    @Shadow
    public abstract Block getBlock();

    @Shadow
    public abstract boolean is(TagKey<Block> var1);

    @Inject(method = { "method_49227" }, at = { @At("RETURN") }, cancellable = true)
    public void getOffset(BlockGetter level, BlockPos pos, BlockBehaviour.OffsetFunction offsetFunction, CallbackInfoReturnable<Vec3> cir) {
        if (level != null && cir.getReturnValue() != Vec3.ZERO && !level.m_151562_(pos.m_123342_() - 2) && level instanceof RenderChunkRegion) {
            int b = 1;
            if (this.getBlock() instanceof DoublePlantBlock && ((BlockBehaviour.BlockStateBase) this).m_61143_(DoublePlantBlock.HALF) == DoubleBlockHalf.UPPER) {
                b = 2;
            }
            if (level.getBlockState(pos.below(b)).m_204336_(ModTags.PREVENTS_OFFSET_ABOVE)) {
                cir.setReturnValue(Vec3.ZERO);
            }
        }
    }
}