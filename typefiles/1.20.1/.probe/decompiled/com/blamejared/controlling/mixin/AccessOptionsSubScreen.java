package com.blamejared.controlling.mixin;

import net.minecraft.client.gui.screens.OptionsSubScreen;
import net.minecraft.client.gui.screens.Screen;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ OptionsSubScreen.class })
public interface AccessOptionsSubScreen {

    @Accessor("lastScreen")
    Screen controlling$getLastScreen();
}