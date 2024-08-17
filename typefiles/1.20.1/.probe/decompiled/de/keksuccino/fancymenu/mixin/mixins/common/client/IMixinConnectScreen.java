package de.keksuccino.fancymenu.mixin.mixins.common.client;

import net.minecraft.client.gui.screens.ConnectScreen;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Invoker;

@Mixin({ ConnectScreen.class })
public interface IMixinConnectScreen {

    @Invoker("<init>")
    static ConnectScreen invokeConstructFancyMenu(Screen parent, Component connectFailedTitle) {
        return null;
    }
}