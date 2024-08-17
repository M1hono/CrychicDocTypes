package se.mickelus.tetra.effect;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.BlockParticleOption;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.tags.DamageTypeTags;
import net.minecraft.util.Mth;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.damagesource.CombatRules;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.MobType;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.item.enchantment.EnchantmentHelper;
import net.minecraft.world.item.enchantment.Enchantments;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.HitResult;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.TickEvent;
import net.minecraftforge.event.entity.EntityTeleportEvent;
import net.minecraftforge.event.entity.ProjectileImpactEvent;
import net.minecraftforge.event.entity.living.LivingAttackEvent;
import net.minecraftforge.event.entity.living.LivingDamageEvent;
import net.minecraftforge.event.entity.living.LivingDeathEvent;
import net.minecraftforge.event.entity.living.LivingEvent;
import net.minecraftforge.event.entity.living.LivingExperienceDropEvent;
import net.minecraftforge.event.entity.living.LivingHurtEvent;
import net.minecraftforge.event.entity.player.ArrowNockEvent;
import net.minecraftforge.event.entity.player.AttackEntityEvent;
import net.minecraftforge.event.entity.player.CriticalHitEvent;
import net.minecraftforge.event.entity.player.PlayerEvent;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.eventbus.api.EventPriority;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.eventbus.api.Event.Result;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.tetra.effect.howling.HowlingEffect;
import se.mickelus.tetra.effect.potion.BleedingPotionEffect;
import se.mickelus.tetra.effect.potion.EarthboundPotionEffect;
import se.mickelus.tetra.effect.potion.ExhaustedPotionEffect;
import se.mickelus.tetra.effect.revenge.RevengeTracker;
import se.mickelus.tetra.items.modular.IModularItem;
import se.mickelus.tetra.items.modular.ItemModularHandheld;
import se.mickelus.tetra.items.modular.ThrownModularItemEntity;
import se.mickelus.tetra.items.modular.impl.bow.ModularBowItem;
import se.mickelus.tetra.items.modular.impl.toolbelt.ToolbeltHelper;
import se.mickelus.tetra.items.modular.impl.toolbelt.inventory.QuiverInventory;
import se.mickelus.tetra.properties.PropertyHelper;

@ParametersAreNonnullByDefault
public class ItemEffectHandler {

    public static ItemEffectHandler instance;

    public ItemEffectHandler() {
        instance = this;
    }

    public static void applyHitEffects(ItemStack itemStack, LivingEntity target, LivingEntity attacker) {
        int bleedingLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.bleeding);
        if (bleedingLevel > 0 && !MobType.UNDEAD.equals(target.getMobType()) && attacker.getRandom().nextFloat() < 0.3F) {
            target.addEffect(new MobEffectInstance(BleedingPotionEffect.instance, 40, bleedingLevel));
        }
        int severLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.severing);
        if (severLevel > 0) {
            SeveringEffect.perform(itemStack, severLevel, attacker, target);
        }
        int earthbindLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.earthbind);
        if (earthbindLevel > 0 && (double) attacker.getRandom().nextFloat() < Math.max(0.1, 0.5 * (1.0 - target.m_20186_() / 128.0))) {
            target.addEffect(new MobEffectInstance(EarthboundPotionEffect.instance, earthbindLevel * 20, 0, false, true));
            if (target.m_9236_() instanceof ServerLevel serverLevel) {
                BlockState blockState = serverLevel.m_8055_(BlockPos.containing(target.m_20185_(), target.m_20186_() - 1.0, target.m_20189_()));
                serverLevel.sendParticles(new BlockParticleOption(ParticleTypes.BLOCK, blockState), target.m_20185_(), target.m_20186_() + 0.1, target.m_20189_(), 16, 0.0, serverLevel.f_46441_.nextGaussian() * 0.2, 0.0, 0.1);
            }
        }
        int stunLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.stun);
        if (stunLevel > 0) {
            StunEffect.perform(itemStack, stunLevel, attacker, target);
        }
        ApplyHitTargetEffectsEvent event = new ApplyHitTargetEffectsEvent(attacker, target, itemStack);
        MinecraftForge.EVENT_BUS.post(event);
    }

    @SubscribeEvent(priority = EventPriority.LOW)
    public void onExperienceDrop(LivingExperienceDropEvent event) {
        Optional.ofNullable(event.getAttackingPlayer()).map(LivingEntity::m_21205_).filter(itemStack -> !itemStack.isEmpty()).filter(itemStack -> itemStack.getItem() instanceof IModularItem).ifPresent(itemStack -> {
            int intuitLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.intuit);
            int xp = event.getDroppedExperience();
            if (intuitLevel > 0 && xp > 0) {
                ((IModularItem) itemStack.getItem()).tickHoningProgression(event.getAttackingPlayer(), itemStack, intuitLevel * xp);
            }
        });
    }

    @SubscribeEvent(priority = EventPriority.LOWEST)
    public void onAttackEntity(AttackEntityEvent event) {
        if (!event.isCanceled()) {
            ComboPoints.onAttackEntity(event);
        }
    }

    @SubscribeEvent
    public void onLivingAttack(LivingAttackEvent event) {
        if (!event.getSource().is(DamageTypeTags.BYPASSES_ARMOR) && event.getEntity().isBlocking()) {
            Optional.ofNullable(event.getEntity()).map(LivingEntity::m_21211_).filter(itemStack -> itemStack.getItem() instanceof ItemModularHandheld).ifPresent(itemStack -> {
                ItemModularHandheld item = (ItemModularHandheld) itemStack.getItem();
                LivingEntity blocker = event.getEntity();
                if (UseAnim.BLOCK.equals(itemStack.getUseAnimation())) {
                    item.applyUsageEffects(blocker, itemStack, (double) Mth.ceil(event.getAmount() / 2.0F));
                }
                if (event.getSource().getDirectEntity() instanceof LivingEntity attacker && (float) item.getEffectLevel(itemStack, ItemEffect.blockingReflect) > attacker.getRandom().nextFloat() * 100.0F) {
                    attacker.hurt(event.getEntity().m_269291_().thorns(event.getEntity()), (float) (item.getAbilityBaseDamage(itemStack) * (double) item.getEffectEfficiency(itemStack, ItemEffect.blockingReflect)));
                    applyHitEffects(itemStack, attacker, blocker);
                    EffectHelper.applyEnchantmentHitEffects(itemStack, attacker, blocker);
                    float knockbackFactor = 0.5F + (float) EnchantmentHelper.getItemEnchantmentLevel(Enchantments.KNOCKBACK, itemStack);
                    attacker.knockback((double) (knockbackFactor * 0.5F), blocker.m_20185_() - attacker.m_20185_(), blocker.m_20189_() - attacker.m_20189_());
                }
            });
        }
        if ("arrow".equals(event.getSource().getMsgId())) {
            ((Stream) CastOptional.cast(event.getSource().getEntity(), LivingEntity.class).map(shooter -> Stream.of(shooter.getMainHandItem(), shooter.getOffhandItem())).orElseGet(Stream::empty)).filter(itemStack -> itemStack.getItem() instanceof ModularBowItem).findFirst().ifPresent(itemStack -> {
                ModularBowItem item = (ModularBowItem) itemStack.getItem();
                item.tickHoningProgression((LivingEntity) event.getSource().getEntity(), itemStack, 2);
            });
        }
        RevengeTracker.onAttackEntity(event);
    }

    @SubscribeEvent
    public void onPlayerTick(TickEvent.PlayerTickEvent event) {
        if (TickEvent.Phase.START == event.phase) {
            LungeEffect.onPlayerTick(event.player);
            FocusEffect.onPlayerTick(event);
        }
    }

    @SubscribeEvent
    public void onProjectileImpact(ProjectileImpactEvent event) {
        HowlingEffect.deflectProjectile(event, event.getProjectile(), event.getRayTraceResult());
    }

    @SubscribeEvent
    public void onLivingHurt(LivingHurtEvent event) {
        Optional.ofNullable(event.getSource().getEntity()).filter(entity -> entity instanceof LivingEntity).map(entity -> (LivingEntity) entity).map(LivingEntity::m_21205_).filter(itemStack -> itemStack.getItem() instanceof IModularItem).ifPresent(itemStack -> {
            int quickStrikeLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.quickStrike);
            if (quickStrikeLevel > 0) {
                float maxDamage = (float) ((LivingEntity) event.getSource().getEntity()).getAttribute(Attributes.ATTACK_DAMAGE).getValue();
                float multiplier = (float) quickStrikeLevel * 0.05F + 0.2F;
                if (event.getAmount() < multiplier * maxDamage) {
                    event.setAmount(multiplier * maxDamage);
                }
            }
            int armorPenetrationLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.armorPenetration);
            if (armorPenetrationLevel > 0) {
                ArmorPenetrationEffect.onLivingHurt(event, armorPenetrationLevel);
            }
        });
        if (!event.getSource().is(DamageTypeTags.BYPASSES_ARMOR)) {
            ((Stream) Optional.ofNullable(event.getEntity()).map(entity -> Stream.of(entity.getMainHandItem(), entity.getOffhandItem())).orElseGet(Stream::empty)).filter(itemStack -> !itemStack.isEmpty()).filter(itemStack -> itemStack.getItem() instanceof ItemModularHandheld).forEach(itemStack -> {
                ItemModularHandheld item = (ItemModularHandheld) itemStack.getItem();
                if (item.getAttributeValue(itemStack, Attributes.ARMOR) > 0.0 || item.getAttributeValue(itemStack, Attributes.ARMOR_TOUGHNESS) > 0.0) {
                    int reducedAmount = (int) Math.ceil((double) (event.getAmount() - CombatRules.getDamageAfterAbsorb(event.getAmount(), (float) event.getEntity().getArmorValue(), (float) event.getEntity().getAttribute(Attributes.ARMOR_TOUGHNESS).getValue())));
                    item.applyUsageEffects(event.getEntity(), itemStack, (double) reducedAmount);
                    item.applyDamage(reducedAmount, itemStack, event.getEntity());
                }
            });
        }
    }

    @SubscribeEvent
    public void onLivingDamage(LivingDamageEvent event) {
        Optional.ofNullable(event.getSource().getEntity()).filter(entity -> entity instanceof Player).map(entity -> (LivingEntity) entity).map(LivingEntity::m_21205_).filter(itemStack -> itemStack.getItem() instanceof IModularItem).ifPresent(itemStack -> {
            int crushingLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.crushing);
            if (crushingLevel > 0) {
                CrushingEffect.onLivingDamage(event, crushingLevel);
            }
            int skeweringLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.skewering);
            if (skeweringLevel > 0) {
                SkeweringEffect.onLivingDamage(event, skeweringLevel, itemStack);
            }
            int reachingLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.reaching);
            if (reachingLevel > 0) {
                ReachingEffect.onLivingDamage(event, reachingLevel, EffectHelper.getEffectEfficiency(itemStack, ItemEffect.reaching));
            }
        });
        Optional.ofNullable(event.getEntity()).filter(entity -> entity instanceof Player).ifPresent(player -> FocusEffect.onLivingDamage(event));
        ArmorPenetrationEffect.onLivingDamage(event);
    }

    @SubscribeEvent
    public void onLivingDeath(LivingDeathEvent event) {
        ItemStack itemStack;
        Entity killer;
        if ("trident".equals(event.getSource().getMsgId()) && event.getSource().getDirectEntity() instanceof ThrownModularItemEntity modularEntity) {
            itemStack = modularEntity.getThrownStack();
            killer = modularEntity.m_19749_();
        } else {
            itemStack = (ItemStack) Optional.ofNullable(event.getSource().getEntity()).filter(entity -> entity instanceof Player).map(entity -> (LivingEntity) entity).map(LivingEntity::m_21205_).filter(stack -> stack.getItem() instanceof IModularItem).orElse(null);
            killer = event.getSource().getEntity();
        }
        if (itemStack != null) {
            Level level = event.getEntity().m_9236_();
            if (!level.isClientSide) {
                int jankLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.janking);
                if (jankLevel > 0) {
                    JankEffect.jankItemsDelayed((ServerLevel) level, event.getEntity().m_20183_(), jankLevel, EffectHelper.getEffectEfficiency(itemStack, ItemEffect.janking), killer);
                }
            }
        }
    }

    @SubscribeEvent
    public void onLivingJump(LivingEvent.LivingJumpEvent event) {
        Optional.ofNullable(event.getEntity().getEffect(EarthboundPotionEffect.instance)).ifPresent(effect -> event.getEntity().m_20256_(event.getEntity().m_20184_().multiply(1.0, 0.5, 1.0)));
    }

    @SubscribeEvent
    public void onCriticalHit(CriticalHitEvent event) {
        Optional.ofNullable(event.getEntity()).map(LivingEntity::m_21205_).filter(itemStack -> !itemStack.isEmpty()).filter(itemStack -> itemStack.getItem() instanceof IModularItem).ifPresent(itemStack -> {
            int backstabLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.backstab);
            if (backstabLevel > 0 && event.getTarget() instanceof LivingEntity) {
                LivingEntity attacker = event.getEntity();
                LivingEntity target = (LivingEntity) event.getTarget();
                if (180.0F - Math.abs(Math.abs(attacker.yHeadRot - target.yHeadRot) % 360.0F - 180.0F) < 60.0F) {
                    event.setDamageModifier(Math.max(1.25F + 0.25F * (float) backstabLevel, event.getDamageModifier()));
                    event.setResult(Result.ALLOW);
                }
            }
            int critLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.criticalStrike);
            if (critLevel > 0) {
                CritEffect.critEntity(event, itemStack, critLevel);
            }
        });
    }

    @OnlyIn(Dist.CLIENT)
    @SubscribeEvent(priority = EventPriority.LOWEST)
    public void onClickInput(InputEvent.InteractionKeyMappingTriggered event) {
        Minecraft mc = Minecraft.getInstance();
        ItemStack itemStack = mc.player.m_21205_();
        if (event.isAttack() && !event.isCanceled() && itemStack.getItem() instanceof ItemModularHandheld && mc.hitResult != null && HitResult.Type.MISS.equals(mc.hitResult.getType())) {
            if (EffectHelper.getEffectLevel(itemStack, ItemEffect.truesweep) > 0) {
                SweepingEffect.triggerTruesweep();
            }
            if (EffectHelper.getEffectLevel(itemStack, ItemEffect.howling) > 0) {
                HowlingEffect.sendPacket();
            }
        }
        if (event.isUseItem()) {
            LungeEffect.onRightClick(mc.player);
        }
    }

    @OnlyIn(Dist.CLIENT)
    @SubscribeEvent(priority = EventPriority.LOWEST)
    public void onKeyInput(InputEvent.Key event) {
        KeyMapping jumpKey = Minecraft.getInstance().options.keyJump;
        if (jumpKey.matches(event.getKey(), event.getScanCode()) && jumpKey.isDown()) {
            LungeEffect.onJump(Minecraft.getInstance().player);
        }
    }

    @SubscribeEvent
    public void onLeftClickBlock(PlayerInteractEvent.LeftClickBlock event) {
        Optional.of(event.getItemStack()).filter(itemStack -> !itemStack.isEmpty()).filter(itemStack -> itemStack.getItem() instanceof ItemModularHandheld).ifPresent(itemStack -> {
            ItemModularHandheld item = (ItemModularHandheld) itemStack.getItem();
            BlockPos pos = event.getPos();
            Level world = event.getLevel();
            BlockState blockState = world.getBlockState(pos);
            Player breakingPlayer = event.getEntity();
            boolean didStrike = StrikingEffect.causeEffect(breakingPlayer, itemStack, item, world, pos, blockState);
            if (didStrike) {
                event.setCanceled(true);
            } else {
                if (!event.getLevel().isClientSide) {
                    int critLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.criticalStrike);
                    if (critLevel > 0 && CritEffect.critBlock(world, breakingPlayer, pos, blockState, itemStack, critLevel)) {
                        event.setCanceled(true);
                    }
                    if (breakingPlayer.getAttackStrengthScale(0.5F) > 0.9F) {
                        if (EffectHelper.getEffectLevel(itemStack, ItemEffect.truesweep) > 0 && breakingPlayer.m_20096_() && !breakingPlayer.m_20142_()) {
                            SweepingEffect.truesweep(itemStack, breakingPlayer, true);
                        }
                        int howlingLevel = EffectHelper.getEffectLevel(itemStack, ItemEffect.howling);
                        if (howlingLevel > 0) {
                            HowlingEffect.trigger(itemStack, breakingPlayer, howlingLevel);
                        }
                    }
                }
            }
        });
    }

    @SubscribeEvent
    public void onBreakSpeed(PlayerEvent.BreakSpeed event) {
        ExhaustedPotionEffect.onBreakSpeed(event);
        ReachingEffect.onBreakSpeed(event);
    }

    @SubscribeEvent
    public void onEnderTeleport(EntityTeleportEvent event) {
        if (!event.getEntity().getCommandSenderWorld().isClientSide) {
            AABB aabb = new AABB(event.getTargetX() - 24.0, event.getTargetY() - 24.0, event.getTargetZ() - 24.0, event.getTargetX() + 24.0, event.getTargetY() + 24.0, event.getTargetZ() + 24.0);
            event.getEntity().getCommandSenderWorld().m_45976_(Player.class, aabb).forEach(player -> {
                int reverbLevel = PropertyHelper.getPlayerEffectLevel(player, ItemEffect.enderReverb);
                if (reverbLevel > 0 && !player.isCreative()) {
                    double effectProbability = (double) PropertyHelper.getPlayerEffectEfficiency(player, ItemEffect.enderReverb);
                    if (effectProbability > 0.0 && player.m_217043_().nextDouble() < effectProbability * 2.0) {
                        player.m_20984_(event.getTargetX(), event.getTargetY(), event.getTargetZ(), true);
                        player.m_7292_(new MobEffectInstance(MobEffects.CONFUSION, 40 * reverbLevel));
                    }
                }
            });
        }
    }

    @SubscribeEvent(priority = EventPriority.LOW)
    public void onArrowNock(ArrowNockEvent event) {
        Player player = event.getEntity();
        if (!event.hasAmmo() && player.m_21120_(InteractionHand.OFF_HAND).isEmpty()) {
            ItemStack itemStack = ToolbeltHelper.findToolbelt(player);
            if (!itemStack.isEmpty()) {
                QuiverInventory inventory = new QuiverInventory(itemStack);
                List<Collection<ItemEffect>> effects = inventory.getSlotEffects();
                int count = (Integer) CastOptional.cast(event.getBow().getItem(), IModularItem.class).map(item -> EffectHelper.getEffectLevel(event.getBow(), ItemEffect.multishot)).filter(level -> level > 0).orElse(1);
                for (int i = 0; i < inventory.m_6643_(); i++) {
                    if (((Collection) effects.get(i)).contains(ItemEffect.quickAccess) && !inventory.m_8020_(i).isEmpty()) {
                        player.m_21008_(InteractionHand.OFF_HAND, inventory.m_8020_(i).split(count));
                        player.m_6672_(event.getHand());
                        inventory.m_6596_();
                        event.setAction(new InteractionResultHolder<>(InteractionResult.SUCCESS, event.getBow()));
                        return;
                    }
                }
            }
        }
    }
}