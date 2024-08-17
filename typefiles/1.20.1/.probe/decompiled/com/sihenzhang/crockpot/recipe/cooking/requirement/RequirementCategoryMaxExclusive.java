package com.sihenzhang.crockpot.recipe.cooking.requirement;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.sihenzhang.crockpot.base.FoodCategory;
import com.sihenzhang.crockpot.recipe.cooking.CrockPotCookingRecipe;
import com.sihenzhang.crockpot.util.JsonUtils;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.util.GsonHelper;

public class RequirementCategoryMaxExclusive implements IRequirement {

    private final FoodCategory category;

    private final float max;

    public RequirementCategoryMaxExclusive(FoodCategory category, float max) {
        this.category = category;
        this.max = max;
    }

    public FoodCategory getCategory() {
        return this.category;
    }

    public float getMax() {
        return this.max;
    }

    public boolean test(CrockPotCookingRecipe.Wrapper recipeWrapper) {
        return recipeWrapper.getFoodValues().get(this.category) < this.max;
    }

    public static RequirementCategoryMaxExclusive fromJson(JsonObject object) {
        return new RequirementCategoryMaxExclusive(JsonUtils.getAsEnum(object, "category", FoodCategory.class), GsonHelper.getAsFloat(object, "max"));
    }

    @Override
    public JsonElement toJson() {
        JsonObject obj = new JsonObject();
        obj.addProperty("type", RequirementType.CATEGORY_MAX.name());
        obj.addProperty("category", this.category.name());
        obj.addProperty("max", this.max);
        return obj;
    }

    public static RequirementCategoryMaxExclusive fromNetwork(FriendlyByteBuf buffer) {
        return new RequirementCategoryMaxExclusive(buffer.readEnum(FoodCategory.class), buffer.readFloat());
    }

    @Override
    public void toNetwork(FriendlyByteBuf buffer) {
        buffer.writeEnum(RequirementType.CATEGORY_MAX_EXCLUSIVE);
        buffer.writeEnum(this.category);
        buffer.writeFloat(this.max);
    }
}