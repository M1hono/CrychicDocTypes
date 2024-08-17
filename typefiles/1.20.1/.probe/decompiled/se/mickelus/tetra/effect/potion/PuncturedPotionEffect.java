package se.mickelus.tetra.effect.potion;

import java.util.function.Consumer;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.core.particles.ItemParticleOption;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.util.RandomSource;
import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffectCategory;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.client.extensions.common.IClientMobEffectExtensions;
import se.mickelus.mutil.effect.EffectTooltipRenderer;

@ParametersAreNonnullByDefault
public class PuncturedPotionEffect extends MobEffect {

    public static final String identifier = "punctured";

    public static PuncturedPotionEffect instance;

    public PuncturedPotionEffect() {
        super(MobEffectCategory.HARMFUL, 8912896);
        this.m_19472_(Attributes.ARMOR, "69967662-e7e9-4671-8f48-81d0de9d2098", -0.05, AttributeModifier.Operation.MULTIPLY_TOTAL);
        instance = this;
    }

    @Override
    public void applyEffectTick(LivingEntity entity, int amplifier) {
        if (!entity.m_20193_().isClientSide) {
            RandomSource rand = entity.getRandom();
            EquipmentSlot slot = EquipmentSlot.values()[2 + rand.nextInt(4)];
            ItemStack itemStack = entity.getItemBySlot(slot);
            if (!itemStack.isEmpty()) {
                ((ServerLevel) entity.m_9236_()).sendParticles(new ItemParticleOption(ParticleTypes.ITEM, itemStack), entity.m_20185_() + (double) entity.m_20205_() * (0.3 + rand.nextGaussian() * 0.4), entity.m_20186_() + (double) entity.m_20206_() * (0.2 + rand.nextGaussian() * 0.4), entity.m_20189_() + (double) entity.m_20205_() * (0.3 + rand.nextGaussian() * 0.4), 10, 0.0, 0.0, 0.0, 0.0);
            }
        }
    }

    @Override
    public boolean isDurationEffectTick(int duration, int amplifier) {
        return duration % 10 == 0;
    }

    @OnlyIn(Dist.CLIENT)
    public void initializeClient(Consumer<IClientMobEffectExtensions> consumer) {
        super.initializeClient(consumer);
        consumer.accept(new EffectTooltipRenderer(effect -> {
            int amp = effect.getAmplifier() + 1;
            double armor = (double) Minecraft.getInstance().player.m_21230_();
            double armorReduction = armor / (1.0 - (double) amp * 0.1) - armor;
            return I18n.get("effect.tetra.punctured.tooltip", String.format("%d", amp * 10), String.format("%.1f", armorReduction));
        }));
    }
}