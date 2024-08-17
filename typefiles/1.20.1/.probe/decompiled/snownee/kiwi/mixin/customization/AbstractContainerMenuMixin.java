package snownee.kiwi.mixin.customization;

import com.llamalad7.mixinextras.injector.wrapoperation.Operation;
import com.llamalad7.mixinextras.injector.wrapoperation.WrapOperation;
import com.llamalad7.mixinextras.sugar.Local;
import net.minecraft.core.BlockPos;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import snownee.kiwi.customization.CustomizationHooks;

@Mixin({ AbstractContainerMenu.class })
public class AbstractContainerMenuMixin {

    @WrapOperation(method = { "lambda$stillValid$0", "m_38913_", "method_17696" }, remap = false, at = { @At(value = "INVOKE", target = "Lnet/minecraft/world/level/block/state/BlockState;is(Lnet/minecraft/world/level/block/Block;)Z", remap = true) })
    private static boolean is(BlockState instance, Block block, Operation<Boolean> original, @Local(argsOnly = true) Level level, @Local(argsOnly = true) BlockPos pos) {
        boolean result = (Boolean) original.call(new Object[] { instance, block });
        return !result && CustomizationHooks.isEnabled() ? instance.m_60734_().getClass() == block.getClass() : result;
    }
}