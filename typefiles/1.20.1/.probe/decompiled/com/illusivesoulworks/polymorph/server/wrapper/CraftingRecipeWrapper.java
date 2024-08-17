package com.illusivesoulworks.polymorph.server.wrapper;

import com.illusivesoulworks.polymorph.platform.Services;
import net.minecraft.world.item.crafting.Recipe;

public class CraftingRecipeWrapper extends RecipeWrapper {

    private final boolean shaped;

    public CraftingRecipeWrapper(Recipe<?> recipe) {
        super(recipe);
        this.shaped = Services.PLATFORM.isShaped(recipe);
    }

    public boolean isShaped() {
        return this.shaped;
    }

    @Override
    public boolean conflicts(RecipeWrapper pOther) {
        return super.conflicts(pOther) && this.isSameShape((CraftingRecipeWrapper) pOther);
    }

    private boolean isSameShape(CraftingRecipeWrapper other) {
        return this.shaped && other.isShaped() ? Services.PLATFORM.isSameShape(this.getRecipe(), other.getRecipe()) : true;
    }
}