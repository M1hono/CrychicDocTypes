package net.mehvahdjukaar.moonlight.core.mixins.forge;

import java.util.function.Consumer;
import net.mehvahdjukaar.moonlight.api.client.ICustomItemRendererProvider;
import net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer;
import net.minecraft.world.item.Item;
import net.minecraftforge.client.extensions.common.IClientItemExtensions;
import net.minecraftforge.common.util.NonNullLazy;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ Item.class })
public abstract class ItemMixin {

    @Inject(remap = false, method = { "initializeClient" }, at = { @At("HEAD") })
    public void initializeClient(Consumer<IClientItemExtensions> consumer, CallbackInfo ci) {
        if (this instanceof ICustomItemRendererProvider provider) {
            consumer.accept(new IClientItemExtensions() {

                final NonNullLazy<BlockEntityWithoutLevelRenderer> renderer = NonNullLazy.of(provider.getRendererFactory()::get);

                @Override
                public BlockEntityWithoutLevelRenderer getCustomRenderer() {
                    return this.renderer.get();
                }
            });
        }
    }
}