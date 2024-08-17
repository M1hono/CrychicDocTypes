package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.taxes.ITaxCollector;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.TraderStorageClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.ScrollListener;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.scroll.IScrollable;
import io.github.lightman314.lightmanscurrency.client.gui.widget.scroll.ScrollBarWidget;
import io.github.lightman314.lightmanscurrency.client.gui.widget.taxes.ITaxInfoInteractable;
import io.github.lightman314.lightmanscurrency.client.gui.widget.taxes.TaxInfoWidget;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.client.util.TextRenderUtil;
import io.github.lightman314.lightmanscurrency.common.menus.traderstorage.TaxInfoTab;
import io.github.lightman314.lightmanscurrency.common.player.LCAdminMode;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.Nullable;

public class TaxInfoClientTab extends TraderStorageClientTab<TaxInfoTab> implements IScrollable, ITaxInfoInteractable {

    public static final int DISPLAY_ENTRIES = 4;

    private int scroll = 0;

    public TaxInfoClientTab(Object screen, TaxInfoTab commonTab) {
        super(screen, commonTab);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconAndButtonUtil.ICON_TAXES;
    }

    @Nullable
    @Override
    public Component getTooltip() {
        return LCText.TOOLTIP_TRADER_TAXES.get();
    }

    @Override
    protected void initialize(ScreenArea screenArea, boolean firstOpen) {
        for (int i = 0; i < 4; i++) {
            int index = i;
            this.addChild(new TaxInfoWidget(screenArea.pos.offset(15, 30 * i + 20), () -> this.getEntryOfIndex(index), this));
        }
        this.addChild(new ScrollListener(screenArea.ofSize(screenArea.width, 120).atPosition(screenArea.pos.offset(0, 10)), this));
        this.addChild(new ScrollBarWidget(screenArea.pos.offset(191, 20), 120, this));
        this.menu.SetCoinSlotsActive(false);
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        TraderData trader = this.getTrader();
        if (trader != null) {
            TextRenderUtil.drawCenteredText(gui, LCText.GUI_TRADER_TAXES_TOTAL_RATE.get(trader.getTotalTaxPercentage()), this.screen.getXSize() / 2, 6, 4210752);
            if (trader.getPossibleTaxes().isEmpty()) {
                TextRenderUtil.drawCenteredMultilineText(gui, LCText.GUI_TRADER_TAXES_NO_TAX_COLLECTORS.get(), 10, this.screen.getXSize() - 20, 60, 4210752);
            }
        }
    }

    private List<ITaxCollector> getAllEntries() {
        TraderData trader = this.menu.getTrader();
        return (List<ITaxCollector>) (trader != null ? trader.getPossibleTaxes() : new ArrayList());
    }

    @Nullable
    private ITaxCollector getEntryOfIndex(int index) {
        List<ITaxCollector> entries = this.getAllEntries();
        index += this.scroll;
        return index >= 0 && index < entries.size() ? (ITaxCollector) entries.get(index) : null;
    }

    @Override
    protected void closeAction() {
        this.menu.SetCoinSlotsActive(true);
    }

    @Override
    public void tick() {
        this.validateScroll();
    }

    @Nullable
    @Override
    public TraderData getTrader() {
        return this.menu.getTrader();
    }

    @Override
    public boolean canPlayerForceIgnore() {
        return LCAdminMode.isAdminPlayer(this.menu.getPlayer());
    }

    @Override
    public void AcceptTaxCollector(long taxEntryID) {
        this.commonTab.AcceptTaxes(taxEntryID);
    }

    @Override
    public void ForceIgnoreTaxCollector(long taxEntryID) {
        this.commonTab.ForceIgnoreTaxCollector(taxEntryID);
    }

    @Override
    public void PardonIgnoredTaxCollector(long taxEntryID) {
        this.commonTab.PardonIgnoredTaxCollector(taxEntryID);
    }

    @Override
    public int currentScroll() {
        return this.scroll;
    }

    @Override
    public void setScroll(int newScroll) {
        this.scroll = newScroll;
    }

    @Override
    public int getMaxScroll() {
        return IScrollable.calculateMaxScroll(4, this.getAllEntries().size());
    }
}