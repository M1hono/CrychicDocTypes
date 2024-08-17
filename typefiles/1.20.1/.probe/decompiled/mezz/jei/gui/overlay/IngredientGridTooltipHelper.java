package mezz.jei.gui.overlay;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import mezz.jei.api.helpers.IColorHelper;
import mezz.jei.api.helpers.IModIdHelper;
import mezz.jei.api.ingredients.IIngredientHelper;
import mezz.jei.api.ingredients.IIngredientRenderer;
import mezz.jei.api.ingredients.IIngredientType;
import mezz.jei.api.ingredients.ITypedIngredient;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.common.config.IClientToggleState;
import mezz.jei.common.config.IIngredientFilterConfig;
import mezz.jei.common.gui.TooltipRenderer;
import mezz.jei.common.input.IInternalKeyMappings;
import mezz.jei.common.util.SafeIngredientUtil;
import mezz.jei.core.search.SearchMode;
import net.minecraft.ChatFormatting;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.network.chat.CommonComponents;
import net.minecraft.network.chat.Component;

public final class IngredientGridTooltipHelper {

    private final IIngredientManager ingredientManager;

    private final IIngredientFilterConfig ingredientFilterConfig;

    private final IClientToggleState toggleState;

    private final IModIdHelper modIdHelper;

    private final IInternalKeyMappings keyBindings;

    private final IColorHelper colorHelper;

    public IngredientGridTooltipHelper(IIngredientManager ingredientManager, IIngredientFilterConfig ingredientFilterConfig, IClientToggleState toggleState, IModIdHelper modIdHelper, IInternalKeyMappings keyBindings, IColorHelper colorHelper) {
        this.ingredientManager = ingredientManager;
        this.ingredientFilterConfig = ingredientFilterConfig;
        this.toggleState = toggleState;
        this.modIdHelper = modIdHelper;
        this.keyBindings = keyBindings;
        this.colorHelper = colorHelper;
    }

    public <T> void drawTooltip(GuiGraphics guiGraphics, int mouseX, int mouseY, ITypedIngredient<T> value) {
        IIngredientType<T> ingredientType = value.getType();
        IIngredientRenderer<T> ingredientRenderer = this.ingredientManager.getIngredientRenderer(ingredientType);
        IIngredientHelper<T> ingredientHelper = this.ingredientManager.getIngredientHelper(ingredientType);
        List<Component> tooltip = this.getTooltip(value, ingredientRenderer, ingredientHelper);
        TooltipRenderer.drawHoveringText(guiGraphics, tooltip, mouseX, mouseY, value, ingredientRenderer, this.ingredientManager);
    }

    public <T> List<Component> getTooltip(ITypedIngredient<T> typedIngredient, IIngredientRenderer<T> ingredientRenderer, IIngredientHelper<T> ingredientHelper) {
        List<Component> tooltip = SafeIngredientUtil.getTooltip(this.ingredientManager, ingredientRenderer, typedIngredient);
        tooltip = this.modIdHelper.addModNameToIngredientTooltip(tooltip, typedIngredient.getIngredient(), ingredientHelper);
        if (this.ingredientFilterConfig.getColorSearchMode() != SearchMode.DISABLED) {
            this.addColorSearchInfoToTooltip(tooltip, typedIngredient, ingredientHelper);
        }
        if (this.toggleState.isEditModeEnabled()) {
            addEditModeInfoToTooltip(tooltip, this.keyBindings);
        }
        return tooltip;
    }

    private <T> void addColorSearchInfoToTooltip(List<Component> tooltip, ITypedIngredient<T> typedIngredient, IIngredientHelper<T> ingredientHelper) {
        Iterable<Integer> colors = ingredientHelper.getColors(typedIngredient.getIngredient());
        String colorNamesString = (String) StreamSupport.stream(colors.spliterator(), false).map(this.colorHelper::getClosestColorName).collect(Collectors.joining(", "));
        if (!colorNamesString.isEmpty()) {
            Component colorTranslation = Component.translatable("jei.tooltip.item.colors", colorNamesString).withStyle(ChatFormatting.GRAY);
            tooltip.add(colorTranslation);
        }
    }

    private static void addEditModeInfoToTooltip(List<Component> tooltip, IInternalKeyMappings keyBindings) {
        List<Component> lines = List.of(CommonComponents.EMPTY, Component.translatable("gui.jei.editMode.description").withStyle(ChatFormatting.DARK_GREEN), Component.translatable("gui.jei.editMode.description.hide", keyBindings.getToggleHideIngredient().getTranslatedKeyMessage()).withStyle(ChatFormatting.GRAY), Component.translatable("gui.jei.editMode.description.hide.wild", keyBindings.getToggleWildcardHideIngredient().getTranslatedKeyMessage()).withStyle(ChatFormatting.GRAY));
        tooltip.addAll(lines);
    }
}