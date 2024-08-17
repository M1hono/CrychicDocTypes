package malte0811.ferritecore.mixin.dedupbakedquad;

import net.minecraft.client.renderer.block.model.BakedQuad;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ BakedQuad.class })
public interface BakedQuadAccess {

    @Accessor
    @Mutable
    void setVertices(int[] var1);
}