package snownee.kiwi.mixin.forge;

import java.util.Map;
import net.minecraft.client.color.block.BlockColor;
import net.minecraft.client.color.block.BlockColors;
import net.minecraft.core.Holder;
import net.minecraft.world.level.block.Block;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ BlockColors.class })
public interface BlockColorsAccess {

    @Accessor
    Map<Holder.Reference<Block>, BlockColor> getBlockColors();
}