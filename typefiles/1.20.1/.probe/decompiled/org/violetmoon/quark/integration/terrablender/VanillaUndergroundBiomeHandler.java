package org.violetmoon.quark.integration.terrablender;

import com.mojang.datafixers.util.Pair;
import java.util.function.Consumer;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.biome.Biome;
import net.minecraft.world.level.biome.Climate;
import net.minecraft.world.level.biome.OverworldBiomeBuilder;

public class VanillaUndergroundBiomeHandler extends AbstractUndergroundBiomeHandler {

    @Override
    public void modifyVanillaOverworldPreset(OverworldBiomeBuilder builder, Consumer<Pair<Climate.ParameterPoint, ResourceKey<Biome>>> consumer) {
        this.addUndergroundBiomesTo(consumer);
    }
}