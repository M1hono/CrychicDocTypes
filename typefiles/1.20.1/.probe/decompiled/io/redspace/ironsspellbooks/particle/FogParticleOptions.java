package io.redspace.ironsspellbooks.particle;

import com.mojang.brigadier.StringReader;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.serialization.Codec;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import io.redspace.ironsspellbooks.registries.ParticleRegistry;
import net.minecraft.core.particles.DustParticleOptionsBase;
import net.minecraft.core.particles.ParticleOptions;
import net.minecraft.core.particles.ParticleType;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.util.ExtraCodecs;
import org.jetbrains.annotations.NotNull;
import org.joml.Vector3f;

public class FogParticleOptions extends DustParticleOptionsBase {

    public static final Codec<FogParticleOptions> CODEC = RecordCodecBuilder.create(p_175793_ -> p_175793_.group(ExtraCodecs.VECTOR3F.fieldOf("color").forGetter(p_175797_ -> p_175797_.f_175800_), Codec.FLOAT.fieldOf("scale").forGetter(p_175795_ -> p_175795_.f_175801_)).apply(p_175793_, FogParticleOptions::new));

    public static final ParticleOptions.Deserializer<FogParticleOptions> DESERIALIZER = new ParticleOptions.Deserializer<FogParticleOptions>() {

        @NotNull
        public FogParticleOptions fromCommand(@NotNull ParticleType<FogParticleOptions> p_123689_, @NotNull StringReader p_123690_) throws CommandSyntaxException {
            Vector3f vector3f = DustParticleOptionsBase.readVector3f(p_123690_);
            p_123690_.expect(' ');
            float f = p_123690_.readFloat();
            return new FogParticleOptions(vector3f, f);
        }

        @NotNull
        public FogParticleOptions fromNetwork(@NotNull ParticleType<FogParticleOptions> p_123692_, @NotNull FriendlyByteBuf p_123693_) {
            return new FogParticleOptions(DustParticleOptionsBase.readVector3f(p_123693_), p_123693_.readFloat());
        }
    };

    public FogParticleOptions(Vector3f color, float scale) {
        super(color, scale);
    }

    @NotNull
    @Override
    public ParticleType<FogParticleOptions> getType() {
        return ParticleRegistry.FOG_PARTICLE.get();
    }
}