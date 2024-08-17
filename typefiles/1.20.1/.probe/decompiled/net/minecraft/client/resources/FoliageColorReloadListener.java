package net.minecraft.client.resources;

import java.io.IOException;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.server.packs.resources.SimplePreparableReloadListener;
import net.minecraft.util.profiling.ProfilerFiller;
import net.minecraft.world.level.FoliageColor;

public class FoliageColorReloadListener extends SimplePreparableReloadListener<int[]> {

    private static final ResourceLocation LOCATION = new ResourceLocation("textures/colormap/foliage.png");

    protected int[] prepare(ResourceManager resourceManager0, ProfilerFiller profilerFiller1) {
        try {
            return LegacyStuffWrapper.getPixels(resourceManager0, LOCATION);
        } catch (IOException var4) {
            throw new IllegalStateException("Failed to load foliage color texture", var4);
        }
    }

    protected void apply(int[] int0, ResourceManager resourceManager1, ProfilerFiller profilerFiller2) {
        FoliageColor.init(int0);
    }
}