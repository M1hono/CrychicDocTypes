package net.mehvahdjukaar.supplementaries.mixins;

import net.mehvahdjukaar.supplementaries.common.block.IConvertableHorse;
import net.minecraft.client.model.HorseModel;
import net.minecraft.client.renderer.entity.AbstractHorseRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.UndeadHorseRenderer;
import net.minecraft.world.entity.animal.horse.AbstractHorse;
import org.spongepowered.asm.mixin.Mixin;

@Mixin({ UndeadHorseRenderer.class })
public abstract class UndeadHorseRenderMixin extends AbstractHorseRenderer<AbstractHorse, HorseModel<AbstractHorse>> {

    protected UndeadHorseRenderMixin(EntityRendererProvider.Context context, HorseModel<AbstractHorse> abstractHorseHorseModel, float v) {
        super(context, abstractHorseHorseModel, v);
    }

    public boolean isShaking(AbstractHorse horse) {
        if (super.m_5936_(horse)) {
            return true;
        } else {
            if (horse instanceof IConvertableHorse dataHolder && dataHolder.supp$isConverting()) {
                return true;
            }
            return false;
        }
    }
}