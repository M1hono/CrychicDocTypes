package mezz.jei.library.gui.ingredients;

import com.google.common.base.Preconditions;
import it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap;
import java.util.Map;
import java.util.Optional;
import mezz.jei.api.ingredients.IIngredientRenderer;
import mezz.jei.api.ingredients.IIngredientType;

public class RendererOverrides {

    private final Map<IIngredientType<?>, IIngredientRenderer<?>> overrides = new Object2ObjectArrayMap(0);

    private int width;

    private int height;

    public <T> void addOverride(IIngredientType<T> ingredientType, IIngredientRenderer<T> ingredientRenderer) {
        int width = ingredientRenderer.getWidth();
        int height = ingredientRenderer.getHeight();
        Preconditions.checkArgument(width > 0, "ingredient renderer width must be > 0");
        Preconditions.checkArgument(height > 0, "ingredient renderer height must be > 0");
        if (this.width == 0 && this.height == 0) {
            this.width = width;
            this.height = height;
        } else {
            Preconditions.checkArgument(this.width == width, "All ingredient render overrides for one slot must have the same width.");
            Preconditions.checkArgument(this.height == height, "All ingredient render overrides for one slot must have the same height.");
        }
        this.overrides.put(ingredientType, ingredientRenderer);
    }

    public <T> Optional<IIngredientRenderer<T>> getIngredientRenderer(IIngredientType<T> ingredientType) {
        IIngredientRenderer<T> ingredientRenderer = (IIngredientRenderer<T>) this.overrides.get(ingredientType);
        return Optional.ofNullable(ingredientRenderer);
    }

    public int getIngredientWidth() {
        return this.width <= 0 ? 16 : this.width;
    }

    public int getIngredientHeight() {
        return this.height <= 0 ? 16 : this.height;
    }
}