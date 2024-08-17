package fr.lucreeper74.createmetallurgy.content.processing.casting.castingtable;

import com.simibubi.create.content.processing.recipe.ProcessingRecipe;
import com.simibubi.create.content.processing.recipe.ProcessingRecipeBuilder;
import com.simibubi.create.foundation.item.SmartInventory;
import fr.lucreeper74.createmetallurgy.registries.CMRecipeTypes;
import net.minecraft.world.level.Level;

public class CastingTableRecipe extends ProcessingRecipe<SmartInventory> {

    public CastingTableRecipe(ProcessingRecipeBuilder.ProcessingRecipeParams params) {
        super(CMRecipeTypes.CASTING_IN_TABLE, params);
    }

    @Override
    protected int getMaxInputCount() {
        return 1;
    }

    @Override
    protected int getMaxOutputCount() {
        return 1;
    }

    @Override
    protected int getMaxFluidInputCount() {
        return 1;
    }

    public boolean matches(SmartInventory pContainer, Level pLevel) {
        return false;
    }
}