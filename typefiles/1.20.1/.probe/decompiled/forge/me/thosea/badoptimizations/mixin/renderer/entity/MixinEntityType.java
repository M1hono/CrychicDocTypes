package forge.me.thosea.badoptimizations.mixin.renderer.entity;

import forge.me.thosea.badoptimizations.interfaces.EntityTypeMethods;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.world.entity.EntityType;
import org.spongepowered.asm.mixin.Mixin;

@Mixin({ EntityType.class })
public class MixinEntityType implements EntityTypeMethods {

    private EntityRenderer<?> bo$renderer;

    @Override
    public EntityRenderer<?> bo$getRenderer() {
        return this.bo$renderer;
    }

    @Override
    public void bo$setRenderer(EntityRenderer<?> renderer) {
        this.bo$renderer = renderer;
    }
}