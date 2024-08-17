package team.lodestar.lodestone.systems.particle.screen.base;

import com.mojang.blaze3d.vertex.BufferBuilder;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.util.Mth;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.joml.AxisAngle4f;
import org.joml.Quaternionf;
import org.joml.Vector3f;
import team.lodestar.lodestone.helpers.VecHelper;

@OnlyIn(Dist.CLIENT)
public abstract class QuadScreenParticle extends ScreenParticle {

    protected float quadSize = 0.1F * (this.random.nextFloat() * 0.5F + 0.5F) * 2.0F;

    protected QuadScreenParticle(ClientLevel pLevel, double pX, double pY) {
        super(pLevel, pX, pY);
    }

    protected QuadScreenParticle(ClientLevel pLevel, double pX, double pY, double pXSpeed, double pYSpeed) {
        super(pLevel, pX, pY, pXSpeed, pYSpeed);
    }

    @Override
    public void render(BufferBuilder bufferBuilder) {
        float partialTicks = Minecraft.getInstance().timer.partialTick;
        float size = this.getQuadSize(partialTicks) * 10.0F;
        float u0 = this.getU0();
        float u1 = this.getU1();
        float v0 = this.getV0();
        float v1 = this.getV1();
        float roll = Mth.lerp(partialTicks, this.oRoll, this.roll);
        Vector3f[] vectors = new Vector3f[] { new Vector3f(-1.0F, -1.0F, 0.0F), new Vector3f(-1.0F, 1.0F, 0.0F), new Vector3f(1.0F, 1.0F, 0.0F), new Vector3f(1.0F, -1.0F, 0.0F) };
        Quaternionf rotation = new Quaternionf(new AxisAngle4f(roll, VecHelper.Vector3fHelper.ZP));
        for (int i = 0; i < 4; i++) {
            Vector3f vector3f = vectors[i];
            vector3f.rotate(rotation);
            vector3f.mul(size);
            vector3f.add((float) this.x, (float) this.y, 0.0F);
        }
        float quadZ = this.getQuadZPosition();
        bufferBuilder.m_5483_((double) vectors[0].x(), (double) vectors[0].y(), (double) quadZ).uv(u1, v1).color(this.rCol, this.gCol, this.bCol, this.alpha).endVertex();
        bufferBuilder.m_5483_((double) vectors[1].x(), (double) vectors[1].y(), (double) quadZ).uv(u1, v0).color(this.rCol, this.gCol, this.bCol, this.alpha).endVertex();
        bufferBuilder.m_5483_((double) vectors[2].x(), (double) vectors[2].y(), (double) quadZ).uv(u0, v0).color(this.rCol, this.gCol, this.bCol, this.alpha).endVertex();
        bufferBuilder.m_5483_((double) vectors[3].x(), (double) vectors[3].y(), (double) quadZ).uv(u0, v1).color(this.rCol, this.gCol, this.bCol, this.alpha).endVertex();
    }

    public float getQuadSize(float partialTicks) {
        return this.quadSize;
    }

    public float getQuadZPosition() {
        return 390.0F;
    }

    protected abstract float getU0();

    protected abstract float getU1();

    protected abstract float getV0();

    protected abstract float getV1();
}