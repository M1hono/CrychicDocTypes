package de.keksuccino.fancymenu.customization.element.elements.shape;

import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.util.rendering.DrawableColor;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.util.FastColor;
import net.minecraft.util.Mth;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ShapeElement extends AbstractElement {

    private static final Logger LOGGER = LogManager.getLogger();

    public ShapeElement.Shape shape = ShapeElement.Shape.RECTANGLE;

    public DrawableColor color = DrawableColor.of(255, 255, 255);

    public ShapeElement(@NotNull ElementBuilder<?, ?> builder) {
        super(builder);
    }

    @Override
    public void render(@NotNull GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        if (this.shouldRender()) {
            if (this.shape != null && this.color != null) {
                int alpha = this.color.getColor().getAlpha();
                int i = Mth.ceil(this.opacity * 255.0F);
                if (i < alpha) {
                    alpha = i;
                }
                int c = FastColor.ARGB32.color(alpha, this.color.getColor().getRed(), this.color.getColor().getGreen(), this.color.getColor().getBlue());
                if (this.shape == ShapeElement.Shape.RECTANGLE) {
                    graphics.fill(this.getAbsoluteX(), this.getAbsoluteY(), this.getAbsoluteX() + this.getAbsoluteWidth(), this.getAbsoluteY() + this.getAbsoluteHeight(), c);
                }
            }
            graphics.setColor(1.0F, 1.0F, 1.0F, 1.0F);
        }
    }

    public static enum Shape {

        RECTANGLE("rectangle");

        public final String name;

        private Shape(String name) {
            this.name = name;
        }

        @Nullable
        public static ShapeElement.Shape getByName(String name) {
            for (ShapeElement.Shape s : values()) {
                if (s.name.equals(name)) {
                    return s;
                }
            }
            return null;
        }
    }
}