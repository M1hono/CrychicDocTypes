package io.github.lightman314.lightmanscurrency.common.menus.traderstorage;

import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.ITraderStorageMenu;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.TraderStorageTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.TraderStatsClientTab;
import java.util.function.Function;
import javax.annotation.Nonnull;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.Slot;

public class TraderStatsTab extends TraderStorageTab {

    public TraderStatsTab(@Nonnull ITraderStorageMenu menu) {
        super(menu);
    }

    @Override
    public Object createClientTab(Object screen) {
        return new TraderStatsClientTab(screen, this);
    }

    @Override
    public boolean canOpen(Player player) {
        return this.menu.hasPermission("viewLogs");
    }

    @Override
    public void onTabOpen() {
        this.menu.SetCoinSlotsActive(false);
    }

    @Override
    public void onTabClose() {
        this.menu.SetCoinSlotsActive(true);
    }

    @Override
    public void addStorageMenuSlots(Function<Slot, Slot> addSlot) {
    }

    public void clearStats() {
        if (this.menu.hasPermission("editSettings")) {
            if (this.menu.isClient()) {
                this.menu.SendMessage(LazyPacketData.simpleFlag("ClearStats"));
            } else {
                TraderData trader = this.menu.getTrader();
                if (trader != null) {
                    trader.statTracker.clear();
                    trader.markStatsDirty();
                }
            }
        }
    }

    @Override
    public void receiveMessage(LazyPacketData message) {
        if (message.contains("ClearStats")) {
            this.clearStats();
        }
    }
}