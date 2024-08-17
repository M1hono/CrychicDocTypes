package org.violetmoon.quark.content.world.module;

import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.levelgen.GenerationStep;
import net.minecraft.world.level.material.MapColor;
import org.violetmoon.quark.content.world.undergroundstyle.PermafrostStyle;
import org.violetmoon.quark.content.world.undergroundstyle.base.UndergroundStyleConfig;
import org.violetmoon.quark.content.world.undergroundstyle.base.UndergroundStyleGenerator;
import org.violetmoon.zeta.block.IZetaBlock;
import org.violetmoon.zeta.block.OldMaterials;
import org.violetmoon.zeta.block.ZetaBlock;
import org.violetmoon.zeta.config.Config;
import org.violetmoon.zeta.config.type.CompoundBiomeConfig;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.load.ZCommonSetup;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;
import org.violetmoon.zeta.util.Hint;
import org.violetmoon.zeta.world.WorldGenHandler;

@ZetaLoadModule(category = "world")
public class PermafrostModule extends ZetaModule {

    @Config
    public UndergroundStyleConfig generationSettings = ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) ((UndergroundStyleConfig.Builder) UndergroundStyleConfig.styleBuilder().style(new PermafrostStyle()).biomes(CompoundBiomeConfig.fromBiomeReslocs(false, "minecraft:frozen_peaks"))).rarity(2)).horizontalSize(72)).verticalSize(15)).horizontalVariation(22)).verticalVariation(4)).minYLevel(105)).maxYLevel(140)).build();

    @Hint
    public static ZetaBlock permafrost;

    @LoadEvent
    public final void register(ZRegister event) {
        CreativeTabManager.daisyChain();
        permafrost = (ZetaBlock) new ZetaBlock("permafrost", this, OldMaterials.stone().mapColor(MapColor.COLOR_LIGHT_BLUE).requiresCorrectToolForDrops().strength(1.5F, 10.0F).sound(SoundType.STONE)).setCreativeTab(CreativeModeTabs.BUILDING_BLOCKS, Blocks.DEEPSLATE, true);
        event.getVariantRegistry().addSlabStairsWall(permafrost, null);
        event.getVariantRegistry().addSlabStairsWall((IZetaBlock) new ZetaBlock("permafrost_bricks", this, BlockBehaviour.Properties.copy(permafrost)).setCreativeTab(CreativeModeTabs.BUILDING_BLOCKS), null);
        CreativeTabManager.endDaisyChain();
        ((PermafrostStyle) this.generationSettings.style).setBlock(permafrost.m_49966_());
    }

    @LoadEvent
    public final void setup(ZCommonSetup event) {
        WorldGenHandler.addGenerator(this, new UndergroundStyleGenerator(this.generationSettings, "permafrost"), GenerationStep.Decoration.UNDERGROUND_DECORATION, 1);
    }
}