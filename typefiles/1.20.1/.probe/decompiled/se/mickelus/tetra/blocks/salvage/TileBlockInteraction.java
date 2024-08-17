package se.mickelus.tetra.blocks.salvage;

import java.util.function.Function;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.mutil.util.TileEntityOptional;

@ParametersAreNonnullByDefault
public class TileBlockInteraction<T extends BlockEntity> extends BlockInteraction {

    private final Function<T, Boolean> predicate;

    private final Class<T> tileEntityClass;

    public TileBlockInteraction(ToolAction requiredTool, int requiredLevel, Direction face, float minX, float maxX, float minY, float maxY, Class<T> tileEntityClass, Function<T, Boolean> predicate, InteractionOutcome outcome) {
        super(requiredTool, requiredLevel, face, minX, maxX, minY, maxY, outcome);
        this.tileEntityClass = tileEntityClass;
        this.predicate = predicate;
    }

    @Override
    public boolean applicableForBlock(Level world, BlockPos pos, BlockState blockState) {
        return (Boolean) TileEntityOptional.from(world, pos, this.tileEntityClass).map(this.predicate::apply).orElse(false);
    }
}