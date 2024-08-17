package io.github.lightman314.lightmanscurrency.common.notifications.data;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import java.util.List;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;

@Deprecated(since = "2.2.1.4")
public class ItemWriteData {

    public final boolean isEmpty;

    public final Component itemName;

    public final int count;

    public ItemWriteData(ItemStack item) {
        this(item, "");
    }

    public ItemWriteData(ItemStack item, String customName) {
        this.isEmpty = item.isEmpty();
        if (this.isEmpty) {
            this.itemName = Component.empty();
            this.count = 0;
        } else {
            if (customName.isEmpty()) {
                this.itemName = item.getHoverName();
            } else {
                this.itemName = EasyText.literal(customName);
            }
            this.count = item.getCount();
        }
    }

    public ItemWriteData(CompoundTag compound) {
        this.isEmpty = compound.contains("Empty");
        if (this.isEmpty) {
            this.itemName = EasyText.empty();
            this.count = 0;
        } else {
            this.itemName = Component.Serializer.fromJson(compound.getString("Name"));
            this.count = compound.getInt("Count");
        }
    }

    public CompoundTag save() {
        CompoundTag compound = new CompoundTag();
        if (this.isEmpty) {
            compound.putBoolean("Empty", true);
            return compound;
        } else {
            compound.putString("Name", Component.Serializer.toJson(this.itemName));
            compound.putInt("Count", this.count);
            return compound;
        }
    }

    public Component format() {
        return LCText.NOTIFICATION_ITEM_FORMAT.get(this.count, this.itemName);
    }

    public Component formatWith(Component other) {
        return LCText.GUI_AND.get(this.format(), other);
    }

    public Component formatWith(ItemWriteData other) {
        return LCText.GUI_AND.get(this.format(), other.format());
    }

    public static Component getItemNames(ItemWriteData item1, ItemWriteData item2) {
        if (item1.isEmpty && item2.isEmpty) {
            return Component.literal("ERROR");
        } else if (item2.isEmpty) {
            return item1.format();
        } else {
            return item1.isEmpty ? item2.format() : item1.formatWith(item2);
        }
    }

    public static Component getItemNames(List<ItemWriteData> items) {
        Component result = null;
        for (ItemWriteData item : items) {
            if (result != null) {
                result = item.formatWith(result);
            } else {
                result = item.format();
            }
        }
        return (Component) (result == null ? Component.literal("ERROR") : result);
    }
}