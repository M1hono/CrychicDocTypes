package team.lodestar.lodestone.systems.particle.world.options;

import java.util.ArrayList;
import java.util.Collection;
import java.util.function.Consumer;
import net.minecraft.client.particle.ParticleRenderType;
import net.minecraft.core.particles.ParticleOptions;
import net.minecraft.core.particles.ParticleType;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraftforge.registries.RegistryObject;
import team.lodestar.lodestone.handlers.RenderHandler;
import team.lodestar.lodestone.systems.particle.SimpleParticleOptions;
import team.lodestar.lodestone.systems.particle.render_types.LodestoneWorldParticleRenderType;
import team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle;
import team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior;
import team.lodestar.lodestone.systems.particle.world.behaviors.components.LodestoneBehaviorComponent;
import team.lodestar.lodestone.systems.particle.world.type.LodestoneWorldParticleType;

public class WorldParticleOptions extends SimpleParticleOptions implements ParticleOptions {

    public final ParticleType<?> type;

    public LodestoneParticleBehavior behavior = LodestoneParticleBehavior.BILLBOARD;

    public LodestoneBehaviorComponent behaviorComponent;

    public ParticleRenderType renderType = LodestoneWorldParticleRenderType.ADDITIVE;

    public RenderHandler.LodestoneRenderLayer renderLayer = RenderHandler.DELAYED_RENDER;

    public boolean shouldCull;

    public final Collection<Consumer<LodestoneWorldParticle>> tickActors = new ArrayList();

    public final Collection<Consumer<LodestoneWorldParticle>> spawnActors = new ArrayList();

    public final Collection<Consumer<LodestoneWorldParticle>> renderActors = new ArrayList();

    public boolean noClip = false;

    public WorldParticleOptions(ParticleType<?> type) {
        this.type = type;
    }

    public WorldParticleOptions(RegistryObject<? extends LodestoneWorldParticleType> type) {
        this((ParticleType<?>) type.get());
    }

    public WorldParticleOptions setBehavior(LodestoneBehaviorComponent behaviorComponent) {
        if (behaviorComponent == null) {
            return this;
        } else {
            this.behavior = behaviorComponent.getBehaviorType();
            this.behaviorComponent = behaviorComponent;
            return this;
        }
    }

    public WorldParticleOptions setBehaviorIfDefault(LodestoneBehaviorComponent behaviorComponent) {
        return !this.behavior.equals(LodestoneParticleBehavior.BILLBOARD) ? this : this.setBehavior(behaviorComponent);
    }

    @Override
    public ParticleType<?> getType() {
        return this.type;
    }

    @Override
    public void writeToNetwork(FriendlyByteBuf buffer) {
    }

    @Override
    public String writeToString() {
        return "";
    }
}