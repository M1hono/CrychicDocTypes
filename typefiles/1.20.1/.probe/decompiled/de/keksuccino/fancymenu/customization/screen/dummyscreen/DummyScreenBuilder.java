package de.keksuccino.fancymenu.customization.screen.dummyscreen;

import de.keksuccino.fancymenu.customization.screen.ScreenInstanceFactory;
import java.util.List;
import java.util.Objects;
import java.util.function.Supplier;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class DummyScreenBuilder {

    @NotNull
    protected String screenIdentifier;

    @NotNull
    protected Component screenDisplayName;

    @Nullable
    protected Supplier<List<Component>> screenDescription;

    @Nullable
    protected Supplier<? extends Screen> screenProvider;

    public DummyScreenBuilder(@NotNull String screenIdentifier, @NotNull Component screenDisplayName, @Nullable Supplier<? extends Screen> screenProvider) {
        this.screenIdentifier = (String) Objects.requireNonNull(screenIdentifier);
        this.screenDisplayName = (Component) Objects.requireNonNull(screenDisplayName);
        this.screenProvider = screenProvider;
    }

    @Nullable
    public Screen tryConstruct() {
        return this.screenProvider != null ? (Screen) this.screenProvider.get() : ScreenInstanceFactory.tryConstruct(this.screenIdentifier);
    }

    @NotNull
    public String getScreenIdentifier() {
        return this.screenIdentifier;
    }

    @Nullable
    public Supplier<? extends Screen> getScreenProvider() {
        return this.screenProvider;
    }

    @NotNull
    public Component getScreenDisplayName() {
        return this.screenDisplayName;
    }

    public DummyScreenBuilder setScreenDescriptionSupplier(@Nullable Supplier<List<Component>> description) {
        this.screenDescription = description;
        return this;
    }

    @Nullable
    public Supplier<List<Component>> getScreenDescriptionSupplier() {
        return this.screenDescription;
    }
}