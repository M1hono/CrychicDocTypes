package brightspark.asynclocator.logic;

import brightspark.asynclocator.ALConstants;
import brightspark.asynclocator.AsyncLocator;
import brightspark.asynclocator.mixins.MerchantOfferAccess;
import brightspark.asynclocator.platform.Services;
import net.minecraft.core.BlockPos;
import net.minecraft.core.HolderSet;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.tags.TagKey;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.npc.AbstractVillager;
import net.minecraft.world.entity.npc.Villager;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.trading.MerchantOffer;
import net.minecraft.world.level.levelgen.structure.Structure;
import net.minecraft.world.level.saveddata.maps.MapDecoration;

public class MerchantLogic {

    private MerchantLogic() {
    }

    @Deprecated(since = "1.1.0", forRemoval = true)
    public static ItemStack createEmptyMap() {
        return CommonLogic.createEmptyMap();
    }

    public static void invalidateMap(AbstractVillager merchant, ItemStack mapStack) {
        mapStack.setHoverName(Component.translatable("item.minecraft.map"));
        merchant.getOffers().stream().filter(offer -> offer.getResult() == mapStack).findFirst().ifPresentOrElse(offer -> removeOffer(merchant, offer), () -> ALConstants.logWarn("Failed to find merchant offer for map"));
    }

    public static void removeOffer(AbstractVillager merchant, MerchantOffer offer) {
        if (Services.CONFIG.removeOffer()) {
            if (merchant.getOffers().remove(offer)) {
                ALConstants.logInfo("Removed merchant map offer");
            } else {
                ALConstants.logWarn("Failed to remove merchant map offer");
            }
        } else {
            ((MerchantOfferAccess) offer).setMaxUses(0);
            offer.setToOutOfStock();
            ALConstants.logInfo("Marked merchant map offer as out of stock");
        }
    }

    @Deprecated(since = "1.1.0", forRemoval = true)
    public static void updateMap(ItemStack mapStack, ServerLevel level, BlockPos pos, String displayName, MapDecoration.Type destinationType) {
        CommonLogic.updateMap(mapStack, level, pos, 2, destinationType, displayName);
    }

    public static void handleLocationFound(ServerLevel level, AbstractVillager merchant, ItemStack mapStack, String displayName, MapDecoration.Type destinationType, BlockPos pos) {
        if (pos == null) {
            ALConstants.logInfo("No location found - invalidating merchant offer");
            invalidateMap(merchant, mapStack);
        } else {
            ALConstants.logInfo("Location found - updating treasure map in merchant offer");
            CommonLogic.updateMap(mapStack, level, pos, 2, destinationType, displayName);
        }
        if (merchant.getTradingPlayer() instanceof ServerPlayer tradingPlayer) {
            ALConstants.logInfo("Player {} currently trading - updating merchant offers", tradingPlayer);
            tradingPlayer.sendMerchantOffers(tradingPlayer.f_36096_.containerId, merchant.getOffers(), merchant instanceof Villager villager ? villager.getVillagerData().getLevel() : 1, merchant.getVillagerXp(), merchant.showProgressBar(), merchant.m_7862_());
        }
    }

    public static MerchantOffer updateMapAsync(Entity pTrader, int emeraldCost, String displayName, MapDecoration.Type destinationType, int maxUses, int villagerXp, TagKey<Structure> destination) {
        return updateMapAsyncInternal(pTrader, emeraldCost, maxUses, villagerXp, (level, merchant, mapStack) -> AsyncLocator.locate(level, destination, merchant.m_20183_(), 100, true).thenOnServerThread(pos -> handleLocationFound(level, merchant, mapStack, displayName, destinationType, pos)));
    }

    public static MerchantOffer updateMapAsync(Entity pTrader, int emeraldCost, String displayName, MapDecoration.Type destinationType, int maxUses, int villagerXp, HolderSet<Structure> structureSet) {
        return updateMapAsyncInternal(pTrader, emeraldCost, maxUses, villagerXp, (level, merchant, mapStack) -> AsyncLocator.locate(level, structureSet, merchant.m_20183_(), 100, true).thenOnServerThread(pair -> handleLocationFound(level, merchant, mapStack, displayName, destinationType, (BlockPos) pair.getFirst())));
    }

    private static MerchantOffer updateMapAsyncInternal(Entity trader, int emeraldCost, int maxUses, int villagerXp, MerchantLogic.MapUpdateTask task) {
        if (trader instanceof AbstractVillager merchant) {
            ItemStack mapStack = CommonLogic.createEmptyMap();
            task.apply((ServerLevel) trader.level(), merchant, mapStack);
            return new MerchantOffer(new ItemStack(Items.EMERALD, emeraldCost), new ItemStack(Items.COMPASS), mapStack, maxUses, villagerXp, 0.2F);
        } else {
            ALConstants.logInfo("Merchant is not of type {} - not running async logic", AbstractVillager.class.getSimpleName());
            return null;
        }
    }

    public interface MapUpdateTask {

        void apply(ServerLevel var1, AbstractVillager var2, ItemStack var3);
    }
}