package snownee.jade.impl.config.entry;

import net.minecraft.resources.ResourceLocation;
import snownee.jade.gui.config.OptionsList;
import snownee.jade.gui.config.value.OptionValue;
import snownee.jade.impl.config.PluginConfig;

public class BooleanConfigEntry extends ConfigEntry<Boolean> {

    public BooleanConfigEntry(ResourceLocation id, boolean defaultValue) {
        super(id, defaultValue);
    }

    @Override
    public boolean isValidValue(Object value) {
        return value.getClass() == Boolean.class;
    }

    @Override
    public OptionValue<?> createUI(OptionsList options, String optionName) {
        return options.choices(optionName, this.getValue(), b -> PluginConfig.INSTANCE.set(this.id, b));
    }
}