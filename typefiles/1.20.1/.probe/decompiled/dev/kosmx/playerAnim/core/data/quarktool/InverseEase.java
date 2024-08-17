package dev.kosmx.playerAnim.core.data.quarktool;

import dev.kosmx.playerAnim.core.util.Ease;
import dev.kosmx.playerAnim.core.util.Easing;

public class InverseEase {

    public static Ease inverse(Ease ease) {
        String str = ease.toString();
        if (str.substring(0, 2).equals("IN") && !str.substring(0, 5).equals("INOUT")) {
            return Easing.easeFromString("OUT" + str.substring(2));
        } else {
            return str.substring(0, 3).equals("OUT") ? Easing.easeFromString("IN" + str.substring(3)) : ease;
        }
    }
}