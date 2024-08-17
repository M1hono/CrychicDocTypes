package snownee.jade.impl;

import net.minecraft.nbt.CompoundTag;
import org.jetbrains.annotations.Nullable;
import snownee.jade.api.Accessor;
import snownee.jade.api.ui.IElement;
import snownee.jade.overlay.WailaTickHandler;

public final class ObjectDataCenter {

    public static int rateLimiter = 250;

    public static long timeLastUpdate = System.currentTimeMillis();

    public static boolean serverConnected;

    private static Accessor<?> accessor;

    private static Accessor.ClientHandler<Accessor<?>> clientHandler;

    private static CompoundTag serverData;

    private static Object lastObject;

    private ObjectDataCenter() {
    }

    public static void set(@Nullable Accessor<?> accessor) {
        ObjectDataCenter.accessor = accessor;
        if (accessor == null) {
            WailaTickHandler.instance().progressTracker.clear();
            lastObject = null;
            clientHandler = null;
        } else {
            clientHandler = WailaClientRegistration.INSTANCE.getAccessorHandler(accessor.getAccessorType());
            Object object = accessor.getTarget();
            if (object != lastObject) {
                WailaTickHandler.instance().progressTracker.clear();
                lastObject = object;
                serverData = null;
                requestServerData();
            }
        }
    }

    @Nullable
    public static Accessor<?> get() {
        return accessor;
    }

    public static CompoundTag getServerData() {
        if (accessor == null || clientHandler == null || serverData == null) {
            return null;
        } else if (accessor.verifyData(serverData)) {
            return serverData;
        } else {
            requestServerData();
            return null;
        }
    }

    public static void setServerData(CompoundTag tag) {
        serverData = tag;
        if (accessor != null && accessor.verifyData(serverData)) {
            accessor.getServerData().getAllKeys().clear();
            accessor.getServerData().merge(tag);
        }
    }

    public static void requestServerData() {
        timeLastUpdate = System.currentTimeMillis() - (long) rateLimiter;
    }

    public static boolean isTimeElapsed(long time) {
        return System.currentTimeMillis() - timeLastUpdate >= time;
    }

    public static void resetTimer() {
        timeLastUpdate = System.currentTimeMillis();
    }

    public static IElement getIcon() {
        return accessor != null && clientHandler != null ? clientHandler.getIcon(accessor) : null;
    }
}