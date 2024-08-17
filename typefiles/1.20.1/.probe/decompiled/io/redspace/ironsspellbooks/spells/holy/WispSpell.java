package io.redspace.ironsspellbooks.spells.holy;

import io.redspace.ironsspellbooks.api.config.DefaultConfig;
import io.redspace.ironsspellbooks.api.magic.MagicData;
import io.redspace.ironsspellbooks.api.registry.SchoolRegistry;
import io.redspace.ironsspellbooks.api.spells.AbstractSpell;
import io.redspace.ironsspellbooks.api.spells.AutoSpellConfig;
import io.redspace.ironsspellbooks.api.spells.CastSource;
import io.redspace.ironsspellbooks.api.spells.CastType;
import io.redspace.ironsspellbooks.api.spells.SpellRarity;
import io.redspace.ironsspellbooks.api.util.Utils;
import io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData;
import io.redspace.ironsspellbooks.entity.spells.wisp.WispEntity;
import io.redspace.ironsspellbooks.registries.SoundRegistry;
import java.util.List;
import java.util.Optional;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.EntityHitResult;
import org.jetbrains.annotations.Nullable;

@AutoSpellConfig
public class WispSpell extends AbstractSpell {

    private final ResourceLocation spellId = new ResourceLocation("irons_spellbooks", "wisp");

    private final DefaultConfig defaultConfig = new DefaultConfig().setMinRarity(SpellRarity.COMMON).setSchoolResource(SchoolRegistry.HOLY_RESOURCE).setMaxLevel(10).setCooldownSeconds(3.0).build();

    @Override
    public List<MutableComponent> getUniqueInfo(int spellLevel, LivingEntity caster) {
        return List.of(Component.translatable("ui.irons_spellbooks.damage", Utils.stringTruncation((double) this.getSpellPower(spellLevel, caster), 1)));
    }

    public WispSpell() {
        this.manaCostPerLevel = 2;
        this.baseSpellPower = 5;
        this.spellPowerPerLevel = 1;
        this.castTime = 20;
        this.baseManaCost = 15;
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
        return Optional.of(SoundEvents.ILLUSIONER_PREPARE_MIRROR);
    }

    @Override
    public Optional<SoundEvent> getCastFinishSound() {
        return Optional.of(SoundRegistry.EVOCATION_CAST.get());
    }

    public static SoundEvent getImpactSound() {
        return SoundRegistry.DARK_MAGIC_BUFF_03_CUSTOM_1.get();
    }

    @Override
    public boolean checkPreCastConditions(Level level, int spellLevel, LivingEntity entity, MagicData playerMagicData) {
        return Utils.preCastTargetHelper(level, entity, playerMagicData, this, 48, 0.35F);
    }

    @Override
    public void onCast(Level world, int spellLevel, LivingEntity entity, CastSource castSource, MagicData playerMagicData) {
        if (playerMagicData.getAdditionalCastData() instanceof TargetEntityCastData targetingData) {
            LivingEntity targetEntity = targetingData.getTarget((ServerLevel) world);
            WispEntity wispEntity = new WispEntity(world, entity, this.getSpellPower(spellLevel, entity));
            wispEntity.setTarget(targetEntity);
            wispEntity.m_146884_(Utils.getPositionFromEntityLookDirection(entity, 2.0F).subtract(0.0, 0.2, 0.0));
            world.m_7967_(wispEntity);
        }
        super.onCast(world, spellLevel, entity, castSource, playerMagicData);
    }

    @Nullable
    private LivingEntity findTarget(LivingEntity caster) {
        if (Utils.raycastForEntity(caster.m_9236_(), caster, 64.0F, true, 0.35F) instanceof EntityHitResult entityHit) {
            Entity var5 = entityHit.getEntity();
            if (var5 instanceof LivingEntity) {
                return (LivingEntity) var5;
            }
        }
        return null;
    }

    private float getDistance(int spellLevel, LivingEntity sourceEntity) {
        return this.getSpellPower(spellLevel, sourceEntity) * 5.0F;
    }

    private float getDuration(int spellLevel, LivingEntity sourceEntity) {
        return this.getSpellPower(spellLevel, sourceEntity) * 10.0F;
    }
}