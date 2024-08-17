package forge.me.thosea.badoptimizations.mixin.accessor;

import net.minecraft.client.renderer.GameRenderer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ GameRenderer.class })
public interface GameRendererAccessor {

    @Accessor("skyDarkness")
    float bo$getSkyDarkness();
}