package de.keksuccino.fancymenu.commands;

import com.mojang.brigadier.CommandDispatcher;
import net.minecraft.commands.CommandSourceStack;
import org.jetbrains.annotations.NotNull;

public class Commands {

    public static void registerAll(@NotNull CommandDispatcher<CommandSourceStack> dispatcher) {
        CloseGuiScreenCommand.register(dispatcher);
        OpenGuiScreenCommand.register(dispatcher);
        VariableCommand.register(dispatcher);
    }
}