package snownee.kiwi.customization.block.component;

import com.google.common.collect.Iterables;
import com.mojang.serialization.Codec;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import java.util.List;
import net.minecraft.core.Direction;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Mirror;
import net.minecraft.world.level.block.Rotation;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.DirectionProperty;
import snownee.kiwi.customization.block.KBlockSettings;
import snownee.kiwi.customization.block.loader.KBlockComponents;

public record HorizontalComponent(boolean oppose) implements KBlockComponent {

    public static final DirectionProperty FACING = BlockStateProperties.HORIZONTAL_FACING;

    private static final HorizontalComponent NORMAL = new HorizontalComponent(false);

    private static final HorizontalComponent OPPOSE = new HorizontalComponent(true);

    public static final Codec<HorizontalComponent> CODEC = RecordCodecBuilder.create(instance -> instance.group(Codec.BOOL.optionalFieldOf("oppose", false).forGetter(HorizontalComponent::oppose)).apply(instance, HorizontalComponent::getInstance));

    public static HorizontalComponent getInstance(boolean oppose) {
        return oppose ? OPPOSE : NORMAL;
    }

    @Override
    public KBlockComponent.Type<?> type() {
        return KBlockComponents.HORIZONTAL.getOrCreate();
    }

    @Override
    public void injectProperties(Block block, StateDefinition.Builder<Block, BlockState> builder) {
        builder.add(FACING);
    }

    @Override
    public BlockState registerDefaultState(BlockState state) {
        return (BlockState) state.m_61124_(FACING, Direction.NORTH);
    }

    @Override
    public BlockState getStateForPlacement(KBlockSettings settings, BlockState state, BlockPlaceContext context) {
        if (settings.customPlacement) {
            return state;
        } else {
            Direction firstDirection = context.m_8125_();
            Iterable<Direction> directions = Iterables.concat(List.of(firstDirection), List.of(context.getNearestLookingDirections()));
            int index = 0;
            for (Direction direction : directions) {
                index++;
                if (!direction.getAxis().isVertical() && (index <= 1 || direction != firstDirection)) {
                    BlockState blockstate = (BlockState) state.m_61124_(FACING, this.oppose ? direction : direction.getOpposite());
                    if (blockstate.m_60710_(context.m_43725_(), context.getClickedPos())) {
                        return blockstate;
                    }
                }
            }
            return null;
        }
    }

    @Override
    public Direction getHorizontalFacing(BlockState blockState) {
        Direction direction = (Direction) blockState.m_61143_(FACING);
        return this.oppose ? direction.getOpposite() : direction;
    }

    @Override
    public BlockState rotate(BlockState pState, Rotation pRotation) {
        return (BlockState) pState.m_61124_(FACING, pRotation.rotate((Direction) pState.m_61143_(FACING)));
    }

    @Override
    public BlockState mirror(BlockState pState, Mirror pMirror) {
        return pState.m_60717_(pMirror.getRotation((Direction) pState.m_61143_(FACING)));
    }
}