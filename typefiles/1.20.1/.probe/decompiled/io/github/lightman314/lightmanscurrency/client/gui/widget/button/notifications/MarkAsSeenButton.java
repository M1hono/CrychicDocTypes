package io.github.lightman314.lightmanscurrency.client.gui.widget.button.notifications;

import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.TextRenderUtil;
import java.util.function.Consumer;
import net.minecraft.network.chat.Component;

public class MarkAsSeenButton extends EasyTextButton {

    public static final int HEIGHT = 11;

    public MarkAsSeenButton(int rightPos, int yPos, Component text, Consumer<EasyButton> press) {
        super(rightPos - getWidth(text), yPos, getWidth(text), 11, text, press);
    }

    private static int getWidth(Component text) {
        return TextRenderUtil.getFont().width(text) + 4;
    }
}