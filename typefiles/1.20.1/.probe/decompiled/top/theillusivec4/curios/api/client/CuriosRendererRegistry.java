package top.theillusivec4.curios.api.client;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Supplier;
import net.minecraft.world.item.Item;

public class CuriosRendererRegistry {

    private static final Map<Item, Supplier<ICurioRenderer>> RENDERER_REGISTRY = new ConcurrentHashMap();

    private static final Map<Item, ICurioRenderer> RENDERERS = new HashMap();

    public static void register(Item item, Supplier<ICurioRenderer> renderer) {
        RENDERER_REGISTRY.put(item, renderer);
    }

    public static Optional<ICurioRenderer> getRenderer(Item item) {
        return Optional.ofNullable((ICurioRenderer) RENDERERS.get(item));
    }

    public static void load() {
        for (Entry<Item, Supplier<ICurioRenderer>> entry : RENDERER_REGISTRY.entrySet()) {
            RENDERERS.put((Item) entry.getKey(), (ICurioRenderer) ((Supplier) entry.getValue()).get());
        }
    }
}