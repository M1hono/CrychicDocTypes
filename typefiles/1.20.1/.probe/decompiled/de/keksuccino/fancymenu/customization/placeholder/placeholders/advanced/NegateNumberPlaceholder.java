package de.keksuccino.fancymenu.customization.placeholder.placeholders.advanced;

import de.keksuccino.fancymenu.customization.placeholder.DeserializedPlaceholderString;
import de.keksuccino.fancymenu.customization.placeholder.Placeholder;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.MathUtils;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import net.minecraft.client.resources.language.I18n;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class NegateNumberPlaceholder extends Placeholder {

    private static final Logger LOGGER = LogManager.getLogger();

    public NegateNumberPlaceholder() {
        super("negnum");
    }

    @Override
    public String getReplacementFor(DeserializedPlaceholderString dps) {
        String num = (String) dps.values.get("num");
        if (num != null) {
            try {
                if (MathUtils.isDouble(num)) {
                    double numD = Double.parseDouble(num);
                    if (numD <= 0.0) {
                        return num;
                    }
                    double negated = 0.0 - numD;
                    return negated + "";
                }
                if (MathUtils.isLong(num)) {
                    long numL = Long.parseLong(num);
                    if (numL <= 0L) {
                        return num;
                    }
                    long negated = 0L - numL;
                    return negated + "";
                }
            } catch (Exception var7) {
                var7.printStackTrace();
            }
        }
        LOGGER.error("[FANCYMENU] Failed to parse 'Negate Number' placeholder: " + dps.placeholderString);
        return null;
    }

    @Nullable
    @Override
    public List<String> getValueNames() {
        List<String> l = new ArrayList();
        l.add("num");
        return l;
    }

    @NotNull
    @Override
    public String getDisplayName() {
        return I18n.get("fancymenu.placeholders.negate_number");
    }

    @Override
    public List<String> getDescription() {
        return Arrays.asList(LocalizationUtils.splitLocalizedStringLines("fancymenu.placeholders.negate_number.desc"));
    }

    @Override
    public String getCategory() {
        return I18n.get("fancymenu.fancymenu.editor.dynamicvariabletextfield.categories.advanced");
    }

    @NotNull
    @Override
    public DeserializedPlaceholderString getDefaultPlaceholderString() {
        HashMap<String, String> values = new HashMap();
        values.put("num", "10");
        return new DeserializedPlaceholderString(this.getIdentifier(), values, "");
    }
}