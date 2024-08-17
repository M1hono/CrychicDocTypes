package de.keksuccino.fancymenu.mixin.mixins.common.client;

import com.llamalad7.mixinextras.injector.WrapWithCondition;
import de.keksuccino.fancymenu.customization.ScreenCustomization;
import de.keksuccino.fancymenu.util.rendering.ui.widget.RendererWidget;
import de.keksuccino.fancymenu.util.rendering.ui.widget.TextWidget;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.LevelLoadingScreen;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.progress.StoringChunkProgressListener;
import org.jetbrains.annotations.NotNull;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ LevelLoadingScreen.class })
public abstract class MixinLevelLoadingScreen extends Screen {

    @Shadow
    @Final
    private StoringChunkProgressListener progressListener;

    @Unique
    private TextWidget percentageTextFancyMenu;

    @Unique
    private RendererWidget chunkRendererFancyMenu;

    protected MixinLevelLoadingScreen(Component component) {
        super(component);
    }

    @Override
    protected void init() {
        if (this.isCustomizableFancyMenu()) {
            this.chunkRendererFancyMenu = ((RendererWidget) this.m_142416_(new RendererWidget(this.f_96543_ / 2 - 50, this.f_96544_ / 2 + 30 - 50, 100, 100, (graphics, mouseX, mouseY, partial, x, y, width1, height1, renderer) -> this.renderChunkBoxFancyMenu(graphics, x + 50, y + 50, this.progressListener)))).setWidgetIdentifierFancyMenu("chunks");
            this.percentageTextFancyMenu = ((TextWidget) this.m_142416_(TextWidget.of(Component.literal("0%"), 0, this.f_96544_ / 2 - 30 - 4, 200))).setTextAlignment(TextWidget.TextAlignment.CENTER).centerWidget(this).setWidgetIdentifierFancyMenu("percentage");
        } else {
            this.chunkRendererFancyMenu = null;
            this.percentageTextFancyMenu = null;
        }
    }

    @WrapWithCondition(method = { "render" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/LevelLoadingScreen;renderChunks(Lnet/minecraft/client/gui/GuiGraphics;Lnet/minecraft/server/level/progress/StoringChunkProgressListener;IIII)V") })
    private boolean wrapRenderChunksFancyMenu(GuiGraphics $$0, StoringChunkProgressListener $$1, int $$2, int $$3, int $$4, int $$5) {
        return !this.isCustomizableFancyMenu();
    }

    @WrapWithCondition(method = { "render" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/GuiGraphics;drawCenteredString(Lnet/minecraft/client/gui/Font;Ljava/lang/String;III)V") })
    private boolean wrapRenderPercentStringFancyMenu(GuiGraphics instance, Font $$0, String $$1, int $$2, int $$3, int $$4) {
        return !this.isCustomizableFancyMenu();
    }

    @Inject(method = { "render" }, at = { @At("RETURN") })
    private void afterRenderFancyMenu(GuiGraphics graphics, int mouseX, int mouseY, float partial, CallbackInfo info) {
        if (this.isCustomizableFancyMenu()) {
            if (this.chunkRendererFancyMenu != null) {
                this.chunkRendererFancyMenu.m_88315_(graphics, mouseX, mouseY, partial);
            }
            if (this.percentageTextFancyMenu != null) {
                this.percentageTextFancyMenu.m_93666_(Component.literal(this.getFormattedProgress()));
                this.percentageTextFancyMenu.m_88315_(graphics, mouseX, mouseY, partial);
            }
        }
    }

    @Unique
    private void renderChunkBoxFancyMenu(@NotNull GuiGraphics graphics, int xCenter, int yCenter, StoringChunkProgressListener listener) {
        LevelLoadingScreen.renderChunks(graphics, listener, xCenter, yCenter, 2, 0);
    }

    @Unique
    private boolean isCustomizableFancyMenu() {
        return ScreenCustomization.isCustomizationEnabledForScreen(this);
    }

    @Shadow
    protected abstract String getFormattedProgress();
}