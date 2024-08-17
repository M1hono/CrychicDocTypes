package net.mehvahdjukaar.moonlight.api.resources.recipe;

import com.google.gson.JsonObject;
import dev.architectury.injectables.annotations.ExpectPlatform;
import dev.architectury.injectables.annotations.ExpectPlatform.Transformed;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import net.mehvahdjukaar.moonlight.api.resources.recipe.forge.TemplateRecipeManagerImpl;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.mehvahdjukaar.moonlight.core.recipe.ShapedRecipeTemplate;
import net.mehvahdjukaar.moonlight.core.recipe.ShapelessRecipeTemplate;
import net.mehvahdjukaar.moonlight.core.recipe.StoneCutterRecipeTemplate;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.item.crafting.RecipeSerializer;

public class TemplateRecipeManager {

    private static final Map<ResourceLocation, Function<JsonObject, ? extends IRecipeTemplate<?>>> DESERIALIZERS = new HashMap();

    public static <T extends IRecipeTemplate<?>> void registerTemplate(RecipeSerializer<?> serializer, Function<JsonObject, T> deserializer) {
        registerTemplate(Utils.getID(serializer), deserializer);
    }

    public static <T extends IRecipeTemplate<?>> void registerTemplate(ResourceLocation serializerId, Function<JsonObject, T> deserializer) {
        DESERIALIZERS.put(serializerId, deserializer);
    }

    public static IRecipeTemplate<?> read(JsonObject recipe) throws UnsupportedOperationException {
        String type = GsonHelper.getAsString(recipe, "type");
        Function<JsonObject, ? extends IRecipeTemplate<?>> templateFactory = (Function<JsonObject, ? extends IRecipeTemplate<?>>) DESERIALIZERS.get(new ResourceLocation(type));
        if (templateFactory != null) {
            IRecipeTemplate<?> template = (IRecipeTemplate<?>) templateFactory.apply(recipe);
            if (template instanceof ShapedRecipeTemplate st && st.shouldBeShapeless()) {
                template = st.toShapeless();
            }
            addRecipeConditions(recipe, template);
            return template;
        } else {
            throw new UnsupportedOperationException(String.format("Invalid recipe serializer: %s. Supported deserializers: %s", type, DESERIALIZERS.keySet()));
        }
    }

    @ExpectPlatform
    @Transformed
    private static void addRecipeConditions(JsonObject recipe, IRecipeTemplate<?> template) {
        TemplateRecipeManagerImpl.addRecipeConditions(recipe, template);
    }

    private static IRecipeTemplate<?> forgeConditional(JsonObject recipe) {
        JsonObject object = GsonHelper.getAsJsonArray(recipe, "recipes").get(0).getAsJsonObject();
        IRecipeTemplate<?> template = read(object.getAsJsonObject("recipe"));
        addRecipeConditions(object, template);
        return template;
    }

    static {
        registerTemplate(RecipeSerializer.SHAPED_RECIPE, ShapedRecipeTemplate::new);
        registerTemplate(RecipeSerializer.SHAPELESS_RECIPE, ShapelessRecipeTemplate::new);
        registerTemplate(RecipeSerializer.STONECUTTER, StoneCutterRecipeTemplate::new);
        registerTemplate(new ResourceLocation("forge:conditional"), TemplateRecipeManager::forgeConditional);
    }
}