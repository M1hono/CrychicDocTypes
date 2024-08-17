package me.jellysquid.mods.sodium.mixin.features.render.immediate.buffer_builder.sorting;

import com.mojang.blaze3d.vertex.BufferBuilder;
import com.mojang.blaze3d.vertex.VertexFormat;
import com.mojang.blaze3d.vertex.VertexSorting;
import java.nio.ByteBuffer;
import org.jetbrains.annotations.Nullable;
import org.joml.Vector3f;
import org.lwjgl.system.MemoryUtil;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Overwrite;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;

@Mixin({ BufferBuilder.class })
public abstract class BufferBuilderMixin {

    @Shadow
    private ByteBuffer buffer;

    @Shadow
    private int nextElementByte;

    @Shadow
    @Nullable
    private Vector3f[] sortingPoints;

    @Shadow
    private int vertices;

    @Shadow
    private VertexFormat format;

    @Shadow
    private int renderedBufferPointer;

    @Shadow
    @Nullable
    private VertexSorting sorting;

    @Unique
    private static final int[] VERTEX_ORDER = new int[] { 0, 1, 2, 2, 3, 0 };

    @Overwrite
    private Vector3f[] makeQuadSortingPoints() {
        int vertexStride = this.format.getVertexSize();
        int primitiveCount = this.vertices / 4;
        Vector3f[] centers = new Vector3f[primitiveCount];
        for (int index = 0; index < primitiveCount; index++) {
            long v1 = MemoryUtil.memAddress(this.buffer, this.renderedBufferPointer + (index * 4 + 0) * vertexStride);
            long v2 = MemoryUtil.memAddress(this.buffer, this.renderedBufferPointer + (index * 4 + 2) * vertexStride);
            float x1 = MemoryUtil.memGetFloat(v1 + 0L);
            float y1 = MemoryUtil.memGetFloat(v1 + 4L);
            float z1 = MemoryUtil.memGetFloat(v1 + 8L);
            float x2 = MemoryUtil.memGetFloat(v2 + 0L);
            float y2 = MemoryUtil.memGetFloat(v2 + 4L);
            float z2 = MemoryUtil.memGetFloat(v2 + 8L);
            centers[index] = new Vector3f((x1 + x2) * 0.5F, (y1 + y2) * 0.5F, (z1 + z2) * 0.5F);
        }
        return centers;
    }

    @Overwrite
    private void putSortedQuadIndices(VertexFormat.IndexType indexType) {
        if (this.sorting != null) {
            int[] indices = this.sorting.sort(this.sortingPoints);
            this.writePrimitiveIndices(indexType, indices);
        }
    }

    @Unique
    private void writePrimitiveIndices(VertexFormat.IndexType indexType, int[] indices) {
        long ptr = MemoryUtil.memAddress(this.buffer, this.nextElementByte);
        switch(indexType.bytes) {
            case 2:
                for (int index : indices) {
                    int start = index * 4;
                    for (int offset : VERTEX_ORDER) {
                        MemoryUtil.memPutShort(ptr, (short) (start + offset));
                        ptr += 2L;
                    }
                }
                break;
            case 4:
                for (int index : indices) {
                    int start = index * 4;
                    for (int offset : VERTEX_ORDER) {
                        MemoryUtil.memPutInt(ptr, start + offset);
                        ptr += 4L;
                    }
                }
        }
    }
}