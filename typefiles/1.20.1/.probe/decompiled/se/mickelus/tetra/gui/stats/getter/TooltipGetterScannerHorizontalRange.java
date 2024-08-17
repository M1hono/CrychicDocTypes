package se.mickelus.tetra.gui.stats.getter;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import se.mickelus.tetra.items.modular.impl.holo.gui.scan.ScannerBarGui;

@ParametersAreNonnullByDefault
public class TooltipGetterScannerHorizontalRange implements ITooltipGetter {

    private final IStatGetter levelGetter;

    public TooltipGetterScannerHorizontalRange(IStatGetter levelGetter) {
        this.levelGetter = levelGetter;
    }

    @Override
    public String getTooltipBase(Player player, ItemStack itemStack) {
        return I18n.get("tetra.stats.holo.sweeperHorizontalSpread.tooltip", String.format("%.0f", this.levelGetter.getValue(player, itemStack)), String.format("%.1f", ScannerBarGui.getDegreesPerUnit()));
    }
}