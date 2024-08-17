package fuzs.puzzleslib.impl.chat;

import com.google.common.collect.Lists;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Map.Entry;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.FormattedText;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.util.FormattedCharSequence;
import net.minecraft.util.FormattedCharSink;
import net.minecraft.util.Unit;
import org.jetbrains.annotations.Nullable;

public class FormattedContentSink implements FormattedText.StyledContentConsumer<Unit>, FormattedCharSink {

    private final List<Entry<StringBuilder, Style>> builders = Lists.newArrayList(new Entry[] { Map.entry(new StringBuilder(), Style.EMPTY) });

    @Nullable
    private Component component;

    public FormattedContentSink(FormattedText formattedText) {
        if (formattedText instanceof Component) {
            this.component = ((Component) formattedText).copy();
        } else {
            formattedText.visit(this, Style.EMPTY);
        }
    }

    public FormattedContentSink(FormattedCharSequence formattedCharSequence) {
        formattedCharSequence.accept(this);
    }

    @Override
    public Optional<Unit> accept(Style style, String string) {
        Entry<StringBuilder, Style> entry = (Entry<StringBuilder, Style>) this.builders.get(this.builders.size() - 1);
        if (entry.getValue() == style) {
            ((StringBuilder) entry.getKey()).append(string);
        } else {
            this.builders.add(Map.entry(new StringBuilder(string), style));
        }
        return Optional.empty();
    }

    @Override
    public boolean accept(int width, Style style, int codePoint) {
        this.accept(style, String.valueOf(Character.toChars(codePoint)));
        return true;
    }

    public Component getComponent() {
        if (this.component == null) {
            MutableComponent component = Component.literal(((StringBuilder) ((Entry) this.builders.get(0)).getKey()).toString()).setStyle((Style) ((Entry) this.builders.get(0)).getValue());
            for (int i = 1; i < this.builders.size(); i++) {
                Entry<StringBuilder, Style> entry = (Entry<StringBuilder, Style>) this.builders.get(i);
                component.append(Component.literal(((StringBuilder) entry.getKey()).toString()).setStyle((Style) entry.getValue()));
            }
            this.component = component;
        }
        return this.component;
    }
}