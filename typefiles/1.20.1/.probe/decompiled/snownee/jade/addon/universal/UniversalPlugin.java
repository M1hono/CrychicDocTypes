package snownee.jade.addon.universal;

import net.minecraft.world.entity.Entity;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import snownee.jade.api.IWailaClientRegistration;
import snownee.jade.api.IWailaCommonRegistration;
import snownee.jade.api.IWailaPlugin;
import snownee.jade.api.Identifiers;
import snownee.jade.api.WailaPlugin;

@WailaPlugin
public class UniversalPlugin implements IWailaPlugin {

    @Override
    public void register(IWailaCommonRegistration registration) {
        registration.registerBlockDataProvider(ItemStorageProvider.INSTANCE, BlockEntity.class);
        registration.registerEntityDataProvider(EntityItemStorageProvider.INSTANCE, Entity.class);
        registration.registerItemStorage(ItemStorageProvider.INSTANCE, Object.class);
        registration.registerBlockDataProvider(FluidStorageProvider.INSTANCE, BlockEntity.class);
        registration.registerEntityDataProvider(EntityFluidStorageProvider.INSTANCE, Entity.class);
        registration.registerFluidStorage(FluidStorageProvider.INSTANCE, Object.class);
        registration.registerBlockDataProvider(EnergyStorageProvider.INSTANCE, BlockEntity.class);
        registration.registerEntityDataProvider(EntityEnergyStorageProvider.INSTANCE, Entity.class);
        registration.registerEnergyStorage(EnergyStorageProvider.INSTANCE, Object.class);
        registration.registerBlockDataProvider(ProgressProvider.INSTANCE, BlockEntity.class);
        registration.registerEntityDataProvider(EntityProgressProvider.INSTANCE, Entity.class);
    }

    @Override
    public void registerClient(IWailaClientRegistration registration) {
        registration.addConfig(Identifiers.MC_ITEM_STORAGE_DETAILED_AMOUNT, 54, 0, 54, false);
        registration.addConfig(Identifiers.MC_ITEM_STORAGE_NORMAL_AMOUNT, 9, 0, 54, false);
        registration.addConfig(Identifiers.MC_ITEM_STORAGE_SHOW_NAME_AMOUNT, 5, 0, 9, true);
        registration.addConfig(Identifiers.MC_ITEM_STORAGE_ITEMS_PER_LINE, 9, 3, 27, true);
        registration.addConfig(Identifiers.UNIVERSAL_ENERGY_STORAGE_DETAILED, false);
        registration.addConfig(Identifiers.UNIVERSAL_FLUID_STORAGE_DETAILED, false);
        registration.registerBlockComponent(ItemStorageProvider.INSTANCE, Block.class);
        registration.registerEntityComponent(EntityItemStorageProvider.INSTANCE, Entity.class);
        registration.registerItemStorageClient(ItemStorageProvider.INSTANCE);
        registration.registerBlockComponent(FluidStorageProvider.INSTANCE, Block.class);
        registration.registerEntityComponent(EntityFluidStorageProvider.INSTANCE, Entity.class);
        registration.registerFluidStorageClient(FluidStorageProvider.INSTANCE);
        registration.registerBlockComponent(EnergyStorageProvider.INSTANCE, Block.class);
        registration.registerEntityComponent(EntityEnergyStorageProvider.INSTANCE, Entity.class);
        registration.registerEnergyStorageClient(EnergyStorageProvider.INSTANCE);
        registration.registerBlockComponent(ProgressProvider.INSTANCE, Block.class);
        registration.registerEntityComponent(EntityProgressProvider.INSTANCE, Entity.class);
    }
}