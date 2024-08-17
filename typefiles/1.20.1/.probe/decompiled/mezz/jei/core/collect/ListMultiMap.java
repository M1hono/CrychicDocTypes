package mezz.jei.core.collect;

import com.google.common.collect.ImmutableListMultimap;
import com.google.common.collect.ImmutableListMultimap.Builder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

public class ListMultiMap<K, V> extends MultiMap<K, V, List<V>> {

    public ListMultiMap() {
        this(ArrayList::new);
    }

    public ListMultiMap(Supplier<List<V>> collectionSupplier) {
        super(collectionSupplier);
    }

    public ListMultiMap(Map<K, List<V>> map, Supplier<List<V>> collectionSupplier) {
        super(map, collectionSupplier);
    }

    public ImmutableListMultimap<K, V> toImmutable() {
        Builder<K, V> builder = ImmutableListMultimap.builder();
        this.map.forEach(builder::putAll);
        return builder.build();
    }
}