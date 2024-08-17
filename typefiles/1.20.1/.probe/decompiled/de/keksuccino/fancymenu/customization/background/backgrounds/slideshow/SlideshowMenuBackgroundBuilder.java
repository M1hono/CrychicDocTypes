package de.keksuccino.fancymenu.customization.background.backgrounds.slideshow;

import de.keksuccino.fancymenu.customization.background.MenuBackgroundBuilder;
import de.keksuccino.fancymenu.customization.background.SerializedMenuBackground;
import de.keksuccino.fancymenu.customization.layout.editor.ChooseSlideshowScreen;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import java.util.function.Consumer;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class SlideshowMenuBackgroundBuilder extends MenuBackgroundBuilder<SlideshowMenuBackground> {

    public SlideshowMenuBackgroundBuilder() {
        super("slideshow");
    }

    public void buildNewOrEditInstance(Screen currentScreen, @Nullable SlideshowMenuBackground backgroundToEdit, @NotNull Consumer<SlideshowMenuBackground> backgroundConsumer) {
        ChooseSlideshowScreen s = new ChooseSlideshowScreen(backgroundToEdit != null ? backgroundToEdit.slideshowName : null, call -> {
            if (call != null) {
                if (backgroundToEdit != null) {
                    backgroundToEdit.slideshowName = call;
                    backgroundConsumer.accept(backgroundToEdit);
                } else {
                    SlideshowMenuBackground b = new SlideshowMenuBackground(this);
                    b.slideshowName = call;
                    backgroundConsumer.accept(b);
                }
            } else {
                backgroundConsumer.accept(backgroundToEdit);
            }
            Minecraft.getInstance().setScreen(currentScreen);
        });
        Minecraft.getInstance().setScreen(s);
    }

    public SlideshowMenuBackground deserializeBackground(SerializedMenuBackground serializedMenuBackground) {
        SlideshowMenuBackground b = new SlideshowMenuBackground(this);
        b.slideshowName = serializedMenuBackground.getValue("slideshow_name");
        return b;
    }

    public SerializedMenuBackground serializedBackground(SlideshowMenuBackground background) {
        SerializedMenuBackground serialized = new SerializedMenuBackground();
        if (background.slideshowName != null) {
            serialized.putProperty("slideshow_name", background.slideshowName);
        }
        return serialized;
    }

    @NotNull
    @Override
    public Component getDisplayName() {
        return Component.translatable("fancymenu.background.slideshow");
    }

    @Nullable
    @Override
    public Component[] getDescription() {
        return LocalizationUtils.splitLocalizedLines("fancymenu.background.slideshow.desc");
    }
}