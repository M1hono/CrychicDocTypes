package com.blamejared.controlling.client;

import com.blamejared.controlling.ControllingConstants;
import com.blamejared.controlling.api.events.IKeyEntryListenersEvent;
import com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent;
import com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent;
import com.blamejared.controlling.platform.Services;
import com.google.common.collect.ImmutableList;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.function.UnaryOperator;
import net.minecraft.ChatFormatting;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.components.Tooltip;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.client.gui.narration.NarratableEntry;
import net.minecraft.client.gui.narration.NarratedElementType;
import net.minecraft.client.gui.narration.NarrationElementOutput;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.controls.KeyBindsList;
import net.minecraft.client.gui.screens.controls.KeyBindsScreen;
import net.minecraft.network.chat.CommonComponents;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import org.apache.commons.lang3.ArrayUtils;

public class NewKeyBindsList extends CustomList {

    private final KeyBindsScreen controlsScreen;

    private final Minecraft mc;

    private int maxListLabelWidth;

    public NewKeyBindsList(KeyBindsScreen controls, Minecraft mcIn) {
        super(controls, mcIn);
        this.f_93388_ = controls.f_96543_ + 45;
        this.f_93389_ = controls.f_96544_;
        this.f_93390_ = 48;
        this.f_93391_ = controls.f_96544_ - 56;
        this.f_93392_ = controls.f_96543_ + 45;
        this.controlsScreen = controls;
        this.mc = mcIn;
        this.m_6702_().clear();
        this.allEntries = new ArrayList();
        KeyMapping[] bindings = (KeyMapping[]) ArrayUtils.clone(mcIn.options.keyMappings);
        Arrays.sort(bindings);
        String lastCategory = null;
        for (KeyMapping keybinding : bindings) {
            String category = keybinding.getCategory();
            if (!category.equals(lastCategory)) {
                lastCategory = category;
                if (!category.endsWith(".hidden")) {
                    this.addEntry(new NewKeyBindsList.CategoryEntry(Component.translatable(category)));
                }
            }
            Component component = Component.translatable(keybinding.getName());
            int width = mcIn.font.width(component);
            if (width > this.maxListLabelWidth) {
                this.maxListLabelWidth = width;
            }
            if (!category.endsWith(".hidden")) {
                this.addEntry(new NewKeyBindsList.KeyEntry(keybinding, component));
            }
        }
    }

    @Override
    protected int getScrollbarPosition() {
        return super.m_5756_() + 15 + 20;
    }

    @Override
    public int getRowWidth() {
        return super.m_5759_() + 32;
    }

    public class CategoryEntry extends KeyBindsList.Entry {

        private final Component name;

        private final int labelWidth;

        public CategoryEntry(Component name) {
            this.name = name;
            this.labelWidth = NewKeyBindsList.this.mc.font.width(this.name);
        }

        @Override
        public void render(GuiGraphics guiGraphics, int slotIndex, int y, int x, int rowLeft, int rowWidth, int mouseX, int mouseY, boolean hovered, float partialTicks) {
            guiGraphics.drawString(NewKeyBindsList.this.mc.font, this.name, ((Screen) Objects.requireNonNull(NewKeyBindsList.this.f_93386_.screen)).width / 2 - this.labelWidth / 2, y + rowWidth - 9 - 1, 16777215);
        }

        @Override
        public List<? extends NarratableEntry> narratables() {
            return ImmutableList.of(new NarratableEntry() {

                @Override
                public NarratableEntry.NarrationPriority narrationPriority() {
                    return NarratableEntry.NarrationPriority.HOVERED;
                }

                @Override
                public void updateNarration(NarrationElementOutput neo) {
                    neo.add(NarratedElementType.TITLE, CategoryEntry.this.name);
                }
            });
        }

        @Override
        public List<? extends GuiEventListener> children() {
            return ImmutableList.of();
        }

        @Override
        protected void refreshEntry() {
        }

        public Component name() {
            return this.name;
        }
    }

    public class KeyEntry extends KeyBindsList.Entry {

        private final KeyMapping key;

        private final Component keyDesc;

        private final Button btnChangeKeyBinding;

        private final Button btnResetKeyBinding;

        private boolean hasCollision;

        private final Component categoryName;

        private KeyEntry(KeyMapping key, Component keyDesc) {
            this.key = key;
            this.keyDesc = keyDesc;
            this.btnChangeKeyBinding = Button.builder(this.keyDesc, btn -> {
                NewKeyBindsList.this.controlsScreen.selectedKey = key;
                NewKeyBindsList.this.m_269130_();
            }).bounds(0, 0, 75, 20).createNarration(supp -> key.isUnbound() ? Component.translatable("narrator.controls.unbound", keyDesc) : Component.translatable("narrator.controls.bound", keyDesc, supp.get())).build();
            this.btnResetKeyBinding = Button.builder(ControllingConstants.COMPONENT_CONTROLS_RESET, btn -> {
                Services.PLATFORM.setToDefault(NewKeyBindsList.this.f_93386_.options, key);
                NewKeyBindsList.this.m_269130_();
            }).bounds(0, 0, 50, 20).createNarration(supp -> Component.translatable("narrator.controls.reset", keyDesc)).build();
            this.categoryName = Component.translatable(this.key.getCategory());
            this.refreshEntry();
        }

        @Override
        public void render(GuiGraphics guiGraphics, int slotIndex, int y, int x, int rowLeft, int rowWidth, int mouseX, int mouseY, boolean hovered, float partialTicks) {
            Services.EVENT.fireKeyEntryRenderEvent(this, guiGraphics, slotIndex, y, x, rowLeft, rowWidth, mouseX, mouseY, hovered, partialTicks);
            int length = Math.max(0, x + 90 - NewKeyBindsList.this.maxListLabelWidth);
            guiGraphics.drawString(NewKeyBindsList.this.mc.font, this.keyDesc, length, y + rowWidth / 2 - 4, 16777215);
            this.btnResetKeyBinding.m_252865_(x + 190 + 20);
            this.btnResetKeyBinding.m_253211_(y);
            this.btnResetKeyBinding.m_88315_(guiGraphics, mouseX, mouseY, partialTicks);
            this.btnChangeKeyBinding.m_252865_(x + 105);
            this.btnChangeKeyBinding.m_253211_(y);
            if (this.hasCollision) {
                int markerWidth = 3;
                int minX = this.btnChangeKeyBinding.m_252754_() - 6;
                guiGraphics.fill(minX, y + 2, minX + markerWidth, y + rowWidth + 2, ChatFormatting.RED.getColor() | 0xFF000000);
            }
            this.btnChangeKeyBinding.m_88315_(guiGraphics, mouseX, mouseY, partialTicks);
        }

        @Override
        public List<GuiEventListener> children() {
            return (List<GuiEventListener>) Services.EVENT.fireKeyEntryListenersEvent(this).map(IKeyEntryListenersEvent::getListeners, UnaryOperator.identity());
        }

        @Override
        public List<? extends NarratableEntry> narratables() {
            return ImmutableList.of(this.btnChangeKeyBinding, this.btnResetKeyBinding);
        }

        @Override
        public boolean mouseClicked(double mouseX, double mouseY, int buttonId) {
            return Services.EVENT.fireKeyEntryMouseClickedEvent(this, mouseX, mouseY, buttonId).map(IKeyEntryMouseClickedEvent::isHandled, UnaryOperator.identity()) ? true : super.m_6375_(mouseX, mouseY, buttonId);
        }

        @Override
        public boolean mouseReleased(double mouseX, double mouseY, int buttonId) {
            return Services.EVENT.fireKeyEntryMouseReleasedEvent(this, mouseX, mouseY, buttonId).map(IKeyEntryMouseReleasedEvent::isHandled, UnaryOperator.identity()) ? true : super.m_6348_(mouseX, mouseY, buttonId);
        }

        public KeyMapping getKey() {
            return this.key;
        }

        public Component getKeyDesc() {
            return this.keyDesc;
        }

        public Component categoryName() {
            return this.categoryName;
        }

        public Button getBtnResetKeyBinding() {
            return this.btnResetKeyBinding;
        }

        public Button getBtnChangeKeyBinding() {
            return this.btnChangeKeyBinding;
        }

        @Override
        protected void refreshEntry() {
            this.btnChangeKeyBinding.m_93666_(this.key.getTranslatedKeyMessage());
            this.btnResetKeyBinding.f_93623_ = !this.key.isDefault();
            this.hasCollision = false;
            MutableComponent duplicates = Component.empty();
            if (!this.key.isUnbound()) {
                KeyMapping[] mappings = NewKeyBindsList.this.f_93386_.options.keyMappings;
                for (KeyMapping mapping : mappings) {
                    if (mapping != this.key && this.key.same(mapping) || Services.PLATFORM.hasConflictingModifier(this.key, mapping)) {
                        if (this.hasCollision) {
                            duplicates.append(", ");
                        }
                        this.hasCollision = true;
                        duplicates.append(Component.translatable(mapping.getName()));
                    }
                }
            }
            MutableComponent tooltip = Component.translatable(this.key.getCategory());
            if (this.hasCollision) {
                this.btnChangeKeyBinding.m_93666_(Component.literal("[ ").append(this.btnChangeKeyBinding.m_6035_().copy().withStyle(ChatFormatting.WHITE)).append(" ]").withStyle(ChatFormatting.RED));
                tooltip.append(CommonComponents.NEW_LINE);
                tooltip.append(Component.translatable("controls.keybinds.duplicateKeybinds", duplicates));
            }
            this.btnChangeKeyBinding.m_257544_(Tooltip.create(tooltip));
            if (NewKeyBindsList.this.controlsScreen.selectedKey == this.key) {
                this.btnChangeKeyBinding.m_93666_(Component.literal("> ").append(this.btnChangeKeyBinding.m_6035_().copy().withStyle(ChatFormatting.WHITE, ChatFormatting.UNDERLINE)).append(" <").withStyle(ChatFormatting.YELLOW));
            }
        }
    }
}