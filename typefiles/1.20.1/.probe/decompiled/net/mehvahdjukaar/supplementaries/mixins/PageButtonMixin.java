package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.api.IAntiqueTextProvider;
import net.mehvahdjukaar.supplementaries.reg.ModTextures;
import net.minecraft.client.gui.screens.inventory.PageButton;
import net.minecraft.resources.ResourceLocation;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;

@Mixin({ PageButton.class })
public abstract class PageButtonMixin implements IAntiqueTextProvider {

    @Unique
    private boolean supplementaries$antiqueInk;

    @Override
    public boolean hasAntiqueInk() {
        return this.supplementaries$antiqueInk;
    }

    @Override
    public void setAntiqueInk(boolean hasInk) {
        this.supplementaries$antiqueInk = hasInk;
    }

    @ModifyArg(method = { "renderWidget" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/GuiGraphics;blit(Lnet/minecraft/resources/ResourceLocation;IIIIII)V"))
    ResourceLocation setTatteredBookTexture(ResourceLocation res) {
        return this.supplementaries$antiqueInk ? ModTextures.TATTERED_BOOK_GUI_TEXTURE : res;
    }
}