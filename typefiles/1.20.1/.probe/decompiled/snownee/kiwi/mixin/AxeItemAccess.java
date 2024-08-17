package snownee.kiwi.mixin;

import java.util.Map;
import net.minecraft.world.item.AxeItem;
import net.minecraft.world.level.block.Block;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ AxeItem.class })
public interface AxeItemAccess {

    @Accessor
    static Map<Block, Block> getSTRIPPABLES() {
        throw new IllegalStateException();
    }

    @Accessor
    @Mutable
    static void setSTRIPPABLES(Map<Block, Block> map) {
        throw new IllegalStateException();
    }
}