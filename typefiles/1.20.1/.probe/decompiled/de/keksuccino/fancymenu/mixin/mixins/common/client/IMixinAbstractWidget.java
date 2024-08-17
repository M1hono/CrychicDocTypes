package de.keksuccino.fancymenu.mixin.mixins.common.client;

import net.minecraft.client.gui.components.AbstractWidget;
import net.minecraft.network.chat.Component;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ AbstractWidget.class })
public interface IMixinAbstractWidget {

    @Accessor("alpha")
    float getAlphaFancyMenu();

    @Accessor("height")
    void setHeightFancyMenu(int var1);

    @Accessor("message")
    void setMessageFieldFancyMenu(Component var1);
}