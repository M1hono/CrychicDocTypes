package net.mehvahdjukaar.moonlight.core.mixins.accessor;

import java.util.Map;
import net.minecraft.core.dispenser.DispenseItemBehavior;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.DispenserBlock;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ DispenserBlock.class })
public interface DispenserBlockAccessor {

    @Accessor("DISPENSER_REGISTRY")
    static Map<Item, DispenseItemBehavior> getDispenserRegistry() {
        throw new AssertionError();
    }
}