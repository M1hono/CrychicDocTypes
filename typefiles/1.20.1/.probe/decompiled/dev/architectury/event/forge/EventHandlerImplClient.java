package dev.architectury.event.forge;

import dev.architectury.event.CompoundEventResult;
import dev.architectury.event.EventResult;
import dev.architectury.event.events.client.ClientCommandRegistrationEvent;
import dev.architectury.event.events.client.ClientGuiEvent;
import dev.architectury.event.events.client.ClientLifecycleEvent;
import dev.architectury.event.events.client.ClientPlayerEvent;
import dev.architectury.event.events.client.ClientRawInputEvent;
import dev.architectury.event.events.client.ClientRecipeUpdateEvent;
import dev.architectury.event.events.client.ClientReloadShadersEvent;
import dev.architectury.event.events.client.ClientScreenInputEvent;
import dev.architectury.event.events.client.ClientTickEvent;
import dev.architectury.event.events.client.ClientTooltipEvent;
import dev.architectury.event.events.common.InteractionEvent;
import dev.architectury.impl.ScreenAccessImpl;
import dev.architectury.impl.TooltipEventColorContextImpl;
import dev.architectury.impl.TooltipEventPositionContextImpl;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.network.chat.Component;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.client.event.ClientChatEvent;
import net.minecraftforge.client.event.ClientChatReceivedEvent;
import net.minecraftforge.client.event.ClientPlayerNetworkEvent;
import net.minecraftforge.client.event.ContainerScreenEvent;
import net.minecraftforge.client.event.CustomizeGuiOverlayEvent;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.client.event.RecipesUpdatedEvent;
import net.minecraftforge.client.event.RegisterClientCommandsEvent;
import net.minecraftforge.client.event.RegisterShadersEvent;
import net.minecraftforge.client.event.RenderGuiEvent;
import net.minecraftforge.client.event.RenderTooltipEvent;
import net.minecraftforge.client.event.ScreenEvent;
import net.minecraftforge.client.event.TextureStitchEvent;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.event.entity.player.ItemTooltipEvent;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.event.level.LevelEvent;
import net.minecraftforge.eventbus.api.EventPriority;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;

@OnlyIn(Dist.CLIENT)
public class EventHandlerImplClient {

    private static final ThreadLocal<TooltipEventPositionContextImpl> tooltipPositionContext = ThreadLocal.withInitial(TooltipEventPositionContextImpl::new);

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ItemTooltipEvent event) {
        ClientTooltipEvent.ITEM.invoker().append(event.getItemStack(), event.getToolTip(), event.getFlags());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(TickEvent.ClientTickEvent event) {
        if (event.phase == TickEvent.Phase.START) {
            ClientTickEvent.CLIENT_PRE.invoker().tick(Minecraft.getInstance());
        } else if (event.phase == TickEvent.Phase.END) {
            ClientTickEvent.CLIENT_POST.invoker().tick(Minecraft.getInstance());
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventRenderGameOverlayEvent(RenderGuiEvent.Post event) {
        ClientGuiEvent.RENDER_HUD.invoker().renderHud(event.getGuiGraphics(), event.getPartialTick());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ClientPlayerNetworkEvent.LoggingIn event) {
        ClientPlayerEvent.CLIENT_PLAYER_JOIN.invoker().join(event.getPlayer());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ClientPlayerNetworkEvent.LoggingOut event) {
        ClientPlayerEvent.CLIENT_PLAYER_QUIT.invoker().quit(event.getPlayer());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ClientPlayerNetworkEvent.Clone event) {
        ClientPlayerEvent.CLIENT_PLAYER_RESPAWN.invoker().respawn(event.getOldPlayer(), event.getNewPlayer());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInitScreenEvent(ScreenEvent.Init.Pre event) {
        if (ClientGuiEvent.INIT_PRE.invoker().init(event.getScreen(), new ScreenAccessImpl(event.getScreen())).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInitScreenEvent(ScreenEvent.Init.Post event) {
        ClientGuiEvent.INIT_POST.invoker().init(event.getScreen(), new ScreenAccessImpl(event.getScreen()));
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventRenderGameOverlayEvent(CustomizeGuiOverlayEvent.DebugText event) {
        if (Minecraft.getInstance().options.renderDebug) {
            ClientGuiEvent.DEBUG_TEXT_LEFT.invoker().gatherText(event.getLeft());
            ClientGuiEvent.DEBUG_TEXT_RIGHT.invoker().gatherText(event.getRight());
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ClientChatEvent event) {
        EventResult process = dev.architectury.event.events.client.ClientChatEvent.SEND.invoker().send(event.getMessage(), null);
        if (process.isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ClientChatReceivedEvent event) {
        CompoundEventResult<Component> process = dev.architectury.event.events.client.ClientChatEvent.RECEIVED.invoker().process(event.getBoundChatType(), event.getMessage());
        if (process.isPresent()) {
            if (process.isFalse()) {
                event.setCanceled(true);
            } else if (process.object() != null) {
                event.setMessage(process.object());
            }
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventWorldEvent(LevelEvent.Load event) {
        if (event.getLevel().m_5776_()) {
            ClientLevel world = (ClientLevel) event.getLevel();
            ClientLifecycleEvent.CLIENT_LEVEL_LOAD.invoker().act(world);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(ScreenEvent.Opening event) {
        CompoundEventResult<Screen> result = ClientGuiEvent.SET_SCREEN.invoker().modifyScreen(event.getScreen());
        if (result.isPresent()) {
            if (result.isFalse()) {
                event.setCanceled(true);
            } else if (result.object() != null) {
                event.setNewScreen(result.object());
            }
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventDrawScreenEvent(ScreenEvent.Render.Pre event) {
        if (ClientGuiEvent.RENDER_PRE.invoker().render(event.getScreen(), event.getGuiGraphics(), event.getMouseX(), event.getMouseY(), event.getPartialTick()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventDrawScreenEvent(ScreenEvent.Render.Post event) {
        ClientGuiEvent.RENDER_POST.invoker().render(event.getScreen(), event.getGuiGraphics(), event.getMouseX(), event.getMouseY(), event.getPartialTick());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventContainerScreenEvent(ContainerScreenEvent.Render.Background event) {
        ClientGuiEvent.RENDER_CONTAINER_BACKGROUND.invoker().render(event.getContainerScreen(), event.getGuiGraphics(), event.getMouseX(), event.getMouseY(), Minecraft.getInstance().getDeltaFrameTime());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventContainerScreenEvent(ContainerScreenEvent.Render.Foreground event) {
        ClientGuiEvent.RENDER_CONTAINER_FOREGROUND.invoker().render(event.getContainerScreen(), event.getGuiGraphics(), event.getMouseX(), event.getMouseY(), Minecraft.getInstance().getDeltaFrameTime());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventPlayerInteractEvent(PlayerInteractEvent.RightClickEmpty event) {
        InteractionEvent.CLIENT_RIGHT_CLICK_AIR.invoker().click(event.getEntity(), event.getHand());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventPlayerInteractEvent(PlayerInteractEvent.LeftClickEmpty event) {
        InteractionEvent.CLIENT_LEFT_CLICK_AIR.invoker().click(event.getEntity(), event.getHand());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(RecipesUpdatedEvent event) {
        ClientRecipeUpdateEvent.EVENT.invoker().update(event.getRecipeManager());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventRenderTooltipEvent(RenderTooltipEvent.Pre event) {
        GuiGraphics graphics = event.getGraphics();
        ClientTooltipEvent.additionalContexts().setItem(event.getItemStack());
        try {
            if (!ClientTooltipEvent.RENDER_PRE.invoker().renderTooltip(graphics, event.getComponents(), event.getX(), event.getY()).isFalse()) {
                TooltipEventPositionContextImpl positionContext = (TooltipEventPositionContextImpl) tooltipPositionContext.get();
                positionContext.reset(event.getX(), event.getY());
                ClientTooltipEvent.RENDER_MODIFY_POSITION.invoker().renderTooltip(graphics, positionContext);
                event.setX(positionContext.getTooltipX());
                event.setY(positionContext.getTooltipY());
                return;
            }
            event.setCanceled(true);
        } finally {
            ClientTooltipEvent.additionalContexts().setItem(null);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventRenderTooltipEvent(RenderTooltipEvent.Color event) {
        GuiGraphics graphics = event.getGraphics();
        ClientTooltipEvent.additionalContexts().setItem(event.getItemStack());
        try {
            TooltipEventColorContextImpl colorContext = (TooltipEventColorContextImpl) TooltipEventColorContextImpl.CONTEXT.get();
            colorContext.reset();
            colorContext.setBackgroundColor(event.getBackgroundStart());
            colorContext.setOutlineGradientTopColor(event.getBorderStart());
            colorContext.setOutlineGradientBottomColor(event.getBorderEnd());
            ClientTooltipEvent.RENDER_MODIFY_COLOR.invoker().renderTooltip(graphics, event.getX(), event.getY(), colorContext);
            event.setBackground(colorContext.getBackgroundColor());
            event.setBorderEnd(colorContext.getOutlineGradientBottomColor());
            event.setBorderStart(colorContext.getOutlineGradientTopColor());
        } finally {
            ClientTooltipEvent.additionalContexts().setItem(null);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseScrollEvent(ScreenEvent.MouseScrolled.Pre event) {
        if (ClientScreenInputEvent.MOUSE_SCROLLED_PRE.invoker().mouseScrolled(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getScrollDelta()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseScrollEvent(ScreenEvent.MouseScrolled.Post event) {
        ClientScreenInputEvent.MOUSE_SCROLLED_POST.invoker().mouseScrolled(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getScrollDelta());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseClickedEvent(ScreenEvent.MouseButtonPressed.Pre event) {
        if (ClientScreenInputEvent.MOUSE_CLICKED_PRE.invoker().mouseClicked(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getButton()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseClickedEvent(ScreenEvent.MouseButtonPressed.Post event) {
        ClientScreenInputEvent.MOUSE_CLICKED_POST.invoker().mouseClicked(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getButton());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseDragEvent(ScreenEvent.MouseDragged.Pre event) {
        if (ClientScreenInputEvent.MOUSE_DRAGGED_PRE.invoker().mouseDragged(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getMouseButton(), event.getDragX(), event.getDragY()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseDragEvent(ScreenEvent.MouseDragged.Post event) {
        ClientScreenInputEvent.MOUSE_DRAGGED_POST.invoker().mouseDragged(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getMouseButton(), event.getDragX(), event.getDragY());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseReleasedEvent(ScreenEvent.MouseButtonReleased.Pre event) {
        if (ClientScreenInputEvent.MOUSE_RELEASED_PRE.invoker().mouseReleased(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getButton()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventMouseReleasedEvent(ScreenEvent.MouseButtonReleased.Post event) {
        ClientScreenInputEvent.MOUSE_RELEASED_PRE.invoker().mouseReleased(Minecraft.getInstance(), event.getScreen(), event.getMouseX(), event.getMouseY(), event.getButton());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardCharTypedEvent(ScreenEvent.CharacterTyped.Pre event) {
        if (ClientScreenInputEvent.CHAR_TYPED_PRE.invoker().charTyped(Minecraft.getInstance(), event.getScreen(), event.getCodePoint(), event.getModifiers()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardCharTypedEvent(ScreenEvent.CharacterTyped.Post event) {
        ClientScreenInputEvent.CHAR_TYPED_POST.invoker().charTyped(Minecraft.getInstance(), event.getScreen(), event.getCodePoint(), event.getModifiers());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardKeyPressedEvent(ScreenEvent.KeyPressed.Pre event) {
        if (ClientScreenInputEvent.KEY_PRESSED_PRE.invoker().keyPressed(Minecraft.getInstance(), event.getScreen(), event.getKeyCode(), event.getScanCode(), event.getModifiers()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardKeyPressedEvent(ScreenEvent.KeyPressed.Post event) {
        ClientScreenInputEvent.KEY_PRESSED_POST.invoker().keyPressed(Minecraft.getInstance(), event.getScreen(), event.getKeyCode(), event.getScanCode(), event.getModifiers());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardKeyReleasedEvent(ScreenEvent.KeyReleased.Pre event) {
        if (ClientScreenInputEvent.KEY_RELEASED_PRE.invoker().keyReleased(Minecraft.getInstance(), event.getScreen(), event.getKeyCode(), event.getScanCode(), event.getModifiers()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventKeyboardKeyReleasedEvent(ScreenEvent.KeyReleased.Post event) {
        ClientScreenInputEvent.KEY_RELEASED_POST.invoker().keyReleased(Minecraft.getInstance(), event.getScreen(), event.getKeyCode(), event.getScanCode(), event.getModifiers());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInputEvent(InputEvent.MouseScrollingEvent event) {
        if (ClientRawInputEvent.MOUSE_SCROLLED.invoker().mouseScrolled(Minecraft.getInstance(), event.getScrollDelta()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInputEvent(InputEvent.MouseButton.Pre event) {
        if (ClientRawInputEvent.MOUSE_CLICKED_PRE.invoker().mouseClicked(Minecraft.getInstance(), event.getButton(), event.getAction(), event.getModifiers()).isFalse()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInputEvent(InputEvent.MouseButton.Post event) {
        ClientRawInputEvent.MOUSE_CLICKED_POST.invoker().mouseClicked(Minecraft.getInstance(), event.getButton(), event.getAction(), event.getModifiers());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void eventInputEvent(InputEvent.Key event) {
        ClientRawInputEvent.KEY_PRESSED.invoker().keyPressed(Minecraft.getInstance(), event.getKey(), event.getScanCode(), event.getAction(), event.getModifiers());
    }

    @SubscribeEvent(priority = EventPriority.HIGH)
    public static void event(RegisterClientCommandsEvent event) {
        ClientCommandRegistrationEvent.EVENT.invoker().register(event.getDispatcher(), event.getBuildContext());
    }

    @OnlyIn(Dist.CLIENT)
    public static class ModBasedEventHandler {

        @SubscribeEvent(priority = EventPriority.HIGH)
        public static void eventTextureStitchEvent(TextureStitchEvent.Post event) {
        }

        @SubscribeEvent(priority = EventPriority.HIGH)
        public static void event(FMLClientSetupEvent event) {
            ClientLifecycleEvent.CLIENT_SETUP.invoker().stateChanged(Minecraft.getInstance());
        }

        @SubscribeEvent(priority = EventPriority.HIGH)
        public static void event(RegisterShadersEvent event) {
            ClientReloadShadersEvent.EVENT.invoker().reload(event.getResourceProvider(), event::registerShader);
        }
    }
}