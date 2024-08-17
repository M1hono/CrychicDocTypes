package de.keksuccino.fancymenu.customization.screen;

import de.keksuccino.fancymenu.customization.ScreenCustomization;
import de.keksuccino.fancymenu.customization.screen.identifier.ScreenIdentifierHandler;
import de.keksuccino.fancymenu.customization.screen.identifier.UniversalScreenIdentifierRegistry;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;
import net.minecraft.client.Minecraft;
import net.minecraft.client.Options;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.packs.PackSelectionScreen;
import net.minecraft.client.multiplayer.ClientAdvancements;
import net.minecraft.client.resources.language.LanguageManager;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.player.Player;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ScreenInstanceFactory {

    private static final Map<Class<?>, Object> DEFAULT_PARAMETERS = new HashMap();

    private static final Map<String, Supplier<? extends Screen>> SCREEN_INSTANCE_PROVIDERS = new HashMap();

    public static void registerScreenProvider(@NotNull String screenClassPath, @NotNull Supplier<? extends Screen> provider) {
        SCREEN_INSTANCE_PROVIDERS.put(screenClassPath, provider);
    }

    @Nullable
    public static Supplier<? extends Screen> getScreenProvider(@NotNull String screenClassPath) {
        return (Supplier<? extends Screen>) SCREEN_INSTANCE_PROVIDERS.get(screenClassPath);
    }

    @Nullable
    public static Screen tryConstruct(@NotNull String screenClassPathOrIdentifier) {
        try {
            if (UniversalScreenIdentifierRegistry.universalIdentifierExists(screenClassPathOrIdentifier)) {
                String nonUniversal = UniversalScreenIdentifierRegistry.getScreenForUniversalIdentifier(screenClassPathOrIdentifier);
                if (nonUniversal != null) {
                    screenClassPathOrIdentifier = nonUniversal;
                }
            }
            screenClassPathOrIdentifier = ScreenIdentifierHandler.tryFixInvalidIdentifierWithNonUniversal(screenClassPathOrIdentifier);
            if (ScreenCustomization.isScreenBlacklisted(screenClassPathOrIdentifier)) {
                return null;
            }
            DEFAULT_PARAMETERS.put(Screen.class, Minecraft.getInstance().screen);
            DEFAULT_PARAMETERS.put(Player.class, Minecraft.getInstance().player);
            if (Minecraft.getInstance().player != null) {
                DEFAULT_PARAMETERS.put(ClientAdvancements.class, Minecraft.getInstance().player.connection.getAdvancements());
            }
            Supplier<? extends Screen> screenProvider = getScreenProvider(screenClassPathOrIdentifier);
            if (screenProvider != null) {
                return (Screen) screenProvider.get();
            }
            Class<?> screenClass = Class.forName(screenClassPathOrIdentifier, false, ScreenInstanceFactory.class.getClassLoader());
            if (Screen.class.isAssignableFrom(screenClass)) {
                Constructor<?>[] constructors = screenClass.getConstructors();
                if (constructors.length > 0) {
                    Constructor<?> constructor = null;
                    for (Constructor<?> c : constructors) {
                        if (c.getParameterTypes().length == 0) {
                            constructor = c;
                            break;
                        }
                    }
                    if (constructor == null) {
                        for (Constructor<?> cx : constructors) {
                            if (allParametersSupported(cx.getParameterTypes())) {
                                constructor = cx;
                                break;
                            }
                        }
                    }
                    if (constructor == null) {
                        return null;
                    }
                    Class<?>[] parameters = constructor.getParameterTypes();
                    List<Object> parameterInstances = new ArrayList();
                    for (Class<?> p : parameters) {
                        parameterInstances.add(DEFAULT_PARAMETERS.get(p));
                    }
                    return createInstance(constructor, parameterInstances);
                }
            }
        } catch (Exception var11) {
            var11.printStackTrace();
        }
        return null;
    }

    private static boolean allParametersSupported(Class<?>[] parameters) {
        for (Class<?> par : parameters) {
            if (!DEFAULT_PARAMETERS.containsKey(par)) {
                return false;
            }
        }
        return true;
    }

    @Nullable
    private static Screen createInstance(@NotNull Constructor<?> constructor, @Nullable List<Object> parameters) {
        try {
            return parameters != null && !parameters.isEmpty() ? (Screen) constructor.newInstance(parameters.toArray(new Object[0])) : (Screen) constructor.newInstance();
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    static {
        DEFAULT_PARAMETERS.put(Minecraft.class, Minecraft.getInstance());
        DEFAULT_PARAMETERS.put(Screen.class, null);
        DEFAULT_PARAMETERS.put(Options.class, Minecraft.getInstance().options);
        DEFAULT_PARAMETERS.put(LanguageManager.class, Minecraft.getInstance().getLanguageManager());
        DEFAULT_PARAMETERS.put(Player.class, null);
        DEFAULT_PARAMETERS.put(String.class, "");
        DEFAULT_PARAMETERS.put(ClientAdvancements.class, null);
        DEFAULT_PARAMETERS.put(Component.class, Component.empty());
        DEFAULT_PARAMETERS.put(boolean.class, true);
        DEFAULT_PARAMETERS.put(int.class, 0);
        DEFAULT_PARAMETERS.put(long.class, 0L);
        DEFAULT_PARAMETERS.put(double.class, 0.0);
        DEFAULT_PARAMETERS.put(float.class, 0.0F);
        DEFAULT_PARAMETERS.put(Boolean.class, true);
        DEFAULT_PARAMETERS.put(Integer.class, 0);
        DEFAULT_PARAMETERS.put(Long.class, 0L);
        DEFAULT_PARAMETERS.put(Double.class, 0.0);
        DEFAULT_PARAMETERS.put(Float.class, 0.0F);
        registerScreenProvider(PackSelectionScreen.class.getName(), () -> new PackSelectionScreen(Minecraft.getInstance().getResourcePackRepository(), repo -> {
            Minecraft.getInstance().options.updateResourcePacks(repo);
            Minecraft.getInstance().setScreen(Minecraft.getInstance().screen);
        }, Minecraft.getInstance().getResourcePackDirectory(), Component.translatable("resourcePack.title")));
    }
}