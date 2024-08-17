package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.auction;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.TraderStorageClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.trade.TradeButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyAddonHelper;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.client.util.TextRenderUtil;
import io.github.lightman314.lightmanscurrency.common.menus.traderstorage.auction.AuctionTradeCancelTab;
import io.github.lightman314.lightmanscurrency.common.traders.auction.tradedata.AuctionTradeData;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.MutableComponent;

public class AuctionTradeCancelClientTab extends TraderStorageClientTab<AuctionTradeCancelTab> {

    TradeButton tradeDisplay;

    EasyButton buttonCancelPlayerGive;

    EasyButton buttonCancelStorageGive;

    public AuctionTradeCancelClientTab(Object screen, AuctionTradeCancelTab commonTab) {
        super(screen, commonTab);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconData.BLANK;
    }

    public MutableComponent getTooltip() {
        return EasyText.empty();
    }

    @Override
    public boolean tabButtonVisible() {
        return false;
    }

    @Override
    public void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.tradeDisplay = this.addChild(new TradeButton(this.menu::getContext, this.commonTab::getTrade, b -> {
        }));
        this.tradeDisplay.setPosition(screenArea.pos.offset(screenArea.width / 2 - 47, 17));
        this.buttonCancelPlayerGive = this.addChild(new EasyTextButton(screenArea.pos.offset(40, 60), screenArea.width - 80, 20, LCText.BUTTON_TRADER_AUCTION_CANCEL_SELF.get(), b -> this.commonTab.cancelAuction(true)).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_AUCTION_CANCEL_SELF, 160)));
        this.buttonCancelStorageGive = this.addChild(new EasyTextButton(screenArea.pos.offset(40, 85), screenArea.width - 80, 20, LCText.BUTTON_TRADER_AUCTION_CANCEL_STORAGE.get(), b -> this.commonTab.cancelAuction(false)).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_AUCTION_CANCEL_STORAGE, 160)));
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        TextRenderUtil.drawCenteredText(gui, LCText.GUI_TRADER_AUCTION_CANCEL.get(), this.screen.getXSize() / 2, 50, 4210752);
    }

    @Override
    public void tick() {
        AuctionTradeData trade = this.commonTab.getTrade();
        if (trade == null || !trade.isOwner(this.screen.getPlayer()) || !trade.isValid()) {
            this.screen.changeTab(0);
        }
    }

    @Override
    public void receiveSelfMessage(LazyPacketData message) {
        if (message.contains("TradeIndex")) {
            this.commonTab.setTradeIndex(message.getInt("TradeIndex"));
        }
    }

    @Override
    public void receiveServerMessage(LazyPacketData message) {
        if (message.contains("CancelSuccess")) {
            this.screen.changeTab(0);
        }
    }
}