package io.github.lightman314.lightmanscurrency.common.traders.paygate.tradedata;

import com.google.common.collect.Lists;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.ticket.TicketData;
import io.github.lightman314.lightmanscurrency.api.traders.TradeContext;
import io.github.lightman314.lightmanscurrency.api.traders.trade.TradeData;
import io.github.lightman314.lightmanscurrency.api.traders.trade.TradeDirection;
import io.github.lightman314.lightmanscurrency.api.traders.trade.client.TradeRenderManager;
import io.github.lightman314.lightmanscurrency.api.traders.trade.comparison.TradeComparisonResult;
import io.github.lightman314.lightmanscurrency.common.core.ModItems;
import io.github.lightman314.lightmanscurrency.common.items.TicketItem;
import io.github.lightman314.lightmanscurrency.common.menus.traderstorage.trades_basic.BasicTradeEditTab;
import io.github.lightman314.lightmanscurrency.common.text.TimeUnitTextEntry;
import io.github.lightman314.lightmanscurrency.common.tickets.TicketSaveData;
import io.github.lightman314.lightmanscurrency.common.traders.paygate.PaygateTraderData;
import io.github.lightman314.lightmanscurrency.common.traders.paygate.tradedata.client.PaygateTradeButtonRenderer;
import java.util.List;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.registries.ForgeRegistries;

public class PaygateTradeData extends TradeData {

    int duration = 1;

    Item ticketItem = Items.AIR;

    long ticketID = Long.MIN_VALUE;

    int ticketColor = 16777215;

    boolean storeTicketStubs = false;

    public PaygateTradeData() {
        super(true);
    }

    public int getDuration() {
        return Math.max(this.duration, 1);
    }

    public void setDuration(int duration) {
        this.duration = Math.max(duration, 1);
    }

    public int getTicketColor() {
        return this.ticketColor;
    }

    public boolean isTicketTrade() {
        return this.ticketID >= -1L;
    }

    public Item getTicketItem() {
        return this.ticketItem;
    }

    public long getTicketID() {
        return this.ticketID;
    }

    public void setTicket(ItemStack ticket) {
        TicketData data = TicketData.getForMaster(ticket);
        if (data != null && TicketItem.isMasterTicket(ticket)) {
            this.ticketItem = data.ticket;
            this.ticketID = TicketItem.GetTicketID(ticket);
            this.ticketColor = TicketItem.GetTicketColor(ticket);
        } else {
            this.ticketItem = Items.AIR;
            this.ticketID = Long.MIN_VALUE;
            this.ticketColor = 16777215;
        }
        this.validateRuleStates();
    }

    @Override
    public int getStock(@Nonnull TradeContext context) {
        return this.isValid() ? 1 : 0;
    }

    public boolean shouldStoreTicketStubs() {
        return this.storeTicketStubs;
    }

    public void setStoreTicketStubs(boolean value) {
        this.storeTicketStubs = value;
    }

    public ItemStack getTicketStub() {
        TicketData data = TicketData.getForTicket(new ItemStack(this.ticketItem));
        return data != null ? new ItemStack(data.ticketStub) : ItemStack.EMPTY;
    }

    @Override
    public TradeDirection getTradeDirection() {
        return TradeDirection.SALE;
    }

    public boolean canAfford(TradeContext context) {
        return !this.isTicketTrade() ? context.hasFunds(this.cost) : context.hasTicket(this.ticketID) || context.hasPass(this.ticketID);
    }

    @Override
    public boolean isValid() {
        return this.getDuration() >= 1 && (this.isTicketTrade() || super.isValid());
    }

    public static void saveAllData(CompoundTag nbt, List<PaygateTradeData> data) {
        saveAllData(nbt, data, "Trades");
    }

    public static void saveAllData(CompoundTag nbt, List<PaygateTradeData> data, String key) {
        ListTag listNBT = new ListTag();
        for (PaygateTradeData datum : data) {
            listNBT.add(datum.getAsNBT());
        }
        if (!listNBT.isEmpty()) {
            nbt.put(key, listNBT);
        }
    }

    public static PaygateTradeData loadData(CompoundTag nbt) {
        PaygateTradeData trade = new PaygateTradeData();
        trade.loadFromNBT(nbt);
        return trade;
    }

    public static List<PaygateTradeData> loadAllData(CompoundTag nbt) {
        return loadAllData("Trades", nbt);
    }

    public static List<PaygateTradeData> loadAllData(String key, CompoundTag nbt) {
        ListTag listNBT = nbt.getList(key, 10);
        List<PaygateTradeData> data = listOfSize(listNBT.size());
        for (int i = 0; i < listNBT.size(); i++) {
            ((PaygateTradeData) data.get(i)).loadFromNBT(listNBT.getCompound(i));
        }
        return data;
    }

    public static List<PaygateTradeData> listOfSize(int tradeCount) {
        List<PaygateTradeData> data = Lists.newArrayList();
        while (data.size() < tradeCount) {
            data.add(new PaygateTradeData());
        }
        return data;
    }

    @Override
    public CompoundTag getAsNBT() {
        CompoundTag compound = super.getAsNBT();
        compound.putInt("Duration", this.getDuration());
        if (this.ticketID >= -1L) {
            compound.putString("TicketItem", ForgeRegistries.ITEMS.getKey(this.ticketItem).toString());
            compound.putLong("TicketID", this.ticketID);
            compound.putInt("TicketColor", this.ticketColor);
            compound.putBoolean("StoreTicketStubs", this.storeTicketStubs);
        }
        return compound;
    }

    @Override
    protected void loadFromNBT(CompoundTag compound) {
        super.loadFromNBT(compound);
        this.duration = compound.getInt("Duration");
        if (compound.contains("TicketID")) {
            this.ticketID = compound.getLong("TicketID");
            if (compound.contains("TicketItem")) {
                this.ticketItem = ForgeRegistries.ITEMS.getValue(new ResourceLocation(compound.getString("TicketItem")));
            } else {
                this.ticketItem = ModItems.TICKET.get();
            }
        } else if (compound.contains("Ticket")) {
            this.ticketID = TicketSaveData.getConvertedID(compound.getUUID("Ticket"));
            this.ticketColor = TicketItem.GetDefaultTicketColor(this.ticketID);
            this.ticketItem = ModItems.TICKET.get();
        } else {
            this.ticketID = Long.MIN_VALUE;
            this.ticketItem = Items.AIR;
        }
        if (compound.contains("TicketColor")) {
            this.ticketColor = compound.getInt("TicketColor");
        } else if (this.ticketID >= -1L) {
            this.ticketColor = TicketItem.GetDefaultTicketColor(this.ticketID);
        }
        if (compound.contains("StoreTicketStubs")) {
            this.storeTicketStubs = compound.getBoolean("StoreTicketStubs");
        } else {
            this.storeTicketStubs = false;
        }
    }

    @Override
    public TradeComparisonResult compare(TradeData otherTrade) {
        LightmansCurrency.LogWarning("Attempting to compare paygate trades, but paygate trades do not support this interaction.");
        return new TradeComparisonResult();
    }

    @Override
    public boolean AcceptableDifferences(TradeComparisonResult result) {
        LightmansCurrency.LogWarning("Attempting to determine if the paygate trades differences are acceptable, but paygate trades do not support this interaction.");
        return false;
    }

    @Override
    public List<Component> GetDifferenceWarnings(TradeComparisonResult differences) {
        LightmansCurrency.LogWarning("Attempting to get warnings for different paygate trades, but paygate trades do not support this interaction.");
        return Lists.newArrayList();
    }

    public static MutableComponent formatDurationShort(int duration) {
        int ticks = duration % 20;
        int seconds = duration / 20 % 60;
        int minutes = duration / 1200 % 60;
        int hours = duration / 72000;
        MutableComponent result = EasyText.empty();
        if (hours > 0) {
            result.append(formatUnitShort(hours, LCText.TIME_UNIT_HOUR));
        }
        if (minutes > 0) {
            result.append(formatUnitShort(minutes, LCText.TIME_UNIT_MINUTE));
        }
        if (seconds > 0) {
            result.append(formatUnitShort(minutes, LCText.TIME_UNIT_SECOND));
        }
        if (ticks > 0 || result.getString().isBlank()) {
            result.append(formatUnitShort(minutes, LCText.TIME_UNIT_TICK));
        }
        return result;
    }

    public static MutableComponent formatDurationDisplay(int duration) {
        int ticks = duration % 20;
        int seconds = duration / 20 % 60;
        int minutes = duration / 1200 % 60;
        int hours = duration / 72000;
        if (hours > 0) {
            return formatUnitShort(hours, LCText.TIME_UNIT_HOUR);
        } else if (minutes > 0) {
            return formatUnitShort(hours, LCText.TIME_UNIT_MINUTE);
        } else {
            return seconds > 0 ? formatUnitShort(hours, LCText.TIME_UNIT_SECOND) : formatUnitShort(hours, LCText.TIME_UNIT_TICK);
        }
    }

    public static MutableComponent formatDuration(int duration) {
        int ticks = duration % 20;
        int seconds = duration / 20 % 60;
        int minutes = duration / 1200 % 60;
        int hours = duration / 72000;
        MutableComponent result = EasyText.empty();
        boolean addSpacer = false;
        if (hours > 0) {
            appendUnit(result, false, hours, LCText.TIME_UNIT_HOUR);
            addSpacer = true;
        }
        if (minutes > 0) {
            appendUnit(result, addSpacer, minutes, LCText.TIME_UNIT_MINUTE);
            addSpacer = true;
        }
        if (seconds > 0) {
            appendUnit(result, addSpacer, seconds, LCText.TIME_UNIT_SECOND);
            addSpacer = true;
        }
        if (ticks > 0) {
            appendUnit(result, addSpacer, seconds, LCText.TIME_UNIT_TICK);
        }
        return result;
    }

    private static void appendUnit(@Nonnull MutableComponent result, boolean addSpacer, int count, @Nonnull TimeUnitTextEntry entry) {
        if (addSpacer) {
            result.append(EasyText.literal(" "));
        }
        result.append(EasyText.literal(String.valueOf(count)));
        if (count > 1) {
            result.append(entry.pluralText.get());
        } else {
            result.append(entry.fullText.get());
        }
    }

    @Nonnull
    private static MutableComponent formatUnitShort(int count, @Nonnull TimeUnitTextEntry entry) {
        return EasyText.literal(String.valueOf(count)).append(entry.shortText.get());
    }

    @Nonnull
    @OnlyIn(Dist.CLIENT)
    @Override
    public TradeRenderManager<?> getButtonRenderer() {
        return new PaygateTradeButtonRenderer(this);
    }

    @Override
    public void OnInputDisplayInteraction(@Nonnull BasicTradeEditTab tab, Consumer<LazyPacketData.Builder> clientHandler, int index, int button, @Nonnull ItemStack heldItem) {
        if (tab.menu.getTrader() instanceof PaygateTraderData paygate) {
            int tradeIndex = paygate.getTradeData().indexOf(this);
            if (tradeIndex < 0) {
                return;
            }
            if (TicketItem.isMasterTicket(heldItem)) {
                this.setTicket(heldItem);
                if (tab.menu.isClient()) {
                    tab.sendInputInteractionMessage(tradeIndex, 0, button, heldItem);
                }
            } else {
                tab.sendOpenTabMessage(2, LazyPacketData.simpleInt("TradeIndex", tradeIndex));
            }
        }
    }

    @Override
    public void OnOutputDisplayInteraction(@Nonnull BasicTradeEditTab tab, Consumer<LazyPacketData.Builder> clientHandler, int index, int button, @Nonnull ItemStack heldItem) {
        if (tab.menu.getTrader() instanceof PaygateTraderData paygate) {
            int tradeIndex = paygate.getTradeData().indexOf(this);
            if (tradeIndex < 0) {
                return;
            }
            tab.sendOpenTabMessage(2, LazyPacketData.simpleInt("TradeIndex", tradeIndex));
        }
    }

    @Override
    public void OnInteraction(@Nonnull BasicTradeEditTab tab, Consumer<LazyPacketData.Builder> clientHandler, int mouseX, int mouseY, int button, @Nonnull ItemStack heldItem) {
        if (tab.menu.getTrader() instanceof PaygateTraderData paygate) {
            int tradeIndex = paygate.getTradeData().indexOf(this);
            if (tradeIndex < 0) {
                return;
            }
            tab.sendOpenTabMessage(2, LazyPacketData.simpleInt("TradeIndex", tradeIndex));
        }
    }

    @Override
    public boolean isMoneyRelevant() {
        return !this.isTicketTrade();
    }
}