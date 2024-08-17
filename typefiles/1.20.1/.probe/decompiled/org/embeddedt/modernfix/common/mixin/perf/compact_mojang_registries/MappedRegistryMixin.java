package org.embeddedt.modernfix.common.mixin.perf.compact_mojang_registries;

import com.mojang.serialization.Lifecycle;
import java.util.Map;
import net.minecraft.core.MappedRegistry;
import org.embeddedt.modernfix.annotation.IgnoreOutsideDev;
import org.embeddedt.modernfix.registry.LifecycleMap;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ MappedRegistry.class })
@IgnoreOutsideDev
public abstract class MappedRegistryMixin<T> {

    @Shadow
    @Final
    @Mutable
    private Map<T, Lifecycle> lifecycles;

    @Inject(method = { "<init>" }, at = { @At("RETURN") })
    private void replaceStorage(CallbackInfo ci) {
        this.lifecycles = new LifecycleMap();
    }
}