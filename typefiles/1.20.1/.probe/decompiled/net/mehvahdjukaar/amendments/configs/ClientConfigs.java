package net.mehvahdjukaar.amendments.configs;

import java.util.function.Supplier;
import net.mehvahdjukaar.amendments.common.PendulumAnimation;
import net.mehvahdjukaar.moonlight.api.ModSharedVariables;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigBuilder;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigSpec;
import net.mehvahdjukaar.moonlight.api.platform.configs.ConfigType;

public class ClientConfigs {

    public static final Supplier<Boolean> TOOLTIP_HINTS;

    public static final Supplier<Boolean> CUSTOM_CONFIGURED_SCREEN;

    public static final Supplier<Double> LILY_OFFSET;

    public static final Supplier<Boolean> BELL_CONNECTION;

    public static final Supplier<Boolean> COLORED_BREWING_STAND;

    public static final Supplier<Boolean> SWINGING_SIGNS;

    public static final Supplier<Boolean> SIGN_ATTACHMENT;

    public static final Supplier<PendulumAnimation.Config> HANGING_SIGN_CONFIG;

    public static final Supplier<Double> ITEM_SCALE;

    public static final Supplier<Boolean> POTION_TEXTURE;

    public static final Supplier<Boolean> JUKEBOX_MODEL;

    public static final Supplier<Boolean> JUKEBOX_SPIN;

    public static final Supplier<Boolean> FAST_LANTERNS;

    public static final Supplier<Boolean> LANTERN_HOLDING;

    public static final Supplier<Boolean> LANTERN_HOLDING_UP;

    public static final Supplier<Double> LANTERN_HOLDING_SIZE;

    public static final Supplier<PendulumAnimation.Config> WALL_LANTERN_CONFIG;

    public static final Supplier<Boolean> TORCH_HOLDING;

    public static final Supplier<Boolean> CANDLE_HOLDER_HOLDING;

    public static final Supplier<Boolean> HOLDING_ANIMATION_FIXED;

    public static final Supplier<Boolean> COLORED_ARROWS;

    public static final Supplier<Boolean> FAST_HOOKS;

    public static final Supplier<Double> BRIGHTEN_SIGN_TEXT_COLOR;

    private static float signColorMult = 1.2F;

    private static float hsScale = 1.0F;

    public static final ConfigSpec SPEC;

    public static void init() {
    }

    private static void onChange() {
        signColorMult = (float) ((Double) BRIGHTEN_SIGN_TEXT_COLOR.get()).doubleValue();
        hsScale = (float) ((Double) ITEM_SCALE.get()).doubleValue();
    }

    public static float getSignColorMult() {
        return signColorMult;
    }

    public static float getItemPixelScale() {
        return hsScale;
    }

    static {
        ConfigBuilder builder = ConfigBuilder.create("amendments", ConfigType.CLIENT);
        builder.push("general");
        TOOLTIP_HINTS = builder.define("tooltip_hints", true);
        CUSTOM_CONFIGURED_SCREEN = builder.define("custom_configured_screen", true);
        builder.pop();
        builder.push("lily_pad");
        LILY_OFFSET = builder.comment("set to 0 tho have lilypads at the same exact position as vanilla.negative numbers will place them in their own blockspace right below avoiding any clipping.best of both worlds at default as its barely within its space").define("y_offset", -0.016625, -1.0, 1.0);
        builder.pop();
        builder.push("bell");
        BELL_CONNECTION = builder.comment("Visually attach chains and ropes to bells").define("chain_attachment", true);
        builder.pop();
        builder.push("brewing_stand");
        COLORED_BREWING_STAND = builder.comment("Colors the brewing stand potion texture depending on the potions it's brewing.\nIf using a resource pack add tint index from 0 to 3 to the 3 potion layers").define("brewing_stand_colors", true);
        builder.pop();
        builder.push("arrows");
        COLORED_ARROWS = builder.comment("Makes tipped arrows show their colors when loaded with a crossbow").define("crossbows_colors", true);
        builder.pop();
        builder.push("tripwire_hook");
        FAST_HOOKS = builder.comment("Makes hooks render faster using a block model instead of tile renderer. Cost is that animated and enchanted items will appear static").define("fast_hooks", false);
        builder.pop();
        builder.push("hanging_sign");
        ITEM_SCALE = builder.comment("Scale of items on hanging signs (unit is in pixel they would occupy). Set to 8 to better match the pixels on the sign").define("item_pixel_scale", 10.0, 0.0, 32.0);
        SWINGING_SIGNS = builder.comment("Makes signs swing!").define("swinging_signs", true);
        SIGN_ATTACHMENT = builder.comment("Signs have visual attachment to walls and fences").define("sign_attachment", true);
        HANGING_SIGN_CONFIG = builder.defineObject("swing_physics", PendulumAnimation.Config::new, PendulumAnimation.Config.CODEC);
        builder.pop();
        builder.push("lantern");
        FAST_LANTERNS = builder.comment("Makes wall lantern use a simple block model instead of the animated tile entity renderer. This will make them render much faster but will also remove the animationNote that this option only affect lanterns close by as the one far away render as fast by default").define("fast_lanterns", false);
        WALL_LANTERN_CONFIG = builder.defineObject("swing_physics", PendulumAnimation.Config::new, PendulumAnimation.Config.CODEC);
        LANTERN_HOLDING_SIZE = builder.comment("Size lanterns when held in hand").define("lantern_item_size", 0.625, 0.0, 1.0);
        LANTERN_HOLDING = builder.comment("Gives a special animation to lanterns when held in hand").define("lantern_item_holding", true);
        LANTERN_HOLDING_UP = builder.comment("Makes lantern holding animation have the arm angled more upwards. Looks better if you have dynamic lights on").define("lantern_item_holding_up", false);
        builder.pop();
        builder.push("cauldron");
        POTION_TEXTURE = builder.comment("Gives a unique texture to potion cauldrons").define("potion_texture", true);
        builder.pop();
        builder.push("jukebox");
        JUKEBOX_MODEL = builder.comment("Use the new jukebox model").define("new_model", true);
        JUKEBOX_SPIN = builder.comment("Makes jukebox disc spin while playing").define("disc_spin", true);
        builder.pop();
        builder.push("misc");
        TORCH_HOLDING = builder.comment("Gives a special animation to torches when held in hand").define("torch_item_holding", true);
        CANDLE_HOLDER_HOLDING = builder.comment("Gives a special animation to supplementaries candle holders when held in hand").define("handle_holder_item_holding", true);
        HOLDING_ANIMATION_FIXED = builder.comment("Makes Torch and Lantern holding animation be fixed, not changing with player facing").define("fixed_holding_animations", false);
        BRIGHTEN_SIGN_TEXT_COLOR = builder.comment("A scalar multiplier that will be applied to sign text making it brighter, supposedly more legible").define("sign_text_color_multiplier", 1.2, 0.0, 5.0);
        builder.pop();
        builder.onChange(ClientConfigs::onChange);
        SPEC = builder.buildAndRegister();
        SPEC.loadFromFile();
        ModSharedVariables.registerDouble("color_multiplier", () -> (double) signColorMult);
    }
}