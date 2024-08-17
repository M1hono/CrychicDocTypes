package net.mehvahdjukaar.supplementaries.reg;

import com.google.common.collect.ImmutableList;
import it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.mehvahdjukaar.supplementaries.integration.CompatHandler;
import net.minecraft.Util;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.entity.BannerPattern;

public class ModTextures {

    public static final ResourceLocation WHITE_CONCRETE_TEXTURE = new ResourceLocation("minecraft:block/white_concrete_powder");

    public static final ResourceLocation SAND_TEXTURE = new ResourceLocation("minecraft:block/sand");

    public static final ResourceLocation CHAIN_TEXTURE = new ResourceLocation("minecraft:block/chain");

    public static final ResourceLocation HONEY_TEXTURE = new ResourceLocation("minecraft:block/honey_block_side");

    public static final ResourceLocation SLIME_TEXTURE = new ResourceLocation("minecraft:block/slime_block");

    public static final ResourceLocation FISHIES_TEXTURE = Supplementaries.res("block/fishies");

    public static final ResourceLocation BELLOWS_TEXTURE = Supplementaries.res("block/bellows");

    public static final ResourceLocation CLOCK_HAND_TEXTURE = Supplementaries.res("block/clock_hand");

    public static final ResourceLocation HOURGLASS_REDSTONE = Supplementaries.res("block/hourglass_redstone");

    public static final ResourceLocation HOURGLASS_GLOWSTONE = Supplementaries.res("block/hourglass_glowstone");

    public static final ResourceLocation HOURGLASS_BLAZE = Supplementaries.res("block/hourglass_blaze");

    public static final ResourceLocation HOURGLASS_GUNPOWDER = Supplementaries.res("block/hourglass_gunpowder");

    public static final ResourceLocation BLACKBOARD_GRID = Supplementaries.res("block/blackboard_grid");

    public static final ResourceLocation CANNON_TEXTURE = Supplementaries.res("block/cannon");

    public static final ResourceLocation SUGAR = Supplementaries.res("block/sugar");

    public static final ResourceLocation ASH = Supplementaries.res("block/ash");

    public static final ResourceLocation TIMBER_CROSS_BRACE_TEXTURE = Supplementaries.res("block/timber_cross_brace");

    public static final ResourceLocation BLACKBOARD_TEXTURE = Supplementaries.res("block/blackboard");

    public static final ResourceLocation BLACKBOARD_WHITE_TEXTURE = Supplementaries.res("block/blackboard_white");

    public static final ResourceLocation BLACKBOARD_BLACK_TEXTURE = Supplementaries.res("block/blackboard_black");

    public static final ResourceLocation GLOBE_TEXTURE = Supplementaries.res("textures/entity/globes/globe_the_world.png");

    public static final ResourceLocation GLOBE_FLAT_TEXTURE = Supplementaries.res("textures/entity/globes/globe_flat.png");

    public static final ResourceLocation GLOBE_MOON_TEXTURE = Supplementaries.res("textures/entity/globes/globe_moon.png");

    public static final ResourceLocation GLOBE_SUN_TEXTURE = Supplementaries.res("textures/entity/globes/globe_sun.png");

    public static final ResourceLocation GLOBE_SHEARED_TEXTURE = Supplementaries.res("textures/entity/globes/globe_sheared.png");

    public static final ResourceLocation GLOBE_SHEARED_SEPIA_TEXTURE = Supplementaries.res("textures/entity/globes/globe_sheared_sepia.png");

    public static final ResourceLocation ENDERMAN_HEAD = Supplementaries.res("textures/entity/enderman_head.png");

    public static final ResourceLocation ENDERMAN_HEAD_EYES = Supplementaries.res("textures/entity/enderman_head_eyes.png");

    public static final ResourceLocation CANNON_TRAJECTORY = Supplementaries.res("textures/entity/cannon_trajectory.png");

    public static final ResourceLocation CANNON_TRAJECTORY_RED = Supplementaries.res("textures/entity/cannon_trajectory_charging.png");

    public static final ResourceLocation BLACKBOARD_GUI_GRID = Supplementaries.res("textures/gui/blackboard_grid.png");

    public static final ResourceLocation ROPE_ARROW = Supplementaries.res("textures/entity/rope_arrow.png");

    public static final ResourceLocation RED_MERCHANT = Supplementaries.res("textures/entity/misc/red_merchant.png");

    public static final ResourceLocation ORANGE_MERCHANT = Supplementaries.res("textures/entity/misc/orange_merchant.png");

    public static final ResourceLocation RED_MERCHANT_CHRISTMAS = Supplementaries.res("textures/entity/misc/christmas_merchant.png");

    public static final ResourceLocation STATUE = Supplementaries.res("textures/entity/statue.png");

    public static final ResourceLocation HAT_STAND = Supplementaries.res("textures/entity/hat_stand.png");

    public static final ResourceLocation FIREFLY_TEXTURE = Supplementaries.res("textures/entity/firefly.png");

    public static final ResourceLocation BELL_ROPE_TEXTURE = Supplementaries.res("textures/entity/bell_rope.png");

    public static final ResourceLocation BELL_CHAIN_TEXTURE = Supplementaries.res("textures/entity/bell_chain.png");

    public static final ResourceLocation THICK_GOLEM = Supplementaries.res("textures/entity/misc/iron_golem.png");

    public static final ResourceLocation SEA_PICKLE_RICK = Supplementaries.res("textures/entity/misc/sea_pickle.png");

    public static final ResourceLocation JAR_MAN = Supplementaries.res("textures/entity/misc/jar_man.png");

    public static final ResourceLocation SLIME_ENTITY_OVERLAY = Supplementaries.res("textures/entity/slime_overlay.png");

    public static final ResourceLocation ANTIQUABLE_FONT = Supplementaries.res("antiquable");

    public static final ResourceLocation SLIME_GUI_OVERLAY = Supplementaries.res("textures/gui/slime_overlay.png");

    public static final ResourceLocation BLACKBOARD_GUI_TEXTURE = Supplementaries.res("textures/gui/blackboard.png");

    public static final ResourceLocation BLACKBOARD_BLANK_TEXTURE = Supplementaries.res("textures/gui/blackboard_blank.png");

    public static final ResourceLocation CONFIG_BACKGROUND = Supplementaries.res("textures/gui/config_background.png");

    public static final ResourceLocation NOTICE_BOARD_GUI_TEXTURE = Supplementaries.res("textures/gui/notice_board_gui.png");

    public static final ResourceLocation SACK_GUI_TEXTURE = Supplementaries.res("textures/gui/sack_gui.png");

    public static final ResourceLocation SLOT_TEXTURE = Supplementaries.res("textures/gui/slot.png");

    public static final ResourceLocation PULLEY_BLOCK_GUI_TEXTURE = Supplementaries.res("textures/gui/pulley_block_gui.png");

    public static final ResourceLocation PRESENT_GUI_TEXTURE = Supplementaries.res("textures/gui/present_gui.png");

    public static final ResourceLocation PRESENT_EMPTY_GUI_TEXTURE = Supplementaries.res("textures/gui/present_empty_gui.png");

    public static final ResourceLocation TRAPPED_PRESENT_GUI_TEXTURE = Supplementaries.res("textures/gui/trapped_present_gui.png");

    public static final ResourceLocation RED_MERCHANT_GUI_TEXTURE = Supplementaries.res("textures/gui/red_merchant.png");

    public static final ResourceLocation TATTERED_BOOK_GUI_TEXTURE = Supplementaries.res("textures/gui/tattered_book.png");

    public static final ResourceLocation CANNON_ICONS_TEXTURE = Supplementaries.res("textures/gui/cannon_icons.png");

    public static final ResourceLocation BOOK_ENCHANTED_TEXTURES = Supplementaries.res("block/books/book_enchanted");

    public static final ResourceLocation BOOK_TOME_TEXTURES = Supplementaries.res("block/books/book_tome");

    public static final ResourceLocation BOOK_WRITTEN_TEXTURES = Supplementaries.res("block/books/book_written");

    public static final ResourceLocation BOOK_AND_QUILL_TEXTURES = Supplementaries.res("block/books/book_and_quill");

    public static final ResourceLocation BOOK_ANTIQUE_TEXTURES = Supplementaries.res("block/books/book_antique");

    public static final ResourceLocation BUBBLE_BLOCK_TEXTURE = Supplementaries.res("block/bubble_block");

    public static final ResourceLocation BUBBLE_BLOCK_COLORS_TEXTURE = Supplementaries.res("block/bubble_block_colors");

    public static final ResourceLocation FLAG_ICON = Supplementaries.res("item/gui_slots/empty_slot_flag");

    public static final ResourceLocation BANNER_ICON = Supplementaries.res("item/gui_slots/empty_slot_banner");

    public static final ResourceLocation MAP_ICON = Supplementaries.res("item/gui_slots/empty_slot_map");

    public static final ResourceLocation ROPE_ICON = Supplementaries.res("item/gui_slots/empty_slot_rope");

    public static final ResourceLocation CHAIN_ICON = Supplementaries.res("item/gui_slots/empty_slot_chain");

    public static final ResourceLocation BANNER_PATTERN_ICON = Supplementaries.res("item/gui_slots/empty_slot_banner_pattern");

    public static final ResourceLocation BOOK_ICON = Supplementaries.res("item/gui_slots/empty_slot_book");

    public static final ResourceLocation ANTIQUE_INK_ICON = Supplementaries.res("item/gui_slots/empty_slot_antique_ink");

    public static final ResourceLocation MAP_ATLAS_ICON = Supplementaries.res("item/gui_slots/empty_slot_map_atlas");

    public static final ResourceLocation PAPER_ICON = Supplementaries.res("item/gui_slots/empty_slot_paper");

    public static final ResourceLocation GLASS_PANE_ICON = Supplementaries.res("item/gui_slots/empty_slot_glass_pane");

    public static final List<ResourceLocation> CARTOGRAPHY_INGREDIENTS_ICONS = Util.make(() -> {
        ArrayList<ResourceLocation> l = new ArrayList();
        l.add(PAPER_ICON);
        l.add(GLASS_PANE_ICON);
        if ((Boolean) CommonConfigs.Tools.ANTIQUE_INK_ENABLED.get()) {
            l.add(ANTIQUE_INK_ICON);
        }
        if (CompatHandler.MAPATLAS) {
            l.add(MAP_ATLAS_ICON);
        }
        return ImmutableList.copyOf(l);
    });

    public static final List<ResourceLocation> MAP_ICONS = Util.make(() -> {
        ArrayList<ResourceLocation> l = new ArrayList();
        l.add(MAP_ICON);
        if (CompatHandler.MAPATLAS) {
            l.add(MAP_ATLAS_ICON);
        }
        return ImmutableList.copyOf(l);
    });

    public static final List<ResourceLocation> BANNER_SLOT_ICONS = List.of(BANNER_ICON, FLAG_ICON);

    public static final List<ResourceLocation> PULLEY_SLOT_ICONS = List.of(ROPE_ICON, CHAIN_ICON);

    public static final List<ResourceLocation> NOTICE_BOARD_SLOT_ICONS = List.of(MAP_ICON, BANNER_PATTERN_ICON, BOOK_ICON);

    public static final Map<BannerPattern, ResourceLocation> FLAG_TEXTURES = Util.make(() -> {
        Object2ObjectOpenHashMap<BannerPattern, ResourceLocation> map = new Object2ObjectOpenHashMap();
        for (BannerPattern pattern : BuiltInRegistries.BANNER_PATTERN) {
            map.put(pattern, Supplementaries.res("entity/banner/flags/" + BuiltInRegistries.BANNER_PATTERN.getKey(pattern).toShortLanguageKey().replace(":", "/").replace(".", "/")));
        }
        return map;
    });
}