package io.redspace.ironsspellbooks.entity.spells.magic_arrow;

import io.redspace.ironsspellbooks.api.registry.SpellRegistry;
import io.redspace.ironsspellbooks.capabilities.magic.MagicManager;
import io.redspace.ironsspellbooks.damage.DamageSources;
import io.redspace.ironsspellbooks.entity.spells.AbstractMagicProjectile;
import io.redspace.ironsspellbooks.registries.EntityRegistry;
import io.redspace.ironsspellbooks.registries.SoundRegistry;
import io.redspace.ironsspellbooks.util.ParticleHelper;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import net.minecraft.core.BlockPos;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.entity.projectile.ProjectileUtil;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.EntityHitResult;
import net.minecraft.world.phys.HitResult;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.event.ForgeEventFactory;

public class MagicArrowProjectile extends AbstractMagicProjectile {

    private final List<Entity> victims = new ArrayList();

    private int hitsPerTick;

    BlockPos lastHitBlock;

    @Override
    public void trailParticles() {
        Vec3 vec3 = this.m_20182_().subtract(this.m_20184_());
        this.f_19853_.addParticle(ParticleHelper.UNSTABLE_ENDER, vec3.x, vec3.y, vec3.z, 0.0, 0.0, 0.0);
    }

    @Override
    public void impactParticles(double x, double y, double z) {
        MagicManager.spawnParticles(this.f_19853_, ParticleHelper.UNSTABLE_ENDER, x, y, z, 15, 0.1, 0.1, 0.1, 0.5, false);
    }

    @Override
    public float getSpeed() {
        return 2.7F;
    }

    @Override
    public Optional<SoundEvent> getImpactSound() {
        return Optional.empty();
    }

    public MagicArrowProjectile(EntityType<? extends Projectile> pEntityType, Level pLevel) {
        super(pEntityType, pLevel);
        this.m_20242_(true);
    }

    public MagicArrowProjectile(Level levelIn, LivingEntity shooter) {
        this(EntityRegistry.MAGIC_ARROW_PROJECTILE.get(), levelIn);
        this.m_5602_(shooter);
    }

    @Override
    protected void onHitBlock(BlockHitResult pResult) {
    }

    @Override
    public void tick() {
        super.tick();
        this.hitsPerTick = 0;
    }

    @Override
    protected void onHitEntity(EntityHitResult entityHitResult) {
        Entity entity = entityHitResult.getEntity();
        if (!this.victims.contains(entity)) {
            DamageSources.applyDamage(entity, this.damage, SpellRegistry.MAGIC_ARROW_SPELL.get().getDamageSource(this, this.m_19749_()));
            this.victims.add(entity);
        }
        if (this.hitsPerTick++ < 5) {
            HitResult hitresult = ProjectileUtil.getHitResultOnMoveVector(this, x$0 -> this.m_5603_(x$0));
            if (hitresult.getType() != HitResult.Type.MISS && !ForgeEventFactory.onProjectileImpact(this, hitresult)) {
                this.onHit(hitresult);
            }
        }
    }

    @Override
    protected void onHit(HitResult result) {
        if (!this.f_19853_.isClientSide) {
            BlockPos blockPos = BlockPos.containing(result.getLocation());
            if (result.getType() == HitResult.Type.BLOCK && !blockPos.equals(this.lastHitBlock)) {
                this.lastHitBlock = blockPos;
            } else if (result.getType() == HitResult.Type.ENTITY) {
                this.f_19853_.playSound(null, BlockPos.containing(this.m_20182_()), SoundRegistry.FORCE_IMPACT.get(), SoundSource.NEUTRAL, 2.0F, 0.65F);
            }
        }
        super.onHit(result);
    }

    @Override
    protected boolean shouldPierceShields() {
        return true;
    }
}