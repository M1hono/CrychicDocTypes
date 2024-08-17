package forge.me.thosea.badoptimizations.mixin.renderer.blockentity;

import forge.me.thosea.badoptimizations.interfaces.BlockEntityTypeMethods;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.world.level.block.entity.BlockEntityType;
import org.spongepowered.asm.mixin.Mixin;

@Mixin({ BlockEntityType.class })
public class MixinBlockEntityType implements BlockEntityTypeMethods {

    private BlockEntityRenderer<?> bo$renderer;

    @Override
    public BlockEntityRenderer<?> bo$getRenderer() {
        return this.bo$renderer;
    }

    @Override
    public void bo$setRenderer(BlockEntityRenderer<?> renderer) {
        this.bo$renderer = renderer;
    }
}