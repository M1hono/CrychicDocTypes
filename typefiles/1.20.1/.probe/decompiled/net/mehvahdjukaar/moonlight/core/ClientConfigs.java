package net.mehvahdjukaar.moonlight.core;

import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigBuilder;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigSpec;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigType;

public class ClientConfigs {

    public static final Supplier<Boolean> MERGE_PACKS;

    public static final Supplier<Boolean> LAZY_MAP_DATA;

    public static final Supplier<Integer> MAPS_MIPMAP;

    public static final Supplier<ClientConfigs.ShadeFix> FIX_SHADE;

    public static final ConfigSpec CONFIG;

    public static void init() {
    }

    static {
        ConfigBuilder builder = ConfigBuilder.create("moonlight", ConfigType.CLIENT);
        builder.push("general");
        MERGE_PACKS = builder.comment("Merge all dynamic resource packs from all mods that use this library into a single pack").define("merge_dynamic_packs", true);
        LAZY_MAP_DATA = builder.comment("Prevents map texture from being upladed to GPU when only map markers have changed.Could increase performance").define("lazy_map_upload", true);
        MAPS_MIPMAP = builder.comment("Renders map textures using mipmap. Vastly improves look from afar as well when inside a Map Atlas from Map Atlases or similar. Set to 0 to have no mipmap like vanilla").define("maps_mipmap", 3, 0, 4);
        FIX_SHADE = builder.comment("Fix minecraft entity shading to be exactly the same that blocks use. (1 for up,0.8 for north, 0.6 for west and 0.5 for down).This means that if you have a model and render it with a tile renderer or entity it will appear identical as one rendered via baked models.Using no gui will prevent it from changing item rendered in GUIs, in case you dont like that look.Note there is a known compat issue with Figura mod. Keep this True or False with that one").define("consistent_entity_renderer_shading", ClientConfigs.ShadeFix.NO_GUI);
        builder.pop();
        CONFIG = builder.buildAndRegister();
        CONFIG.loadFromFile();
    }

    public static enum ShadeFix {

        FALSE, NO_GUI, TRUE
    }
}