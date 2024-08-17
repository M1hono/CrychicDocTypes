package io.redspace.ironsspellbooks.damage;

import io.redspace.ironsspellbooks.api.spells.AbstractSpell;
import java.util.Optional;
import net.minecraft.core.Holder;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.damagesource.DamageType;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class SpellDamageSource extends DamageSource {

    AbstractSpell spell;

    float lifesteal;

    int freezeTicks;

    int fireTime;

    protected SpellDamageSource(@NotNull Entity directEntity, @NotNull Entity causingEntity, @Nullable Vec3 damageSourcePosition, AbstractSpell spell) {
        super(getHolderFromResource(directEntity, spell.getSchoolType().getDamageType()), directEntity, causingEntity, damageSourcePosition);
        this.spell = spell;
    }

    @NotNull
    @Override
    public Component getLocalizedDeathMessage(@NotNull LivingEntity pLivingEntity) {
        String s = "death.attack." + this.spell.getDeathMessageId();
        Component component = this.f_268569_ == null ? this.f_268595_.getDisplayName() : this.f_268569_.getDisplayName();
        return Component.translatable(s, pLivingEntity.m_5446_(), component);
    }

    private static Holder<DamageType> getHolderFromResource(Entity entity, ResourceKey<DamageType> damageTypeResourceKey) {
        Optional<Holder.Reference<DamageType>> option = entity.level().registryAccess().registryOrThrow(Registries.DAMAGE_TYPE).getHolder(damageTypeResourceKey);
        return option.isPresent() ? (Holder) option.get() : entity.level().damageSources().genericKill().typeHolder();
    }

    public static SpellDamageSource source(@NotNull Entity entity, @NotNull AbstractSpell spell) {
        return source(entity, entity, spell);
    }

    public static SpellDamageSource source(@NotNull Entity directEntity, @NotNull Entity causingEntity, @NotNull AbstractSpell spell) {
        return new SpellDamageSource(directEntity, causingEntity, null, spell);
    }

    public SpellDamageSource setLifestealPercent(float lifesteal) {
        this.lifesteal = lifesteal;
        return this;
    }

    public SpellDamageSource setFireTime(int fireTime) {
        this.fireTime = fireTime;
        return this;
    }

    public SpellDamageSource setFreezeTicks(int freezeTicks) {
        this.freezeTicks = freezeTicks;
        return this;
    }

    public DamageSource get() {
        return this;
    }

    public AbstractSpell spell() {
        return this.spell;
    }

    public float getLifestealPercent() {
        return this.lifesteal;
    }

    public int getFireTime() {
        return this.fireTime;
    }

    public int getFreezeTicks() {
        return this.freezeTicks;
    }

    public boolean hasPostHitEffects() {
        return this.getLifestealPercent() > 0.0F || this.getFireTime() > 0 || this.getFreezeTicks() > 0;
    }
}