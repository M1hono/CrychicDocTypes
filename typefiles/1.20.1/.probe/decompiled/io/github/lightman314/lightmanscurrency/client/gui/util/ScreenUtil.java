package io.github.lightman314.lightmanscurrency.client.gui.util;

import io.github.lightman314.lightmanscurrency.client.gui.easy.interfaces.IEasyScreen;
import io.github.lightman314.lightmanscurrency.client.util.ScreenPosition;

public class ScreenUtil {

    public static boolean isMouseOver(int mouseX, int mouseY, int startX, int startY, int width, int height) {
        return mouseX >= startX && mouseX < startX + width && mouseY >= startY && mouseY < startY + height;
    }

    public static boolean isMouseOver(int mouseX, int mouseY, ScreenPosition position, int width, int height) {
        return isMouseOver(mouseX, mouseY, position.x, position.y, width, height);
    }

    public static boolean isMouseOver(int mouseX, int mouseY, IEasyScreen screen) {
        return isMouseOver(mouseX, mouseY, screen.getCorner(), screen.getXSize(), screen.getYSize());
    }

    public static boolean isMouseOver(double mouseX, double mouseY, int startX, int startY, int width, int height) {
        return mouseX >= (double) startX && mouseX < (double) (startX + width) && mouseY >= (double) startY && mouseY < (double) (startY + height);
    }

    public static boolean isMouseOver(double mouseX, double mouseY, ScreenPosition position, int width, int height) {
        return isMouseOver(mouseX, mouseY, position.x, position.y, width, height);
    }

    public static boolean isMouseOver(double mouseX, double mouseY, IEasyScreen screen) {
        return isMouseOver(mouseX, mouseY, screen.getCorner(), screen.getXSize(), screen.getYSize());
    }
}