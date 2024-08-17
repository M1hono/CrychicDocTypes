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
import io.redspace.ironsspellbooks.effect.GluttonyEffect;
import io.redspace.ironsspellbooks.registries.MobEffectRegistry;
import java.util.List;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.level.Level;

@AutoSpellConfig
public class GluttonySpell extends AbstractSpell {

    private final ResourceLocation spellId = new ResourceLocation("irons_spellbooks", "gluttony");

    private final DefaultConfig defaultConfig = new DefaultConfig().setMinRarity(SpellRarity.COMMON).setSchoolResource(SchoolRegistry.NATURE_RESOURCE).setMaxLevel(5).setCooldownSeconds(90.0).build();

    @Override
    public List<MutableComponent> getUniqueInfo(int spellLevel, LivingEntity caster) {
        return List.of(Component.translatable("ui.irons_spellbooks.mana_recovery", Utils.stringTruncation((double) this.getManaRatio(spellLevel, caster), 1)), Component.translatable("ui.irons_spellbooks.effect_length", Utils.timeFromTicks(this.getSpellPower(spellLevel, caster) * 20.0F, 1)));
    }

    public GluttonySpell() {
        this.baseManaCost = 35;
        this.manaCostPerLevel = 0;
        this.baseSpellPower = 30;
        this.spellPowerPerLevel = 0;
        this.castTime = 0;
    }

    @Override
    public CastType getCastType() {
        return CastType.INSTANT;
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
    public void onCast(Level level, int spellLevel, LivingEntity entity, CastSource castSource, MagicData playerMagicData) {
        entity.addEffect(new MobEffectInstance(MobEffectRegistry.GLUTTONY.get(), (int) (this.getSpellPower(spellLevel, entity) * 20.0F), spellLevel - 1, false, false, true));
        super.onCast(level, spellLevel, entity, castSource, playerMagicData);
    }

    private float getManaRatio(int spellLevel, LivingEntity entity) {
        return GluttonyEffect.ratioForAmplifier(spellLevel - 1);
    }

    @Override
    public AnimationHolder getCastStartAnimation() {
        return SpellAnimations.SELF_CAST_ANIMATION;
    }
}