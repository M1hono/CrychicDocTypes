package io.github.lightman314.lightmanscurrency.common.traders.rules.types;

import com.google.gson.JsonObject;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.events.TradeEvent;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.rules.TradeRuleType;
import io.github.lightman314.lightmanscurrency.api.traders.trade.TradeData;
import io.github.lightman314.lightmanscurrency.api.traders.trade.TradeDirection;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRulesClientSubTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRulesClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.rule_tabs.FreeSampleTab;
import io.github.lightman314.lightmanscurrency.common.traders.rules.ITradeRuleHost;
import io.github.lightman314.lightmanscurrency.common.traders.rules.PriceTweakingTradeRule;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.jetbrains.annotations.Nullable;

public class FreeSample extends PriceTweakingTradeRule {

    public static final TradeRuleType<FreeSample> TYPE = new TradeRuleType<>(new ResourceLocation("lightmanscurrency", "free_sample"), FreeSample::new);

    List<UUID> memory = new ArrayList();

    public int getSampleCount() {
        return this.memory.size();
    }

    private FreeSample() {
        super(TYPE);
    }

    @Override
    protected boolean canActivate(@Nullable ITradeRuleHost host) {
        if (host instanceof TradeData trade && trade.getTradeDirection() != TradeDirection.SALE) {
            return false;
        }
        return super.canActivate(host);
    }

    @Override
    public void beforeTrade(TradeEvent.PreTradeEvent event) {
        if (this.giveDiscount(event)) {
            event.addHelpful(LCText.TRADE_RULE_FREE_SAMPLE_INFO.get());
        }
    }

    @Override
    public void tradeCost(TradeEvent.TradeCostEvent event) {
        if (this.giveDiscount(event)) {
            event.makeFree();
        }
    }

    @Override
    public void afterTrade(TradeEvent.PostTradeEvent event) {
        if (this.giveDiscount(event)) {
            this.addToMemory(event.getPlayerReference().id);
            event.markDirty();
        }
    }

    private boolean giveDiscount(TradeEvent event) {
        return this.giveDiscount(event.getPlayerReference().id) && event.getTrade().getTradeDirection() == TradeDirection.SALE;
    }

    private void addToMemory(UUID playerID) {
        if (!this.memory.contains(playerID)) {
            this.memory.add(playerID);
        }
    }

    public boolean giveDiscount(UUID playerID) {
        return !this.givenFreeSample(playerID);
    }

    private boolean givenFreeSample(UUID playerID) {
        return this.memory.contains(playerID);
    }

    @Override
    protected void saveAdditional(@Nonnull CompoundTag compound) {
        ListTag memoryList = new ListTag();
        for (UUID entry : this.memory) {
            CompoundTag tag = new CompoundTag();
            tag.putUUID("ID", entry);
            memoryList.add(tag);
        }
        compound.put("Memory", memoryList);
    }

    @Override
    public JsonObject saveToJson(@Nonnull JsonObject json) {
        return json;
    }

    @Override
    protected void loadAdditional(@Nonnull CompoundTag compound) {
        if (compound.contains("Memory", 9)) {
            this.memory.clear();
            ListTag memoryList = compound.getList("Memory", 10);
            for (int i = 0; i < memoryList.size(); i++) {
                CompoundTag tag = memoryList.getCompound(i);
                if (tag.contains("ID")) {
                    this.memory.add(tag.getUUID("ID"));
                } else if (tag.contains("id")) {
                    this.memory.add(tag.getUUID("id"));
                }
            }
        }
    }

    @Override
    public CompoundTag savePersistentData() {
        CompoundTag data = new CompoundTag();
        ListTag memoryList = new ListTag();
        for (UUID entry : this.memory) {
            CompoundTag tag = new CompoundTag();
            tag.putUUID("ID", entry);
            memoryList.add(tag);
        }
        data.put("Memory", memoryList);
        return data;
    }

    @Override
    public void loadPersistentData(CompoundTag data) {
        if (data.contains("Memory", 9)) {
            this.memory.clear();
            ListTag memoryList = data.getList("Memory", 10);
            for (int i = 0; i < memoryList.size(); i++) {
                CompoundTag tag = memoryList.getCompound(i);
                if (tag.contains("ID")) {
                    this.memory.add(tag.getUUID("ID"));
                } else if (tag.contains("id")) {
                    this.memory.add(tag.getUUID("id"));
                }
            }
        }
    }

    @Override
    public void loadFromJson(@Nonnull JsonObject json) {
    }

    @Override
    protected void handleUpdateMessage(@Nonnull LazyPacketData updateInfo) {
        if (updateInfo.contains("ClearData")) {
            this.memory.clear();
        }
    }

    @Nonnull
    @OnlyIn(Dist.CLIENT)
    @Override
    public TradeRulesClientSubTab createTab(TradeRulesClientTab<?> parent) {
        return new FreeSampleTab(parent);
    }
}