package io.github.lightman314.lightmanscurrency.common.taxes;

import com.google.common.collect.ImmutableList;
import io.github.lightman314.lightmanscurrency.LCConfig;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.player.OwnerData;
import io.github.lightman314.lightmanscurrency.api.misc.world.WorldArea;
import io.github.lightman314.lightmanscurrency.api.misc.world.WorldPosition;
import io.github.lightman314.lightmanscurrency.api.money.bank.IBankAccount;
import io.github.lightman314.lightmanscurrency.api.money.bank.reference.BankReference;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyStorage;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.notifications.Notification;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationData;
import io.github.lightman314.lightmanscurrency.api.ownership.builtin.PlayerOwner;
import io.github.lightman314.lightmanscurrency.api.taxes.ITaxCollector;
import io.github.lightman314.lightmanscurrency.api.taxes.ITaxable;
import io.github.lightman314.lightmanscurrency.api.taxes.reference.TaxableReference;
import io.github.lightman314.lightmanscurrency.common.bank.BankAccount;
import io.github.lightman314.lightmanscurrency.common.menus.providers.TaxCollectorMenuProvider;
import io.github.lightman314.lightmanscurrency.common.menus.validation.EasyMenu;
import io.github.lightman314.lightmanscurrency.common.menus.validation.MenuValidator;
import io.github.lightman314.lightmanscurrency.common.notifications.categories.TaxEntryCategory;
import io.github.lightman314.lightmanscurrency.common.notifications.types.taxes.TaxesCollectedNotification;
import io.github.lightman314.lightmanscurrency.common.player.LCAdminMode;
import io.github.lightman314.lightmanscurrency.common.taxes.data.TaxStats;
import io.github.lightman314.lightmanscurrency.common.traders.permissions.Permissions;
import io.github.lightman314.lightmanscurrency.util.MathUtil;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraftforge.common.util.NonNullSupplier;
import net.minecraftforge.network.NetworkHooks;

public class TaxEntry implements ITaxCollector {

    public final TaxStats stats = new TaxStats(this);

    private boolean locked = true;

    private boolean isClient = false;

    private WorldPosition center = WorldPosition.VOID;

    private int radius = 10;

    private int height = 10;

    private int vertOffset = 0;

    private int renderMode = 1;

    private int taxRate = 1;

    private String name = "";

    private final OwnerData owner = new OwnerData(this, o -> this.markOwnerDirty());

    private final MoneyStorage storedMoney = new MoneyStorage(this::markStoredMoneyDirty);

    private boolean linkToBank = false;

    private final NotificationData logger = new NotificationData();

    private final List<TaxableReference> acceptedEntries = new ArrayList();

    private long id = -1L;

    private boolean active = false;

    private boolean forceAcceptance = false;

    private boolean infiniteRange = false;

    public static int minRadius() {
        return 5;
    }

    public static int maxRadius() {
        return LCConfig.SERVER.taxCollectorMaxRadius.get();
    }

    public static int minHeight() {
        return 2;
    }

    public static int maxHeight() {
        return LCConfig.SERVER.taxCollectorMaxHeight.get();
    }

    public static int minVertOffset() {
        return -maxVertOffset();
    }

    public static int maxVertOffset() {
        return LCConfig.SERVER.taxCollectorMaxVertOffset.get();
    }

    public static int maxTaxRate() {
        return LCConfig.SERVER.taxCollectorMaxRate.get();
    }

    public final TaxEntry unlock() {
        this.locked = false;
        return this;
    }

    @Override
    public final boolean isClient() {
        return this.isClient;
    }

    public final TaxEntry flagAsClient() {
        this.isClient = true;
        this.logger.flagAsClient();
        return this.unlock();
    }

    @Override
    public final boolean isServerEntry() {
        return this.id == -9L;
    }

    public WorldPosition getCenter() {
        return this.center;
    }

    public void moveCenter(@Nonnull WorldPosition newPosition) {
        if (!this.center.equals(newPosition)) {
            this.center = newPosition;
            this.markCenterDirty();
        }
    }

    @Nonnull
    @Override
    public WorldArea getArea() {
        return this.isInfiniteRange() ? WorldArea.ofInfiniteRange(this.center) : this.center.getArea(this.getRadius(), this.getHeight(), this.getVertOffset());
    }

    public int getRadius() {
        return MathUtil.clamp(this.radius, minRadius(), maxRadius());
    }

    public void setRadius(int newRadius) {
        if (!this.isInfiniteRange()) {
            this.radius = MathUtil.clamp(newRadius, minRadius(), maxRadius());
            this.markAreaDirty();
        }
    }

    public int getHeight() {
        return MathUtil.clamp(this.height, minHeight(), maxHeight());
    }

    public void setHeight(int newHeight) {
        if (!this.isInfiniteRange()) {
            this.height = MathUtil.clamp(newHeight, minHeight(), maxHeight());
            this.markAreaDirty();
        }
    }

    public int getVertOffset() {
        return MathUtil.clamp(this.vertOffset, minVertOffset(), maxVertOffset());
    }

    public void setVertOffset(int newVertOffset) {
        if (!this.isInfiniteRange()) {
            this.vertOffset = MathUtil.clamp(newVertOffset, minVertOffset(), maxVertOffset());
            this.markAreaDirty();
        }
    }

    public int getRenderMode() {
        return this.isInfiniteRange() ? 0 : this.renderMode;
    }

    public void setRenderMode(int newRenderMode) {
        this.renderMode = newRenderMode % 3;
        this.markRenderModeDirty();
    }

    public boolean shouldRender(Player player) {
        if (player == null || this.isInfiniteRange()) {
            return false;
        } else if (LCAdminMode.isAdminPlayer(player)) {
            return true;
        } else {
            return this.getRenderMode() == 1 ? this.canAccess(player) : this.getRenderMode() == 2 && this.isActive();
        }
    }

    public int getRenderColor(Player player) {
        if (this.canAccess(player)) {
            return this.active ? 51200 : 13107200;
        } else if (this.renderMode != 2) {
            return this.active ? 30464 : 7798784;
        } else {
            return 13158400;
        }
    }

    @Override
    public int getTaxRate() {
        return MathUtil.clamp(this.taxRate, 0, maxTaxRate());
    }

    public void setTaxRate(int newPercentage) {
        this.taxRate = MathUtil.clamp(newPercentage, 1, maxTaxRate());
        this.markTaxPercentageDirty();
    }

    public boolean hasCustomName() {
        return !this.name.isBlank();
    }

    public String getCustomName() {
        return this.name;
    }

    @Nonnull
    @Override
    public MutableComponent getName() {
        return this.name.isBlank() ? this.getDefaultName() : EasyText.literal(this.name);
    }

    public void setName(String name) {
        this.name = name;
        this.markNameDirty();
    }

    protected MutableComponent getDefaultName() {
        return LCText.GUI_TAX_COLLECTOR_DEFAULT_NAME.get(this.isServerEntry() ? LCText.GUI_TAX_COLLECTOR_DEFAULT_NAME_SERVER.get() : this.owner.getName());
    }

    @Nonnull
    @Override
    public OwnerData getOwner() {
        return this.owner;
    }

    @Override
    public final boolean canAccess(@Nonnull Player player) {
        return this.isServerEntry() ? true : this.owner.isMember(player);
    }

    public MoneyStorage getStoredMoney() {
        return this.storedMoney;
    }

    public void depositMoney(MoneyValue amount) {
        IBankAccount account = this.getBankAccount();
        if (account != null) {
            account.depositMoney(amount);
            if (account instanceof BankAccount ba) {
                ba.LogInteraction(this, amount);
            }
        } else {
            this.storedMoney.addValue(amount);
        }
    }

    public void clearStoredMoney() {
        this.storedMoney.clear();
    }

    @Nonnull
    @Override
    public final MoneyValue CalculateAndPayTaxes(@Nonnull ITaxable taxable, @Nonnull MoneyValue taxableAmount) {
        MoneyValue amountToPay = taxableAmount.percentageOfValue(this.getTaxRate());
        if (!amountToPay.isEmpty()) {
            this.depositMoney(amountToPay);
            this.PushNotification(TaxesCollectedNotification.create(taxable.getName(), amountToPay, new TaxEntryCategory(this.getName(), this.id)));
            this.stats.OnTaxesCollected(taxable, amountToPay);
        }
        return amountToPay;
    }

    public void setLinkedToBank(boolean newState) {
        this.linkToBank = newState;
        this.markBankStateDirty();
    }

    public boolean isLinkedToBank() {
        return this.linkToBank && !this.isServerEntry();
    }

    @Nullable
    public final IBankAccount getBankAccount() {
        if (!this.linkToBank) {
            return null;
        } else {
            BankReference reference = this.owner.getValidOwner().asBankReference();
            return reference != null ? reference.get() : null;
        }
    }

    public final List<Notification> getNotifications() {
        return this.logger.getNotifications();
    }

    public final void PushNotification(NonNullSupplier<Notification> notification) {
        if (!this.isClient) {
            this.logger.addNotification(notification.get());
            this.markNotificationsDirty();
        }
    }

    public final List<TaxableReference> getAcceptedEntries() {
        return ImmutableList.copyOf(this.acceptedEntries);
    }

    @Override
    public final void AcceptTaxable(@Nonnull ITaxable entry) {
        TaxableReference reference = entry.getReference();
        if (!this.acceptedEntries.contains(reference) && reference != null) {
            this.acceptedEntries.add(reference);
            this.markAcceptedEntriesDirty();
        }
    }

    @Override
    public final void TaxableWasRemoved(@Nonnull ITaxable entry) {
        TaxableReference reference = entry.getReference();
        if (this.acceptedEntries.contains(reference)) {
            this.acceptedEntries.remove(reference);
            this.markAcceptedEntriesDirty();
        }
    }

    @Override
    public boolean ShouldTax(@Nonnull ITaxable taxable) {
        return this.IsInArea(taxable) && (this.forcesAcceptance() || this.acceptedEntries.contains(taxable.getReference()));
    }

    @Override
    public boolean IsInArea(@Nonnull ITaxable taxable) {
        return this.isActive() && this.getArea().isInArea(taxable.getWorldPosition());
    }

    @Override
    public long getID() {
        return this.id;
    }

    public boolean isActive() {
        return this.active;
    }

    public void setActive(boolean newState, @Nullable Player player) {
        if (this.active != newState) {
            if (LCConfig.SERVER.taxCollectorAdminOnly.get() && !LCAdminMode.isAdminPlayer(player) && !this.active) {
                Permissions.PermissionWarning(player, "activate a tax entry", "LC_ADMIN_MODE");
            } else {
                this.active = newState;
                this.markActiveStateDirty();
            }
        }
    }

    public boolean forcesAcceptance() {
        return this.forceAcceptance || this.isServerEntry();
    }

    public void setForceAcceptance(boolean isAdmin) {
        if (!this.isServerEntry()) {
            this.forceAcceptance = isAdmin;
            this.markAdminStateDirty();
        }
    }

    public boolean isInfiniteRange() {
        return this.infiniteRange || this.isServerEntry();
    }

    public void setInfiniteRange(boolean infiniteRange) {
        if (!this.isServerEntry()) {
            this.infiniteRange = infiniteRange;
            this.markAdminStateDirty();
        }
    }

    protected final void markDirty(CompoundTag packet) {
        if (!this.locked && !this.isClient) {
            TaxSaveData.MarkTaxEntryDirty(this.id, packet);
        }
    }

    protected final void markDirty(Function<CompoundTag, CompoundTag> packet) {
        this.markDirty((CompoundTag) packet.apply(new CompoundTag()));
    }

    public TaxEntry() {
    }

    public TaxEntry(long id, @Nullable BlockEntity core, @Nullable Player owner) {
        this.id = id;
        if (core != null) {
            this.center = WorldPosition.ofBE(core);
        }
        this.owner.SetOwner(PlayerOwner.of(owner));
    }

    public final void openMenu(@Nonnull Player player, @Nonnull MenuValidator validator) {
        if (player instanceof ServerPlayer sp && this.canAccess(player)) {
            NetworkHooks.openScreen(sp, new TaxCollectorMenuProvider(this.id, validator), EasyMenu.encoder(d -> d.writeLong(this.id), validator));
        }
    }

    public CompoundTag save() {
        CompoundTag tag = new CompoundTag();
        tag.putLong("ID", this.id);
        this.saveTaxRate(tag);
        this.saveStoredMoney(tag);
        this.saveActiveState(tag);
        this.saveName(tag);
        this.saveNotifications(tag);
        this.saveStats(tag);
        if (!this.isServerEntry()) {
            this.saveCenter(tag);
            this.saveArea(tag);
            this.saveRenderMode(tag);
            this.saveOwner(tag);
            this.saveAdminState(tag);
            this.saveAcceptedEntries(tag);
            this.saveBankState(tag);
        }
        return tag;
    }

    public final void markAreaDirty() {
        this.markDirty(this::saveArea);
    }

    protected final CompoundTag saveArea(CompoundTag tag) {
        tag.putInt("HorizRadius", this.radius);
        tag.putInt("VertSize", this.height);
        tag.putInt("VertOffset", this.vertOffset);
        return tag;
    }

    public final void markRenderModeDirty() {
        this.markDirty(this::saveRenderMode);
    }

    protected final CompoundTag saveRenderMode(CompoundTag tag) {
        tag.putInt("RenderMode", this.renderMode);
        return tag;
    }

    public final void markCenterDirty() {
        this.markDirty(this::saveCenter);
    }

    protected final CompoundTag saveCenter(CompoundTag tag) {
        tag.put("Center", this.center.save());
        return tag;
    }

    public final void markTaxPercentageDirty() {
        this.markDirty(this::saveTaxRate);
    }

    protected final CompoundTag saveTaxRate(CompoundTag tag) {
        tag.putInt("TaxRate", this.taxRate);
        return tag;
    }

    public final void markNameDirty() {
        this.markDirty(this::saveName);
    }

    protected final CompoundTag saveName(CompoundTag tag) {
        tag.putString("CustomName", this.name);
        return tag;
    }

    public final void markOwnerDirty() {
        this.markDirty(this::saveOwner);
    }

    protected final CompoundTag saveOwner(CompoundTag tag) {
        tag.put("Owner", this.owner.save());
        return tag;
    }

    public final void markStoredMoneyDirty() {
        this.markDirty(this::saveStoredMoney);
    }

    protected final CompoundTag saveStoredMoney(CompoundTag tag) {
        tag.put("StoredMoney", this.storedMoney.save());
        return tag;
    }

    public final void markAdminStateDirty() {
        this.markDirty(this::saveAdminState);
    }

    protected final CompoundTag saveAdminState(CompoundTag tag) {
        tag.putBoolean("ForceAcceptance", this.forceAcceptance);
        tag.putBoolean("IsInfiniteRange", this.infiniteRange);
        return tag;
    }

    public final void markActiveStateDirty() {
        this.markDirty(this::saveActiveState);
    }

    protected final CompoundTag saveActiveState(CompoundTag tag) {
        tag.putBoolean("IsActivated", this.active);
        return tag;
    }

    public final void markAcceptedEntriesDirty() {
        this.markDirty(this::saveAcceptedEntries);
    }

    protected final CompoundTag saveAcceptedEntries(CompoundTag tag) {
        ListTag acceptedEntriesList = new ListTag();
        for (TaxableReference entry : this.acceptedEntries) {
            acceptedEntriesList.add(entry.save());
        }
        tag.put("AcceptedEntries", acceptedEntriesList);
        return tag;
    }

    public final void markNotificationsDirty() {
        this.markDirty(this::saveNotifications);
    }

    protected final CompoundTag saveNotifications(CompoundTag tag) {
        tag.put("Notifications", this.logger.save());
        return tag;
    }

    public final void markStatsDirty() {
        this.markDirty(this::saveStats);
    }

    protected final CompoundTag saveStats(CompoundTag tag) {
        tag.put("Statistics", this.stats.save());
        return tag;
    }

    public final void markBankStateDirty() {
        this.markDirty(this::saveBankState);
    }

    protected final CompoundTag saveBankState(CompoundTag tag) {
        tag.putBoolean("LinkedToBank", this.linkToBank);
        return tag;
    }

    public void load(CompoundTag tag) {
        if (tag.contains("ID")) {
            this.id = tag.getLong("ID");
        }
        if (tag.contains("Center")) {
            this.center = WorldPosition.load(tag.getCompound("Center"));
        }
        if (tag.contains("HorizRadius")) {
            this.radius = tag.getInt("HorizRadius");
        }
        if (tag.contains("VertSize")) {
            this.height = tag.getInt("VertSize");
        }
        if (tag.contains("VertOffset")) {
            this.vertOffset = tag.getInt("VertOffset");
        }
        if (tag.contains("RenderMode")) {
            this.renderMode = tag.getInt("RenderMode");
        }
        if (tag.contains("TaxRate")) {
            this.taxRate = tag.getInt("TaxRate");
        }
        if (tag.contains("CustomName")) {
            this.name = tag.getString("CustomName");
        }
        if (tag.contains("Owner")) {
            this.owner.load(tag.getCompound("Owner"));
        }
        if (tag.contains("StoredMoney")) {
            this.storedMoney.safeLoad(tag, "StoredMoney");
        }
        if (tag.contains("ForceAcceptance")) {
            this.forceAcceptance = tag.getBoolean("ForceAcceptance");
        }
        if (tag.contains("IsInfiniteRange")) {
            this.infiniteRange = tag.getBoolean("IsInfiniteRange");
        }
        if (tag.contains("IsActivated")) {
            this.active = tag.getBoolean("IsActivated");
        }
        if (tag.contains("AcceptedEntries")) {
            ListTag acceptedEntriesList = tag.getList("AcceptedEntries", 10);
            this.acceptedEntries.clear();
            for (int i = 0; i < acceptedEntriesList.size(); i++) {
                TaxableReference r = TaxableReference.load(acceptedEntriesList.getCompound(i));
                if (r != null) {
                    this.acceptedEntries.add(r);
                }
            }
        }
        if (tag.contains("Notifications")) {
            this.logger.load(tag.getCompound("Notifications"));
        }
        if (tag.contains("Statistics")) {
            this.stats.load(tag.getCompound("Statistics"));
        }
    }
}