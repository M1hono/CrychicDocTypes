package snownee.kiwi.customization.block;

import com.google.common.collect.BiMap;
import com.google.common.collect.ImmutableBiMap;
import com.google.common.collect.Interner;
import com.google.common.collect.Interners;
import com.google.common.collect.ImmutableBiMap.Builder;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.Property;
import org.jetbrains.annotations.Nullable;

public interface KBlockUtils {

    Interner<Property<?>> PROPERTY_INTERNER = Interners.newStrongInterner();

    BiMap<String, Property<?>> COMMON_PROPERTIES = generateCommonProperties();

    static BiMap<String, Property<?>> generateCommonProperties() {
        Builder<String, Property<?>> map = ImmutableBiMap.builder();
        map.put("attached", BlockStateProperties.ATTACHED);
        map.put("bottom", BlockStateProperties.BOTTOM);
        map.put("conditional", BlockStateProperties.CONDITIONAL);
        map.put("disarmed", BlockStateProperties.DISARMED);
        map.put("drag", BlockStateProperties.DRAG);
        map.put("enabled", BlockStateProperties.ENABLED);
        map.put("extended", BlockStateProperties.EXTENDED);
        map.put("eye", BlockStateProperties.EYE);
        map.put("falling", BlockStateProperties.FALLING);
        map.put("hanging", BlockStateProperties.HANGING);
        map.put("has_record", BlockStateProperties.HAS_RECORD);
        map.put("has_book", BlockStateProperties.HAS_BOOK);
        map.put("inverted", BlockStateProperties.INVERTED);
        map.put("in_wall", BlockStateProperties.IN_WALL);
        map.put("lit", BlockStateProperties.LIT);
        map.put("locked", BlockStateProperties.LOCKED);
        map.put("occupied", BlockStateProperties.OCCUPIED);
        map.put("open", BlockStateProperties.OPEN);
        map.put("persistent", BlockStateProperties.PERSISTENT);
        map.put("powered", BlockStateProperties.POWERED);
        map.put("short", BlockStateProperties.SHORT);
        map.put("signal_fire", BlockStateProperties.SIGNAL_FIRE);
        map.put("snowy", BlockStateProperties.SNOWY);
        map.put("triggered", BlockStateProperties.TRIGGERED);
        map.put("unstable", BlockStateProperties.UNSTABLE);
        map.put("waterlogged", BlockStateProperties.WATERLOGGED);
        map.put("berries", BlockStateProperties.BERRIES);
        map.put("bloom", BlockStateProperties.BLOOM);
        map.put("shrieking", BlockStateProperties.SHRIEKING);
        map.put("can_summon", BlockStateProperties.CAN_SUMMON);
        map.put("horizontal_axis", BlockStateProperties.HORIZONTAL_AXIS);
        map.put("axis", BlockStateProperties.AXIS);
        map.put("up", BlockStateProperties.UP);
        map.put("down", BlockStateProperties.DOWN);
        map.put("north", BlockStateProperties.NORTH);
        map.put("east", BlockStateProperties.EAST);
        map.put("south", BlockStateProperties.SOUTH);
        map.put("west", BlockStateProperties.WEST);
        map.put("facing", BlockStateProperties.FACING);
        map.put("facing_hopper", BlockStateProperties.FACING_HOPPER);
        map.put("horizontal_facing", BlockStateProperties.HORIZONTAL_FACING);
        map.put("flower_amount", BlockStateProperties.FLOWER_AMOUNT);
        map.put("orientation", BlockStateProperties.ORIENTATION);
        map.put("attach_face", BlockStateProperties.ATTACH_FACE);
        map.put("bell_attachment", BlockStateProperties.BELL_ATTACHMENT);
        map.put("east_wall", BlockStateProperties.EAST_WALL);
        map.put("north_wall", BlockStateProperties.NORTH_WALL);
        map.put("south_wall", BlockStateProperties.SOUTH_WALL);
        map.put("west_wall", BlockStateProperties.WEST_WALL);
        map.put("east_redstone", BlockStateProperties.EAST_REDSTONE);
        map.put("north_redstone", BlockStateProperties.NORTH_REDSTONE);
        map.put("south_redstone", BlockStateProperties.SOUTH_REDSTONE);
        map.put("west_redstone", BlockStateProperties.WEST_REDSTONE);
        map.put("double_block_half", BlockStateProperties.DOUBLE_BLOCK_HALF);
        map.put("half", BlockStateProperties.HALF);
        map.put("rail_shape", BlockStateProperties.RAIL_SHAPE);
        map.put("rail_shape_straight", BlockStateProperties.RAIL_SHAPE_STRAIGHT);
        map.put("age_1", BlockStateProperties.AGE_1);
        map.put("age_2", BlockStateProperties.AGE_2);
        map.put("age_3", BlockStateProperties.AGE_3);
        map.put("age_4", BlockStateProperties.AGE_4);
        map.put("age_5", BlockStateProperties.AGE_5);
        map.put("age_7", BlockStateProperties.AGE_7);
        map.put("age_15", BlockStateProperties.AGE_15);
        map.put("age_25", BlockStateProperties.AGE_25);
        map.put("bites", BlockStateProperties.BITES);
        map.put("candles", BlockStateProperties.CANDLES);
        map.put("delay", BlockStateProperties.DELAY);
        map.put("distance", BlockStateProperties.DISTANCE);
        map.put("eggs", BlockStateProperties.EGGS);
        map.put("hatch", BlockStateProperties.HATCH);
        map.put("layers", BlockStateProperties.LAYERS);
        map.put("level_cauldron", BlockStateProperties.LEVEL_CAULDRON);
        map.put("level_composter", BlockStateProperties.LEVEL_COMPOSTER);
        map.put("level_flowing", BlockStateProperties.LEVEL_FLOWING);
        map.put("level_honey", BlockStateProperties.LEVEL_HONEY);
        map.put("level", BlockStateProperties.LEVEL);
        map.put("moisture", BlockStateProperties.MOISTURE);
        map.put("note", BlockStateProperties.NOTE);
        map.put("pickles", BlockStateProperties.PICKLES);
        map.put("power", BlockStateProperties.POWER);
        map.put("stage", BlockStateProperties.STAGE);
        map.put("stability_distance", BlockStateProperties.STABILITY_DISTANCE);
        map.put("rotation_16", BlockStateProperties.ROTATION_16);
        map.put("bed_part", BlockStateProperties.BED_PART);
        map.put("chest_type", BlockStateProperties.CHEST_TYPE);
        map.put("mode_comparator", BlockStateProperties.MODE_COMPARATOR);
        map.put("door_hinge", BlockStateProperties.DOOR_HINGE);
        map.put("piston_type", BlockStateProperties.PISTON_TYPE);
        map.put("slab_type", BlockStateProperties.SLAB_TYPE);
        map.put("stairs_shape", BlockStateProperties.STAIRS_SHAPE);
        map.put("bamboo_leaves", BlockStateProperties.BAMBOO_LEAVES);
        map.put("tilt", BlockStateProperties.TILT);
        map.put("vertical_direction", BlockStateProperties.VERTICAL_DIRECTION);
        map.put("dripstone_thickness", BlockStateProperties.DRIPSTONE_THICKNESS);
        map.put("sculk_sensor_phase", BlockStateProperties.SCULK_SENSOR_PHASE);
        map.put("dusted", BlockStateProperties.DUSTED);
        map.put("cracked", BlockStateProperties.CRACKED);
        return map.build();
    }

    static <T extends Property<?>> T internProperty(T property) {
        return (T) PROPERTY_INTERNER.intern(property);
    }

    static Property<?> getProperty(BlockState blockState, String key) {
        Property<?> property = blockState.m_60734_().getStateDefinition().getProperty(key);
        if (property == null) {
            throw new IllegalStateException("Property %s not found".formatted(key));
        } else {
            return property;
        }
    }

    static <T extends Comparable<T>> String getValueString(BlockState blockState, String key) {
        Property<T> property = (Property<T>) blockState.m_60734_().getStateDefinition().getProperty(key);
        if (property == null) {
            throw new IllegalStateException("Property %s not found".formatted(key));
        } else {
            return property.getName((T) blockState.m_61143_(property));
        }
    }

    static <T extends Comparable<T>> BlockState setValueByString(BlockState blockState, String key, String value) {
        Property<T> property = (Property<T>) blockState.m_60734_().getStateDefinition().getProperty(key);
        if (property == null) {
            throw new IllegalStateException("Property %s not found".formatted(key));
        } else {
            return (BlockState) blockState.m_61124_(property, (Comparable) property.getValue(value).orElseThrow());
        }
    }

    static <T extends Comparable<T>> String getNameByValue(Property<T> property, Object value) {
        return property.getName((T) value);
    }

    @Nullable
    default BlockState componentsUpdateShape(BlockState pState, Direction pDirection, BlockState pNeighborState, LevelAccessor pLevel, BlockPos pPos, BlockPos pNeighborPos) {
        KBlockSettings settings = KBlockSettings.of(this);
        return settings == null ? pState : settings.updateShape(pState, pDirection, pNeighborState, pLevel, pPos, pNeighborPos);
    }

    @Nullable
    default BlockState componentsGetStateForPlacement(BlockState pState, BlockPlaceContext pContext) {
        KBlockSettings settings = KBlockSettings.of(this);
        return settings == null ? pState : settings.getStateForPlacement(pState, pContext);
    }
}