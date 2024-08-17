package de.keksuccino.fancymenu.util.enums;

import de.keksuccino.fancymenu.util.cycle.LocalizedGenericValueCycle;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public interface LocalizedCycleEnum<E> extends LocalizedEnum<E> {

    @NotNull
    default MutableComponent getCycleComponent() {
        return Component.translatable(this.getLocalizationKeyBase(), this.getValueComponent()).withStyle(this.getCycleComponentStyle());
    }

    @NotNull
    default Style getCycleComponentStyle() {
        return Style.EMPTY;
    }

    @NotNull
    default LocalizedGenericValueCycle<E> cycle(@Nullable E selected) {
        LocalizedGenericValueCycle<E> cycle = LocalizedGenericValueCycle.of(this.getLocalizationKeyBase(), this.getValues());
        cycle.setCycleComponentStyleSupplier(consumes -> this.getCycleComponentStyle());
        cycle.setValueComponentStyleSupplier(consumes -> this.getValueComponentStyle());
        cycle.setValueNameSupplier(consumes -> consumes instanceof LocalizedCycleEnum<?> e ? I18n.get(e.getValueLocalizationKey()) : consumes.toString());
        if (selected != null) {
            cycle.setCurrentValue(selected);
        }
        return cycle;
    }

    default LocalizedGenericValueCycle<E> cycle() {
        return this.cycle(this.getByNameInternal(this.getName()));
    }
}