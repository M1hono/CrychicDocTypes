package io.github.lightman314.lightmanscurrency.common.upgrades.types.coin_chest;

import com.google.common.collect.Lists;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.money.coins.CoinAPI;
import io.github.lightman314.lightmanscurrency.api.money.coins.atm.ATMAPI;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.upgrades.UpgradeData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.coin_chest.ExchangeUpgradeTab;
import io.github.lightman314.lightmanscurrency.common.blockentity.CoinChestBlockEntity;
import io.github.lightman314.lightmanscurrency.common.menus.CoinChestMenu;
import java.util.List;
import java.util.Objects;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;

public class CoinChestExchangeUpgrade extends CoinChestUpgrade {

    @Override
    public void HandleMenuMessage(@Nonnull CoinChestMenu menu, @Nonnull CoinChestUpgradeData data, @Nonnull LazyPacketData message) {
        if (message.contains("SetExchangeWhileOpen")) {
            this.setExchangeWhileOpen(data, message.getBoolean("SetExchangeWhileOpen"));
        }
        if (message.contains("SetExchangeCommand")) {
            String newCommand = message.getString("SetExchangeCommand");
            String oldCommand = this.getExchangeCommand(data);
            if (Objects.equals(newCommand, oldCommand)) {
                this.setExchangeCommand(data, "");
            } else {
                this.setExchangeCommand(data, newCommand);
            }
        }
    }

    @Override
    public void OnStorageChanged(@Nonnull CoinChestBlockEntity be, @Nonnull CoinChestUpgradeData data) {
        this.ExecuteExchangeCommand(be, data);
    }

    @Override
    public void OnEquip(@Nonnull CoinChestBlockEntity be, @Nonnull CoinChestUpgradeData data) {
        this.ExecuteExchangeCommand(be, data);
    }

    public boolean getExchangeWhileOpen(CoinChestUpgradeData data) {
        CompoundTag compound = data.getItemTag();
        return compound.contains("ExchangeWhileOpen") ? compound.getBoolean("ExchangeWhileOpen") : true;
    }

    public void setExchangeWhileOpen(CoinChestUpgradeData data, boolean newValue) {
        CompoundTag compound = data.getItemTag();
        compound.putBoolean("ExchangeWhileOpen", newValue);
        data.setItemTag(compound);
    }

    public String getExchangeCommand(CoinChestUpgradeData data) {
        CompoundTag compound = data.getItemTag();
        return compound.contains("ExchangeCommand") ? compound.getString("ExchangeCommand") : "";
    }

    public void setExchangeCommand(CoinChestUpgradeData data, String newValue) {
        CompoundTag compound = data.getItemTag();
        compound.putString("ExchangeCommand", newValue);
        data.setItemTag(compound);
    }

    public void ExecuteExchangeCommand(CoinChestBlockEntity be, CoinChestUpgradeData data) {
        boolean executeWhileOpen = this.getExchangeWhileOpen(data);
        if (executeWhileOpen || be.getOpenerCount() <= 0) {
            String command = this.getExchangeCommand(data);
            if (command != null && !command.isBlank() && ATMAPI.ExecuteATMExchangeCommand(be.getStorage(), command)) {
                CoinAPI.API.SortCoinsByValue(be.getStorage());
            }
        }
    }

    @Override
    public void addClientTabs(@Nonnull CoinChestUpgradeData data, @Nonnull Object screen, @Nonnull Consumer<Object> consumer) {
        consumer.accept(new ExchangeUpgradeTab(data, screen));
    }

    @Nonnull
    @Override
    public List<Component> getTooltip(@Nonnull UpgradeData data) {
        return Lists.newArrayList(new Component[] { LCText.TOOLTIP_UPGRADE_COIN_EXCHANGE.get() });
    }

    @Override
    public boolean clearDataFromStack(@Nonnull CompoundTag itemTag) {
        return this.clearTags(itemTag, new String[] { "ExchangeCommand", "ExchangeWhileOpen" });
    }
}