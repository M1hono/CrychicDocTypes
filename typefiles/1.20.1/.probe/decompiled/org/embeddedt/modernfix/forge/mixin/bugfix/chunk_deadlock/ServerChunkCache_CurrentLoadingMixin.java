package org.embeddedt.modernfix.forge.mixin.bugfix.chunk_deadlock;

import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.reflect.Field;
import net.minecraft.server.level.ChunkHolder;
import net.minecraft.server.level.ServerChunkCache;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.chunk.ChunkAccess;
import net.minecraft.world.level.chunk.ChunkStatus;
import net.minecraft.world.level.chunk.LevelChunk;
import net.minecraftforge.fml.util.ObfuscationReflectionHelper;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(value = { ServerChunkCache.class }, priority = 1100)
public abstract class ServerChunkCache_CurrentLoadingMixin {

    private static final MethodHandle CURRENTLY_LOADING;

    @Shadow
    @Nullable
    protected abstract ChunkHolder getVisibleChunkIfPresent(long var1);

    @Inject(method = { "getChunk" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/server/level/ServerChunkCache;getChunkFutureMainThread(IILnet/minecraft/world/level/chunk/ChunkStatus;Z)Ljava/util/concurrent/CompletableFuture;") }, cancellable = true, require = 0)
    private void checkCurrentlyLoading(int chunkX, int chunkZ, ChunkStatus requiredStatus, boolean load, CallbackInfoReturnable<ChunkAccess> cir) {
        long i = ChunkPos.asLong(chunkX, chunkZ);
        ChunkHolder holder = this.getVisibleChunkIfPresent(i);
        if (holder != null) {
            LevelChunk c;
            try {
                c = (LevelChunk) CURRENTLY_LOADING.invokeExact(holder);
            } catch (Throwable var11) {
                var11.printStackTrace();
                c = null;
            }
            if (c != null) {
                cir.setReturnValue(c);
            }
        }
    }

    static {
        try {
            Field currentlyLoadingField = ObfuscationReflectionHelper.findField(ChunkHolder.class, "currentlyLoading");
            currentlyLoadingField.setAccessible(true);
            CURRENTLY_LOADING = MethodHandles.lookup().unreflectGetter(currentlyLoadingField);
        } catch (Exception var1) {
            throw new RuntimeException("Failed to get currentlyLoading field", var1);
        }
    }
}