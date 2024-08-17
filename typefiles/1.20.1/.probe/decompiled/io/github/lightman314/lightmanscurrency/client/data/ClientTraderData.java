package io.github.lightman314.lightmanscurrency.client.data;

import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.minecraft.nbt.CompoundTag;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.ClientPlayerNetworkEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;

@EventBusSubscriber({ Dist.CLIENT })
public class ClientTraderData {

    private static final Map<Long, TraderData> loadedTraders = new HashMap();

    public static List<TraderData> GetAllTraders() {
        return new ArrayList(loadedTraders.values());
    }

    public static TraderData GetTrader(long traderID) {
        return loadedTraders.containsKey(traderID) ? (TraderData) loadedTraders.get(traderID) : null;
    }

    public static void ClearTraders() {
        loadedTraders.clear();
    }

    public static void UpdateTrader(CompoundTag compound) {
        long traderID = compound.getLong("ID");
        if (loadedTraders.containsKey(traderID)) {
            ((TraderData) loadedTraders.get(traderID)).load(compound);
        } else {
            TraderData trader = TraderData.Deserialize(true, compound);
            if (trader != null) {
                loadedTraders.put(traderID, trader);
                trader.OnRegisteredToOffice();
            }
        }
    }

    public static void RemoveTrader(long traderID) {
        loadedTraders.remove(traderID);
    }

    @SubscribeEvent
    public static void onClientLogout(ClientPlayerNetworkEvent.LoggingOut event) {
        ClearTraders();
    }
}