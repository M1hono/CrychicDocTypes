package noobanidus.mods.lootr.config;

import com.electronwill.nightconfig.core.file.CommentedFileConfig;
import com.electronwill.nightconfig.core.io.WritingMode;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import net.minecraft.core.BlockPos;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.ChestBlock;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.ChestType;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraftforge.common.ForgeConfigSpec;
import net.minecraftforge.common.Tags;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber.Bus;
import net.minecraftforge.fml.config.ModConfig.Type;
import net.minecraftforge.fml.event.config.ModConfigEvent;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.server.ServerLifecycleHooks;
import noobanidus.mods.lootr.LootrTags;
import noobanidus.mods.lootr.api.blockentity.ILootBlockEntity;
import noobanidus.mods.lootr.entity.LootrChestMinecartEntity;
import noobanidus.mods.lootr.init.ModBlocks;

@EventBusSubscriber(modid = "lootr", bus = Bus.MOD)
public class ConfigManager {

    public static final ForgeConfigSpec.BooleanValue REPORT_UNRESOLVED_TABLES = ConfigManager.COMMON_BUILDER.comment("lootr will automatically log all unresolved tables (i.e., for containers that have a loot table associated with them but, for whatever reason, the lookup for this table returns empty). setting this option to true additionally informs players when they open containers.").define("report_unresolved_tables", false);

    public static final ForgeConfigSpec.BooleanValue RANDOMISE_SEED = ConfigManager.COMMON_BUILDER.comment("determine whether or not loot generated is the same for all players using the provided seed, or randomised per player").define("randomise_seed", true);

    public static final ForgeConfigSpec.BooleanValue DISABLE = ConfigManager.COMMON_BUILDER.comment("if true, no chests will be converted").define("disable", false);

    public static final int OLD_MAX_AGE = 6000;

    public static final ForgeConfigSpec.IntValue MAXIMUM_AGE = ConfigManager.COMMON_BUILDER.comment("the maximum age for containers; entries above this age will be discarded [default: 60 * 20 * 15, fifteen minutes] [note: the value 6000 will be corrected to 18000. if you wish to use 6000, please use 6001 or 5999.]").defineInRange("max_age", 18000, 0, Integer.MAX_VALUE);

    public static final ForgeConfigSpec.BooleanValue CONVERT_MINESHAFTS = ConfigManager.COMMON_BUILDER.comment("whether or not mineshaft chest minecarts should be converted to standard loot chests").define("convert_mineshafts", true);

    public static final ForgeConfigSpec.BooleanValue CONVERT_ELYTRAS = ConfigManager.COMMON_BUILDER.comment("whether or not the Elytra item frame should be converted into a standard loot chest with a guaranteed elytra").define("convert_elytras", true);

    public static final ForgeConfigSpec.BooleanValue CONVERT_WOODEN_CHESTS = ConfigManager.COMMON_BUILDER.comment("whether or not the entire forge:chests/wooden tag should be added to the conversion list for structures (if they are backed by RandomizableContainerBlockEntity)").define("convert_wooden_chests", true);

    public static final ForgeConfigSpec.BooleanValue CONVERT_TRAPPED_CHESTS = ConfigManager.COMMON_BUILDER.comment("whether or not the entire forge:chests/trapped tag should be added to the conversion list for structures (if they are backed by RandomizableContainerBlockEntity").define("convert_trapped_chests", true);

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> ADDITIONAL_CHESTS;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> ADDITIONAL_TRAPPED_CHESTS;

    public static final ForgeConfigSpec.BooleanValue DISABLE_BREAK = ConfigManager.COMMON_BUILDER.comment("prevent the destruction of Lootr chests except while sneaking in creative mode").define("disable_break", false);

    public static final ForgeConfigSpec.BooleanValue ENABLE_BREAK = ConfigManager.COMMON_BUILDER.comment("allow the destruction of Lootr chests regardless. overrides `disable_break`").define("enable_break", false);

    public static final ForgeConfigSpec.BooleanValue ENABLE_FAKE_PLAYER_BREAK = ConfigManager.COMMON_BUILDER.comment("allows fake players to destroy Lootr chests without having to sneak, overrides the `disable_break` option for fake players").define("enable_fake_player_break", false);

    public static final ForgeConfigSpec.BooleanValue CHECK_WORLD_BORDER = ConfigManager.COMMON_BUILDER.comment("disregard chests and chunks that are outside of the world border; enable this option if you are using a world border and are suffering consistent TPS issues; if you change the world border, you will need to restart your client").define("check_world_border", false);

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> MODID_DIMENSION_WHITELIST;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DIMENSION_WHITELIST;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> MODID_DIMENSION_BLACKLIST;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DIMENSION_BLACKLIST;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> LOOT_TABLE_BLACKLIST;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> LOOT_MODID_BLACKLIST;

    public static final ForgeConfigSpec.IntValue DECAY_VALUE = ConfigManager.COMMON_BUILDER.comment("how long (in ticks) a decaying loot containers should take to decay (default 5 minutes = 5 * 60 * 20)").defineInRange("decay_value", 6000, 0, Integer.MAX_VALUE);

    public static final ForgeConfigSpec.BooleanValue DECAY_ALL = ConfigManager.COMMON_BUILDER.comment("overriding decay_loot_tables, decay_modids and decay_dimensions: all chests will decay after being opened for the first time").define("decay_all", false);

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DECAY_MODIDS;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DECAY_LOOT_TABLES;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DECAY_DIMENSIONS;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> DECAY_STRUCTURES;

    public static final ForgeConfigSpec.IntValue REFRESH_VALUE = ConfigManager.COMMON_BUILDER.comment("how long (in ticks) a refreshing loot containers should take to refresh their contents (default 20 minutes = 20 * 60 * 20)").defineInRange("refresh_value", 24000, 0, Integer.MAX_VALUE);

    public static final ForgeConfigSpec.BooleanValue REFRESH_ALL = ConfigManager.COMMON_BUILDER.comment("overriding refresh_loot_tables, refresh_modids and refresh_dimensions: all chests will refresh after being opened for the first time").define("refresh_all", false);

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> REFRESH_MODIDS;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> REFRESH_LOOT_TABLES;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> REFRESH_DIMENSIONS;

    public static final ForgeConfigSpec.ConfigValue<List<? extends String>> REFRESH_STRUCTURES;

    public static final ForgeConfigSpec.BooleanValue POWER_COMPARATORS = ConfigManager.COMMON_BUILDER.comment("when true, comparators on Lootr containers will give an output of 1; when false, they will give an output of 0").define("power_comparators", true);

    public static final ForgeConfigSpec.BooleanValue BLAST_RESISTANT = ConfigManager.COMMON_BUILDER.comment("lootr chests cannot be destroyed by creeper or TNT explosions").define("blast_resistant", false);

    public static final ForgeConfigSpec.BooleanValue BLAST_IMMUNE = ConfigManager.COMMON_BUILDER.comment("lootr chests cannot be destroyed by any explosion").define("blast_immune", false);

    public static final ForgeConfigSpec.IntValue NOTIFICATION_DELAY = ConfigManager.COMMON_BUILDER.comment("maximum time (in ticks) remaining on a chest before a notification for refreshing or decaying is sent to a player (default 30 seconds, -1 for no delay)").defineInRange("notification_delay", 600, -1, Integer.MAX_VALUE);

    public static final ForgeConfigSpec.BooleanValue DISABLE_NOTIFICATIONS = ConfigManager.COMMON_BUILDER.comment("prevent notifications of decaying or refreshed chests").define("disable_notifications", false);

    public static final ForgeConfigSpec.BooleanValue DISABLE_MESSAGE_STYLES = ConfigManager.COMMON_BUILDER.comment("disables styling of breaking, decaying and refreshing messages sent to players").define("disable_message_styles", false);

    public static final ForgeConfigSpec.BooleanValue TRAPPED_CUSTOM = ConfigManager.COMMON_BUILDER.comment("when true, custom inventories will act like trapped chests when opened").define("trapped_custom", false);

    public static final ForgeConfigSpec.BooleanValue VANILLA_TEXTURES = ConfigManager.CLIENT_BUILDER.comment("set to true to use vanilla textures instead of Lootr special textures. Note: this will prevent previously opened chests from rendering differently").define("vanilla_textures", false);

    public static final ForgeConfigSpec.BooleanValue OLD_TEXTURES = ConfigManager.CLIENT_BUILDER.comment("set to true to use the old Lootr textures").define("old_textures", false);

    private static final ForgeConfigSpec.Builder COMMON_BUILDER = new ForgeConfigSpec.Builder();

    private static final ForgeConfigSpec.Builder CLIENT_BUILDER = new ForgeConfigSpec.Builder();

    private static final List<ResourceLocation> PROBLEMATIC_CHESTS = Arrays.asList(new ResourceLocation("twilightforest", "structures/stronghold_boss"), new ResourceLocation("atum", "chests/pharaoh"));

    public static ForgeConfigSpec COMMON_CONFIG = COMMON_BUILDER.build();

    public static ForgeConfigSpec CLIENT_CONFIG = CLIENT_BUILDER.build();

    private static Set<String> DECAY_MODS = null;

    private static Set<ResourceLocation> DECAY_TABLES = null;

    private static Set<String> REFRESH_MODS = null;

    private static Set<ResourceLocation> REFRESH_TABLES = null;

    private static Set<ResourceKey<Level>> DIM_WHITELIST = null;

    private static Set<String> MODID_DIM_WHITELIST = null;

    private static Set<ResourceKey<Level>> DIM_BLACKLIST = null;

    private static Set<String> MODID_DIM_BLACKLIST = null;

    private static Set<ResourceKey<Level>> DECAY_DIMS = null;

    private static Set<ResourceKey<Level>> REFRESH_DIMS = null;

    private static Set<ResourceLocation> LOOT_BLACKLIST = null;

    private static Set<ResourceLocation> STRUCTURE_BLACKLIST = null;

    private static Set<ResourceLocation> REFRESH_STRUCTS = null;

    private static Set<ResourceLocation> DECAY_STRUCTS = null;

    private static Set<ResourceLocation> ADD_CHESTS = null;

    private static Set<ResourceLocation> ADD_TRAPPED_CHESTS = null;

    private static Map<Block, Block> replacements = null;

    private static Set<String> LOOT_MODIDS = null;

    public static void loadConfig(ForgeConfigSpec spec, Path path) {
        CommentedFileConfig configData = (CommentedFileConfig) CommentedFileConfig.builder(path).sync().autosave().writingMode(WritingMode.REPLACE).build();
        configData.load();
        spec.setConfig(configData);
    }

    @SubscribeEvent
    public static void reloadConfig(ModConfigEvent event) {
        if (event.getConfig().getType() == Type.COMMON) {
            COMMON_CONFIG.setConfig(event.getConfig().getConfigData());
            replacements = null;
            MODID_DIM_WHITELIST = null;
            MODID_DIM_BLACKLIST = null;
            DIM_WHITELIST = null;
            DIM_BLACKLIST = null;
            LOOT_BLACKLIST = null;
            ADD_CHESTS = null;
            ADD_TRAPPED_CHESTS = null;
            DECAY_MODS = null;
            DECAY_TABLES = null;
            DECAY_DIMS = null;
            LOOT_MODIDS = null;
            REFRESH_DIMS = null;
            REFRESH_MODS = null;
            REFRESH_TABLES = null;
            STRUCTURE_BLACKLIST = null;
            DECAY_STRUCTS = null;
            REFRESH_STRUCTS = null;
        }
    }

    public static Set<ResourceKey<Level>> getDimensionWhitelist() {
        if (DIM_WHITELIST == null) {
            DIM_WHITELIST = (Set<ResourceKey<Level>>) DIMENSION_WHITELIST.get().stream().map(o -> ResourceKey.create(Registries.DIMENSION, new ResourceLocation(o))).collect(Collectors.toSet());
        }
        return DIM_WHITELIST;
    }

    public static Set<String> getDimensionModidWhitelist() {
        if (MODID_DIM_WHITELIST == null) {
            MODID_DIM_WHITELIST = (Set<String>) MODID_DIMENSION_WHITELIST.get().stream().map(o -> o.toLowerCase(Locale.ROOT)).collect(Collectors.toSet());
        }
        return MODID_DIM_WHITELIST;
    }

    public static Set<ResourceKey<Level>> getDimensionBlacklist() {
        if (DIM_BLACKLIST == null) {
            DIM_BLACKLIST = (Set<ResourceKey<Level>>) DIMENSION_BLACKLIST.get().stream().map(o -> ResourceKey.create(Registries.DIMENSION, new ResourceLocation(o))).collect(Collectors.toSet());
        }
        return DIM_BLACKLIST;
    }

    public static Set<String> getDimensionModidBlacklist() {
        if (MODID_DIM_BLACKLIST == null) {
            MODID_DIM_BLACKLIST = (Set<String>) MODID_DIMENSION_BLACKLIST.get().stream().map(o -> o.toLowerCase(Locale.ROOT)).collect(Collectors.toSet());
        }
        return MODID_DIM_BLACKLIST;
    }

    public static Set<ResourceKey<Level>> getDecayDimensions() {
        if (DECAY_DIMS == null) {
            DECAY_DIMS = (Set<ResourceKey<Level>>) DECAY_DIMENSIONS.get().stream().map(o -> ResourceKey.create(Registries.DIMENSION, new ResourceLocation(o))).collect(Collectors.toSet());
        }
        return DECAY_DIMS;
    }

    public static Set<ResourceKey<Level>> getRefreshDimensions() {
        if (REFRESH_DIMS == null) {
            REFRESH_DIMS = (Set<ResourceKey<Level>>) REFRESH_DIMENSIONS.get().stream().map(o -> ResourceKey.create(Registries.DIMENSION, new ResourceLocation(o))).collect(Collectors.toSet());
        }
        return REFRESH_DIMS;
    }

    public static Set<ResourceLocation> getRefreshStructures() {
        if (REFRESH_STRUCTS == null) {
            REFRESH_STRUCTS = (Set<ResourceLocation>) REFRESH_STRUCTURES.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return REFRESH_STRUCTS;
    }

    public static Set<ResourceLocation> getDecayStructures() {
        if (DECAY_STRUCTS == null) {
            DECAY_STRUCTS = (Set<ResourceLocation>) DECAY_STRUCTURES.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return DECAY_STRUCTS;
    }

    public static Set<ResourceLocation> getLootBlacklist() {
        if (LOOT_BLACKLIST == null) {
            LOOT_BLACKLIST = (Set<ResourceLocation>) LOOT_TABLE_BLACKLIST.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
            LOOT_BLACKLIST.addAll(PROBLEMATIC_CHESTS);
        }
        return LOOT_BLACKLIST;
    }

    public static Set<String> getLootModids() {
        if (LOOT_MODIDS == null) {
            LOOT_MODIDS = (Set<String>) LOOT_MODID_BLACKLIST.get().stream().map(o -> o.toLowerCase(Locale.ROOT)).collect(Collectors.toSet());
        }
        return LOOT_MODIDS;
    }

    public static boolean isBlacklisted(ResourceLocation table) {
        return getLootBlacklist().contains(table) ? true : getLootModids().contains(table.getNamespace());
    }

    public static Set<ResourceLocation> getDecayingTables() {
        if (DECAY_TABLES == null) {
            DECAY_TABLES = (Set<ResourceLocation>) DECAY_LOOT_TABLES.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return DECAY_TABLES;
    }

    public static Set<String> getDecayMods() {
        if (DECAY_MODS == null) {
            DECAY_MODS = (Set<String>) DECAY_MODIDS.get().stream().map(o -> o.toLowerCase(Locale.ROOT)).collect(Collectors.toSet());
        }
        return DECAY_MODS;
    }

    public static Set<ResourceLocation> getRefreshingTables() {
        if (REFRESH_TABLES == null) {
            REFRESH_TABLES = (Set<ResourceLocation>) REFRESH_LOOT_TABLES.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return REFRESH_TABLES;
    }

    public static Set<String> getRefreshMods() {
        if (REFRESH_MODS == null) {
            REFRESH_MODS = (Set<String>) REFRESH_MODIDS.get().stream().map(o -> o.toLowerCase(Locale.ROOT)).collect(Collectors.toSet());
        }
        return REFRESH_MODS;
    }

    public static Set<ResourceLocation> getAdditionalChests() {
        if (ADD_CHESTS == null) {
            ADD_CHESTS = (Set<ResourceLocation>) ADDITIONAL_CHESTS.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return ADD_CHESTS;
    }

    public static Set<ResourceLocation> getAdditionalTrappedChests() {
        if (ADD_TRAPPED_CHESTS == null) {
            ADD_TRAPPED_CHESTS = (Set<ResourceLocation>) ADDITIONAL_TRAPPED_CHESTS.get().stream().map(ResourceLocation::new).collect(Collectors.toSet());
        }
        return ADD_TRAPPED_CHESTS;
    }

    public static boolean isDimensionBlocked(ResourceKey<Level> key) {
        return (getDimensionModidWhitelist().isEmpty() || getDimensionModidWhitelist().contains(key.location().getNamespace())) && !getDimensionModidBlacklist().contains(key.location().getNamespace()) ? !getDimensionWhitelist().isEmpty() && !getDimensionWhitelist().contains(key) || getDimensionBlacklist().contains(key) : true;
    }

    public static boolean isDimensionDecaying(ResourceKey<Level> key) {
        return getDecayDimensions().contains(key);
    }

    public static boolean isDimensionRefreshing(ResourceKey<Level> key) {
        return getRefreshDimensions().contains(key);
    }

    public static boolean isDecaying(ServerLevel level, ILootBlockEntity tile) {
        if (DECAY_ALL.get()) {
            return true;
        } else {
            if (tile.getTable() != null) {
                if (getDecayingTables().contains(tile.getTable())) {
                    return true;
                }
                if (getDecayMods().contains(tile.getTable().getNamespace())) {
                    return true;
                }
            }
            return isDimensionDecaying(level.m_46472_());
        }
    }

    public static boolean isRefreshing(ServerLevel level, ILootBlockEntity tile) {
        if (REFRESH_ALL.get()) {
            return true;
        } else {
            if (tile.getTable() != null) {
                if (getRefreshingTables().contains(tile.getTable())) {
                    return true;
                }
                if (getRefreshMods().contains(tile.getTable().getNamespace())) {
                    return true;
                }
            }
            return isDimensionRefreshing(level.m_46472_());
        }
    }

    public static boolean isDecaying(ServerLevel level, LootrChestMinecartEntity entity) {
        if (DECAY_ALL.get()) {
            return true;
        } else {
            if (entity.f_38204_ != null) {
                if (getDecayingTables().contains(entity.f_38204_)) {
                    return true;
                }
                if (getDecayMods().contains(entity.f_38204_.getNamespace())) {
                    return true;
                }
            }
            return isDimensionDecaying(level.m_46472_());
        }
    }

    public static boolean isRefreshing(ServerLevel level, LootrChestMinecartEntity entity) {
        if (REFRESH_ALL.get()) {
            return true;
        } else {
            if (entity.f_38204_ != null) {
                if (getRefreshingTables().contains(entity.f_38204_)) {
                    return true;
                }
                if (getDecayMods().contains(entity.f_38204_.getNamespace())) {
                    return true;
                }
            }
            return isDimensionRefreshing(level.m_46472_());
        }
    }

    public static boolean shouldNotify(int remaining) {
        int delay = NOTIFICATION_DELAY.get();
        return !DISABLE_NOTIFICATIONS.get() && (delay == -1 || remaining <= delay);
    }

    public static boolean isVanillaTextures() {
        return VANILLA_TEXTURES.get();
    }

    public static boolean isOldTextures() {
        return OLD_TEXTURES.get();
    }

    private static void addSafeReplacement(ResourceLocation location, Block replacement) {
        Block block = ForgeRegistries.BLOCKS.getValue(location);
        if (block != null) {
            replacements.put(block, replacement);
        }
    }

    private static void addUnsafeReplacement(ResourceLocation location, Block replacement, ServerLevel world) {
        Block block = ForgeRegistries.BLOCKS.getValue(location);
        if (block instanceof EntityBlock) {
            BlockEntity tile = ((EntityBlock) block).newBlockEntity(BlockPos.ZERO, block.defaultBlockState());
            if (tile instanceof RandomizableContainerBlockEntity) {
                replacements.put(block, replacement);
            }
        }
    }

    public static BlockState replacement(BlockState original) {
        if (replacements == null) {
            replacements = new HashMap();
            if (CONVERT_WOODEN_CHESTS.get() || CONVERT_TRAPPED_CHESTS.get()) {
                if (CONVERT_TRAPPED_CHESTS.get()) {
                    ForgeRegistries.BLOCKS.tags().getTag(Tags.Blocks.CHESTS_TRAPPED).forEach(o -> {
                        if (!replacements.containsKey(o)) {
                            if (o instanceof EntityBlock eb) {
                                BlockEntity tile = eb.newBlockEntity(BlockPos.ZERO, o.defaultBlockState());
                                if (tile instanceof RandomizableContainerBlockEntity && !(tile instanceof ILootBlockEntity)) {
                                    replacements.put(o, ModBlocks.TRAPPED_CHEST.get());
                                }
                            }
                        }
                    });
                }
                if (CONVERT_WOODEN_CHESTS.get()) {
                    ForgeRegistries.BLOCKS.tags().getTag(Tags.Blocks.CHESTS_WOODEN).forEach(o -> {
                        if (!replacements.containsKey(o)) {
                            if (o instanceof EntityBlock eb) {
                                BlockEntity tile = eb.newBlockEntity(BlockPos.ZERO, o.defaultBlockState());
                                if (tile instanceof RandomizableContainerBlockEntity && !(tile instanceof ILootBlockEntity)) {
                                    replacements.put(o, ModBlocks.CHEST.get());
                                }
                            }
                        }
                    });
                }
            }
            if (!getAdditionalChests().isEmpty() || !getAdditionalTrappedChests().isEmpty()) {
                ServerLevel world = ServerLifecycleHooks.getCurrentServer().overworld();
                getAdditionalChests().forEach(o -> addUnsafeReplacement(o, ModBlocks.CHEST.get(), world));
                getAdditionalTrappedChests().forEach(o -> addUnsafeReplacement(o, ModBlocks.TRAPPED_CHEST.get(), world));
            }
        }
        Block replacement = (Block) replacements.get(original.m_60734_());
        if (replacement == null && original.m_204336_(LootrTags.Blocks.CONVERT_BLOCK)) {
            if (original.m_60734_() instanceof EntityBlock entityBlock) {
                BlockEntity be = entityBlock.newBlockEntity(BlockPos.ZERO, original);
                if (be instanceof RandomizableContainerBlockEntity) {
                    if (original.m_204336_(LootrTags.Blocks.CONVERT_TRAPPED_CHESTS)) {
                        replacements.put(original.m_60734_(), ModBlocks.TRAPPED_CHEST.get());
                    } else if (original.m_204336_(LootrTags.Blocks.CONVERT_BARRELS)) {
                        replacements.put(original.m_60734_(), ModBlocks.BARREL.get());
                    } else if (original.m_204336_(LootrTags.Blocks.CONVERT_CHESTS)) {
                        replacements.put(original.m_60734_(), ModBlocks.CHEST.get());
                    } else if (original.m_204336_(LootrTags.Blocks.CONVERT_SHULKERS)) {
                        replacements.put(original.m_60734_(), ModBlocks.SHULKER.get());
                    }
                }
            }
            replacement = (Block) replacements.get(original.m_60734_());
        }
        return replacement != null ? copyProperties(replacement.defaultBlockState(), original) : null;
    }

    private static BlockState copyProperties(BlockState state, BlockState original) {
        for (Property<?> prop : original.m_61147_()) {
            if (state.m_61138_(prop)) {
                state = safeReplace(state, original, prop);
            }
        }
        return state;
    }

    private static <V extends Comparable<V>> BlockState safeReplace(BlockState state, BlockState original, Property<V> property) {
        if (property == ChestBlock.TYPE && state.m_61138_(property)) {
            return (BlockState) state.m_61124_(ChestBlock.TYPE, ChestType.SINGLE);
        } else {
            return original.m_61138_(property) && state.m_61138_(property) ? (BlockState) state.m_61124_(property, original.m_61143_(property)) : state;
        }
    }

    static {
        List<? extends String> empty = Collections.emptyList();
        Predicate<Object> validator = o -> o instanceof String && ((String) o).contains(":");
        Predicate<Object> modidValidator = o -> o instanceof String && !((String) o).contains(":");
        ADDITIONAL_CHESTS = COMMON_BUILDER.comment("a list of additional chests that should be converted (in the format of [\"modid:name\", \"modid:other_name\"], must be a tile entity instance of RandomizableContainerBlockEntity)").defineList("additional_chests", empty, validator);
        ADDITIONAL_TRAPPED_CHESTS = COMMON_BUILDER.comment("a list of additional trapped chests that should be converted (in the format of [\"modid:name\", \"modid:other_name\"], must be a tile entity instance of RandomizableContainerBlockEntity)").defineList("additional_trapped_chests", empty, validator);
        DIMENSION_WHITELIST = COMMON_BUILDER.comment("list of dimensions (to the exclusion of all others) that loot chest should be replaced in (default: blank, allowing all dimensions, e.g., [\"minecraft:overworld\", \"minecraft:the_end\"])").defineList("dimension_whitelist", empty, validator);
        DIMENSION_BLACKLIST = COMMON_BUILDER.comment("list of dimensions that loot chests should not be replaced in (default: blank, allowing all dimensions, format e.g., [\"minecraft:overworld\", \"minecraft:the_end\"])").defineList("dimension_blacklist", empty, validator);
        MODID_DIMENSION_BLACKLIST = COMMON_BUILDER.comment("list of dimensions by modid that loot chests should not be replaced in (default: blank, allowing all modids, format e.g., [\"minecraft", "othermod\"])").defineList("modid_dimension_blacklist", empty, modidValidator);
        MODID_DIMENSION_WHITELIST = COMMON_BUILDER.comment("list of dimensions by modid that loot chest should be replaced in (default: blank, allowing all modids, format e.g., [\"minecraft", "othermod\"])").defineList("modid_dimension_whitelist", empty, modidValidator);
        LOOT_TABLE_BLACKLIST = COMMON_BUILDER.comment("list of loot tables which shouldn't be converted (in the format of [\"modid:loot_table\", \"othermodid:other_loot_table\"])").defineList("loot_table_blacklist", empty, validator);
        LOOT_MODID_BLACKLIST = COMMON_BUILDER.comment("list of modids whose loot tables shouldn't be converted (in the format of [\"modid\", \"other_modid\"])").defineList("loot_modid_blacklist", empty, modidValidator);
        DECAY_LOOT_TABLES = COMMON_BUILDER.comment("list of loot tables which will decay (default blank, meaning no chests decay, in the format of (in the format of [\"modid:loot_table\", \"othermodid:other_loot_table\"])").defineList("decay_loot_tables", empty, validator);
        DECAY_MODIDS = COMMON_BUILDER.comment("list of mod IDs whose loot tables will decay (default blank, meaning no chests decay, in the format [\"modid\", \"othermodid\"])").defineList("decay_modids", empty, o -> o instanceof String);
        DECAY_DIMENSIONS = COMMON_BUILDER.comment("list of dimensions where loot chests should automatically decay (default: blank, e.g., [\"minecraft:the_nether\", \"minecraft:the_end\"])").defineList("decay_dimensions", empty, validator);
        DECAY_STRUCTURES = COMMON_BUILDER.comment("list of structures in which loot chests should automatically decay (in the format of [\"modid:structure_name\", \"modid:other_structure_name\"])").defineList("decay_structures", empty, validator);
        REFRESH_LOOT_TABLES = COMMON_BUILDER.comment("list of loot tables which will refresh (default blank, meaning no chests refresh, in the format of [\"modid:loot_table\", \"othermodid:loot_table\"])").defineList("refresh_loot_tables", empty, validator);
        REFRESH_MODIDS = COMMON_BUILDER.comment("list of mod IDs whose loot tables will refresh (default blank, meaning no chests refresh, in the format of [\"modid\", \"othermodid\"])").defineList("refresh_modids", empty, o -> o instanceof String);
        REFRESH_DIMENSIONS = COMMON_BUILDER.comment("list of dimensions where loot chests should automatically refresh (default: blank, e.g., [\"minecraft:overworld\", \"othermod:otherdimension\"])").defineList("refresh_dimensions", empty, validator);
        REFRESH_STRUCTURES = COMMON_BUILDER.comment("list of structures in which loot chests should automatically refresh (in the format of [\"modid:structure_name\", \"othermodid:other_structure_name\"])").defineList("refresh_structures", empty, validator);
    }
}