package com.blamejared.controlling.platform;

import com.blamejared.controlling.api.events.IKeyEntryListenersEvent;
import com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent;
import com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent;
import com.blamejared.controlling.api.events.IKeyEntryRenderEvent;
import com.blamejared.controlling.api.events.KeyEntryListenersEvent;
import com.blamejared.controlling.api.events.KeyEntryMouseClickedEvent;
import com.blamejared.controlling.api.events.KeyEntryMouseReleasedEvent;
import com.blamejared.controlling.api.events.KeyEntryRenderEvent;
import com.blamejared.controlling.client.NewKeyBindsList;
import com.mojang.datafixers.util.Either;
import java.util.List;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.util.Unit;
import net.minecraftforge.common.MinecraftForge;

public class ForgeEventHandler implements IEventHelper {

    @Override
    public Either<IKeyEntryListenersEvent, List<GuiEventListener>> fireKeyEntryListenersEvent(NewKeyBindsList.KeyEntry entry) {
        KeyEntryListenersEvent event = new KeyEntryListenersEvent(entry);
        MinecraftForge.EVENT_BUS.post(event);
        return Either.left(event);
    }

    @Override
    public Either<IKeyEntryMouseClickedEvent, Boolean> fireKeyEntryMouseClickedEvent(NewKeyBindsList.KeyEntry entry, double mouseX, double mouseY, int buttonId) {
        KeyEntryMouseClickedEvent event = new KeyEntryMouseClickedEvent(entry, mouseX, mouseY, buttonId);
        MinecraftForge.EVENT_BUS.post(event);
        return Either.left(event);
    }

    @Override
    public Either<IKeyEntryMouseReleasedEvent, Boolean> fireKeyEntryMouseReleasedEvent(NewKeyBindsList.KeyEntry entry, double mouseX, double mouseY, int buttonId) {
        KeyEntryMouseReleasedEvent event = new KeyEntryMouseReleasedEvent(entry, mouseX, mouseY, buttonId);
        MinecraftForge.EVENT_BUS.post(event);
        return Either.left(event);
    }

    @Override
    public Either<IKeyEntryRenderEvent, Unit> fireKeyEntryRenderEvent(NewKeyBindsList.KeyEntry entry, GuiGraphics guiGraphics, int slotIndex, int y, int x, int rowLeft, int rowWidth, int mouseX, int mouseY, boolean hovered, float partialTicks) {
        KeyEntryRenderEvent event = new KeyEntryRenderEvent(entry, guiGraphics, slotIndex, y, x, rowLeft, rowWidth, mouseX, mouseY, hovered, partialTicks);
        MinecraftForge.EVENT_BUS.post(event);
        return Either.left(event);
    }
}