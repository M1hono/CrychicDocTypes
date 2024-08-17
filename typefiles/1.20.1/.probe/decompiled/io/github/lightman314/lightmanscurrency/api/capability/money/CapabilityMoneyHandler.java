package io.github.lightman314.lightmanscurrency.api.capability.money;

import io.github.lightman314.lightmanscurrency.common.capability.CurrencyCapabilities;
import javax.annotation.Nonnull;
import net.minecraft.core.Direction;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ICapabilityProvider;
import net.minecraftforge.common.util.LazyOptional;
import org.jetbrains.annotations.Nullable;

public class CapabilityMoneyHandler {

    private CapabilityMoneyHandler() {
    }

    @Nonnull
    public static ICapabilityProvider createProvider(@Nonnull IMoneyHandler handler) {
        return new CapabilityMoneyHandler.Provider(handler);
    }

    public static IMoneyHandler getCapability(@Nonnull ItemStack stack) {
        LazyOptional<IMoneyHandler> cap = stack.getCapability(CurrencyCapabilities.MONEY_HANDLER);
        return cap.isPresent() ? cap.orElseThrow(() -> new RuntimeException("Unexpected error occurred!")) : null;
    }

    private static class Provider implements ICapabilityProvider {

        private final LazyOptional<IMoneyHandler> lazyOptional;

        private Provider(@Nonnull IMoneyHandler viewer) {
            this.lazyOptional = LazyOptional.of(() -> viewer);
        }

        @Nonnull
        @Override
        public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {
            return CurrencyCapabilities.MONEY_HANDLER.orEmpty(cap, this.lazyOptional);
        }
    }
}