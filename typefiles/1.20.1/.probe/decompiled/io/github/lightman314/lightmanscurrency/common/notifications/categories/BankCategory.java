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
import org.jetbrains.annotations.NotNull;

public class BankCategory extends NotificationCategory {

    public static final NotificationCategoryType<BankCategory> TYPE = new NotificationCategoryType<>(new ResourceLocation("lightmanscurrency", "bank"), BankCategory::new);

    private final MutableComponent name;

    public BankCategory(MutableComponent name) {
        this.name = name;
    }

    public BankCategory(CompoundTag compound) {
        this.name = Component.Serializer.fromJson(compound.getString("Name"));
    }

    @Nonnull
    @NotNull
    @Override
    public IconData getIcon() {
        return IconData.of(ModBlocks.ATM);
    }

    @Nonnull
    @Override
    public MutableComponent getName() {
        return this.name;
    }

    @Nonnull
    @Override
    protected NotificationCategoryType<BankCategory> getType() {
        return TYPE;
    }

    @Override
    public boolean matches(NotificationCategory other) {
        return other instanceof BankCategory bc ? bc.name.getString().equals(this.name.getString()) : false;
    }

    @Override
    protected void saveAdditional(CompoundTag compound) {
        compound.putString("Name", Component.Serializer.toJson(this.name));
    }
}