package team.lodestar.lodestone.systems.particle.screen.base;

import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.client.particle.SpriteSet;
import net.minecraft.client.renderer.texture.TextureAtlasSprite;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

@OnlyIn(Dist.CLIENT)
public abstract class TextureSheetScreenParticle extends QuadScreenParticle {

    protected TextureAtlasSprite sprite;

    protected TextureSheetScreenParticle(ClientLevel pLevel, double pX, double pY) {
        super(pLevel, pX, pY);
    }

    protected TextureSheetScreenParticle(ClientLevel pLevel, double pX, double pY, double pXSpeed, double pYSpeed) {
        super(pLevel, pX, pY, pXSpeed, pYSpeed);
    }

    protected void setSprite(TextureAtlasSprite pSprite) {
        this.sprite = pSprite;
    }

    @Override
    protected float getU0() {
        return this.sprite.getU0();
    }

    @Override
    protected float getU1() {
        return this.sprite.getU1();
    }

    @Override
    protected float getV0() {
        return this.sprite.getV0();
    }

    @Override
    protected float getV1() {
        return this.sprite.getV1();
    }

    public void pickSprite(SpriteSet pSprite) {
        this.setSprite(pSprite.get(this.random));
    }

    public void setSpriteFromAge(SpriteSet pSprite) {
        if (!this.removed) {
            this.setSprite(pSprite.get(this.age, this.lifetime));
        }
    }
}