package io.github.lightman314.lightmanscurrency.client.gui.widget;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import io.github.lightman314.lightmanscurrency.client.gui.easy.rendering.Sprite;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.PlainButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyAddonHelper;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.util.ScreenPosition;
import io.github.lightman314.lightmanscurrency.common.traders.InputTraderData;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import javax.annotation.Nonnull;
import net.minecraft.core.Direction;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.util.NonNullSupplier;

public class DirectionalSettingsWidget {

    private static final Map<Direction, Sprite> SPRITE_CACHE_TRUE = new HashMap();

    private static final Map<Direction, Sprite> SPRITE_CACHE_FALSE = new HashMap();

    public static final ResourceLocation BLOCK_SIDE_TEXTURE = new ResourceLocation("lightmanscurrency", "textures/gui/blocksides.png");

    private static final List<Direction> DIRECTIONS = Lists.newArrayList(new Direction[] { Direction.DOWN, Direction.UP, Direction.NORTH, Direction.SOUTH, Direction.WEST, Direction.EAST });

    private static final int SPACING = 20;

    private final Function<Direction, Boolean> currentValueSource;

    private final Consumer<Direction> onPress;

    List<PlainButton> directionButtons;

    public boolean visible = true;

    public DirectionalSettingsWidget(ScreenPosition pos, Function<Direction, Boolean> currentValueSource, ImmutableList<Direction> ignoreSides, Consumer<Direction> onPress, Consumer<Object> addButton) {
        this(pos.x, pos.y, currentValueSource, ignoreSides, onPress, addButton);
    }

    public DirectionalSettingsWidget(int x, int y, Function<Direction, Boolean> currentValueSource, ImmutableList<Direction> ignoreSides, Consumer<Direction> onPress, Consumer<Object> addButton) {
        this.currentValueSource = currentValueSource;
        this.onPress = onPress;
        this.directionButtons = Lists.newArrayListWithCapacity(Direction.values().length);
        for (Direction side : DIRECTIONS) {
            PlainButton button = new PlainButton(x + this.getSidePosX(side), y + this.getSidePosY(side), this::onButtonPress, spriteForSide(side, () -> (Boolean) this.currentValueSource.apply(side))).withAddons(EasyAddonHelper.tooltip(InputTraderData.getFacingName(side)));
            button.f_93624_ = !ignoreSides.contains(side);
            this.directionButtons.add(button);
            addButton.accept(button);
        }
    }

    @Nonnull
    private static NonNullSupplier<Sprite> spriteForSide(@Nonnull Direction side, @Nonnull NonNullSupplier<Boolean> value) {
        return () -> getSprite(side, value.get());
    }

    @Nonnull
    private static Sprite getSprite(Direction side, boolean value) {
        Map<Direction, Sprite> map = value ? SPRITE_CACHE_TRUE : SPRITE_CACHE_FALSE;
        if (!map.containsKey(side)) {
            map.put(side, Sprite.SimpleSprite(BLOCK_SIDE_TEXTURE, getSideU(side), value ? 32 : 0, 16, 16));
        }
        return (Sprite) map.get(side);
    }

    private int getSidePosX(Direction side) {
        return switch(side) {
            case UP, SOUTH, DOWN ->
                20;
            case EAST, NORTH ->
                40;
            default ->
                0;
        };
    }

    private int getSidePosY(Direction side) {
        return switch(side) {
            case SOUTH, EAST, WEST ->
                20;
            case DOWN, NORTH ->
                40;
            default ->
                0;
        };
    }

    private static int getSideU(Direction side) {
        return side.get3DDataValue() * 16;
    }

    private void onButtonPress(EasyButton button) {
        if (button instanceof PlainButton) {
            int index = this.directionButtons.indexOf(button);
            if (index < 0) {
                return;
            }
            this.onPress.accept(Direction.from3DDataValue(index));
        }
    }
}