package harmonised.pmmo.mixin;

import harmonised.pmmo.storage.ChunkDataProvider;
import java.util.Set;
import java.util.UUID;
import javax.annotation.Nullable;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.level.BlockEvent;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ Level.class })
public class ServerLevelMixin {

    @Inject(method = { "destroyBlock(Lnet/minecraft/core/BlockPos;ZLnet/minecraft/world/entity/Entity;I)Z" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/world/level/Level;setBlock(Lnet/minecraft/core/BlockPos;Lnet/minecraft/world/level/block/state/BlockState;II)Z") })
    public void setBlockInvocation(BlockPos pos, boolean boolean0, @Nullable Entity entity, int int1, CallbackInfoReturnable<?> ci) {
        if ((Level) this instanceof ServerLevel) {
            execute(pos, (Level) this);
        }
    }

    private static void execute(BlockPos pos, Level level) {
        BlockState state = level.getBlockState(pos);
        level.getChunkAt(pos).getCapability(ChunkDataProvider.CHUNK_CAP).ifPresent(cap -> {
            for (BlockPos neighbor : getNeighbors(pos)) {
                UUID playerID = cap.getBreaker(neighbor);
                if (playerID != null) {
                    Player player = level.getServer().getPlayerList().getPlayer(playerID);
                    MinecraftForge.EVENT_BUS.post(new BlockEvent.BreakEvent(level, pos, state, player));
                    cap.setBreaker(pos, playerID);
                    break;
                }
            }
        });
    }

    private static Set<BlockPos> getNeighbors(BlockPos src) {
        return Set.of(src.above(), src.below(), src.north(), src.south(), src.west(), src.east());
    }
}