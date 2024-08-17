package se.mickelus.tetra.effect;

import java.util.Optional;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.util.RandomSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import se.mickelus.mutil.util.ParticleHelper;
import se.mickelus.tetra.effect.potion.PriedPotionEffect;
import se.mickelus.tetra.effect.potion.StunPotionEffect;
import se.mickelus.tetra.effect.revenge.RevengeTracker;
import se.mickelus.tetra.items.modular.ItemModularHandheld;

@ParametersAreNonnullByDefault
public class PryEffect {

    public static final double flatCooldown = 2.0;

    public static final double cooldownSpeedMultiplier = 3.0;

    public static final double damageMultiplier = 0.5;

    private static int getCooldown(ItemModularHandheld item, ItemStack itemStack) {
        float speedBonus = (float) (100 - item.getEffectLevel(itemStack, ItemEffect.abilitySpeed)) / 100.0F;
        return (int) ((2.0 + item.getCooldownBase(itemStack) * 3.0) * (double) speedBonus * 20.0);
    }

    public static void perform(Player attacker, InteractionHand hand, ItemModularHandheld item, ItemStack itemStack, int effectLevel, LivingEntity target) {
        if (!attacker.m_9236_().isClientSide) {
            int comboPoints = ComboPoints.get(attacker);
            boolean isSatiated = !attacker.getFoodData().needsFood();
            if (hand == InteractionHand.OFF_HAND && item.getEffectLevel(itemStack, ItemEffect.abilityDefensive) > 0) {
                performDefensive(attacker, item, itemStack, target);
            } else {
                performRegular(attacker, item, itemStack, 0.5, effectLevel, target, isSatiated, comboPoints);
            }
            target.m_20193_().playSound(attacker, target.m_20183_(), SoundEvents.PLAYER_ATTACK_WEAK, SoundSource.PLAYERS, 0.8F, 0.8F);
            boolean overextended = item.getEffectLevel(itemStack, ItemEffect.abilityOverextend) > 0;
            attacker.causeFoodExhaustion(overextended ? 6.0F : 0.5F);
            attacker.getCooldowns().addCooldown(item, getCooldown(item, itemStack));
            int echoLevel = item.getEffectLevel(itemStack, ItemEffect.abilityEcho);
            if (echoLevel > 0) {
                performEcho(attacker, item, itemStack, 0.5, effectLevel, target, isSatiated, comboPoints);
            }
        }
        if (ComboPoints.canSpend(item, itemStack)) {
            ComboPoints.reset(attacker);
        }
        int revengeLevel = item.getEffectLevel(itemStack, ItemEffect.abilityRevenge);
        if (revengeLevel > 0) {
            RevengeTracker.removeEnemy(attacker, target);
        }
        attacker.m_21011_(hand, false);
        item.tickProgression(attacker, itemStack, 2);
        item.applyDamage(2, itemStack, attacker);
    }

    public static AbilityUseResult performRegular(Player attacker, ItemModularHandheld item, ItemStack itemStack, double damageMultiplier, int amplifier, LivingEntity target, boolean isSatiated, int comboPoints) {
        int revengeLevel = item.getEffectLevel(itemStack, ItemEffect.abilityRevenge);
        int comboLevel = item.getEffectLevel(itemStack, ItemEffect.abilityCombo);
        if (comboLevel > 0) {
            damageMultiplier += (double) (comboLevel * comboPoints) / 100.0;
        }
        if (revengeLevel > 0 && RevengeTracker.canRevenge(attacker, target)) {
            damageMultiplier += (double) revengeLevel / 100.0;
        }
        int exhilarationLevel = item.getEffectLevel(itemStack, ItemEffect.abilityExhilaration);
        if (exhilarationLevel > 0) {
            int amp = (Integer) Optional.ofNullable(target.getEffect(PriedPotionEffect.instance)).map(MobEffectInstance::m_19564_).orElse(-1) + 1;
            if (amp > 0) {
                damageMultiplier += (double) (exhilarationLevel * amp) / 100.0;
            }
        }
        AbilityUseResult result = item.hitEntity(itemStack, attacker, target, damageMultiplier, 0.2F, 0.2F);
        if (result != AbilityUseResult.fail) {
            int currentAmplifier = (Integer) Optional.ofNullable(target.getEffect(PriedPotionEffect.instance)).map(MobEffectInstance::m_19564_).orElse(-1);
            double comboEfficiency = (double) item.getEffectEfficiency(itemStack, ItemEffect.abilityCombo);
            if (comboEfficiency > 0.0 && (double) attacker.m_20193_().getRandom().nextFloat() < comboEfficiency * (double) comboPoints / 100.0) {
                amplifier++;
                if (!target.m_20193_().isClientSide) {
                    RandomSource rand = target.m_20193_().getRandom();
                    ((ServerLevel) target.m_20193_()).sendParticles(ParticleTypes.CRIT, target.m_20185_(), target.m_20186_() + (double) (target.m_20206_() / 2.0F), target.m_20189_(), 10, rand.nextGaussian() * 0.3, rand.nextGaussian() * (double) target.m_20206_() * 0.8, rand.nextGaussian() * 0.3, 0.1F);
                }
            }
            if (revengeLevel > 0 && RevengeTracker.canRevenge(attacker, target)) {
                amplifier++;
            }
            double overextendLevel = (double) item.getEffectLevel(itemStack, ItemEffect.abilityOverextend);
            if (overextendLevel > 0.0 && isSatiated) {
                amplifier++;
            }
            target.addEffect(new MobEffectInstance(PriedPotionEffect.instance, (int) (item.getEffectEfficiency(itemStack, ItemEffect.pry) * 20.0F), currentAmplifier + amplifier, false, false));
            if (!target.m_20193_().isClientSide) {
                ParticleHelper.spawnArmorParticles(target);
            }
            int momentumLevel = item.getEffectLevel(itemStack, ItemEffect.abilityMomentum);
            if (momentumLevel > 0 && currentAmplifier > -1) {
                int duration = momentumLevel * (currentAmplifier + 1);
                target.addEffect(new MobEffectInstance(StunPotionEffect.instance, duration, 0, false, false));
            }
        }
        return result;
    }

    public static AbilityUseResult performDefensive(Player attacker, ItemModularHandheld item, ItemStack itemStack, LivingEntity target) {
        AbilityUseResult result = item.hitEntity(itemStack, attacker, target, 0.5, 0.2F, 0.2F);
        if (result != AbilityUseResult.fail) {
            target.addEffect(new MobEffectInstance(MobEffects.WEAKNESS, (int) (item.getEffectEfficiency(itemStack, ItemEffect.abilityDefensive) * 20.0F), item.getEffectLevel(itemStack, ItemEffect.abilityDefensive) - 1, false, true));
            if (!target.m_20193_().isClientSide) {
                if (target.hasItemInSlot(EquipmentSlot.MAINHAND)) {
                    ParticleHelper.spawnArmorParticles(target, EquipmentSlot.MAINHAND);
                } else if (target.hasItemInSlot(EquipmentSlot.OFFHAND)) {
                    ParticleHelper.spawnArmorParticles(target, EquipmentSlot.OFFHAND);
                }
            }
        }
        return result;
    }

    public static void performEcho(Player attacker, ItemModularHandheld item, ItemStack itemStack, double damageMultiplier, int amplifier, LivingEntity target, boolean isSatiated, int comboPoints) {
        EchoHelper.echo(attacker, 60, () -> {
            performRegular(attacker, item, itemStack, damageMultiplier, amplifier, target, isSatiated, comboPoints);
            int revengeLevel = item.getEffectLevel(itemStack, ItemEffect.abilityRevenge);
            if (revengeLevel > 0) {
                RevengeTracker.removeEnemy(attacker, target);
            }
        });
    }
}