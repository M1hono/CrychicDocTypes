package de.keksuccino.fancymenu.mixin.mixins.common.client;

import java.util.function.BiFunction;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.Component;
import net.minecraft.util.FormattedCharSequence;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;
import org.spongepowered.asm.mixin.gen.Invoker;

@Mixin({ EditBox.class })
public interface IMixinEditBox {

    @Accessor("isEditable")
    boolean getIsEditableFancyMenu();

    @Accessor("displayPos")
    int getDisplayPosFancyMenu();

    @Accessor("displayPos")
    void setDisplayPosFancyMenu(int var1);

    @Accessor("bordered")
    boolean getBorderedFancyMenu();

    @Accessor("maxLength")
    int getMaxLengthFancyMenu();

    @Accessor("formatter")
    BiFunction<String, Integer, FormattedCharSequence> getFormatterFancyMenu();

    @Accessor("shiftPressed")
    void setShiftPressedFancyMenu(boolean var1);

    @Accessor("highlightPos")
    int getHighlightPosFancyMenu();

    @Invoker("deleteText")
    void invokeDeleteTextFancyMenu(int var1);

    @Accessor("textColor")
    int getTextColorFancyMenu();

    @Accessor("textColorUneditable")
    int getTextColorUneditableFancyMenu();

    @Accessor("frame")
    int getFrameFancyMenu();

    @Accessor("hint")
    Component getHintFancyMenu();

    @Accessor("suggestion")
    String getSuggestionFancyMenu();

    @Invoker("renderHighlight")
    void invokeRenderHighlightFancyMenu(GuiGraphics var1, int var2, int var3, int var4, int var5);
}