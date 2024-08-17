package net.mehvahdjukaar.moonlight.api.misc;

import com.mojang.serialization.Codec;
import com.mojang.serialization.DataResult;
import com.mojang.serialization.DynamicOps;
import com.mojang.serialization.MapCodec;
import com.mojang.serialization.MapLike;
import com.mojang.serialization.RecordBuilder;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

public class StrOpt {

    public static <A> MapCodec<Optional<A>> of(Codec<A> elementCodec, String name) {
        return new StrOpt.StrictOptionalFieldCodec<>(name, elementCodec);
    }

    public static <A> MapCodec<A> of(Codec<A> elementCodec, String name, A fallback) {
        return of(elementCodec, name).xmap(optional -> optional.orElse(fallback), object2 -> Objects.equals(object2, fallback) ? Optional.empty() : Optional.of(object2));
    }

    @Deprecated(forRemoval = true, since = "1.20.4")
    static final class StrictOptionalFieldCodec<A> extends MapCodec<Optional<A>> {

        private final String name;

        private final Codec<A> elementCodec;

        public StrictOptionalFieldCodec(String name, Codec<A> elementCodec) {
            this.name = name;
            this.elementCodec = elementCodec;
        }

        public <T> DataResult<Optional<A>> decode(DynamicOps<T> dynamicOps, MapLike<T> mapLike) {
            T object = (T) mapLike.get(this.name);
            return object == null ? DataResult.success(Optional.empty()) : this.elementCodec.parse(dynamicOps, object).map(Optional::of);
        }

        public <T> RecordBuilder<T> encode(Optional<A> input, DynamicOps<T> ops, RecordBuilder<T> prefix) {
            return input.isPresent() ? prefix.add(this.name, this.elementCodec.encodeStart(ops, input.get())) : prefix;
        }

        public <T> Stream<T> keys(DynamicOps<T> dynamicOps) {
            return Stream.of(dynamicOps.createString(this.name));
        }

        public boolean equals(Object object) {
            if (this == object) {
                return true;
            } else {
                return !(object instanceof StrOpt.StrictOptionalFieldCodec<?> strictOptionalFieldCodec) ? false : Objects.equals(this.name, strictOptionalFieldCodec.name) && Objects.equals(this.elementCodec, strictOptionalFieldCodec.elementCodec);
            }
        }

        public int hashCode() {
            return Objects.hash(new Object[] { this.name, this.elementCodec });
        }

        public String toString() {
            return "StrictOptionalFieldCodec[" + this.name + ": " + this.elementCodec + "]";
        }
    }
}