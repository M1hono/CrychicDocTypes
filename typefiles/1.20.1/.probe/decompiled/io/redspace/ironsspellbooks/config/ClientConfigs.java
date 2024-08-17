package io.redspace.ironsspellbooks.config;

import io.redspace.ironsspellbooks.gui.overlays.ManaBarOverlay;
import io.redspace.ironsspellbooks.gui.overlays.RecastOverlay;
import io.redspace.ironsspellbooks.gui.overlays.SpellBarOverlay;
import net.minecraftforge.common.ForgeConfigSpec;

public class ClientConfigs {

    public static final ForgeConfigSpec.Builder BUILDER = new ForgeConfigSpec.Builder();

    public static final ForgeConfigSpec.ConfigValue<Boolean> SHOW_FIRST_PERSON_ARMS = BUILDER.define("showFirstPersonArms", true);

    public static final ForgeConfigSpec.ConfigValue<Boolean> SHOW_FIRST_PERSON_ITEMS = BUILDER.define("showFirstPersonItems", true);

    public static final ForgeConfigSpec.ConfigValue<Boolean> REPLACE_GHAST_FIREBALL = BUILDER.define("replaceGhastFireballs", true);

    public static final ForgeConfigSpec.ConfigValue<Boolean> REPLACE_BLAZE_FIREBALL = BUILDER.define("replaceBlazeFireballs", true);

    public static final ForgeConfigSpec.ConfigValue<Integer> MANA_BAR_Y_OFFSET = BUILDER.define("manaBarYOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Integer> MANA_BAR_X_OFFSET = BUILDER.define("manaBarXOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Integer> MANA_TEXT_X_OFFSET = BUILDER.define("manaTextXOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Integer> MANA_TEXT_Y_OFFSET = BUILDER.define("manaTextYOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Boolean> MANA_BAR_TEXT_VISIBLE = BUILDER.define("manaBarTextVisible", true);

    public static final ForgeConfigSpec.ConfigValue<Boolean> ENABLE_BOSS_MUSIC = BUILDER.define("enableBossMusic", true);

    public static final ForgeConfigSpec.ConfigValue<ManaBarOverlay.Anchor> MANA_BAR_ANCHOR = BUILDER.defineEnum("manaBarAnchor", ManaBarOverlay.Anchor.Hunger);

    public static final ForgeConfigSpec.ConfigValue<ManaBarOverlay.Display> MANA_BAR_DISPLAY = BUILDER.defineEnum("manaBarDisplay", ManaBarOverlay.Display.Contextual);

    public static final ForgeConfigSpec.ConfigValue<ManaBarOverlay.Display> SPELL_BAR_DISPLAY = BUILDER.defineEnum("spellBarDisplay", ManaBarOverlay.Display.Always);

    public static final ForgeConfigSpec.ConfigValue<Integer> SPELL_BAR_Y_OFFSET = BUILDER.define("spellBarYOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Integer> SPELL_BAR_X_OFFSET = BUILDER.define("spellBarXOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<SpellBarOverlay.Anchor> SPELL_BAR_ANCHOR = BUILDER.defineEnum("spellBarAnchor", SpellBarOverlay.Anchor.Hotbar);

    public static final ForgeConfigSpec.ConfigValue<RecastOverlay.Anchor> RECAST_ANCHOR = BUILDER.defineEnum("recastAnchor", RecastOverlay.Anchor.TopCenter);

    public static final ForgeConfigSpec.ConfigValue<Integer> RECAST_Y_OFFSET = BUILDER.define("recastYOffset", 0);

    public static final ForgeConfigSpec.ConfigValue<Integer> RECAST_X_OFFSET = BUILDER.define("recastXOffset", 0);

    public static final ForgeConfigSpec SPEC = BUILDER.build();

    static {
        BUILDER.comment("#######################################################################################################################");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##   ATTENTION: These are client configs. For gameplay settings, go to the SERVER CONFIGS (in the world save file)   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("##                                                                                                                   ##");
        BUILDER.comment("#######################################################################################################################");
        BUILDER.comment("");
        BUILDER.push("UI");
        BUILDER.push("ManaBar");
        BUILDER.comment("By default (Contextual), the mana bar only appears when you are holding a magic item or are not at max mana.");
        BUILDER.comment("Used to adjust mana bar's position (11 is one full hunger bar up).");
        BUILDER.pop();
        BUILDER.push("SpellBar");
        BUILDER.comment("By default (Always), the spell bar always shows the spells in your equipped spellbook. Contextual will hide them when not in use.");
        BUILDER.comment("Used to adjust spell bar's position.");
        BUILDER.pop();
        BUILDER.push("RecastOverlay");
        BUILDER.pop();
        BUILDER.pop();
        BUILDER.push("Animations");
        BUILDER.comment("What to render in first person while casting.");
        BUILDER.pop();
        BUILDER.push("Renderers");
        BUILDER.comment("By default, both fireballs are replaced with an enhanced model used by fire spells.");
        BUILDER.pop();
        BUILDER.push("Music");
        BUILDER.pop();
    }
}