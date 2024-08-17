package com.mrcrayfish.configured.impl.framework;

import com.mrcrayfish.configured.client.screen.list.IListConfigValue;
import com.mrcrayfish.configured.client.screen.list.IListType;
import com.mrcrayfish.configured.client.screen.list.ListTypes;
import com.mrcrayfish.framework.api.config.ListProperty;
import com.mrcrayfish.framework.api.config.ListProperty.Type;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.minecraft.Util;

public class FrameworkListValue<T> extends FrameworkValue<List<T>> implements IListConfigValue<T> {

    private static final Map<Type<?>, IListType<?>> LIST_TYPE_RESOLVER = Util.make(new HashMap(), map -> {
        map.put(ListProperty.INT, ListTypes.INTEGER);
        map.put(ListProperty.LONG, ListTypes.LONG);
        map.put(ListProperty.DOUBLE, ListTypes.DOUBLE);
        map.put(ListProperty.BOOL, ListTypes.BOOLEAN);
        map.put(ListProperty.STRING, ListTypes.STRING);
    });

    private final ListProperty<T> property;

    public FrameworkListValue(ListProperty<T> property) {
        super(property);
        this.property = property;
    }

    @Override
    public IListType<T> getListType() {
        return (IListType<T>) LIST_TYPE_RESOLVER.getOrDefault(this.property.getType(), ListTypes.getUnknown());
    }

    @Override
    public boolean isDefault() {
        return ListProperty.compareLists(this.get(), this.defaultValue, this.property.getType());
    }
}