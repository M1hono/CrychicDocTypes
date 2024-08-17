package de.keksuccino.fancymenu.customization.customgui;

import de.keksuccino.fancymenu.FancyMenu;
import de.keksuccino.fancymenu.LegacyHandler;
import de.keksuccino.fancymenu.customization.screen.identifier.ScreenIdentifierHandler;
import de.keksuccino.fancymenu.events.ModReloadEvent;
import de.keksuccino.fancymenu.util.event.acara.EventHandler;
import de.keksuccino.fancymenu.util.event.acara.EventListener;
import de.keksuccino.fancymenu.util.file.FileUtils;
import de.keksuccino.fancymenu.util.properties.PropertiesParser;
import de.keksuccino.fancymenu.util.properties.PropertyContainer;
import de.keksuccino.fancymenu.util.properties.PropertyContainerSet;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Map.Entry;
import javax.annotation.Nullable;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;

public class CustomGuiHandler {

    private static final Logger LOGGER = LogManager.getLogger();

    public static final File CUSTOM_GUIS_FILE = new File(FancyMenu.MOD_DIR, "/custom_gui_screens.txt");

    private static final File LEGACY_CUSTOM_GUIS_DIR = new File(FancyMenu.MOD_DIR, "/customguis");

    protected static final Map<String, CustomGui> CUSTOM_GUI_SCREENS = new HashMap();

    protected static final Map<String, String> OVERRIDDEN_SCREENS = new HashMap();

    protected static boolean initialized = false;

    public static void init() {
        reload();
        if (!LegacyHandler.getCheckList().customGuisPorted.getValue()) {
            LegacyHandler.getCheckList().customGuisPorted.setValue(true);
            for (CustomGui gui : deserializeLegacyGuis()) {
                CUSTOM_GUI_SCREENS.put(gui.identifier, gui);
            }
            saveChanges();
        }
        EventHandler.INSTANCE.registerListenersOf(new CustomGuiHandler());
        initialized = true;
    }

    public static void reload() {
        try {
            if (initialized || !CUSTOM_GUIS_FILE.isFile()) {
                saveChanges();
            }
            OVERRIDDEN_SCREENS.clear();
            CUSTOM_GUI_SCREENS.clear();
            PropertyContainerSet set = PropertiesParser.deserializeSetFromFile(CUSTOM_GUIS_FILE.getAbsolutePath());
            if (set != null) {
                PropertyContainer overridden = set.getFirstContainerOfType("overridden_screens");
                if (overridden != null) {
                    for (Entry<String, String> m : overridden.getProperties().entrySet()) {
                        OVERRIDDEN_SCREENS.put(ScreenIdentifierHandler.getBestIdentifier((String) m.getKey()), (String) m.getValue());
                    }
                }
                for (PropertyContainer c : set.getContainersOfType("custom_gui")) {
                    CustomGui gui = CustomGui.deserialize(c);
                    if (gui != null) {
                        CUSTOM_GUI_SCREENS.put(gui.identifier, gui);
                    }
                }
            }
        } catch (Exception var5) {
            var5.printStackTrace();
        }
    }

    public static void saveChanges() {
        try {
            CUSTOM_GUIS_FILE.createNewFile();
            PropertyContainerSet set = new PropertyContainerSet("custom_gui_screens");
            PropertyContainer overridden = new PropertyContainer("overridden_screens");
            for (Entry<String, String> m : OVERRIDDEN_SCREENS.entrySet()) {
                overridden.putProperty((String) m.getKey(), (String) m.getValue());
            }
            set.putContainer(overridden);
            for (CustomGui gui : CUSTOM_GUI_SCREENS.values()) {
                set.putContainer(gui.serialize());
            }
            PropertiesParser.serializeSetToFile(set, CUSTOM_GUIS_FILE.getAbsolutePath());
        } catch (Exception var4) {
            var4.printStackTrace();
        }
    }

    @EventListener
    public void onReloadFancyMenu(ModReloadEvent e) {
        LOGGER.info("[FANCYMENU] Reloading Custom GUIs..");
        reload();
    }

    @Nullable
    public static Screen beforeSetScreen(@Nullable Screen screen) {
        if (screen != null && !(screen instanceof CustomGuiBaseScreen)) {
            CustomGui gui = getGuiForOverriddenScreen(screen);
            if (gui != null) {
                LOGGER.info("[FANCYMENU] Overriding '" + screen.getClass().getName() + "' with custom GUI '" + gui.identifier + "'..");
                return constructInstance(gui, Minecraft.getInstance().screen, screen);
            }
        }
        return null;
    }

    public static void overrideScreenWithCustomGui(@NotNull String targetMenuIdentifier, @NotNull String customGuiIdentifier) {
        OVERRIDDEN_SCREENS.put(targetMenuIdentifier, customGuiIdentifier);
        saveChanges();
    }

    public static void removeScreenOverrideFor(@NotNull String menuIdentifier) {
        OVERRIDDEN_SCREENS.remove(menuIdentifier);
        saveChanges();
    }

    @Nullable
    public static CustomGui getGuiForOverriddenScreen(@NotNull Screen screen) {
        if (screen instanceof CustomGuiBaseScreen) {
            return null;
        } else {
            for (Entry<String, String> m : OVERRIDDEN_SCREENS.entrySet()) {
                if (ScreenIdentifierHandler.isIdentifierOfScreen((String) m.getKey(), screen)) {
                    return getGui((String) m.getValue());
                }
            }
            return null;
        }
    }

    public static Map<String, String> getOverriddenScreens() {
        return OVERRIDDEN_SCREENS;
    }

    public static void addGui(@NotNull CustomGui gui) {
        if (!guiExists(gui.identifier)) {
            CUSTOM_GUI_SCREENS.put(gui.identifier, gui);
            saveChanges();
        }
    }

    public static void removeGui(@NotNull String identifier) {
        if (guiExists(identifier)) {
            CUSTOM_GUI_SCREENS.remove(identifier);
            saveChanges();
        }
    }

    @Nullable
    public static CustomGui getGui(@NotNull String identifier) {
        return (CustomGui) CUSTOM_GUI_SCREENS.get(identifier);
    }

    @NotNull
    public static List<CustomGui> getGuis() {
        return new ArrayList(CUSTOM_GUI_SCREENS.values());
    }

    @NotNull
    public static List<String> getGuiIdentifiers() {
        List<String> l = new ArrayList();
        getGuis().forEach(customGui -> l.add(customGui.identifier));
        return l;
    }

    public static boolean guiExists(@NotNull String identifier) {
        return CUSTOM_GUI_SCREENS.containsKey(identifier);
    }

    @NotNull
    public static CustomGuiBaseScreen constructInstance(@NotNull CustomGui customGui, @Nullable Screen parentScreen, @Nullable Screen overrideScreen) {
        return new CustomGuiBaseScreen((CustomGui) Objects.requireNonNull(customGui), parentScreen, overrideScreen);
    }

    @Nullable
    public static CustomGuiBaseScreen constructInstance(@NotNull String identifier, @Nullable Screen parentScreen, @Nullable Screen overrideScreen) {
        CustomGui gui = getGui(identifier);
        return gui == null ? null : constructInstance(gui, parentScreen, overrideScreen);
    }

    @NotNull
    private static List<CustomGui> deserializeLegacyGuis() {
        List<CustomGui> guis = new ArrayList();
        if (LEGACY_CUSTOM_GUIS_DIR.isDirectory()) {
            LOGGER.info("[FANCYMENU] Trying to port old FMv2 custom GUIs to the new FMv3 system..");
            for (String s : FileUtils.getFiles(LEGACY_CUSTOM_GUIS_DIR.getPath())) {
                File f = new File(s);
                String identifier = null;
                String title = null;
                boolean allowEsc = false;
                for (String s2 : FileUtils.getFileLines(f)) {
                    if (s2.contains("=")) {
                        String variable = s2.replace(" ", "").split("=", 2)[0].toLowerCase();
                        String value = "";
                        String rawValue = s2.split("=", 2)[1];
                        for (int i = 0; i < rawValue.length(); i++) {
                            if (rawValue.charAt(i) != ' ') {
                                value = rawValue.substring(i);
                                break;
                            }
                        }
                        if (variable.equals("identifier")) {
                            identifier = value;
                        }
                        if (variable.equals("title")) {
                            title = value;
                        }
                        if (variable.equals("allowesc") && value.equalsIgnoreCase("true")) {
                            allowEsc = true;
                        }
                    }
                }
                if (identifier != null) {
                    CustomGui gui = new CustomGui();
                    gui.identifier = identifier;
                    gui.title = title;
                    gui.allowEsc = allowEsc;
                    guis.add(gui);
                }
            }
            try {
                LOGGER.info("[FANCYMENU] Successfully ported old FMv2 custom GUIs to new FMv3 system! Renaming old FMv2 'customguis' directory now..");
                File renamedDir = FileUtils.generateUniqueFileName(new File(LEGACY_CUSTOM_GUIS_DIR.getPath() + "_old"), true);
                org.apache.commons.io.FileUtils.moveDirectory(LEGACY_CUSTOM_GUIS_DIR, renamedDir);
            } catch (Exception var13) {
                LOGGER.error("[FANCYMENU] Failed to rename old FMv2 'customguis' directory!");
                var13.printStackTrace();
            }
        }
        return guis;
    }
}