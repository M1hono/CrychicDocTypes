package se.mickelus.tetra.gui.stats.getter;

import java.util.Optional;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.world.entity.ai.attributes.Attribute;
import net.minecraft.world.entity.ai.attributes.AttributeInstance;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.tetra.items.modular.IModularItem;
import se.mickelus.tetra.module.ItemModuleMajor;
import se.mickelus.tetra.properties.AttributeHelper;

@ParametersAreNonnullByDefault
public class StatGetterAttribute implements IStatGetter {

    private final Attribute attribute;

    private boolean ignoreBase = false;

    private boolean ignoreBonuses = false;

    private double offset = 0.0;

    public StatGetterAttribute(Attribute attribute) {
        this.attribute = attribute;
    }

    public StatGetterAttribute(Attribute attribute, boolean ignoreBase) {
        this(attribute);
        this.ignoreBase = ignoreBase;
    }

    public StatGetterAttribute(Attribute attribute, boolean ignoreBase, boolean ignoreBonuses) {
        this(attribute);
        this.ignoreBase = ignoreBase;
        this.ignoreBonuses = ignoreBonuses;
    }

    public StatGetterAttribute withOffset(double offset) {
        this.offset = offset;
        return this;
    }

    @Override
    public boolean shouldShow(Player player, ItemStack currentStack, ItemStack previewStack) {
        double baseValue = this.ignoreBase ? 0.0 : (Double) Optional.ofNullable(player.m_21051_(this.attribute)).map(AttributeInstance::m_22115_).orElse(0.0) + this.offset;
        return this.getValue(player, currentStack) != baseValue || this.getValue(player, previewStack) != baseValue;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack) {
        double baseValue = this.ignoreBase ? 0.0 : (Double) Optional.ofNullable(player.m_21051_(this.attribute)).map(AttributeInstance::m_22115_).orElse(0.0);
        return (Double) CastOptional.cast(itemStack.getItem(), IModularItem.class).map(item -> this.ignoreBonuses ? item.getModuleAttributes(itemStack) : item.getAttributeModifiers(itemStack)).map(map -> map.get(this.attribute)).map(modifiers -> (AttributeHelper.getAdditionAmount(modifiers) + baseValue) * AttributeHelper.getMultiplyAmount(modifiers)).orElse(baseValue) + this.offset;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot) {
        return (Double) CastOptional.cast(itemStack.getItem(), IModularItem.class).map(item -> item.getModuleFromSlot(itemStack, slot)).map(module -> module.getAttributeModifiers(itemStack)).map(map -> map.get(this.attribute)).map(modifiers -> AttributeHelper.getAdditionAmount(modifiers) + (AttributeHelper.getMultiplyAmount(modifiers) - 1.0) * this.getValue(player, itemStack)).orElse(0.0);
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot, String improvement) {
        return (Double) CastOptional.cast(itemStack.getItem(), IModularItem.class).flatMap(item -> CastOptional.cast(item.getModuleFromSlot(itemStack, slot), ItemModuleMajor.class)).map(module -> module.getImprovement(itemStack, improvement)).map(improvementData -> improvementData.attributes).map(map -> map.get(this.attribute)).map(modifiers -> AttributeHelper.getAdditionAmount(modifiers) + (AttributeHelper.getMultiplyAmount(modifiers) - 1.0) * this.getValue(player, itemStack)).orElse(0.0);
    }
}