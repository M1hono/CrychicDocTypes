package noppes.npcs.shared.client.util;

import java.util.ArrayList;
import java.util.List;
import net.minecraft.ResourceLocationException;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.PackType;
import noppes.npcs.shared.common.util.LogWriter;

public class AssetsFinder {

    private static List<ResourceLocation> list = new ArrayList();

    private static String root;

    private static String type;

    public static List<ResourceLocation> find(String root, String type) {
        AssetsFinder.root = root;
        AssetsFinder.type = type;
        list.clear();
        ArrayList<ResourceLocation> resources = new ArrayList();
        Minecraft.getInstance().getResourceManager().listPacks().forEach(p -> {
            for (String s : p.getNamespaces(PackType.CLIENT_RESOURCES)) {
                try {
                    p.listResources(PackType.CLIENT_RESOURCES, s, root, (r, streamIoSupplier) -> {
                        if (r.toString().endsWith(type)) {
                            resources.add(r);
                        }
                    });
                } catch (ResourceLocationException var7) {
                    LogWriter.except(var7);
                }
            }
        });
        return resources;
    }
}