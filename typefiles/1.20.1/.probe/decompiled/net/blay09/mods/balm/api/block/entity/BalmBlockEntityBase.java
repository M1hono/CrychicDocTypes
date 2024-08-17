package net.blay09.mods.balm.api.block.entity;

import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;
import com.mojang.datafixers.util.Pair;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.blay09.mods.balm.api.Balm;
import net.blay09.mods.balm.api.energy.EnergyStorage;
import net.blay09.mods.balm.api.fluid.FluidTank;
import net.blay09.mods.balm.api.provider.BalmProvider;
import net.blay09.mods.balm.api.provider.BalmProviderHolder;
import net.blay09.mods.balm.forge.container.BalmInvWrapper;
import net.blay09.mods.balm.forge.energy.ForgeEnergyStorage;
import net.blay09.mods.balm.forge.fluid.ForgeFluidTank;
import net.blay09.mods.balm.forge.provider.ForgeBalmProviders;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.Container;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.common.util.LazyOptional;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public abstract class BalmBlockEntityBase extends BlockEntity {

    private final Map<Capability<?>, LazyOptional<?>> capabilities = new HashMap();

    private final Table<Capability<?>, Direction, LazyOptional<?>> sidedCapabilities = HashBasedTable.create();

    private boolean capabilitiesInitialized;

    public BalmBlockEntityBase(BlockEntityType<?> blockEntityType, BlockPos blockPos, BlockState blockState) {
        super(blockEntityType, blockPos, blockState);
    }

    private void addCapabilities(BalmProvider<?> provider, Map<Capability<?>, LazyOptional<?>> capabilities) {
        ForgeBalmProviders forgeProviders = (ForgeBalmProviders) Balm.getProviders();
        Capability<?> capability = forgeProviders.getCapability(provider.getProviderClass());
        capabilities.put(capability, LazyOptional.of(provider::getInstance));
        if (provider.getProviderClass() == Container.class) {
            capabilities.put(ForgeCapabilities.ITEM_HANDLER, LazyOptional.of(() -> new BalmInvWrapper((Container) provider.getInstance())));
        } else if (provider.getProviderClass() == FluidTank.class) {
            capabilities.put(ForgeCapabilities.FLUID_HANDLER, LazyOptional.of(() -> new ForgeFluidTank((FluidTank) provider.getInstance())));
        } else if (provider.getProviderClass() == EnergyStorage.class) {
            capabilities.put(ForgeCapabilities.ENERGY, LazyOptional.of(() -> new ForgeEnergyStorage((EnergyStorage) provider.getInstance())));
        }
    }

    public <T> T getProvider(Class<T> clazz) {
        ForgeBalmProviders forgeProviders = (ForgeBalmProviders) Balm.getProviders();
        Capability<?> capability = forgeProviders.getCapability(clazz);
        return (T) this.getCapability(capability).resolve().orElse(null);
    }

    @NotNull
    public <T> LazyOptional<T> getCapability(@NotNull Capability<T> cap, @Nullable Direction side) {
        if (!this.capabilitiesInitialized) {
            List<Object> providers = new ArrayList();
            this.buildProviders(providers);
            for (Object holder : providers) {
                BalmProviderHolder providerHolder = (BalmProviderHolder) holder;
                for (BalmProvider<?> provider : providerHolder.getProviders()) {
                    this.addCapabilities(provider, this.capabilities);
                }
                for (Pair<Direction, BalmProvider<?>> pair : providerHolder.getSidedProviders()) {
                    Direction direction = (Direction) pair.getFirst();
                    BalmProvider<?> provider = (BalmProvider<?>) pair.getSecond();
                    Map<Capability<?>, LazyOptional<?>> sidedCapabilities = this.sidedCapabilities.column(direction);
                    this.addCapabilities(provider, sidedCapabilities);
                }
            }
            this.capabilitiesInitialized = true;
        }
        LazyOptional<?> result = null;
        if (side != null) {
            result = (LazyOptional<?>) this.sidedCapabilities.get(cap, side);
        }
        if (result == null) {
            result = (LazyOptional<?>) this.capabilities.get(cap);
        }
        return result != null ? result.cast() : super.getCapability(cap, side);
    }

    protected abstract void buildProviders(List<Object> var1);
}