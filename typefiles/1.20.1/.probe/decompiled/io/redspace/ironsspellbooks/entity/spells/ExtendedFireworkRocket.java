package io.redspace.ironsspellbooks.entity.spells;

import io.redspace.ironsspellbooks.api.magic.MagicData;
import io.redspace.ironsspellbooks.api.registry.SpellRegistry;
import io.redspace.ironsspellbooks.api.util.Utils;
import io.redspace.ironsspellbooks.damage.DamageSources;
import io.redspace.ironsspellbooks.entity.mobs.AntiMagicSusceptible;
import net.minecraft.network.syncher.EntityDataAccessor;
import net.minecraft.network.syncher.EntityDataSerializers;
import net.minecraft.network.syncher.SynchedEntityData;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.projectile.FireworkRocketEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.Vec3;

public class ExtendedFireworkRocket extends FireworkRocketEntity implements AntiMagicSusceptible {

    protected static final EntityDataAccessor<ItemStack> DATA_ID_FIREWORKS_ITEM = SynchedEntityData.defineId(ExtendedFireworkRocket.class, EntityDataSerializers.ITEM_STACK);

    private final float damage;

    public ExtendedFireworkRocket(Level pLevel, ItemStack pStack, Entity pShooter, double pX, double pY, double pZ, boolean pShotAtAngle, float damage) {
        super(pLevel, pStack, pShooter, pX, pY, pZ, pShotAtAngle);
        this.damage = damage;
    }

    public float getDamage() {
        return this.damage;
    }

    @Override
    public void tick() {
    }

    @Override
    public void shoot(double pX, double pY, double pZ, float pVelocity, float pInaccuracy) {
        this.explode();
    }

    private void explode() {
        this.f_19853_.broadcastEntityEvent(this, (byte) 17);
        this.m_146852_(GameEvent.EXPLODE, this.m_19749_());
        this.dealExplosionDamage();
        this.m_146870_();
    }

    private void dealExplosionDamage() {
        Vec3 hitPos = this.m_20182_();
        double explosionRadius = 2.0;
        for (LivingEntity livingentity : this.f_19853_.m_45976_(LivingEntity.class, new AABB(hitPos.subtract(explosionRadius, explosionRadius, explosionRadius), hitPos.add(explosionRadius, explosionRadius, explosionRadius)))) {
            if (livingentity.isAlive() && livingentity.isPickable() && Utils.hasLineOfSight(this.f_19853_, hitPos, livingentity.m_20191_().getCenter(), true)) {
                DamageSources.applyDamage(livingentity, this.getDamage(), SpellRegistry.FIRECRACKER_SPELL.get().getDamageSource(this, this.m_19749_()));
            }
        }
    }

    @Override
    public void onAntiMagic(MagicData playerMagicData) {
        this.m_146870_();
    }
}