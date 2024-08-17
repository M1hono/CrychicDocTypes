package se.mickelus.tetra.advancements;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance;
import net.minecraft.advancements.critereon.ContextAwarePredicate;
import net.minecraft.advancements.critereon.DeserializationContext;
import net.minecraft.advancements.critereon.ItemPredicate;
import net.minecraft.advancements.critereon.MinMaxBounds;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.common.ToolAction;
import se.mickelus.mutil.util.JsonOptional;

@ParametersAreNonnullByDefault
public class ModuleCraftCriterion extends AbstractCriterionTriggerInstance {

    public static final GenericTrigger<ModuleCraftCriterion> trigger = new GenericTrigger<>("tetra:craft_module", ModuleCraftCriterion::deserialize);

    private final ItemPredicate before;

    private final ItemPredicate after;

    private final String schematic;

    private final String slot;

    private final String module;

    private final String variant;

    private final ToolAction toolAction;

    private final MinMaxBounds.Ints toolLevel;

    public ModuleCraftCriterion(ContextAwarePredicate playerCondition, ItemPredicate before, ItemPredicate after, String schematic, String slot, String module, String variant, ToolAction toolAction, MinMaxBounds.Ints toolLevel) {
        super(trigger.getId(), playerCondition);
        this.before = before;
        this.after = after;
        this.schematic = schematic;
        this.slot = slot;
        this.module = module;
        this.variant = variant;
        this.toolAction = toolAction;
        this.toolLevel = toolLevel;
    }

    public static void trigger(ServerPlayer player, ItemStack before, ItemStack after, String schematic, String slot, String module, String variant, ToolAction toolAction, int toolLevel) {
        trigger.fulfillCriterion(player, criterion -> criterion.test(before, after, schematic, slot, module, variant, toolAction, toolLevel));
    }

    private static ModuleCraftCriterion deserialize(JsonObject json, ContextAwarePredicate entityPredicate, DeserializationContext conditionsParser) {
        return new ModuleCraftCriterion(entityPredicate, (ItemPredicate) JsonOptional.field(json, "before").map(ItemPredicate::m_45051_).orElse(null), (ItemPredicate) JsonOptional.field(json, "after").map(ItemPredicate::m_45051_).orElse(null), (String) JsonOptional.field(json, "schematic").map(JsonElement::getAsString).orElse(null), (String) JsonOptional.field(json, "slot").map(JsonElement::getAsString).orElse(null), (String) JsonOptional.field(json, "module").map(JsonElement::getAsString).orElse(null), (String) JsonOptional.field(json, "variant").map(JsonElement::getAsString).orElse(null), (ToolAction) JsonOptional.field(json, "tool").map(JsonElement::getAsString).map(ToolAction::get).orElse(null), (MinMaxBounds.Ints) JsonOptional.field(json, "toolLevel").map(MinMaxBounds.Ints::m_55373_).orElse(MinMaxBounds.Ints.ANY));
    }

    public boolean test(ItemStack before, ItemStack after, String schematic, String slot, String module, String variant, ToolAction toolAction, int toolLevel) {
        if (this.before != null && !this.before.matches(before)) {
            return false;
        } else if (this.after != null && !this.after.matches(after)) {
            return false;
        } else if (this.schematic != null && !this.schematic.equals(schematic)) {
            return false;
        } else if (this.slot != null && !this.slot.equals(slot)) {
            return false;
        } else if (this.module != null && !this.module.equals(module)) {
            return false;
        } else if (this.variant != null && !this.variant.equals(variant)) {
            return false;
        } else {
            return this.toolAction != null && !this.toolAction.equals(toolAction) ? false : this.toolLevel.matches(toolLevel);
        }
    }
}