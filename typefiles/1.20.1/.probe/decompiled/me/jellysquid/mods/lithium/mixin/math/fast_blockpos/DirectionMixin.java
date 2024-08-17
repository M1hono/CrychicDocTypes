package me.jellysquid.mods.lithium.mixin.math.fast_blockpos;

import net.minecraft.core.Direction;
import net.minecraft.core.Vec3i;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Overwrite;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ Direction.class })
public class DirectionMixin {

    private int offsetX;

    private int offsetY;

    private int offsetZ;

    @Inject(method = { "<init>" }, at = { @At("RETURN") })
    private void reinit(String enumName, int ordinal, int id, int idOpposite, int idHorizontal, String name, Direction.AxisDirection direction, Direction.Axis axis, Vec3i vector, CallbackInfo ci) {
        this.offsetX = vector.getX();
        this.offsetY = vector.getY();
        this.offsetZ = vector.getZ();
    }

    @Overwrite
    public int getStepX() {
        return this.offsetX;
    }

    @Overwrite
    public int getStepY() {
        return this.offsetY;
    }

    @Overwrite
    public int getStepZ() {
        return this.offsetZ;
    }
}