package org.embeddedt.modernfix.common.mixin.bugfix.world_screen_skipped;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.worldselection.CreateWorldScreen;
import net.minecraft.client.gui.screens.worldselection.WorldSelectionList;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.At.Shift;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ WorldSelectionList.WorldListEntry.class })
@ClientOnlyMixin
public class WorldSelectionListMixin {

    @Shadow
    @Final
    private Minecraft minecraft;

    @Inject(method = { "*" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/worldselection/WorldSelectionList$WorldListEntry;doDeleteWorld()V", ordinal = 0, shift = Shift.AFTER) }, cancellable = true)
    private void preventClosingCreateScreenAfterDelete(CallbackInfo ci) {
        if (this.minecraft.screen instanceof CreateWorldScreen) {
            ci.cancel();
        }
    }
}