package de.keksuccino.fancymenu.mixin.mixins.common.client;

import com.llamalad7.mixinextras.injector.WrapWithCondition;
import de.keksuccino.fancymenu.customization.ScreenCustomization;
import de.keksuccino.fancymenu.util.rendering.ui.widget.TextWidget;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.ReceivingLevelScreen;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;

@Mixin({ ReceivingLevelScreen.class })
public class MixinReceivingLevelScreen extends Screen {

    @Unique
    private static final Component DOWNLOADING_TERRAIN_TEXT_FANCYMENU = Component.translatable("multiplayer.downloadingTerrain");

    protected MixinReceivingLevelScreen(Component $$0) {
        super($$0);
    }

    @Override
    protected void init() {
        ((TextWidget) this.m_142416_(TextWidget.of(DOWNLOADING_TERRAIN_TEXT_FANCYMENU, 0, this.f_96544_ / 2 - 50, 200))).centerWidget(this).setTextAlignment(TextWidget.TextAlignment.CENTER).setWidgetIdentifierFancyMenu("downloading_terrain");
    }

    @WrapWithCondition(method = { "render" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/GuiGraphics;drawCenteredString(Lnet/minecraft/client/gui/Font;Lnet/minecraft/network/chat/Component;III)V") })
    private boolean wrapDrawCenteredStringInRenderFancyMenu(GuiGraphics instance, Font $$0, Component $$1, int $$2, int $$3, int $$4) {
        return !ScreenCustomization.isCustomizationEnabledForScreen(this);
    }
}