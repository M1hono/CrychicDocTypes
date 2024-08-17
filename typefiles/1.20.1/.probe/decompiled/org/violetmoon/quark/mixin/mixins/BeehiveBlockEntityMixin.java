package org.violetmoon.quark.mixin.mixins;

import com.llamalad7.mixinextras.injector.WrapWithCondition;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.animal.Bee;
import net.minecraft.world.level.block.entity.BeehiveBlockEntity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ BeehiveBlockEntity.class })
public class BeehiveBlockEntityMixin {

    @WrapWithCondition(method = { "writeBees", "removeIgnoredBeeTags" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/nbt/CompoundTag;remove(Ljava/lang/String;)V") })
    private static boolean doNotRemoveUUIDOfBees(CompoundTag instance, String key) {
        return !key.equals("UUID");
    }

    @Inject(method = { "setBeeReleaseData" }, at = { @At("HEAD") })
    private static void rerollUUIDIfNeeded(int ticksInHive, Bee bee, CallbackInfo ci) {
        if (bee.m_9236_() instanceof ServerLevel level && level.getEntities().get(bee.m_20148_()) != null) {
            bee.m_20084_(Mth.createInsecureUUID(level.f_46441_));
        }
    }
}