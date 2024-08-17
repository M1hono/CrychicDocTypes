package se.mickelus.tetra.craftingeffect.condition;

import java.util.Arrays;
import java.util.Map;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.tetra.module.schematic.UpgradeSchematic;

@ParametersAreNonnullByDefault
public class AndCondition implements CraftingEffectCondition {

    CraftingEffectCondition[] requirements = new CraftingEffectCondition[0];

    @Override
    public boolean test(ResourceLocation[] unlocks, ItemStack upgradedStack, String slot, boolean isReplacing, Player player, ItemStack[] materials, Map<ToolAction, Integer> tools, UpgradeSchematic schematic, Level world, BlockPos pos, BlockState blockState) {
        return Arrays.stream(this.requirements).allMatch(condition -> condition.test(unlocks, upgradedStack, slot, isReplacing, player, materials, tools, schematic, world, pos, blockState));
    }
}