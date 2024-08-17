package org.embeddedt.modernfix.common.mixin.bugfix.world_leaks;

import java.util.concurrent.atomic.AtomicReferenceArray;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.world.level.chunk.LevelChunk;
import net.minecraft.world.level.lighting.LevelLightEngine;
import org.embeddedt.modernfix.ModernFix;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ Minecraft.class })
@ClientOnlyMixin
public class MinecraftMixin {

    @Shadow
    @Nullable
    public ClientLevel level;

    @Inject(method = { "clearLevel(Lnet/minecraft/client/gui/screens/Screen;)V" }, at = { @At(value = "FIELD", opcode = 181, target = "Lnet/minecraft/client/Minecraft;level:Lnet/minecraft/client/multiplayer/ClientLevel;") })
    private void clearLevelDataForLeaks(CallbackInfo ci) {
        if (this.level != null) {
            try {
                AtomicReferenceArray<LevelChunk> chunks = this.level.getChunkSource().storage.chunks;
                for (int i = 0; i < chunks.length(); i++) {
                    chunks.set(i, null);
                }
                this.level.getChunkSource().lightEngine = new LevelLightEngine(this.level.getChunkSource(), false, false);
                this.level.f_151512_.clear();
            } catch (RuntimeException var4) {
                ModernFix.LOGGER.error("Exception clearing level data", var4);
            }
        }
    }
}