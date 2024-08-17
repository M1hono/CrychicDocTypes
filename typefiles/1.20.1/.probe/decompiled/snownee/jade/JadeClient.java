package snownee.jade;

import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import java.text.MessageFormat;
import java.util.List;
import java.util.Objects;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.toasts.SystemToast;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.TitleScreen;
import net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen;
import net.minecraft.client.multiplayer.MultiPlayerGameMode;
import net.minecraft.client.renderer.Rect2i;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.nbt.NbtUtils;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.BrushableBlock;
import net.minecraft.world.level.block.InfestedBlock;
import net.minecraft.world.level.block.TrappedChestBlock;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.HitResult;
import org.jetbrains.annotations.Nullable;
import snownee.jade.addon.universal.ItemStorageProvider;
import snownee.jade.addon.vanilla.VanillaPlugin;
import snownee.jade.api.Accessor;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.ITooltip;
import snownee.jade.api.IWailaClientRegistration;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IWailaConfig;
import snownee.jade.api.theme.IThemeHelper;
import snownee.jade.api.theme.Theme;
import snownee.jade.gui.HomeConfigScreen;
import snownee.jade.impl.WailaClientRegistration;
import snownee.jade.impl.config.PluginConfig;
import snownee.jade.impl.config.WailaConfig;
import snownee.jade.overlay.DisplayHelper;
import snownee.jade.overlay.TooltipRenderer;
import snownee.jade.overlay.WailaTickHandler;
import snownee.jade.util.ClientProxy;
import snownee.jade.util.CommonProxy;
import snownee.jade.util.ModIdentification;

public final class JadeClient {

    public static KeyMapping openConfig;

    public static KeyMapping showOverlay;

    public static KeyMapping toggleLiquid;

    public static KeyMapping showDetails;

    public static KeyMapping narrate;

    public static KeyMapping showRecipes;

    public static KeyMapping showUses;

    public static boolean hideModName;

    private static boolean translationChecked;

    private static float savedProgress;

    private static float progressAlpha;

    private static boolean canHarvest;

    public static void init() {
        openConfig = ClientProxy.registerKeyBinding("config", 320);
        showOverlay = ClientProxy.registerKeyBinding("show_overlay", 321);
        toggleLiquid = ClientProxy.registerKeyBinding("toggle_liquid", 322);
        if (ClientProxy.shouldRegisterRecipeViewerKeys()) {
            showRecipes = ClientProxy.registerKeyBinding("show_recipes", 323);
            showUses = ClientProxy.registerKeyBinding("show_uses", 324);
        }
        narrate = ClientProxy.registerKeyBinding("narrate", 325);
        showDetails = ClientProxy.registerDetailsKeyBinding();
        ClientProxy.registerReloadListener(ModIdentification.INSTANCE);
    }

    public static void onKeyPressed(int action) {
        while (openConfig.consumeClick()) {
            Jade.CONFIG.invalidate();
            ItemStorageProvider.INSTANCE.targetCache.invalidateAll();
            ItemStorageProvider.INSTANCE.containerCache.invalidateAll();
            Minecraft.getInstance().setScreen(new HomeConfigScreen(null));
        }
        WailaConfig.ConfigGeneral general = Jade.CONFIG.get().getGeneral();
        while (showOverlay.consumeClick()) {
            IWailaConfig.DisplayMode mode = general.getDisplayMode();
            if (mode == IWailaConfig.DisplayMode.TOGGLE) {
                general.setDisplayTooltip(!general.shouldDisplayTooltip());
                if (!general.shouldDisplayTooltip() && general.hintOverlayToggle) {
                    SystemToast.add(Minecraft.getInstance().getToasts(), SystemToast.SystemToastIds.UNSECURE_SERVER_WARNING, Component.translatable("toast.jade.toggle_hint.1"), Component.translatable("toast.jade.toggle_hint.2", showOverlay.getTranslatedKeyMessage()));
                    general.hintOverlayToggle = false;
                }
                Jade.CONFIG.save();
            }
        }
        while (toggleLiquid.consumeClick()) {
            general.setDisplayFluids(!general.shouldDisplayFluids());
            Jade.CONFIG.save();
        }
        while (narrate.consumeClick()) {
            if (general.getTTSMode() == IWailaConfig.TTSMode.TOGGLE) {
                general.toggleTTS();
                if (general.shouldEnableTextToSpeech() && general.hintNarratorToggle) {
                    SystemToast.add(Minecraft.getInstance().getToasts(), SystemToast.SystemToastIds.UNSECURE_SERVER_WARNING, Component.translatable("toast.jade.tts_hint.1"), Component.translatable("toast.jade.tts_hint.2", narrate.getTranslatedKeyMessage()));
                    general.hintNarratorToggle = false;
                }
                Jade.CONFIG.save();
            } else if (WailaTickHandler.instance().tooltipRenderer != null) {
                WailaTickHandler.narrate(WailaTickHandler.instance().tooltipRenderer.getTooltip(), false);
            }
        }
    }

    public static void onGui(Screen screen) {
        if (!translationChecked && screen instanceof TitleScreen && CommonProxy.isDevEnv()) {
            translationChecked = true;
            List<String> keys = Lists.newArrayList();
            for (ResourceLocation id : PluginConfig.INSTANCE.getKeys()) {
                String key = "config.jade.plugin_%s.%s".formatted(id.getNamespace(), id.getPath());
                if (!I18n.exists(key)) {
                    keys.add(key);
                }
            }
            if (!keys.isEmpty()) {
                throw new AssertionError("Missing config translation: %s".formatted(Joiner.on(',').join(keys)));
            }
        }
    }

    public static void onTooltip(List<Component> tooltip, ItemStack stack, TooltipFlag context) {
        appendModName(tooltip, stack, context);
        if (Jade.CONFIG.get().getGeneral().isDebug() && stack.hasTag()) {
            tooltip.add(NbtUtils.toPrettyComponent(stack.getTag()));
        }
    }

    private static void appendModName(List<Component> tooltip, ItemStack stack, TooltipFlag context) {
        if (!hideModName && !tooltip.isEmpty() && Jade.CONFIG.get().getGeneral().showItemModNameTooltip()) {
            if (Minecraft.getInstance().screen instanceof CreativeModeInventoryScreen screen && screen.f_97734_ != null && screen.f_97734_.getItem() == stack && (CreativeModeInventoryScreen.selectedTab.getType() != CreativeModeTab.Type.CATEGORY || !context.isCreative())) {
                return;
            }
            int i = 1;
            String name = ModIdentification.getModName(stack);
            while (i < tooltip.size() && !Objects.equals(((Component) tooltip.get(i)).getString(), name)) {
                i++;
            }
            name = String.format(Jade.CONFIG.get().getFormatting().getModName(), name);
            tooltip.add(i, Component.literal(name));
        }
    }

    @Nullable
    public static Accessor<?> builtInOverrides(HitResult hitResult, @Nullable Accessor<?> accessor, @Nullable Accessor<?> originalAccessor) {
        if (!WailaClientRegistration.INSTANCE.maybeLowVisionUser() && IWailaConfig.get().getGeneral().getBuiltinCamouflage()) {
            if (accessor instanceof BlockAccessor target) {
                Player player = accessor.getPlayer();
                if (player.isCreative() || player.isSpectator()) {
                    return accessor;
                }
                IWailaClientRegistration client = VanillaPlugin.CLIENT_REGISTRATION;
                if (target.getBlock() instanceof TrappedChestBlock) {
                    BlockState state = VanillaPlugin.getCorrespondingNormalChest(target.getBlockState());
                    if (state != target.getBlockState()) {
                        return client.blockAccessor().from(target).blockState(state).build();
                    }
                }
                BlockAccessor.Builder builder = client.blockAccessor().from(target).blockEntity(() -> null);
                if (target.getBlock() instanceof InfestedBlock) {
                    Block block = ((InfestedBlock) target.getBlock()).getHostBlock();
                    return builder.blockState(block.defaultBlockState()).build();
                }
                if (target.getBlock() == Blocks.POWDER_SNOW) {
                    Block block = Blocks.SNOW_BLOCK;
                    return builder.blockState(block.defaultBlockState()).build();
                }
                if (target.getBlock() instanceof BrushableBlock brushable) {
                    Block block = brushable.getTurnsInto();
                    return builder.blockState(block.defaultBlockState()).build();
                }
            }
            return accessor;
        } else {
            return accessor;
        }
    }

    public static void drawBreakingProgress(ITooltip tooltip, Rect2i rect, GuiGraphics guiGraphics, Accessor<?> accessor) {
        if (!PluginConfig.INSTANCE.get(Identifiers.MC_BREAKING_PROGRESS)) {
            progressAlpha = 0.0F;
        } else {
            TooltipRenderer tooltipRenderer = WailaTickHandler.instance().tooltipRenderer;
            if (tooltipRenderer == null) {
                progressAlpha = 0.0F;
            } else {
                Minecraft mc = Minecraft.getInstance();
                MultiPlayerGameMode playerController = mc.gameMode;
                if (playerController != null && mc.level != null && mc.player != null) {
                    BlockState state = mc.level.m_8055_(playerController.destroyBlockPos);
                    if (playerController.isDestroying()) {
                        canHarvest = CommonProxy.isCorrectToolForDrops(state, mc.player);
                    } else if (progressAlpha == 0.0F) {
                        return;
                    }
                    Theme theme = IThemeHelper.get().theme();
                    int color = canHarvest ? theme.bottomProgressNormalColor : theme.bottomProgressFailureColor;
                    int width = (int) tooltipRenderer.getSize().x;
                    int height = (int) tooltipRenderer.getSize().y;
                    if (!IWailaConfig.get().getOverlay().getSquare() && theme.backgroundTexture == null) {
                        height++;
                    }
                    progressAlpha = progressAlpha + mc.getDeltaFrameTime() * (playerController.isDestroying() ? 0.1F : -0.1F);
                    if (playerController.isDestroying()) {
                        progressAlpha = Math.min(progressAlpha, 0.6F);
                        float progress = state.m_60625_(mc.player, mc.player.m_9236_(), playerController.destroyBlockPos);
                        if (playerController.destroyProgress + progress >= 1.0F) {
                            savedProgress = 1.0F;
                            progressAlpha = 1.0F;
                        } else {
                            progress = playerController.destroyProgress + mc.getFrameTime() * progress;
                            savedProgress = Mth.clamp(progress, 0.0F, 1.0F);
                        }
                    } else {
                        progressAlpha = Math.max(progressAlpha, 0.0F);
                    }
                    if (progressAlpha != 0.0F) {
                        color = IWailaConfig.IConfigOverlay.applyAlpha(color, progressAlpha);
                        if (theme.bottomProgressOffset == null) {
                            DisplayHelper.fill(guiGraphics, 0.0F, (float) (height - 1), (float) width * savedProgress, (float) height, color);
                        } else {
                            int[] offset = theme.bottomProgressOffset;
                            int offset0 = offset[0] + 2;
                            int offset1 = offset[1] + 2;
                            int offset2 = offset[2] + 2;
                            int offset3 = offset[3];
                            width += offset1 - offset3;
                            DisplayHelper.fill(guiGraphics, (float) offset3, (float) (height - 1 + offset0), (float) offset3 + (float) width * savedProgress, (float) (height + offset2), color);
                        }
                    }
                }
            }
        }
    }

    public static MutableComponent format(String s, Object... objects) {
        try {
            return Component.literal(MessageFormat.format(I18n.get(s), objects));
        } catch (Exception var3) {
            return Component.translatable(s, objects);
        }
    }
}