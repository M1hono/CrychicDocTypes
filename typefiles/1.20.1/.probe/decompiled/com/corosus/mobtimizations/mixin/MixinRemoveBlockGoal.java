package com.corosus.mobtimizations.mixin;

import com.corosus.mobtimizations.Mobtimizations;
import net.minecraft.world.entity.ai.goal.RemoveBlockGoal;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ RemoveBlockGoal.class })
public abstract class MixinRemoveBlockGoal {

    @Shadow
    private Block blockToRemove;

    @Inject(method = { "canUse" }, at = { @At("HEAD") }, cancellable = true)
    public void canUse(CallbackInfoReturnable<Boolean> cir) {
        if (this.blockToRemove == Blocks.TURTLE_EGG && !Mobtimizations.canCrushEggs()) {
            Mobtimizations.incCancel();
            cir.setReturnValue(false);
        }
    }
}