package org.embeddedt.modernfix.common.mixin.core;

import net.minecraft.network.syncher.SynchedEntityData;
import net.minecraft.world.entity.Entity;
import org.embeddedt.modernfix.ModernFixClient;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ SynchedEntityData.class })
@ClientOnlyMixin
public class SynchedEntityDataMixin {

    @Inject(method = { "<init>" }, at = { @At("RETURN") })
    private void storeInSet(Entity arg, CallbackInfo ci) {
        synchronized (ModernFixClient.allEntityDatas) {
            ModernFixClient.allEntityDatas.add((SynchedEntityData) this);
        }
    }
}