package de.keksuccino.fancymenu.customization.loadingrequirement.requirements.window;

import de.keksuccino.fancymenu.customization.loadingrequirement.LoadingRequirement;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.rendering.ui.screen.texteditor.TextEditorFormattingRule;
import de.keksuccino.konkrete.math.MathUtils;
import java.util.Arrays;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.client.resources.language.I18n;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class IsWindowWidthBiggerThanRequirement extends LoadingRequirement {

    public IsWindowWidthBiggerThanRequirement() {
        super("fancymenu_loading_requirement_is_window_width_bigger_than");
    }

    @Override
    public boolean hasValue() {
        return true;
    }

    @Override
    public boolean isRequirementMet(@Nullable String value) {
        if (value != null) {
            value = value.replace(" ", "");
            if (MathUtils.isDouble(value)) {
                return Minecraft.getInstance().getWindow().getWidth() > (int) Double.parseDouble(value);
            }
        }
        return false;
    }

    @NotNull
    @Override
    public String getDisplayName() {
        return I18n.get("fancymenu.helper.editor.items.visibilityrequirements.windowwidthbiggerthan");
    }

    @Override
    public List<String> getDescription() {
        return Arrays.asList(LocalizationUtils.splitLocalizedStringLines("fancymenu.helper.editor.items.visibilityrequirements.windowwidthbiggerthan.desc", Minecraft.getInstance().getWindow().getWidth() + "", Minecraft.getInstance().getWindow().getHeight() + ""));
    }

    @Override
    public String getCategory() {
        return I18n.get("fancymenu.editor.loading_requirement.category.window");
    }

    @Override
    public String getValueDisplayName() {
        return I18n.get("fancymenu.helper.editor.items.visibilityrequirements.windowwidthbiggerthan.valuename");
    }

    @Override
    public String getValuePreset() {
        return "1920";
    }

    @Override
    public List<TextEditorFormattingRule> getValueFormattingRules() {
        return null;
    }
}