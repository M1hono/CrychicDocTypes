package snownee.kiwi.customization.placement;

import java.util.List;
import net.minecraft.core.Vec3i;
import net.minecraft.world.level.block.state.BlockState;

public record PlaceMatchResult(BlockState blockState, int interest, List<SlotLink.MatchResult> links, List<Vec3i> offsets) implements Comparable<PlaceMatchResult> {

    public int compareTo(PlaceMatchResult o) {
        return Integer.compare(o.interest, this.interest);
    }
}