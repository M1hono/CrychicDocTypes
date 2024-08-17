package se.mickelus.tetra.craftingeffect.outcome;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.tetra.module.schematic.UpgradeSchematic;
import se.mickelus.tetra.util.StreamHelper;

@ParametersAreNonnullByDefault
public class ApplyListOutcome implements CraftingEffectOutcome {

    EffectPair[] effects;

    boolean random = false;

    int count = Integer.MAX_VALUE;

    @Override
    public boolean apply(ResourceLocation[] unlockedEffects, ItemStack upgradedStack, String slot, boolean isReplacing, Player player, ItemStack[] preMaterials, Map<ToolAction, Integer> tools, Level world, UpgradeSchematic schematic, BlockPos pos, BlockState blockState, boolean consumeResources, ItemStack[] postMaterials) {
        Collector<EffectPair, ?, List<EffectPair>> collector = this.random ? StreamHelper.toShuffledList() : Collectors.toUnmodifiableList();
        List<EffectPair> applicableOutcomes = (List<EffectPair>) Arrays.stream(this.effects).filter(outcome -> outcome.requirement.test(unlockedEffects, upgradedStack, slot, isReplacing, player, preMaterials, tools, schematic, world, pos, blockState)).collect(collector);
        for (int i = 0; i < applicableOutcomes.size() & i < this.count; i++) {
            ((EffectPair) applicableOutcomes.get(i)).outcome.apply(unlockedEffects, upgradedStack, slot, isReplacing, player, preMaterials, tools, world, schematic, pos, blockState, consumeResources, postMaterials);
        }
        return !applicableOutcomes.isEmpty();
    }
}