package se.mickelus.tetra;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.MenuScreens;
import net.minecraft.server.packs.resources.ReloadableResourceManager;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.client.event.EntityRenderersEvent;
import net.minecraftforge.client.event.ModelEvent;
import net.minecraftforge.client.event.RegisterGuiOverlaysEvent;
import net.minecraftforge.client.event.RegisterKeyMappingsEvent;
import net.minecraftforge.client.event.RegisterParticleProvidersEvent;
import net.minecraftforge.client.gui.overlay.IGuiOverlay;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import se.mickelus.tetra.blocks.forged.chthonic.ExtractorProjectileEntity;
import se.mickelus.tetra.blocks.forged.chthonic.ExtractorProjectileRenderer;
import se.mickelus.tetra.blocks.forged.container.ForgedContainerBlockEntity;
import se.mickelus.tetra.blocks.forged.container.ForgedContainerRenderer;
import se.mickelus.tetra.blocks.forged.extractor.CoreExtractorPistonBlockEntity;
import se.mickelus.tetra.blocks.forged.extractor.CoreExtractorPistonRenderer;
import se.mickelus.tetra.blocks.forged.hammer.HammerBaseBlockEntity;
import se.mickelus.tetra.blocks.forged.hammer.HammerBaseRenderer;
import se.mickelus.tetra.blocks.forged.hammer.HammerHeadBlockEntity;
import se.mickelus.tetra.blocks.forged.hammer.HammerHeadRenderer;
import se.mickelus.tetra.blocks.geode.particle.SparkleParticle;
import se.mickelus.tetra.blocks.geode.particle.SparkleParticleType;
import se.mickelus.tetra.blocks.multischematic.MultiblockSchematicGui;
import se.mickelus.tetra.blocks.scroll.ScrollRenderer;
import se.mickelus.tetra.blocks.scroll.ScrollTile;
import se.mickelus.tetra.blocks.workbench.WorkbenchContainer;
import se.mickelus.tetra.blocks.workbench.WorkbenchTESR;
import se.mickelus.tetra.blocks.workbench.WorkbenchTile;
import se.mickelus.tetra.blocks.workbench.gui.WorkbenchScreen;
import se.mickelus.tetra.client.ToolActionIconStore;
import se.mickelus.tetra.client.keymap.TetraKeyMappings;
import se.mickelus.tetra.client.model.ModularModelLoader;
import se.mickelus.tetra.client.particle.SweepingStrikeParticle;
import se.mickelus.tetra.client.particle.SweepingStrikeParticleType;
import se.mickelus.tetra.effect.gui.AbilityOverlays;
import se.mickelus.tetra.effect.howling.HowlingOverlay;
import se.mickelus.tetra.interactions.SecondaryInteractionOverlay;
import se.mickelus.tetra.items.modular.ThrownModularItemEntity;
import se.mickelus.tetra.items.modular.ThrownModularItemRenderer;
import se.mickelus.tetra.items.modular.impl.BlockProgressOverlay;
import se.mickelus.tetra.items.modular.impl.bow.RangedProgressOverlay;
import se.mickelus.tetra.items.modular.impl.crossbow.CrossbowOverlay;
import se.mickelus.tetra.items.modular.impl.holo.gui.scan.ScannerOverlayGui;
import se.mickelus.tetra.items.modular.impl.shield.ModularShieldBannerModel;
import se.mickelus.tetra.items.modular.impl.shield.ModularShieldModel;
import se.mickelus.tetra.items.modular.impl.shield.ModularShieldRenderer;
import se.mickelus.tetra.items.modular.impl.toolbelt.booster.OverlayBooster;
import se.mickelus.tetra.items.modular.impl.toolbelt.gui.overlay.ToolbeltOverlay;

public class ClientSetup {

    public static void init() {
        FMLJavaModLoadingContext.get().getModEventBus().register(ClientSetup.class);
        MinecraftForge.EVENT_BUS.register(ClientSetup.class);
        ((ReloadableResourceManager) Minecraft.getInstance().getResourceManager()).registerReloadListener(new ToolActionIconStore());
    }

    @SubscribeEvent
    @OnlyIn(Dist.CLIENT)
    public static void clientSetup(FMLClientSetupEvent event) {
        event.enqueueWork(() -> {
            try {
                MenuScreens.register(WorkbenchContainer.containerType.get(), WorkbenchScreen::new);
                ModularModelLoader.init();
            } catch (Exception var1) {
                var1.printStackTrace();
            }
        });
    }

    @SubscribeEvent
    public static void registerParticleFactory(RegisterParticleProvidersEvent event) {
        event.registerSpriteSet(SparkleParticleType.instance, SparkleParticle.Provider::new);
        event.registerSpriteSet(SweepingStrikeParticleType.instance, SweepingStrikeParticle.Provider::new);
    }

    @SubscribeEvent
    public static void modelRegistryReady(ModelEvent.RegisterGeometryLoaders event) {
        event.register("modular_loader", new ModularModelLoader());
    }

    @SubscribeEvent
    public static void registerEntityLayerDefinitions(EntityRenderersEvent.RegisterLayerDefinitions event) {
        event.registerLayerDefinition(ForgedContainerRenderer.layer, ForgedContainerRenderer::createLayer);
        event.registerLayerDefinition(HammerBaseRenderer.layer, HammerBaseRenderer::createLayer);
        event.registerLayerDefinition(ScrollRenderer.layer, ScrollRenderer::createLayer);
        event.registerLayerDefinition(ModularShieldRenderer.layer, ModularShieldModel::createLayer);
        event.registerLayerDefinition(ModularShieldRenderer.bannerLayer, ModularShieldBannerModel::createLayer);
    }

    @SubscribeEvent
    public static void registerEntityRenderers(EntityRenderersEvent.RegisterRenderers event) {
        event.registerEntityRenderer(ExtractorProjectileEntity.type, ExtractorProjectileRenderer::new);
        event.registerEntityRenderer(ThrownModularItemEntity.type, ThrownModularItemRenderer::new);
        event.registerBlockEntityRenderer(WorkbenchTile.type.get(), WorkbenchTESR::new);
        event.registerBlockEntityRenderer(ScrollTile.type, ScrollRenderer::new);
        event.registerBlockEntityRenderer(ForgedContainerBlockEntity.type.get(), ForgedContainerRenderer::new);
        event.registerBlockEntityRenderer(CoreExtractorPistonBlockEntity.type.get(), CoreExtractorPistonRenderer::new);
        event.registerBlockEntityRenderer(HammerBaseBlockEntity.type.get(), HammerBaseRenderer::new);
        event.registerBlockEntityRenderer(HammerHeadBlockEntity.type.get(), HammerHeadRenderer::new);
    }

    @SubscribeEvent
    public static void registerGuiOverlays(RegisterGuiOverlaysEvent event) {
        Minecraft mc = Minecraft.getInstance();
        registerOverlay(event, "howling", new HowlingOverlay(mc));
        registerOverlay(event, "ability_overlays", new AbilityOverlays(mc));
        registerOverlay(event, "toolbelt", new ToolbeltOverlay(mc));
        registerOverlay(event, "secondary_interaction", new SecondaryInteractionOverlay(mc));
        registerOverlay(event, "booster", new OverlayBooster(mc));
        registerOverlay(event, "block_progresss", new BlockProgressOverlay(mc));
        registerOverlay(event, "ranged_progresss", new RangedProgressOverlay(mc));
        registerOverlay(event, "crossbow", new CrossbowOverlay(mc));
        registerOverlay(event, "scanner", new ScannerOverlayGui());
        registerOverlay(event, "multiblock_schematic", new MultiblockSchematicGui(mc));
    }

    private static void registerOverlay(RegisterGuiOverlaysEvent event, String id, IGuiOverlay overlay) {
        event.registerBelowAll(id, overlay);
        MinecraftForge.EVENT_BUS.register(overlay);
    }

    @SubscribeEvent
    public static void registerKeyMappings(RegisterKeyMappingsEvent event) {
        event.register(TetraKeyMappings.accessBinding);
        event.register(TetraKeyMappings.restockBinding);
        event.register(TetraKeyMappings.openBinding);
        event.register(TetraKeyMappings.secondaryUseBinding);
    }
}