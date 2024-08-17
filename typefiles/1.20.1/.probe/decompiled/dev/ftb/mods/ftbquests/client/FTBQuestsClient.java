package dev.ftb.mods.ftbquests.client;

import com.mojang.blaze3d.platform.InputConstants;
import dev.architectury.event.events.client.ClientLifecycleEvent;
import dev.architectury.registry.ReloadListenerRegistry;
import dev.architectury.registry.client.keymappings.KeyMappingRegistry;
import dev.architectury.registry.client.rendering.RenderTypeRegistry;
import dev.ftb.mods.ftblibrary.config.ImageResourceConfig;
import dev.ftb.mods.ftblibrary.config.ui.EditConfigScreen;
import dev.ftb.mods.ftblibrary.ui.Widget;
import dev.ftb.mods.ftblibrary.ui.input.MouseButton;
import dev.ftb.mods.ftbquests.FTBQuests;
import dev.ftb.mods.ftbquests.block.FTBQuestsBlocks;
import dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity;
import dev.ftb.mods.ftbquests.item.FTBQuestsItems;
import dev.ftb.mods.ftbquests.net.SetCustomImageMessage;
import dev.ftb.mods.ftbquests.quest.BaseQuestFile;
import dev.ftb.mods.ftbquests.quest.QuestObjectBase;
import dev.ftb.mods.ftbquests.quest.TeamData;
import dev.ftb.mods.ftbquests.quest.theme.ThemeLoader;
import java.util.List;
import java.util.Optional;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.client.player.LocalPlayer;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.block.model.BakedQuad;
import net.minecraft.client.renderer.texture.TextureAtlasSprite;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.nbt.StringTag;
import net.minecraft.server.packs.PackType;
import net.minecraft.util.RandomSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public class FTBQuestsClient {

    public static KeyMapping KEY_QUESTS;

    public static void init() {
        FTBQuestsClientConfig.init();
        ClientLifecycleEvent.CLIENT_SETUP.register(FTBQuestsClient::onClientSetup);
        ReloadListenerRegistry.register(PackType.CLIENT_RESOURCES, new QuestFileCacheReloader());
        ReloadListenerRegistry.register(PackType.CLIENT_RESOURCES, new ThemeLoader());
        KeyMappingRegistry.register(KEY_QUESTS = new KeyMapping("key.ftbquests.quests", InputConstants.Type.KEYSYM, -1, "key.categories.ftbquests"));
        new FTBQuestsClientEventHandler().init();
    }

    private static void onClientSetup(Minecraft minecraft) {
        RenderTypeRegistry.register(RenderType.translucent(), (Block) FTBQuestsBlocks.BARRIER.get());
        RenderTypeRegistry.register(RenderType.translucent(), (Block) FTBQuestsBlocks.STAGE_BARRIER.get());
        RenderTypeRegistry.register(RenderType.solid(), (Block) FTBQuestsBlocks.TASK_SCREEN_1.get());
        RenderTypeRegistry.register(RenderType.solid(), (Block) FTBQuestsBlocks.TASK_SCREEN_3.get());
        RenderTypeRegistry.register(RenderType.solid(), (Block) FTBQuestsBlocks.TASK_SCREEN_5.get());
        RenderTypeRegistry.register(RenderType.solid(), (Block) FTBQuestsBlocks.TASK_SCREEN_7.get());
        RenderTypeRegistry.register(RenderType.solid(), (Block) FTBQuestsBlocks.AUX_SCREEN.get());
        GuiProviders.setTaskGuiProviders();
        GuiProviders.setRewardGuiProviders();
    }

    @Nullable
    public static BaseQuestFile getClientQuestFile() {
        return ClientQuestFile.INSTANCE;
    }

    public static Player getClientPlayer() {
        return Minecraft.getInstance().player;
    }

    public static Level getClientLevel() {
        return Minecraft.getInstance().level;
    }

    public static boolean isClientDataLoaded() {
        return ClientQuestFile.exists();
    }

    public static TeamData getClientPlayerData() {
        return ClientQuestFile.INSTANCE.selfTeamData;
    }

    public static BaseQuestFile createClientQuestFile() {
        return new ClientQuestFile();
    }

    public static void openGui() {
        ClientQuestFile.openGui();
    }

    public static void openCustomIconGui(Player player, InteractionHand hand) {
        ImageResourceConfig config = new ImageResourceConfig();
        config.onClicked(null, MouseButton.LEFT, accepted -> {
            if (accepted) {
                if (config.isEmpty()) {
                    player.m_21120_(hand).removeTagKey("Icon");
                } else {
                    player.m_21120_(hand).addTagElement("Icon", StringTag.valueOf(config.getValue().toString()));
                }
                new SetCustomImageMessage(hand, config.getValue()).sendToServer();
            }
            Minecraft.getInstance().setScreen(null);
        });
    }

    public static void openScreenConfigGui(BlockPos pos) {
        if (Minecraft.getInstance().level.m_7702_(pos) instanceof TaskScreenBlockEntity coreScreen) {
            new EditConfigScreen(coreScreen.fillConfigGroup(ClientQuestFile.INSTANCE.getOrCreateTeamData(coreScreen.getTeamId()))).setAutoclose(true).openGui();
        }
    }

    public static float[] getTextureUV(BlockState state, Direction face) {
        if (state == null) {
            return null;
        } else {
            BakedModel model = Minecraft.getInstance().getBlockRenderer().getBlockModel(state);
            List<BakedQuad> quads = model.getQuads(state, face, RandomSource.create());
            if (!quads.isEmpty()) {
                TextureAtlasSprite sprite = ((BakedQuad) quads.get(0)).getSprite();
                return new float[] { sprite.getU0(), sprite.getV0(), sprite.getU1(), sprite.getV1() };
            } else {
                return new float[0];
            }
        }
    }

    public static void rebuildCreativeTabs() {
        LocalPlayer player = Minecraft.getInstance().player;
        if (player == null) {
            FTBQuests.LOGGER.debug("deferring creative tab rebuild, client player still null");
            FTBQuestsClientEventHandler.creativeTabRebuildPending = true;
        } else {
            FTBQuests.LOGGER.debug("rebuilding creative tabs now");
            CreativeModeTab.ItemDisplayParameters params = new CreativeModeTab.ItemDisplayParameters(player.connection.enabledFeatures(), player.m_36337_(), player.m_9236_().registryAccess());
            ((CreativeModeTab) FTBQuestsItems.CREATIVE_TAB.get()).buildContents(params);
            CreativeModeTabs.searchTab().buildContents(params);
        }
    }

    public static Optional<CreativeModeTab.ItemDisplayParameters> creativeTabDisplayParams() {
        LocalPlayer player = Minecraft.getInstance().player;
        return player != null ? Optional.of(new CreativeModeTab.ItemDisplayParameters(player.connection.enabledFeatures(), Minecraft.getInstance().options.operatorItemsTab().get(), player.f_108545_.m_9598_())) : Optional.empty();
    }

    public static void copyToClipboard(QuestObjectBase qo) {
        Widget.setClipboardString(qo.getCodeString());
    }
}