package com.github.alexmodguy.alexscaves.server.level.structure.piece;

import com.github.alexmodguy.alexscaves.AlexsCaves;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Holder;
import net.minecraft.core.registries.Registries;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceKey;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.WorldGenLevel;
import net.minecraft.world.level.biome.Biome;
import net.minecraft.world.level.biome.Biomes;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.chunk.ChunkAccess;
import net.minecraft.world.level.chunk.LevelChunkSection;
import net.minecraft.world.level.chunk.PalettedContainer;
import net.minecraft.world.level.levelgen.structure.BoundingBox;
import net.minecraft.world.level.levelgen.structure.StructurePiece;
import net.minecraft.world.level.levelgen.structure.StructurePieceAccessor;
import net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext;
import net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType;

public abstract class AbstractCaveGenerationStructurePiece extends StructurePiece {

    protected final BlockPos chunkCorner;

    protected final BlockPos holeCenter;

    protected final int height;

    protected final int radius;

    private static boolean replaceBiomesError;

    public AbstractCaveGenerationStructurePiece(StructurePieceType pieceType, BlockPos chunkCorner, BlockPos holeCenter, int height, int radius) {
        this(pieceType, chunkCorner, holeCenter, height, radius, chunkCorner.m_123342_() - 2, chunkCorner.m_123342_() + 16);
    }

    public AbstractCaveGenerationStructurePiece(StructurePieceType pieceType, BlockPos chunkCorner, BlockPos holeCenter, int height, int radius, int minY, int maxY) {
        super(pieceType, 0, createBoundingBox(chunkCorner, minY, maxY));
        this.chunkCorner = chunkCorner;
        this.holeCenter = holeCenter;
        this.height = height;
        this.radius = radius;
    }

    public AbstractCaveGenerationStructurePiece(StructurePieceType pieceType, CompoundTag tag) {
        super(pieceType, tag);
        this.chunkCorner = new BlockPos(tag.getInt("TPX"), tag.getInt("TPY"), tag.getInt("TPZ"));
        this.holeCenter = new BlockPos(tag.getInt("HCX"), tag.getInt("HCY"), tag.getInt("HCZ"));
        this.height = tag.getInt("Height");
        this.radius = tag.getInt("Radius");
    }

    private static BoundingBox createBoundingBox(BlockPos origin, int minY, int maxY) {
        ChunkPos chunkPos = new ChunkPos(origin);
        return new BoundingBox(chunkPos.getMinBlockX(), minY, chunkPos.getMinBlockZ(), chunkPos.getMaxBlockX(), maxY, chunkPos.getMaxBlockZ());
    }

    @Override
    protected void addAdditionalSaveData(StructurePieceSerializationContext context, CompoundTag tag) {
        tag.putInt("TPX", this.chunkCorner.m_123341_());
        tag.putInt("TPY", this.chunkCorner.m_123342_());
        tag.putInt("TPZ", this.chunkCorner.m_123343_());
        tag.putInt("HCX", this.holeCenter.m_123341_());
        tag.putInt("HCY", this.holeCenter.m_123342_());
        tag.putInt("HCZ", this.holeCenter.m_123343_());
        tag.putInt("Height", this.height);
        tag.putInt("Radius", this.radius);
    }

    public void replaceBiomes(WorldGenLevel level, ResourceKey<Biome> with, int belowLevel) {
        if (!replaceBiomesError) {
            try {
                Holder<Biome> biomeHolder = level.m_9598_().registryOrThrow(Registries.BIOME).getHolderOrThrow(with);
                ChunkAccess chunkAccess = level.m_46865_(this.chunkCorner);
                int stopY = level.m_5736_() - belowLevel;
                BlockPos.MutableBlockPos pos = new BlockPos.MutableBlockPos();
                pos.set(this.chunkCorner.m_123341_(), stopY, this.chunkCorner.m_123343_());
                if (chunkAccess != null && !biomeHolder.is(Biomes.PLAINS)) {
                    while (pos.m_123342_() > level.m_141937_()) {
                        pos.move(0, -8, 0);
                        int sectionIndex = chunkAccess.m_151564_(pos.m_123342_());
                        if (sectionIndex >= 0 && sectionIndex < chunkAccess.getSections().length) {
                            LevelChunkSection section = chunkAccess.getSection(sectionIndex);
                            PalettedContainer<Holder<Biome>> container = section.getBiomes().recreate();
                            if (container != null) {
                                for (int biomeX = 0; biomeX < 4; biomeX++) {
                                    for (int biomeY = 0; biomeY < 4; biomeY++) {
                                        for (int biomeZ = 0; biomeZ < 4; biomeZ++) {
                                            container.getAndSetUnchecked(biomeX, biomeY, biomeZ, biomeHolder);
                                        }
                                    }
                                }
                                section.biomes = container;
                            }
                        }
                    }
                }
            } catch (Exception var14) {
                replaceBiomesError = true;
                AlexsCaves.LOGGER.warn("Could not replace biomes for Alex's Caves. Error will show only once - likely a world-gen mod incompatibility");
                var14.printStackTrace();
            }
        }
    }

    public void checkedSetBlock(WorldGenLevel level, BlockPos position, BlockState state) {
        if (this.m_73547_().isInside(position)) {
            level.m_7731_(position, state, 128);
        }
    }

    public BlockState checkedGetBlock(WorldGenLevel level, BlockPos position) {
        return this.m_73547_().isInside(position) ? level.m_8055_(position) : Blocks.VOID_AIR.defaultBlockState();
    }

    public BlockState checkedGetBlockIgnoreY(WorldGenLevel level, BlockPos position) {
        return this.m_73547_().isInside(position.m_123341_(), this.m_73547_().minY(), position.m_123343_()) ? level.m_8055_(position) : Blocks.VOID_AIR.defaultBlockState();
    }

    @Override
    public void addChildren(StructurePiece piece, StructurePieceAccessor accessor, RandomSource random) {
    }
}