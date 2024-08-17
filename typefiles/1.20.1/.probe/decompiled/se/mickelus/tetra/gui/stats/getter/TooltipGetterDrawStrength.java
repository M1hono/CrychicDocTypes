package se.mickelus.tetra.gui.stats.getter;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import se.mickelus.tetra.items.modular.impl.bow.ModularBowItem;
import se.mickelus.tetra.properties.TetraAttributes;

@ParametersAreNonnullByDefault
public class TooltipGetterDrawStrength implements ITooltipGetter {

    private final IStatGetter damageGetter;

    private final IStatGetter strengthGetter;

    public TooltipGetterDrawStrength(IStatGetter damageGetter) {
        this.damageGetter = damageGetter;
        this.strengthGetter = new StatGetterAttribute(TetraAttributes.drawStrength.get());
    }

    @Override
    public String getTooltipBase(Player player, ItemStack itemStack) {
        double baseDamage = this.damageGetter.getValue(player, itemStack);
        double strength = this.strengthGetter.getValue(player, itemStack);
        return I18n.get("tetra.stats.draw_strength.tooltip", String.format("%.1f", baseDamage), String.format("%.1f", 1.5 * baseDamage + 1.0), String.format("%.1f", 3.0F * ModularBowItem.getArrowVelocity(20, strength, 0.0F, false)));
    }

    @Override
    public boolean hasExtendedTooltip(Player player, ItemStack itemStack) {
        return true;
    }

    @Override
    public String getTooltipExtension(Player player, ItemStack itemStack) {
        return I18n.get("tetra.stats.draw_strength.tooltip_extended");
    }
}