package io.github.lightman314.lightmanscurrency.common.notifications.categories;

import io.github.lightman314.lightmanscurrency.api.notifications.NotificationCategory;
import io.github.lightman314.lightmanscurrency.api.notifications.NotificationCategoryType;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.common.core.ModBlocks;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;

public class TaxEntryCategory extends NotificationCategory {

    public static final NotificationCategoryType<TaxEntryCategory> TYPE = new NotificationCategoryType<>(new ResourceLocation("lightmanscurrency", "tax_entry"), TaxEntryCategory::new);

    private final long entryID;

    private final MutableComponent entryName;

    public MutableComponent getEntryName() {
        return this.entryName;
    }

    public TaxEntryCategory(MutableComponent entryName, long entryID) {
        this.entryID = entryID;
        this.entryName = entryName;
    }

    public TaxEntryCategory(CompoundTag tag) {
        if (tag.contains("EntryName")) {
            this.entryName = Component.Serializer.fromJson(tag.getString("EntryName"));
        } else {
            this.entryName = ModBlocks.TAX_COLLECTOR.get().getName();
        }
        if (tag.contains("TraderID")) {
            this.entryID = tag.getLong("TraderID");
        } else {
            this.entryID = -1L;
        }
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconData.of(ModBlocks.TAX_COLLECTOR);
    }

    @Nonnull
    @Override
    public MutableComponent getName() {
        return this.getEntryName();
    }

    @Nonnull
    @Override
    protected NotificationCategoryType<TaxEntryCategory> getType() {
        return TYPE;
    }

    @Override
    public boolean matches(NotificationCategory other) {
        return other instanceof TaxEntryCategory otherTax ? otherTax.entryID == this.entryID : false;
    }

    @Override
    protected void saveAdditional(CompoundTag compound) {
        compound.putString("EntryName", Component.Serializer.toJson(this.entryName));
        compound.putLong("EntryID", this.entryID);
    }
}