package org.violetmoon.quark.content.tweaks.compat;

import java.util.Optional;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.items.IItemHandlerModifiable;
import top.theillusivec4.curios.api.CuriosApi;
import top.theillusivec4.curios.api.type.capability.ICuriosItemHandler;

public class BetterElytraRocketCuriosCompat {

    public static boolean hasCuriosElytra(Player player) {
        Optional<ICuriosItemHandler> curiosApi = CuriosApi.getCuriosInventory(player).resolve();
        if (curiosApi.isPresent()) {
            IItemHandlerModifiable curios = ((ICuriosItemHandler) curiosApi.get()).getEquippedCurios();
            for (int slot = 0; slot < curios.getSlots(); slot++) {
                if (curios.getStackInSlot(slot).canElytraFly(player)) {
                    return true;
                }
            }
        }
        return false;
    }
}