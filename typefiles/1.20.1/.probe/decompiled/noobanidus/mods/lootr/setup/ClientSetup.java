package noobanidus.mods.lootr.setup;

import net.minecraft.client.model.geom.ModelLayers;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.EntityRenderersEvent;
import net.minecraftforge.client.event.ModelEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber.Bus;
import noobanidus.mods.lootr.client.block.BarrelModel;
import noobanidus.mods.lootr.client.block.LootrChestBlockRenderer;
import noobanidus.mods.lootr.client.block.LootrShulkerBlockRenderer;
import noobanidus.mods.lootr.client.entity.LootrChestCartRenderer;
import noobanidus.mods.lootr.init.ModBlockEntities;
import noobanidus.mods.lootr.init.ModEntities;

@EventBusSubscriber(modid = "lootr", value = { Dist.CLIENT }, bus = Bus.MOD)
public class ClientSetup {

    @SubscribeEvent
    public static void modelRegister(ModelEvent.RegisterGeometryLoaders event) {
        event.register("barrel", BarrelModel.Loader.INSTANCE);
    }

    @SubscribeEvent
    public static void registerRenderers(EntityRenderersEvent.RegisterRenderers event) {
        event.registerBlockEntityRenderer(ModBlockEntities.LOOTR_CHEST.get(), LootrChestBlockRenderer::new);
        event.registerBlockEntityRenderer(ModBlockEntities.LOOTR_TRAPPED_CHEST.get(), LootrChestBlockRenderer::new);
        event.registerBlockEntityRenderer(ModBlockEntities.LOOTR_INVENTORY.get(), LootrChestBlockRenderer::new);
        event.registerBlockEntityRenderer(ModBlockEntities.LOOTR_SHULKER.get(), LootrShulkerBlockRenderer::new);
        event.registerEntityRenderer(ModEntities.LOOTR_MINECART_ENTITY.get(), e -> new LootrChestCartRenderer(e, ModelLayers.CHEST_MINECART));
    }
}