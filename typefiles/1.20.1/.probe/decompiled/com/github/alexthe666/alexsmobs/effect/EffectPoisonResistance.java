package com.github.alexthe666.alexsmobs.effect;

import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffectCategory;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.LivingEntity;

public class EffectPoisonResistance extends MobEffect {

    public EffectPoisonResistance() {
        super(MobEffectCategory.BENEFICIAL, 5373871);
    }

    @Override
    public void applyEffectTick(LivingEntity LivingEntityIn, int amplifier) {
        if (LivingEntityIn.hasEffect(MobEffects.POISON)) {
            LivingEntityIn.removeEffect(MobEffects.POISON);
        }
    }

    @Override
    public boolean isDurationEffectTick(int duration, int amplifier) {
        return duration > 0;
    }

    @Override
    public String getDescriptionId() {
        return "alexsmobs.potion.poison_resistance";
    }
}