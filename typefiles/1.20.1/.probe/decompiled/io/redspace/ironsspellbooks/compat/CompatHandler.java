package io.redspace.ironsspellbooks.compat;

import io.redspace.ironsspellbooks.compat.apotheosis.ApotheosisHandler;
import io.redspace.ironsspellbooks.compat.tetra.TetraActualImpl;
import io.redspace.ironsspellbooks.compat.tetra.TetraProxy;
import java.util.Map;
import net.minecraftforge.fml.ModList;

public class CompatHandler {

    private static final Map<String, Runnable> MOD_MAP = Map.of("tetra", (Runnable) () -> TetraProxy.PROXY = new TetraActualImpl(), "apotheosis", ApotheosisHandler::init);

    public static void init() {
        MOD_MAP.forEach((modid, supplier) -> {
            if (ModList.get().isLoaded(modid)) {
                supplier.run();
            }
        });
    }
}