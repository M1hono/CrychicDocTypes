package de.keksuccino.fancymenu.customization.action.actions.level;

import de.keksuccino.fancymenu.customization.action.Action;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.GenericDirtMessageScreen;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class EnterWorldAction extends Action {

    public EnterWorldAction() {
        super("loadworld");
    }

    @Override
    public boolean hasValue() {
        return true;
    }

    @Override
    public void execute(@Nullable String value) {
        if (value != null && Minecraft.getInstance().getLevelSource().levelExists(value) && Minecraft.getInstance().screen != null) {
            Minecraft.getInstance().forceSetScreen(new GenericDirtMessageScreen(Component.translatable("selectWorld.data_read")));
            Minecraft.getInstance().createWorldOpenFlows().loadLevel(Minecraft.getInstance().screen, value);
        }
    }

    @NotNull
    @Override
    public Component getActionDisplayName() {
        return Component.translatable("fancymenu.editor.custombutton.config.actiontype.loadworld");
    }

    @NotNull
    @Override
    public Component[] getActionDescription() {
        return LocalizationUtils.splitLocalizedLines("fancymenu.editor.custombutton.config.actiontype.loadworld.desc");
    }

    @Override
    public Component getValueDisplayName() {
        return Component.translatable("fancymenu.editor.custombutton.config.actiontype.loadworld.desc.value");
    }

    @Override
    public String getValueExample() {
        return "exampleworld";
    }
}