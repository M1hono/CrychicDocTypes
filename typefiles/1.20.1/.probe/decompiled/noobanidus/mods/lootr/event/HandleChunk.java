package noobanidus.mods.lootr.event;

import it.unimi.dsi.fastutil.objects.Object2ObjectLinkedOpenHashMap;
import it.unimi.dsi.fastutil.objects.ObjectLinkedOpenHashSet;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.chunk.ChunkAccess;
import net.minecraft.world.level.chunk.ChunkStatus;
import net.minecraft.world.level.chunk.LevelChunk;
import net.minecraftforge.event.level.ChunkEvent;
import net.minecraftforge.event.server.ServerAboutToStartEvent;
import net.minecraftforge.event.server.ServerStoppedEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;

@EventBusSubscriber(modid = "lootr")
public class HandleChunk {

    public static final Map<ResourceKey<Level>, Set<ChunkPos>> LOADED_CHUNKS = Collections.synchronizedMap(new Object2ObjectLinkedOpenHashMap());

    @SubscribeEvent
    public static void onChunkLoad(ChunkEvent.Load event) {
        if (!event.getLevel().m_5776_()) {
            ChunkAccess chunk = event.getChunk();
            if (chunk.getStatus().isOrAfter(ChunkStatus.FULL) && chunk instanceof LevelChunk lChunk) {
                synchronized (LOADED_CHUNKS) {
                    Set<ChunkPos> chunkSet = (Set<ChunkPos>) LOADED_CHUNKS.computeIfAbsent(lChunk.getLevel().dimension(), k -> Collections.synchronizedSet(new ObjectLinkedOpenHashSet()));
                    chunkSet.add(chunk.getPos());
                }
            }
        }
    }

    @SubscribeEvent
    public static void onServerStarted(ServerAboutToStartEvent event) {
        synchronized (LOADED_CHUNKS) {
            LOADED_CHUNKS.clear();
        }
    }

    @SubscribeEvent
    public static void onServerStopped(ServerStoppedEvent event) {
        synchronized (LOADED_CHUNKS) {
            LOADED_CHUNKS.clear();
        }
    }
}