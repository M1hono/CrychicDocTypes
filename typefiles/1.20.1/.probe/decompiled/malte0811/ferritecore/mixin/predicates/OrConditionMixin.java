package malte0811.ferritecore.mixin.predicates;

import java.util.function.Predicate;
import malte0811.ferritecore.impl.Deduplicator;
import malte0811.ferritecore.util.PredicateHelper;
import net.minecraft.client.renderer.block.model.multipart.Condition;
import net.minecraft.client.renderer.block.model.multipart.OrCondition;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Overwrite;
import org.spongepowered.asm.mixin.Shadow;

@Mixin(value = { OrCondition.class }, priority = 2000)
public class OrConditionMixin {

    @Shadow
    @Final
    private Iterable<? extends Condition> conditions;

    @Overwrite
    public Predicate<BlockState> getPredicate(StateDefinition<Block, BlockState> stateContainer) {
        return Deduplicator.or(PredicateHelper.toCanonicalList(this.conditions, stateContainer));
    }
}