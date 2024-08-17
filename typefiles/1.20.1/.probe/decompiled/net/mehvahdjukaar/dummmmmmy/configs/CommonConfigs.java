package net.mehvahdjukaar.dummmmmmy.configs;

import java.util.Collections;
import java.util.List;
import java.util.function.Supplier;
import net.mehvahdjukaar.dummmmmmy.Dummmmmmy;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigBuilder;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigSpec;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigType;

public class CommonConfigs {

    public static final ConfigSpec SPEC;

    public static final Supplier<List<String>> WHITELIST;

    public static final Supplier<List<String>> BLACKLIST;

    public static final Supplier<Integer> RADIUS;

    public static final Supplier<Boolean> DAMAGE_EQUIPMENT;

    public static final Supplier<Boolean> DECOY;

    public static final Supplier<CommonConfigs.DpsMode> DYNAMIC_DPS;

    public static final Supplier<Integer> MAX_COMBAT_INTERVAL;

    public static final Supplier<CommonConfigs.Mode> DAMAGE_NUMBERS_MODE;

    public static final Supplier<CommonConfigs.Mode> HEALING_NUMBERS_MODE;

    public static final Supplier<Double> DROP_XP;

    public static void init() {
    }

    static {
        ConfigBuilder builder = ConfigBuilder.create(Dummmmmmy.res("common"), ConfigType.COMMON);
        builder.push("scarecrow").comment("Equip a dummy with a pumpkin to make hit act as a scarecrow");
        WHITELIST = builder.comment("All animal entities will be scared. add here additional ones that are not included").define("mobs_whitelist", Collections.singletonList(""));
        BLACKLIST = builder.comment("Animal entities that will not be scared").define("mobs_blacklist", Collections.singletonList(""));
        RADIUS = builder.comment("Scaring radius").define("scare_radius", 12, 0, 100);
        builder.pop();
        builder.push("general");
        DYNAMIC_DPS = builder.comment("Does dps message update dynamically or will it only appear after each parse? ").define("DPS_mode", CommonConfigs.DpsMode.DYNAMIC);
        DAMAGE_EQUIPMENT = builder.comment("Enable this to prevent your equipment from getting damaged when attacking the dummy").define("disable_equipment_damage", true);
        MAX_COMBAT_INTERVAL = builder.comment("Time in ticks that it takes for a dummy to be considered out of combat after having recieved damage").define("maximum_out_of_combat_interval", 120, 20, 1000);
        DECOY = builder.comment("Makes monsters target a dummy that is wearing a player head").define("dummy_decoy", false);
        DROP_XP = builder.comment("Makes dummy drop xp when hit. Training yay! Depends on damage done").define("xp_per_damage_on_hit", 0.0, 0.0, 100.0);
        builder.pop();
        builder.push("mobs_damage_numbers");
        DAMAGE_NUMBERS_MODE = builder.comment("Show damage taken form").define("damage_mode", CommonConfigs.Mode.NONE);
        HEALING_NUMBERS_MODE = builder.comment("Show healing taken for").define("healing_mode", CommonConfigs.Mode.NONE);
        builder.pop();
        SPEC = builder.buildAndRegister();
    }

    public static enum DpsMode {

        DYNAMIC, STATIC, OFF
    }

    public static enum Mode {

        ALL_ENTITIES, ALL_PLAYERS, LOCAL_PLAYER, NONE
    }
}