package org.embeddedt.modernfix.searchtree;

import it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import net.minecraft.client.gui.screens.recipebook.RecipeCollection;
import net.minecraft.client.searchtree.SearchTree;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

public class RecipeBookSearchTree extends DummySearchTree<RecipeCollection> {

    private final SearchTree<ItemStack> stackCollector;

    private Map<Item, List<RecipeCollection>> collectionsByItem = null;

    private final List<RecipeCollection> allCollections;

    public RecipeBookSearchTree(SearchTree<ItemStack> stackCollector, List<RecipeCollection> allCollections) {
        this.stackCollector = stackCollector;
        this.allCollections = allCollections;
    }

    private Map<Item, List<RecipeCollection>> populateCollectionMap() {
        Map<Item, List<RecipeCollection>> collections = this.collectionsByItem;
        if (collections == null) {
            collections = new Object2ObjectOpenHashMap();
            Map<Item, List<RecipeCollection>> finalCollection = collections;
            for (RecipeCollection collection : this.allCollections) {
                collection.getRecipes().stream().map(recipe -> recipe.getResultItem(collection.registryAccess()).getItem()).distinct().forEach(item -> ((List) finalCollection.computeIfAbsent(item, k -> new ArrayList())).add(collection));
            }
            this.collectionsByItem = collections;
        }
        return collections;
    }

    @Override
    public void refresh() {
        this.collectionsByItem = null;
    }

    @Override
    public List<RecipeCollection> search(String pSearchText) {
        if (pSearchText.trim().length() == 0) {
            return this.allCollections;
        } else {
            List<ItemStack> stacks = this.stackCollector.search(pSearchText);
            Map<Item, List<RecipeCollection>> collections = this.populateCollectionMap();
            return (List<RecipeCollection>) stacks.stream().map(ItemStack::m_41720_).distinct().flatMap(item -> ((List) collections.getOrDefault(item, Collections.emptyList())).stream()).collect(Collectors.toList());
        }
    }
}