package team.lodestar.lodestone.systems.rendering.trail;

import com.mojang.blaze3d.vertex.VertexConsumer;
import net.minecraft.world.phys.Vec2;
import org.joml.Vector4f;
import team.lodestar.lodestone.systems.rendering.VFXBuilders;

public class TrailRenderPoint {

    public final float xp;

    public final float xn;

    public final float yp;

    public final float yn;

    public final float z;

    public TrailRenderPoint(float xp, float xn, float yp, float yn, float z) {
        this.xp = xp;
        this.xn = xn;
        this.yp = yp;
        this.yn = yn;
        this.z = z;
    }

    public TrailRenderPoint(Vector4f pos, Vec2 perp) {
        this(pos.x() + perp.x, pos.x() - perp.x, pos.y() + perp.y, pos.y() - perp.y, pos.z());
    }

    public void renderStart(VertexConsumer vertexConsumer, VFXBuilders.WorldVFXBuilder builder, float u0, float v0, float u1, float v1) {
        builder.getSupplier().placeVertex(vertexConsumer, null, builder, this.xp, this.yp, this.z, u0, v0);
        builder.getSupplier().placeVertex(vertexConsumer, null, builder, this.xn, this.yn, this.z, u1, v0);
    }

    public void renderEnd(VertexConsumer vertexConsumer, VFXBuilders.WorldVFXBuilder builder, float u0, float v0, float u1, float v1) {
        builder.getSupplier().placeVertex(vertexConsumer, null, builder, this.xn, this.yn, this.z, u1, v1);
        builder.getSupplier().placeVertex(vertexConsumer, null, builder, this.xp, this.yp, this.z, u0, v1);
    }

    public void renderMid(VertexConsumer vertexConsumer, VFXBuilders.WorldVFXBuilder builder, float u0, float v0, float u1, float v1) {
        this.renderEnd(vertexConsumer, builder, u0, v0, u1, v1);
        this.renderStart(vertexConsumer, builder, u0, v0, u1, v1);
    }
}