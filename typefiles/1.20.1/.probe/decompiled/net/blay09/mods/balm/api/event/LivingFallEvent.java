package net.blay09.mods.balm.api.event;

import net.minecraft.world.entity.LivingEntity;

public class LivingFallEvent extends BalmEvent {

    private final LivingEntity entity;

    private Float fallDamageOverride;

    public LivingFallEvent(LivingEntity entity) {
        this.entity = entity;
    }

    public LivingEntity getEntity() {
        return this.entity;
    }

    public Float getFallDamageOverride() {
        return this.fallDamageOverride;
    }

    public void setFallDamageOverride(Float fallDamageOverride) {
        this.fallDamageOverride = fallDamageOverride;
    }
}