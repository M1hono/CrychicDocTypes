package noobanidus.mods.lootr.init;

import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.PushReaction;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;
import noobanidus.mods.lootr.block.LootrBarrelBlock;
import noobanidus.mods.lootr.block.LootrChestBlock;
import noobanidus.mods.lootr.block.LootrInventoryBlock;
import noobanidus.mods.lootr.block.LootrShulkerBlock;
import noobanidus.mods.lootr.block.LootrTrappedChestBlock;
import noobanidus.mods.lootr.block.TrophyBlock;
import noobanidus.mods.lootr.block.entities.LootrShulkerBlockEntity;

public class ModBlocks {

    private static final DeferredRegister<Block> REGISTER = DeferredRegister.create(ForgeRegistries.BLOCKS, "lootr");

    public static final RegistryObject<LootrBarrelBlock> BARREL = REGISTER.register("lootr_barrel", () -> new LootrBarrelBlock(BlockBehaviour.Properties.copy(Blocks.CHEST).strength(2.5F)));

    public static final RegistryObject<LootrChestBlock> CHEST = REGISTER.register("lootr_chest", () -> new LootrChestBlock(BlockBehaviour.Properties.copy(Blocks.BARREL).strength(2.5F)));

    public static final RegistryObject<LootrTrappedChestBlock> TRAPPED_CHEST = REGISTER.register("lootr_trapped_chest", () -> new LootrTrappedChestBlock(BlockBehaviour.Properties.copy(Blocks.TRAPPED_CHEST).strength(2.5F)));

    public static final RegistryObject<LootrInventoryBlock> INVENTORY = REGISTER.register("lootr_inventory", () -> new LootrInventoryBlock(BlockBehaviour.Properties.of().strength(2.5F).sound(SoundType.WOOD)));

    public static final RegistryObject<Block> TROPHY = REGISTER.register("trophy", () -> new TrophyBlock(BlockBehaviour.Properties.of().strength(15.0F).sound(SoundType.METAL).noOcclusion().lightLevel(o -> 15)));

    private static final BlockBehaviour.StatePredicate posPredicate = (state, level, pos) -> level.getBlockEntity(pos) instanceof LootrShulkerBlockEntity shulkerboxblockentity ? shulkerboxblockentity.isClosed() : false;

    public static final RegistryObject<LootrShulkerBlock> SHULKER = REGISTER.register("lootr_shulker", () -> new LootrShulkerBlock(BlockBehaviour.Properties.of().strength(2.5F).dynamicShape().noOcclusion().forceSolidOn().pushReaction(PushReaction.DESTROY).isSuffocating(posPredicate).isViewBlocking(posPredicate)));

    public static void register(IEventBus bus) {
        REGISTER.register(bus);
    }
}