package io.github.lightman314.lightmanscurrency.common.notifications.types;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.notifications.Notification;
import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.MutableComponent;

public abstract class TaxableNotification extends Notification {

    private MoneyValue taxesPaid = MoneyValue.empty();

    protected TaxableNotification(@Nonnull MoneyValue taxesPaid) {
        this.taxesPaid = taxesPaid;
    }

    protected TaxableNotification() {
    }

    @Nonnull
    @Override
    public final MutableComponent getMessage() {
        return this.taxesPaid.isEmpty() ? this.getNormalMessage() : this.getNormalMessage().append("\n").append(LCText.NOTIFICATION_TAXES_PAID.get(this.taxesPaid.getText("ERROR")));
    }

    @Nonnull
    protected abstract MutableComponent getNormalMessage();

    @Override
    protected final void saveAdditional(@Nonnull CompoundTag compound) {
        this.saveNormal(compound);
        compound.put("TaxesPaid", this.taxesPaid.save());
    }

    protected abstract void saveNormal(CompoundTag var1);

    @Override
    protected final void loadAdditional(@Nonnull CompoundTag compound) {
        this.taxesPaid = MoneyValue.safeLoad(compound, "TaxesPaid");
        this.loadNormal(compound);
    }

    protected abstract void loadNormal(CompoundTag var1);

    protected boolean TaxesMatch(TaxableNotification other) {
        return other.taxesPaid.equals(this.taxesPaid);
    }
}