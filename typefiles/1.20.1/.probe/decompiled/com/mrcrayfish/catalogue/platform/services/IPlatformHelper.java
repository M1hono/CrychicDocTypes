package com.mrcrayfish.catalogue.platform.services;

import com.mojang.blaze3d.platform.NativeImage;
import com.mrcrayfish.catalogue.client.IModData;
import java.io.File;
import java.util.List;
import java.util.function.Consumer;

public interface IPlatformHelper {

    List<IModData> getAllModData();

    File getModDirectory();

    default boolean isForge() {
        return false;
    }

    void loadNativeImage(String var1, String var2, Consumer<NativeImage> var3);
}