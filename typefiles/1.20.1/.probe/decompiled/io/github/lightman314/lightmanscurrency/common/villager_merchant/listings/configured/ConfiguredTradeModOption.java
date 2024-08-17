package io.github.lightman314.lightmanscurrency.common.villager_merchant.listings.configured;

import io.github.lightman314.lightmanscurrency.api.config.options.ConfigOption;
import io.github.lightman314.lightmanscurrency.api.config.options.basic.StringOption;
import io.github.lightman314.lightmanscurrency.api.config.options.parsing.ConfigParser;
import io.github.lightman314.lightmanscurrency.api.config.options.parsing.ConfigParsingException;
import io.github.lightman314.lightmanscurrency.common.villager_merchant.listings.mods.ConfiguredTradeMod;
import javax.annotation.Nonnull;
import net.minecraftforge.common.util.NonNullSupplier;

public class ConfiguredTradeModOption extends ConfigOption<ConfiguredTradeMod> {

    public static final ConfigParser<ConfiguredTradeMod> PARSER = new ConfiguredTradeModOption.Parser();

    private ConfiguredTradeModOption(@Nonnull NonNullSupplier<ConfiguredTradeMod> defaultValue) {
        super(defaultValue);
    }

    public static ConfiguredTradeModOption create(@Nonnull NonNullSupplier<ConfiguredTradeMod> defaultValue) {
        return new ConfiguredTradeModOption(defaultValue);
    }

    @Nonnull
    @Override
    protected ConfigParser<ConfiguredTradeMod> getParser() {
        return PARSER;
    }

    private static class Parser implements ConfigParser<ConfiguredTradeMod> {

        @Nonnull
        public ConfiguredTradeMod tryParse(@Nonnull String cleanLine) throws ConfigParsingException {
            return ConfiguredTradeMod.tryParse(StringOption.PARSER.tryParse(cleanLine), true);
        }

        @Nonnull
        public String write(@Nonnull ConfiguredTradeMod value) {
            StringBuilder builder = new StringBuilder();
            value.write(builder);
            return StringOption.PARSER.write(builder.toString());
        }
    }
}