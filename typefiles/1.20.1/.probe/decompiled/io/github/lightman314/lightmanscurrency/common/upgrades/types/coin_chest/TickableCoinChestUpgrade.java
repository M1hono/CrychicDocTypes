package io.github.lightman314.lightmanscurrency.common.upgrades.types.coin_chest;

import io.github.lightman314.lightmanscurrency.common.blockentity.CoinChestBlockEntity;
import javax.annotation.Nonnull;

public abstract class TickableCoinChestUpgrade extends CoinChestUpgrade {

    public abstract void OnServerTick(@Nonnull CoinChestBlockEntity var1, @Nonnull CoinChestUpgradeData var2);

    public int getTickFrequency() {
        return 20;
    }
}