package snownee.kiwi.customization.block;

import net.minecraft.resources.ResourceLocation;
import snownee.kiwi.KiwiModule;
import snownee.kiwi.util.codec.CustomizationCodecs;

public record GlassType(String name, boolean skipRendering, float shadeBrightness, KiwiModule.RenderLayer.Layer renderType) {

    public static final GlassType CLEAR = new GlassType("clear", true, 1.0F, KiwiModule.RenderLayer.Layer.CUTOUT);

    public static final GlassType CUSTOM_CLEAR = new GlassType("custom_clear", true, 1.0F, KiwiModule.RenderLayer.Layer.CUTOUT);

    public static final GlassType TRANSLUCENT = new GlassType("translucent", true, 1.0F, KiwiModule.RenderLayer.Layer.TRANSLUCENT);

    public static final GlassType QUARTZ = new GlassType("quartz", true, 1.0F, KiwiModule.RenderLayer.Layer.TRANSLUCENT);

    public static final GlassType TOUGHENED = new GlassType("toughened", true, 1.0F, KiwiModule.RenderLayer.Layer.TRANSLUCENT);

    public static final GlassType HOLLOW_STEEL = new GlassType("hollow_steel", false, 0.9F, KiwiModule.RenderLayer.Layer.CUTOUT);

    public GlassType(String name, boolean skipRendering, float shadeBrightness, KiwiModule.RenderLayer.Layer renderType) {
        this.name = name;
        this.skipRendering = skipRendering;
        this.shadeBrightness = shadeBrightness;
        this.renderType = renderType;
        CustomizationCodecs.GLASS_TYPES.put(new ResourceLocation(name), this);
    }
}