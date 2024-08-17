package me.jellysquid.mods.sodium.client.render.immediate.model;

import com.mojang.blaze3d.vertex.PoseStack;
import me.jellysquid.mods.sodium.client.model.quad.ModelQuadView;
import me.jellysquid.mods.sodium.client.util.ModelQuadUtil;
import net.caffeinemc.mods.sodium.api.math.MatrixHelper;
import net.caffeinemc.mods.sodium.api.util.ColorABGR;
import net.caffeinemc.mods.sodium.api.util.ColorU8;
import net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter;
import net.caffeinemc.mods.sodium.api.vertex.format.common.ModelVertex;
import org.joml.Matrix3f;
import org.joml.Matrix4f;
import org.lwjgl.system.MemoryStack;

public class BakedModelEncoder {

    private static int mergeNormalAndMult(int packed, int calc, Matrix3f matNormal) {
        return (packed & 16777215) == 0 ? calc : MatrixHelper.transformNormal(matNormal, packed);
    }

    public static void writeQuadVertices(VertexBufferWriter writer, PoseStack.Pose matrices, ModelQuadView quad, int color, int light, int overlay) {
        Matrix3f matNormal = matrices.normal();
        Matrix4f matPosition = matrices.pose();
        MemoryStack stack = MemoryStack.stackPush();
        try {
            long buffer = stack.nmalloc(144);
            long ptr = buffer;
            int normal = MatrixHelper.transformNormal(matNormal, quad.getLightFace());
            for (int i = 0; i < 4; i++) {
                float x = quad.getX(i);
                float y = quad.getY(i);
                float z = quad.getZ(i);
                float xt = MatrixHelper.transformPositionX(matPosition, x, y, z);
                float yt = MatrixHelper.transformPositionY(matPosition, x, y, z);
                float zt = MatrixHelper.transformPositionZ(matPosition, x, y, z);
                ModelVertex.write(ptr, xt, yt, zt, multARGBInts(quad.getColor(i), color), quad.getTexU(i), quad.getTexV(i), overlay, ModelQuadUtil.mergeBakedLight(quad.getLight(i), light), mergeNormalAndMult(quad.getForgeNormal(i), normal, matNormal));
                ptr += 36L;
            }
            writer.push(stack, buffer, 4, ModelVertex.FORMAT);
        } catch (Throwable var22) {
            if (stack != null) {
                try {
                    stack.close();
                } catch (Throwable var21) {
                    var22.addSuppressed(var21);
                }
            }
            throw var22;
        }
        if (stack != null) {
            stack.close();
        }
    }

    private static int multARGBInts(int colorA, int colorB) {
        return ModelQuadUtil.mixARGBColors(colorA, colorB);
    }

    public static void writeQuadVertices(VertexBufferWriter writer, PoseStack.Pose matrices, ModelQuadView quad, float r, float g, float b, float[] brightnessTable, boolean colorize, int[] light, int overlay) {
        Matrix3f matNormal = matrices.normal();
        Matrix4f matPosition = matrices.pose();
        MemoryStack stack = MemoryStack.stackPush();
        try {
            long buffer = stack.nmalloc(144);
            long ptr = buffer;
            int normal = MatrixHelper.transformNormal(matNormal, quad.getLightFace());
            for (int i = 0; i < 4; i++) {
                float x = quad.getX(i);
                float y = quad.getY(i);
                float z = quad.getZ(i);
                float xt = MatrixHelper.transformPositionX(matPosition, x, y, z);
                float yt = MatrixHelper.transformPositionY(matPosition, x, y, z);
                float zt = MatrixHelper.transformPositionZ(matPosition, x, y, z);
                float brightness = brightnessTable[i];
                float fR;
                float fG;
                float fB;
                if (colorize) {
                    int color = quad.getColor(i);
                    float oR = ColorU8.byteToNormalizedFloat(ColorABGR.unpackRed(color));
                    float oG = ColorU8.byteToNormalizedFloat(ColorABGR.unpackGreen(color));
                    float oB = ColorU8.byteToNormalizedFloat(ColorABGR.unpackBlue(color));
                    fR = oR * brightness * r;
                    fG = oG * brightness * g;
                    fB = oB * brightness * b;
                } else {
                    fR = brightness * r;
                    fG = brightness * g;
                    fB = brightness * b;
                }
                int color = ColorABGR.pack(fR, fG, fB, 1.0F);
                ModelVertex.write(ptr, xt, yt, zt, color, quad.getTexU(i), quad.getTexV(i), overlay, ModelQuadUtil.mergeBakedLight(quad.getLight(i), light[i]), mergeNormalAndMult(quad.getForgeNormal(i), normal, matNormal));
                ptr += 36L;
            }
            writer.push(stack, buffer, 4, ModelVertex.FORMAT);
        } catch (Throwable var34) {
            if (stack != null) {
                try {
                    stack.close();
                } catch (Throwable var33) {
                    var34.addSuppressed(var33);
                }
            }
            throw var34;
        }
        if (stack != null) {
            stack.close();
        }
    }
}