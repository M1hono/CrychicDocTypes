package net.minecraft.data.worldgen;

import com.google.common.collect.ImmutableList;
import com.mojang.datafixers.util.Pair;
import net.minecraft.core.Holder;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.worldgen.placement.CavePlacements;
import net.minecraft.world.level.levelgen.placement.PlacedFeature;
import net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement;
import net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList;

public class AncientCityStructurePools {

    public static void bootstrap(BootstapContext<StructureTemplatePool> bootstapContextStructureTemplatePool0) {
        HolderGetter<PlacedFeature> $$1 = bootstapContextStructureTemplatePool0.lookup(Registries.PLACED_FEATURE);
        Holder<PlacedFeature> $$2 = $$1.getOrThrow(CavePlacements.SCULK_PATCH_ANCIENT_CITY);
        HolderGetter<StructureProcessorList> $$3 = bootstapContextStructureTemplatePool0.lookup(Registries.PROCESSOR_LIST);
        Holder<StructureProcessorList> $$4 = $$3.getOrThrow(ProcessorLists.ANCIENT_CITY_GENERIC_DEGRADATION);
        Holder<StructureProcessorList> $$5 = $$3.getOrThrow(ProcessorLists.ANCIENT_CITY_WALLS_DEGRADATION);
        HolderGetter<StructureTemplatePool> $$6 = bootstapContextStructureTemplatePool0.lookup(Registries.TEMPLATE_POOL);
        Holder<StructureTemplatePool> $$7 = $$6.getOrThrow(Pools.EMPTY);
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/structures", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.empty(), 7), Pair.of(StructurePoolElement.single("ancient_city/structures/barracks", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/chamber_1", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/chamber_2", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/chamber_3", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/sauna_1", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/small_statue", $$4), 4), Pair.of(StructurePoolElement.single("ancient_city/structures/large_ruin_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/tall_ruin_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/tall_ruin_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/tall_ruin_3", $$4), 2), Pair.of(StructurePoolElement.single("ancient_city/structures/tall_ruin_4", $$4), 2), new Pair[] { Pair.of(StructurePoolElement.list(ImmutableList.of(StructurePoolElement.single("ancient_city/structures/camp_1", $$4), StructurePoolElement.single("ancient_city/structures/camp_2", $$4), StructurePoolElement.single("ancient_city/structures/camp_3", $$4))), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/medium_ruin_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/medium_ruin_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/small_ruin_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/small_ruin_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/large_pillar_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/structures/medium_pillar_1", $$4), 1), Pair.of(StructurePoolElement.list(ImmutableList.of(StructurePoolElement.single("ancient_city/structures/ice_box_1"))), 1) }), StructureTemplatePool.Projection.RIGID));
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/sculk", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.feature($$2), 6), Pair.of(StructurePoolElement.empty(), 1)), StructureTemplatePool.Projection.RIGID));
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/walls", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.single("ancient_city/walls/intact_corner_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_intersection_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_lshape_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_2", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_2", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_3", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_4", $$5), 4), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_passage_1", $$5), 3), Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_corner_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_corner_wall_2", $$5), 1), new Pair[] { Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_horizontal_wall_stairs_1", $$5), 2), Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_horizontal_wall_stairs_2", $$5), 2), Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_horizontal_wall_stairs_3", $$5), 3), Pair.of(StructurePoolElement.single("ancient_city/walls/ruined_horizontal_wall_stairs_4", $$5), 3) }), StructureTemplatePool.Projection.RIGID));
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/walls/no_corners", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_2", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_1", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_2", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_3", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_4", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_stairs_5", $$5), 1), Pair.of(StructurePoolElement.single("ancient_city/walls/intact_horizontal_wall_bridge", $$5), 1)), StructureTemplatePool.Projection.RIGID));
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/city_center/walls", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/bottom_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/bottom_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/bottom_left_corner", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/bottom_right_corner_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/bottom_right_corner_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/left", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/right", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/top", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/top_right_corner", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city_center/walls/top_left_corner", $$4), 1)), StructureTemplatePool.Projection.RIGID));
        Pools.register(bootstapContextStructureTemplatePool0, "ancient_city/city/entrance", new StructureTemplatePool($$7, ImmutableList.of(Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_connector", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_path_1", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_path_2", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_path_3", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_path_4", $$4), 1), Pair.of(StructurePoolElement.single("ancient_city/city/entrance/entrance_path_5", $$4), 1)), StructureTemplatePool.Projection.RIGID));
    }
}