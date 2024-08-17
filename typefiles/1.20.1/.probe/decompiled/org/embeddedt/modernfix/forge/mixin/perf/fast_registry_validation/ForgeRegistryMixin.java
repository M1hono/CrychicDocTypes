package org.embeddedt.modernfix.forge.mixin.perf.fast_registry_validation;

import java.lang.reflect.Method;
import java.util.BitSet;
import net.minecraftforge.fml.util.ObfuscationReflectionHelper;
import net.minecraftforge.registries.ForgeRegistry;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.Marker;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.Redirect;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(value = { ForgeRegistry.class }, remap = false)
public class ForgeRegistryMixin<V> {

    private static Method bitSetTrimMethod = null;

    private static boolean bitSetTrimMethodRetrieved = false;

    private int expectedNextBit = -1;

    @Redirect(method = { "validateContent" }, at = @At(value = "INVOKE", target = "Lnet/minecraftforge/fml/util/ObfuscationReflectionHelper;findMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;"), require = 0)
    private Method skipMultipleRemap(Class<?> clz, String methodName, Class<?>[] params) {
        if (!bitSetTrimMethodRetrieved) {
            bitSetTrimMethodRetrieved = true;
            bitSetTrimMethod = ObfuscationReflectionHelper.findMethod(clz, methodName, params);
        }
        return bitSetTrimMethod;
    }

    @Redirect(method = { "add(ILnet/minecraft/resources/ResourceLocation;Ljava/lang/Object;Ljava/lang/String;)I" }, at = @At(value = "INVOKE", target = "Ljava/util/BitSet;nextClearBit(I)I"))
    private int useCachedBit(BitSet availabilityMap, int minimum) {
        int bit = availabilityMap.nextClearBit(this.expectedNextBit != -1 ? this.expectedNextBit : minimum);
        this.expectedNextBit = bit + 1;
        return bit;
    }

    @Inject(method = { "sync", "clear", "block" }, at = { @At("HEAD") })
    private void clearBitCache(CallbackInfo ci) {
        this.expectedNextBit = -1;
    }

    @Redirect(method = { "add(ILnet/minecraft/resources/ResourceLocation;Ljava/lang/Object;Ljava/lang/String;)I" }, at = @At(value = "INVOKE", target = "Lorg/apache/logging/log4j/Logger;trace(Lorg/apache/logging/log4j/Marker;Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V"))
    private void skipTrace(Logger logger, Marker marker, String s, Object o, Object o1, Object o2, Object o3, Object o4) {
    }
}