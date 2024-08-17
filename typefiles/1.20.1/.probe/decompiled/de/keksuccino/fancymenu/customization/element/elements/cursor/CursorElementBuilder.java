package de.keksuccino.fancymenu.customization.element.elements.cursor;

import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.customization.element.SerializedElement;
import de.keksuccino.fancymenu.customization.layout.editor.LayoutEditorScreen;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.konkrete.math.MathUtils;
import net.minecraft.network.chat.Component;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class CursorElementBuilder extends ElementBuilder<CursorElement, CursorEditorElement> {

    private static final Logger LOGGER = LogManager.getLogger();

    public CursorElementBuilder() {
        super("cursor");
    }

    @NotNull
    public CursorElement buildDefaultInstance() {
        CursorElement i = new CursorElement(this);
        i.baseWidth = 100;
        i.baseHeight = 100;
        return i;
    }

    public CursorElement deserializeElement(@NotNull SerializedElement serialized) {
        CursorElement element = this.buildDefaultInstance();
        element.textureSupplier = deserializeImageResourceSupplier(serialized.getValue("source"));
        String hotspotX = serialized.getValue("hotspot_x");
        if (hotspotX != null && MathUtils.isInteger(hotspotX)) {
            element.hotspotX = Integer.parseInt(hotspotX);
        }
        String hotspotY = serialized.getValue("hotspot_y");
        if (hotspotY != null && MathUtils.isInteger(hotspotY)) {
            element.hotspotY = Integer.parseInt(hotspotY);
        }
        String editorPreviewMode = serialized.getValue("editor_preview_mode");
        if (editorPreviewMode != null) {
            if (editorPreviewMode.equals("true")) {
                element.editorPreviewMode = true;
            }
            if (editorPreviewMode.equals("false")) {
                element.editorPreviewMode = false;
            }
        }
        return element;
    }

    protected SerializedElement serializeElement(@NotNull CursorElement element, @NotNull SerializedElement serializeTo) {
        if (element.textureSupplier != null) {
            serializeTo.putProperty("source", element.textureSupplier.getSourceWithPrefix());
        }
        serializeTo.putProperty("hotspot_x", element.hotspotX + "");
        serializeTo.putProperty("hotspot_y", element.hotspotY + "");
        serializeTo.putProperty("editor_preview_mode", element.editorPreviewMode + "");
        return serializeTo;
    }

    @NotNull
    public CursorEditorElement wrapIntoEditorElement(@NotNull CursorElement element, @NotNull LayoutEditorScreen editor) {
        return new CursorEditorElement(element, editor);
    }

    @NotNull
    @Override
    public Component getDisplayName(@Nullable AbstractElement element) {
        return Component.translatable("fancymenu.customization.elements.cursor");
    }

    @Nullable
    @Override
    public Component[] getDescription(@Nullable AbstractElement element) {
        return LocalizationUtils.splitLocalizedLines("fancymenu.customization.elements.cursor.desc");
    }
}