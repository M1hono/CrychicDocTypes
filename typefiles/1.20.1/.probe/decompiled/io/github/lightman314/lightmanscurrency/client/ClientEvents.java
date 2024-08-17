package io.github.lightman314.lightmanscurrency.client;

import io.github.lightman314.lightmanscurrency.LCConfig;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.config.ConfigFile;
import io.github.lightman314.lightmanscurrency.api.config.SyncedConfigFile;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.money.coins.CoinAPI;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.WalletScreen;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.ChestCoinCollectButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.inventory.EjectionMenuButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.inventory.NotificationButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.inventory.TeamManagerButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.inventory.wallet.VisibilityToggleButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.inventory.wallet.WalletButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.util.ScreenPosition;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.IWalletHandler;
import io.github.lightman314.lightmanscurrency.common.capability.wallet.WalletCapability;
import io.github.lightman314.lightmanscurrency.common.core.ModSounds;
import io.github.lightman314.lightmanscurrency.common.items.WalletItem;
import io.github.lightman314.lightmanscurrency.integration.curios.LCCurios;
import io.github.lightman314.lightmanscurrency.network.message.bank.CPacketOpenATM;
import io.github.lightman314.lightmanscurrency.network.message.trader.CPacketOpenNetworkTerminal;
import io.github.lightman314.lightmanscurrency.network.message.wallet.CPacketOpenWallet;
import io.github.lightman314.lightmanscurrency.network.message.walletslot.CPacketSetVisible;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.inventory.AbstractContainerScreen;
import net.minecraft.client.gui.screens.inventory.ContainerScreen;
import net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen;
import net.minecraft.client.gui.screens.inventory.InventoryScreen;
import net.minecraft.client.player.LocalPlayer;
import net.minecraft.client.resources.sounds.SimpleSoundInstance;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.ClientPlayerNetworkEvent;
import net.minecraftforge.client.event.ContainerScreenEvent;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.client.event.ScreenEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;

@EventBusSubscriber(modid = "lightmanscurrency", value = { Dist.CLIENT })
public class ClientEvents {

    public static final ResourceLocation WALLET_SLOT_TEXTURE = new ResourceLocation("lightmanscurrency", "textures/gui/container/wallet_slot.png");

    public static final KeyMapping KEY_WALLET = new KeyMapping(LCText.KEY_WALLET.getKey(), 86, "key.categories.inventory");

    public static final KeyMapping KEY_PORTABLE_TERMINAL = new KeyMapping(LCText.KEY_PORTABLE_TERMINAL.getKey(), 92, "key.categories.inventory");

    public static final KeyMapping KEY_PORTABLE_ATM = new KeyMapping(LCText.KEY_PORTABLE_ATM.getKey(), 61, "key.categories.inventory");

    @SubscribeEvent
    public static void onKeyInput(InputEvent.Key event) {
        Minecraft minecraft = Minecraft.getInstance();
        if (minecraft.screen instanceof WalletScreen && minecraft.player != null) {
            if (event.getAction() == 1 && event.getKey() == KEY_WALLET.getKey().getValue()) {
                minecraft.player.clientSideCloseContainer();
            }
        } else if (minecraft.player != null && minecraft.screen == null) {
            LocalPlayer player = minecraft.player;
            if (KEY_WALLET.isDown()) {
                new CPacketOpenWallet(-1).send();
                ItemStack wallet = CoinAPI.API.getEquippedWallet(player);
                if (!wallet.isEmpty()) {
                    minecraft.getSoundManager().play(SimpleSoundInstance.forUI(SoundEvents.ARMOR_EQUIP_LEATHER, 1.25F + player.m_9236_().random.nextFloat() * 0.5F, 0.75F));
                    if (!WalletItem.isEmpty(wallet)) {
                        minecraft.getSoundManager().play(SimpleSoundInstance.forUI(ModSounds.COINS_CLINKING.get(), 1.0F, 0.4F));
                    }
                }
            }
            if (LightmansCurrency.isCuriosLoaded() && event.getAction() == 1) {
                if (event.getKey() == KEY_PORTABLE_TERMINAL.getKey().getValue() && LCCurios.hasPortableTerminal(minecraft.player)) {
                    new CPacketOpenNetworkTerminal(true).send();
                } else if (event.getKey() == KEY_PORTABLE_ATM.getKey().getValue() && LCCurios.hasPortableATM(minecraft.player)) {
                    CPacketOpenATM.sendToServer();
                }
            }
        }
    }

    @SubscribeEvent
    public static void onInventoryGuiInit(ScreenEvent.Init.Post event) {
        Screen screen = event.getScreen();
        if (screen instanceof InventoryScreen || screen instanceof CreativeModeInventoryScreen) {
            AbstractContainerScreen<?> gui = (AbstractContainerScreen<?>) screen;
            event.addListener(new NotificationButton(gui));
            event.addListener(new TeamManagerButton(gui));
            event.addListener(new EjectionMenuButton(gui));
            Minecraft mc = Minecraft.getInstance();
            if (LightmansCurrency.isCuriosValid(mc.player)) {
                return;
            }
            event.addListener(new WalletButton(gui, b -> new CPacketOpenWallet(-1).send()));
            event.addListener(new VisibilityToggleButton(gui, ClientEvents::toggleVisibility));
        } else if (screen instanceof ContainerScreen chestScreen) {
            event.addListener(new ChestCoinCollectButton(chestScreen));
        }
    }

    private static void toggleVisibility(EasyButton button) {
        Minecraft mc = Minecraft.getInstance();
        Player player = mc.player;
        IWalletHandler handler = WalletCapability.lazyGetWalletHandler(player);
        if (handler != null) {
            boolean nowVisible = !handler.visible();
            handler.setVisible(nowVisible);
            new CPacketSetVisible(player.m_19879_(), nowVisible).send();
        }
    }

    @SubscribeEvent
    public static void renderInventoryScreen(ContainerScreenEvent.Render.Background event) {
        Minecraft mc = Minecraft.getInstance();
        if (!LightmansCurrency.isCuriosValid(mc.player)) {
            AbstractContainerScreen<?> screen = event.getContainerScreen();
            if (screen instanceof InventoryScreen || screen instanceof CreativeModeInventoryScreen) {
                if (screen instanceof CreativeModeInventoryScreen creativeScreen && !creativeScreen.isInventoryOpen()) {
                    return;
                }
                EasyGuiGraphics gui = EasyGuiGraphics.create(event);
                ScreenPosition slotPosition = getWalletSlotPosition(screen instanceof CreativeModeInventoryScreen).offsetScreen(screen);
                gui.resetColor();
                gui.blit(WALLET_SLOT_TEXTURE, slotPosition.x, slotPosition.y, 0, 0, 18, 18);
            }
        }
    }

    @SubscribeEvent
    public static void renderInventoryTooltips(ScreenEvent.Render.Post event) {
        if (event.getScreen() instanceof InventoryScreen || event.getScreen() instanceof CreativeModeInventoryScreen) {
            AbstractContainerScreen<?> screen = (AbstractContainerScreen<?>) event.getScreen();
            if (!screen.getMenu().getCarried().isEmpty()) {
                return;
            }
            if (screen instanceof CreativeModeInventoryScreen creativeScreen && !creativeScreen.isInventoryOpen()) {
                return;
            }
            EasyGuiGraphics gui = EasyGuiGraphics.create(event);
            NotificationButton.tryRenderTooltip(gui);
            TeamManagerButton.tryRenderTooltip(gui);
            EjectionMenuButton.tryRenderTooltip(gui);
        } else if (event.getScreen() instanceof ContainerScreen) {
            ChestCoinCollectButton.tryRenderTooltip(EasyGuiGraphics.create(event), event.getMouseX(), event.getMouseY());
        }
    }

    public static ScreenPosition getWalletSlotPosition(boolean isCreative) {
        return isCreative ? LCConfig.CLIENT.walletSlotCreative.get() : LCConfig.CLIENT.walletSlot.get();
    }

    @SubscribeEvent
    public static void playerJoinsServer(ClientPlayerNetworkEvent.LoggingIn event) {
        ConfigFile.loadClientFiles(ConfigFile.LoadPhase.GAME_START);
    }

    @SubscribeEvent
    public static void playerLeavesServer(ClientPlayerNetworkEvent.LoggingOut event) {
        SyncedConfigFile.onClientLeavesServer();
    }
}