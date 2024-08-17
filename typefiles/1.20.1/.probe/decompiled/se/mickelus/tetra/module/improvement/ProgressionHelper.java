package se.mickelus.tetra.module.improvement;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.world.item.ItemStack;

@ParametersAreNonnullByDefault
public class ProgressionHelper {

    public static void showHoneToastClient(ItemStack itemStack) {
        Minecraft.getInstance().getToasts().addToast(new HoneToast(itemStack));
    }

    public static void showSettleToastClient(ItemStack itemStack, String slot) {
        Minecraft.getInstance().getToasts().addToast(new SettleToast(itemStack, slot));
    }
}