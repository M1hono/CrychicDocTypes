package net.minecraft.world.level.levelgen.feature.rootplacers;

import com.mojang.serialization.Codec;
import net.minecraft.core.Registry;
import net.minecraft.core.registries.BuiltInRegistries;

public class RootPlacerType<P extends RootPlacer> {

    public static final RootPlacerType<MangroveRootPlacer> MANGROVE_ROOT_PLACER = register("mangrove_root_placer", MangroveRootPlacer.CODEC);

    private final Codec<P> codec;

    private static <P extends RootPlacer> RootPlacerType<P> register(String string0, Codec<P> codecP1) {
        return Registry.register(BuiltInRegistries.ROOT_PLACER_TYPE, string0, new RootPlacerType<>(codecP1));
    }

    private RootPlacerType(Codec<P> codecP0) {
        this.codec = codecP0;
    }

    public Codec<P> codec() {
        return this.codec;
    }
}