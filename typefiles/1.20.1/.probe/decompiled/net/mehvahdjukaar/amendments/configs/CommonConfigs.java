package net.mehvahdjukaar.amendments.configs;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;
import net.mehvahdjukaar.amendments.common.entity.FallingLanternEntity;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigBuilder;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigSpec;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigType;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffects;

public class CommonConfigs {

    public static final Supplier<Boolean> HANGING_SIGN_ITEM;

    public static final Supplier<Boolean> LIQUID_CAULDRON;

    public static final Supplier<Boolean> CONNECT_TO_FENCES;

    public static final Supplier<CommonConfigs.MixingMode> POTION_MIXING;

    public static final Supplier<Integer> POTION_MIXING_LIMIT;

    public static final Supplier<Map<MobEffect, MobEffect>> INVERSE_POTIONS;

    public static final Supplier<Boolean> DYE_WATER;

    public static final Supplier<Boolean> CAULDRON_CRAFTING;

    public static final Supplier<Integer> DYE_RECIPES_PER_LAYER;

    public static final Supplier<Integer> POTION_RECIPES_PER_LAYER;

    public static final Supplier<Boolean> TOOL_HOOK;

    public static final Supplier<Boolean> CARPETED_STAIRS;

    public static final Supplier<Boolean> CARPETED_SLABS;

    public static final Supplier<Boolean> DOUBLE_CAKES;

    public static final Supplier<Boolean> DIRECTIONAL_CAKE;

    public static final Supplier<Boolean> SKULL_PILES;

    public static final Supplier<Boolean> SKULL_CANDLES;

    public static final Supplier<Boolean> SKULL_CANDLES_MULTIPLE;

    public static final Supplier<Boolean> HANGING_POT;

    public static final Supplier<Boolean> WALL_LANTERN;

    public static final Supplier<Boolean> WALL_LANTERN_HIGH_PRIORITY;

    public static final Supplier<List<String>> WALL_LANTERN_BLACKLIST;

    public static final Supplier<List<String>> WALL_LANTERN_WHITELIST;

    public static final Supplier<FallingLanternEntity.FallMode> FALLING_LANTERNS;

    public static final Supplier<Boolean> CEILING_BANNERS;

    public static final Supplier<Boolean> BELL_CHAIN_RINGING;

    public static final Supplier<Integer> BELL_CHAIN_LENGTH;

    public static final Supplier<Boolean> DYE_BLOCKS;

    public static final Supplier<Boolean> LILY_PADS_ON;

    public static final Supplier<Boolean> LECTERN_STUFF;

    public static final Supplier<Boolean> TORCH_FIRE;

    public static final Supplier<Boolean> TORCH_FIRE_OFFHAND;

    public static final Supplier<Integer> TORCH_FIRE_DURATION;

    public static final ConfigSpec SPEC;

    private static Map<MobEffect, MobEffect> getInverseEffects() {
        Map<MobEffect, MobEffect> map = new HashMap();
        map.put(MobEffects.DIG_SPEED, MobEffects.DIG_SLOWDOWN);
        map.put(MobEffects.DIG_SLOWDOWN, MobEffects.DIG_SPEED);
        map.put(MobEffects.MOVEMENT_SPEED, MobEffects.MOVEMENT_SLOWDOWN);
        map.put(MobEffects.MOVEMENT_SLOWDOWN, MobEffects.MOVEMENT_SPEED);
        map.put(MobEffects.DAMAGE_BOOST, MobEffects.WEAKNESS);
        map.put(MobEffects.WEAKNESS, MobEffects.DAMAGE_BOOST);
        map.put(MobEffects.HARM, MobEffects.HEAL);
        map.put(MobEffects.HEAL, MobEffects.HARM);
        map.put(MobEffects.LUCK, MobEffects.UNLUCK);
        map.put(MobEffects.UNLUCK, MobEffects.LUCK);
        return map;
    }

    public static void init() {
    }

    public static boolean isFlagOn(String s) {
        return s.equals("dye_water") ? (Boolean) DYE_WATER.get() : false;
    }

    static {
        ConfigBuilder builder = ConfigBuilder.create("amendments", ConfigType.COMMON);
        builder.push("lectern");
        LECTERN_STUFF = builder.comment("Improved lectern screen allowing to edit font of a book while on it").define("improved_screen", true);
        builder.pop();
        builder.push("hanging_signs");
        HANGING_SIGN_ITEM = builder.comment("Allows placing items on hanging signs").define("items_on_signs", true);
        builder.pop();
        builder.push("cauldron");
        LIQUID_CAULDRON = builder.comment("Enables enhanced cauldron").define("enhanced_cauldron", true);
        CAULDRON_CRAFTING = builder.comment("Allows crafting items using cauldrons by clicking on them").define("crafting", true);
        DYE_WATER = builder.comment("Allows dying cauldron water bedrock style and mixing them too").define("dye_water", true);
        DYE_RECIPES_PER_LAYER = builder.comment("Max amount of items that 1 cauldron layer can recolor.This is a multiplier on top of vanilla crafting recipe amount").define("dye_recipes_per_layer", 4, 1, 64);
        POTION_RECIPES_PER_LAYER = builder.comment("Max amount of items that 1 cauldron layer can craft with potions.This is a multiplier on top of vanilla crafting recipe amount").define("potion_recipes_per_layer", 2, 1, 64);
        POTION_MIXING = builder.comment("Allows mixin potions in cauldrons").define("potions_mixing", CommonConfigs.MixingMode.ON);
        POTION_MIXING_LIMIT = builder.comment("Max amount of effects allowed in a mixed potion").define("potion_mixing_limit", 8, 1, 64);
        INVERSE_POTIONS = builder.comment("Map of potion ids to their inverse ids. Used for potion mixing").defineObject("inverse_potions", CommonConfigs::getInverseEffects, Utils.optionalMapCodec(BuiltInRegistries.MOB_EFFECT.byNameCodec(), BuiltInRegistries.MOB_EFFECT.byNameCodec()));
        CONNECT_TO_FENCES = builder.comment("Makes cauldrons connect to fences").define("connect_to_fences", true);
        builder.pop();
        builder.push("tripwire_hook");
        TOOL_HOOK = builder.comment("Allows placing tools on tripwire hooks").define("tool_hook", true);
        builder.pop();
        builder.push("carpets");
        CARPETED_STAIRS = builder.comment("Allows you to place carpets on stairs").define("carpeted_stairs", true);
        CARPETED_SLABS = builder.comment("Allows you to place carpets on slabs").define("carpeted_slabs", true);
        builder.pop();
        builder.push("cake");
        DOUBLE_CAKES = builder.comment("Allows you to place a cake on top of another").define("double_cake", true);
        DIRECTIONAL_CAKE = builder.comment("Allows eating a cake from every side").define("directional_cake", true);
        builder.pop();
        builder.push("mob_head");
        SKULL_PILES = builder.comment("Allows you to place two mob heads on top of each other").define("skull_piles", true);
        SKULL_CANDLES = builder.comment("Allows candles to be placed on top of skulls").define("skull_candles", true);
        SKULL_CANDLES_MULTIPLE = builder.comment("Allows placing more than one candle ontop of each skull").define("multiple_candles", true);
        builder.pop();
        builder.push("flower_pot");
        HANGING_POT = builder.comment("allows you to place hanging flower pots. Works with any modded pot too").define("hanging_pot", true);
        builder.pop();
        builder.push("lantern");
        WALL_LANTERN = builder.comment("Allow wall lanterns placement").define("wall_lanterns", true);
        WALL_LANTERN_HIGH_PRIORITY = builder.comment("Gives high priority to wall lantern placement. Enable to override other wall lanterns placements, disable if it causes issues with other mods that use lower priority block click events").define("high_priority", true);
        List<String> modBlacklist = Arrays.asList("bbb", "extlights", "betterendforge", "spelunkery", "galosphere", "tconstruct", "enigmaticlegacy", "beautify");
        WALL_LANTERN_BLACKLIST = builder.comment("Mod ids of mods that have lantern block that extend the base lantern class but don't look like one").define("mod_blacklist", modBlacklist);
        WALL_LANTERN_WHITELIST = builder.comment("Ids of blocks that are not detected as lanterns but should be").define("id_whitelist", List.of(""));
        FALLING_LANTERNS = builder.comment("Allows ceiling lanterns to fall if their support is broken.Additionally if they fall from high enough they will break creating a fire where they land").define("falling_lanterns", FallingLanternEntity.FallMode.ON);
        builder.pop();
        builder.push("bell");
        BELL_CHAIN_RINGING = builder.comment("Ring a bell by clicking on a chain that's connected to it").define("chain_ringing", true);
        BELL_CHAIN_LENGTH = builder.comment("Max chain length that allows a bell to ring").define("chain_length", 16, 0, 256);
        builder.pop();
        builder.push("banners");
        CEILING_BANNERS = builder.comment("Allow banners to be placed on ceilings").define("ceiling_banners", true);
        builder.pop();
        builder.push("misc");
        DYE_BLOCKS = builder.comment("Allows dying blocks by right clicking them with dye").define("dye_blocks", false);
        builder.pop();
        builder.push("torch");
        TORCH_FIRE = builder.comment("Allows torches to set entities on fire").define("torch_fire", true);
        TORCH_FIRE_OFFHAND = builder.comment("Allows torches to set entities on fire when held in offhand given you are attacking with a sword").define("torch_fire_offhand", false);
        TORCH_FIRE_DURATION = builder.comment("Duration of the on fire effect applied by torches. In seconds").define("torch_fire_duration", 2, 1, 60);
        builder.pop();
        builder.push("lily_pad");
        LILY_PADS_ON = builder.comment("Allows lilypads to have any block placed ontop").define("better_lilypads", true);
        builder.pop();
        builder.setSynced();
        SPEC = builder.buildAndRegister();
        SPEC.loadFromFile();
    }

    public static enum MixingMode {

        OFF, ONLY_BOILING, ON
    }
}