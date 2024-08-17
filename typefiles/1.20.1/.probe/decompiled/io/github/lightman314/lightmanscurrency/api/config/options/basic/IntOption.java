package io.github.lightman314.lightmanscurrency.api.config.options.basic;

import io.github.lightman314.lightmanscurrency.api.config.options.ConfigOption;
import io.github.lightman314.lightmanscurrency.api.config.options.parsing.ConfigParser;
import io.github.lightman314.lightmanscurrency.api.config.options.parsing.ConfigParsingException;
import io.github.lightman314.lightmanscurrency.util.MathUtil;
import javax.annotation.Nonnull;
import net.minecraftforge.common.util.NonNullSupplier;
import org.jetbrains.annotations.Nullable;

public class IntOption extends ConfigOption<Integer> {

    private final int lowerLimit;

    private final int upperLimit;

    private final ConfigParser<Integer> parser;

    public static ConfigParser<Integer> makeParser(int lowerLimit, int upperLimit) {
        return new IntOption.Parser(lowerLimit, upperLimit);
    }

    protected IntOption(@Nonnull NonNullSupplier<Integer> defaultValue, int lowerLimit, int upperLimit) {
        super(defaultValue);
        this.lowerLimit = lowerLimit;
        this.upperLimit = upperLimit;
        this.parser = makeParser(lowerLimit, upperLimit);
    }

    @Nonnull
    @Override
    protected ConfigParser<Integer> getParser() {
        return this.parser;
    }

    @Nullable
    @Override
    protected String bonusComment() {
        return "Range: " + this.lowerLimit + " -> " + this.upperLimit;
    }

    public static IntOption create(int defaultValue) {
        return new IntOption(() -> defaultValue, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    public static IntOption create(int defaultValue, int lowerLimit) {
        return new IntOption(() -> defaultValue, lowerLimit, Integer.MAX_VALUE);
    }

    public static IntOption create(int defaultValue, int lowerLimit, int upperLimit) {
        return new IntOption(() -> defaultValue, lowerLimit, upperLimit);
    }

    public static IntOption create(@Nonnull NonNullSupplier<Integer> defaultValue) {
        return new IntOption(defaultValue, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    public static IntOption create(@Nonnull NonNullSupplier<Integer> defaultValue, int lowerLimit) {
        return new IntOption(defaultValue, lowerLimit, Integer.MAX_VALUE);
    }

    public static IntOption create(@Nonnull NonNullSupplier<Integer> defaultValue, int lowerLimit, int upperLimit) {
        return new IntOption(defaultValue, lowerLimit, upperLimit);
    }

    private static class Parser implements ConfigParser<Integer> {

        private final int lowerLimit;

        private final int upperLimit;

        private Parser(int lowerLimit, int upperLimit) {
            this.lowerLimit = lowerLimit;
            this.upperLimit = upperLimit;
        }

        @Nonnull
        public Integer tryParse(@Nonnull String cleanLine) throws ConfigParsingException {
            try {
                return MathUtil.clamp(Integer.parseInt(cleanLine), this.lowerLimit, this.upperLimit);
            } catch (NumberFormatException var3) {
                throw new ConfigParsingException("Error parsing integer!", var3);
            }
        }

        @Nonnull
        public String write(@Nonnull Integer value) {
            return value.toString();
        }
    }
}