package net.blay09.mods.balm.forge.client.screen;

import com.mojang.datafixers.util.Pair;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Supplier;
import net.blay09.mods.balm.api.client.screen.BalmScreenFactory;
import net.blay09.mods.balm.api.client.screen.BalmScreens;
import net.blay09.mods.balm.mixin.ScreenAccessor;
import net.minecraft.client.gui.components.AbstractWidget;
import net.minecraft.client.gui.screens.MenuScreens;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.inventory.MenuAccess;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

public class ForgeBalmScreens implements BalmScreens {

    private final Map<String, ForgeBalmScreens.Registrations> registrations = new ConcurrentHashMap();

    @Override
    public <T extends AbstractContainerMenu, S extends Screen & MenuAccess<T>> void registerScreen(Supplier<MenuType<? extends T>> type, BalmScreenFactory<T, S> screenFactory) {
        this.getActiveRegistrations().menuTypes.add(Pair.of(type::get, screenFactory));
    }

    private static <T extends AbstractContainerMenu, S extends Screen & MenuAccess<T>> void registerScreenImmediate(Supplier<MenuType<? extends T>> type, BalmScreenFactory<T, S> screenFactory) {
        MenuScreens.register((MenuType) type.get(), screenFactory::create);
    }

    @Override
    public AbstractWidget addRenderableWidget(Screen screen, AbstractWidget widget) {
        ScreenAccessor accessor = (ScreenAccessor) screen;
        accessor.balm_getChildren().add(widget);
        accessor.balm_getRenderables().add(widget);
        accessor.balm_getNarratables().add(widget);
        return widget;
    }

    public void register() {
        FMLJavaModLoadingContext.get().getModEventBus().register(this.getActiveRegistrations());
    }

    private ForgeBalmScreens.Registrations getActiveRegistrations() {
        return (ForgeBalmScreens.Registrations) this.registrations.computeIfAbsent(ModLoadingContext.get().getActiveNamespace(), it -> new ForgeBalmScreens.Registrations());
    }

    private static class Registrations {

        public final List<Pair<Supplier<MenuType<?>>, BalmScreenFactory<?, ?>>> menuTypes = new ArrayList();

        @SubscribeEvent
        public void setupClient(FMLClientSetupEvent event) {
            for (Pair<Supplier<MenuType<?>>, BalmScreenFactory<?, ?>> entry : this.menuTypes) {
                ForgeBalmScreens.registerScreenImmediate(((Supplier) entry.getFirst())::get, (BalmScreenFactory) entry.getSecond());
            }
        }
    }
}