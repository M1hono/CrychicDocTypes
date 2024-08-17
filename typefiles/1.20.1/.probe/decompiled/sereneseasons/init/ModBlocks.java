package sereneseasons.init;

import java.util.List;
import java.util.function.Supplier;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraftforge.registries.RegistryObject;
import sereneseasons.api.SSBlockEntities;
import sereneseasons.api.SSBlocks;
import sereneseasons.block.SeasonSensorBlock;
import sereneseasons.core.SereneSeasons;
import sereneseasons.tileentity.SeasonSensorBlockEntity;

public class ModBlocks {

    public static void setup() {
        registerBlocks();
        registerBlockEntities();
    }

    private static void registerBlocks() {
        SSBlocks.SEASON_SENSOR = registerBlock(() -> new SeasonSensorBlock(BlockBehaviour.Properties.of().strength(0.2F).sound(SoundType.STONE)), "season_sensor");
    }

    private static void registerBlockEntities() {
        SSBlockEntities.SEASON_SENSOR = registerBlockEntityType("season_sensor", SeasonSensorBlockEntity::new, () -> List.of(SSBlocks.SEASON_SENSOR.get()));
    }

    public static RegistryObject<Block> registerBlock(Supplier<Block> blockSupplier, String name) {
        RegistryObject<Block> blockRegistryObject = SereneSeasons.BLOCK_REGISTER.register(name, blockSupplier);
        SereneSeasons.ITEM_REGISTER.register(name, () -> new BlockItem(blockRegistryObject.get(), new Item.Properties()));
        return blockRegistryObject;
    }

    public static RegistryObject<Block> registerBlockNoGroup(Supplier<Block> blockSupplier, String name) {
        RegistryObject<Block> blockRegistryObject = SereneSeasons.BLOCK_REGISTER.register(name, blockSupplier);
        SereneSeasons.ITEM_REGISTER.register(name, () -> new BlockItem(blockRegistryObject.get(), new Item.Properties()));
        return blockRegistryObject;
    }

    public static RegistryObject<BlockEntityType<?>> registerBlockEntityType(String name, BlockEntityType.BlockEntitySupplier<?> factoryIn, Supplier<List<Block>> validBlocks) {
        return SereneSeasons.BLOCK_ENTITY_REGISTER.register(name, () -> BlockEntityType.Builder.of(factoryIn, (Block[]) ((List) validBlocks.get()).toArray(new Block[0])).build(null));
    }
}