package vectorwing.farmersdelight.common.event;

import com.google.common.collect.ImmutableMap.Builder;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.MissingMappingsEvent;
import vectorwing.farmersdelight.FarmersDelight;
import vectorwing.farmersdelight.common.registry.ModBlocks;
import vectorwing.farmersdelight.common.registry.ModItems;

@EventBusSubscriber(modid = "farmersdelight")
public class MappingEvents {

    public static ResourceLocation mapping(String name) {
        return new ResourceLocation("farmersdelight", name);
    }

    @SubscribeEvent
    public static void blockRemapping(MissingMappingsEvent event) {
        List<MissingMappingsEvent.Mapping<Block>> mappings = event.getMappings(ForgeRegistries.Keys.BLOCKS, "farmersdelight");
        Map<ResourceLocation, Supplier<Block>> blockRemapping = new Builder().put(mapping("oak_pantry"), ModBlocks.OAK_CABINET).put(mapping("birch_pantry"), ModBlocks.BIRCH_CABINET).put(mapping("spruce_pantry"), ModBlocks.SPRUCE_CABINET).put(mapping("jungle_pantry"), ModBlocks.JUNGLE_CABINET).put(mapping("acacia_pantry"), ModBlocks.ACACIA_CABINET).put(mapping("dark_oak_pantry"), ModBlocks.DARK_OAK_CABINET).put(mapping("crimson_pantry"), ModBlocks.CRIMSON_CABINET).put(mapping("warped_pantry"), ModBlocks.WARPED_CABINET).put(mapping("rice_crop"), ModBlocks.RICE_CROP).put(mapping("rice_upper_crop"), ModBlocks.RICE_CROP_PANICLES).build();
        for (MissingMappingsEvent.Mapping<Block> mapping : mappings) {
            Supplier<Block> blockSupplier = (Supplier<Block>) blockRemapping.get(mapping.getKey());
            if (blockSupplier != null) {
                Block block = (Block) blockSupplier.get();
                if (ForgeRegistries.BLOCKS.getKey(block) != null) {
                    mapping.remap(block);
                    FarmersDelight.LOGGER.warn("Remapping block '{}' to '{}'...", mapping.getKey().toString(), ForgeRegistries.BLOCKS.getKey(block).toString());
                }
            }
        }
    }

    @SubscribeEvent
    public static void itemRemapping(MissingMappingsEvent event) {
        List<MissingMappingsEvent.Mapping<Item>> mappings = event.getMappings(ForgeRegistries.Keys.ITEMS, "farmersdelight");
        Map<ResourceLocation, Supplier<Item>> itemRemapping = new Builder().put(mapping("oak_pantry"), ModItems.OAK_CABINET).put(mapping("birch_pantry"), ModItems.BIRCH_CABINET).put(mapping("spruce_pantry"), ModItems.SPRUCE_CABINET).put(mapping("jungle_pantry"), ModItems.JUNGLE_CABINET).put(mapping("acacia_pantry"), ModItems.ACACIA_CABINET).put(mapping("dark_oak_pantry"), ModItems.DARK_OAK_CABINET).put(mapping("crimson_pantry"), ModItems.CRIMSON_CABINET).put(mapping("warped_pantry"), ModItems.WARPED_CABINET).build();
        for (MissingMappingsEvent.Mapping<Item> mapping : mappings) {
            Supplier<Item> itemSupplier = (Supplier<Item>) itemRemapping.get(mapping.getKey());
            if (itemSupplier != null) {
                Item item = (Item) itemSupplier.get();
                if (item != null && ForgeRegistries.ITEMS.getKey(item) != null) {
                    mapping.remap(item);
                    FarmersDelight.LOGGER.warn("Remapping item '{}' to '{}'...", mapping.getKey().toString(), ForgeRegistries.ITEMS.getKey(item).toString());
                }
            }
        }
    }
}