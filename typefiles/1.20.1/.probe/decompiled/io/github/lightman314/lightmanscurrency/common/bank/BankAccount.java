package io.github.lightman314.lightmanscurrency.common.bank;

import com.google.common.collect.ImmutableMap;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.player.PlayerReference;
import io.github.lightman314.lightmanscurrency.api.money.bank.IBankAccount;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyStorage;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.money.value.holder.IMoneyHolder;
import io.github.lightman314.lightmanscurrency.api.money.value.holder.MoneyHolder;
import io.github.lightman314.lightmanscurrency.api.notifications.Notification;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationData;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationSaveData;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.common.notifications.types.bank.BankInterestNotification;
import io.github.lightman314.lightmanscurrency.common.notifications.types.bank.BankTransferNotification;
import io.github.lightman314.lightmanscurrency.common.notifications.types.bank.DepositWithdrawNotification;
import io.github.lightman314.lightmanscurrency.common.notifications.types.bank.LowBalanceNotification;
import io.github.lightman314.lightmanscurrency.common.taxes.TaxEntry;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.common.util.NonNullSupplier;

public class BankAccount extends MoneyHolder.Slave implements IBankAccount {

    private boolean isClient = false;

    private final Runnable markDirty;

    private final MoneyStorage coinStorage = new MoneyStorage(this::markDirty);

    private final Map<String, MoneyValue> notificationLevels = new HashMap();

    private Consumer<NonNullSupplier<Notification>> notificationSender;

    private final NotificationData logger = new NotificationData();

    private String ownerName = "Unknown";

    @Override
    public boolean isClient() {
        return this.isClient;
    }

    @Nonnull
    public BankAccount flagAsClient() {
        this.isClient = true;
        this.logger.flagAsClient();
        return this;
    }

    @Nonnull
    @Override
    public MoneyStorage getMoneyStorage() {
        return this.coinStorage;
    }

    @Nullable
    @Override
    protected IMoneyHolder getParent() {
        return this.coinStorage;
    }

    @Nonnull
    @Override
    public Map<String, MoneyValue> getNotificationLevels() {
        return ImmutableMap.copyOf(this.notificationLevels);
    }

    @Nonnull
    @Override
    public MoneyValue getNotificationLevelFor(@Nonnull String type) {
        return (MoneyValue) this.notificationLevels.getOrDefault(type, MoneyValue.empty());
    }

    @Override
    public void setNotificationLevel(@Nonnull String type, @Nonnull MoneyValue value) {
        if (value.isEmpty()) {
            this.notificationLevels.remove(type);
        } else {
            this.notificationLevels.put(type, value);
        }
        this.markDirty();
    }

    public void setNotificationConsumer(Consumer<NonNullSupplier<Notification>> notificationSender) {
        this.notificationSender = notificationSender;
    }

    @Override
    public void pushLocalNotification(@Nonnull Notification notification) {
        this.logger.addNotification(notification);
        this.markDirty();
    }

    @Override
    public void pushNotification(@Nonnull NonNullSupplier<Notification> notification, boolean notifyPlayers) {
        this.pushLocalNotification(notification.get());
        if (notifyPlayers && this.notificationSender != null) {
            this.notificationSender.accept(notification);
        }
    }

    public static Consumer<NonNullSupplier<Notification>> generateNotificationAcceptor(UUID playerID) {
        return notification -> NotificationSaveData.PushNotification(playerID, (Notification) notification.get());
    }

    @Nonnull
    @Override
    public List<Notification> getNotifications() {
        return this.logger.getNotifications();
    }

    public String getOwnersName() {
        return this.ownerName;
    }

    public void updateOwnersName(String ownerName) {
        this.ownerName = ownerName;
    }

    @Nonnull
    @Override
    public MutableComponent getName() {
        return LCText.GUI_BANK_ACCOUNT_NAME.get(this.ownerName);
    }

    @Override
    public void depositMoney(@Nonnull MoneyValue depositAmount) {
        this.coinStorage.addValue(depositAmount);
    }

    @Nonnull
    @Override
    public MoneyValue withdrawMoney(@Nonnull MoneyValue withdrawAmount) {
        String type = withdrawAmount.getUniqueName();
        withdrawAmount = this.coinStorage.capValue(withdrawAmount);
        if (withdrawAmount.isEmpty()) {
            return MoneyValue.empty();
        } else {
            long oldValue = this.coinStorage.valueOf(type).getCoreValue();
            this.coinStorage.removeValue(withdrawAmount);
            MoneyValue notificationLevel = this.getNotificationLevelFor(withdrawAmount.getUniqueName());
            long nl = notificationLevel.getCoreValue();
            if (oldValue >= nl && this.coinStorage.valueOf(type).getCoreValue() < nl) {
                this.pushNotification(LowBalanceNotification.create(this.getName(), notificationLevel));
            }
            return withdrawAmount;
        }
    }

    public void LogInteraction(Player player, MoneyValue amount, boolean isDeposit) {
        this.pushLocalNotification(new DepositWithdrawNotification.Player(PlayerReference.of(player), this.getName(), isDeposit, amount));
    }

    public void LogInteraction(TaxEntry tax, MoneyValue amount) {
        this.pushLocalNotification(new DepositWithdrawNotification.Trader(tax.getName(), this.getName(), true, amount));
    }

    public void LogInteraction(TraderData trader, MoneyValue amount, boolean isDeposit) {
        this.pushLocalNotification(new DepositWithdrawNotification.Trader(trader.getName(), this.getName(), isDeposit, amount));
    }

    public void LogTransfer(Player player, MoneyValue amount, MutableComponent otherAccount, boolean wasReceived) {
        this.pushLocalNotification(new BankTransferNotification(PlayerReference.of(player), amount, this.getName(), otherAccount, wasReceived));
    }

    public BankAccount() {
        this((Runnable) null);
    }

    public BankAccount(Runnable markDirty) {
        this.markDirty = markDirty;
    }

    public BankAccount(CompoundTag compound) {
        this(null, compound);
    }

    public BankAccount(Runnable markDirty, CompoundTag compound) {
        this.markDirty = markDirty;
        this.coinStorage.safeLoad(compound, "CoinStorage");
        this.logger.load(compound.getCompound("AccountLogs"));
        this.ownerName = compound.getString("OwnerName");
        if (compound.contains("NotificationLevel")) {
            MoneyValue level = MoneyValue.safeLoad(compound, "NotificationLevel");
            if (!level.isEmpty() && !level.isFree()) {
                this.notificationLevels.put(level.getUniqueName(), level);
            }
        } else if (compound.contains("NotificationLevels")) {
            ListTag list = compound.getList("NotificationLevels", 10);
            for (int i = 0; i < list.size(); i++) {
                MoneyValue level = MoneyValue.load(list.getCompound(i));
                if (level.isInvalid() || !level.isFree() && !level.isEmpty()) {
                    this.notificationLevels.put(level.getUniqueName(), level);
                }
            }
        }
    }

    public void markDirty() {
        if (this.markDirty != null) {
            this.markDirty.run();
        }
    }

    public final CompoundTag save() {
        CompoundTag compound = new CompoundTag();
        compound.put("CoinStorage", this.coinStorage.save());
        compound.put("AccountLogs", this.logger.save());
        compound.putString("OwnerName", this.ownerName);
        ListTag notificationLevelList = new ListTag();
        this.notificationLevels.forEach((key, level) -> notificationLevelList.add(level.save()));
        compound.put("NotificationLevels", notificationLevelList);
        return compound;
    }

    @Override
    public void formatTooltip(@Nonnull List<Component> tooltip) {
        IMoneyHolder.defaultTooltipFormat(tooltip, this.getTooltipTitle(), this.getStoredMoney());
    }

    @Override
    public Component getTooltipTitle() {
        return LCText.TOOLTIP_MONEY_SOURCE_BANK.get();
    }

    @Override
    public void applyInterest(double interestMultiplier, @Nonnull List<MoneyValue> limits, boolean forceInterest, boolean notifyPlayers) {
        for (MoneyValue value : this.coinStorage.allValues()) {
            MoneyValue interest = value.multiplyValue(interestMultiplier);
            if (interest.isEmpty() && forceInterest) {
                interest = value.getSmallestValue();
            }
            if (!interest.isEmpty()) {
                for (MoneyValue limit : limits) {
                    if (!limit.isEmpty() && limit.sameType(interest) && interest.containsValue(limit)) {
                        interest = limit;
                    }
                }
                if (!interest.isEmpty()) {
                    this.depositMoney(interest);
                    this.pushNotification(BankInterestNotification.create(this.getName(), interest), notifyPlayers);
                }
            }
        }
    }
}