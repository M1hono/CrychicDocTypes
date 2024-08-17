package mezz.jei.common.util;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import net.minecraft.ChatFormatting;
import net.minecraft.client.Minecraft;
import net.minecraft.client.StringSplitter;
import net.minecraft.client.gui.Font;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.FormattedText;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;

public final class StringUtil {

    private StringUtil() {
    }

    public static Component stripStyling(Component textComponent) {
        MutableComponent text = textComponent.plainCopy();
        for (Component sibling : textComponent.getSiblings()) {
            text.append(stripStyling(sibling));
        }
        return text;
    }

    public static String removeChatFormatting(String string) {
        String withoutFormattingCodes = ChatFormatting.stripFormatting(string);
        return withoutFormattingCodes == null ? "" : withoutFormattingCodes;
    }

    public static Component truncateStringToWidth(Component text, int width, Font fontRenderer) {
        int ellipsisWidth = fontRenderer.width("...");
        FormattedText truncatedText = fontRenderer.substrByWidth(text, width - ellipsisWidth);
        String truncatedTextString = truncatedText.getString();
        return Component.literal(truncatedTextString + "...");
    }

    public static List<FormattedText> splitLines(List<FormattedText> lines, int width) {
        if (width <= 0) {
            return List.copyOf(lines);
        } else {
            Minecraft minecraft = Minecraft.getInstance();
            Font font = minecraft.font;
            StringSplitter splitter = font.getSplitter();
            return lines.stream().flatMap(text -> splitter.splitLines(text, width, Style.EMPTY).stream()).toList();
        }
    }

    public static List<FormattedText> expandNewlines(Component... descriptionComponents) {
        List<FormattedText> descriptionLinesExpanded = new ArrayList();
        for (Component descriptionLine : descriptionComponents) {
            ExpandNewLineTextAcceptor newLineTextAcceptor = new ExpandNewLineTextAcceptor();
            descriptionLine.visit(newLineTextAcceptor, Style.EMPTY);
            newLineTextAcceptor.addLinesTo(descriptionLinesExpanded);
        }
        return descriptionLinesExpanded;
    }

    public static String intsToString(Collection<Integer> indexes) {
        return (String) indexes.stream().sorted().map(i -> Integer.toString(i)).collect(Collectors.joining(", "));
    }
}