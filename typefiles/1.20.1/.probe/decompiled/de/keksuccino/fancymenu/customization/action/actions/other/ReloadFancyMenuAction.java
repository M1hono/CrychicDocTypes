package de.keksuccino.fancymenu.customization.action.actions.other;

import de.keksuccino.fancymenu.customization.ScreenCustomization;
import de.keksuccino.fancymenu.customization.action.Action;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ReloadFancyMenuAction extends Action {

    public ReloadFancyMenuAction() {
        super("reloadmenu");
    }

    @Override
    public boolean hasValue() {
        return false;
    }

    @Override
    public void execute(@Nullable String value) {
        ScreenCustomization.reloadFancyMenu();
    }

    @NotNull
    @Override
    public Component getActionDisplayName() {
        return Component.translatable("fancymenu.editor.custombutton.config.actiontype.reloadmenu");
    }

    @NotNull
    @Override
    public Component[] getActionDescription() {
        return LocalizationUtils.splitLocalizedLines("fancymenu.editor.custombutton.config.actiontype.reloadmenu.desc");
    }

    @Override
    public Component getValueDisplayName() {
        return null;
    }

    @Override
    public String getValueExample() {
        return null;
    }
}