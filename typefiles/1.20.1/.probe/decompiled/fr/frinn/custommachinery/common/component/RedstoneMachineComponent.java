package fr.frinn.custommachinery.common.component;

import fr.frinn.custommachinery.api.codec.NamedCodec;
import fr.frinn.custommachinery.api.component.ComponentIOMode;
import fr.frinn.custommachinery.api.component.IComparatorInputComponent;
import fr.frinn.custommachinery.api.component.IMachineComponentManager;
import fr.frinn.custommachinery.api.component.IMachineComponentTemplate;
import fr.frinn.custommachinery.api.component.ITickableComponent;
import fr.frinn.custommachinery.api.component.MachineComponentType;
import fr.frinn.custommachinery.api.component.handler.IComponentHandler;
import fr.frinn.custommachinery.common.init.CustomMachineTile;
import fr.frinn.custommachinery.common.init.Registration;
import fr.frinn.custommachinery.common.util.Utils;
import fr.frinn.custommachinery.impl.codec.RegistrarCodec;
import fr.frinn.custommachinery.impl.component.AbstractMachineComponent;
import java.util.stream.Stream;
import net.minecraft.core.Direction;

public class RedstoneMachineComponent extends AbstractMachineComponent implements ITickableComponent {

    private final int powerToPause;

    private final int craftingPowerOutput;

    private final int idlePowerOutput;

    private final int erroredPowerOutput;

    private final int pausedPowerOutput;

    private final MachineComponentType<?> comparatorInputType;

    private final String comparatorInputID;

    private int checkRedstoneCooldown = Utils.RAND.nextInt(20);

    private boolean paused = false;

    public RedstoneMachineComponent(IMachineComponentManager manager, int powerToPause, int craftingPowerOutput, int idlePowerOutput, int erroredPowerOutput, int pausedPowerOutput, MachineComponentType<?> comparatorInputType, String comparatorInputID) {
        super(manager, ComponentIOMode.BOTH);
        this.powerToPause = powerToPause;
        this.craftingPowerOutput = craftingPowerOutput;
        this.idlePowerOutput = idlePowerOutput;
        this.erroredPowerOutput = erroredPowerOutput;
        this.pausedPowerOutput = pausedPowerOutput;
        this.comparatorInputType = comparatorInputType;
        this.comparatorInputID = comparatorInputID;
    }

    public RedstoneMachineComponent(IMachineComponentManager manager) {
        this(manager, 999, 0, 0, 0, 0, (MachineComponentType<?>) Registration.ENERGY_MACHINE_COMPONENT.get(), "");
    }

    @Override
    public MachineComponentType<RedstoneMachineComponent> getType() {
        return (MachineComponentType<RedstoneMachineComponent>) Registration.REDSTONE_MACHINE_COMPONENT.get();
    }

    @Override
    public void serverTick() {
        if (this.checkRedstoneCooldown-- <= 0) {
            this.checkRedstoneCooldown = 20;
            if (!this.getManager().getTile().isPaused() && this.shouldPauseMachine()) {
                this.getManager().getTile().setPaused(true);
                this.paused = true;
            }
            if (this.paused && !this.shouldPauseMachine()) {
                this.getManager().getTile().setPaused(false);
                this.paused = false;
            }
        }
    }

    private boolean shouldPauseMachine() {
        return Stream.of(Direction.values()).mapToInt(direction -> this.getManager().getLevel().m_277185_(this.getManager().getTile().m_58899_(), direction)).max().orElse(0) >= this.powerToPause;
    }

    public int getPowerToPause() {
        return this.powerToPause;
    }

    public int getPowerOutput() {
        return switch(this.getManager().getTile().getStatus()) {
            case IDLE ->
                this.idlePowerOutput;
            case ERRORED ->
                this.erroredPowerOutput;
            case RUNNING ->
                this.craftingPowerOutput;
            case PAUSED ->
                this.pausedPowerOutput;
        };
    }

    public int getComparatorInput() {
        return (Integer) ((CustomMachineTile) this.getManager().getTile()).getComponentManager().getComponent(this.comparatorInputType).map(component -> {
            if (component instanceof IComparatorInputComponent) {
                return (IComparatorInputComponent) component;
            } else {
                return component instanceof IComponentHandler ? (IComparatorInputComponent) ((IComponentHandler) component).getComponentForID(this.comparatorInputID).orElse(null) : null;
            }
        }).map(IComparatorInputComponent::getComparatorInput).orElse(0);
    }

    public int getMachinePower() {
        return Stream.of(Direction.values()).mapToInt(direction -> this.getManager().getLevel().m_277185_(this.getManager().getTile().m_58899_(), direction)).max().orElse(0);
    }

    public static record Template(int powerToPause, int craftingPowerOutput, int idlePowerOutput, int erroredPowerOutput, int pausedPowerOutput, MachineComponentType<?> comparatorInputType, String comparatorInputId) implements IMachineComponentTemplate<RedstoneMachineComponent> {

        public static final NamedCodec<RedstoneMachineComponent.Template> CODEC = NamedCodec.record(templateInstance -> templateInstance.group(NamedCodec.INT.optionalFieldOf("powertopause", 1).forGetter(template -> template.powerToPause), NamedCodec.INT.optionalFieldOf("craftingpoweroutput", 0).forGetter(template -> template.craftingPowerOutput), NamedCodec.INT.optionalFieldOf("idlepoweroutput", 0).forGetter(template -> template.idlePowerOutput), NamedCodec.INT.optionalFieldOf("erroredpoweroutput", 0).forGetter(template -> template.erroredPowerOutput), NamedCodec.INT.optionalFieldOf("pausedpoweroutput", 0).forGetter(template -> template.pausedPowerOutput), RegistrarCodec.MACHINE_COMPONENT.optionalFieldOf("comparatorinputtype", (MachineComponentType<?>) Registration.ENERGY_MACHINE_COMPONENT.get()).forGetter(template -> template.comparatorInputType), NamedCodec.STRING.optionalFieldOf("comparatorinputid", "").forGetter(template -> template.comparatorInputId)).apply(templateInstance, RedstoneMachineComponent.Template::new), "Redstone machine component");

        @Override
        public MachineComponentType<RedstoneMachineComponent> getType() {
            return (MachineComponentType<RedstoneMachineComponent>) Registration.REDSTONE_MACHINE_COMPONENT.get();
        }

        @Override
        public String getId() {
            return "";
        }

        @Override
        public boolean canAccept(Object ingredient, boolean isInput, IMachineComponentManager manager) {
            return false;
        }

        public RedstoneMachineComponent build(IMachineComponentManager manager) {
            return new RedstoneMachineComponent(manager, this.powerToPause, this.craftingPowerOutput, this.idlePowerOutput, this.erroredPowerOutput, this.pausedPowerOutput, this.comparatorInputType, this.comparatorInputId);
        }
    }
}