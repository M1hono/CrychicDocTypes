package snownee.jade.impl.config.entry;

import com.google.common.collect.Lists;
import java.util.List;
import java.util.Objects;
import java.util.function.Consumer;
import net.minecraft.resources.ResourceLocation;
import snownee.jade.gui.config.OptionsList;
import snownee.jade.gui.config.value.OptionValue;

public abstract class ConfigEntry<T> {

    public final ResourceLocation id;

    private final T defaultValue;

    private boolean synced;

    protected T value;

    private List<Consumer<ResourceLocation>> listeners = List.of();

    public ConfigEntry(ResourceLocation id, T defaultValue) {
        this.id = id;
        this.value = this.defaultValue = defaultValue;
    }

    public ResourceLocation getId() {
        return this.id;
    }

    public T getDefaultValue() {
        return this.defaultValue;
    }

    public boolean isSynced() {
        return this.synced;
    }

    public void setSynced(boolean synced) {
        this.synced = synced;
    }

    public T getValue() {
        return this.value;
    }

    public void setValue(Object value) {
        if (!Objects.equals(this.value, value)) {
            this.value = (T) value;
            this.notifyChange();
        }
    }

    public abstract boolean isValidValue(Object var1);

    public abstract OptionValue<?> createUI(OptionsList var1, String var2);

    public void addListener(Consumer<ResourceLocation> listener) {
        if (this.listeners.isEmpty()) {
            this.listeners = Lists.newArrayList();
        }
        this.listeners.add(listener);
    }

    public void notifyChange() {
        for (Consumer<ResourceLocation> listener : this.listeners) {
            listener.accept(this.id);
        }
    }
}