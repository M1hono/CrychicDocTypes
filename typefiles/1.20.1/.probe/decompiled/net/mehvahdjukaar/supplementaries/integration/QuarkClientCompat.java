package net.mehvahdjukaar.supplementaries.integration;

import dev.architectury.injectables.annotations.ExpectPlatform;
import dev.architectury.injectables.annotations.ExpectPlatform.Transformed;
import net.mehvahdjukaar.moonlight.api.platform.ClientHelper;
import net.mehvahdjukaar.supplementaries.integration.forge.QuarkClientCompatImpl;
import net.mehvahdjukaar.supplementaries.integration.quark.TaterInAJarTileRenderer;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntityType;
import org.violetmoon.quark.base.Quark;
import org.violetmoon.quark.base.config.QuarkGeneralConfig;
import org.violetmoon.quark.content.client.module.ImprovedTooltipsModule;

public class QuarkClientCompat {

    @ExpectPlatform
    @Transformed
    public static void initClient() {
        QuarkClientCompatImpl.initClient();
    }

    public static void registerEntityRenderers(ClientHelper.BlockEntityRendererEvent event) {
        event.register((BlockEntityType) QuarkCompat.TATER_IN_A_JAR_TILE.get(), TaterInAJarTileRenderer::new);
    }

    public static void setupClient() {
        ClientHelper.registerRenderType((Block) QuarkCompat.TATER_IN_A_JAR.get(), RenderType.cutout());
    }

    public static boolean shouldHaveButtonOnRight() {
        return !QuarkGeneralConfig.qButtonOnRight || !QuarkGeneralConfig.enableQButton;
    }

    public static boolean canRenderBlackboardTooltip() {
        return canRenderQuarkTooltip();
    }

    public static boolean canRenderQuarkTooltip() {
        return Quark.ZETA.modules.isEnabled(ImprovedTooltipsModule.class) && ImprovedTooltipsModule.shulkerTooltips && (!ImprovedTooltipsModule.shulkerBoxRequireShift || Screen.hasShiftDown());
    }
}