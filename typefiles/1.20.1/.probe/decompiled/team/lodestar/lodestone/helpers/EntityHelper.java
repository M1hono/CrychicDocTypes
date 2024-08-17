package team.lodestar.lodestone.helpers;

import java.util.ArrayList;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.phys.Vec3;

public class EntityHelper {

    public static void amplifyEffect(MobEffectInstance instance, LivingEntity target, int addedAmplifier, int cap) {
        instance.amplifier = Math.max(Math.min(cap, instance.getAmplifier() + addedAmplifier), instance.getAmplifier());
        syncEffect(instance, target);
    }

    public static void amplifyEffect(MobEffectInstance instance, LivingEntity target, int addedAmplifier) {
        instance.amplifier = instance.getAmplifier() + addedAmplifier;
        syncEffect(instance, target);
    }

    public static void extendEffect(MobEffectInstance instance, LivingEntity target, int addedDuration, int cap) {
        instance.duration = Math.max(Math.min(cap, instance.getDuration() + addedDuration), instance.getDuration());
        syncEffect(instance, target);
    }

    public static void extendEffect(MobEffectInstance instance, LivingEntity target, int addedDuration) {
        instance.duration = instance.getDuration() + addedDuration;
        syncEffect(instance, target);
    }

    public static void shortenEffect(MobEffectInstance instance, LivingEntity target, int removedDuration) {
        instance.duration = instance.getDuration() - removedDuration;
        syncEffect(instance, target);
    }

    public static void syncEffect(MobEffectInstance instance, LivingEntity target) {
        target.effectsDirty = true;
        target.onEffectUpdated(instance, true, target);
    }

    public static void trackPastPositions(ArrayList<EntityHelper.PastPosition> pastPositions, Vec3 currentPosition, float distanceThreshold) {
        for (EntityHelper.PastPosition pastPosition : pastPositions) {
            pastPosition.time++;
        }
        if (!pastPositions.isEmpty()) {
            EntityHelper.PastPosition latest = (EntityHelper.PastPosition) pastPositions.get(pastPositions.size() - 1);
            float distance = (float) latest.position.distanceTo(currentPosition);
            if (distance > distanceThreshold) {
                pastPositions.add(new EntityHelper.PastPosition(currentPosition, 0));
            }
        } else {
            pastPositions.add(new EntityHelper.PastPosition(currentPosition, 0));
        }
    }

    public static class PastPosition {

        public Vec3 position;

        public int time;

        public PastPosition(Vec3 position, int time) {
            this.position = position;
            this.time = time;
        }
    }
}