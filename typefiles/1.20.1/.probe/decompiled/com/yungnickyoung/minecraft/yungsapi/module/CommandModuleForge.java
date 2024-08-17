package com.yungnickyoung.minecraft.yungsapi.module;

import com.mojang.brigadier.CommandDispatcher;
import com.yungnickyoung.minecraft.yungsapi.api.autoregister.AutoRegisterCommand;
import com.yungnickyoung.minecraft.yungsapi.autoregister.AutoRegisterField;
import com.yungnickyoung.minecraft.yungsapi.autoregister.AutoRegistrationManager;
import net.minecraft.commands.CommandBuildContext;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.RegisterCommandsEvent;

public class CommandModuleForge {

    public static void processEntries() {
        MinecraftForge.EVENT_BUS.addListener(CommandModuleForge::registerCommands);
    }

    private static void registerCommands(RegisterCommandsEvent event) {
        AutoRegistrationManager.COMMANDS.stream().forEach(data -> registerCommand(data, event.getDispatcher(), event.getBuildContext(), event.getCommandSelection()));
    }

    private static void registerCommand(AutoRegisterField data, CommandDispatcher<CommandSourceStack> dispatcher, CommandBuildContext context, Commands.CommandSelection selection) {
        AutoRegisterCommand autoRegisterCommand = (AutoRegisterCommand) data.object();
        autoRegisterCommand.invokeHandler(dispatcher, context, selection);
    }
}