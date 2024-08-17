package io.github.lightman314.lightmanscurrency.datagen.common.crafting.builders;

import com.google.common.collect.Lists;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import io.github.lightman314.lightmanscurrency.common.core.ModRecipes;
import java.util.List;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.advancements.Advancement;
import net.minecraft.advancements.AdvancementRewards;
import net.minecraft.advancements.CriterionTriggerInstance;
import net.minecraft.advancements.RequirementsStrategy;
import net.minecraft.advancements.critereon.RecipeUnlockedTrigger;
import net.minecraft.data.recipes.CraftingRecipeBuilder;
import net.minecraft.data.recipes.FinishedRecipe;
import net.minecraft.data.recipes.RecipeBuilder;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.level.ItemLike;
import net.minecraftforge.registries.ForgeRegistries;

public class WalletUpgradeRecipeBuilder extends CraftingRecipeBuilder implements RecipeBuilder {

    private final RecipeCategory category;

    private final Item result;

    private final int count;

    private final List<Ingredient> ingredients = Lists.newArrayList();

    private final Advancement.Builder advancement = Advancement.Builder.recipeAdvancement();

    @Nullable
    private String group;

    public WalletUpgradeRecipeBuilder(RecipeCategory category, ItemLike result, int count) {
        this.category = category;
        this.result = result.asItem();
        this.count = count;
    }

    public static WalletUpgradeRecipeBuilder shapeless(RecipeCategory category, ItemLike result) {
        return new WalletUpgradeRecipeBuilder(category, result, 1);
    }

    public static WalletUpgradeRecipeBuilder shapeless(RecipeCategory category, ItemLike result, int count) {
        return new WalletUpgradeRecipeBuilder(category, result, count);
    }

    public WalletUpgradeRecipeBuilder requires(TagKey<Item> tagKeyItem0) {
        return this.requires(Ingredient.of(tagKeyItem0));
    }

    public WalletUpgradeRecipeBuilder requires(ItemLike itemLike0) {
        return this.requires(itemLike0, 1);
    }

    public WalletUpgradeRecipeBuilder requires(ItemLike itemLike0, int int1) {
        for (int i = 0; i < int1; i++) {
            this.requires(Ingredient.of(itemLike0));
        }
        return this;
    }

    public WalletUpgradeRecipeBuilder requires(Ingredient ingredient) {
        return this.requires(ingredient, 1);
    }

    public WalletUpgradeRecipeBuilder requires(Ingredient ingredient, int count) {
        for (int i = 0; i < count; i++) {
            this.ingredients.add(ingredient);
        }
        return this;
    }

    @Nonnull
    public WalletUpgradeRecipeBuilder unlockedBy(@Nonnull String name, @Nonnull CriterionTriggerInstance criterion) {
        this.advancement.addCriterion(name, criterion);
        return this;
    }

    @Nonnull
    public WalletUpgradeRecipeBuilder group(@Nullable String group) {
        this.group = group;
        return this;
    }

    @Nonnull
    @Override
    public Item getResult() {
        return this.result;
    }

    @Override
    public void save(@Nonnull Consumer<FinishedRecipe> consumer, @Nonnull ResourceLocation id) {
        this.ensureValid(id);
        this.advancement.parent(f_236353_).addCriterion("has_the_recipe", RecipeUnlockedTrigger.unlocked(id)).rewards(AdvancementRewards.Builder.recipe(id)).requirements(RequirementsStrategy.OR);
        consumer.accept(new WalletUpgradeRecipeBuilder.Result(id, this.result, this.count, this.group == null ? "" : this.group, m_245179_(this.category), this.ingredients, this.advancement, id.withPrefix("recipes/" + this.category.getFolderName() + "/")));
    }

    private void ensureValid(ResourceLocation id) {
        if (this.advancement.getCriteria().isEmpty()) {
            throw new IllegalStateException("No way of obtaining recipe " + id);
        }
    }

    public static class Result extends CraftingRecipeBuilder.CraftingResult {

        private final ResourceLocation id;

        private final Item result;

        private final int count;

        private final String group;

        private final List<Ingredient> ingredients;

        private final Advancement.Builder advancement;

        private final ResourceLocation advancementId;

        public Result(ResourceLocation id, Item result, int count, String group, CraftingBookCategory category, List<Ingredient> ingredients, Advancement.Builder advancement, ResourceLocation advancementId) {
            super(category);
            this.id = id;
            this.result = result;
            this.count = count;
            this.group = group;
            this.ingredients = ingredients;
            this.advancement = advancement;
            this.advancementId = advancementId;
        }

        @Override
        public void serializeRecipeData(@Nonnull JsonObject json) {
            super.serializeRecipeData(json);
            if (!this.group.isEmpty()) {
                json.addProperty("group", this.group);
            }
            JsonArray jsonarray = new JsonArray();
            for (Ingredient ingredient : this.ingredients) {
                jsonarray.add(ingredient.toJson());
            }
            json.add("ingredients", jsonarray);
            JsonObject jsonobject = new JsonObject();
            jsonobject.addProperty("item", ForgeRegistries.ITEMS.getKey(this.result).toString());
            if (this.count > 1) {
                jsonobject.addProperty("count", this.count);
            }
            json.add("result", jsonobject);
        }

        @Nonnull
        @Override
        public RecipeSerializer<?> getType() {
            return ModRecipes.WALLET_UPGRADE.get();
        }

        @Nonnull
        @Override
        public ResourceLocation getId() {
            return this.id;
        }

        @Nullable
        @Override
        public JsonObject serializeAdvancement() {
            return this.advancement.serializeToJson();
        }

        @Nullable
        @Override
        public ResourceLocation getAdvancementId() {
            return this.advancementId;
        }
    }
}