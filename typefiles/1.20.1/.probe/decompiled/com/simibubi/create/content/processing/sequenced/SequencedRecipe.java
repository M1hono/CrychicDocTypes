package com.simibubi.create.content.processing.sequenced;

import com.google.common.collect.ImmutableList;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.simibubi.create.content.processing.recipe.ProcessingRecipe;
import com.simibubi.create.content.processing.recipe.ProcessingRecipeSerializer;
import com.simibubi.create.foundation.utility.RegisteredObjects;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeManager;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraftforge.common.crafting.conditions.ICondition;
import net.minecraftforge.registries.ForgeRegistries;

public class SequencedRecipe<T extends ProcessingRecipe<?>> {

    private T wrapped;

    public SequencedRecipe(T wrapped) {
        this.wrapped = wrapped;
    }

    public IAssemblyRecipe getAsAssemblyRecipe() {
        return (IAssemblyRecipe) this.wrapped;
    }

    public ProcessingRecipe<?> getRecipe() {
        return this.wrapped;
    }

    public JsonObject toJson() {
        ProcessingRecipeSerializer<T> serializer = (ProcessingRecipeSerializer<T>) this.wrapped.getSerializer();
        JsonObject json = new JsonObject();
        json.addProperty("type", RegisteredObjects.getKeyOrThrow(serializer).toString());
        serializer.write(json, this.wrapped);
        return json;
    }

    public static SequencedRecipe<?> fromJson(JsonObject json, SequencedAssemblyRecipe parent, int index) {
        ResourceLocation parentId = parent.getId();
        Recipe<?> recipe = RecipeManager.fromJson(new ResourceLocation(parentId.getNamespace(), parentId.getPath() + "_step_" + index), json, ICondition.IContext.EMPTY);
        if (recipe instanceof ProcessingRecipe && recipe instanceof IAssemblyRecipe) {
            ProcessingRecipe<?> processingRecipe = (ProcessingRecipe<?>) recipe;
            IAssemblyRecipe assemblyRecipe = (IAssemblyRecipe) recipe;
            if (assemblyRecipe.supportsAssembly()) {
                Ingredient transit = Ingredient.of(parent.getTransitionalItem());
                processingRecipe.getIngredients().set(0, index == 0 ? Ingredient.merge(ImmutableList.of(transit, parent.getIngredient())) : transit);
                return new SequencedRecipe<>(processingRecipe);
            }
        }
        throw new JsonParseException("Not a supported recipe type");
    }

    public void writeToBuffer(FriendlyByteBuf buffer) {
        ProcessingRecipeSerializer<T> serializer = (ProcessingRecipeSerializer<T>) this.wrapped.getSerializer();
        buffer.writeResourceLocation(RegisteredObjects.getKeyOrThrow(serializer));
        buffer.writeResourceLocation(this.wrapped.getId());
        serializer.toNetwork(buffer, this.wrapped);
    }

    public static SequencedRecipe<?> readFromBuffer(FriendlyByteBuf buffer) {
        ResourceLocation resourcelocation = buffer.readResourceLocation();
        ResourceLocation resourcelocation1 = buffer.readResourceLocation();
        RecipeSerializer<?> serializer = ForgeRegistries.RECIPE_SERIALIZERS.getValue(resourcelocation);
        if (!(serializer instanceof ProcessingRecipeSerializer)) {
            throw new JsonParseException("Not a supported recipe type");
        } else {
            ProcessingRecipe recipe = (ProcessingRecipe) serializer.fromNetwork(resourcelocation1, buffer);
            return new SequencedRecipe((T) recipe);
        }
    }
}