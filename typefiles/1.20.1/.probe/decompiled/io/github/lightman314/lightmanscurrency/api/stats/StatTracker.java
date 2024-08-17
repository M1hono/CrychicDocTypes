package io.github.lightman314.lightmanscurrency.api.stats;

import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.common.util.IClientTracker;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;

public final class StatTracker implements IClientTracker {

    private final Runnable onChange;

    private final IClientTracker parent;

    private final Map<String, StatType.Instance<?, ?>> stats = new HashMap();

    @Override
    public boolean isClient() {
        return this.parent.isClient();
    }

    public StatTracker(@Nonnull Runnable onChange, @Nonnull IClientTracker parent) {
        this.onChange = onChange;
        this.parent = parent;
    }

    public <A, B> StatType.Instance<A, B> addStat(@Nonnull String key, @Nonnull StatType<A, B> type) {
        return this.addStat(key, type.create());
    }

    public <A, B> StatType.Instance<A, B> addStat(@Nonnull StatKey<A, B> key) {
        return this.addStat(key.key, key.type);
    }

    public <A, B> StatType.Instance<A, B> addStat(@Nonnull String key, @Nonnull StatType.Instance<A, B> stat) {
        this.stats.put(key, stat);
        stat.setParent(this);
        return stat;
    }

    public void clear() {
        this.stats.forEach((key, stat) -> stat.clear());
        this.setChanged();
    }

    public void setChanged() {
        this.onChange.run();
    }

    @Nonnull
    public CompoundTag save() {
        CompoundTag tag = new CompoundTag();
        this.stats.forEach((key, stat) -> tag.put(key, stat.save()));
        return tag;
    }

    public void load(@Nonnull CompoundTag tag) {
        this.stats.forEach((keyx, stat) -> stat.clear());
        for (String key : tag.getAllKeys()) {
            try {
                CompoundTag entry = tag.getCompound(key);
                ResourceLocation typeID = new ResourceLocation(entry.getString("Type"));
                StatType.Instance<?, ?> instance = this.getStat(key);
                if (instance != null && instance.getType().getID().equals(typeID)) {
                    instance.load(entry);
                } else {
                    StatType<?, ?> type = StatType.getID(typeID);
                    if (type == null) {
                        throw new RuntimeException(typeID + " is not a registered StatType!");
                    }
                    instance = type.create();
                    instance.load(entry);
                    this.addStat(key, instance);
                }
            } catch (Throwable var8) {
                LightmansCurrency.LogError("Error loading stat!", var8);
            }
        }
    }

    public StatType.Instance<?, ?> getStat(@Nonnull String key) {
        return (StatType.Instance<?, ?>) this.stats.get(key);
    }

    public <T> T getStat(@Nonnull StatKey<T, ?> key, @Nonnull T defaultValue) {
        StatType.Instance<?, ?> instance = this.getStat(key.key);
        if (instance == null) {
            instance = this.addStat(key);
        }
        try {
            return (T) instance.get();
        } catch (Throwable var5) {
            LightmansCurrency.LogError("Stat with key " + key + " is a different type than expected. Could not get!");
            return defaultValue;
        }
    }

    public <T> void incrementStat(@Nonnull StatKey<?, T> key, @Nonnull T addValue) {
        StatType.Instance<?, ?> instance = this.getStat(key.key);
        if (instance == null) {
            instance = this.addStat(key);
        }
        try {
            ((StatType.Instance<?, T>) instance).add(addValue);
        } catch (Throwable var5) {
            LightmansCurrency.LogError("Stat with key " + key + " is a different type than expected. Could not increment!");
        }
    }

    public List<MutableComponent> getDisplayLines() {
        List<MutableComponent> result = new ArrayList();
        this.stats.forEach((key, stat) -> result.add(stat.getInfoText(key)));
        return result;
    }
}