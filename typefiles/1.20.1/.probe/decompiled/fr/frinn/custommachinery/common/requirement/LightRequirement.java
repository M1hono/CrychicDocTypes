package fr.frinn.custommachinery.common.requirement;

import fr.frinn.custommachinery.api.codec.NamedCodec;
import fr.frinn.custommachinery.api.component.MachineComponentType;
import fr.frinn.custommachinery.api.crafting.CraftingResult;
import fr.frinn.custommachinery.api.crafting.ICraftingContext;
import fr.frinn.custommachinery.api.integration.jei.IDisplayInfo;
import fr.frinn.custommachinery.api.integration.jei.IDisplayInfoRequirement;
import fr.frinn.custommachinery.api.requirement.ITickableRequirement;
import fr.frinn.custommachinery.api.requirement.RequirementIOMode;
import fr.frinn.custommachinery.api.requirement.RequirementType;
import fr.frinn.custommachinery.common.component.LightMachineComponent;
import fr.frinn.custommachinery.common.init.Registration;
import fr.frinn.custommachinery.impl.requirement.AbstractRequirement;
import fr.frinn.custommachinery.impl.util.IntRange;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Items;

public class LightRequirement extends AbstractRequirement<LightMachineComponent> implements ITickableRequirement<LightMachineComponent>, IDisplayInfoRequirement {

    public static final NamedCodec<LightRequirement> CODEC = NamedCodec.record(lightRequirementInstance -> lightRequirementInstance.group(IntRange.CODEC.fieldOf("light").forGetter(requirement -> requirement.light), NamedCodec.BOOL.optionalFieldOf("sky", false).forGetter(requirement -> requirement.sky)).apply(lightRequirementInstance, LightRequirement::new), "Light requirement");

    private final IntRange light;

    private final boolean sky;

    public LightRequirement(IntRange light, boolean sky) {
        super(RequirementIOMode.INPUT);
        this.light = light;
        this.sky = sky;
    }

    @Override
    public RequirementType<?> getType() {
        return (RequirementType<?>) Registration.LIGHT_REQUIREMENT.get();
    }

    public boolean test(LightMachineComponent component, ICraftingContext context) {
        return this.sky ? this.light.contains(Integer.valueOf(component.getSkyLight())) : this.light.contains(Integer.valueOf(component.getBlockLight()));
    }

    public CraftingResult processStart(LightMachineComponent component, ICraftingContext context) {
        if (this.test(component, context)) {
            return CraftingResult.success();
        } else {
            return this.sky ? CraftingResult.error(Component.translatable("custommachinery.requirements.light.sky.error", this.light.toFormattedString(), component.getSkyLight())) : CraftingResult.error(Component.translatable("custommachinery.requirements.light.block.error", this.light, component.getBlockLight()));
        }
    }

    public CraftingResult processEnd(LightMachineComponent component, ICraftingContext context) {
        return CraftingResult.pass();
    }

    @Override
    public MachineComponentType<LightMachineComponent> getComponentType() {
        return (MachineComponentType<LightMachineComponent>) Registration.LIGHT_MACHINE_COMPONENT.get();
    }

    public CraftingResult processTick(LightMachineComponent component, ICraftingContext context) {
        if (this.test(component, context)) {
            return CraftingResult.success();
        } else {
            return this.sky ? CraftingResult.error(Component.translatable("custommachinery.requirements.light.sky.error", this.light.toFormattedString(), component.getSkyLight())) : CraftingResult.error(Component.translatable("custommachinery.requirements.light.block.error", this.light.toFormattedString(), component.getBlockLight()));
        }
    }

    @Override
    public void getDisplayInfo(IDisplayInfo info) {
        if (this.sky) {
            info.addTooltip(Component.translatable("custommachinery.requirements.light.sky.info", this.light.toFormattedString()));
        } else {
            info.addTooltip(Component.translatable("custommachinery.requirements.light.block.info", this.light.toFormattedString()));
        }
        info.setItemIcon(Items.TORCH);
    }
}