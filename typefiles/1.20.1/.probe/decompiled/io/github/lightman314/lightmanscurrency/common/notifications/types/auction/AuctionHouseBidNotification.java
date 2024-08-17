package io.github.lightman314.lightmanscurrency.common.notifications.types.auction;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationType;
import io.github.lightman314.lightmanscurrency.common.notifications.data.ItemData;
import io.github.lightman314.lightmanscurrency.common.traders.auction.tradedata.AuctionTradeData;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;

public class AuctionHouseBidNotification extends AuctionHouseNotification {

    public static final NotificationType<AuctionHouseBidNotification> TYPE = new NotificationType<>(new ResourceLocation("lightmanscurrency", "auction_house_outbid"), AuctionHouseBidNotification::new);

    List<ItemData> items;

    MoneyValue cost;

    String customer;

    private AuctionHouseBidNotification() {
    }

    public AuctionHouseBidNotification(AuctionTradeData trade) {
        this.cost = trade.getLastBidAmount();
        this.customer = trade.getLastBidPlayer().getName(false);
        this.items = new ArrayList();
        for (int i = 0; i < trade.getAuctionItems().size(); i++) {
            this.items.add(new ItemData((ItemStack) trade.getAuctionItems().get(i)));
        }
    }

    @Nonnull
    @Override
    protected NotificationType<AuctionHouseBidNotification> getType() {
        return TYPE;
    }

    @Nonnull
    @Override
    public MutableComponent getMessage() {
        Component itemText = ItemData.getItemNames(this.items);
        Component cost = this.cost.getText();
        return LCText.NOTIFICATION_AUCTION_BID.get(this.customer, itemText, cost);
    }

    @Override
    protected void saveAdditional(@Nonnull CompoundTag compound) {
        ListTag itemList = new ListTag();
        for (ItemData item : this.items) {
            itemList.add(item.save());
        }
        compound.put("Items", itemList);
        compound.put("Price", this.cost.save());
        compound.putString("Customer", this.customer);
    }

    @Override
    protected void loadAdditional(@Nonnull CompoundTag compound) {
        ListTag itemList = compound.getList("Items", 10);
        this.items = new ArrayList();
        for (int i = 0; i < itemList.size(); i++) {
            this.items.add(ItemData.load(itemList.getCompound(i)));
        }
        this.cost = MoneyValue.safeLoad(compound, "Price");
        this.customer = compound.getString("Customer");
    }
}