package io.github.lightman314.lightmanscurrency.api.money.types.builtin.coins;

import io.github.lightman314.lightmanscurrency.api.capability.money.MoneyHandler;
import io.github.lightman314.lightmanscurrency.api.money.types.IPlayerMoneyHandler;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyView;
import io.github.lightman314.lightmanscurrency.api.money.value.builtin.CoinValue;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.IWalletHandler;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.WalletCapability;
import io.github.lightman314.lightmanscurrency.util.InventoryUtil;
import javax.annotation.Nonnull;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.items.ItemHandlerHelper;

public class CoinPlayerMoneyHandler extends MoneyHandler implements IPlayerMoneyHandler {

    private Player player;

    private IWalletHandler walletHandler;

    private ItemStack cachedWallet = ItemStack.EMPTY;

    public CoinPlayerMoneyHandler(@Nonnull Player player) {
        this.updatePlayer(player);
    }

    @Nonnull
    @Override
    public MoneyValue insertMoney(@Nonnull MoneyValue insertAmount, boolean simulation) {
        if (this.walletHandler != null) {
            return this.walletHandler.insertMoney(insertAmount, simulation);
        } else if (!(insertAmount instanceof CoinValue coinValue)) {
            return insertAmount;
        } else {
            if (!simulation) {
                for (ItemStack stack : coinValue.getAsSeperatedItemList()) {
                    ItemHandlerHelper.giveItemToPlayer(this.player, stack);
                }
            }
            return MoneyValue.empty();
        }
    }

    @Nonnull
    @Override
    public MoneyValue extractMoney(@Nonnull MoneyValue extractAmount, boolean simulation) {
        return this.walletHandler != null ? this.walletHandler.extractMoney(extractAmount, simulation) : extractAmount;
    }

    @Override
    public boolean isMoneyTypeValid(@Nonnull MoneyValue value) {
        return value instanceof CoinValue;
    }

    @Override
    public void updatePlayer(@Nonnull Player player) {
        this.player = player;
        this.walletHandler = WalletCapability.lazyGetWalletHandler(player);
    }

    @Override
    protected boolean hasStoredMoneyChanged() {
        return this.walletHandler == null ? !this.cachedWallet.isEmpty() : !InventoryUtil.ItemsFullyMatch(this.cachedWallet, this.walletHandler.getWallet());
    }

    @Override
    protected void collectStoredMoney(@Nonnull MoneyView.Builder builder) {
        if (this.walletHandler != null) {
            builder.merge(this.walletHandler.getStoredMoney());
            this.cachedWallet = this.walletHandler.getWallet().copy();
        } else {
            this.cachedWallet = ItemStack.EMPTY;
        }
    }
}