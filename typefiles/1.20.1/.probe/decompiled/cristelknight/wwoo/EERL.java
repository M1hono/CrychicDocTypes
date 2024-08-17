package cristelknight.wwoo;

import net.minecraft.resources.ResourceLocation;

public class EERL extends ResourceLocation {

    public EERL(String path) {
        super("expanded_ecosphere", path);
    }

    public static String asString(String path) {
        return "expanded_ecosphere:" + path;
    }
}