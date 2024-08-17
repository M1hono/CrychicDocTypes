package io.github.lightman314.lightmanscurrency.api.ownership.listing;

import io.github.lightman314.lightmanscurrency.api.ownership.Owner;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.common.util.IClientTracker;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;

public abstract class PotentialOwner implements IClientTracker {

    private final Owner owner;

    private boolean isClient;

    private int priority;

    private boolean currentOwner;

    @Override
    public final boolean isClient() {
        return this.isClient;
    }

    public final void flagAsClient() {
        this.isClient = true;
        this.owner.flagAsClient();
    }

    protected final void setPriority(int priority) {
        this.priority = priority;
    }

    public final void addPriority(int priority) {
        this.priority += priority;
    }

    public final int getPriority() {
        return this.currentOwner ? 2147483646 : this.priority;
    }

    public final int sortingPriority() {
        return this.getPriority() * -1;
    }

    public final void flagAsHighPriority() {
        this.priority = 2147483645;
    }

    public final void setAsCurrentOwner(boolean isCurrentOwner) {
        this.currentOwner = isCurrentOwner;
    }

    protected PotentialOwner(@Nonnull Owner owner) {
        this(owner, 0);
    }

    protected PotentialOwner(@Nonnull Owner owner, int priority) {
        this.owner = owner;
        this.priority = priority;
    }

    @Nonnull
    public final Owner asOwner() {
        return this.owner;
    }

    public boolean failedFilter(@Nonnull String searchFilter) {
        return !this.getName().getString().toLowerCase().contains(searchFilter.toLowerCase());
    }

    @Nonnull
    public MutableComponent getName() {
        return this.asOwner().getName();
    }

    @Nonnull
    public abstract IconData getIcon();

    public abstract void appendTooltip(@Nonnull List<Component> var1);
}