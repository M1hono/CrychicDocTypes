package io.github.lightman314.lightmanscurrency.common.traders.auction;

import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.common.traders.auction.tradedata.AuctionTradeData;
import io.github.lightman314.lightmanscurrency.util.FileUtil;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.ResourceLocationException;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.item.ItemStack;

public class PersistentAuctionData {

    public final String id;

    public final long duration;

    private final List<ItemStack> items;

    private final MoneyValue startBid;

    private final MoneyValue minBid;

    public final List<ItemStack> getAuctionItems() {
        List<ItemStack> copy = new ArrayList();
        for (ItemStack stack : this.items) {
            copy.add(stack.copy());
        }
        return copy;
    }

    public final MoneyValue getStartingBid() {
        return this.startBid;
    }

    public final MoneyValue getMinimumBidDifference() {
        return this.minBid;
    }

    private PersistentAuctionData(String id, long duration, List<ItemStack> items, MoneyValue startBid, MoneyValue minBid) {
        this.id = id;
        this.duration = duration;
        this.items = items;
        this.startBid = startBid;
        this.minBid = minBid;
    }

    public AuctionTradeData createAuction() {
        return new AuctionTradeData(this);
    }

    public static PersistentAuctionData load(JsonObject json) throws JsonSyntaxException, ResourceLocationException {
        String id;
        if (json.has("id")) {
            id = GsonHelper.getAsString(json, "id");
        } else {
            id = GsonHelper.getAsString(json, "ID");
        }
        List<ItemStack> items = new ArrayList();
        if (json.has("Item1")) {
            items.add(FileUtil.parseItemStack(GsonHelper.getAsJsonObject(json, "Item1")));
        }
        if (json.has("Item2")) {
            items.add(FileUtil.parseItemStack(GsonHelper.getAsJsonObject(json, "Item2")));
        }
        if (items.size() == 0) {
            throw new JsonSyntaxException("Auction has no 'Item1' or 'Item2' entry!");
        } else {
            long duration = Math.max(GsonHelper.getAsLong(json, "Duration", AuctionTradeData.GetDefaultDuration()), AuctionTradeData.GetMinimumDuration());
            MoneyValue startingBid = MoneyValue.loadFromJson(GsonHelper.getNonNull(json, "StartingBid"));
            if (!startingBid.isEmpty() && !startingBid.isFree()) {
                MoneyValue minimumBid = startingBid.getSmallestValue();
                if (json.has("MinimumBid")) {
                    minimumBid = MoneyValue.loadFromJson(GsonHelper.getNonNull(json, "MinimumBid"));
                }
                if (!startingBid.getUniqueName().equals(minimumBid.getUniqueName())) {
                    throw new JsonSyntaxException("StartingBid and MinimumBid are not compatible money values!");
                } else {
                    return new PersistentAuctionData(id, duration, items, startingBid, minimumBid);
                }
            } else {
                throw new JsonSyntaxException("StartingBid cannot be empty and/or free!");
            }
        }
    }
}