package net.minecraftforge.registries;

import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import com.mojang.serialization.Lifecycle;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import net.minecraft.core.Registry;
import net.minecraft.core.WritableRegistry;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.fml.ModLoader;
import net.minecraftforge.network.HandshakeMessages;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class RegistryManager {

    private static final Logger LOGGER = LogManager.getLogger();

    public static final RegistryManager ACTIVE = new RegistryManager("ACTIVE");

    public static final RegistryManager VANILLA = new RegistryManager("VANILLA");

    public static final RegistryManager FROZEN = new RegistryManager("FROZEN");

    private static Set<ResourceLocation> vanillaRegistryKeys = Set.of();

    BiMap<ResourceLocation, ForgeRegistry<?>> registries = HashBiMap.create();

    private Set<ResourceLocation> persisted = Sets.newHashSet();

    private Set<ResourceLocation> synced = Sets.newHashSet();

    private Map<ResourceLocation, ResourceLocation> legacyNames = new HashMap();

    private final String name;

    RegistryManager() {
        this("STAGING");
    }

    public RegistryManager(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    boolean isStaging() {
        return "STAGING".equals(this.name);
    }

    public <V> ForgeRegistry<V> getRegistry(ResourceLocation key) {
        return (ForgeRegistry<V>) this.registries.get(key);
    }

    public <V> ForgeRegistry<V> getRegistry(ResourceKey<? extends Registry<V>> key) {
        return this.getRegistry(key.location());
    }

    public <V> ResourceLocation getName(IForgeRegistry<V> reg) {
        return (ResourceLocation) this.registries.inverse().get(reg);
    }

    public <V> ResourceLocation updateLegacyName(ResourceLocation legacyName) {
        ResourceLocation originalName = legacyName;
        while (this.getRegistry(legacyName) == null) {
            legacyName = (ResourceLocation) this.legacyNames.get(legacyName);
            if (legacyName == null) {
                return originalName;
            }
        }
        return legacyName;
    }

    public <V> ForgeRegistry<V> getRegistry(ResourceLocation key, RegistryManager other) {
        if (!this.registries.containsKey(key)) {
            ForgeRegistry<V> ot = other.getRegistry(key);
            if (ot == null) {
                return null;
            }
            this.registries.put(key, ot.copy(this));
            if (other.persisted.contains(key)) {
                this.persisted.add(key);
            }
            if (other.synced.contains(key)) {
                this.synced.add(key);
            }
            other.legacyNames.entrySet().stream().filter(e -> ((ResourceLocation) e.getValue()).equals(key)).forEach(e -> this.addLegacyName((ResourceLocation) e.getKey(), (ResourceLocation) e.getValue()));
        }
        return this.getRegistry(key);
    }

    <V> ForgeRegistry<V> createRegistry(ResourceLocation name, RegistryBuilder<V> builder) {
        if (this.registries.containsKey(name)) {
            throw new IllegalArgumentException("Attempted to register a registry for " + name + " but it already exists");
        } else {
            ForgeRegistry<V> reg = new ForgeRegistry<>(this, name, builder);
            this.registries.put(name, reg);
            if (builder.getSaveToDisc()) {
                this.persisted.add(name);
            }
            if (builder.getSync()) {
                this.synced.add(name);
            }
            for (ResourceLocation legacyName : builder.getLegacyNames()) {
                this.addLegacyName(legacyName, name);
            }
            return this.getRegistry(name);
        }
    }

    static <V> void registerToRootRegistry(ForgeRegistry<V> forgeReg) {
        injectForgeRegistry(forgeReg, BuiltInRegistries.REGISTRY);
    }

    private static <V> void injectForgeRegistry(ForgeRegistry<V> forgeReg, Registry<? extends Registry<?>> rootRegistry) {
        WritableRegistry<Registry<V>> registry = (WritableRegistry<Registry<V>>) rootRegistry;
        Registry<V> wrapper = forgeReg.getWrapper();
        if (wrapper != null) {
            registry.register(forgeReg.getRegistryKey(), wrapper, Lifecycle.experimental());
        }
    }

    public static void postNewRegistryEvent() {
        NewRegistryEvent event = new NewRegistryEvent();
        DataPackRegistryEvent.NewRegistry dataPackEvent = new DataPackRegistryEvent.NewRegistry();
        vanillaRegistryKeys = Set.copyOf(BuiltInRegistries.REGISTRY.keySet());
        ModLoader.get().postEventWrapContainerInModOrder(event);
        ModLoader.get().postEventWrapContainerInModOrder(dataPackEvent);
        event.fill();
        dataPackEvent.process();
    }

    private void addLegacyName(ResourceLocation legacyName, ResourceLocation name) {
        if (this.legacyNames.containsKey(legacyName)) {
            throw new IllegalArgumentException("Legacy name conflict for registry " + name + ", upgrade path must be linear: " + legacyName);
        } else {
            this.legacyNames.put(legacyName, name);
        }
    }

    private void findSuperTypes(Class<?> type, Set<Class<?>> types) {
        if (type != null && type != Object.class) {
            types.add(type);
            for (Class<?> interfac : type.getInterfaces()) {
                this.findSuperTypes(interfac, types);
            }
            this.findSuperTypes(type.getSuperclass(), types);
        }
    }

    public Map<ResourceLocation, ForgeRegistry.Snapshot> takeSnapshot(boolean savingToDisc) {
        Map<ResourceLocation, ForgeRegistry.Snapshot> ret = Maps.newHashMap();
        Set<ResourceLocation> keys = savingToDisc ? this.persisted : this.synced;
        keys.forEach(name -> ret.put(name, this.getRegistry(name).makeSnapshot()));
        return ret;
    }

    public void clean() {
        this.persisted.clear();
        this.synced.clear();
        this.registries.clear();
    }

    public static List<Pair<String, HandshakeMessages.S2CRegistry>> generateRegistryPackets(boolean isLocal) {
        return !isLocal ? (List) ACTIVE.takeSnapshot(false).entrySet().stream().map(e -> Pair.of("Registry " + e.getKey(), new HandshakeMessages.S2CRegistry((ResourceLocation) e.getKey(), (ForgeRegistry.Snapshot) e.getValue()))).collect(Collectors.toList()) : Collections.emptyList();
    }

    public static List<ResourceLocation> getRegistryNamesForSyncToClient() {
        return (List<ResourceLocation>) ACTIVE.registries.keySet().stream().filter(resloc -> ACTIVE.synced.contains(resloc)).collect(Collectors.toList());
    }

    public static Set<ResourceLocation> getVanillaRegistryKeys() {
        return vanillaRegistryKeys;
    }
}