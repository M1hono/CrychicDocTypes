package se.mickelus.tetra.util;

import java.util.Arrays;
import net.minecraft.util.FastColor;
import org.joml.Vector3f;

public class Lherper {

    private static float flip(float x) {
        return 1.0F - x;
    }

    public static float easeIn(float t) {
        return t * t;
    }

    public static float easeOut(float t) {
        return flip(easeIn(flip(t)));
    }

    public static int lerpColors(float factor, int... colors) {
        Vector3f result = lerpColors(factor, (Vector3f[]) Arrays.stream(colors).mapToObj(color -> new Vector3f((float) FastColor.ARGB32.red(color), (float) FastColor.ARGB32.green(color), (float) FastColor.ARGB32.blue(color))).toArray(Vector3f[]::new));
        return FastColor.ARGB32.color(255, (int) result.x(), (int) result.y(), (int) result.z());
    }

    public static Vector3f lerpColors(float factor, Vector3f... colors) {
        int size = colors.length;
        float progress = Math.min(1.0F * factor * (float) (size - 1), (float) size - 1.00001F);
        int index = Math.min((int) progress, size - 2);
        return lerpColors(progress % 1.0F, colors[index], colors[index + 1]);
    }

    private static Vector3f lerpColors(float factor, Vector3f fromColor, Vector3f toColor) {
        Vector3f result = new Vector3f(fromColor);
        result.lerp(toColor, factor);
        return result;
    }
}