package net.mehvahdjukaar.modelfix.mixins;

import net.mehvahdjukaar.modelfix.ModelFixGeom;
import net.mehvahdjukaar.modelfix.PlatStuff;
import net.minecraft.client.renderer.texture.TextureAtlasSprite;
import net.minecraft.resources.ResourceLocation;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ TextureAtlasSprite.class })
public abstract class TextureAtlasSpriteMixin {

    @Shadow
    protected abstract float atlasSize();

    @Shadow
    public abstract ResourceLocation atlasLocation();

    @Inject(method = { "uvShrinkRatio" }, at = { @At("RETURN") }, cancellable = true)
    public void cancelShrink(CallbackInfoReturnable<Float> cir) {
        if (PlatStuff.isModStateValid()) {
            float newS = ModelFixGeom.getShrinkRatio(this.atlasLocation(), 4.0F / this.atlasSize(), cir.getReturnValueF());
            if (newS != -1.0F) {
                cir.setReturnValue(newS);
            }
        }
    }
}