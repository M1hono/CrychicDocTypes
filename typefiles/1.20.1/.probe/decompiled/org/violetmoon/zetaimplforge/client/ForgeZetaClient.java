package org.violetmoon.zetaimplforge.client;

import net.minecraft.client.Minecraft;
import net.minecraft.client.color.block.BlockColor;
import net.minecraft.client.color.block.BlockColors;
import net.minecraft.client.color.item.ItemColor;
import net.minecraft.client.color.item.ItemColors;
import net.minecraft.client.multiplayer.ClientPacketListener;
import net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer;
import net.minecraft.core.RegistryAccess;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.client.event.ContainerScreenEvent;
import net.minecraftforge.client.event.EntityRenderersEvent;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.client.event.ModelEvent;
import net.minecraftforge.client.event.MovementInputUpdateEvent;
import net.minecraftforge.client.event.RegisterClientReloadListenersEvent;
import net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent;
import net.minecraftforge.client.event.RegisterColorHandlersEvent;
import net.minecraftforge.client.event.RegisterKeyMappingsEvent;
import net.minecraftforge.client.event.RenderGuiOverlayEvent;
import net.minecraftforge.client.event.RenderHighlightEvent;
import net.minecraftforge.client.event.RenderLivingEvent;
import net.minecraftforge.client.event.RenderPlayerEvent;
import net.minecraftforge.client.event.RenderTooltipEvent;
import net.minecraftforge.client.event.ScreenEvent;
import net.minecraftforge.client.event.ScreenshotEvent;
import net.minecraftforge.client.gui.overlay.VanillaGuiOverlay;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.eventbus.api.EventPriority;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.minecraftforge.fml.util.thread.EffectiveSide;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.server.ServerLifecycleHooks;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.Zeta;
import org.violetmoon.zeta.client.ClientRegistryExtension;
import org.violetmoon.zeta.client.HumanoidArmorModelGetter;
import org.violetmoon.zeta.client.ZetaClient;
import org.violetmoon.zeta.client.event.load.ZAddBlockColorHandlers;
import org.violetmoon.zeta.client.event.load.ZAddItemColorHandlers;
import org.violetmoon.zeta.client.event.load.ZAddModelLayers;
import org.violetmoon.zeta.client.event.load.ZAddModels;
import org.violetmoon.zeta.client.event.load.ZClientSetup;
import org.violetmoon.zeta.client.event.load.ZKeyMapping;
import org.violetmoon.zeta.client.event.load.ZModel;
import org.violetmoon.zeta.client.event.load.ZRegisterLayerDefinitions;
import org.violetmoon.zeta.client.event.load.ZRegisterReloadListeners;
import org.violetmoon.zeta.client.event.load.ZTooltipComponents;
import org.violetmoon.zeta.client.event.play.ZClientTick;
import org.violetmoon.zeta.client.event.play.ZFirstClientTick;
import org.violetmoon.zeta.client.event.play.ZGatherTooltipComponents;
import org.violetmoon.zeta.client.event.play.ZHighlightBlock;
import org.violetmoon.zeta.client.event.play.ZInput;
import org.violetmoon.zeta.client.event.play.ZInputUpdate;
import org.violetmoon.zeta.client.event.play.ZRenderContainerScreen;
import org.violetmoon.zeta.client.event.play.ZRenderGuiOverlay;
import org.violetmoon.zeta.client.event.play.ZRenderLiving;
import org.violetmoon.zeta.client.event.play.ZRenderPlayer;
import org.violetmoon.zeta.client.event.play.ZRenderTick;
import org.violetmoon.zeta.client.event.play.ZRenderTooltip;
import org.violetmoon.zeta.client.event.play.ZScreen;
import org.violetmoon.zeta.client.event.play.ZScreenshot;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZAddBlockColorHandlers;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZAddItemColorHandlers;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZAddModelLayers;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZAddModels;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZClientSetup;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZKeyMapping;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZModel;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZRegisterLayerDefinitions;
import org.violetmoon.zetaimplforge.client.event.load.ForgeZTooltipComponents;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZClientTick;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZGatherTooltipComponents;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZHighlightBlock;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZInput;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZInputUpdate;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderContainerScreen;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderGuiOverlay;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderLiving;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderPlayer;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderTick;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderTooltip;
import org.violetmoon.zetaimplforge.client.event.play.ForgeZScreen;
import org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorBlockColors;
import org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorItemColors;

public class ForgeZetaClient extends ZetaClient {

    boolean clientTicked = false;

    public ForgeZetaClient(Zeta z) {
        super(z);
    }

    @Nullable
    @Override
    public BlockColor getBlockColor(BlockColors bcs, Block block) {
        return (BlockColor) ForgeRegistries.BLOCKS.getDelegate(block).map(ref -> (BlockColor) ((AccessorBlockColors) bcs).zeta$getBlockColors().get(ref)).orElse(null);
    }

    @Nullable
    @Override
    public ItemColor getItemColor(ItemColors ics, ItemLike itemlike) {
        return (ItemColor) ForgeRegistries.ITEMS.getDelegate(itemlike.asItem()).map(ref -> (ItemColor) ((AccessorItemColors) ics).zeta$getItemColors().get(ref)).orElse(null);
    }

    @Override
    public ClientRegistryExtension createClientRegistryExtension() {
        return new ForgeClientRegistryExtension(this.zeta);
    }

    @Override
    public void setBlockEntityWithoutLevelRenderer(Item item, BlockEntityWithoutLevelRenderer bewlr) {
        ((IZetaForgeItemStuff) item).zeta$setBlockEntityWithoutLevelRenderer(bewlr);
    }

    @Override
    public void setHumanoidArmorModel(Item item, HumanoidArmorModelGetter modelGetter) {
        ((IZetaForgeItemStuff) item).zeta$setHumanoidArmorModel(modelGetter);
    }

    @Override
    public RegistryAccess hackilyGetCurrentClientLevelRegistryAccess() {
        if (EffectiveSide.get().isServer()) {
            return ServerLifecycleHooks.getCurrentServer().registryAccess();
        } else {
            ClientPacketListener conn = Minecraft.getInstance().getConnection();
            return conn == null ? null : conn.registryAccess();
        }
    }

    @Override
    public void start() {
        IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
        bus.addListener(this::registerBlockColors);
        bus.addListener(this::registerItemColors);
        bus.addListener(this::clientSetup);
        bus.addListener(this::registerReloadListeners);
        bus.addListener(this::modelModifyBakingResult);
        bus.addListener(this::modelBakingCompleted);
        bus.addListener(this::modelRegisterAdditional);
        bus.addListener(this::modelRegisterGeometryLoaders);
        bus.addListener(this::modelLayers);
        bus.addListener(this::registerKeybinds);
        bus.addListener(this::registerAdditionalModels);
        bus.addListener(this::registerClientTooltipComponentFactories);
        bus.addListener(this::registerLayerDefinitions);
        MinecraftForge.EVENT_BUS.addListener(this::renderTick);
        MinecraftForge.EVENT_BUS.addListener(this::clientTick);
        MinecraftForge.EVENT_BUS.addListener(this::inputMouseButton);
        MinecraftForge.EVENT_BUS.addListener(this::inputKey);
        MinecraftForge.EVENT_BUS.addListener(this::screenshot);
        MinecraftForge.EVENT_BUS.addListener(this::movementInputUpdate);
        MinecraftForge.EVENT_BUS.addListener(this::renderBlockHighlight);
        MinecraftForge.EVENT_BUS.addListener(this::gatherTooltipComponents);
        MinecraftForge.EVENT_BUS.addListener(this::renderContainerScreenForeground);
        MinecraftForge.EVENT_BUS.addListener(this::renderContainerScreenBackground);
        MinecraftForge.EVENT_BUS.addListener(this::renderGameOverlayNeitherPreNorPost);
        MinecraftForge.EVENT_BUS.addListener(this::renderGuiOverlayPre);
        MinecraftForge.EVENT_BUS.addListener(this::renderGuiOverlayPost);
        MinecraftForge.EVENT_BUS.addListener(this::renderPlayerPre);
        MinecraftForge.EVENT_BUS.addListener(this::renderPlayerPost);
        MinecraftForge.EVENT_BUS.addListener(EventPriority.HIGHEST, this::renderLivingPreHighest);
        MinecraftForge.EVENT_BUS.addListener(EventPriority.LOWEST, this::renderLivingPostLowest);
        MinecraftForge.EVENT_BUS.addListener(this::renderTooltipGatherComponents);
        MinecraftForge.EVENT_BUS.addListener(this::renderTooltipGatherComponentsLow);
        MinecraftForge.EVENT_BUS.addListener(this::screenInitPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenInitPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenRenderPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenRenderPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenMouseButtonPressedPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenMouseButtonPressedPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenMouseScrolledPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenMouseScrolledPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenKeyPressedPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenKeyPressedPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenCharacterTypedPre);
        MinecraftForge.EVENT_BUS.addListener(this::screenCharacterTypedPost);
        MinecraftForge.EVENT_BUS.addListener(this::screenOpening);
    }

    public void registerBlockColors(RegisterColorHandlersEvent.Block event) {
        ZAddBlockColorHandlers e = this.loadBus.fire(new ForgeZAddBlockColorHandlers(event), ZAddBlockColorHandlers.class);
        this.loadBus.fire(e.makePostEvent(), ZAddBlockColorHandlers.Post.class);
    }

    public void registerItemColors(RegisterColorHandlersEvent.Item event) {
        ZAddItemColorHandlers e = this.loadBus.fire(new ForgeZAddItemColorHandlers(event), ZAddItemColorHandlers.class);
        this.loadBus.fire(e.makePostEvent(), ZAddItemColorHandlers.Post.class);
    }

    public void clientSetup(FMLClientSetupEvent event) {
        this.loadBus.fire(new ForgeZClientSetup(event), ZClientSetup.class);
    }

    public void registerReloadListeners(RegisterClientReloadListenersEvent event) {
        this.loadBus.fire(new ZRegisterReloadListeners(event::registerReloadListener), ZRegisterReloadListeners.class);
    }

    public void modelModifyBakingResult(ModelEvent.ModifyBakingResult e) {
        this.loadBus.fire(new ForgeZModel.ModifyBakingResult(e), ZModel.ModifyBakingResult.class);
    }

    public void modelBakingCompleted(ModelEvent.BakingCompleted e) {
        this.loadBus.fire(new ForgeZModel.BakingCompleted(e), ZModel.BakingCompleted.class);
    }

    public void modelRegisterAdditional(ModelEvent.RegisterAdditional e) {
        this.loadBus.fire(new ForgeZModel.RegisterAdditional(e), ZModel.RegisterAdditional.class);
    }

    public void modelRegisterGeometryLoaders(ModelEvent.RegisterGeometryLoaders e) {
        this.loadBus.fire(new ForgeZModel.RegisterGeometryLoaders(e), ZModel.RegisterGeometryLoaders.class);
    }

    public void modelLayers(EntityRenderersEvent.AddLayers event) {
        this.loadBus.fire(new ForgeZAddModelLayers(event), ZAddModelLayers.class);
    }

    public void registerKeybinds(RegisterKeyMappingsEvent event) {
        this.loadBus.fire(new ForgeZKeyMapping(event), ZKeyMapping.class);
    }

    public void registerAdditionalModels(ModelEvent.RegisterAdditional event) {
        this.loadBus.fire(new ForgeZAddModels(event), ZAddModels.class);
    }

    public void registerClientTooltipComponentFactories(RegisterClientTooltipComponentFactoriesEvent event) {
        this.loadBus.fire(new ForgeZTooltipComponents(event), ZTooltipComponents.class);
    }

    public void registerLayerDefinitions(EntityRenderersEvent.RegisterLayerDefinitions e) {
        this.loadBus.fire(new ForgeZRegisterLayerDefinitions(e), ZRegisterLayerDefinitions.class);
    }

    public void renderTick(TickEvent.RenderTickEvent e) {
        this.playBus.fire(new ForgeZRenderTick(e), ZRenderTick.class);
    }

    public void clientTick(TickEvent.ClientTickEvent e) {
        if (!this.clientTicked) {
            this.loadBus.fire(new ZFirstClientTick());
            this.clientTicked = true;
        }
        this.playBus.fire(new ForgeZClientTick(e), ZClientTick.class);
    }

    public void inputMouseButton(InputEvent.MouseButton e) {
        this.playBus.fire(new ForgeZInput.MouseButton(e), ZInput.MouseButton.class);
    }

    public void inputKey(InputEvent.Key e) {
        this.playBus.fire(new ForgeZInput.Key(e), ZInput.Key.class);
    }

    public void screenshot(ScreenshotEvent e) {
        this.playBus.fire(new ZScreenshot());
    }

    public void movementInputUpdate(MovementInputUpdateEvent e) {
        this.playBus.fire(new ForgeZInputUpdate(e), ZInputUpdate.class);
    }

    public void renderBlockHighlight(RenderHighlightEvent.Block e) {
        this.playBus.fire(new ForgeZHighlightBlock(e), ZHighlightBlock.class);
    }

    public void gatherTooltipComponents(RenderTooltipEvent.GatherComponents e) {
        this.playBus.fire(new ForgeZGatherTooltipComponents(e), ZGatherTooltipComponents.class);
    }

    public void renderContainerScreenForeground(ContainerScreenEvent.Render.Foreground e) {
        this.playBus.fire(new ForgeZRenderContainerScreen.Foreground(e), ZRenderContainerScreen.Foreground.class);
    }

    public void renderContainerScreenBackground(ContainerScreenEvent.Render.Background e) {
        this.playBus.fire(new ForgeZRenderContainerScreen.Background(e), ZRenderContainerScreen.Background.class);
    }

    public void renderGameOverlayNeitherPreNorPost(RenderGuiOverlayEvent e) {
        if (e.getOverlay() == VanillaGuiOverlay.CROSSHAIR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Crosshair(e), ZRenderGuiOverlay.Crosshair.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.HOTBAR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Hotbar(e), ZRenderGuiOverlay.Hotbar.class);
        }
    }

    public void renderGuiOverlayPre(RenderGuiOverlayEvent.Pre e) {
        if (e.getOverlay() == VanillaGuiOverlay.HOTBAR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Hotbar.Pre(e), ZRenderGuiOverlay.Hotbar.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.CROSSHAIR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Crosshair.Pre(e), ZRenderGuiOverlay.Crosshair.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.PLAYER_HEALTH.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.PlayerHealth.Pre(e), ZRenderGuiOverlay.PlayerHealth.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.ARMOR_LEVEL.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.ArmorLevel.Pre(e), ZRenderGuiOverlay.ArmorLevel.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.DEBUG_TEXT.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.DebugText.Pre(e), ZRenderGuiOverlay.DebugText.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.POTION_ICONS.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.PotionIcons.Pre(e), ZRenderGuiOverlay.PotionIcons.Pre.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.CHAT_PANEL.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.ChatPanel.Pre(e), ZRenderGuiOverlay.ChatPanel.Pre.class);
        }
    }

    public void renderGuiOverlayPost(RenderGuiOverlayEvent.Post e) {
        if (e.getOverlay() == VanillaGuiOverlay.HOTBAR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Hotbar.Post(e), ZRenderGuiOverlay.Hotbar.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.CROSSHAIR.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.Crosshair.Post(e), ZRenderGuiOverlay.Crosshair.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.PLAYER_HEALTH.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.PlayerHealth.Post(e), ZRenderGuiOverlay.PlayerHealth.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.ARMOR_LEVEL.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.ArmorLevel.Post(e), ZRenderGuiOverlay.ArmorLevel.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.DEBUG_TEXT.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.DebugText.Post(e), ZRenderGuiOverlay.DebugText.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.POTION_ICONS.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.PotionIcons.Post(e), ZRenderGuiOverlay.PotionIcons.Post.class);
        } else if (e.getOverlay() == VanillaGuiOverlay.CHAT_PANEL.type()) {
            this.playBus.fire(new ForgeZRenderGuiOverlay.ChatPanel.Post(e), ZRenderGuiOverlay.ChatPanel.Post.class);
        }
    }

    public void renderPlayerPre(RenderPlayerEvent.Pre e) {
        this.playBus.fire(new ForgeZRenderPlayer.Pre(e), ZRenderPlayer.Pre.class);
    }

    public void renderPlayerPost(RenderPlayerEvent.Post e) {
        this.playBus.fire(new ForgeZRenderPlayer.Post(e), ZRenderPlayer.Post.class);
    }

    public void renderLivingPreHighest(RenderLivingEvent.Pre<?, ?> e) {
        this.playBus.fire(new ForgeZRenderLiving.PreHighest(e), ZRenderLiving.PreHighest.class);
    }

    public void renderLivingPostLowest(RenderLivingEvent.Post<?, ?> e) {
        this.playBus.fire(new ForgeZRenderLiving.PostLowest(e), ZRenderLiving.PostLowest.class);
    }

    public void renderTooltipGatherComponents(RenderTooltipEvent.GatherComponents e) {
        this.playBus.fire(new ForgeZRenderTooltip.GatherComponents(e), ZRenderTooltip.GatherComponents.class);
    }

    public void renderTooltipGatherComponentsLow(RenderTooltipEvent.GatherComponents e) {
        this.playBus.fire(new ForgeZRenderTooltip.GatherComponents.Low(e), ZRenderTooltip.GatherComponents.Low.class);
    }

    public void screenInitPre(ScreenEvent.Init.Pre e) {
        this.playBus.fire(new ForgeZScreen.Init.Pre(e), ZScreen.Init.Pre.class);
    }

    public void screenInitPost(ScreenEvent.Init.Post e) {
        this.playBus.fire(new ForgeZScreen.Init.Post(e), ZScreen.Init.Post.class);
    }

    public void screenRenderPre(ScreenEvent.Render.Pre e) {
        this.playBus.fire(new ForgeZScreen.Render.Pre(e), ZScreen.Render.Pre.class);
    }

    public void screenRenderPost(ScreenEvent.Render.Post e) {
        this.playBus.fire(new ForgeZScreen.Render.Post(e), ZScreen.Render.Post.class);
    }

    public void screenMouseButtonPressedPre(ScreenEvent.MouseButtonPressed.Pre e) {
        this.playBus.fire(new ForgeZScreen.MouseButtonPressed.Pre(e), ZScreen.MouseButtonPressed.Pre.class);
    }

    public void screenMouseButtonPressedPost(ScreenEvent.MouseButtonPressed.Post e) {
        this.playBus.fire(new ForgeZScreen.MouseButtonPressed.Post(e), ZScreen.MouseButtonPressed.Post.class);
    }

    public void screenMouseScrolledPre(ScreenEvent.MouseScrolled.Pre e) {
        this.playBus.fire(new ForgeZScreen.MouseScrolled.Pre(e), ZScreen.MouseScrolled.Pre.class);
    }

    public void screenMouseScrolledPost(ScreenEvent.MouseScrolled.Post e) {
        this.playBus.fire(new ForgeZScreen.MouseScrolled.Post(e), ZScreen.MouseScrolled.Post.class);
    }

    public void screenKeyPressedPre(ScreenEvent.KeyPressed.Pre e) {
        this.playBus.fire(new ForgeZScreen.KeyPressed.Pre(e), ZScreen.KeyPressed.Pre.class);
    }

    public void screenKeyPressedPost(ScreenEvent.KeyPressed.Post e) {
        this.playBus.fire(new ForgeZScreen.KeyPressed.Post(e), ZScreen.KeyPressed.Post.class);
    }

    public void screenCharacterTypedPre(ScreenEvent.CharacterTyped.Pre e) {
        this.playBus.fire(new ForgeZScreen.CharacterTyped.Pre(e), ZScreen.CharacterTyped.Pre.class);
    }

    public void screenCharacterTypedPost(ScreenEvent.CharacterTyped.Post e) {
        this.playBus.fire(new ForgeZScreen.CharacterTyped.Post(e), ZScreen.CharacterTyped.Post.class);
    }

    public void screenOpening(ScreenEvent.Opening e) {
        this.playBus.fire(new ForgeZScreen.Opening(e), ZScreen.Opening.class);
    }
}