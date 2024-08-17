package me.jellysquid.mods.sodium.client.render.vertex.transform;

import com.google.common.collect.ImmutableList;
import com.mojang.blaze3d.vertex.DefaultVertexFormat;
import com.mojang.blaze3d.vertex.VertexFormat;
import com.mojang.blaze3d.vertex.VertexFormatElement;
import it.unimi.dsi.fastutil.ints.IntList;
import java.util.Arrays;

public enum CommonVertexElement {

    POSITION,
    COLOR,
    TEXTURE,
    OVERLAY,
    LIGHT,
    NORMAL;

    public static final int COUNT = values().length;

    public static CommonVertexElement getCommonType(VertexFormatElement element) {
        if (element == DefaultVertexFormat.ELEMENT_POSITION) {
            return POSITION;
        } else if (element == DefaultVertexFormat.ELEMENT_COLOR) {
            return COLOR;
        } else if (element == DefaultVertexFormat.ELEMENT_UV0) {
            return TEXTURE;
        } else if (element == DefaultVertexFormat.ELEMENT_UV1) {
            return OVERLAY;
        } else if (element == DefaultVertexFormat.ELEMENT_UV2) {
            return LIGHT;
        } else {
            return element == DefaultVertexFormat.ELEMENT_NORMAL ? NORMAL : null;
        }
    }

    public static int[] getOffsets(VertexFormat format) {
        int[] results = new int[COUNT];
        Arrays.fill(results, -1);
        ImmutableList<VertexFormatElement> elements = format.getElements();
        IntList offsets = format.offsets;
        for (int i = 0; i < elements.size(); i++) {
            VertexFormatElement element = (VertexFormatElement) elements.get(i);
            int offset = offsets.getInt(i);
            CommonVertexElement type = getCommonType(element);
            if (type != null) {
                results[type.ordinal()] = offset;
            }
        }
        return results;
    }
}