package io.github.lightman314.lightmanscurrency.api.enchantments;

import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.capability.money.IMoneyHandler;
import io.github.lightman314.lightmanscurrency.api.money.MoneyAPI;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.IWalletHandler;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.WalletCapability;
import io.github.lightman314.lightmanscurrency.common.enchantments.CoinMagnetEnchantment;
import io.github.lightman314.lightmanscurrency.common.enchantments.MoneyMendingEnchantment;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;

public class EnchantmentUtil {

    private EnchantmentUtil() {
    }

    public static void tickAllEnchantments(@Nonnull LivingEntity entity, @Nullable IMoneyHandler entityMoney) {
        tickCoinMagnet(entity);
        if (entityMoney == null) {
            if (entity instanceof Player player) {
                entityMoney = MoneyAPI.API.GetPlayersMoneyHandler(player);
            } else {
                LightmansCurrency.LogDebug("Cannot run Money Mending tick without a money handler!");
            }
        }
        if (entityMoney != null) {
            tickMoneyMending(entity, entityMoney);
        }
    }

    public static void tickCoinMagnet(@Nonnull LivingEntity entity) {
        IWalletHandler walletHandler = WalletCapability.lazyGetWalletHandler(entity);
        if (walletHandler != null) {
            CoinMagnetEnchantment.runEntityTick(walletHandler, entity);
        }
    }

    public static void tickMoneyMending(@Nonnull LivingEntity entity, @Nonnull IMoneyHandler entityMoney) {
        MoneyMendingEnchantment.runEntityTick(entity, entityMoney);
    }
}