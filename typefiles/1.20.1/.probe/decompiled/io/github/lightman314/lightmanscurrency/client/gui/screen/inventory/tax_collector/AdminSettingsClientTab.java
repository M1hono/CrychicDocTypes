package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.tax_collector;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.common.menus.tax_collector.TaxCollectorClientTab;
import io.github.lightman314.lightmanscurrency.common.menus.tax_collector.tabs.AdminTab;
import io.github.lightman314.lightmanscurrency.common.taxes.TaxEntry;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Items;
import org.jetbrains.annotations.Nullable;

public class AdminSettingsClientTab extends TaxCollectorClientTab<AdminTab> {

    public AdminSettingsClientTab(Object screen, AdminTab commonTab) {
        super(screen, commonTab);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconData.of(Items.COMMAND_BLOCK);
    }

    @Nullable
    @Override
    public Component getTooltip() {
        return LCText.TOOLTIP_TAX_COLLECTOR_ADMIN_ONLY.get();
    }

    @Override
    protected void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.addChild(IconAndButtonUtil.checkmarkButton(screenArea.pos.offset(8, 32), b -> this.commonTab.SetForceAcceptance(!this.getCurrentForceAcceptance()), this::getCurrentForceAcceptance));
        this.addChild(IconAndButtonUtil.checkmarkButton(screenArea.pos.offset(8, 42), b -> this.commonTab.SetInfiniteRange(!this.getCurrentInfiniteRange()), this::getCurrentInfiniteRange));
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        gui.drawString(this.getTooltip(), 8, 6, 4210752);
        gui.drawString(LCText.GUI_TAX_COLLECTOR_FORCE_ACCEPTANCE.get(), 20, 34, 4210752);
        gui.drawString(LCText.GUI_TAX_COLLECTOR_INFINITE_RANGE.get(), 20, 44, 4210752);
    }

    private boolean getCurrentForceAcceptance() {
        TaxEntry entry = this.getEntry();
        return entry != null && entry.forcesAcceptance();
    }

    private boolean getCurrentInfiniteRange() {
        TaxEntry entry = this.getEntry();
        return entry != null && entry.isInfiniteRange();
    }
}