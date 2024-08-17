package net.mehvahdjukaar.supplementaries.common.entities.dispenser_minecart;

import net.mehvahdjukaar.supplementaries.common.network.ClientBoundParticlePacket;
import net.mehvahdjukaar.supplementaries.common.network.ModNetwork;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.phys.Vec3;

public interface ILevelEventRedirect {

    void setRedirected(boolean var1, Vec3 var2);

    static boolean tryRedirect(ILevelEventRedirect serverLevel, Player pPlayer, Vec3 vec3, int pType, BlockPos pPos, int pData) {
        if (pType == 2000) {
            ModNetwork.CHANNEL.sendToAllClientPlayersInRange((ServerLevel) serverLevel, pPos, 64.0, new ClientBoundParticlePacket(vec3, ClientBoundParticlePacket.EventType.DISPENSER_MINECART));
            return true;
        } else {
            return false;
        }
    }
}