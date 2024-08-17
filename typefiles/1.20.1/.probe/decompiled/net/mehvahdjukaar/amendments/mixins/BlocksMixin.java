package net.mehvahdjukaar.amendments.mixins;

import java.util.Map;
import java.util.function.Predicate;
import net.mehvahdjukaar.amendments.common.block.BoilingWaterCauldronBlock;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.LayeredCauldronBlock;
import net.minecraft.world.level.block.state.BlockBehaviour;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;
import org.spongepowered.asm.mixin.injection.Slice;

@Mixin({ Blocks.class })
public class BlocksMixin {

    @Redirect(method = { "<clinit>" }, at = @At(value = "NEW", target = "(Lnet/minecraft/world/level/block/state/BlockBehaviour$Properties;Ljava/util/function/Predicate;Ljava/util/Map;)Lnet/minecraft/world/level/block/LayeredCauldronBlock;", ordinal = 0), slice = @Slice(from = @At(value = "CONSTANT", args = { "stringValue=water_cauldron" })))
    private static LayeredCauldronBlock amendments$overrideCauldron(BlockBehaviour.Properties properties, Predicate fillPredicate, Map interactions) {
        return new BoilingWaterCauldronBlock(properties, fillPredicate, interactions);
    }
}