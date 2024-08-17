package snownee.kiwi;

import com.google.common.base.Preconditions;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.CrashReportCallables;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.registries.RegisterEvent;
import org.apache.commons.lang3.StringUtils;
import snownee.kiwi.loader.Platform;

public final class KiwiModules {

    private static Map<ResourceLocation, ModuleInfo> MODULES = Maps.newLinkedHashMap();

    private static final Set<ResourceLocation> LOADED_MODULES = Sets.newHashSet();

    static final Set<Object> ALL_USED_REGISTRIES = Sets.newLinkedHashSet();

    private KiwiModules() {
    }

    public static void add(ResourceLocation resourceLocation, AbstractModule module, ModContext context) {
        Preconditions.checkArgument(!isLoaded(resourceLocation), "Duplicate module: %s", resourceLocation);
        LOADED_MODULES.add(resourceLocation);
        MODULES.put(resourceLocation, new ModuleInfo(resourceLocation, module, context));
    }

    @SubscribeEvent
    public static void handleRegister(RegisterEvent event) {
        Object registry = event.getForgeRegistry();
        if (registry == null) {
            registry = event.getVanillaRegistry();
        }
        if (registry != BuiltInRegistries.CREATIVE_MODE_TAB && ALL_USED_REGISTRIES.contains(registry)) {
            for (ModuleInfo info : MODULES.values()) {
                info.handleRegister(registry);
            }
            ModLoadingContext.get().setActiveContainer(null);
        }
    }

    public static boolean isLoaded(ResourceLocation module) {
        return LOADED_MODULES.contains(module);
    }

    public static Collection<ModuleInfo> get() {
        return MODULES.values();
    }

    public static ModuleInfo get(ResourceLocation moduleId) {
        return (ModuleInfo) MODULES.get(moduleId);
    }

    public static void clear() {
        if (!Platform.isDataGen()) {
            MODULES.clear();
            MODULES = Map.of();
        }
    }

    public static void fire(Consumer<ModuleInfo> consumer) {
        MODULES.values().forEach(consumer);
    }

    static {
        CrashReportCallables.registerCrashCallable("Kiwi Modules", () -> "\n" + (String) LOADED_MODULES.stream().map(ResourceLocation::toString).sorted(StringUtils::compare).collect(Collectors.joining("\n\t\t", "\t\t", "")));
    }
}