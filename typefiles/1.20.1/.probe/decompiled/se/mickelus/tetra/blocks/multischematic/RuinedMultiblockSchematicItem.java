package se.mickelus.tetra.blocks.multischematic;

import java.util.List;
import javax.annotation.Nullable;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;

public class RuinedMultiblockSchematicItem extends BaseMultiblockSchematicItem {

    public RuinedMultiblockSchematicItem(Block ruinedBlock, MultiblockSchematicBlock block) {
        super(ruinedBlock, block);
    }

    @Override
    public void appendHoverText(ItemStack itemStack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        tooltip.add(Component.translatable("block.tetra.multi_schematic.ruined").withStyle(ChatFormatting.DARK_RED, ChatFormatting.ITALIC));
        tooltip.add(Component.literal(" "));
        tooltip.addAll(this.getTooltip());
    }
}