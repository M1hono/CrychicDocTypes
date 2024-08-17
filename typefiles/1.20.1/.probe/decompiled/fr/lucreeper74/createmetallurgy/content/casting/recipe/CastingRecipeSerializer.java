package fr.lucreeper74.createmetallurgy.content.casting.recipe;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.simibubi.create.content.processing.recipe.ProcessingOutput;
import com.simibubi.create.foundation.fluid.FluidIngredient;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.RecipeSerializer;
import org.jetbrains.annotations.Nullable;

public abstract class CastingRecipeSerializer implements RecipeSerializer<CastingRecipe> {

    public CastingRecipe fromJson(ResourceLocation recipeId, JsonObject json) {
        Ingredient ingredient = Ingredient.EMPTY;
        FluidIngredient fluid = FluidIngredient.EMPTY;
        for (JsonElement je : GsonHelper.getAsJsonArray(json, "ingredients")) {
            if (FluidIngredient.isFluidIngredient(je)) {
                fluid = FluidIngredient.deserialize(je);
            } else {
                ingredient = Ingredient.fromJson(je);
            }
        }
        int processingDuration = GsonHelper.getAsInt(json, "processingTime");
        boolean moldConsumed = GsonHelper.getAsBoolean(json, "mold_consumed", false);
        JsonElement jex = GsonHelper.getAsJsonObject(json, "result");
        ProcessingOutput result = ProcessingOutput.EMPTY;
        if (jex.isJsonObject() && !GsonHelper.isValidNode(jex.getAsJsonObject(), "fluid")) {
            result = ProcessingOutput.deserialize(jex);
        }
        return this.createRecipe(recipeId, ingredient, fluid, processingDuration, moldConsumed, result);
    }

    @Nullable
    public CastingRecipe fromNetwork(ResourceLocation recipeId, FriendlyByteBuf buffer) {
        Ingredient ingredient = Ingredient.fromNetwork(buffer);
        FluidIngredient fluid = FluidIngredient.read(buffer);
        int processingDuration = buffer.readInt();
        boolean moldConsumed = buffer.readBoolean();
        ProcessingOutput result = ProcessingOutput.read(buffer);
        return this.createRecipe(recipeId, ingredient, fluid, processingDuration, moldConsumed, result);
    }

    public void toNetwork(FriendlyByteBuf buffer, CastingRecipe recipe) {
        recipe.ingredient.toNetwork(buffer);
        recipe.fluidIngredient.write(buffer);
        buffer.writeInt(recipe.processingDuration);
        buffer.writeBoolean(recipe.moldConsumed);
        recipe.result.write(buffer);
    }

    public abstract CastingRecipe createRecipe(ResourceLocation var1, Ingredient var2, FluidIngredient var3, int var4, boolean var5, ProcessingOutput var6);

    public static class CastingBasinRecipeSerializer extends CastingRecipeSerializer {

        @Override
        public CastingRecipe createRecipe(ResourceLocation id, Ingredient ingredient, FluidIngredient fluid, int processingTime, boolean moldConsumed, ProcessingOutput result) {
            return new CastingBasinRecipe(id, ingredient, fluid, processingTime, moldConsumed, result);
        }
    }

    public static class CastingTableRecipeSerializer extends CastingRecipeSerializer {

        @Override
        public CastingRecipe createRecipe(ResourceLocation id, Ingredient ingredient, FluidIngredient fluid, int processingTime, boolean moldConsumed, ProcessingOutput result) {
            return new CastingTableRecipe(id, ingredient, fluid, processingTime, moldConsumed, result);
        }
    }
}