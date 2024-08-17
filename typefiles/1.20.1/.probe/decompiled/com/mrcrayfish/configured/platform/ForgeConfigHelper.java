package com.mrcrayfish.configured.platform;

import com.mrcrayfish.configured.Constants;
import com.mrcrayfish.configured.api.IModConfigProvider;
import com.mrcrayfish.configured.platform.services.IConfigHelper;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import javax.annotation.Nullable;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.storage.LevelResource;
import net.minecraftforge.fml.ModContainer;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.fml.loading.moddiscovery.ModInfo;

public class ForgeConfigHelper implements IConfigHelper {

    private static final ResourceLocation BACKGROUND_LOCATION = new ResourceLocation("textures/gui/options_background.png");

    private static final LevelResource SERVER_CONFIG_RESOURCE = new LevelResource("serverconfig");

    @Override
    public LevelResource getServerConfigResource() {
        return SERVER_CONFIG_RESOURCE;
    }

    @Override
    public Set<IModConfigProvider> getProviders() {
        Set<IModConfigProvider> providers = new HashSet();
        ModList.get().forEachModContainer((id, container) -> {
            Object raw = container.getModInfo().getModProperties().get("configuredProviders");
            if (raw instanceof String) {
                Object provider = createProviderInstance(container, raw.toString());
                if (provider instanceof IModConfigProvider) {
                    providers.add((IModConfigProvider) provider);
                    Constants.LOG.info("Successfully loaded config provider: {}", raw.toString());
                }
            } else if (raw instanceof List) {
                for (Object obj : (List) raw) {
                    Object provider = createProviderInstance(container, obj.toString());
                    if (provider instanceof IModConfigProvider) {
                        providers.add((IModConfigProvider) provider);
                        Constants.LOG.info("Successfully loaded config provider: {}", obj.toString());
                    }
                }
            } else if (raw != null) {
                throw new RuntimeException("Config provider definition must be either a String or Array of Strings");
            }
        });
        return providers;
    }

    @Nullable
    private static Object createProviderInstance(ModContainer container, String classPath) {
        try {
            Class<?> providerClass = Class.forName(classPath);
            Object obj = providerClass.getDeclaredConstructor().newInstance();
            if (!(obj instanceof IModConfigProvider)) {
                throw new RuntimeException("Config providers must implement IModConfigProvider");
            } else {
                return obj;
            }
        } catch (Exception var4) {
            Constants.LOG.error("Failed to load config provider from mod: {}", container.getModId());
            return null;
        }
    }

    @Override
    public ResourceLocation getBackgroundTexture(String modId) {
        ModContainer container = (ModContainer) ModList.get().getModContainerById(modId).orElse(null);
        if (container != null) {
            String configBackground = (String) container.getModInfo().getModProperties().get("configuredBackground");
            if (configBackground != null) {
                return new ResourceLocation(configBackground);
            }
            if (container.getModInfo() instanceof ModInfo modInfo) {
                Optional<String> optional = modInfo.getConfigElement(new String[] { "configBackground" });
                if (optional.isPresent()) {
                    return new ResourceLocation((String) optional.get());
                }
            }
        }
        return BACKGROUND_LOCATION;
    }
}