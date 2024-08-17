package malte0811.ferritecore.mixin.blockstatecache;

import it.unimi.dsi.fastutil.doubles.DoubleList;
import net.minecraft.world.phys.shapes.ArrayVoxelShape;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ ArrayVoxelShape.class })
public interface ArrayVSAccess extends VoxelShapeAccess {

    @Accessor("xs")
    @Mutable
    void setXPoints(DoubleList var1);

    @Accessor("ys")
    @Mutable
    void setYPoints(DoubleList var1);

    @Accessor("zs")
    @Mutable
    void setZPoints(DoubleList var1);

    @Accessor("xs")
    DoubleList getXPoints();

    @Accessor("ys")
    DoubleList getYPoints();

    @Accessor("zs")
    DoubleList getZPoints();
}