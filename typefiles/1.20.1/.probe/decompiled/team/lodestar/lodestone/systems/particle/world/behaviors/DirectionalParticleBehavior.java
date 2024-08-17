package team.lodestar.lodestone.systems.particle.world.behaviors;

import com.mojang.blaze3d.vertex.VertexConsumer;
import net.minecraft.client.Camera;
import net.minecraft.util.Mth;
import net.minecraft.world.phys.Vec3;
import org.joml.Quaternionf;
import org.joml.Vector3f;
import team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle;
import team.lodestar.lodestone.systems.particle.world.behaviors.components.DirectionalBehaviorComponent;
import team.lodestar.lodestone.systems.particle.world.behaviors.components.LodestoneBehaviorComponent;

public class DirectionalParticleBehavior implements LodestoneParticleBehavior {

    protected DirectionalParticleBehavior() {
    }

    public DirectionalBehaviorComponent getComponent(LodestoneBehaviorComponent component) {
        return component instanceof DirectionalBehaviorComponent directional ? directional : LodestoneBehaviorComponent.DIRECTIONAL;
    }

    @Override
    public void render(LodestoneWorldParticle particle, VertexConsumer consumer, Camera camera, float partialTicks) {
        DirectionalBehaviorComponent component = this.getComponent(particle.behaviorComponent);
        Vec3 direction = component.getDirection(particle);
        float yRot = (float) (Mth.atan2(direction.x, direction.z) * 180.0F / (float) Math.PI);
        float xRot = (float) (Mth.atan2(direction.y, direction.horizontalDistance()) * 180.0F / (float) Math.PI);
        float yaw = (float) Math.toRadians((double) yRot);
        float pitch = (float) Math.toRadians((double) (-xRot));
        Quaternionf quaternion = new Quaternionf(0.0F, 0.0F, 0.0F, 1.0F);
        quaternion.mul(this.oldSchool(0.0F, yaw, 0.0F));
        quaternion.mul(this.oldSchool(pitch, 0.0F, 0.0F));
        if (particle.getRoll() != 0.0F) {
            quaternion.rotateZ(Mth.lerp(partialTicks, particle.getORoll(), particle.getRoll()));
        }
        Vec3 vec3 = camera.getPosition();
        float x = (float) (Mth.lerp((double) partialTicks, particle.getXOld(), particle.getX()) - vec3.x());
        float y = (float) (Mth.lerp((double) partialTicks, particle.getYOld(), particle.getY()) - vec3.y());
        float z = (float) (Mth.lerp((double) partialTicks, particle.getZOld(), particle.getZ()) - vec3.z());
        Vector3f[] avector3f = new Vector3f[] { new Vector3f(-1.0F, -1.0F, 0.0F), new Vector3f(-1.0F, 1.0F, 0.0F), new Vector3f(1.0F, 1.0F, 0.0F), new Vector3f(1.0F, -1.0F, 0.0F) };
        float f4 = particle.getQuadSize(partialTicks);
        for (int i = 0; i < 4; i++) {
            Vector3f vector3f = avector3f[i];
            vector3f.rotate(quaternion);
            vector3f.mul(f4);
            vector3f.add(x, y, z);
        }
        float f7 = particle.getU0();
        float f8 = particle.getU1();
        float f5 = particle.getV0();
        float f6 = particle.getV1();
        int j = particle.getLightColor(partialTicks);
        float red = particle.getRed();
        float green = particle.getGreen();
        float blue = particle.getBlue();
        float alpha = particle.getAlpha();
        consumer.vertex((double) avector3f[0].x(), (double) avector3f[0].y(), (double) avector3f[0].z()).uv(f8, f6).color(red, green, blue, alpha).uv2(j).endVertex();
        consumer.vertex((double) avector3f[1].x(), (double) avector3f[1].y(), (double) avector3f[1].z()).uv(f8, f5).color(red, green, blue, alpha).uv2(j).endVertex();
        consumer.vertex((double) avector3f[2].x(), (double) avector3f[2].y(), (double) avector3f[2].z()).uv(f7, f5).color(red, green, blue, alpha).uv2(j).endVertex();
        consumer.vertex((double) avector3f[3].x(), (double) avector3f[3].y(), (double) avector3f[3].z()).uv(f7, f6).color(red, green, blue, alpha).uv2(j).endVertex();
    }

    public Quaternionf oldSchool(float pX, float pY, float pZ) {
        float f = Mth.sin(0.5F * pX);
        float f1 = Mth.cos(0.5F * pX);
        float f2 = Mth.sin(0.5F * pY);
        float f3 = Mth.cos(0.5F * pY);
        float f4 = Mth.sin(0.5F * pZ);
        float f5 = Mth.cos(0.5F * pZ);
        float x = f * f3 * f5 + f1 * f2 * f4;
        float y = f1 * f2 * f5 - f * f3 * f4;
        float z = f * f2 * f5 + f1 * f3 * f4;
        float w = f1 * f3 * f5 - f * f2 * f4;
        return new Quaternionf(x, y, z, w);
    }
}