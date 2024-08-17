package dev.latvian.mods.kubejs.level.gen;

import com.google.common.collect.ImmutableSet;
import dev.architectury.hooks.level.biome.BiomeProperties;
import dev.architectury.registry.level.biome.BiomeModifications;
import dev.latvian.mods.kubejs.event.StartupEventJS;
import dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter;
import dev.latvian.mods.kubejs.level.gen.properties.RemoveOresProperties;
import dev.latvian.mods.kubejs.level.gen.properties.RemoveSpawnsProperties;
import dev.latvian.mods.kubejs.util.ConsoleJS;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Stream;
import net.minecraft.core.Holder;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.MobCategory;
import net.minecraft.world.level.biome.MobSpawnSettings;
import net.minecraft.world.level.levelgen.GenerationStep;
import net.minecraft.world.level.levelgen.feature.ConfiguredFeature;
import net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration;
import net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration;
import net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration;
import net.minecraft.world.level.levelgen.placement.PlacedFeature;
import org.apache.commons.lang3.mutable.MutableInt;
import org.jetbrains.annotations.Nullable;

public class RemoveWorldgenEventJS extends StartupEventJS {

    protected static boolean checkTree(ConfiguredFeature<?, ?> configuredFeature, Predicate<FeatureConfiguration> predicate) {
        return predicate.test(configuredFeature.config()) || configuredFeature.config().getFeatures().anyMatch(cf -> checkTree(cf, predicate));
    }

    private void removeFeature(BiomeFilter filter, GenerationStep.Decoration decoration, Predicate<FeatureConfiguration> predicate) {
        BiomeModifications.replaceProperties(filter, (ctx, properties) -> {
            List<Holder<PlacedFeature>> removedFeatures = new ArrayList();
            for (Holder<PlacedFeature> feature : properties.getGenerationProperties().getFeatures(decoration)) {
                if (checkTree(feature.value().feature().value(), predicate)) {
                    feature.unwrapKey().ifPresentOrElse(key -> {
                        ConsoleJS.STARTUP.debug("Removing feature %s from generation step %s in biome %s".formatted(key, decoration.name().toLowerCase(), ctx.getKey()));
                        removedFeatures.add(feature);
                    }, () -> ConsoleJS.STARTUP.warn("Feature %s was not removed since it was not found in the registry!".formatted(feature.value())));
                }
            }
            for (Holder<PlacedFeature> featurex : removedFeatures) {
                properties.getGenerationProperties().removeFeature(decoration, (ResourceKey<PlacedFeature>) featurex.unwrapKey().get());
            }
        });
    }

    private void removeSpawn(BiomeFilter filter, BiPredicate<MobCategory, MobSpawnSettings.SpawnerData> predicate) {
        BiomeModifications.replaceProperties(filter, (ctx, properties) -> properties.getSpawnProperties().removeSpawns(predicate));
    }

    public void printFeatures() {
        this.printFeatures(null);
    }

    public void printFiltered() {
        this.printFiltered(null);
    }

    public void printFeatures(@Nullable GenerationStep.Decoration type) {
        this.printFeatures(type, BiomeFilter.ALWAYS_TRUE);
    }

    public void printFiltered(@Nullable GenerationStep.Decoration type) {
        this.printFiltered(type, BiomeFilter.ALWAYS_TRUE);
    }

    public void printFeatures(@Nullable GenerationStep.Decoration type, BiomeFilter filter) {
        this.printFeaturesForType(type, filter, false);
    }

    public void printFiltered(@Nullable GenerationStep.Decoration type, BiomeFilter filter) {
        this.printFeaturesForType(type, filter, true);
    }

    public void printFeaturesForType(@Nullable GenerationStep.Decoration type, BiomeFilter filter, boolean afterRemoval) {
        if (type == null) {
            for (GenerationStep.Decoration step : GenerationStep.Decoration.values()) {
                this.printFeaturesForType(step, filter, afterRemoval);
            }
        } else {
            var printer = new BiConsumer<BiomeModifications.BiomeContext, BiomeProperties.Mutable>() {

                boolean called = false;

                public void accept(BiomeModifications.BiomeContext ctx, BiomeProperties.Mutable properties) {
                    if (!this.called) {
                        this.called = true;
                        Optional<ResourceLocation> biome = ctx.getKey();
                        Iterable<Holder<PlacedFeature>> features = properties.getGenerationProperties().getFeatures(type);
                        ConsoleJS.STARTUP.info("Features with type '%s' in biome '%s':".formatted(type.name().toLowerCase(), biome));
                        MutableInt unknown = new MutableInt(0);
                        for (Holder<PlacedFeature> feature : features) {
                            feature.unwrapKey().ifPresentOrElse(key -> ConsoleJS.STARTUP.info("- " + key), unknown::increment);
                        }
                        if (unknown.intValue() > 0) {
                            ConsoleJS.STARTUP.info("- " + unknown + " features with unknown id");
                        }
                    }
                }
            };
            if (afterRemoval) {
                BiomeModifications.postProcessProperties(filter, printer);
            } else {
                BiomeModifications.removeProperties(filter, printer);
            }
        }
    }

    public void removeFeatureById(BiomeFilter filter, GenerationStep.Decoration decoration, ResourceLocation[] ids) {
        BiomeModifications.replaceProperties(filter, (ctx, properties) -> Stream.of(ids).map(id -> ResourceKey.create(Registries.PLACED_FEATURE, id)).forEach(id -> properties.getGenerationProperties().removeFeature(decoration, id)));
    }

    public void removeFeatureById(GenerationStep.Decoration type, ResourceLocation[] ids) {
        this.removeFeatureById(BiomeFilter.ALWAYS_TRUE, type, ids);
    }

    public void removeAllFeatures(BiomeFilter filter, GenerationStep.Decoration type) {
        this.removeFeature(filter, type, configuredFeature -> true);
    }

    public void removeAllFeatures(BiomeFilter filter) {
        for (GenerationStep.Decoration decoration : GenerationStep.Decoration.values()) {
            this.removeAllFeatures(filter, decoration);
        }
    }

    public void removeAllFeatures() {
        this.removeAllFeatures(BiomeFilter.ALWAYS_TRUE);
    }

    public void removeOres(Consumer<RemoveOresProperties> p) {
        RemoveOresProperties properties = new RemoveOresProperties();
        p.accept(properties);
        this.removeFeature(properties.biomes, properties.worldgenLayer, fc -> {
            if (fc instanceof OreConfiguration ore) {
                return properties.blocks.check(ore.targetStates);
            } else {
                return fc instanceof ReplaceBlockConfiguration rb ? properties.blocks.check(rb.targetStates) : false;
            }
        });
    }

    public void printSpawns(@Nullable MobCategory category) {
        BiomeModifications.addProperties((ctx, properties) -> {
            Optional<ResourceLocation> biome = ctx.getKey();
            Map<MobCategory, List<MobSpawnSettings.SpawnerData>> spawns = properties.getSpawnProperties().getSpawners();
            for (MobCategory cat : category == null ? spawns.keySet() : ImmutableSet.of(category)) {
                ConsoleJS.STARTUP.info("Mob spawns with type '%s' in biome '%s':".formatted(cat.getName(), biome));
                for (MobSpawnSettings.SpawnerData data : (List) spawns.get(cat)) {
                    ConsoleJS.STARTUP.info("- " + data.toString());
                }
            }
        });
    }

    public void printSpawns() {
        this.printSpawns(null);
    }

    public void removeSpawns(Consumer<RemoveSpawnsProperties> p) {
        RemoveSpawnsProperties properties = new RemoveSpawnsProperties();
        p.accept(properties);
        this.removeSpawn(properties.biomes, properties.mobs);
    }

    public void removeAllSpawns() {
        this.removeSpawn(BiomeFilter.ALWAYS_TRUE, (mobCategory, spawnerData) -> true);
    }
}