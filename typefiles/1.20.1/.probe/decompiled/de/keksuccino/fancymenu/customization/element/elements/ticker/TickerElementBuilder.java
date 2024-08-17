package de.keksuccino.fancymenu.customization.element.elements.ticker;

import de.keksuccino.fancymenu.customization.action.ActionInstance;
import de.keksuccino.fancymenu.customization.action.blocks.ExecutableBlockDeserializer;
import de.keksuccino.fancymenu.customization.action.blocks.GenericExecutableBlock;
import de.keksuccino.fancymenu.customization.element.AbstractElement;
import de.keksuccino.fancymenu.customization.element.ElementBuilder;
import de.keksuccino.fancymenu.customization.element.SerializedElement;
import de.keksuccino.fancymenu.customization.layer.ScreenCustomizationLayer;
import de.keksuccino.fancymenu.customization.layer.ScreenCustomizationLayerHandler;
import de.keksuccino.fancymenu.customization.layout.editor.LayoutEditorScreen;
import de.keksuccino.fancymenu.events.ModReloadEvent;
import de.keksuccino.fancymenu.events.ticking.ClientTickEvent;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.event.acara.EventHandler;
import de.keksuccino.fancymenu.util.event.acara.EventListener;
import de.keksuccino.konkrete.math.MathUtils;
import java.lang.invoke.StringConcatFactory;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class TickerElementBuilder extends ElementBuilder<TickerElement, TickerEditorElement> {

    private static final Logger LOGGER = LogManager.getLogger();

    public static volatile List<TickerElement.TickerElementThreadController> cachedThreadControllers = new ArrayList();

    public static volatile List<String> cachedOncePerSessionItems = new ArrayList();

    public TickerElementBuilder() {
        super("fancymenu_customization_item_ticker");
        EventHandler.INSTANCE.registerListenersOf(this);
    }

    @EventListener
    public void onClientTickPost(ClientTickEvent.Post e) {
        List<TickerElement.TickerElementThreadController> activeControllers = new ArrayList();
        if (Minecraft.getInstance().screen != null) {
            ScreenCustomizationLayer m = ScreenCustomizationLayerHandler.getLayerOfScreen(Minecraft.getInstance().screen);
            if (m != null) {
                List<AbstractElement> elements = new ArrayList();
                elements.addAll(m.normalElements.backgroundElements);
                elements.addAll(m.normalElements.foregroundElements);
                for (AbstractElement element : elements) {
                    if (element instanceof TickerElement) {
                        TickerElement te = (TickerElement) element;
                        if (te.asyncThreadController != null) {
                            activeControllers.add(te.asyncThreadController);
                        }
                    }
                }
            }
        }
        List<TickerElement.TickerElementThreadController> keep = new ArrayList();
        for (TickerElement.TickerElementThreadController c : cachedThreadControllers) {
            if (!activeControllers.contains(c)) {
                c.running = false;
            } else {
                keep.add(c);
            }
        }
        cachedThreadControllers = keep;
    }

    @EventListener
    public void onModReload(ModReloadEvent e) {
        cachedOncePerSessionItems.clear();
        LOGGER.info("[FancyMenu] Successfully cleared cached once-per-session ticker elements.");
    }

    @NotNull
    public TickerElement buildDefaultInstance() {
        TickerElement i = new TickerElement(this);
        i.baseWidth = 70;
        i.baseHeight = 70;
        return i;
    }

    public TickerElement deserializeElement(@NotNull SerializedElement serialized) {
        TickerElement element = this.buildDefaultInstance();
        String tickerExecutableBlockId = serialized.getValue("ticker_element_executable_block_identifier");
        if (tickerExecutableBlockId != null) {
            if (ExecutableBlockDeserializer.deserializeWithIdentifier(serialized, tickerExecutableBlockId) instanceof GenericExecutableBlock g) {
                element.actionExecutor = g;
            }
        } else {
            GenericExecutableBlock g = new GenericExecutableBlock();
            g.getExecutables().addAll(ActionInstance.deserializeAll(serialized));
            element.actionExecutor = g;
        }
        String tickDelayMsString = serialized.getValue("tick_delay");
        if (tickDelayMsString != null && MathUtils.isLong(tickDelayMsString)) {
            element.tickDelayMs = Long.parseLong(tickDelayMsString);
        }
        String isAsyncString = serialized.getValue("is_async");
        if (isAsyncString != null && isAsyncString.equalsIgnoreCase("true")) {
            element.isAsync = true;
        }
        String tickModeString = serialized.getValue("tick_mode");
        if (tickModeString != null) {
            TickerElement.TickMode t = TickerElement.TickMode.getByName(tickModeString);
            if (t != null) {
                element.tickMode = t;
            }
        }
        return element;
    }

    protected SerializedElement serializeElement(@NotNull TickerElement element, @NotNull SerializedElement serializeTo) {
        serializeTo.putProperty("is_async", element.isAsync + "");
        serializeTo.putProperty("tick_delay", element.tickDelayMs + "");
        serializeTo.putProperty("tick_mode", StringConcatFactory.makeConcatWithConstants < "makeConcatWithConstants", "\u0001" > (element.tickMode.name));
        serializeTo.putProperty("ticker_element_executable_block_identifier", element.actionExecutor.identifier);
        element.actionExecutor.serializeToExistingPropertyContainer(serializeTo);
        return serializeTo;
    }

    @NotNull
    public TickerEditorElement wrapIntoEditorElement(@NotNull TickerElement element, @NotNull LayoutEditorScreen editor) {
        return new TickerEditorElement(element, editor);
    }

    @NotNull
    @Override
    public Component getDisplayName(@Nullable AbstractElement element) {
        return Component.translatable("fancymenu.customization.items.ticker");
    }

    @Nullable
    @Override
    public Component[] getDescription(@Nullable AbstractElement element) {
        return LocalizationUtils.splitLocalizedLines("fancymenu.customization.items.ticker.desc");
    }
}