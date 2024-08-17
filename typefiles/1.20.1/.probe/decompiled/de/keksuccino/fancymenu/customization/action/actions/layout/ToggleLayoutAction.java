package de.keksuccino.fancymenu.customization.action.actions.layout;

import de.keksuccino.fancymenu.customization.action.Action;
import de.keksuccino.fancymenu.customization.layout.Layout;
import de.keksuccino.fancymenu.customization.layout.LayoutHandler;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ToggleLayoutAction extends Action {

    public ToggleLayoutAction() {
        super("toggle_layout");
    }

    @Override
    public boolean hasValue() {
        return true;
    }

    @Override
    public void execute(@Nullable String value) {
        if (value != null) {
            Layout l = LayoutHandler.getLayout(value);
            if (l != null) {
                l.setEnabled(!l.isEnabled(), true);
            }
        }
    }

    @NotNull
    @Override
    public Component getActionDisplayName() {
        return Component.translatable("fancymenu.helper.buttonaction.toggle_layout");
    }

    @NotNull
    @Override
    public Component[] getActionDescription() {
        return LocalizationUtils.splitLocalizedLines("fancymenu.helper.buttonaction.toggle_layout.desc");
    }

    @Override
    public Component getValueDisplayName() {
        return Component.translatable("fancymenu.helper.buttonaction.toggle_layout.value.desc");
    }

    @Override
    public String getValueExample() {
        return "my_cool_main_menu_layout";
    }
}