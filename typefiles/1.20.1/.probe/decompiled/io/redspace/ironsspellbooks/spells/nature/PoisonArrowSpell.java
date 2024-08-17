package io.redspace.ironsspellbooks.spells.nature;

import io.redspace.ironsspellbooks.api.config.DefaultConfig;
import io.redspace.ironsspellbooks.api.magic.MagicData;
import io.redspace.ironsspellbooks.api.registry.SchoolRegistry;
import io.redspace.ironsspellbooks.api.spells.AbstractSpell;
import io.redspace.ironsspellbooks.api.spells.AutoSpellConfig;
import io.redspace.ironsspellbooks.api.spells.CastSource;
import io.redspace.ironsspellbooks.api.spells.CastType;
import io.redspace.ironsspellbooks.api.spells.SpellAnimations;
import io.redspace.ironsspellbooks.api.spells.SpellRarity;
import io.redspace.ironsspellbooks.api.util.AnimationHolder;
import io.redspace.ironsspellbooks.api.util.Utils;
import io.redspace.ironsspellbooks.entity.spells.poison_arrow.PoisonArrow;
import io.redspace.ironsspellbooks.registries.SoundRegistry;
import java.util.List;
import java.util.Optional;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.level.Level;

@AutoSpellConfig
public class PoisonArrowSpell extends AbstractSpell {

    private final ResourceLocation spellId = new ResourceLocation("irons_spellbooks", "poison_arrow");

    private final DefaultConfig defaultConfig = new DefaultConfig().setMinRarity(SpellRarity.COMMON).setSchoolResource(SchoolRegistry.NATURE_RESOURCE).setMaxLevel(10).setCooldownSeconds(15.0).build();

    @Override
    public List<MutableComponent> getUniqueInfo(int spellLevel, LivingEntity caster) {
        return List.of(Component.translatable("ui.irons_spellbooks.damage", Utils.stringTruncation((double) this.getArrowDamage(spellLevel, caster), 1)), Component.translatable("ui.irons_spellbooks.aoe_damage", Utils.stringTruncation((double) this.getAOEDamage(spellLevel, caster), 1)));
    }

    public PoisonArrowSpell() {
        this.manaCostPerLevel = 5;
        this.baseSpellPower = 5;
        this.spellPowerPerLevel = 1;
        this.castTime = 20;
        this.baseManaCost = 40;
    }

    @Override
    public CastType getCastType() {
        return CastType.LONG;
    }

    @Override
    public DefaultConfig getDefaultConfig() {
        return this.defaultConfig;
    }

    @Override
    public ResourceLocation getSpellResource() {
        return this.spellId;
    }

    @Override
    public Optional<SoundEvent> getCastStartSound() {
        return Optional.of(SoundRegistry.POISON_ARROW_CHARGE.get());
    }

    @Override
    public Optional<SoundEvent> getCastFinishSound() {
        return Optional.of(SoundRegistry.POISON_ARROW_CAST.get());
    }

    @Override
    public void onCast(Level level, int spellLevel, LivingEntity entity, CastSource castSource, MagicData playerMagicData) {
        PoisonArrow magicArrow = new PoisonArrow(level, entity);
        magicArrow.m_146884_(entity.m_20182_().add(0.0, (double) entity.m_20192_() - magicArrow.m_20191_().getYsize() * 0.5, 0.0).add(entity.m_20156_()));
        magicArrow.shoot(entity.m_20154_());
        magicArrow.setDamage(this.getArrowDamage(spellLevel, entity));
        magicArrow.setAoeDamage(this.getAOEDamage(spellLevel, entity));
        level.m_7967_(magicArrow);
        super.onCast(level, spellLevel, entity, castSource, playerMagicData);
    }

    public float getArrowDamage(int spellLevel, LivingEntity caster) {
        return this.getSpellPower(spellLevel, caster);
    }

    public float getAOEDamage(int spellLevel, LivingEntity caster) {
        return this.getSpellPower(spellLevel, caster) * 0.185F;
    }

    @Override
    public AnimationHolder getCastStartAnimation() {
        return SpellAnimations.BOW_CHARGE_ANIMATION;
    }

    @Override
    public AnimationHolder getCastFinishAnimation() {
        return AnimationHolder.none();
    }
}