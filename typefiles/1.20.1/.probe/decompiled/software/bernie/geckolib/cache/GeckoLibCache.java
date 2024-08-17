package software.bernie.geckolib.cache;

import it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap;
import it.unimi.dsi.fastutil.objects.ObjectOpenHashSet;
import java.util.Collections;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.function.BiConsumer;
import java.util.function.Function;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.PreparableReloadListener;
import net.minecraft.server.packs.resources.ReloadableResourceManager;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.util.profiling.ProfilerFiller;
import net.minecraftforge.fml.ModLoader;
import software.bernie.geckolib.GeckoLib;
import software.bernie.geckolib.GeckoLibException;
import software.bernie.geckolib.cache.object.BakedGeoModel;
import software.bernie.geckolib.loading.FileLoader;
import software.bernie.geckolib.loading.json.FormatVersion;
import software.bernie.geckolib.loading.json.raw.Model;
import software.bernie.geckolib.loading.object.BakedAnimations;
import software.bernie.geckolib.loading.object.BakedModelFactory;
import software.bernie.geckolib.loading.object.GeometryTree;

public final class GeckoLibCache {

    private static final Set<String> EXCLUDED_NAMESPACES = ObjectOpenHashSet.of("moreplayermodels", "customnpcs", "gunsrpg");

    private static Map<ResourceLocation, BakedAnimations> ANIMATIONS = Collections.emptyMap();

    private static Map<ResourceLocation, BakedGeoModel> MODELS = Collections.emptyMap();

    public static Map<ResourceLocation, BakedAnimations> getBakedAnimations() {
        if (!GeckoLib.hasInitialized) {
            throw new RuntimeException("GeckoLib was never initialized! Please read the documentation!");
        } else {
            return ANIMATIONS;
        }
    }

    public static Map<ResourceLocation, BakedGeoModel> getBakedModels() {
        if (!GeckoLib.hasInitialized) {
            throw new RuntimeException("GeckoLib was never initialized! Please read the documentation!");
        } else {
            return MODELS;
        }
    }

    public static void registerReloadListener() {
        Minecraft mc = Minecraft.getInstance();
        if (mc == null) {
            if (!ModLoader.isDataGenRunning()) {
                GeckoLib.LOGGER.warn("Minecraft.getInstance() was null, could not register reload listeners");
            }
        } else if (mc.getResourceManager() instanceof ReloadableResourceManager resourceManager) {
            resourceManager.registerReloadListener(GeckoLibCache::reload);
        } else {
            throw new RuntimeException("GeckoLib was initialized too early!");
        }
    }

    private static CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier stage, ResourceManager resourceManager, ProfilerFiller preparationsProfiler, ProfilerFiller reloadProfiler, Executor backgroundExecutor, Executor gameExecutor) {
        Map<ResourceLocation, BakedAnimations> animations = new Object2ObjectOpenHashMap();
        Map<ResourceLocation, BakedGeoModel> models = new Object2ObjectOpenHashMap();
        return CompletableFuture.allOf(loadAnimations(backgroundExecutor, resourceManager, animations::put), loadModels(backgroundExecutor, resourceManager, models::put)).thenCompose(stage::m_6769_).thenAcceptAsync(empty -> {
            ANIMATIONS = animations;
            MODELS = models;
        }, gameExecutor);
    }

    private static CompletableFuture<Void> loadAnimations(Executor backgroundExecutor, ResourceManager resourceManager, BiConsumer<ResourceLocation, BakedAnimations> elementConsumer) {
        return loadResources(backgroundExecutor, resourceManager, "animations", resource -> {
            try {
                return FileLoader.loadAnimationsFile(resource, resourceManager);
            } catch (Exception var3) {
                throw new GeckoLibException(resource, "Error loading animation file", var3);
            }
        }, elementConsumer);
    }

    private static CompletableFuture<Void> loadModels(Executor backgroundExecutor, ResourceManager resourceManager, BiConsumer<ResourceLocation, BakedGeoModel> elementConsumer) {
        return loadResources(backgroundExecutor, resourceManager, "geo", resource -> {
            try {
                Model model = FileLoader.loadModelFile(resource, resourceManager);
                if (model.formatVersion() != FormatVersion.V_1_12_0) {
                    throw new IllegalArgumentException("Unsupported geometry json version. Supported versions: 1.12.0");
                } else {
                    return BakedModelFactory.getForNamespace(resource.getNamespace()).constructGeoModel(GeometryTree.fromModel(model));
                }
            } catch (Exception var3) {
                throw new GeckoLibException(resource, "Error loading model file", var3);
            }
        }, elementConsumer);
    }

    private static <T> CompletableFuture<Void> loadResources(Executor executor, ResourceManager resourceManager, String type, Function<ResourceLocation, T> loader, BiConsumer<ResourceLocation, T> map) {
        return CompletableFuture.supplyAsync(() -> resourceManager.listResources(type, fileName -> fileName.toString().endsWith(".json")), executor).thenApplyAsync(resources -> {
            Map<ResourceLocation, CompletableFuture<T>> tasks = new Object2ObjectOpenHashMap();
            for (ResourceLocation resource : resources.keySet()) {
                tasks.put(resource, CompletableFuture.supplyAsync(() -> loader.apply(resource), executor));
            }
            return tasks;
        }, executor).thenAcceptAsync(tasks -> {
            for (Entry<ResourceLocation, CompletableFuture<T>> entry : tasks.entrySet()) {
                if (!EXCLUDED_NAMESPACES.contains(((ResourceLocation) entry.getKey()).getNamespace().toLowerCase(Locale.ROOT))) {
                    map.accept((ResourceLocation) entry.getKey(), ((CompletableFuture) entry.getValue()).join());
                }
            }
        }, executor);
    }
}