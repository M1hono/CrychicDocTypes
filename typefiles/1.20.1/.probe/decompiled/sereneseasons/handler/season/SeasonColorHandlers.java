package sereneseasons.handler.season;

import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.BiomeColors;
import net.minecraft.core.Holder;
import net.minecraft.core.Registry;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.ColorResolver;
import net.minecraft.world.level.FoliageColor;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.biome.Biome;
import net.minecraft.world.level.block.Blocks;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import sereneseasons.api.season.ISeasonColorProvider;
import sereneseasons.config.ServerConfig;
import sereneseasons.init.ModTags;
import sereneseasons.season.SeasonTime;
import sereneseasons.util.SeasonColorUtil;

@OnlyIn(Dist.CLIENT)
public class SeasonColorHandlers {

    private static ColorResolver originalGrassColorResolver;

    private static ColorResolver originalFoliageColorResolver;

    public static void setup() {
        registerGrassAndFoliageColorHandlers();
        registerBirchColorHandler();
    }

    private static void registerGrassAndFoliageColorHandlers() {
        originalGrassColorResolver = BiomeColors.GRASS_COLOR_RESOLVER;
        originalFoliageColorResolver = BiomeColors.FOLIAGE_COLOR_RESOLVER;
        BiomeColors.GRASS_COLOR_RESOLVER = (biome, x, z) -> {
            Minecraft minecraft = Minecraft.getInstance();
            Level level = minecraft.level;
            Registry<Biome> biomeRegistry = level.registryAccess().registryOrThrow(Registries.BIOME);
            Holder<Biome> biomeHolder = (Holder<Biome>) biomeRegistry.getResourceKey(biome).flatMap(key -> biomeRegistry.getHolder(key)).orElse(null);
            int originalColor = originalGrassColorResolver.getColor(biome, x, z);
            if (biomeHolder != null) {
                SeasonTime calendar = SeasonHandler.getClientSeasonTime();
                ISeasonColorProvider colorProvider = (ISeasonColorProvider) (biomeHolder.is(ModTags.Biomes.TROPICAL_BIOMES) ? calendar.getTropicalSeason() : calendar.getSubSeason());
                return SeasonColorUtil.applySeasonalGrassColouring(colorProvider, biomeHolder, originalColor);
            } else {
                return originalColor;
            }
        };
        BiomeColors.FOLIAGE_COLOR_RESOLVER = (biome, x, z) -> {
            Minecraft minecraft = Minecraft.getInstance();
            Level level = minecraft.level;
            Registry<Biome> biomeRegistry = level.registryAccess().registryOrThrow(Registries.BIOME);
            Holder<Biome> biomeHolder = (Holder<Biome>) biomeRegistry.getResourceKey(biome).flatMap(key -> biomeRegistry.getHolder(key)).orElse(null);
            int originalColor = originalFoliageColorResolver.getColor(biome, x, z);
            if (biomeHolder != null) {
                SeasonTime calendar = SeasonHandler.getClientSeasonTime();
                ISeasonColorProvider colorProvider = (ISeasonColorProvider) (biomeHolder.is(ModTags.Biomes.TROPICAL_BIOMES) ? calendar.getTropicalSeason() : calendar.getSubSeason());
                return SeasonColorUtil.applySeasonalFoliageColouring(colorProvider, biomeHolder, originalColor);
            } else {
                return originalColor;
            }
        };
    }

    private static void registerBirchColorHandler() {
        Minecraft.getInstance().getBlockColors().register((state, dimensionReader, pos, tintIndex) -> {
            int birchColor = FoliageColor.getBirchColor();
            Level level = Minecraft.getInstance().player.m_9236_();
            ResourceKey<Level> dimension = Minecraft.getInstance().player.m_9236_().dimension();
            if (level != null && pos != null && ServerConfig.changeBirchColor.get() && ServerConfig.isDimensionWhitelisted(dimension)) {
                Holder<Biome> biome = level.m_204166_(pos);
                if (!biome.is(ModTags.Biomes.BLACKLISTED_BIOMES)) {
                    SeasonTime calendar = SeasonHandler.getClientSeasonTime();
                    ISeasonColorProvider colorProvider = (ISeasonColorProvider) (biome.is(ModTags.Biomes.TROPICAL_BIOMES) ? calendar.getTropicalSeason() : calendar.getSubSeason());
                    birchColor = colorProvider.getBirchColor();
                    if (biome.is(ModTags.Biomes.LESSER_COLOR_CHANGE_BIOMES)) {
                        birchColor = SeasonColorUtil.mixColours(colorProvider.getBirchColor(), FoliageColor.getBirchColor(), 0.75F);
                    }
                }
            }
            return birchColor;
        }, Blocks.BIRCH_LEAVES);
    }
}