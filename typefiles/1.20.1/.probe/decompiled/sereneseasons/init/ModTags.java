package sereneseasons.init;

import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.BlockTags;
import net.minecraft.tags.ItemTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.biome.Biome;
import net.minecraft.world.level.block.Block;

public class ModTags {

    public static void setup() {
        ModTags.Blocks.setup();
        ModTags.Items.setup();
        ModTags.Biomes.setup();
    }

    private static TagKey<Biome> createBiomeTag(ResourceLocation name) {
        return TagKey.create(Registries.BIOME, name);
    }

    public static class Biomes {

        public static final TagKey<Biome> BLACKLISTED_BIOMES = ModTags.createBiomeTag(new ResourceLocation("sereneseasons:blacklisted_biomes"));

        public static final TagKey<Biome> INFERTILE_BIOMES = ModTags.createBiomeTag(new ResourceLocation("sereneseasons:infertile_biomes"));

        public static final TagKey<Biome> LESSER_COLOR_CHANGE_BIOMES = ModTags.createBiomeTag(new ResourceLocation("sereneseasons:lesser_color_change_biomes"));

        public static final TagKey<Biome> TROPICAL_BIOMES = ModTags.createBiomeTag(new ResourceLocation("sereneseasons:tropical_biomes"));

        private static void setup() {
        }
    }

    public static class Blocks {

        public static final TagKey<Block> SPRING_CROPS = BlockTags.create(new ResourceLocation("sereneseasons:spring_crops"));

        public static final TagKey<Block> SUMMER_CROPS = BlockTags.create(new ResourceLocation("sereneseasons:summer_crops"));

        public static final TagKey<Block> AUTUMN_CROPS = BlockTags.create(new ResourceLocation("sereneseasons:autumn_crops"));

        public static final TagKey<Block> WINTER_CROPS = BlockTags.create(new ResourceLocation("sereneseasons:winter_crops"));

        public static final TagKey<Block> GREENHOUSE_GLASS = BlockTags.create(new ResourceLocation("sereneseasons:greenhouse_glass"));

        public static final TagKey<Block> UNBREAKABLE_INFERTILE_CROPS = BlockTags.create(new ResourceLocation("sereneseasons:unbreakable_infertile_crops"));

        private static void setup() {
        }
    }

    public static class Items {

        public static final TagKey<Item> SPRING_CROPS = ItemTags.create(new ResourceLocation("sereneseasons:spring_crops"));

        public static final TagKey<Item> SUMMER_CROPS = ItemTags.create(new ResourceLocation("sereneseasons:summer_crops"));

        public static final TagKey<Item> AUTUMN_CROPS = ItemTags.create(new ResourceLocation("sereneseasons:autumn_crops"));

        public static final TagKey<Item> WINTER_CROPS = ItemTags.create(new ResourceLocation("sereneseasons:winter_crops"));

        private static void setup() {
        }
    }
}