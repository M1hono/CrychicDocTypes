package org.embeddedt.modernfix.forge;

import com.google.common.collect.ImmutableList;
import java.util.List;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.ForgeConfigSpec;

public class ModernFixConfig {

    private static final ForgeConfigSpec.Builder COMMON_BUILDER = new ForgeConfigSpec.Builder();

    public static ForgeConfigSpec COMMON_CONFIG = COMMON_BUILDER.build();

    public static ForgeConfigSpec.ConfigValue<List<? extends String>> BLACKLIST_ASYNC_JEI_PLUGINS;

    private static Set<ResourceLocation> jeiPluginBlacklist;

    public static Set<ResourceLocation> getJeiPluginBlacklist() {
        if (jeiPluginBlacklist == null) {
            jeiPluginBlacklist = (Set<ResourceLocation>) BLACKLIST_ASYNC_JEI_PLUGINS.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return jeiPluginBlacklist;
    }

    static {
        Predicate<Object> locationValidator = o -> o instanceof String && ((String) o).contains(":");
        BLACKLIST_ASYNC_JEI_PLUGINS = COMMON_BUILDER.comment("These JEI plugins will be loaded on the main thread").defineList("blacklist_async_jei_plugins", ImmutableList.of("jepb:jei_plugin"), locationValidator);
    }
}