package snownee.lychee.core.def;

import java.text.DecimalFormat;
import java.util.Objects;
import net.minecraft.advancements.critereon.MinMaxBounds;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;

public class BoundsHelper {

    public static DecimalFormat dfCommas = new DecimalFormat("##.##");

    public static MutableComponent getDescription(MinMaxBounds<?> bounds) {
        if (bounds.isAny()) {
            return Component.literal("*");
        } else if (bounds.getMin() == null) {
            return Component.literal("<=" + dfCommas.format(bounds.getMax()));
        } else if (bounds.getMax() == null) {
            return Component.literal(">=" + dfCommas.format(bounds.getMin()));
        } else {
            return Objects.equals(bounds.getMin(), bounds.getMax()) ? Component.literal(dfCommas.format(bounds.getMin())) : Component.literal(dfCommas.format(bounds.getMin()) + "~" + dfCommas.format(bounds.getMax()));
        }
    }
}