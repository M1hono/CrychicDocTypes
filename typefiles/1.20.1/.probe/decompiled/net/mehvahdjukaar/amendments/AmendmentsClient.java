package net.mehvahdjukaar.amendments;

import com.google.common.base.Suppliers;
import dev.architectury.injectables.annotations.ExpectPlatform;
import dev.architectury.injectables.annotations.ExpectPlatform.Transformed;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import net.mehvahdjukaar.amendments.client.ClientResourceGenerator;
import net.mehvahdjukaar.amendments.client.ItemHoldingAnimationsManager;
import net.mehvahdjukaar.amendments.client.WallLanternModelsManager;
import net.mehvahdjukaar.amendments.client.colors.BrewingStandColor;
import net.mehvahdjukaar.amendments.client.colors.CrossbowColor;
import net.mehvahdjukaar.amendments.client.colors.MimicBlockColor;
import net.mehvahdjukaar.amendments.client.colors.SoftFluidColor;
import net.mehvahdjukaar.amendments.client.gui.LecternBookEditScreen;
import net.mehvahdjukaar.amendments.client.model.CarpetedBlockModel;
import net.mehvahdjukaar.amendments.client.model.CauldronModelLoader;
import net.mehvahdjukaar.amendments.client.model.HangingPotBakedModel;
import net.mehvahdjukaar.amendments.client.model.SkullCandleOverlayModel;
import net.mehvahdjukaar.amendments.client.model.ToolHookBakedModel;
import net.mehvahdjukaar.amendments.client.model.WallLanternBakedModel;
import net.mehvahdjukaar.amendments.client.model.WaterloggedLilyModel;
import net.mehvahdjukaar.amendments.client.particles.BoilingParticle;
import net.mehvahdjukaar.amendments.client.particles.ColoredSplashParticle;
import net.mehvahdjukaar.amendments.client.renderers.CandleSkullBlockTileRenderer;
import net.mehvahdjukaar.amendments.client.renderers.CeilingBannerBlockTileRenderer;
import net.mehvahdjukaar.amendments.client.renderers.DoubleSkullBlockTileRenderer;
import net.mehvahdjukaar.amendments.client.renderers.HangingSignRendererExtension;
import net.mehvahdjukaar.amendments.client.renderers.JukeboxTileRenderer;
import net.mehvahdjukaar.amendments.client.renderers.ToolHookTileRenderer;
import net.mehvahdjukaar.amendments.client.renderers.WallLanternBlockTileRenderer;
import net.mehvahdjukaar.amendments.common.block.BoilingWaterCauldronBlock;
import net.mehvahdjukaar.amendments.common.item.DyeBottleItem;
import net.mehvahdjukaar.amendments.configs.ClientConfigs;
import net.mehvahdjukaar.amendments.forge.AmendmentsClientImpl;
import net.mehvahdjukaar.amendments.integration.CompatHandler;
import net.mehvahdjukaar.amendments.integration.CompatObjects;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.mehvahdjukaar.moonlight.api.client.model.NestedModelLoader;
import net.mehvahdjukaar.moonlight.api.platform.ClientHelper;
import net.mehvahdjukaar.moonlight.api.set.BlocksColorAPI;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.minecraft.client.gui.screens.MenuScreens;
import net.minecraft.client.model.geom.ModelLayerLocation;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.FallingBlockRenderer;
import net.minecraft.client.renderer.texture.TextureAtlas;
import net.minecraft.client.resources.model.Material;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.RecordItem;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.properties.WoodType;

public class AmendmentsClient {

    public static final ResourceLocation SIGN_SHEET = new ResourceLocation("textures/atlas/signs.png");

    public static final Material CANVAS_SIGH_MATERIAL = new Material(SIGN_SHEET, Amendments.res("entity/signs/hanging/farmersdelight/extension_canvas"));

    public static final Supplier<Map<WoodType, Material>> HANGING_SIGN_EXTENSIONS = Suppliers.memoize(() -> (Map) WoodType.values().collect(Collectors.toMap(Function.identity(), w -> {
        String str = w.name();
        if (str.contains(":")) {
            str = str.replace(":", "/extension_");
        } else {
            str = "extension_" + str;
        }
        return new Material(SIGN_SHEET, Amendments.res("entity/signs/hanging/" + str));
    }, (v1, v2) -> v1, IdentityHashMap::new)));

    private static final Map<Item, Material> RECORD_MATERIALS = new HashMap();

    public static final Material DEFAULT_RECORD = new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_template"));

    public static final Material TINTED_RECORD = new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_tinted"));

    public static final List<Material> RECORD_PATTERNS = List.of(new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_0")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_1")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_2")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_3")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_4")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_5")));

    public static final List<Material> RECORD_PATTERNS_OVERLAY = List.of(new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_0s")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_1s")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_2s")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_3s")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_4s")), new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/music_disc_pattern_5s")));

    public static final ModelLayerLocation HANGING_SIGN_EXTENSION = loc("hanging_sign_extension");

    public static final ModelLayerLocation HANGING_SIGN_EXTENSION_CHAINS = loc("hanging_sign_chains");

    public static final ModelLayerLocation SKULL_CANDLE_OVERLAY = loc("skull_candle");

    public static final ResourceLocation BELL_ROPE = Amendments.res("block/bell_rope");

    public static final ResourceLocation BELL_CHAIN = Amendments.res("block/bell_chain");

    public static final ResourceLocation LECTERN_GUI = Amendments.res("textures/gui/lectern.png");

    public static final ResourceLocation POTION_TEXTURE = Amendments.res("block/potion_cauldron");

    public static final ResourceLocation MUSHROOM_STEW = Amendments.res("block/mushroom_stew_cauldron");

    public static final ResourceLocation RABBIT_STEW = Amendments.res("block/rabbit_stew_cauldron");

    public static final ResourceLocation BEETROOT_SOUP = Amendments.res("block/beetroot_soup_cauldron");

    public static final ResourceLocation SUS_STEW = Amendments.res("block/suspicious_stew_cauldron");

    public static float x;

    public static float y;

    public static float z;

    public static final Supplier<Map<Block, ResourceLocation>> SKULL_CANDLES_TEXTURES = Suppliers.memoize(() -> {
        Map<Block, ResourceLocation> map = new LinkedHashMap();
        map.put(Blocks.CANDLE, Amendments.res("textures/block/skull_candles/default.png"));
        for (DyeColor color : DyeColor.values()) {
            Block candle = BlocksColorAPI.getColoredBlock("candle", color);
            map.put(candle, Amendments.res("textures/block/skull_candles/" + color.getName() + ".png"));
        }
        if (CompatObjects.SOUL_CANDLE.get() != null) {
            map.put((Block) CompatObjects.SOUL_CANDLE.get(), Amendments.res("textures/block/skull_candles/soul.png"));
        }
        if (CompatObjects.CUPRIC_CANDLE.get() != null) {
            map.put((Block) CompatObjects.CUPRIC_CANDLE.get(), Amendments.res("textures/block/skull_candles/cupric.png"));
        }
        if (CompatObjects.ENDER_CANDLE.get() != null) {
            map.put((Block) CompatObjects.ENDER_CANDLE.get(), Amendments.res("textures/block/skull_candles/ender.png"));
        }
        if (CompatObjects.SPECTACLE_CANDLE.get() != null) {
            map.put((Block) CompatObjects.SPECTACLE_CANDLE.get(), Amendments.res("textures/block/skull_candles/spectacle.png"));
        }
        return map;
    });

    private static ModelLayerLocation loc(String name) {
        return new ModelLayerLocation(Amendments.res(name), name);
    }

    public static void init() {
        new ClientResourceGenerator().register();
        ClientHelper.addClientSetup(AmendmentsClient::setup);
        ClientHelper.addBlockEntityRenderersRegistration(AmendmentsClient::registerTileRenderers);
        ClientHelper.addModelLoaderRegistration(AmendmentsClient::registerModelLoaders);
        ClientHelper.addBlockColorsRegistration(AmendmentsClient::registerBlockColors);
        ClientHelper.addModelLayerRegistration(AmendmentsClient::registerModelLayers);
        ClientHelper.addSpecialModelRegistration(AmendmentsClient::registerSpecialModels);
        ClientHelper.addEntityRenderersRegistration(AmendmentsClient::registerEntityRenderers);
        ClientHelper.addItemColorsRegistration(AmendmentsClient::registerItemColors);
        ClientHelper.addParticleRegistration(AmendmentsClient::registerParticles);
    }

    public static void setup() {
        ClientHelper.registerRenderType((Block) ModRegistry.CARPET_STAIRS.get(), RenderType.cutout(), RenderType.solid(), RenderType.translucent());
        ClientHelper.registerRenderType((Block) ModRegistry.CARPET_SLAB.get(), RenderType.cutout(), RenderType.solid(), RenderType.translucent());
        ClientHelper.registerRenderType((Block) ModRegistry.WATERLILY_BLOCK.get(), RenderType.cutout());
        ClientHelper.registerRenderType(Blocks.WATER_CAULDRON, RenderType.cutout(), RenderType.translucent());
        ClientHelper.registerRenderType((Block) ModRegistry.LIQUID_CAULDRON.get(), RenderType.cutout(), RenderType.translucent());
        ClientHelper.registerRenderType((Block) ModRegistry.DYE_CAULDRON.get(), RenderType.cutout(), RenderType.translucent());
        ClientHelper.registerRenderType((Block) ModRegistry.HANGING_FLOWER_POT.get(), RenderType.cutout());
        ClientHelper.registerRenderType((Block) ModRegistry.WALL_LANTERN.get(), RenderType.cutout());
        ClientHelper.registerRenderType((Block) ModRegistry.TOOL_HOOK.get(), RenderType.cutout());
        MenuScreens.register((MenuType) ModRegistry.LECTERN_EDIT_MENU.get(), LecternBookEditScreen::new);
    }

    public static void afterTagSetup() {
        ItemHoldingAnimationsManager.addAnimations();
    }

    private static void registerItemColors(ClientHelper.ItemColorEvent event) {
        event.register((itemStack, i) -> i > 0 ? -1 : DyeBottleItem.getColor(itemStack), (ItemLike) ModRegistry.DYE_BOTTLE_ITEM.get());
        event.register(new CrossbowColor(), Items.CROSSBOW);
    }

    private static void registerTileRenderers(ClientHelper.BlockEntityRendererEvent event) {
        event.register(BlockEntityType.JUKEBOX, JukeboxTileRenderer::new);
        event.register((BlockEntityType) ModRegistry.CEILING_BANNER_TILE.get(), CeilingBannerBlockTileRenderer::new);
        event.register((BlockEntityType) ModRegistry.SKULL_PILE_TILE.get(), DoubleSkullBlockTileRenderer::new);
        event.register((BlockEntityType) ModRegistry.SKULL_CANDLE_TILE.get(), CandleSkullBlockTileRenderer::new);
        event.register((BlockEntityType) ModRegistry.WALL_LANTERN_TILE.get(), WallLanternBlockTileRenderer::new);
        event.register((BlockEntityType) ModRegistry.TOOL_HOOK_TILE.get(), ToolHookTileRenderer::new);
    }

    private static void registerParticles(ClientHelper.ParticleEvent event) {
        event.register(ModRegistry.BOILING_PARTICLE.get(), BoilingParticle.Provider::new);
        event.register(ModRegistry.SPLASH_PARTICLE.get(), ColoredSplashParticle.Provider::new);
    }

    private static void registerEntityRenderers(ClientHelper.EntityRendererEvent event) {
        event.register((EntityType) ModRegistry.FALLING_LANTERN.get(), FallingBlockRenderer::new);
    }

    private static void registerSpecialModels(ClientHelper.SpecialModelEvent event) {
        WallLanternModelsManager.registerSpecialModels(event);
        event.register(BELL_CHAIN);
        if (CompatHandler.SUPPLEMENTARIES) {
            event.register(BELL_ROPE);
        }
    }

    private static void registerModelLoaders(ClientHelper.ModelLoaderEvent event) {
        event.register(Amendments.res("carpet_overlay"), new NestedModelLoader("carpet", CarpetedBlockModel::new));
        event.register(Amendments.res("waterlogged_lily"), WaterloggedLilyModel::new);
        event.register(Amendments.res("wall_lantern"), new NestedModelLoader("support", WallLanternBakedModel::new));
        event.register(Amendments.res("cauldron"), new CauldronModelLoader());
        event.register(Amendments.res("hanging_pot"), new NestedModelLoader("rope", HangingPotBakedModel::new));
        event.register(Amendments.res("tool_hook"), new NestedModelLoader("hook", ToolHookBakedModel::new));
    }

    private static void registerModelLayers(ClientHelper.ModelLayerEvent event) {
        event.register(HANGING_SIGN_EXTENSION, HangingSignRendererExtension::createMesh);
        event.register(HANGING_SIGN_EXTENSION_CHAINS, HangingSignRendererExtension::createChainMesh);
        event.register(SKULL_CANDLE_OVERLAY, SkullCandleOverlayModel::createMesh);
    }

    private static void registerBlockColors(ClientHelper.BlockColorEvent event) {
        event.register(new MimicBlockColor(), (Block) ModRegistry.CARPET_STAIRS.get(), (Block) ModRegistry.CARPET_SLAB.get(), (Block) ModRegistry.WALL_LANTERN.get(), (Block) ModRegistry.HANGING_FLOWER_POT.get(), (Block) ModRegistry.WATERLILY_BLOCK.get());
        event.register(BoilingWaterCauldronBlock::getWaterColor, Blocks.WATER_CAULDRON);
        event.register(new BrewingStandColor(), Blocks.BREWING_STAND);
        event.register(new SoftFluidColor(), (Block) ModRegistry.DYE_CAULDRON.get(), (Block) ModRegistry.LIQUID_CAULDRON.get());
    }

    public static Map<Item, Material> getAllRecords() {
        if (RECORD_MATERIALS.isEmpty()) {
            for (Item i : BuiltInRegistries.ITEM) {
                if (i instanceof RecordItem) {
                    RECORD_MATERIALS.put(i, new Material(TextureAtlas.LOCATION_BLOCKS, Amendments.res("block/music_discs/" + Utils.getID(i).toString().replace("minecraft:", "").replace(":", "/"))));
                }
            }
        }
        return RECORD_MATERIALS;
    }

    public static Material getRecordMaterial(Item item) {
        return (Material) getAllRecords().getOrDefault(item, DEFAULT_RECORD);
    }

    public static void onItemTooltip(ItemStack itemStack, TooltipFlag tooltipFlag, List<Component> components) {
        if ((Boolean) ClientConfigs.TOOLTIP_HINTS.get()) {
        }
    }

    @ExpectPlatform
    @Transformed
    public static boolean hasFixedNormals() {
        return AmendmentsClientImpl.hasFixedNormals();
    }
}