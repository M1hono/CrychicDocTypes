package fr.frinn.custommachinery.api.guielement;

import com.google.common.collect.ImmutableMap;
import dev.architectury.event.Event;
import dev.architectury.event.EventFactory;
import java.util.HashMap;
import java.util.Map;

public class RegisterGuiElementWidgetSupplierEvent {

    public static final Event<RegisterGuiElementWidgetSupplierEvent.Register> EVENT = EventFactory.createLoop();

    private final Map<GuiElementType<?>, IGuiElementWidgetSupplier<?>> widgetSuppliers = new HashMap();

    public <E extends IGuiElement> void register(GuiElementType<E> type, IGuiElementWidgetSupplier<E> widgetSupplier) {
        if (this.widgetSuppliers.containsKey(type)) {
            throw new IllegalArgumentException("Widget supplier already registered for Gui Element: " + type.getId());
        } else {
            this.widgetSuppliers.put(type, widgetSupplier);
        }
    }

    public Map<GuiElementType<?>, IGuiElementWidgetSupplier<?>> getWidgetSuppliers() {
        return ImmutableMap.copyOf(this.widgetSuppliers);
    }

    public interface Register {

        void registerWidgetSuppliers(RegisterGuiElementWidgetSupplierEvent var1);
    }
}