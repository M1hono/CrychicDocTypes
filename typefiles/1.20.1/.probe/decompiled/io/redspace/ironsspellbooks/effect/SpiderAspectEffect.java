package io.redspace.ironsspellbooks.effect;

import net.minecraft.world.effect.MobEffectCategory;

public class SpiderAspectEffect extends MagicMobEffect {

    public static final float DAMAGE_PER_LEVEL = 0.05F;

    public SpiderAspectEffect(MobEffectCategory pCategory, int pColor) {
        super(pCategory, pColor);
    }
}