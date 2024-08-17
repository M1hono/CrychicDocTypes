package se.mickelus.tetra.gui.stats.getter;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.enchantment.Enchantments;

@ParametersAreNonnullByDefault
public class TooltipGetterArthropod implements ITooltipGetter {

    private static final IStatGetter levelGetter = new StatGetterEnchantmentLevel(Enchantments.BANE_OF_ARTHROPODS, 1.0);

    @Override
    public String getTooltipBase(Player player, ItemStack itemStack) {
        return I18n.get("tetra.stats.arthropod.tooltip", String.format("%.2f", levelGetter.getValue(player, itemStack) * 2.5), String.format("%.2f", levelGetter.getValue(player, itemStack) * 0.5));
    }
}