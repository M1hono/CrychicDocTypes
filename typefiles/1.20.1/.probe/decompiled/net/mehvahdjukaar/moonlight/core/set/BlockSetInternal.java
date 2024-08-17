package net.mehvahdjukaar.moonlight.core.set;

import com.google.common.base.Stopwatch;
import dev.architectury.injectables.annotations.ExpectPlatform;
import dev.architectury.injectables.annotations.ExpectPlatform.Transformed;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import net.mehvahdjukaar.moonlight.api.events.AfterLanguageLoadEvent;
import net.mehvahdjukaar.moonlight.api.set.BlockSetAPI;
import net.mehvahdjukaar.moonlight.api.set.BlockType;
import net.mehvahdjukaar.moonlight.api.set.BlockTypeRegistry;
import net.mehvahdjukaar.moonlight.core.Moonlight;
import net.mehvahdjukaar.moonlight.core.set.forge.BlockSetInternalImpl;
import net.minecraft.core.Registry;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.block.Block;
import org.jetbrains.annotations.Nullable;

public class BlockSetInternal {

    private static final Map<Class<? extends BlockType>, BlockTypeRegistry<?>> BLOCK_SET_CONTAINERS = new ConcurrentHashMap();

    private static final ConcurrentLinkedDeque<Runnable> FINDER_ADDER = new ConcurrentLinkedDeque();

    private static final ConcurrentLinkedDeque<Runnable> REMOVER_ADDER = new ConcurrentLinkedDeque();

    public static void initializeBlockSets() {
        Stopwatch sw = Stopwatch.createStarted();
        if (hasFilledBlockSets()) {
            throw new UnsupportedOperationException("block sets have already bee initialized");
        } else {
            FINDER_ADDER.forEach(Runnable::run);
            FINDER_ADDER.clear();
            BLOCK_SET_CONTAINERS.values().forEach(BlockTypeRegistry::buildAll);
            BLOCK_SET_CONTAINERS.values().forEach(BlockTypeRegistry::onBlockInit);
            REMOVER_ADDER.forEach(Runnable::run);
            REMOVER_ADDER.clear();
            Moonlight.LOGGER.info("Initialized block sets in {}ms", sw.elapsed().toMillis());
        }
    }

    @ExpectPlatform
    @Transformed
    protected static boolean hasFilledBlockSets() {
        return BlockSetInternalImpl.hasFilledBlockSets();
    }

    public static <T extends BlockType> void registerBlockSetDefinition(BlockTypeRegistry<T> typeRegistry) {
        if (hasFilledBlockSets()) {
            throw new UnsupportedOperationException(String.format("Tried to register block set definition %s after registry events", typeRegistry));
        } else {
            BLOCK_SET_CONTAINERS.put(typeRegistry.getType(), typeRegistry);
        }
    }

    public static <T extends BlockType> void addBlockTypeFinder(Class<T> type, BlockType.SetFinder<T> blockFinder) {
        if (hasFilledBlockSets()) {
            throw new UnsupportedOperationException(String.format("Tried to register block %s finder %s after registry events", type, blockFinder));
        } else {
            FINDER_ADDER.add((Runnable) () -> {
                BlockTypeRegistry<T> container = getBlockSet(type);
                container.addFinder(blockFinder);
            });
        }
    }

    public static <T extends BlockType> void addBlockTypeRemover(Class<T> type, ResourceLocation id) {
        if (hasFilledBlockSets()) {
            throw new UnsupportedOperationException(String.format("Tried to remove block type %s for type %s after registry events", id, type));
        } else {
            REMOVER_ADDER.add((Runnable) () -> {
                BlockTypeRegistry<T> container = getBlockSet(type);
                container.addRemover(id);
            });
        }
    }

    public static <T extends BlockType> BlockTypeRegistry<T> getBlockSet(Class<T> type) {
        return (BlockTypeRegistry<T>) BLOCK_SET_CONTAINERS.get(type);
    }

    public static void addTranslations(AfterLanguageLoadEvent event) {
        BlockSetAPI.getRegistries().forEach(r -> r.addTypeTranslations(event));
    }

    @ExpectPlatform
    @Transformed
    public static <T extends BlockType, E> void addDynamicRegistration(BlockSetAPI.BlockTypeRegistryCallback<E, T> registrationFunction, Class<T> blockType, Registry<E> registry) {
        BlockSetInternalImpl.addDynamicRegistration(registrationFunction, blockType, registry);
    }

    public static <T extends BlockType> void addDynamicBlockRegistration(BlockSetAPI.BlockTypeRegistryCallback<Block, T> registrationFunction, Class<T> blockType) {
        addDynamicRegistration(registrationFunction, blockType, BuiltInRegistries.BLOCK);
    }

    public static <T extends BlockType> void addDynamicItemRegistration(BlockSetAPI.BlockTypeRegistryCallback<Item, T> registrationFunction, Class<T> blockType) {
        addDynamicRegistration(registrationFunction, blockType, BuiltInRegistries.ITEM);
    }

    public static Collection<BlockTypeRegistry<?>> getRegistries() {
        return BLOCK_SET_CONTAINERS.values();
    }

    @Nullable
    public static <T extends BlockType> BlockTypeRegistry<T> getRegistry(Class<T> typeClass) {
        return (BlockTypeRegistry<T>) BLOCK_SET_CONTAINERS.get(typeClass);
    }

    @Nullable
    public static <T extends BlockType> T getBlockTypeOf(ItemLike itemLike, Class<T> typeClass) {
        BlockTypeRegistry<T> r = getRegistry(typeClass);
        return r != null ? r.getBlockTypeOf(itemLike) : null;
    }
}