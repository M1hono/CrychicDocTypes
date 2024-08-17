package mezz.jei.library.runtime;

import mezz.jei.api.helpers.IJeiHelpers;
import mezz.jei.api.recipe.IRecipeManager;
import mezz.jei.api.recipe.transfer.IRecipeTransferManager;
import mezz.jei.api.runtime.IBookmarkOverlay;
import mezz.jei.api.runtime.IEditModeConfig;
import mezz.jei.api.runtime.IIngredientFilter;
import mezz.jei.api.runtime.IIngredientListOverlay;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.api.runtime.IIngredientVisibility;
import mezz.jei.api.runtime.IJeiKeyMappings;
import mezz.jei.api.runtime.IJeiRuntime;
import mezz.jei.api.runtime.IRecipesGui;
import mezz.jei.api.runtime.IScreenHelper;
import mezz.jei.api.runtime.config.IJeiConfigManager;

public class JeiRuntime implements IJeiRuntime {

    private final IRecipeManager recipeManager;

    private final IRecipeTransferManager recipeTransferManager;

    private final IEditModeConfig editModeConfig;

    private final IIngredientManager ingredientManager;

    private final IIngredientVisibility ingredientVisibility;

    private final IJeiKeyMappings keyMappings;

    private final IJeiHelpers jeiHelpers;

    private final IScreenHelper screenHelper;

    private final IJeiConfigManager configManager;

    private final IIngredientListOverlay ingredientListOverlay;

    private final IBookmarkOverlay bookmarkOverlay;

    private final IRecipesGui recipesGui;

    private final IIngredientFilter ingredientFilter;

    public JeiRuntime(IRecipeManager recipeManager, IIngredientManager ingredientManager, IIngredientVisibility ingredientVisibility, IJeiKeyMappings keyMappings, IJeiHelpers jeiHelpers, IScreenHelper screenHelper, IRecipeTransferManager recipeTransferManager, IEditModeConfig editModeConfig, IIngredientListOverlay ingredientListOverlay, IBookmarkOverlay bookmarkOverlay, IRecipesGui recipesGui, IIngredientFilter ingredientFilter, IJeiConfigManager configManager) {
        this.recipeManager = recipeManager;
        this.recipeTransferManager = recipeTransferManager;
        this.editModeConfig = editModeConfig;
        this.ingredientListOverlay = ingredientListOverlay;
        this.ingredientVisibility = ingredientVisibility;
        this.bookmarkOverlay = bookmarkOverlay;
        this.recipesGui = recipesGui;
        this.ingredientFilter = ingredientFilter;
        this.ingredientManager = ingredientManager;
        this.keyMappings = keyMappings;
        this.jeiHelpers = jeiHelpers;
        this.screenHelper = screenHelper;
        this.configManager = configManager;
    }

    @Override
    public IRecipeManager getRecipeManager() {
        return this.recipeManager;
    }

    @Override
    public IIngredientFilter getIngredientFilter() {
        return this.ingredientFilter;
    }

    @Override
    public IIngredientListOverlay getIngredientListOverlay() {
        return this.ingredientListOverlay;
    }

    @Override
    public IIngredientManager getIngredientManager() {
        return this.ingredientManager;
    }

    @Override
    public IBookmarkOverlay getBookmarkOverlay() {
        return this.bookmarkOverlay;
    }

    @Override
    public IJeiHelpers getJeiHelpers() {
        return this.jeiHelpers;
    }

    @Override
    public IRecipesGui getRecipesGui() {
        return this.recipesGui;
    }

    @Override
    public IIngredientVisibility getIngredientVisibility() {
        return this.ingredientVisibility;
    }

    @Override
    public IJeiKeyMappings getKeyMappings() {
        return this.keyMappings;
    }

    @Override
    public IScreenHelper getScreenHelper() {
        return this.screenHelper;
    }

    @Override
    public IRecipeTransferManager getRecipeTransferManager() {
        return this.recipeTransferManager;
    }

    @Override
    public IEditModeConfig getEditModeConfig() {
        return this.editModeConfig;
    }

    @Override
    public IJeiConfigManager getConfigManager() {
        return this.configManager;
    }
}