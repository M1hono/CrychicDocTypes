package io.github.lightman314.lightmanscurrency.mixin;

import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.money.MoneyAPI;
import io.github.lightman314.lightmanscurrency.api.money.coins.CoinAPI;
import io.github.lightman314.lightmanscurrency.api.money.coins.data.ChainData;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyView;
import io.github.lightman314.lightmanscurrency.api.money.value.builtin.CoinValue;
import io.github.lightman314.lightmanscurrency.api.money.value.holder.IMoneyHolder;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.IWalletHandler;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.WalletCapability;
import io.github.lightman314.lightmanscurrency.common.items.WalletItem;
import io.github.lightman314.lightmanscurrency.common.menus.wallet.WalletMenu;
import io.github.lightman314.lightmanscurrency.util.MathUtil;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.MerchantContainer;
import net.minecraft.world.inventory.MerchantMenu;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.trading.Merchant;
import net.minecraft.world.item.trading.MerchantOffer;
import net.minecraftforge.items.ItemHandlerHelper;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.gen.Accessor;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ MerchantMenu.class })
public abstract class MerchantMenuMixin {

    @Unique
    protected MerchantMenu self() {
        return (MerchantMenu) this;
    }

    @Accessor("trader")
    public abstract Merchant getTrader();

    @Accessor("tradeContainer")
    public abstract MerchantContainer getTradeContainer();

    @Unique
    public Player getPlayer() {
        Merchant m = this.getTrader();
        return m != null ? m.getTradingPlayer() : null;
    }

    @Inject(at = { @At("HEAD") }, method = { "tryMoveItems" })
    private void tryMoveItemsEarly(int trade, CallbackInfo info) {
        try {
            MerchantMenu self = this.self();
            if (trade >= 0 && trade < self.getOffers().size()) {
                this.EjectMoneyIntoWallet(this.getPlayer(), false);
            }
        } catch (Throwable var4) {
        }
    }

    @Inject(at = { @At("TAIL") }, method = { "tryMoveItems" })
    private void tryMoveItems(int trade, CallbackInfo info) {
        try {
            MerchantMenu self = this.self();
            if (trade >= 0 && trade < self.getOffers().size()) {
                MerchantContainer tradeContainer = this.getTradeContainer();
                if (tradeContainer.getItem(0).isEmpty() || tradeContainer.getItem(1).isEmpty()) {
                    MerchantOffer offer = (MerchantOffer) self.getOffers().get(trade);
                    if (CoinAPI.API.IsCoin(offer.getCostA(), false) || CoinAPI.API.IsCoin(offer.getCostB(), false)) {
                        ItemStack coinA = offer.getCostA().copy();
                        ItemStack coinB = offer.getCostB().copy();
                        ChainData chainA = CoinAPI.API.ChainDataOfCoin(coinA);
                        ChainData chainB = CoinAPI.API.ChainDataOfCoin(coinB);
                        long valueA;
                        if (chainA != null && tradeContainer.getItem(0).isEmpty()) {
                            valueA = chainA.getCoreValue(coinA);
                        } else {
                            valueA = 0L;
                        }
                        long valueB;
                        if (chainB != null && tradeContainer.getItem(1).isEmpty()) {
                            valueB = chainB.getCoreValue(coinB);
                        } else {
                            valueB = 0L;
                        }
                        Player player = this.getPlayer();
                        MoneyView availableFunds = WalletCapability.getWalletMoney(player);
                        MoneyValue fundsToExtractA = MoneyValue.empty();
                        MoneyValue fundsToExtractB = MoneyValue.empty();
                        int coinACount = valueA > 0L ? coinA.getCount() : 0;
                        int coinBCount = valueB > 0L ? coinB.getCount() : 0;
                        int coinAMaxCount = valueA > 0L ? coinA.getMaxStackSize() : 0;
                        int coinBMaxCount = valueB > 0L ? coinB.getMaxStackSize() : 0;
                        int coinToAddA = 0;
                        int coinToAddB = 0;
                        boolean keepLooping = true;
                        while (keepLooping) {
                            int tempC2AA = coinAMaxCount > coinToAddA ? MathUtil.clamp(coinToAddA + coinACount, 0, coinAMaxCount) : coinToAddA;
                            int tempC2AB = coinBMaxCount > coinToAddB ? MathUtil.clamp(coinToAddB + coinBCount, 0, coinBMaxCount) : coinToAddB;
                            coinA.setCount(tempC2AA);
                            coinB.setCount(tempC2AB);
                            if (!containsValueFor(availableFunds, chainA, valueA, tempC2AA, chainB, valueB, tempC2AB)) {
                                keepLooping = false;
                            } else {
                                fundsToExtractA = CoinValue.fromNumber(chainA.chain, valueA * (long) tempC2AA);
                                if (chainB != null) {
                                    fundsToExtractB = CoinValue.fromNumber(chainB.chain, valueB * (long) tempC2AB);
                                }
                                coinToAddA = tempC2AA;
                                coinToAddB = tempC2AB;
                                if (tempC2AA >= coinAMaxCount && tempC2AB >= coinBMaxCount) {
                                    keepLooping = false;
                                }
                            }
                        }
                        if ((coinToAddA > 0 || coinToAddB > 0) && !fundsToExtractA.isEmpty()) {
                            coinA.setCount(coinToAddA);
                            coinB.setCount(coinToAddB);
                            if (fundsToExtractA.sameType(fundsToExtractB)) {
                                fundsToExtractA = fundsToExtractA.addValue(fundsToExtractB);
                                fundsToExtractB = MoneyValue.empty();
                            }
                            IMoneyHolder handler = MoneyAPI.API.GetPlayersMoneyHandler(player);
                            if (handler.extractMoney(fundsToExtractA, true).isEmpty() && handler.extractMoney(fundsToExtractB, true).isEmpty()) {
                                handler.extractMoney(fundsToExtractA, false);
                                handler.extractMoney(fundsToExtractB, false);
                                if (coinToAddA > 0) {
                                    tradeContainer.setItem(0, coinA.copy());
                                }
                                if (coinToAddB > 0) {
                                    tradeContainer.setItem(1, coinB.copy());
                                }
                                LightmansCurrency.LogDebug("Moved " + fundsToExtractA.getString() + " & " + fundsToExtractB.getString() + " worth of coins into the Merchant Menu!");
                            }
                        }
                    }
                }
            }
        } catch (Throwable var27) {
        }
    }

    @Unique
    private static boolean containsValueFor(@Nonnull MoneyView query, @Nonnull ChainData chainA, long valueA, int countA, @Nullable ChainData chainB, long valueB, int countB) {
        MoneyValue cvA = CoinValue.fromNumber(chainA.chain, valueA * (long) countA);
        MoneyValue cvB = chainB == null ? MoneyValue.empty() : CoinValue.fromNumber(chainB.chain, valueB * (long) countB);
        if (cvA.sameType(cvB)) {
            cvA = cvA.addValue(cvB);
            cvB = MoneyValue.empty();
        }
        return query.containsValue(cvA) && query.containsValue(cvB);
    }

    @Inject(at = { @At("HEAD") }, method = { "removed" })
    private void removed(Player player, CallbackInfo info) {
        if (this.isPlayerAliveAndValid(player)) {
            this.EjectMoneyIntoWallet(player, true);
        }
    }

    @Unique
    protected boolean isPlayerAliveAndValid(Player player) {
        if (player.m_6084_()) {
            return player instanceof ServerPlayer sp ? !sp.hasDisconnected() : true;
        } else {
            return false;
        }
    }

    @Unique
    private void EjectMoneyIntoWallet(Player player, boolean noUpdate) {
        MerchantContainer tradeContainer = this.getTradeContainer();
        ItemStack item = tradeContainer.getItem(0);
        if (!item.isEmpty() && CoinAPI.API.IsCoin(item, false)) {
            IWalletHandler walletHandler = WalletCapability.lazyGetWalletHandler(player);
            if (walletHandler != null) {
                ItemStack wallet = walletHandler.getWallet();
                if (WalletItem.isWallet(wallet)) {
                    ItemStack leftovers = WalletItem.PickupCoin(wallet, item);
                    WalletMenu.OnWalletUpdated(player);
                    if (!leftovers.isEmpty()) {
                        ItemHandlerHelper.giveItemToPlayer(player, leftovers);
                    }
                    if (noUpdate) {
                        tradeContainer.removeItemNoUpdate(0);
                    } else {
                        tradeContainer.setItem(0, ItemStack.EMPTY);
                    }
                }
            }
        }
        item = tradeContainer.getItem(1);
        if (!item.isEmpty() && CoinAPI.API.IsCoin(item, false)) {
            IWalletHandler walletHandler = WalletCapability.lazyGetWalletHandler(player);
            if (walletHandler != null) {
                ItemStack wallet = walletHandler.getWallet();
                if (WalletItem.isWallet(wallet)) {
                    ItemStack leftoversx = WalletItem.PickupCoin(wallet, item);
                    WalletMenu.OnWalletUpdated(player);
                    if (!leftoversx.isEmpty()) {
                        ItemHandlerHelper.giveItemToPlayer(player, leftoversx);
                    }
                    if (noUpdate) {
                        tradeContainer.removeItemNoUpdate(1);
                    } else {
                        tradeContainer.setItem(1, ItemStack.EMPTY);
                    }
                }
            }
        }
    }
}