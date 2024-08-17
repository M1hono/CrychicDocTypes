package com.yungnickyoung.minecraft.yungsapi.world.structure;

import com.mojang.serialization.Codec;
import com.mojang.serialization.DataResult;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import com.yungnickyoung.minecraft.yungsapi.api.YungJigsawManager;
import com.yungnickyoung.minecraft.yungsapi.module.StructureTypeModule;
import com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.EnhancedTerrainAdaptation;
import com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.EnhancedTerrainAdaptationType;
import java.util.Optional;
import java.util.function.Function;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Holder;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.RandomSource;
import net.minecraft.util.valueproviders.ConstantInt;
import net.minecraft.util.valueproviders.IntProvider;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.levelgen.Heightmap;
import net.minecraft.world.level.levelgen.WorldGenerationContext;
import net.minecraft.world.level.levelgen.heightproviders.HeightProvider;
import net.minecraft.world.level.levelgen.structure.BoundingBox;
import net.minecraft.world.level.levelgen.structure.Structure;
import net.minecraft.world.level.levelgen.structure.StructureType;
import net.minecraft.world.level.levelgen.structure.TerrainAdjustment;
import net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool;
import org.jetbrains.annotations.NotNull;

public class YungJigsawStructure extends Structure {

    public static final int MAX_TOTAL_STRUCTURE_RADIUS = 128;

    public static final Codec<YungJigsawStructure> CODEC = RecordCodecBuilder.mapCodec(builder -> builder.group(m_226567_(builder), StructureTemplatePool.CODEC.fieldOf("start_pool").forGetter(structure -> structure.startPool), ResourceLocation.CODEC.optionalFieldOf("start_jigsaw_name").forGetter(structure -> structure.startJigsawName), Codec.intRange(0, 128).fieldOf("size").forGetter(structure -> structure.maxDepth), HeightProvider.CODEC.fieldOf("start_height").forGetter(structure -> structure.startHeight), IntProvider.codec(0, 15).optionalFieldOf("x_offset_in_chunk", ConstantInt.of(0)).forGetter(structure -> structure.xOffsetInChunk), IntProvider.codec(0, 15).optionalFieldOf("z_offset_in_chunk", ConstantInt.of(0)).forGetter(structure -> structure.zOffsetInChunk), Codec.BOOL.optionalFieldOf("use_expansion_hack", false).forGetter(structure -> structure.useExpansionHack), Heightmap.Types.CODEC.optionalFieldOf("project_start_to_heightmap").forGetter(structure -> structure.projectStartToHeightmap), Codec.intRange(1, 128).fieldOf("max_distance_from_center").forGetter(structure -> structure.maxDistanceFromCenter), Codec.INT.optionalFieldOf("max_y").forGetter(structure -> structure.maxY), Codec.INT.optionalFieldOf("min_y").forGetter(structure -> structure.minY), EnhancedTerrainAdaptationType.ADAPTATION_CODEC.optionalFieldOf("enhanced_terrain_adaptation", EnhancedTerrainAdaptation.NONE).forGetter(structure -> structure.enhancedTerrainAdaptation)).apply(builder, YungJigsawStructure::new)).flatXmap(verifyRange(), verifyRange()).codec();

    public final Holder<StructureTemplatePool> startPool;

    private final Optional<ResourceLocation> startJigsawName;

    public final int maxDepth;

    public final HeightProvider startHeight;

    public final IntProvider xOffsetInChunk;

    public final IntProvider zOffsetInChunk;

    public final boolean useExpansionHack;

    public final Optional<Heightmap.Types> projectStartToHeightmap;

    public final int maxDistanceFromCenter;

    public final Optional<Integer> maxY;

    public final Optional<Integer> minY;

    public final EnhancedTerrainAdaptation enhancedTerrainAdaptation;

    public YungJigsawStructure(Structure.StructureSettings structureSettings, Holder<StructureTemplatePool> startPool, Optional<ResourceLocation> startJigsawName, int maxDepth, HeightProvider startHeight, IntProvider xOffsetInChunk, IntProvider zOffsetInChunk, boolean useExpansionHack, Optional<Heightmap.Types> projectStartToHeightmap, int maxBlockDistanceFromCenter, Optional<Integer> maxY, Optional<Integer> minY, EnhancedTerrainAdaptation enhancedTerrainAdaptation) {
        super(structureSettings);
        this.startPool = startPool;
        this.startJigsawName = startJigsawName;
        this.maxDepth = maxDepth;
        this.startHeight = startHeight;
        this.xOffsetInChunk = xOffsetInChunk;
        this.zOffsetInChunk = zOffsetInChunk;
        this.useExpansionHack = useExpansionHack;
        this.projectStartToHeightmap = projectStartToHeightmap;
        this.maxDistanceFromCenter = maxBlockDistanceFromCenter;
        this.maxY = maxY;
        this.minY = minY;
        this.enhancedTerrainAdaptation = enhancedTerrainAdaptation;
    }

    private static Function<YungJigsawStructure, DataResult<YungJigsawStructure>> verifyRange() {
        return structure -> {
            if (structure.m_226620_() != TerrainAdjustment.NONE && structure.enhancedTerrainAdaptation != EnhancedTerrainAdaptation.NONE) {
                return DataResult.error(() -> "YUNG Structure cannot use both vanilla terrain_adaptation and enhanced_terrain_adaptation");
            } else {
                int vanillaEdgeBuffer = switch(structure.m_226620_()) {
                    case NONE ->
                        0;
                    case BURY, BEARD_THIN, BEARD_BOX ->
                        12;
                };
                if (structure.maxDistanceFromCenter + vanillaEdgeBuffer > 128) {
                    return DataResult.error(() -> "YUNG Structure size including terrain adaptation must not exceed 128");
                } else {
                    int enhancedEdgeBuffer = structure.enhancedTerrainAdaptation.getKernelRadius();
                    return structure.maxDistanceFromCenter + enhancedEdgeBuffer > 128 ? DataResult.error(() -> "YUNG Structure size including enhanced terrain adaptation must not exceed 128") : DataResult.success(structure);
                }
            }
        };
    }

    @NotNull
    @Override
    public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext context) {
        ChunkPos chunkPos = context.chunkPos();
        RandomSource randomSource = context.random();
        int xOffset = this.xOffsetInChunk.sample(randomSource);
        int zOffset = this.zOffsetInChunk.sample(randomSource);
        int startY = this.startHeight.sample(context.random(), new WorldGenerationContext(context.chunkGenerator(), context.heightAccessor()));
        BlockPos startPos = new BlockPos(chunkPos.getBlockX(xOffset), startY, chunkPos.getBlockZ(zOffset));
        return YungJigsawManager.assembleJigsawStructure(context, this.startPool, this.startJigsawName, this.maxDepth, startPos, this.useExpansionHack, this.projectStartToHeightmap, this.maxDistanceFromCenter, this.maxY, this.minY);
    }

    @NotNull
    @Override
    public BoundingBox adjustBoundingBox(@NotNull BoundingBox boundingBox) {
        return super.adjustBoundingBox(boundingBox).inflatedBy(this.enhancedTerrainAdaptation.getKernelRadius());
    }

    @NotNull
    @Override
    public StructureType<?> type() {
        return StructureTypeModule.YUNG_JIGSAW;
    }
}