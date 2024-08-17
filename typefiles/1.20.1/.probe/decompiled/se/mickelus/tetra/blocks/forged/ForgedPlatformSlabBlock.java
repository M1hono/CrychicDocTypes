package se.mickelus.tetra.blocks.forged;

import java.util.List;
import javax.annotation.Nullable;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.block.SlabBlock;
import se.mickelus.tetra.blocks.InitializableBlock;

@ParametersAreNonnullByDefault
public class ForgedPlatformSlabBlock extends SlabBlock implements InitializableBlock {

    public static final String identifier = "forged_platform_slab";

    public ForgedPlatformSlabBlock() {
        super(ForgedBlockCommon.propertiesSolid);
    }

    @Override
    public void appendHoverText(ItemStack itemStack, @Nullable BlockGetter world, List<Component> tooltip, TooltipFlag advanced) {
        tooltip.add(ForgedBlockCommon.locationTooltip);
    }
}