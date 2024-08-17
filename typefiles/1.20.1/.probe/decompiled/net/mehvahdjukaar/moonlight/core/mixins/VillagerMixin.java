package net.mehvahdjukaar.moonlight.core.mixins;

import com.mojang.serialization.Dynamic;
import net.mehvahdjukaar.moonlight.core.misc.VillagerAIInternal;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.ai.Brain;
import net.minecraft.world.entity.npc.AbstractVillager;
import net.minecraft.world.entity.npc.Villager;
import net.minecraft.world.level.Level;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ Villager.class })
public abstract class VillagerMixin extends AbstractVillager {

    @Shadow
    @Override
    protected abstract Brain<?> makeBrain(Dynamic<?> var1);

    protected VillagerMixin(EntityType<? extends AbstractVillager> entityType, Level level) {
        super(entityType, level);
    }

    @Inject(method = { "registerBrainGoals" }, at = { @At("RETURN") })
    protected void reg(Brain<Villager> pVillagerBrain, CallbackInfo ci) {
        VillagerAIInternal.onRegisterBrainGoals(pVillagerBrain, this);
    }
}