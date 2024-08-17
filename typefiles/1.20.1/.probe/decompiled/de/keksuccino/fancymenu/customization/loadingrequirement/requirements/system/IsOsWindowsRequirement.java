package de.keksuccino.fancymenu.customization.loadingrequirement.requirements.system;

import de.keksuccino.fancymenu.customization.loadingrequirement.LoadingRequirement;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.rendering.ui.screen.texteditor.TextEditorFormattingRule;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import javax.annotation.Nullable;
import net.minecraft.client.resources.language.I18n;
import org.jetbrains.annotations.NotNull;

public class IsOsWindowsRequirement extends LoadingRequirement {

    public IsOsWindowsRequirement() {
        super("fancymenu_loading_requirement_is_os_windows");
    }

    @Override
    public boolean hasValue() {
        return false;
    }

    @Override
    public boolean isRequirementMet(@Nullable String value) {
        return isWindows();
    }

    protected static boolean isWindows() {
        String s = System.getProperty("os.name").toLowerCase(Locale.ROOT);
        return s.contains("win");
    }

    @NotNull
    @Override
    public String getDisplayName() {
        return I18n.get("fancymenu.helper.editor.items.visibilityrequirements.oswindows");
    }

    @Override
    public List<String> getDescription() {
        return Arrays.asList(LocalizationUtils.splitLocalizedStringLines("fancymenu.helper.editor.items.visibilityrequirements.oswindows.desc"));
    }

    @Override
    public String getCategory() {
        return I18n.get("fancymenu.editor.loading_requirement.category.system");
    }

    @Override
    public String getValueDisplayName() {
        return null;
    }

    @Override
    public String getValuePreset() {
        return null;
    }

    @Override
    public List<TextEditorFormattingRule> getValueFormattingRules() {
        return null;
    }
}