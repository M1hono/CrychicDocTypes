package io.redspace.ironsspellbooks.entity.mobs.goals;

import io.redspace.ironsspellbooks.entity.mobs.SupportMob;
import java.util.function.Predicate;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal;

public class FindSupportableTargetGoal<M extends Mob & SupportMob> extends NearestAttackableTargetGoal<LivingEntity> {

    SupportMob supportMob;

    public FindSupportableTargetGoal(M pMob, Class pTargetType, boolean pMustSee, Predicate<LivingEntity> pTargetPredicate) {
        super(pMob, pTargetType, 5, pMustSee, false, pTargetPredicate);
        this.supportMob = pMob;
    }

    @Override
    public void start() {
        super.start();
        this.supportMob.setSupportTarget(this.f_26050_);
        this.f_26135_.setTarget(null);
    }
}