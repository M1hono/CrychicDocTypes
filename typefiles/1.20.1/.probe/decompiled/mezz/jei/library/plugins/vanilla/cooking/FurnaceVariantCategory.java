package mezz.jei.library.plugins.vanilla.cooking;

import mezz.jei.api.gui.drawable.IDrawableAnimated;
import mezz.jei.api.gui.drawable.IDrawableStatic;
import mezz.jei.api.helpers.IGuiHelper;
import mezz.jei.api.recipe.category.IRecipeCategory;
import mezz.jei.common.Constants;

public abstract class FurnaceVariantCategory<T> implements IRecipeCategory<T> {

    protected final IDrawableStatic staticFlame;

    protected final IDrawableAnimated animatedFlame;

    public FurnaceVariantCategory(IGuiHelper guiHelper) {
        this.staticFlame = guiHelper.createDrawable(Constants.RECIPE_GUI_VANILLA, 82, 114, 14, 14);
        this.animatedFlame = guiHelper.createAnimatedDrawable(this.staticFlame, 300, IDrawableAnimated.StartDirection.TOP, true);
    }
}