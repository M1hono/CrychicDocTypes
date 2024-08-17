package forge.me.thosea.badoptimizations.other.forge;

import java.io.File;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.fml.loading.FMLPaths;
import net.minecraftforge.fml.loading.LoadingModList;

public final class PlatformMethodsImpl {

    private PlatformMethodsImpl() {
    }

    public static String getVersion() {
        return (String) ModList.get().getModContainerById("badoptimizations").map(mod -> mod.getModInfo().getVersion().toString()).orElse("[unknown version]");
    }

    public static File getConfigFolder() {
        return FMLPaths.CONFIGDIR.get().toFile();
    }

    public static boolean isModLoaded(String id) {
        return LoadingModList.get().getModFileById(id) != null;
    }
}