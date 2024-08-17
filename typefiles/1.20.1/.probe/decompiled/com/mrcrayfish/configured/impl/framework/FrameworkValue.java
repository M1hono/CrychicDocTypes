package com.mrcrayfish.configured.impl.framework;

import com.mrcrayfish.configured.api.IConfigValue;
import com.mrcrayfish.framework.api.config.AbstractProperty;
import com.mrcrayfish.framework.api.config.validate.Validator;
import java.util.List;
import java.util.Objects;
import javax.annotation.Nullable;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.network.chat.Component;

public class FrameworkValue<T> implements IConfigValue<T> {

    protected final AbstractProperty<T> property;

    protected final T initialValue;

    protected final T defaultValue;

    protected T value;

    public FrameworkValue(AbstractProperty<T> property) {
        this.property = property;
        this.initialValue = (T) property.get();
        this.defaultValue = (T) property.getDefaultValue();
        this.set((T) property.get());
    }

    @Override
    public T get() {
        return this.value;
    }

    @Override
    public void set(T value) {
        this.value = value;
    }

    @Override
    public T getDefault() {
        return (T) this.property.getDefaultValue();
    }

    @Override
    public boolean isValid(T value) {
        return this.property.isValid(value);
    }

    @Override
    public boolean isDefault() {
        return Objects.equals(this.get(), this.defaultValue);
    }

    @Override
    public boolean isChanged() {
        return !Objects.equals(this.get(), this.initialValue);
    }

    @Override
    public void restore() {
        this.set((T) this.property.getDefaultValue());
    }

    @Nullable
    @Override
    public Component getComment() {
        String key = this.getTranslationKey() + ".tooltip";
        if (I18n.exists(key)) {
            return Component.translatable(key);
        } else {
            String comment = this.property.getComment();
            return !comment.isEmpty() ? Component.literal(comment) : null;
        }
    }

    @Nullable
    @Override
    public String getTranslationKey() {
        return this.property.getTranslationKey();
    }

    @Nullable
    @Override
    public Component getValidationHint() {
        Validator<T> validator = this.property.getValidator();
        return validator != null ? validator.getHint() : null;
    }

    @Override
    public String getName() {
        return this.property.getName();
    }

    @Override
    public void cleanCache() {
        this.property.invalidateCache();
    }

    @Override
    public boolean requiresWorldRestart() {
        return this.property.requiresWorldRestart();
    }

    @Override
    public boolean requiresGameRestart() {
        return this.property.requiresGameRestart();
    }

    @Nullable
    public List<String> getPath() {
        return this.property.getPath();
    }
}