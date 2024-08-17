package se.mickelus.tetra.gui.stats.getter;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import se.mickelus.tetra.effect.ItemEffect;

@ParametersAreNonnullByDefault
public class TooltipGetterFierySelf implements ITooltipGetter {

    private static final IStatGetter efficiencyGetter = new StatGetterEffectEfficiency(ItemEffect.fierySelf, 100.0);

    private static final IStatGetter levelGetter = new StatGetterEffectLevel(ItemEffect.fierySelf, 1.0);

    @Override
    public String getTooltipBase(Player player, ItemStack itemStack) {
        return I18n.get("tetra.stats.fierySelf.tooltip", String.format("%.2f%%", efficiencyGetter.getValue(player, itemStack)), String.format("%.2f", levelGetter.getValue(player, itemStack)));
    }
}