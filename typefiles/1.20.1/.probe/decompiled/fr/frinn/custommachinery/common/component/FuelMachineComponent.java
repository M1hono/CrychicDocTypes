package fr.frinn.custommachinery.common.component;

import dev.architectury.registry.fuel.FuelRegistry;
import fr.frinn.custommachinery.api.component.ComponentIOMode;
import fr.frinn.custommachinery.api.component.IMachineComponentManager;
import fr.frinn.custommachinery.api.component.ISerializableComponent;
import fr.frinn.custommachinery.api.component.ITickableComponent;
import fr.frinn.custommachinery.api.component.MachineComponentType;
import fr.frinn.custommachinery.api.machine.MachineStatus;
import fr.frinn.custommachinery.api.network.ISyncable;
import fr.frinn.custommachinery.api.network.ISyncableStuff;
import fr.frinn.custommachinery.common.component.variant.item.FuelItemComponentVariant;
import fr.frinn.custommachinery.common.init.Registration;
import fr.frinn.custommachinery.common.network.syncable.IntegerSyncable;
import fr.frinn.custommachinery.impl.component.AbstractMachineComponent;
import java.util.function.Consumer;
import net.minecraft.nbt.CompoundTag;

public class FuelMachineComponent extends AbstractMachineComponent implements ISerializableComponent, ITickableComponent, ISyncableStuff {

    private int fuel;

    private int maxFuel;

    public FuelMachineComponent(IMachineComponentManager manager) {
        super(manager, ComponentIOMode.NONE);
    }

    @Override
    public MachineComponentType<FuelMachineComponent> getType() {
        return (MachineComponentType<FuelMachineComponent>) Registration.FUEL_MACHINE_COMPONENT.get();
    }

    @Override
    public void serialize(CompoundTag nbt) {
        nbt.putInt("fuel", this.fuel);
        nbt.putInt("maxFuel", this.maxFuel);
    }

    @Override
    public void deserialize(CompoundTag nbt) {
        if (nbt.contains("fuel", 3)) {
            this.fuel = nbt.getInt("fuel");
        }
        if (nbt.contains("maxFuel", 3)) {
            this.maxFuel = nbt.getInt("maxFuel");
        }
    }

    @Override
    public void serverTick() {
        if (this.fuel > 0 && this.getManager().getTile().getStatus() != MachineStatus.RUNNING) {
            this.fuel--;
            this.getManager().markDirty();
        }
    }

    @Override
    public void getStuffToSync(Consumer<ISyncable<?, ?>> container) {
        container.accept(IntegerSyncable.create(() -> this.fuel, fuel -> this.fuel = fuel));
        container.accept(IntegerSyncable.create(() -> this.maxFuel, maxFuel -> this.maxFuel = maxFuel));
    }

    public int getFuel() {
        return this.fuel;
    }

    public int getMaxFuel() {
        return this.maxFuel;
    }

    public void addFuel(int fuel) {
        this.fuel += fuel;
        this.maxFuel = fuel;
        this.getManager().getTile().m_6596_();
    }

    public boolean burn(int amount) {
        if (this.fuel >= amount) {
            this.fuel -= amount;
            this.getManager().markDirty();
            return true;
        } else {
            this.tryBurnItem();
            if (this.fuel >= amount) {
                this.fuel -= amount;
                this.getManager().markDirty();
                return true;
            } else {
                return false;
            }
        }
    }

    public boolean canStartRecipe(int amount) {
        return this.fuel >= amount ? true : this.getManager().getComponentHandler((MachineComponentType) Registration.ITEM_MACHINE_COMPONENT.get()).flatMap(handler -> handler.getComponents().stream().filter(component -> component.getVariant() == FuelItemComponentVariant.INSTANCE && FuelRegistry.get(component.getItemStack()) > 0).findFirst()).isPresent();
    }

    private void tryBurnItem() {
        this.getManager().getComponentHandler((MachineComponentType) Registration.ITEM_MACHINE_COMPONENT.get()).flatMap(handler -> handler.getComponents().stream().filter(component -> component.getVariant() == FuelItemComponentVariant.INSTANCE && !component.getItemStack().isEmpty()).findFirst()).ifPresent(component -> {
            int fuel = FuelRegistry.get(component.getItemStack());
            this.addFuel(fuel);
            component.extract(1, false);
        });
    }
}