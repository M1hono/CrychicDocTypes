package org.violetmoon.quark.content.tweaks.compat;

import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.items.IItemHandlerModifiable;
import org.violetmoon.quark.addons.oddities.entity.TotemOfHoldingEntity;
import top.theillusivec4.curios.api.CuriosApi;
import top.theillusivec4.curios.api.type.capability.ICuriosItemHandler;

public class TotemOfHoldingCuriosCompat {

    public static ItemStack equipCurios(Player player, List<ItemStack> equipedCurios, ItemStack stack) {
        Optional<ICuriosItemHandler> curiosApi = CuriosApi.getCuriosInventory(player).resolve();
        if (curiosApi.isPresent()) {
            for (int j = 0; j < equipedCurios.size(); j++) {
                ItemStack curiosItem = (ItemStack) equipedCurios.get(j);
                if (stack.is(curiosItem.getItem())) {
                    IItemHandlerModifiable curiosSlot = ((ICuriosItemHandler) curiosApi.get()).getEquippedCurios();
                    if (curiosSlot.getStackInSlot(j).isEmpty()) {
                        curiosSlot.setStackInSlot(j, stack);
                        return null;
                    }
                }
            }
        }
        return stack;
    }

    public static void saveCurios(Player player, TotemOfHoldingEntity totem) {
        Optional<ICuriosItemHandler> curiosApi = CuriosApi.getCuriosInventory(player).resolve();
        curiosApi.ifPresent(iCuriosItemHandler -> iCuriosItemHandler.getCurios().forEach((a, b) -> IntStream.range(0, b.getStacks().getSlots()).mapToObj(i -> b.getStacks().getPreviousStackInSlot(i)).forEach(totem::addCurios)));
    }
}