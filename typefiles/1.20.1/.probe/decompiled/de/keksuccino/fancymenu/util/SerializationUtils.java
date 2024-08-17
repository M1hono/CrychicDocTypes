package de.keksuccino.fancymenu.util;

import de.keksuccino.fancymenu.util.file.ResourceFile;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.resource.resources.audio.IAudio;
import de.keksuccino.fancymenu.util.resource.resources.text.IText;
import de.keksuccino.fancymenu.util.resource.resources.texture.ITexture;
import de.keksuccino.fancymenu.util.resource.resources.video.IVideo;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class SerializationUtils {

    @Nullable
    public static ResourceSupplier<ITexture> deserializeImageResourceSupplier(@Nullable String resourceSource) {
        return resourceSource != null ? ResourceSupplier.image(resourceSource) : null;
    }

    @Nullable
    public static ResourceSupplier<IAudio> deserializeAudioResourceSupplier(@Nullable String resourceSource) {
        return resourceSource != null ? ResourceSupplier.audio(resourceSource) : null;
    }

    @Nullable
    public static ResourceSupplier<IVideo> deserializeVideoResourceSupplier(@Nullable String resourceSource) {
        return resourceSource != null ? ResourceSupplier.video(resourceSource) : null;
    }

    @Nullable
    public static ResourceSupplier<IText> deserializeTextResourceSupplier(@Nullable String resourceSource) {
        return resourceSource != null ? ResourceSupplier.text(resourceSource) : null;
    }

    @Nullable
    public static ResourceFile deserializeAssetResourceFile(@Nullable String gameDirectoryFilePath) {
        return gameDirectoryFilePath == null ? null : ResourceFile.asset(gameDirectoryFilePath);
    }

    @Nullable
    public static ResourceFile deserializeResourceFile(@Nullable String gameDirectoryFilePath) {
        return gameDirectoryFilePath == null ? null : ResourceFile.of(gameDirectoryFilePath);
    }

    @NotNull
    public static <T extends Number> T deserializeNumber(@NotNull Class<T> type, @NotNull T fallbackValue, @Nullable String serialized) {
        try {
            if (serialized != null) {
                serialized = serialized.replace(" ", "");
                if (type == Float.class) {
                    return (T) Float.valueOf(serialized);
                }
                if (type == Double.class) {
                    return (T) Double.valueOf(serialized);
                }
                if (type == Integer.class) {
                    return (T) Integer.valueOf(serialized);
                }
                if (type == Long.class) {
                    return (T) Long.valueOf(serialized);
                }
            }
        } catch (Exception var4) {
        }
        return fallbackValue;
    }

    public static boolean deserializeBoolean(boolean fallbackValue, @Nullable String serialized) {
        if (serialized != null) {
            if (serialized.replace(" ", "").equalsIgnoreCase("true")) {
                return true;
            }
            if (serialized.replace(" ", "").equalsIgnoreCase("false")) {
                return false;
            }
        }
        return fallbackValue;
    }
}