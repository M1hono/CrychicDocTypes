package yesman.epicfight.world.entity.ai.goal;

import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.PathfinderMob;
import net.minecraft.world.entity.ai.goal.MeleeAttackGoal;
import yesman.epicfight.world.capabilities.entitypatch.MobPatch;

public class TargetChasingGoal extends MeleeAttackGoal {

    protected final MobPatch<? extends PathfinderMob> mobpatch;

    protected final double attackRadiusSqr;

    public TargetChasingGoal(MobPatch<? extends PathfinderMob> mobpatch, PathfinderMob pathfinderMob, double speedModifier, boolean longMemory) {
        this(mobpatch, pathfinderMob, speedModifier, longMemory, 0.0);
    }

    public TargetChasingGoal(MobPatch<? extends PathfinderMob> mobpatch, PathfinderMob pathfinderMob, double speedModifier, boolean longMemory, double attackRadius) {
        super(pathfinderMob, speedModifier, longMemory);
        this.mobpatch = mobpatch;
        this.attackRadiusSqr = attackRadius * attackRadius;
    }

    @Override
    public void tick() {
        LivingEntity livingentity = this.f_25540_.m_5448_();
        if (livingentity != null) {
            double d0 = this.f_25540_.m_20275_(livingentity.m_20185_(), livingentity.m_20186_(), livingentity.m_20189_());
            if (!(d0 > this.attackRadiusSqr)) {
                this.f_25540_.m_21573_().stop();
                this.f_25540_.m_21563_().setLookAt(livingentity, 30.0F, 30.0F);
            } else {
                super.tick();
            }
        }
    }

    @Override
    protected void checkAndPerformAttack(LivingEntity target, double double0) {
    }
}