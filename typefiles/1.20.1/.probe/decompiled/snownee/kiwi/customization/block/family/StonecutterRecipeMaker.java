package snownee.kiwi.customization.block.family;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.collect.Lists;
import com.google.common.collect.Streams;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.Container;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.StonecutterRecipe;
import net.minecraft.world.level.block.Block;
import snownee.kiwi.util.KHolder;

public class StonecutterRecipeMaker {

    private static final Cache<Item, List<StonecutterRecipe>> EXCHANGE_CACHE = CacheBuilder.newBuilder().expireAfterAccess(Duration.of(1L, ChronoUnit.MINUTES)).build();

    private static final Cache<Item, List<StonecutterRecipe>> SOURCE_CACHE = CacheBuilder.newBuilder().expireAfterAccess(Duration.of(1L, ChronoUnit.MINUTES)).build();

    public static List<StonecutterRecipe> appendRecipesFor(List<StonecutterRecipe> recipes, Container container) {
        ItemStack itemStack = container.getItem(0);
        if (itemStack.isEmpty()) {
            return recipes;
        } else {
            Item item = itemStack.getItem();
            List<StonecutterRecipe> exchangeRecipes = List.of();
            try {
                Collection<KHolder<BlockFamily>> families = BlockFamilies.find(item);
                if (!families.isEmpty()) {
                    exchangeRecipes = (List<StonecutterRecipe>) EXCHANGE_CACHE.get(item, () -> {
                        List<StonecutterRecipe> list = null;
                        for (KHolder<BlockFamily> family : families) {
                            if (family.value().stonecutterExchange()) {
                                if (list == null) {
                                    list = Lists.newArrayList();
                                }
                                list.addAll(makeRecipes("exchange", family));
                            }
                        }
                        return list == null ? List.of() : list;
                    });
                }
            } catch (ExecutionException var8) {
            }
            List<StonecutterRecipe> sourceRecipes = List.of();
            try {
                Collection<KHolder<BlockFamily>> families = BlockFamilies.findByStonecutterSource(item);
                if (!families.isEmpty()) {
                    sourceRecipes = (List<StonecutterRecipe>) SOURCE_CACHE.get(item, () -> {
                        List<StonecutterRecipe> list = Lists.newArrayList();
                        for (KHolder<BlockFamily> family : families) {
                            list.addAll(makeRecipes("to", family));
                        }
                        return list;
                    });
                }
            } catch (ExecutionException var7) {
            }
            return exchangeRecipes.isEmpty() && sourceRecipes.isEmpty() ? recipes : (List) Streams.concat(new Stream[] { recipes.stream(), exchangeRecipes.stream(), sourceRecipes.stream() }).collect(Collectors.toCollection(ArrayList::new));
        }
    }

    public static List<StonecutterRecipe> makeRecipes(String type, KHolder<BlockFamily> family) {
        Ingredient input = switch(type) {
            case "exchange" ->
                family.value().ingredient();
            case "exchange_in_viewer" ->
                family.value().ingredientInViewer();
            case "to" ->
                family.value().stonecutterSourceIngredient();
            default ->
                throw new IllegalArgumentException();
        };
        ResourceLocation prefix = family.key().withPath("fake/stonecutter/%s/%s".formatted(family.key().getPath(), "exchange_in_viewer".equals(type) ? "exchange" : type));
        return family.value().items().map(item -> {
            int count = 1;
            Block block = Block.byItem(item);
            if ("to".equals(type)) {
                count = family.value().stonecutterSourceMultiplier();
            } else {
                count = Mth.floor(1.0F / BlockFamilies.getConvertRatio(item));
                if (count < 1) {
                    return null;
                }
            }
            ResourceLocation itemKey = BuiltInRegistries.ITEM.getKey(item);
            return new StonecutterRecipe(prefix.withSuffix("/%s/%s".formatted(itemKey.getNamespace(), itemKey.getPath())), prefix.toString(), input, new ItemStack(block, count));
        }).filter(Objects::nonNull).toList();
    }

    public static void invalidateCache() {
        EXCHANGE_CACHE.invalidateAll();
        SOURCE_CACHE.invalidateAll();
    }
}