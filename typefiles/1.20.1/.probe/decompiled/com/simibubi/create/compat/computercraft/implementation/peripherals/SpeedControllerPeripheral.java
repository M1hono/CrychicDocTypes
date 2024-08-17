package com.simibubi.create.compat.computercraft.implementation.peripherals;

import com.simibubi.create.content.kinetics.speedController.SpeedControllerBlockEntity;
import com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour;
import dan200.computercraft.api.lua.LuaFunction;
import org.jetbrains.annotations.NotNull;

public class SpeedControllerPeripheral extends SyncedPeripheral<SpeedControllerBlockEntity> {

    private final ScrollValueBehaviour targetSpeed;

    public SpeedControllerPeripheral(SpeedControllerBlockEntity blockEntity, ScrollValueBehaviour targetSpeed) {
        super(blockEntity);
        this.targetSpeed = targetSpeed;
    }

    @LuaFunction(mainThread = true)
    public final void setTargetSpeed(int speed) {
        this.targetSpeed.setValue(speed);
    }

    @LuaFunction
    public final float getTargetSpeed() {
        return (float) this.targetSpeed.getValue();
    }

    @NotNull
    public String getType() {
        return "Create_RotationSpeedController";
    }
}