package de.keksuccino.fancymenu.util.cycle;

import de.keksuccino.fancymenu.util.ConsumingSupplier;
import java.security.InvalidParameterException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.function.Consumer;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import org.jetbrains.annotations.NotNull;

public class LocalizedGenericValueCycle<T> extends ValueCycle<T> implements ILocalizedValueCycle<T> {

    protected String cycleLocalizationKey;

    protected ConsumingSupplier<T, Style> cycleStyle = consumes -> Style.EMPTY;

    protected ConsumingSupplier<T, Style> valueStyle = consumes -> Style.EMPTY;

    protected ConsumingSupplier<T, String> valueNameSupplier = Object::toString;

    @SafeVarargs
    public static <T> LocalizedGenericValueCycle<T> of(@NotNull String cycleLocalizationKey, @NotNull T... values) {
        Objects.requireNonNull(values);
        List<T> valueList = Arrays.asList(values);
        if (valueList.size() < 2) {
            throw new InvalidParameterException("Failed to create LocalizedGenericValueCycle! Value list size too small (<2)!");
        } else {
            LocalizedGenericValueCycle<T> valueCycle = new LocalizedGenericValueCycle<>(cycleLocalizationKey);
            valueCycle.values.addAll(valueList);
            return valueCycle;
        }
    }

    protected LocalizedGenericValueCycle(String cycleLocalizationKey) {
        this.cycleLocalizationKey = cycleLocalizationKey;
    }

    @NotNull
    @Override
    public String getCycleLocalizationKey() {
        return this.cycleLocalizationKey;
    }

    @Override
    public MutableComponent getCycleComponent() {
        return Component.translatable(this.getCycleLocalizationKey(), this.getCurrentValueComponent()).withStyle(this.cycleStyle.get(this.current()));
    }

    @Override
    public MutableComponent getCurrentValueComponent() {
        return Component.literal(this.valueNameSupplier.get(this.current())).withStyle(this.valueStyle.get(this.current()));
    }

    public LocalizedGenericValueCycle<T> setValueNameSupplier(@NotNull ConsumingSupplier<T, String> supplier) {
        this.valueNameSupplier = supplier;
        return this;
    }

    public LocalizedGenericValueCycle<T> setCycleComponentStyleSupplier(@NotNull ConsumingSupplier<T, Style> supplier) {
        this.cycleStyle = supplier;
        return this;
    }

    public LocalizedGenericValueCycle<T> setValueComponentStyleSupplier(@NotNull ConsumingSupplier<T, Style> supplier) {
        this.valueStyle = supplier;
        return this;
    }

    public LocalizedGenericValueCycle<T> addCycleListener(@NotNull Consumer<T> listener) {
        return (LocalizedGenericValueCycle<T>) super.addCycleListener(listener);
    }
}