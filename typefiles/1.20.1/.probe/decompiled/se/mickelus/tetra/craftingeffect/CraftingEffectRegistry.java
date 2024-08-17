package se.mickelus.tetra.craftingeffect;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.tetra.craftingeffect.condition.CraftingEffectCondition;
import se.mickelus.tetra.craftingeffect.outcome.CraftingEffectOutcome;
import se.mickelus.tetra.data.DataManager;
import se.mickelus.tetra.module.schematic.UpgradeSchematic;

@ParametersAreNonnullByDefault
public class CraftingEffectRegistry {

    public static CraftingEffectRegistry instance;

    protected Map<String, Class<? extends CraftingEffectCondition>> conditionTypes = new HashMap();

    Map<String, Class<? extends CraftingEffectOutcome>> effectTypes = new HashMap();

    public CraftingEffectRegistry() {
        instance = this;
    }

    public static void registerConditionType(String identifier, Class<? extends CraftingEffectCondition> clazz) {
        instance.conditionTypes.put(identifier, clazz);
    }

    public static Class<? extends CraftingEffectCondition> getConditionClass(String identifier) {
        return (Class<? extends CraftingEffectCondition>) instance.conditionTypes.get(identifier);
    }

    public static void registerEffectType(String identifier, Class<? extends CraftingEffectOutcome> clazz) {
        instance.effectTypes.put(identifier, clazz);
    }

    public static Class<? extends CraftingEffectOutcome> getEffectClass(String identifier) {
        return (Class<? extends CraftingEffectOutcome>) instance.effectTypes.get(identifier);
    }

    public static CraftingEffect[] getEffects(ResourceLocation[] unlocks, ItemStack upgradedStack, String slot, boolean isReplacing, Player player, ItemStack[] materials, Map<ToolAction, Integer> tools, UpgradeSchematic schematic, Level world, BlockPos pos, BlockState blockState) {
        return (CraftingEffect[]) DataManager.instance.craftingEffectData.getData().values().stream().filter(effect -> effect.isApplicable(unlocks, upgradedStack, slot, isReplacing, player, materials, tools, schematic, world, pos, blockState)).toArray(CraftingEffect[]::new);
    }
}