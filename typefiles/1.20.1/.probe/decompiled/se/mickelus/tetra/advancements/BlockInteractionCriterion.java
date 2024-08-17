package se.mickelus.tetra.advancements;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance;
import net.minecraft.advancements.critereon.ContextAwarePredicate;
import net.minecraft.advancements.critereon.DeserializationContext;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.mutil.util.JsonOptional;
import se.mickelus.tetra.blocks.PropertyMatcher;

public class BlockInteractionCriterion extends AbstractCriterionTriggerInstance {

    public static final GenericTrigger<BlockInteractionCriterion> trigger = new GenericTrigger<>("tetra:block_interaction", BlockInteractionCriterion::deserialize);

    private final PropertyMatcher before;

    private final PropertyMatcher after;

    private final ToolAction toolAction;

    private final int toolLevel;

    public BlockInteractionCriterion(ContextAwarePredicate playerCondition, PropertyMatcher before, PropertyMatcher after, ToolAction toolAction, int toolLevel) {
        super(trigger.getId(), playerCondition);
        this.before = before;
        this.after = after;
        this.toolAction = toolAction;
        this.toolLevel = toolLevel;
    }

    public static void trigger(ServerPlayer player, BlockState beforeState, BlockState afterState, ToolAction usedToolAction, int usedToolLevel) {
        trigger.fulfillCriterion(player, criterion -> criterion.test(beforeState, afterState, usedToolAction, usedToolLevel));
    }

    private static BlockInteractionCriterion deserialize(JsonObject json, ContextAwarePredicate entityPredicate, DeserializationContext conditionsParser) {
        return new BlockInteractionCriterion(entityPredicate, (PropertyMatcher) JsonOptional.field(json, "before").map(PropertyMatcher::deserialize).orElse(null), (PropertyMatcher) JsonOptional.field(json, "after").map(PropertyMatcher::deserialize).orElse(null), (ToolAction) JsonOptional.field(json, "tool").map(JsonElement::getAsString).map(ToolAction::get).orElse(null), (Integer) JsonOptional.field(json, "toolLevel").map(JsonElement::getAsInt).orElse(-1));
    }

    public boolean test(BlockState beforeState, BlockState afterState, ToolAction usedToolAction, int usedToolLevel) {
        if (this.before != null && !this.before.test(beforeState)) {
            return false;
        } else if (this.after != null && !this.after.test(afterState)) {
            return false;
        } else {
            return this.toolAction != null && !this.toolAction.equals(usedToolAction) ? false : this.toolLevel == -1 || this.toolLevel == usedToolLevel;
        }
    }
}