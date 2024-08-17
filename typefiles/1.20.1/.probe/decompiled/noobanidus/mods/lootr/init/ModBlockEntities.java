package noobanidus.mods.lootr.init;

import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;
import noobanidus.mods.lootr.block.entities.LootrBarrelBlockEntity;
import noobanidus.mods.lootr.block.entities.LootrChestBlockEntity;
import noobanidus.mods.lootr.block.entities.LootrInventoryBlockEntity;
import noobanidus.mods.lootr.block.entities.LootrShulkerBlockEntity;
import noobanidus.mods.lootr.block.entities.LootrTrappedChestBlockEntity;

public class ModBlockEntities {

    private static final DeferredRegister<BlockEntityType<?>> REGISTER = DeferredRegister.create(ForgeRegistries.BLOCK_ENTITY_TYPES, "lootr");

    public static final RegistryObject<BlockEntityType<LootrChestBlockEntity>> LOOTR_CHEST = REGISTER.register("lootr_chest", () -> BlockEntityType.Builder.of(LootrChestBlockEntity::new, ModBlocks.CHEST.get()).build(null));

    public static final RegistryObject<BlockEntityType<LootrTrappedChestBlockEntity>> LOOTR_TRAPPED_CHEST = REGISTER.register("lootr_trapped_chest", () -> BlockEntityType.Builder.of(LootrTrappedChestBlockEntity::new, ModBlocks.TRAPPED_CHEST.get()).build(null));

    public static final RegistryObject<BlockEntityType<LootrBarrelBlockEntity>> LOOTR_BARREL = REGISTER.register("lootr_barrel", () -> BlockEntityType.Builder.of(LootrBarrelBlockEntity::new, ModBlocks.BARREL.get()).build(null));

    public static final RegistryObject<BlockEntityType<LootrInventoryBlockEntity>> LOOTR_INVENTORY = REGISTER.register("lootr_inventory", () -> BlockEntityType.Builder.of(LootrInventoryBlockEntity::new, ModBlocks.INVENTORY.get()).build(null));

    public static final RegistryObject<BlockEntityType<LootrShulkerBlockEntity>> LOOTR_SHULKER = REGISTER.register("lootr_shulker", () -> BlockEntityType.Builder.of(LootrShulkerBlockEntity::new, ModBlocks.SHULKER.get()).build(null));

    public static void register(IEventBus bus) {
        REGISTER.register(bus);
    }
}