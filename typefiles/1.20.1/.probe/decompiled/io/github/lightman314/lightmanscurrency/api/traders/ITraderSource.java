package io.github.lightman314.lightmanscurrency.api.traders;

import java.util.List;
import java.util.function.Supplier;
import javax.annotation.Nonnull;

public interface ITraderSource {

    ITraderSource CLIENT_TRADER_SOURCE = new ITraderSource.NetworkTraderSource(true);

    ITraderSource SERVER_TRADER_SOURCE = new ITraderSource.NetworkTraderSource(false);

    @Nonnull
    List<TraderData> getTraders();

    boolean isSingleTrader();

    @Nonnull
    default TraderData getSingleTrader() {
        return (TraderData) this.getTraders().get(0);
    }

    static Supplier<ITraderSource> UniversalTraderSource(boolean isClient) {
        return isClient ? () -> CLIENT_TRADER_SOURCE : () -> SERVER_TRADER_SOURCE;
    }

    public static class NetworkTraderSource implements ITraderSource {

        private final boolean isClient;

        private NetworkTraderSource(boolean isClient) {
            this.isClient = isClient;
        }

        @Nonnull
        @Override
        public List<TraderData> getTraders() {
            return TraderAPI.getAllTerminalTraders(this.isClient);
        }

        @Override
        public boolean isSingleTrader() {
            return false;
        }
    }
}