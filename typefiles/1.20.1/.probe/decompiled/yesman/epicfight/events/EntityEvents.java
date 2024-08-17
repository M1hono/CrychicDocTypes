package yesman.epicfight.events;

import com.google.common.collect.Multimap;
import net.minecraft.commands.arguments.EntityAnchorArgument;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.stats.Stats;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.damagesource.CombatRules;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityDimensions;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.attributes.Attribute;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.entity.boss.enderdragon.EnderDragon;
import net.minecraft.world.entity.monster.EnderMan;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.enchantment.EnchantmentHelper;
import net.minecraft.world.phys.EntityHitResult;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.entity.PartEntity;
import net.minecraftforge.event.ItemAttributeModifierEvent;
import net.minecraftforge.event.entity.EntityEvent;
import net.minecraftforge.event.entity.EntityJoinLevelEvent;
import net.minecraftforge.event.entity.EntityMountEvent;
import net.minecraftforge.event.entity.EntityTeleportEvent;
import net.minecraftforge.event.entity.ProjectileImpactEvent;
import net.minecraftforge.event.entity.living.LivingAttackEvent;
import net.minecraftforge.event.entity.living.LivingDamageEvent;
import net.minecraftforge.event.entity.living.LivingDeathEvent;
import net.minecraftforge.event.entity.living.LivingDropsEvent;
import net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent;
import net.minecraftforge.event.entity.living.LivingEvent;
import net.minecraftforge.event.entity.living.LivingFallEvent;
import net.minecraftforge.event.entity.living.LivingHurtEvent;
import net.minecraftforge.event.entity.living.LivingKnockBackEvent;
import net.minecraftforge.event.entity.living.MobEffectEvent;
import net.minecraftforge.event.entity.living.ShieldBlockEvent;
import net.minecraftforge.event.entity.player.PlayerFlyableFallEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import yesman.epicfight.api.animation.Animator;
import yesman.epicfight.api.animation.types.StaticAnimation;
import yesman.epicfight.api.utils.AttackResult;
import yesman.epicfight.gameasset.Animations;
import yesman.epicfight.gameasset.EpicFightSounds;
import yesman.epicfight.network.EpicFightNetworkManager;
import yesman.epicfight.network.client.CPPlayAnimation;
import yesman.epicfight.network.server.SPPotion;
import yesman.epicfight.particle.EpicFightParticles;
import yesman.epicfight.world.capabilities.EpicFightCapabilities;
import yesman.epicfight.world.capabilities.entitypatch.EntityPatch;
import yesman.epicfight.world.capabilities.entitypatch.HumanoidMobPatch;
import yesman.epicfight.world.capabilities.entitypatch.HurtableEntityPatch;
import yesman.epicfight.world.capabilities.entitypatch.LivingEntityPatch;
import yesman.epicfight.world.capabilities.entitypatch.mob.EndermanPatch;
import yesman.epicfight.world.capabilities.entitypatch.player.PlayerPatch;
import yesman.epicfight.world.capabilities.entitypatch.player.ServerPlayerPatch;
import yesman.epicfight.world.capabilities.item.CapabilityItem;
import yesman.epicfight.world.capabilities.projectile.ProjectilePatch;
import yesman.epicfight.world.damagesource.EpicFightDamageSource;
import yesman.epicfight.world.damagesource.EpicFightDamageSources;
import yesman.epicfight.world.damagesource.EpicFightDamageType;
import yesman.epicfight.world.damagesource.ExtraDamageInstance;
import yesman.epicfight.world.damagesource.StunType;
import yesman.epicfight.world.effect.EpicFightMobEffects;
import yesman.epicfight.world.entity.eventlistener.DealtDamageEvent;
import yesman.epicfight.world.entity.eventlistener.HurtEvent;
import yesman.epicfight.world.entity.eventlistener.PlayerEventListener;
import yesman.epicfight.world.entity.eventlistener.ProjectileHitEvent;

@EventBusSubscriber(modid = "epicfight")
public class EntityEvents {

    @SubscribeEvent
    public static void spawnEvent(EntityJoinLevelEvent event) {
        EntityPatch<Entity> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), EntityPatch.class);
        if (entitypatch != null && !entitypatch.isInitialized()) {
            entitypatch.onJoinWorld(event.getEntity(), event);
        }
    }

    @SubscribeEvent
    public static void updateEvent(LivingEvent.LivingTickEvent event) {
        EntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), EntityPatch.class);
        if (entitypatch != null && entitypatch.getOriginal() != null) {
            entitypatch.tick(event);
        }
    }

    @SubscribeEvent
    public static void deathEvent(LivingDeathEvent event) {
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        if (entitypatch != null) {
            entitypatch.onDeath(event);
        }
    }

    @SubscribeEvent
    public static void knockBackEvent(LivingKnockBackEvent event) {
        HurtableEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), HurtableEntityPatch.class);
        if (entitypatch != null && entitypatch.shouldCancelKnockback()) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent
    public static void hurtEvent(LivingHurtEvent event) {
        EpicFightDamageSource epicFightDamageSource = null;
        Entity trueSource = event.getSource().getEntity();
        if (trueSource != null) {
            LivingEntityPatch<?> attackerEntityPatch = EpicFightCapabilities.getEntityPatch(trueSource, LivingEntityPatch.class);
            float baseDamage = event.getAmount();
            if (event.getSource() instanceof EpicFightDamageSource instance) {
                epicFightDamageSource = instance;
            } else if (event.getSource().isIndirect() && event.getSource().getDirectEntity() != null) {
                ProjectilePatch<?> projectileCap = EpicFightCapabilities.getEntityPatch(event.getSource().getDirectEntity(), ProjectilePatch.class);
                if (projectileCap != null) {
                    epicFightDamageSource = projectileCap.getEpicFightDamageSource(event.getSource());
                }
            } else if (attackerEntityPatch != null) {
                epicFightDamageSource = attackerEntityPatch.getEpicFightDamageSource();
                baseDamage = attackerEntityPatch.getModifiedBaseDamage(baseDamage);
            }
            if (epicFightDamageSource != null && !epicFightDamageSource.is(EpicFightDamageType.PARTIAL_DAMAGE)) {
                LivingEntity hitEntity = event.getEntity();
                if (attackerEntityPatch instanceof ServerPlayerPatch playerpatch) {
                    DealtDamageEvent dealDamagePre = new DealtDamageEvent(playerpatch, hitEntity, epicFightDamageSource, baseDamage);
                    playerpatch.getEventListener().triggerEvents(PlayerEventListener.EventType.DEALT_DAMAGE_EVENT_PRE, dealDamagePre);
                }
                float totalDamage = epicFightDamageSource.getDamageModifier().getTotalValue(baseDamage);
                if (trueSource instanceof LivingEntity livingEntity && epicFightDamageSource.getExtraDamages() != null) {
                    for (ExtraDamageInstance extraDamage : epicFightDamageSource.getExtraDamages()) {
                        totalDamage += extraDamage.get(livingEntity, epicFightDamageSource.getHurtItem(), hitEntity, baseDamage);
                    }
                }
                HurtableEntityPatch<?> hitHurtableEntityPatch = EpicFightCapabilities.getEntityPatch(hitEntity, HurtableEntityPatch.class);
                LivingEntityPatch<?> hitLivingEntityPatch = EpicFightCapabilities.getEntityPatch(hitEntity, LivingEntityPatch.class);
                ServerPlayerPatch hitPlayerPatch = EpicFightCapabilities.getEntityPatch(hitEntity, ServerPlayerPatch.class);
                if (hitPlayerPatch != null) {
                    HurtEvent.Post hurtEvent = new HurtEvent.Post(hitPlayerPatch, epicFightDamageSource, totalDamage);
                    hitPlayerPatch.getEventListener().triggerEvents(PlayerEventListener.EventType.HURT_EVENT_POST, hurtEvent);
                    totalDamage = hurtEvent.getAmount();
                }
                float trueDamage = totalDamage * epicFightDamageSource.getArmorNegation() * 0.01F;
                if (epicFightDamageSource.is(EpicFightDamageType.EXECUTION)) {
                    trueDamage = Float.MAX_VALUE;
                    if (hitLivingEntityPatch != null) {
                        int executionResistance = hitLivingEntityPatch.getExecutionResistance();
                        if (executionResistance > 0) {
                            hitLivingEntityPatch.setExecutionResistance(executionResistance - 1);
                            trueDamage = 0.0F;
                        }
                    }
                }
                float calculatedDamage = trueDamage;
                if (hitEntity.hasEffect(MobEffects.DAMAGE_RESISTANCE)) {
                    int i = (hitEntity.getEffect(MobEffects.DAMAGE_RESISTANCE).getAmplifier() + 1) * 5;
                    int j = 25 - i;
                    float f = trueDamage * (float) j;
                    calculatedDamage = Math.max(f / 25.0F, 0.0F);
                    float f2 = trueDamage - calculatedDamage;
                    if (f2 > 0.0F && f2 < 3.4028235E37F) {
                        if (hitEntity instanceof ServerPlayer serverPlayer) {
                            serverPlayer.m_36222_(Stats.DAMAGE_RESISTED, Math.round(f2 * 10.0F));
                        } else if (event.getSource().getEntity() instanceof ServerPlayer serverPlayer) {
                            serverPlayer.m_36222_(Stats.DAMAGE_DEALT_RESISTED, Math.round(f2 * 10.0F));
                        }
                    }
                }
                if (calculatedDamage > 0.0F) {
                    int k = EnchantmentHelper.getDamageProtection(hitEntity.getArmorSlots(), event.getSource());
                    if (k > 0) {
                        calculatedDamage = CombatRules.getDamageAfterMagicAbsorb(calculatedDamage, (float) k);
                    }
                }
                float absorpAmount = hitEntity.getAbsorptionAmount() - calculatedDamage;
                hitEntity.setAbsorptionAmount(Math.max(absorpAmount, 0.0F));
                float realHealthDamage = Math.max(-absorpAmount, 0.0F);
                if (realHealthDamage > 0.0F && realHealthDamage < 3.4028235E37F && event.getSource().getEntity() instanceof ServerPlayer serverPlayer) {
                    serverPlayer.m_36222_(Stats.DAMAGE_DEALT_ABSORBED, Math.round(realHealthDamage * 10.0F));
                }
                if (absorpAmount < 0.0F) {
                    hitEntity.setHealth(hitEntity.getHealth() + absorpAmount);
                    if (attackerEntityPatch != null) {
                        if (!hitEntity.isAlive()) {
                            attackerEntityPatch.setLastAttackEntity(hitEntity);
                        }
                        attackerEntityPatch.gatherDamageDealt(epicFightDamageSource, calculatedDamage);
                    }
                }
                event.setAmount(totalDamage - trueDamage);
                if (event.getAmount() + trueDamage > 0.0F && hitHurtableEntityPatch != null) {
                    StunType stunType = epicFightDamageSource.getStunType();
                    float stunTime = 0.0F;
                    float knockBackAmount = 0.0F;
                    float weight = 40.0F / hitHurtableEntityPatch.getWeight();
                    float stunShield = hitHurtableEntityPatch.getStunShield();
                    if (stunShield > epicFightDamageSource.getImpact() && (stunType == StunType.SHORT || stunType == StunType.LONG)) {
                        stunType = StunType.NONE;
                    }
                    hitHurtableEntityPatch.setStunShield(stunShield - epicFightDamageSource.getImpact());
                    switch(stunType) {
                        case SHORT:
                            if (!hitEntity.hasEffect(EpicFightMobEffects.STUN_IMMUNITY.get()) && hitHurtableEntityPatch.getStunShield() == 0.0F) {
                                float totalStunTime = (0.25F + epicFightDamageSource.getImpact() * 0.1F) * weight;
                                totalStunTime *= 1.0F - hitHurtableEntityPatch.getStunReduction();
                                if (totalStunTime >= 0.075F) {
                                    stunTime = totalStunTime - 0.1F;
                                    boolean flag = totalStunTime >= 0.83F;
                                    stunTime = flag ? 0.83F : stunTime;
                                    stunType = flag ? StunType.LONG : StunType.SHORT;
                                    knockBackAmount = Math.min(flag ? epicFightDamageSource.getImpact() * 0.05F : totalStunTime, 2.0F);
                                } else {
                                    stunType = StunType.NONE;
                                }
                                stunTime = (float) ((double) stunTime * (1.0 - hitEntity.getAttributeValue(Attributes.KNOCKBACK_RESISTANCE)));
                            }
                            break;
                        case LONG:
                            stunType = hitEntity.hasEffect(EpicFightMobEffects.STUN_IMMUNITY.get()) ? StunType.NONE : StunType.LONG;
                            knockBackAmount = Math.min(epicFightDamageSource.getImpact() * 0.05F * weight, 5.0F);
                            stunTime = 0.83F;
                            break;
                        case HOLD:
                            stunType = StunType.SHORT;
                            stunTime = epicFightDamageSource.getImpact() * 0.25F;
                            break;
                        case KNOCKDOWN:
                            stunType = hitEntity.hasEffect(EpicFightMobEffects.STUN_IMMUNITY.get()) ? StunType.NONE : StunType.KNOCKDOWN;
                            knockBackAmount = Math.min(epicFightDamageSource.getImpact() * 0.05F, 5.0F);
                            stunTime = 2.0F;
                            break;
                        case NEUTRALIZE:
                            stunType = StunType.NEUTRALIZE;
                            hitHurtableEntityPatch.playSound(EpicFightSounds.NEUTRALIZE_MOBS.get(), 3.0F, 0.0F, 0.1F);
                            EpicFightParticles.AIR_BURST.get().spawnParticleWithArgument((ServerLevel) hitEntity.m_9236_(), hitEntity, event.getSource().getDirectEntity());
                            knockBackAmount = 0.0F;
                            stunTime = 2.0F;
                    }
                    Vec3 sourcePosition = epicFightDamageSource.getInitialPosition();
                    hitHurtableEntityPatch.setStunReductionOnHit(stunType);
                    boolean stunApplied = hitHurtableEntityPatch.applyStun(stunType, stunTime);
                    if (sourcePosition != null) {
                        if (!(hitEntity instanceof Player) && stunApplied) {
                            hitEntity.lookAt(EntityAnchorArgument.Anchor.FEET, sourcePosition);
                        }
                        if (knockBackAmount > 0.0F) {
                            hitHurtableEntityPatch.knockBackEntity(sourcePosition, knockBackAmount);
                        }
                    }
                }
            }
        }
    }

    @SubscribeEvent
    public static void damageEvent(LivingDamageEvent event) {
        Entity attacker = event.getSource().getEntity();
        if (attacker != null) {
            LivingEntityPatch<?> attackerpatch = EpicFightCapabilities.getEntityPatch(attacker, LivingEntityPatch.class);
            if (attackerpatch != null && attackerpatch.getEpicFightDamageSource() != null) {
                attackerpatch.gatherDamageDealt(attackerpatch.getEpicFightDamageSource(), event.getAmount());
            }
        }
    }

    @SubscribeEvent
    public static void attackEvent(LivingAttackEvent event) {
        if (!event.getEntity().m_9236_().isClientSide()) {
            LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
            DamageSource damageSource = null;
            if (event.getEntity().getHealth() > 0.0F) {
                LivingEntityPatch<?> attackerPatch = EpicFightCapabilities.getEntityPatch(event.getSource().getEntity(), LivingEntityPatch.class);
                if (event.getSource() instanceof EpicFightDamageSource efDamageSource) {
                    damageSource = efDamageSource;
                } else if (event.getSource().isIndirect() && event.getSource().getDirectEntity() != null) {
                    ProjectilePatch<?> projectilepatch = EpicFightCapabilities.getEntityPatch(event.getSource().getDirectEntity(), ProjectilePatch.class);
                    if (projectilepatch != null) {
                        damageSource = projectilepatch.getEpicFightDamageSource(event.getSource());
                    }
                } else if (attackerPatch != null && attackerPatch.getEpicFightDamageSource() != null) {
                    damageSource = attackerPatch.getEpicFightDamageSource();
                }
                if (damageSource == null) {
                    damageSource = event.getSource();
                }
                AttackResult result = entitypatch != null ? entitypatch.tryHurt(damageSource, event.getAmount()) : AttackResult.success(event.getAmount());
                if (attackerPatch != null) {
                    attackerPatch.setLastAttackResult(result);
                }
                if (!result.resultType.dealtDamage()) {
                    event.setCanceled(true);
                } else if (event.getAmount() != result.damage) {
                    EpicFightDamageSource deflictedDamage = EpicFightDamageSources.copy(damageSource);
                    deflictedDamage.addRuntimeTag(EpicFightDamageType.PARTIAL_DAMAGE);
                    event.setCanceled(true);
                    event.getEntity().hurt(deflictedDamage, result.damage);
                }
            }
        }
    }

    @SubscribeEvent
    public static void shieldEvent(ShieldBlockEvent event) {
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        if (entitypatch != null) {
            entitypatch.playAnimationSynchronized(Animations.BIPED_HIT_SHIELD, 0.0F);
        }
    }

    @SubscribeEvent
    public static void dropEvent(LivingDropsEvent event) {
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        if (entitypatch != null && entitypatch.onDrop(event)) {
            event.setCanceled(true);
        }
    }

    @SubscribeEvent
    public static void projectileImpactEvent(ProjectileImpactEvent event) {
        ProjectilePatch<?> projectilepatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), ProjectilePatch.class);
        if (!event.getProjectile().m_9236_().isClientSide() && projectilepatch != null && projectilepatch.onProjectileImpact(event)) {
            event.setImpactResult(ProjectileImpactEvent.ImpactResult.SKIP_ENTITY);
        } else {
            if (event.getRayTraceResult() instanceof EntityHitResult rayresult && rayresult.getEntity() != null) {
                if (rayresult.getEntity() instanceof ServerPlayer) {
                    ServerPlayerPatch playerpatch = EpicFightCapabilities.getEntityPatch(rayresult.getEntity(), ServerPlayerPatch.class);
                    boolean canceled = playerpatch.getEventListener().triggerEvents(PlayerEventListener.EventType.PROJECTILE_HIT_EVENT, new ProjectileHitEvent(playerpatch, event));
                    if (canceled) {
                        event.setCanceled(true);
                    }
                }
                if (event.getProjectile().getOwner() != null) {
                    if (rayresult.getEntity().equals(event.getProjectile().getOwner().getVehicle())) {
                        event.setCanceled(true);
                    }
                    if (rayresult.getEntity() instanceof PartEntity<?> partEntity) {
                        Entity parent = partEntity.getParent();
                        if (event.getProjectile().getOwner().is(parent)) {
                            event.setCanceled(true);
                        }
                    }
                }
            }
        }
    }

    @SubscribeEvent
    public static void itemAttributeModifierEvent(ItemAttributeModifierEvent event) {
        CapabilityItem itemCap = EpicFightCapabilities.getItemStackCapability(event.getItemStack());
        if (!itemCap.isEmpty()) {
            Multimap<Attribute, AttributeModifier> multimap = itemCap.getAttributeModifiers(event.getSlotType(), null);
            for (Attribute key : multimap.keys()) {
                for (AttributeModifier modifier : multimap.get(key)) {
                    event.addModifier(key, modifier);
                }
            }
        }
    }

    @SubscribeEvent
    public static void equipChangeEvent(LivingEquipmentChangeEvent event) {
        HurtableEntityPatch<?> hurtableEntitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), HurtableEntityPatch.class);
        if (hurtableEntitypatch != null) {
            hurtableEntitypatch.setDefaultStunReduction(event.getSlot(), event.getFrom(), event.getTo());
        }
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        CapabilityItem fromCap = EpicFightCapabilities.getItemStackCapability(event.getFrom());
        CapabilityItem toCap = EpicFightCapabilities.getItemStackCapability(event.getTo());
        if (event.getSlot() != EquipmentSlot.OFFHAND) {
            if (fromCap != null) {
                event.getEntity().getAttributes().removeAttributeModifiers(fromCap.getAttributeModifiers(event.getSlot(), entitypatch));
            }
            if (toCap != null) {
                event.getEntity().getAttributes().addTransientAttributeModifiers(toCap.getAttributeModifiers(event.getSlot(), entitypatch));
            }
        }
        if (entitypatch != null && entitypatch.getOriginal() != null) {
            if (event.getSlot().getType() == EquipmentSlot.Type.HAND) {
                InteractionHand hand = event.getSlot() == EquipmentSlot.MAINHAND ? InteractionHand.MAIN_HAND : InteractionHand.OFF_HAND;
                entitypatch.updateHeldItem(fromCap, toCap, event.getFrom(), event.getTo(), hand);
            } else if (event.getSlot().getType() == EquipmentSlot.Type.ARMOR) {
                entitypatch.updateArmor(fromCap, toCap, event.getSlot());
            }
        }
    }

    @SubscribeEvent
    public static void sizingEvent(EntityEvent.Size event) {
        if (event.getEntity() instanceof EnderDragon) {
            event.setNewSize(EntityDimensions.scalable(5.0F, 3.0F));
        }
    }

    @SubscribeEvent
    public static void effectAddEvent(MobEffectEvent.Added event) {
        if (!event.getEntity().m_9236_().isClientSide()) {
            EpicFightNetworkManager.sendToAll(new SPPotion(event.getEffectInstance(), SPPotion.Action.ACTIVATE, event.getEntity().m_19879_()));
        }
    }

    @SubscribeEvent
    public static void effectRemoveEvent(MobEffectEvent.Remove event) {
        if (!event.getEntity().m_9236_().isClientSide() && event.getEffectInstance() != null) {
            EpicFightNetworkManager.sendToAll(new SPPotion(event.getEffectInstance(), SPPotion.Action.REMOVE, event.getEntity().m_19879_()));
        }
    }

    @SubscribeEvent
    public static void effectExpiryEvent(MobEffectEvent.Expired event) {
        if (!event.getEntity().m_9236_().isClientSide()) {
            EpicFightNetworkManager.sendToAll(new SPPotion(event.getEffectInstance(), SPPotion.Action.REMOVE, event.getEntity().m_19879_()));
        }
    }

    @SubscribeEvent
    public static void mountEvent(EntityMountEvent event) {
        EntityPatch<?> mountEntity = EpicFightCapabilities.getEntityPatch(event.getEntityMounting(), EntityPatch.class);
        if (!event.getLevel().isClientSide() && mountEntity instanceof HumanoidMobPatch && mountEntity.getOriginal() != null && event.getEntityBeingMounted() instanceof Mob) {
            ((HumanoidMobPatch) mountEntity).onMount(event.isMounting(), event.getEntityBeingMounted());
        }
    }

    @SubscribeEvent
    public static void tpEvent(EntityTeleportEvent.EnderEntity event) {
        if (event.getEntityLiving() instanceof EnderMan enderman) {
            EndermanPatch endermanpatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), EndermanPatch.class);
            if (endermanpatch != null) {
                if (endermanpatch.getEntityState().inaction()) {
                    for (Entity collideEntity : enderman.m_9236_().m_45976_(Entity.class, enderman.m_20191_().inflate(0.2, 0.2, 0.2))) {
                        if (collideEntity instanceof Projectile) {
                            return;
                        }
                    }
                    event.setCanceled(true);
                } else if (endermanpatch.isRaging()) {
                    event.setCanceled(true);
                }
            }
        }
    }

    @SubscribeEvent
    public static void jumpEvent(LivingEvent.LivingJumpEvent event) {
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        if (entitypatch != null && entitypatch.isLogicalClient() && !entitypatch.getEntityState().inaction() && !event.getEntity().m_20069_()) {
            StaticAnimation jumpAnimation = entitypatch.getClientAnimator().getJumpAnimation();
            entitypatch.<Animator>getAnimator().playAnimation(jumpAnimation, 0.0F);
            EpicFightNetworkManager.sendToServer(new CPPlayAnimation(jumpAnimation.getNamespaceId(), jumpAnimation.getId(), 0.0F, true, false));
        }
    }

    @SubscribeEvent
    public static void fallEvent(LivingFallEvent event) {
        LivingEntityPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), LivingEntityPatch.class);
        if (entitypatch != null) {
            entitypatch.onFall(event);
        }
    }

    @SubscribeEvent
    public static void playerFallEvent(PlayerFlyableFallEvent event) {
        PlayerPatch<?> entitypatch = EpicFightCapabilities.getEntityPatch(event.getEntity(), PlayerPatch.class);
        if (entitypatch != null) {
            entitypatch.onFall(new LivingFallEvent(event.getEntity(), event.getDistance(), event.getMultiplier()));
        }
    }
}