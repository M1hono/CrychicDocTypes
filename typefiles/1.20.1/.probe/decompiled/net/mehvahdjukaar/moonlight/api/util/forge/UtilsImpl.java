package net.mehvahdjukaar.moonlight.api.util.forge;

import com.mojang.serialization.Codec;
import com.mojang.serialization.codecs.BaseMapCodec;
import java.util.Map;
import net.minecraftforge.common.LenientUnboundedMapCodec;

public class UtilsImpl {

    public static <K, V, C extends BaseMapCodec<K, V> & Codec<Map<K, V>>> C optionalMapCodec(Codec<K> keyCodec, Codec<V> elementCodec) {
        return (C) (new LenientUnboundedMapCodec(keyCodec, elementCodec));
    }
}