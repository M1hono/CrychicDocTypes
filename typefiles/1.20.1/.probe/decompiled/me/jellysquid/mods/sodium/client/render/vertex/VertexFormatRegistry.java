package me.jellysquid.mods.sodium.client.render.vertex;

import com.mojang.blaze3d.vertex.VertexFormat;
import it.unimi.dsi.fastutil.objects.Reference2ReferenceMap;
import it.unimi.dsi.fastutil.objects.Reference2ReferenceOpenHashMap;

@Deprecated
public class VertexFormatRegistry {

    private static final Reference2ReferenceMap<VertexFormat, VertexFormatDescription> DESCRIPTIONS = new Reference2ReferenceOpenHashMap();

    public static synchronized VertexFormatDescription get(VertexFormat format) {
        VertexFormatDescription desc = (VertexFormatDescription) DESCRIPTIONS.get(format);
        if (desc == null) {
            DESCRIPTIONS.put(format, desc = new VertexFormatDescription(format, DESCRIPTIONS.size()));
        }
        return desc;
    }
}