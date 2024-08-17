package sereneseasons.init;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import net.minecraft.ChatFormatting;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Holder;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceKey;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.biome.Biome;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.event.entity.player.ItemTooltipEvent;
import sereneseasons.api.season.Season;
import sereneseasons.api.season.SeasonHelper;
import sereneseasons.config.FertilityConfig;
import sereneseasons.config.ServerConfig;

public class ModFertility {

    private static Set<String> springPlants = new HashSet();

    private static Set<String> summerPlants = new HashSet();

    private static Set<String> autumnPlants = new HashSet();

    private static Set<String> winterPlants = new HashSet();

    private static Set<String> allListedPlants = new HashSet();

    private static HashMap<String, Integer> seedSeasons = new HashMap();

    public static void populate() {
        springPlants.clear();
        summerPlants.clear();
        autumnPlants.clear();
        winterPlants.clear();
        allListedPlants.clear();
        seedSeasons.clear();
        populateSeasonCrops(ModTags.Blocks.SPRING_CROPS, springPlants, 1);
        populateSeasonCrops(ModTags.Blocks.SUMMER_CROPS, summerPlants, 2);
        populateSeasonCrops(ModTags.Blocks.AUTUMN_CROPS, autumnPlants, 4);
        populateSeasonCrops(ModTags.Blocks.WINTER_CROPS, winterPlants, 8);
        populateSeasonSeeds(ModTags.Items.SPRING_CROPS, springPlants, 1);
        populateSeasonSeeds(ModTags.Items.SUMMER_CROPS, summerPlants, 2);
        populateSeasonSeeds(ModTags.Items.AUTUMN_CROPS, autumnPlants, 4);
        populateSeasonSeeds(ModTags.Items.WINTER_CROPS, winterPlants, 8);
    }

    public static boolean isCropFertile(String cropName, Level level, BlockPos pos) {
        Season season = SeasonHelper.getSeasonState(level).getSeason();
        Holder<Biome> biome = level.m_204166_(pos);
        if (FertilityConfig.undergroundFertilityLevel.get() > -1 && pos.m_123342_() < FertilityConfig.undergroundFertilityLevel.get() && !level.m_45527_(pos)) {
            return true;
        } else if (biome.is(ModTags.Biomes.INFERTILE_BIOMES)) {
            return false;
        } else if (!FertilityConfig.seasonalCrops.get() || biome.is(ModTags.Biomes.BLACKLISTED_BIOMES) || !ServerConfig.isDimensionWhitelisted(level.dimension())) {
            return true;
        } else if (!biome.is(ModTags.Biomes.TROPICAL_BIOMES)) {
            if (!biome.value().warmEnoughToRain(pos)) {
                return winterPlants.contains(cropName);
            } else if (season == Season.SPRING && springPlants.contains(cropName)) {
                return true;
            } else if (season == Season.SUMMER && summerPlants.contains(cropName)) {
                return true;
            } else if (season == Season.AUTUMN && autumnPlants.contains(cropName)) {
                return true;
            } else {
                return season == Season.WINTER && winterPlants.contains(cropName) ? true : !allListedPlants.contains(cropName);
            }
        } else {
            return summerPlants.contains(cropName) || !allListedPlants.contains(cropName);
        }
    }

    private static void populateSeasonCrops(TagKey<Block> tag, Set<String> cropSet, int bitmask) {
        BuiltInRegistries.BLOCK.m_203431_(tag).ifPresent(blocks -> {
            for (Holder<Block> block : blocks) {
                Optional<ResourceKey<Block>> blockKey = block.unwrapKey();
                if (!blockKey.isEmpty()) {
                    String plantName = ((ResourceKey) blockKey.get()).location().toString();
                    cropSet.add(plantName);
                    if (bitmask != 0) {
                        allListedPlants.add(plantName);
                        if (seedSeasons.containsKey(plantName)) {
                            int seasons = (Integer) seedSeasons.get(plantName);
                            seedSeasons.put(plantName, seasons | bitmask);
                        } else {
                            seedSeasons.put(plantName, bitmask);
                        }
                    }
                }
            }
        });
    }

    private static void populateSeasonSeeds(TagKey<Item> tag, Set<String> cropSet, int bitmask) {
        BuiltInRegistries.ITEM.m_203431_(tag).ifPresent(items -> {
            for (Holder<Item> item : items) {
                Optional<ResourceKey<Item>> itemKey = item.unwrapKey();
                if (!itemKey.isEmpty()) {
                    String plantName = ((ResourceKey) itemKey.get()).location().toString();
                    cropSet.add(plantName);
                    if (bitmask != 0) {
                        allListedPlants.add(plantName);
                        if (seedSeasons.containsKey(plantName)) {
                            int seasons = (Integer) seedSeasons.get(plantName);
                            seedSeasons.put(plantName, seasons | bitmask);
                        } else {
                            seedSeasons.put(plantName, bitmask);
                        }
                    }
                }
            }
        });
    }

    public static void setupTooltips(ItemTooltipEvent event) {
        if (FertilityConfig.cropTooltips.get() && FertilityConfig.seasonalCrops.get()) {
            String name = BuiltInRegistries.ITEM.getKey(event.getItemStack().getItem()).toString();
            if (seedSeasons.containsKey(name)) {
                int mask = (Integer) seedSeasons.get(name);
                event.getToolTip().add(Component.translatable("desc.sereneseasons.fertile_seasons").append(":"));
                if ((mask & 1) != 0 && (mask & 2) != 0 && (mask & 4) != 0 && (mask & 8) != 0) {
                    event.getToolTip().add(Component.translatable(" ").append(Component.translatable("desc.sereneseasons.year_round")).withStyle(ChatFormatting.LIGHT_PURPLE));
                } else {
                    if ((mask & 1) != 0) {
                        event.getToolTip().add(Component.translatable(" ").append(Component.translatable("desc.sereneseasons.spring")).withStyle(ChatFormatting.GREEN));
                    }
                    if ((mask & 2) != 0) {
                        event.getToolTip().add(Component.translatable(" ").append(Component.translatable("desc.sereneseasons.summer")).withStyle(ChatFormatting.YELLOW));
                    }
                    if ((mask & 4) != 0) {
                        event.getToolTip().add(Component.translatable(" ").append(Component.translatable("desc.sereneseasons.autumn")).withStyle(ChatFormatting.GOLD));
                    }
                    if ((mask & 8) != 0) {
                        event.getToolTip().add(Component.translatable(" ").append(Component.translatable("desc.sereneseasons.winter")).withStyle(ChatFormatting.AQUA));
                    }
                }
            }
        }
    }
}