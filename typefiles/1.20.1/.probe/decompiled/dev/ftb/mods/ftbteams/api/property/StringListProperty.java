package dev.ftb.mods.ftbteams.api.property;

import dev.ftb.mods.ftblibrary.config.ConfigGroup;
import dev.ftb.mods.ftblibrary.config.StringConfig;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import net.minecraft.nbt.ListTag;
import net.minecraft.nbt.StringTag;
import net.minecraft.nbt.Tag;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;

public class StringListProperty extends TeamProperty<List<String>> {

    public StringListProperty(ResourceLocation id, Supplier<List<String>> def) {
        super(id, def);
    }

    public StringListProperty(ResourceLocation id, List<String> def) {
        this(id, (Supplier<List<String>>) (() -> def));
    }

    static StringListProperty fromNetwork(ResourceLocation id, FriendlyByteBuf buf) {
        return new StringListProperty(id, buf.readList(b -> b.readUtf(32767)));
    }

    @Override
    public TeamPropertyType<List<String>> getType() {
        return TeamPropertyType.STRING_LIST;
    }

    @Override
    public Optional<List<String>> fromString(String string) {
        return string.length() > 2 && string.startsWith("[") && string.endsWith("]") ? Optional.of(new ArrayList(Arrays.asList(string.substring(1, string.length() - 1).split("\t")))) : Optional.empty();
    }

    @Override
    public void write(FriendlyByteBuf buf) {
        buf.writeCollection((Collection) this.getDefaultValue(), FriendlyByteBuf::m_130070_);
    }

    public String toString(List<String> value) {
        return "[" + String.join("\t", value) + "]";
    }

    @Override
    public void config(ConfigGroup config, TeamPropertyValue<List<String>> value) {
        config.addList(this.id.getPath(), value.value, new StringConfig(), "");
    }

    public Tag toNBT(List<String> value) {
        ListTag res = new ListTag();
        value.forEach(s -> res.add(StringTag.valueOf(s)));
        return res;
    }

    @Override
    public Optional<List<String>> fromNBT(Tag tag) {
        List<String> res = new ArrayList();
        if (tag instanceof ListTag l) {
            l.forEach(t -> res.add(t.getAsString()));
            return Optional.of(res);
        } else {
            return Optional.empty();
        }
    }
}