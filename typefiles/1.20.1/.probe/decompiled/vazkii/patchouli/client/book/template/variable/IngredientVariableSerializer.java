package vazkii.patchouli.client.book.template.variable;

import com.google.gson.JsonElement;
import net.minecraft.world.item.crafting.Ingredient;
import vazkii.patchouli.api.IVariableSerializer;
import vazkii.patchouli.common.util.ItemStackUtil;

public class IngredientVariableSerializer implements IVariableSerializer<Ingredient> {

    public Ingredient fromJson(JsonElement json) {
        return json.isJsonPrimitive() ? ItemStackUtil.loadIngredientFromString(json.getAsString()) : Ingredient.fromJson(json);
    }

    public JsonElement toJson(Ingredient stack) {
        return stack.toJson();
    }
}