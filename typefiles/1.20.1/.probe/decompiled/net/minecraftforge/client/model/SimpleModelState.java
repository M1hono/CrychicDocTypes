package net.minecraftforge.client.model;

import com.mojang.math.Transformation;
import net.minecraft.client.resources.model.ModelState;

public final class SimpleModelState implements ModelState {

    private final Transformation transformation;

    private final boolean uvLocked;

    public SimpleModelState(Transformation transformation, boolean uvLocked) {
        this.transformation = transformation;
        this.uvLocked = uvLocked;
    }

    public SimpleModelState(Transformation transformation) {
        this(transformation, false);
    }

    @Override
    public Transformation getRotation() {
        return this.transformation;
    }

    @Override
    public boolean isUvLocked() {
        return this.uvLocked;
    }
}