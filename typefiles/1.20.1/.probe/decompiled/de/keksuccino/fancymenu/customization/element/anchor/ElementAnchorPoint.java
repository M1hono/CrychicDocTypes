package de.keksuccino.fancymenu.customization.element.anchor;

import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.editor.AbstractEditorElement;
import de.keksuccino.fancymenu.customization.layout.editor.LayoutEditorScreen;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;

public class ElementAnchorPoint {

    private final String name;

    public ElementAnchorPoint(@NotNull String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public Component getDisplayName() {
        return Component.translatable("fancymenu.element.anchor_point." + this.getName().replace("-", "_"));
    }

    public int getElementPositionX(@NotNull AbstractElement element) {
        return this.getOriginX(element) + element.posOffsetX;
    }

    public int getElementPositionY(@NotNull AbstractElement element) {
        return this.getOriginY(element) + element.posOffsetY;
    }

    public int getOriginX(@NotNull AbstractElement element) {
        return 0;
    }

    public int getOriginY(@NotNull AbstractElement element) {
        return 0;
    }

    public int getDefaultElementBaseX(@NotNull AbstractElement element) {
        return 0;
    }

    public int getDefaultElementBaseY(@NotNull AbstractElement element) {
        return 0;
    }

    public int getResizePositionOffsetX(@NotNull AbstractElement element, int mouseTravelX, @NotNull AbstractEditorElement.ResizeGrabberType resizeGrabberType) {
        if (resizeGrabberType == AbstractEditorElement.ResizeGrabberType.RIGHT) {
            return 0;
        } else {
            return resizeGrabberType == AbstractEditorElement.ResizeGrabberType.LEFT ? mouseTravelX : 0;
        }
    }

    public int getResizePositionOffsetY(@NotNull AbstractElement element, int mouseTravelY, @NotNull AbstractEditorElement.ResizeGrabberType resizeGrabberType) {
        if (resizeGrabberType == AbstractEditorElement.ResizeGrabberType.TOP) {
            return mouseTravelY;
        } else {
            return resizeGrabberType == AbstractEditorElement.ResizeGrabberType.BOTTOM ? 0 : 0;
        }
    }

    protected static int getScreenWidth() {
        return AbstractElement.getScreenWidth();
    }

    protected static int getScreenHeight() {
        return AbstractElement.getScreenHeight();
    }

    protected static boolean isEditor() {
        return Minecraft.getInstance().screen instanceof LayoutEditorScreen;
    }

    public static class AnchorBottomCenter extends ElementAnchorPoint {

        AnchorBottomCenter() {
            super("bottom-centered");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth() / 2;
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight();
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -(element.getAbsoluteWidth() / 2);
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -element.getAbsoluteHeight();
        }
    }

    public static class AnchorBottomLeft extends ElementAnchorPoint {

        AnchorBottomLeft() {
            super("bottom-left");
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight();
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -element.getAbsoluteHeight();
        }
    }

    public static class AnchorBottomRight extends ElementAnchorPoint {

        AnchorBottomRight() {
            super("bottom-right");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth();
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight();
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -element.getAbsoluteWidth();
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -element.getAbsoluteHeight();
        }
    }

    public static class AnchorElement extends ElementAnchorPoint {

        AnchorElement() {
            super("element");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            AbstractElement anchor = element.getElementAnchorPointParent();
            return anchor != null ? anchor.getChildElementAnchorPointX() : super.getOriginX(element);
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            AbstractElement anchor = element.getElementAnchorPointParent();
            return anchor != null ? anchor.getChildElementAnchorPointY() : super.getOriginY(element);
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            AbstractElement anchor = element.getElementAnchorPointParent();
            return anchor != null ? anchor.getAbsoluteHeight() : super.getDefaultElementBaseY(element);
        }
    }

    public static class AnchorMidCenter extends ElementAnchorPoint {

        AnchorMidCenter() {
            super("mid-centered");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth() / 2;
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight() / 2;
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -(element.getAbsoluteWidth() / 2);
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -(element.getAbsoluteHeight() / 2);
        }
    }

    public static class AnchorMidLeft extends ElementAnchorPoint {

        AnchorMidLeft() {
            super("mid-left");
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight() / 2;
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -(element.getAbsoluteHeight() / 2);
        }
    }

    public static class AnchorMidRight extends ElementAnchorPoint {

        AnchorMidRight() {
            super("mid-right");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth();
        }

        @Override
        public int getOriginY(@NotNull AbstractElement element) {
            return getScreenHeight() / 2;
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -element.getAbsoluteWidth();
        }

        @Override
        public int getDefaultElementBaseY(@NotNull AbstractElement element) {
            return -(element.getAbsoluteHeight() / 2);
        }
    }

    public static class AnchorTopCenter extends ElementAnchorPoint {

        AnchorTopCenter() {
            super("top-centered");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth() / 2;
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -(element.getAbsoluteWidth() / 2);
        }
    }

    public static class AnchorTopLeft extends ElementAnchorPoint {

        AnchorTopLeft() {
            super("top-left");
        }
    }

    public static class AnchorTopRight extends ElementAnchorPoint {

        AnchorTopRight() {
            super("top-right");
        }

        @Override
        public int getOriginX(@NotNull AbstractElement element) {
            return getScreenWidth();
        }

        @Override
        public int getDefaultElementBaseX(@NotNull AbstractElement element) {
            return -element.getAbsoluteWidth();
        }
    }

    public static class AnchorVanilla extends ElementAnchorPoint {

        AnchorVanilla() {
            super("vanilla");
        }
    }
}