package fr.lucreeper74.createmetallurgy.content.kinetics.beltGrinder;

import com.jozufozu.flywheel.api.Instancer;
import com.jozufozu.flywheel.api.MaterialManager;
import com.simibubi.create.content.kinetics.base.SingleRotatingInstance;
import com.simibubi.create.content.kinetics.base.flwdata.RotatingData;

public class BeltGrinderInstance extends SingleRotatingInstance<BeltGrinderBlockEntity> {

    public BeltGrinderInstance(MaterialManager materialManager, BeltGrinderBlockEntity blockEntity) {
        super(materialManager, blockEntity);
    }

    @Override
    protected Instancer<RotatingData> getModel() {
        return this.getRotatingMaterial().getModel(this.shaft());
    }
}