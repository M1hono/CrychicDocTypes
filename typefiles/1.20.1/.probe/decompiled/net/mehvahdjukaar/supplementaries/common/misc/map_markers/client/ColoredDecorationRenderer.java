package net.mehvahdjukaar.supplementaries.common.misc.map_markers.client;

import net.mehvahdjukaar.moonlight.api.map.client.DecorationRenderer;
import net.mehvahdjukaar.supplementaries.common.misc.map_markers.ColoredDecoration;
import net.minecraft.resources.ResourceLocation;

public class ColoredDecorationRenderer extends DecorationRenderer<ColoredDecoration> {

    public ColoredDecorationRenderer(ResourceLocation texture) {
        super(texture);
    }

    public int getColor(ColoredDecoration decoration) {
        return decoration.getColorValue();
    }
}