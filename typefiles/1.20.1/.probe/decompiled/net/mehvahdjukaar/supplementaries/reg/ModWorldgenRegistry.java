package net.mehvahdjukaar.supplementaries.reg;

import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.platform.RegHelper;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.common.worldgen.BasaltAshFeature;
import net.mehvahdjukaar.supplementaries.common.worldgen.MineshaftElevatorPiece;
import net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature;
import net.mehvahdjukaar.supplementaries.common.worldgen.WaySignStructure;
import net.minecraft.core.registries.Registries;
import net.minecraft.world.level.levelgen.feature.Feature;
import net.minecraft.world.level.levelgen.structure.StructureType;
import net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType;

public class ModWorldgenRegistry {

    public static final Supplier<StructurePieceType> MINESHAFT_ELEVATOR = RegHelper.register(Supplementaries.res("mineshaft_elevator"), () -> MineshaftElevatorPiece::new, Registries.STRUCTURE_PIECE);

    public static final Supplier<StructureType<WaySignStructure>> WAY_SIGN = RegHelper.registerStructure(Supplementaries.res("way_sign"), WaySignStructure.Type::new);

    public static final Supplier<Feature<RoadSignFeature.Config>> ROAD_SIGN_FEATURE = RegHelper.registerFeature(Supplementaries.res("road_sign_feature"), () -> new RoadSignFeature(RoadSignFeature.Config.CODEC));

    public static final Supplier<Feature<BasaltAshFeature.Config>> BASALT_ASH_FEATURE = RegHelper.registerFeature(Supplementaries.res("surface_scan_random_patch"), () -> new BasaltAshFeature(BasaltAshFeature.Config.CODEC));

    public static void init() {
    }
}