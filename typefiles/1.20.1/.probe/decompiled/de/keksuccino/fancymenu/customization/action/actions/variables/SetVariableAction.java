package de.keksuccino.fancymenu.customization.action.actions.variables;

import de.keksuccino.fancymenu.customization.action.Action;
import de.keksuccino.fancymenu.customization.variables.VariableHandler;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;

public class SetVariableAction extends Action {

    public SetVariableAction() {
        super("set_variable");
    }

    @Override
    public boolean hasValue() {
        return true;
    }

    @Override
    public void execute(String value) {
        if (value != null && value.contains(":")) {
            String name = value.split(":", 2)[0];
            String val = value.split(":", 2)[1];
            VariableHandler.setVariable(name, val);
        }
    }

    @NotNull
    @Override
    public Component getActionDisplayName() {
        return Component.translatable("fancymenu.helper.buttonaction.variables.set");
    }

    @NotNull
    @Override
    public Component[] getActionDescription() {
        return LocalizationUtils.splitLocalizedLines("fancymenu.helper.buttonaction.variables.set.desc");
    }

    @Override
    public Component getValueDisplayName() {
        return Component.translatable("fancymenu.helper.buttonaction.variables.set.value.desc");
    }

    @Override
    public String getValueExample() {
        return "cool_variable_name:some_value";
    }
}