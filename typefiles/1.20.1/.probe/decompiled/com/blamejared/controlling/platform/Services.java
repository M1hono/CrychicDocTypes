package com.blamejared.controlling.platform;

import com.blamejared.controlling.ControllingCommon;
import java.util.ServiceLoader;

public class Services {

    public static final IEventHelper EVENT = load(IEventHelper.class);

    public static final IPlatformHelper PLATFORM = load(IPlatformHelper.class);

    public static <T> T load(Class<T> clazz) {
        T loadedService = (T) ServiceLoader.load(clazz).findFirst().orElseThrow(() -> new NullPointerException("Failed to load service for " + clazz.getName()));
        ControllingCommon.LOG.debug("Loaded {} for service {}", loadedService, clazz);
        return loadedService;
    }
}