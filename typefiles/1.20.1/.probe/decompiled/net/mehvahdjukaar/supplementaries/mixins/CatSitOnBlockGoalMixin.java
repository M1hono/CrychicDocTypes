package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.common.block.blocks.DoormatBlock;
import net.mehvahdjukaar.supplementaries.common.block.blocks.PlanterBlock;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.PathfinderMob;
import net.minecraft.world.entity.ai.goal.CatSitOnBlockGoal;
import net.minecraft.world.entity.ai.goal.MoveToBlockGoal;
import net.minecraft.world.level.LevelReader;
import net.minecraft.world.level.block.Block;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ CatSitOnBlockGoal.class })
public abstract class CatSitOnBlockGoalMixin extends MoveToBlockGoal {

    @Unique
    private boolean supplementaries$doormat = false;

    protected CatSitOnBlockGoalMixin(PathfinderMob creature, double speedIn, int length) {
        super(creature, speedIn, length);
    }

    @Inject(method = { "isValidTarget" }, at = { @At("HEAD") }, cancellable = true)
    protected void shouldMoveTo(LevelReader worldIn, BlockPos pos, CallbackInfoReturnable<Boolean> info) {
        Block block = worldIn.m_8055_(pos).m_60734_();
        this.supplementaries$doormat = block instanceof DoormatBlock;
        if (block instanceof PlanterBlock || this.supplementaries$doormat) {
            info.setReturnValue(true);
        }
    }

    @Override
    public double acceptedDistance() {
        return this.supplementaries$doormat ? 0.8 : super.acceptedDistance();
    }

    @Override
    protected BlockPos getMoveToTarget() {
        return this.supplementaries$doormat ? this.f_25602_ : this.f_25602_;
    }
}