package net.mehvahdjukaar.supplementaries.configs;

import com.google.common.base.Suppliers;
import com.mojang.serialization.Codec;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.platform.PlatHelper;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigBuilder;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigSpec;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigType;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.common.block.blocks.BlackboardBlock;
import net.mehvahdjukaar.supplementaries.common.entities.BombEntity;
import net.mehvahdjukaar.supplementaries.common.utils.BlockPredicate;
import net.mehvahdjukaar.supplementaries.integration.CompatHandler;
import net.mehvahdjukaar.supplementaries.integration.MapAtlasCompat;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.Holder;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.EnchantmentTableBlock;
import org.jetbrains.annotations.Nullable;

public class CommonConfigs {

    private static final Map<String, Supplier<Boolean>> FEATURE_TOGGLES = new HashMap();

    public static final ConfigSpec SPEC;

    private static final WeakReference<ConfigBuilder> builderReference;

    private static final Supplier<Boolean> TRUE = () -> true;

    private static final Supplier<Boolean> FALSE = () -> false;

    private static Supplier<Holder.Reference<Block>> ropeOverride = () -> null;

    public static Predicate<Block> xpBottlingOverride = EnchantmentTableBlock.class::isInstance;

    private static boolean stasisEnabled = true;

    private static void onRefresh() {
        ropeOverride = Suppliers.memoize(() -> {
            Optional<Holder.Reference<Block>> o = BuiltInRegistries.BLOCK.m_203636_(ResourceKey.create(Registries.BLOCK, (ResourceLocation) CommonConfigs.Functional.ROPE_OVERRIDE.get()));
            return o.isPresent() && ((Holder.Reference) o.get()).value() != ModRegistry.ROPE.get() ? (Holder.Reference) o.get() : null;
        });
        String xp = (String) CommonConfigs.Tweaks.BOTTLING_TARGET.get();
        if (xp.isEmpty()) {
            xpBottlingOverride = EnchantmentTableBlock.class::isInstance;
        } else {
            xpBottlingOverride = b -> b == Suppliers.memoize(() -> BuiltInRegistries.BLOCK.get(new ResourceLocation(xp)));
        }
        stasisEnabled = (Boolean) CommonConfigs.Tools.STASIS_ENABLED.get() && ((Boolean) CommonConfigs.Tools.SLINGSHOT_ENABLED.get() || (Boolean) CommonConfigs.Tools.BUBBLE_BLOWER_ENABLED.get());
    }

    @Nullable
    public static Block getSelectedRope() {
        Holder.Reference<Block> override = getRopeOverride();
        if (override != null) {
            return override.value();
        } else {
            return CommonConfigs.Functional.ROPE_ENABLED.get() ? (Block) ModRegistry.ROPE.get() : null;
        }
    }

    @Nullable
    public static Holder.Reference<Block> getRopeOverride() {
        return (Holder.Reference<Block>) ropeOverride.get();
    }

    public static boolean stasisEnabled() {
        return stasisEnabled;
    }

    public static double getRedMerchantSpawnMultiplier() {
        return CommonConfigs.Tools.BOMB_ENABLED.get() ? (Double) CommonConfigs.General.RED_MERCHANT_SPAWN_MULTIPLIER.get() : 0.0;
    }

    private static Supplier<Boolean> feature(ConfigBuilder builder) {
        return feature(builder, "enabled", builder.currentCategory(), true);
    }

    private static Supplier<Boolean> feature(ConfigBuilder builder, String name) {
        return feature(builder, name, name, true);
    }

    private static Supplier<Boolean> feature(ConfigBuilder builder, String name, String key, boolean value) {
        Supplier<Boolean> config = builder.gameRestart().define(name, value);
        FEATURE_TOGGLES.put(key, config);
        return config;
    }

    private static Supplier<Boolean> dep(Supplier<Supplier<Boolean>> original) {
        return CompatHandler.AMENDMENTS ? () -> false : (Supplier) original.get();
    }

    public static boolean isEnabled(String key) {
        if (!SPEC.isLoaded()) {
            throw new AssertionError("Config isn't loaded. How?");
        } else {
            return switch(key) {
                case "ash_brick" ->
                    CommonConfigs.Building.ASH_BRICKS_ENABLED.get();
                case "trapped_present" ->
                    CommonConfigs.Functional.PRESENT_ENABLED.get() && CommonConfigs.Functional.TRAPPED_PRESENT_ENABLED.get();
                case "flax_block", "wild_flax" ->
                    CommonConfigs.Functional.FLAX_ENABLED.get();
                case "soap_block" ->
                    CommonConfigs.Functional.SOAP_ENABLED.get();
                case "checker_slab" ->
                    CommonConfigs.Building.CHECKERBOARD_ENABLED.get();
                case "globe_sepia" ->
                    CommonConfigs.Building.GLOBE_SEPIA.get() && CommonConfigs.Tools.ANTIQUE_INK_ENABLED.get();
                case "ash_from_burning" ->
                    CommonConfigs.Building.ASH_ENABLED.get() && CommonConfigs.Building.ASH_FROM_MOBS.get();
                case "adventurer_maps" ->
                    CommonConfigs.Tweaks.RANDOM_ADVENTURER_MAPS.get();
                case "key" ->
                    CommonConfigs.Building.NETHERITE_DOOR_ENABLED.get() || CommonConfigs.Building.NETHERITE_TRAPDOOR_ENABLED.get() || CommonConfigs.Functional.SAFE_ENABLED.get();
                default ->
                    ((Supplier) FEATURE_TOGGLES.getOrDefault(key, (Supplier) () -> true)).get();
            };
        }
    }

    public static void init() {
        int disabled = 0;
        for (Supplier<Boolean> c : FEATURE_TOGGLES.values()) {
            if (!(Boolean) c.get()) {
                disabled++;
            }
        }
        float percentage = (float) disabled / (float) FEATURE_TOGGLES.size();
        if (percentage > 0.66F) {
            Supplementaries.LOGGER.error("You have disabled more than {}% of Supplementaries content. Consider uninstalling the mod", String.format("%.0f", percentage * 100.0F));
        }
    }

    static {
        ConfigBuilder builder = ConfigBuilder.create(Supplementaries.res("common"), ConfigType.COMMON);
        builderReference = new WeakReference(builder);
        CommonConfigs.Redstone.init();
        CommonConfigs.Functional.init();
        CommonConfigs.Building.init();
        CommonConfigs.Tools.init();
        CommonConfigs.General.init();
        CommonConfigs.Tweaks.init();
        builder.setSynced();
        builder.onChange(CommonConfigs::onRefresh);
        SPEC = builder.buildAndRegister();
        SPEC.loadFromFile();
    }

    public static class Building {

        public static final Supplier<Boolean> BLACKBOARD_ENABLED;

        public static final Supplier<Boolean> BLACKBOARD_COLOR;

        public static final Supplier<BlackboardBlock.UseMode> BLACKBOARD_MODE;

        public static final Supplier<Boolean> IRON_GATE_ENABLED;

        public static final Supplier<Boolean> DOUBLE_IRON_GATE;

        public static final Supplier<Boolean> CONSISTENT_GATE;

        public static final Supplier<Boolean> ASH_ENABLED;

        public static final Supplier<Boolean> ASH_FROM_MOBS;

        public static final Supplier<Double> ASH_BURN_CHANCE;

        public static final Supplier<Boolean> ASH_RAIN;

        public static final Supplier<Boolean> BASALT_ASH_ENABLED;

        public static final Supplier<Boolean> SUGAR_CUBE_ENABLED;

        public static final Supplier<Integer> SUGAR_BLOCK_HORSE_SPEED_DURATION;

        public static final Supplier<Boolean> ITEM_SHELF_ENABLED;

        public static final Supplier<Boolean> ITEM_SHELF_LADDER;

        public static final Supplier<Boolean> NOTICE_BOARD_ENABLED;

        public static final Supplier<Boolean> NOTICE_BOARDS_UNRESTRICTED;

        public static final Supplier<Boolean> NOTICE_BOARD_GUI;

        public static final Supplier<Boolean> FLAG_ENABLED;

        public static final Supplier<Boolean> FLAG_POLE;

        public static final Supplier<Integer> FLAG_POLE_LENGTH;

        public static final Supplier<Boolean> GOBLET_ENABLED;

        public static final Supplier<Boolean> GOBLET_DRINK;

        public static final Supplier<Boolean> PLANTER_ENABLED;

        public static final Supplier<Boolean> PLANTER_BREAKS;

        public static final Supplier<Boolean> FD_PLANTER;

        public static final Supplier<Boolean> SIGN_POST_ENABLED;

        public static final Supplier<Boolean> WAY_SIGN_DISTANCE_TEXT;

        public static final Supplier<Boolean> WAY_SIGN_ENABLED;

        public static final Supplier<Boolean> GLOBE_ENABLED;

        public static final Supplier<Boolean> GLOBE_SEPIA;

        public static final Supplier<Boolean> PEDESTAL_ENABLED;

        public static final Supplier<Integer> CRYSTAL_ENCHANTING;

        public static final Supplier<Boolean> TIMBER_FRAME_ENABLED;

        public static final Supplier<Boolean> REPLACE_DAUB;

        public static final Supplier<Boolean> SWAP_TIMBER_FRAME;

        public static final Supplier<Boolean> AXE_TIMBER_FRAME_STRIP;

        public static final Supplier<Boolean> DAUB_ENABLED;

        public static final Supplier<Boolean> WATTLE_AND_DAUB_ENABLED;

        public static final Supplier<Boolean> ASH_BRICKS_ENABLED;

        public static final Supplier<Boolean> SCONCE_ENABLED;

        public static final Supplier<Boolean> SCONCE_LEVER_ENABLED;

        public static final Supplier<Boolean> STONE_LAMP_ENABLED;

        public static final Supplier<Boolean> END_STONE_LAMP_ENABLED;

        public static final Supplier<Boolean> BLACKSTONE_LAMP_ENABLED;

        public static final Supplier<Boolean> DEEPSLATE_LAMP_ENABLED;

        public static final Supplier<Boolean> CHECKERBOARD_ENABLED;

        public static final Supplier<Boolean> NETHERITE_TRAPDOOR_ENABLED;

        public static final Supplier<Boolean> NETHERITE_DOOR_ENABLED;

        public static final Supplier<Boolean> PANCAKES_ENABLED;

        public static final Supplier<Boolean> TILE_ENABLED;

        public static final Supplier<Boolean> RAKED_GRAVEL_ENABLED;

        public static final Supplier<Boolean> STATUE_ENABLED;

        public static final Supplier<Boolean> FEATHER_BLOCK_ENABLED;

        public static final Supplier<Boolean> FLINT_BLOCK_ENABLED;

        public static final Supplier<Boolean> DOORMAT_ENABLED;

        public static final Supplier<Boolean> FLOWER_BOX_ENABLED;

        public static final Supplier<Boolean> BLACKSTONE_TILE_ENABLED;

        public static final Supplier<Boolean> LAPIS_BRICKS_ENABLED;

        public static final Supplier<Boolean> CANDLE_HOLDER_ENABLED;

        public static final Supplier<Boolean> HAT_STAND_ENABLED;

        public static final Supplier<Boolean> HAT_STAND_UNRESTRICTED;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.push("building");
            builder.push("blackboard");
            BLACKBOARD_ENABLED = CommonConfigs.feature(builder);
            BLACKBOARD_COLOR = builder.comment("Enable to draw directly on a blackboard using any dye. Gui still only works in black and white").define("colored_blackboard", PlatHelper.isModLoaded("chalk"));
            BLACKBOARD_MODE = builder.comment("Interaction mode for blackboards").define("interaction_mode", BlackboardBlock.UseMode.BOTH);
            builder.pop();
            builder.push("timber_frame");
            TIMBER_FRAME_ENABLED = CommonConfigs.feature(builder);
            SWAP_TIMBER_FRAME = builder.comment("Allow placing a timber frame directly on a block by holding shift").define("swap_on_shift", false);
            AXE_TIMBER_FRAME_STRIP = builder.comment("Allows axes to remove a framed block leaving the contained block intact").define("axes_strip", true);
            REPLACE_DAUB = builder.comment("Replace a timber frame with wattle and daub block when daub is placed in it").define("replace_daub", true);
            builder.pop();
            builder.push("iron_gate");
            IRON_GATE_ENABLED = CommonConfigs.feature(builder);
            DOUBLE_IRON_GATE = builder.comment("Allows two iron gates to be opened simultaneously when on top of the other").define("double_opening", true);
            CONSISTENT_GATE = builder.comment("Makes iron (ang gold) gates behave like their door counterpart so for example iron gates will only be openable by redstone").define("door-like_gates", false);
            builder.pop();
            builder.push("item_shelf");
            ITEM_SHELF_ENABLED = CommonConfigs.feature(builder);
            ITEM_SHELF_LADDER = builder.comment("Makes item shelves climbable").define("climbable_shelves", false);
            builder.pop();
            builder.push("sugar_cube");
            SUGAR_CUBE_ENABLED = CommonConfigs.feature(builder);
            SUGAR_BLOCK_HORSE_SPEED_DURATION = builder.comment("Duration in seconts of speed effect garanted to horses that eat a sugar cube").define("horse_speed_duration", 10, 0, 1000);
            builder.pop();
            builder.push("planter");
            PLANTER_ENABLED = CommonConfigs.feature(builder);
            PLANTER_BREAKS = builder.comment("Makes so saplings that grow in a planter will break it turning into rooted dirt").define("broken_by_sapling", false);
            FD_PLANTER = builder.comment("When Farmers Delight is on planter will also act like rich soil and use it in its recipe").define("rich_soil_planter", true);
            builder.pop();
            builder.push("notice_board");
            NOTICE_BOARD_ENABLED = CommonConfigs.feature(builder);
            NOTICE_BOARDS_UNRESTRICTED = builder.comment("Allows notice boards to accept and display any item, not just maps and books").define("allow_any_item", false);
            NOTICE_BOARD_GUI = builder.comment("Enables a GUI for the block. Not needed as the block just holds one item which you can place by clicking on it").define("gui", true);
            builder.pop();
            builder.push("pedestal");
            PEDESTAL_ENABLED = CommonConfigs.feature(builder);
            CRYSTAL_ENCHANTING = builder.comment("If enabled end crystals placed on a pedestals will provide an enchantment power bonus equivalent to 3 bookshelves").define("crystal_enchanting", 3, 0, 100);
            builder.pop();
            builder.push("ash");
            ASH_ENABLED = CommonConfigs.feature(builder);
            ASH_BURN_CHANCE = builder.comment("Burnable blocks will have a chance to create ash layers when burned. Greater this number the greater the chance will be").define("ash_from_fire_chance", 1.0, 0.0, 1.0);
            ASH_FROM_MOBS = PlatHelper.getPlatform().isFabric() ? CommonConfigs.FALSE : builder.comment("Burning mobs will drop ash when they die").define("ash_from_burning_mobs", true);
            ASH_RAIN = builder.comment("Allows rain to wash away ash layers overtime").define("rain_wash_ash", true);
            BASALT_ASH_ENABLED = PlatHelper.getPlatform().isFabric() ? CommonConfigs.TRUE : builder.comment("Use a datapack to tweak rarity").define("basalt_ash", true);
            builder.pop();
            builder.push("flag");
            FLAG_ENABLED = CommonConfigs.feature(builder);
            FLAG_POLE = builder.comment("Allows right/left clicking on a stick to lower/raise a flag attached to it").define("stick_pole", true);
            FLAG_POLE_LENGTH = builder.comment("Maximum allowed pole length").define("pole_length", 16, 0, 256);
            builder.pop();
            builder.push("goblet");
            GOBLET_ENABLED = CommonConfigs.feature(builder);
            GOBLET_DRINK = builder.comment("Allows drinking from goblets").define("allow_drinking", true);
            builder.pop();
            builder.push("globe");
            GLOBE_ENABLED = CommonConfigs.feature(builder);
            GLOBE_SEPIA = CommonConfigs.feature(builder, "sepia_globe");
            builder.pop();
            builder.push("sign_post");
            SIGN_POST_ENABLED = CommonConfigs.feature(builder);
            builder.push("way_sign");
            WAY_SIGN_ENABLED = PlatHelper.getPlatform().isFabric() ? CommonConfigs.TRUE : CommonConfigs.feature(builder.comment("Entirely disables them from spawning"));
            WAY_SIGN_DISTANCE_TEXT = builder.comment("With this option road signs will display the distance to the structure that they are pointing to").define("show_distance_text", true);
            builder.pop();
            builder.pop();
            builder.push("daub");
            DAUB_ENABLED = CommonConfigs.feature(builder);
            WATTLE_AND_DAUB_ENABLED = CommonConfigs.feature(builder, "wattle_and_daub");
            builder.pop();
            builder.push("ash_bricks");
            ASH_BRICKS_ENABLED = CommonConfigs.feature(builder);
            builder.pop();
            builder.push("hat_stand");
            HAT_STAND_ENABLED = CommonConfigs.feature(builder);
            HAT_STAND_UNRESTRICTED = builder.comment("Allow all items to go on hat stand").define("unrestricted", false);
            builder.pop();
            LAPIS_BRICKS_ENABLED = CommonConfigs.feature(builder, "lapis_bricks");
            DEEPSLATE_LAMP_ENABLED = CommonConfigs.feature(builder, "deepslate_lamp");
            END_STONE_LAMP_ENABLED = CommonConfigs.feature(builder, "end_stone_lamp");
            BLACKSTONE_LAMP_ENABLED = CommonConfigs.feature(builder, "blackstone_lamp");
            STONE_LAMP_ENABLED = CommonConfigs.feature(builder, "stone_lamp");
            TILE_ENABLED = CommonConfigs.feature(builder, "stone_tile");
            BLACKSTONE_TILE_ENABLED = CommonConfigs.feature(builder, "blackstone_tile");
            SCONCE_ENABLED = CommonConfigs.feature(builder, "sconce");
            SCONCE_LEVER_ENABLED = CommonConfigs.feature(builder, "sconce_lever");
            PANCAKES_ENABLED = CommonConfigs.feature(builder, "pancake");
            NETHERITE_DOOR_ENABLED = CommonConfigs.feature(builder, "netherite_door");
            NETHERITE_TRAPDOOR_ENABLED = CommonConfigs.feature(builder, "netherite_trapdoor");
            CHECKERBOARD_ENABLED = CommonConfigs.feature(builder, "checker_block");
            RAKED_GRAVEL_ENABLED = CommonConfigs.feature(builder, "raked_gravel");
            FEATHER_BLOCK_ENABLED = CommonConfigs.feature(builder, "feather_block");
            STATUE_ENABLED = CommonConfigs.feature(builder, "statue");
            FLOWER_BOX_ENABLED = CommonConfigs.feature(builder, "flower_box");
            DOORMAT_ENABLED = CommonConfigs.feature(builder, "doormat");
            FLINT_BLOCK_ENABLED = CommonConfigs.feature(builder, "flint_block");
            CANDLE_HOLDER_ENABLED = CommonConfigs.feature(builder, "candle_holder");
            builder.pop();
        }
    }

    public static enum DeathMarkerMode {

        OFF, WITH_COMPASS, ALWAYS;

        public boolean isOn(Player player) {
            return switch(this) {
                case OFF ->
                    false;
                case ALWAYS ->
                    true;
                case WITH_COMPASS ->
                    CompatHandler.MAPATLAS && MapAtlasCompat.canPlayerSeeDeathMarker(player) ? true : player.getInventory().m_216874_(i -> i.is(Items.RECOVERY_COMPASS));
            };
        }
    }

    public static class Functional {

        public static final Supplier<Boolean> SAFE_ENABLED;

        public static final Supplier<Boolean> SAFE_UNBREAKABLE;

        public static final Supplier<Boolean> SAFE_SIMPLE;

        public static final Supplier<Boolean> BAMBOO_SPIKES_ENABLED;

        public static final Supplier<Boolean> TIPPED_SPIKES_ENABLED;

        public static final Supplier<Boolean> TIPPED_SPIKES_TAB;

        public static final Supplier<Boolean> ONLY_ALLOW_HARMFUL;

        public static final Supplier<Boolean> BAMBOO_SPIKES_DROP_LOOT;

        public static final Supplier<Boolean> SACK_ENABLED;

        public static final Supplier<Boolean> SACK_PENALTY;

        public static final Supplier<Integer> SACK_INCREMENT;

        public static final Supplier<Integer> SACK_SLOTS;

        public static final Supplier<Boolean> JAR_ENABLED;

        public static final Supplier<Integer> JAR_CAPACITY;

        public static final Supplier<Boolean> JAR_EAT;

        public static final Supplier<Boolean> JAR_CAPTURE;

        public static final Supplier<Boolean> JAR_COOKIES;

        public static final Supplier<Boolean> JAR_LIQUIDS;

        public static final Supplier<Boolean> JAR_ITEM_DRINK;

        public static final Supplier<Boolean> JAR_AUTO_DETECT;

        public static final Supplier<Boolean> CAGE_ENABLED;

        public static final Supplier<Boolean> CAGE_ALL_MOBS;

        public static final Supplier<Boolean> CAGE_ALL_BABIES;

        public static final Supplier<Boolean> CAGE_AUTO_DETECT;

        public static final Supplier<Boolean> CAGE_PERSISTENT_MOBS;

        public static final Supplier<Integer> CAGE_HEALTH_THRESHOLD;

        public static final Supplier<Boolean> SOAP_ENABLED;

        public static final Supplier<List<String>> SOAP_DYE_CLEAN_BLACKLIST;

        public static final Supplier<Map<BlockPredicate, ResourceLocation>> SOAP_SPECIAL;

        public static final Supplier<Boolean> ROPE_ENABLED = CommonConfigs.TRUE;

        public static final Supplier<ResourceLocation> ROPE_OVERRIDE;

        public static final Supplier<Boolean> ROPE_UNRESTRICTED;

        public static final Supplier<Boolean> ROPE_HORIZONTAL;

        public static final Supplier<Boolean> ROPE_SLIDE;

        public static final Supplier<Boolean> URN_ENABLED;

        public static final Supplier<Double> URN_ENTITY_SPAWN_CHANCE;

        public static final Supplier<Boolean> URN_PILE_ENABLED;

        public static final Supplier<Integer> URN_PATCH_TRIES = null;

        public static final Supplier<Integer> URN_PER_CHUNK = null;

        public static final Supplier<Boolean> FLAX_ENABLED;

        public static final Supplier<Boolean> WILD_FLAX_ENABLED;

        public static final Supplier<Integer> FLAX_PATCH_TRIES = null;

        public static final Supplier<Integer> FLAX_AVERAGE_EVERY = null;

        public static final Supplier<Boolean> FODDER_ENABLED;

        public static final Supplier<Boolean> PRESENT_ENABLED;

        public static final Supplier<Boolean> TRAPPED_PRESENT_ENABLED;

        public static final Supplier<Boolean> HOURGLASS_ENABLED;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.push("functional");
            builder.push("rope");
            Supplier<Boolean> funny = CommonConfigs.feature(builder.comment("So you came here to disable supp rope not because they are bad but because they are the easiest to disable, despite them doing all the stuff other ropes can do. Well too bad, this config doesnt do anything :P. Learn how to use datapacks to disable stuff, like its normally done"));
            CommonConfigs.FEATURE_TOGGLES.put("rope", CommonConfigs.TRUE);
            ROPE_UNRESTRICTED = builder.comment("Allows ropes to be supported & attached to solid block sides").define("block_side_attachment", true);
            ROPE_SLIDE = builder.comment("Makes sliding down ropes as fast as free falling, still negating fall damage").define("slide_on_fall", true);
            ROPE_OVERRIDE = builder.comment("In case you want to disable supplementaries ropes you can specify here another mod rope and they will be used for rope arrows and in mineshafts instead").define("rope_override", Supplementaries.res("rope"));
            ROPE_HORIZONTAL = builder.comment("Enables horizontal placement of ropes").define("horizontal_ropes", true);
            builder.pop();
            builder.push("jar");
            JAR_ENABLED = CommonConfigs.feature(builder);
            JAR_CAPACITY = builder.comment("Jar liquid capacity: leave at 12 for pixel accuracy").define("capacity", 12, 0, 1024);
            JAR_EAT = builder.comment("Allow right click to instantly eat or drink food or potions inside a placed jar.\nDisable if you think this ability is op (honey for example). Cookies are excluded").define("drink_from_jar", false);
            JAR_ITEM_DRINK = builder.comment("Allows the player to directly drink from jar items").define("drink_from_jar_item", false);
            JAR_AUTO_DETECT = builder.comment("Dynamically allows all small mobs inside jars depending on their hitbox size. Tinted jars can accept hostile mbos too").define("jar_auto_detect", false);
            JAR_CAPTURE = builder.comment("Allow Jars to capture small mobs").define("jar_capture", true);
            JAR_COOKIES = builder.comment("Allow Jars to hold cookies").define("jar_cookies", true);
            JAR_LIQUIDS = builder.comment("Allow Jars to hold liquids from bottles, buckets and bowls").define("jar_liquids", true);
            builder.pop();
            builder.push("cage");
            CAGE_ENABLED = CommonConfigs.feature(builder);
            CAGE_ALL_MOBS = builder.comment("Allows all entities to be captured by cages and jars. Not meant for survival").define("allow_all_mobs", false);
            CAGE_ALL_BABIES = builder.comment("Allows all baby mobs to be captured by cages").define("cage_allow_all_babies", false);
            CAGE_AUTO_DETECT = builder.comment("Dynamically allows all small mobs inside cages depending on their hitbox size").define("cage_auto_detect", false);
            CAGE_PERSISTENT_MOBS = builder.comment("Makes it so all (hostile) mobs captured by cages and jars will be set to persistent so they won't despawn when released").define("persistent_mobs", false);
            CAGE_HEALTH_THRESHOLD = builder.comment("Health percentage under which mobs will be allowed to be captured by cages and jars. Leave at 100 to accept any health level").define("health_threshold", 100, 1, 100);
            builder.pop();
            builder.push("safe");
            SAFE_ENABLED = CommonConfigs.feature(builder);
            SAFE_UNBREAKABLE = builder.comment("Makes safes only breakable by their owner or by a player in creative").define("prevent_breaking", false);
            SAFE_SIMPLE = builder.comment("Make safes simpler so they do not require keys:\nthey will be bound to the first person that opens one and only that person will be able to interact with them").define("simple_safes", false);
            builder.pop();
            builder.push("sack");
            SACK_ENABLED = CommonConfigs.feature(builder);
            SACK_PENALTY = builder.comment("Penalize the player with slowness effect when carrying too many sacks").define("sack_penalty", true);
            SACK_INCREMENT = builder.comment("Maximum number of sacks after which the overencumbered effect will be applied. Each multiple of this number will increase the effect strength by one").define("sack_increment", 2, 0, 50);
            SACK_SLOTS = builder.comment("How many slots should a sack have").define("slots", 9, 1, 27);
            builder.pop();
            builder.push("bamboo_spikes");
            BAMBOO_SPIKES_ENABLED = CommonConfigs.feature(builder);
            TIPPED_SPIKES_ENABLED = CommonConfigs.feature(builder, "tipped_spikes");
            BAMBOO_SPIKES_DROP_LOOT = builder.comment("Allows entities killed by spikes to drop loot as if they were killed by a player").define("player_loot", false);
            ONLY_ALLOW_HARMFUL = builder.comment("Alternative mode for bamboo spikes. Allows only harmful effects to be applied on them and they obtain infinite durability").define("only_allow_harmful_effects", true);
            TIPPED_SPIKES_TAB = builder.comment("Populate the creative inventory with all tipped spikes variations").define("populate_creative_tab", true);
            builder.pop();
            builder.push("urn");
            URN_ENABLED = CommonConfigs.feature(builder);
            URN_ENTITY_SPAWN_CHANCE = builder.comment("Chance for an urn to spawn a critter from the urn_spawn tag").define("critter_spawn_chance", 0.01F, 0.0, 1.0);
            URN_PILE_ENABLED = PlatHelper.getPlatform().isFabric() ? CommonConfigs.TRUE : builder.worldReload().define("cave_urns", true);
            builder.pop();
            builder.push("soap");
            SOAP_ENABLED = CommonConfigs.feature(builder);
            SOAP_DYE_CLEAN_BLACKLIST = builder.comment("Dyed Bock types that cannot be cleaned with soap").define("clean_blacklist", List.of("minecraft:glazed_terracotta", "botania:mystical_flower", "mna:chimerite_crystal", "botania:floating_flower", ",minecraft:mushroom", "botania:mushroom", "botania:tall_mystical_flower", "botania:petal_block", "morered:network_cable", "xycraft_world:glowing_shiny_aurey_block", "xycraft_world:shiny_aurey_block", "xycraft_world:rgb_lamp", "xycraft_world:glowing_rgb_viewer", "xycraft_world:glowing_matte_rgb_block", "xycraft_world:rgb_lamp_pole"));
            SOAP_SPECIAL = builder.comment("This is a map of special blocks that can be cleaned with soap").defineObject("special_blocks", () -> Map.of(BlockPredicate.create("sticky_piston"), new ResourceLocation("piston"), BlockPredicate.create("quark:dirty_glass"), new ResourceLocation("glass"), BlockPredicate.create("quark:dirty_glass_pane"), new ResourceLocation("glass_pane"), BlockPredicate.create("#alexscaves:cave_paintings"), new ResourceLocation("alexscaves:smooth_limestone")), Codec.unboundedMap(BlockPredicate.CODEC, ResourceLocation.CODEC));
            builder.pop();
            builder.push("present");
            PRESENT_ENABLED = CommonConfigs.feature(builder);
            TRAPPED_PRESENT_ENABLED = CommonConfigs.feature(builder, "trapped_present");
            builder.pop();
            builder.push("flax");
            FLAX_ENABLED = CommonConfigs.feature(builder);
            WILD_FLAX_ENABLED = PlatHelper.getPlatform().isFabric() ? CommonConfigs.TRUE : builder.worldReload().define("wild_flax", true);
            builder.pop();
            FODDER_ENABLED = CommonConfigs.feature(builder, "fodder");
            HOURGLASS_ENABLED = CommonConfigs.feature(builder, "hourglass");
            builder.pop();
        }
    }

    public static class General {

        public static final Supplier<Double> RED_MERCHANT_SPAWN_MULTIPLIER;

        public static final Supplier<Boolean> JAR_TAB;

        public static final Supplier<Boolean> CREATIVE_TAB;

        public static final Supplier<Boolean> DISPENSERS;

        public static final Supplier<Boolean> DEBUG_RESOURCES;

        public static final Supplier<Boolean> SERVER_PROTECTION;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.comment("General settings").push("general");
            CREATIVE_TAB = builder.comment("Enable Creative Tab").define("creative_tab", false);
            DISPENSERS = builder.comment("Set to false to disable custom dispenser behaviors (i.e: filling jars) if for some reason they are causing trouble").gameRestart().define("dispensers", true);
            JAR_TAB = PlatHelper.getPlatform().isFabric() ? CommonConfigs.FALSE : builder.gameRestart().comment("Creates a creative tab full of filled jars").define("jar_tab", false);
            DEBUG_RESOURCES = builder.comment("Save generated resources to disk in a 'debug' folder in your game directory. Mainly for debug purposes but can be used to generate assets in all wood types for your mods :0").define("debug_save_dynamic_pack", false);
            SERVER_PROTECTION = builder.comment("Turn this on to disable any interaction on blocks placed by other players. This affects item shelves, signs, flower pots, and boards. Useful for protected servers. Note that it will affect only blocks placed after this is turned on and such blocks will keep being protected after this option is disabled").define("server_protection", false);
            RED_MERCHANT_SPAWN_MULTIPLIER = builder.comment("slightly increase this or decrease this number to tweak the red merchant spawn chance. Won't spawn at 0 and will spawn twice as often on 2").define("red_merchant_spawn_multiplier", 1.0, 0.0, 10.0);
            builder.pop();
        }
    }

    public static enum Hands {

        MAIN_HAND, OFF_HAND, BOTH, NONE
    }

    public static class Redstone {

        public static final Supplier<Boolean> SPEAKER_BLOCK_ENABLED;

        public static final Supplier<Integer> SPEAKER_RANGE;

        public static final Supplier<Integer> MAX_TEXT;

        public static final Supplier<Boolean> SPEAKER_NARRATOR;

        public static final Supplier<Boolean> BELLOWS_ENABLED;

        public static final Supplier<Integer> BELLOWS_PERIOD;

        public static final Supplier<Integer> BELLOWS_POWER_SCALING;

        public static final Supplier<Double> BELLOWS_MAX_VEL;

        public static final Supplier<Double> BELLOWS_BASE_VEL_SCALING;

        public static final Supplier<Integer> BELLOWS_RANGE;

        public static final Supplier<Boolean> PISTON_LAUNCHER_ENABLED;

        public static final Supplier<Double> LAUNCHER_VEL;

        public static final Supplier<Integer> LAUNCHER_HEIGHT;

        public static final Supplier<Boolean> ENDERMAN_HEAD_ENABLED;

        public static final Supplier<Boolean> ENDERMAN_HEAD_DROP;

        public static final Supplier<Integer> ENDERMAN_HEAD_INCREMENT;

        public static final Supplier<Boolean> ENDERMAN_HEAD_WORKS_FROM_ANY_SIDE;

        public static final Supplier<Boolean> TURN_TABLE_ENABLED;

        public static final Supplier<Boolean> TURN_TABLE_SHUFFLE;

        public static final Supplier<Boolean> TURN_TABLE_ROTATE_ENTITIES;

        public static final Supplier<Boolean> WIND_VANE_ENABLED;

        public static final Supplier<Boolean> CLOCK_ENABLED;

        public static final Supplier<Boolean> ILLUMINATOR_ENABLED;

        public static final Supplier<Boolean> CRANK_ENABLED;

        public static final Supplier<Boolean> FAUCET_ENABLED;

        public static final Supplier<Boolean> FAUCET_FILL_ENTITIES;

        public static final Supplier<Boolean> FAUCET_DROP_ITEMS;

        public static final Supplier<Boolean> COG_BLOCK_ENABLED;

        public static final Supplier<Boolean> GOLD_TRAPDOOR_ENABLED;

        public static final Supplier<Boolean> GOLD_DOOR_ENABLED;

        public static final Supplier<Boolean> LOCK_BLOCK_ENABLED;

        public static final Supplier<Boolean> DISPENSER_MINECART_ENABLED;

        public static final Supplier<Boolean> DISPENSER_MINECART_FRONT;

        public static final Supplier<Boolean> RELAYER_ENABLED;

        public static final Supplier<Boolean> CRYSTAL_DISPLAY_ENABLED;

        public static final Supplier<Boolean> CRYSTAL_DISPLAY_CHAINED;

        public static final Supplier<Boolean> PULLEY_ENABLED;

        public static final Supplier<Double> MINESHAFT_ELEVATOR;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.push("redstone");
            builder.push("speaker_block");
            SPEAKER_BLOCK_ENABLED = CommonConfigs.feature(builder);
            SPEAKER_NARRATOR = builder.comment("Enable/disable speaker block narrator mode").define("narrator_enabled", true);
            MAX_TEXT = builder.comment("Max text").define("max_text", 32, 0, 10000);
            SPEAKER_RANGE = builder.comment("Maximum block range").define("range", 64, 0, 100000000);
            builder.pop();
            builder.push("bellows");
            BELLOWS_ENABLED = CommonConfigs.feature(builder);
            BELLOWS_PERIOD = builder.comment("bellows pushes air following this equation: \nair=(sin(2PI*ticks/period)<0), with period = base_period-(redstone_power-1)*power_scaling \nrepresents base period at 1 power").define("base_period", 78, 1, 512);
            BELLOWS_POWER_SCALING = builder.comment("how much the period changes in relation to the block redstone power").define("power_scaling", 3, 0, 128);
            BELLOWS_BASE_VEL_SCALING = builder.comment("velocity increase uses this equation: \nvel = base_vel*((range-entity_distance)/range) with base_vel = base_velocity_scaling/period \nnote that the block will push further the faster it's pulsing").define("base_velocity_scaling", 5.0, 0.0, 64.0);
            BELLOWS_MAX_VEL = builder.comment("entities with velocity greater than this won't be pushed").define("power_scaling", 2.0, 0.0, 16.0);
            BELLOWS_RANGE = builder.comment("maximum range").comment("note that it will still only keep alive the two fire blocks closer to it").define("range", 5, 0, 16);
            builder.pop();
            builder.push("spring_launcher");
            PISTON_LAUNCHER_ENABLED = CommonConfigs.feature(builder);
            LAUNCHER_VEL = builder.comment("spring launcher launch speed").define("velocity", 1.5, 0.0, 16.0);
            LAUNCHER_HEIGHT = builder.comment("fall distance needed to trigger the automatic spring launch").define("fall_height_required", 5, 0, 512);
            builder.pop();
            builder.push("enderman_head");
            ENDERMAN_HEAD_ENABLED = CommonConfigs.feature(builder);
            ENDERMAN_HEAD_DROP = builder.define("drop_head", true);
            ENDERMAN_HEAD_INCREMENT = builder.comment("Time to increase 1 power level when being looked at").define("ticks_to_increase_power", 15, 0, 10000);
            ENDERMAN_HEAD_WORKS_FROM_ANY_SIDE = builder.comment("do enderman heads work when looked from any side?").define("work_from_any_side", false);
            builder.pop();
            builder.push("turn_table");
            TURN_TABLE_ENABLED = CommonConfigs.feature(builder);
            TURN_TABLE_ROTATE_ENTITIES = builder.comment("can rotate entities standing on it?").define("rotate_entities", true);
            TURN_TABLE_SHUFFLE = builder.comment("Allows turn table to shuffle containers content when rotated over horizontal axis").define("shuffle_containers", true);
            builder.pop();
            builder.push("pulley_block");
            PULLEY_ENABLED = CommonConfigs.feature(builder);
            MINESHAFT_ELEVATOR = builder.comment("Chance for a new mineshaft elevator piece to spawn").define("mineshaft_elevator", 0.035, 0.0, 1.0);
            builder.pop();
            builder.push("dispenser_minecart");
            DISPENSER_MINECART_ENABLED = CommonConfigs.feature(builder);
            DISPENSER_MINECART_FRONT = builder.comment("Dispenser minecarts will have their dispenser facing forward instead of up").define("face_forward", false);
            builder.pop();
            builder.push("faucet");
            FAUCET_ENABLED = CommonConfigs.feature(builder);
            FAUCET_DROP_ITEMS = builder.comment("Turn off to prevent faucets from dropping items").define("spill_items", true);
            FAUCET_FILL_ENTITIES = builder.comment("Allows faucets to fill entities inventories").define("fill_entities_below", false);
            builder.pop();
            builder.push("crystal_display");
            CRYSTAL_DISPLAY_ENABLED = CommonConfigs.feature(builder);
            CRYSTAL_DISPLAY_CHAINED = builder.comment("Allows chaining 2 crystal displays, letting one power the other to its left IF its own power exceeds 10. Given power will be its own divided by 10. Note that to work the decimal display must NOT have power directly behind it. Doing so will override the behavior to non chaining mode").define("chaining", true);
            builder.pop();
            WIND_VANE_ENABLED = CommonConfigs.feature(builder, "wind_vane");
            CLOCK_ENABLED = CommonConfigs.feature(builder, "clock_block");
            ILLUMINATOR_ENABLED = CommonConfigs.feature(builder, "redstone_illuminator");
            CRANK_ENABLED = CommonConfigs.feature(builder, "crank");
            COG_BLOCK_ENABLED = CommonConfigs.feature(builder, "cog_block");
            GOLD_DOOR_ENABLED = CommonConfigs.feature(builder, "gold_door");
            GOLD_TRAPDOOR_ENABLED = CommonConfigs.feature(builder, "gold_trapdoor");
            LOCK_BLOCK_ENABLED = CommonConfigs.feature(builder, "lock_block");
            RELAYER_ENABLED = CommonConfigs.feature(builder, "relayer");
            builder.pop();
        }
    }

    public static class Tools {

        public static final Supplier<Boolean> BUBBLE_BLOWER_ENABLED;

        public static final Supplier<Integer> BUBBLE_BLOWER_COST;

        public static final Supplier<Integer> BUBBLE_LIFETIME;

        public static final Supplier<Boolean> BUBBLE_BREAK;

        public static final Supplier<Boolean> BUBBLE_FEATHER_FALLING;

        public static final Supplier<Boolean> QUIVER_ENABLED;

        public static final Supplier<Boolean> QUIVER_PREVENTS_SLOWS;

        public static final Supplier<Integer> QUIVER_SLOTS;

        public static final Supplier<Double> QUIVER_SKELETON_SPAWN;

        public static final Supplier<Boolean> QUIVER_CURIO_ONLY;

        public static final Supplier<Boolean> QUIVER_PICKUP;

        public static final Supplier<Boolean> WRENCH_ENABLED;

        public static final Supplier<CommonConfigs.Hands> WRENCH_BYPASS;

        public static final Supplier<Boolean> SLINGSHOT_ENABLED;

        public static final Supplier<Double> SLINGSHOT_RANGE;

        public static final Supplier<Integer> SLINGSHOT_CHARGE;

        public static final Supplier<Double> SLINGSHOT_DECELERATION;

        public static final Supplier<Boolean> UNRESTRICTED_SLINGSHOT;

        public static final Supplier<Boolean> SLINGSHOT_POTIONS;

        public static final Supplier<Boolean> SLINGSHOT_BOMBS;

        public static final Supplier<Boolean> SLINGSHOT_FIRECHARGE;

        public static final Supplier<Boolean> SLINGSHOT_SNOWBALL;

        public static final Supplier<Boolean> SLINGSHOT_ENDERPEARLS;

        public static final Supplier<Boolean> BOMB_ENABLED;

        public static final Supplier<Double> BOMB_RADIUS;

        public static final Supplier<Integer> BOMB_FUSE;

        public static final Supplier<BombEntity.BreakingMode> BOMB_BREAKS;

        public static final Supplier<Double> BOMB_BLUE_RADIUS;

        public static final Supplier<BombEntity.BreakingMode> BOMB_BLUE_BREAKS;

        public static final Supplier<Boolean> FLUTE_ENABLED;

        public static final Supplier<Integer> FLUTE_RADIUS;

        public static final Supplier<Integer> FLUTE_DISTANCE;

        public static final Supplier<Boolean> ROPE_ARROW_ENABLED;

        public static final Supplier<Integer> ROPE_ARROW_CAPACITY;

        public static final Supplier<Boolean> ROPE_ARROW_CROSSBOW;

        public static final Supplier<Boolean> ANTIQUE_INK_ENABLED;

        public static final Supplier<Boolean> CANDY_ENABLED;

        public static final Supplier<Boolean> STASIS_ENABLED;

        public static final Supplier<Boolean> DEPTH_METER_ENABLED;

        public static final Supplier<Boolean> SLICE_MAP_ENABLED;

        public static final Supplier<Double> SLICE_MAP_RANGE;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.push("tools");
            builder.push("quiver");
            QUIVER_ENABLED = CommonConfigs.feature(builder);
            QUIVER_PREVENTS_SLOWS = builder.comment("Allows using a quiver without being slowed down").define("use_without_slow", true);
            QUIVER_SLOTS = builder.comment("Arrow stacks that can fit inside a quiver. Requires reboot").define("slots", 6, 1, 9);
            QUIVER_SKELETON_SPAWN = builder.comment("Increase this number to alter the probability for a Skeleton with quiver to spawn. Note that this also depends on local difficulty so you wont ever see them on easy and very rarely on normal. Similar logic to equipment").define("quiver_skeleton_spawn_chance", 0.03, 0.0, 1.0);
            QUIVER_CURIO_ONLY = builder.comment("Allows quiver to only be used when in offhand or in curio slot").define("only_works_in_curio", false);
            QUIVER_PICKUP = builder.comment("Arrows you pickup will try to go in a quiver if available provided it has some arrow of the same type").define("quiver_pickup", true);
            builder.pop();
            builder.push("slice_map");
            SLICE_MAP_ENABLED = CommonConfigs.feature(builder);
            SLICE_MAP_RANGE = builder.comment("Multiplier that will be applied by slice maps to lower their range compared to normal maps").define("range_multiplier", 0.25, 0.0, 1.0);
            builder.pop();
            builder.push("bubble_blower");
            BUBBLE_BLOWER_ENABLED = CommonConfigs.feature(builder);
            BUBBLE_BLOWER_COST = builder.comment("Amount of soap consumed per bubble block placed").define("stasis_cost", 5, 1, 25);
            builder.push("bubble_block");
            BUBBLE_LIFETIME = builder.comment("Max lifetime of bubble blocks. Set to 10000 to have it infinite").define("lifetime", 1200, 1, 10000);
            BUBBLE_BREAK = builder.comment("Can bubble break when touched on?").define("break_when_touched", true);
            BUBBLE_FEATHER_FALLING = builder.comment("If true feather falling prevents breaking bubbles when stepping on them").define("feather_falling_prevents_breaking", true);
            builder.pop();
            builder.pop();
            builder.push("wrench");
            WRENCH_ENABLED = CommonConfigs.feature(builder);
            WRENCH_BYPASS = builder.comment("Allows wrenches to bypass a block interaction action prioritizing their own when on said hand").define("bypass_when_on", CommonConfigs.Hands.MAIN_HAND);
            builder.pop();
            builder.push("rope_arrow");
            ROPE_ARROW_ENABLED = CommonConfigs.feature(builder);
            ROPE_ARROW_CAPACITY = builder.comment("Max number of robe items allowed to be stored inside a rope arrow").define("capacity", 32, 1, 256);
            ROPE_ARROW_CROSSBOW = builder.comment("Makes rope arrows exclusive to crossbows").define("exclusive_to_crossbows", false);
            builder.pop();
            builder.push("flute");
            FLUTE_ENABLED = CommonConfigs.feature(builder);
            FLUTE_RADIUS = builder.comment("Radius in which an unbound flute will search pets").define("unbound_radius", 64, 0, 500);
            FLUTE_DISTANCE = builder.comment("Max distance at which a bound flute will allow a pet to teleport").define("bound_distance", 64, 0, 500);
            builder.pop();
            builder.push("bomb");
            BOMB_ENABLED = CommonConfigs.feature(builder);
            BOMB_RADIUS = builder.comment("Bomb explosion radius (damage depends on this)").define("explosion_radius", 2.0, 0.1, 10.0);
            BOMB_BREAKS = builder.comment("Do bombs break blocks like tnt?").define("break_blocks", BombEntity.BreakingMode.WEAK);
            BOMB_FUSE = builder.comment("Put here any number other than 0 to have your bombs explode after a certain amount of ticks instead than on contact").define("bomb_fuse", 0, 0, 100000);
            builder.push("blue_bomb");
            BOMB_BLUE_RADIUS = builder.comment("Bomb explosion radius (damage depends on this)").define("explosion_radius", 5.15, 0.1, 10.0);
            BOMB_BLUE_BREAKS = builder.comment("Do bombs break blocks like tnt?").define("break_blocks", BombEntity.BreakingMode.WEAK);
            builder.pop();
            builder.pop();
            builder.push("slingshot");
            SLINGSHOT_ENABLED = CommonConfigs.feature(builder);
            SLINGSHOT_RANGE = builder.comment("Slingshot range multiplier. Affect the initial projectile speed").define("range_multiplier", 1.0, 0.0, 5.0);
            SLINGSHOT_CHARGE = builder.comment("Time in ticks to fully charge a slingshot").define("charge_time", 20, 0, 100);
            SLINGSHOT_DECELERATION = builder.comment("Deceleration for the stasis projectile").define("stasis_deceleration", 0.9625, 0.1, 1.0);
            UNRESTRICTED_SLINGSHOT = builder.comment("Allow enderman to intercept any slingshot projectile").define("unrestricted_enderman_intercept", true);
            SLINGSHOT_POTIONS = builder.comment("Allows splash potions to be thrown by slingshots").define("allow_splash_potions", false);
            SLINGSHOT_BOMBS = builder.comment("Allows bombs to be thrown by slingshots").define("allow_bombs", false);
            SLINGSHOT_FIRECHARGE = builder.comment("Allows fire charges to be thrown by slingshots").define("allow_fire_charges", false);
            SLINGSHOT_SNOWBALL = builder.comment("Allows snowballs to be thrown by slingshots").define("allow_snowballs", false);
            SLINGSHOT_ENDERPEARLS = builder.comment("Allows enderpearls to be thrown by slingshots").define("allow_enderpearls", false);
            builder.pop();
            builder.push("antique_ink");
            ANTIQUE_INK_ENABLED = CommonConfigs.feature(builder);
            builder.pop();
            CANDY_ENABLED = CommonConfigs.feature(builder, "candy");
            STASIS_ENABLED = CommonConfigs.feature(builder, "stasis");
            DEPTH_METER_ENABLED = CommonConfigs.feature(builder, "altimeter");
            builder.pop();
        }
    }

    public static class Tweaks {

        public static final Supplier<Boolean> SHULKER_HELMET_ENABLED;

        public static final Supplier<Boolean> APPLE_DISENCHANT;

        public static final Supplier<Boolean> ENDER_PEAR_DISPENSERS;

        public static final Supplier<Boolean> AXE_DISPENSER_BEHAVIORS;

        public static final Supplier<Boolean> THROWABLE_BRICKS_ENABLED;

        public static final Supplier<Boolean> PLACEABLE_STICKS;

        public static final Supplier<Boolean> PLACEABLE_RODS;

        public static final Supplier<Boolean> RAKED_GRAVEL;

        public static final Supplier<Boolean> BOTTLE_XP;

        public static final Supplier<Integer> BOTTLING_COST;

        public static final Supplier<String> BOTTLING_TARGET;

        public static final Supplier<Boolean> RANDOM_ADVENTURER_MAPS;

        public static final Supplier<Boolean> RANDOM_ADVENTURER_MAPS_RANDOM;

        public static final Supplier<Boolean> MAP_MARKERS;

        public static final Supplier<CommonConfigs.DeathMarkerMode> DEATH_MARKER;

        public static final Supplier<Boolean> QUARK_QUILL;

        public static final Supplier<Integer> QUILL_MIN_SEARCH_RADIUS;

        public static final Supplier<Boolean> REPLACE_VANILLA_MAPS;

        public static final Supplier<Boolean> TINTED_MAP;

        public static final Supplier<Boolean> PLACEABLE_BOOKS;

        public static final Supplier<Boolean> WRITTEN_BOOKS;

        public static final Supplier<Double> BOOK_POWER;

        public static final Supplier<Double> ENCHANTED_BOOK_POWER;

        public static final Supplier<Boolean> ZOMBIE_HORSE_CONVERSION;

        public static final Supplier<Boolean> ZOMBIE_HORSE;

        public static final Supplier<Integer> ZOMBIE_HORSE_COST;

        public static final Supplier<Boolean> ZOMBIE_HORSE_UNDERWATER;

        public static final Supplier<Boolean> PLACEABLE_GUNPOWDER;

        public static final Supplier<Integer> GUNPOWDER_BURN_SPEED;

        public static final Supplier<Integer> GUNPOWDER_SPREAD_AGE;

        public static final Supplier<Boolean> MIXED_BOOKS;

        public static final Supplier<Boolean> WANDERING_TRADER_DOORS;

        public static final Supplier<Boolean> SCARE_VILLAGERS;

        public static final Supplier<Boolean> BAD_LUCK_CAT;

        public static final Supplier<Boolean> BAD_LUCK_LIGHTNING;

        public static final Supplier<Boolean> ITEM_LORE;

        public static void init() {
        }

        static {
            ConfigBuilder builder = (ConfigBuilder) CommonConfigs.builderReference.get();
            builder.comment("Vanilla tweaks").push("tweaks");
            builder.push("shulker_helmet");
            SHULKER_HELMET_ENABLED = CommonConfigs.feature(builder.comment("Allows wearing shulker shells"));
            builder.pop();
            builder.push("golden_apple_disenchant");
            APPLE_DISENCHANT = CommonConfigs.feature(builder);
            builder.pop();
            builder.push("traders_open_doors");
            WANDERING_TRADER_DOORS = builder.comment("Allows traders to open doors (because they couldnt aparently)").define("enabled", true);
            builder.pop();
            builder.push("dispenser_tweaks");
            AXE_DISPENSER_BEHAVIORS = builder.comment("Allows dispensers to use axes on blocks to strip logs and scrape off copper oxidation and wax").define("axe_strip", true);
            ENDER_PEAR_DISPENSERS = builder.comment("Enables shooting ender pearls with dispensers").define("shoot_ender_pearls", true);
            builder.pop();
            builder.push("throwable_bricks");
            THROWABLE_BRICKS_ENABLED = builder.comment("Throw bricks at your foes! Might break glass blocks").define("enabled", true);
            builder.pop();
            builder.push("placeable_sticks");
            PLACEABLE_STICKS = builder.comment("Allow placeable sticks").define("sticks", true);
            PLACEABLE_RODS = builder.comment("Allow placeable blaze rods").define("blaze_rods", true);
            builder.pop();
            builder.push("placeable_gunpowder");
            PLACEABLE_GUNPOWDER = builder.comment("Allow placeable gunpowder").define("enabled", true);
            GUNPOWDER_BURN_SPEED = builder.comment("Number of ticks it takes for gunpowder to burn 1 stage (out of 8). Increase to slow it down").define("speed", 2, 0, 20);
            GUNPOWDER_SPREAD_AGE = builder.comment("Age at which it spread to the next gunpowder block. Also affects speed").define("spread_age", 2, 0, 8);
            builder.pop();
            builder.push("raked_gravel");
            RAKED_GRAVEL = builder.comment("allow gravel to be raked with a hoe").define("enabled", true);
            builder.pop();
            builder.push("bottle_xp");
            BOTTLE_XP = builder.comment("Allow bottling up xp by using a bottle on an enchanting table").define("enabled", false);
            BOTTLING_COST = builder.comment("bottling health cost").define("cost", 2, 0, 20);
            BOTTLING_TARGET = builder.comment("Block that should be clicked on for bottling to work. Leave blank for enchanting table. You can put another block here from another mod if you find it more fitting").define("target_block", "");
            builder.pop();
            builder.push("map_tweaks");
            RANDOM_ADVENTURER_MAPS = builder.comment("Cartographers will sell 'adventurer maps' that will lead to a random vanilla structure (choosen from a thought out preset list).\nBest kept disabled if you are adding custom adventurer maps with datapack (check the wiki for more)").define("random_adventurer_maps", true);
            RANDOM_ADVENTURER_MAPS_RANDOM = builder.comment("Select a random structure to look for instead of iterating through all of the ones in the tag returning the closest. Turning on will make ones that have diff structures (aka all different ruined portals) show up more. On could take much more time to compute").define("random_adventurer_maps_select_random_structure", true);
            MAP_MARKERS = builder.comment("Enables beacons, lodestones, respawn anchors, beds, conduits, portals to be displayed on maps by clicking one of them with a map").define("block_map_markers", true);
            DEATH_MARKER = builder.comment("Shows a death marker on your map when you die. Requires a recovery compass in player inventory or similar").define("death_marker", CommonConfigs.DeathMarkerMode.WITH_COMPASS);
            if (PlatHelper.getPlatform().isForge()) {
                QUARK_QUILL = builder.comment("If Quark is installed adventurer maps will be replaced by adventurer quills. These will not lag the server when generating").define("quill_adventurer_maps", true);
                REPLACE_VANILLA_MAPS = builder.comment("If Quark is installed replaces buried treasure and mansion maps with their equivalent quill form. This removes the lag spike they create when generating").define("quill_vanilla_maps", true);
                QUILL_MIN_SEARCH_RADIUS = builder.comment("Miminum search radius for quill. Used to incrase the radius of vanilla searches. For reference buried treasures are at 50 and locate is at 100 chunks").define("min_search_radius", 75, 10, 600);
            } else {
                QUARK_QUILL = () -> false;
                REPLACE_VANILLA_MAPS = () -> false;
                QUILL_MIN_SEARCH_RADIUS = () -> 50;
            }
            TINTED_MAP = builder.comment("Makes blocks tagged as 'tinted_on_map' use their tint color. This allows for accurate biome colors for water and grass as well as other custom block that use any tint").define("tinted_blocks_on_maps", true);
            builder.pop();
            builder.push("placeable_books");
            WRITTEN_BOOKS = builder.comment("Allows written books to be placed down. Requires shift clicking").define("written_books", true);
            PLACEABLE_BOOKS = builder.comment("Allow books and enchanted books to be placed on the ground").define("enabled", true);
            BOOK_POWER = builder.comment("Enchantment power bonus given by normal book piles with 4 books. Piles with less books will have their respective fraction of this total. For reference a vanilla bookshelf provides 1").define("book_power", 1.0, 0.0, 5.0);
            ENCHANTED_BOOK_POWER = builder.comment("Enchantment power bonus given by normal book piles with 4 books. Piles with less books will have their respective fraction of this total. For reference a vanilla bookshelf provides 1").define("enchanted_book_power", 1.334, 0.0, 5.0);
            MIXED_BOOKS = builder.comment("Allow all books to be placed both vertically and horizontally").define("mixed_books", false);
            builder.pop();
            builder.push("zombie_horse");
            ZOMBIE_HORSE = builder.comment("Feed a stack of rotten flesh to a skeleton horse to buff him up to a zombie horse").define("zombie_horse_conversion", true);
            ZOMBIE_HORSE_COST = builder.comment("Amount of rotten flesh needed").define("rotten_flesh", 64, 1, 1000);
            ZOMBIE_HORSE_UNDERWATER = builder.comment("Allows zombie horses to be ridden underwater").define("rideable_underwater", true);
            ZOMBIE_HORSE_CONVERSION = builder.comment("Convert a zombie horse back by feeding it a golden carrot").define("zombie_horse_inverse_conversion", true);
            builder.pop();
            builder.push("noteblocks_scare");
            SCARE_VILLAGERS = builder.comment("Noteblocks with a zombie head will scare off villagers").define("enabled", true);
            builder.pop();
            builder.push("bad_luck_tweaks");
            BAD_LUCK_CAT = PlatHelper.getPlatform().isFabric() ? CommonConfigs.FALSE : builder.comment("Hit a void cat, get the unluck").define("cat_unluck", true);
            BAD_LUCK_LIGHTNING = builder.comment("If you have unluck you are more likely to get hit by a lighting").define("lightning_unluck", true);
            builder.pop();
            builder.push("item_lore");
            ITEM_LORE = CommonConfigs.feature(builder.comment("Adds a recipe to add 'lore' strings to an item by combining it with a named nametag"));
            builder.pop();
            builder.pop();
        }
    }
}