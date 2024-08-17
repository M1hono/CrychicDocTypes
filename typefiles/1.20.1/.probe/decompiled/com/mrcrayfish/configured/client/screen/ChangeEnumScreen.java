package com.mrcrayfish.configured.client.screen;

import com.google.common.collect.ImmutableList;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mrcrayfish.configured.api.IAllowedEnums;
import com.mrcrayfish.configured.api.IConfigValue;
import com.mrcrayfish.configured.api.IModConfig;
import com.mrcrayfish.configured.client.util.ScreenUtil;
import com.mrcrayfish.configured.util.ConfigHelper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import net.minecraft.ChatFormatting;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.AbstractSelectionList;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.client.gui.components.ObjectSelectionList;
import net.minecraft.client.gui.narration.NarratedElementType;
import net.minecraft.client.gui.narration.NarrationElementOutput;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.CommonComponents;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;

public class ChangeEnumScreen extends TooltipScreen implements IBackgroundTexture, IEditing {

    private final Screen parent;

    private final IModConfig config;

    private final Consumer<Enum<?>> onSave;

    private final ResourceLocation background;

    private final IConfigValue<Enum<?>> holder;

    private Enum<?> selectedValue;

    private ChangeEnumScreen.EnumList list;

    private List<ChangeEnumScreen.Entry> entries;

    private EditBox searchTextField;

    protected ChangeEnumScreen(Screen parent, IModConfig config, Component title, ResourceLocation background, Enum<?> value, IConfigValue<Enum<?>> holder, Consumer<Enum<?>> onSave) {
        super(title);
        this.parent = parent;
        this.config = config;
        this.onSave = onSave;
        this.background = background;
        this.holder = holder;
        this.selectedValue = value;
    }

    @Override
    protected void init() {
        this.constructEntries();
        this.list = new ChangeEnumScreen.EnumList(this.entries);
        this.list.m_93488_(!ConfigHelper.isPlayingGame());
        this.list.m_6987_((ChangeEnumScreen.Entry) this.list.m_6702_().stream().filter(entry -> entry.getEnumValue() == this.selectedValue).findFirst().orElse(null));
        this.m_7787_(this.list);
        this.searchTextField = new EditBox(this.f_96547_, this.f_96543_ / 2 - 110, 22, 220, 20, Component.translatable("configured.gui.search"));
        this.searchTextField.setResponder(s -> {
            ScreenUtil.updateSearchTextFieldSuggestion(this.searchTextField, s, this.entries);
            this.list.replaceEntries((Collection<ChangeEnumScreen.Entry>) (s.isEmpty() ? this.entries : (Collection) this.entries.stream().filter(entry -> entry.getFormattedLabel().getString().toLowerCase(Locale.ENGLISH).contains(s.toLowerCase(Locale.ENGLISH))).collect(Collectors.toList())));
            if (!s.isEmpty()) {
                this.list.m_93410_(0.0);
            }
        });
        this.m_7787_(this.searchTextField);
        ScreenUtil.updateSearchTextFieldSuggestion(this.searchTextField, "", this.entries);
        if (!this.config.isReadOnly()) {
            this.m_142416_(ScreenUtil.button(this.f_96543_ / 2 - 155, this.f_96544_ - 29, 150, 20, CommonComponents.GUI_DONE, btn -> {
                if (this.list.m_93511_() != null) {
                    this.onSave.accept(((ChangeEnumScreen.Entry) this.list.m_93511_()).enumValue);
                }
                this.f_96541_.setScreen(this.parent);
            }));
        }
        int cancelOffset = this.config.isReadOnly() ? -75 : 5;
        Component cancelLabel = this.config.isReadOnly() ? CommonComponents.GUI_BACK : CommonComponents.GUI_CANCEL;
        this.m_142416_(ScreenUtil.button(this.f_96543_ / 2 + cancelOffset, this.f_96544_ - 29, 150, 20, cancelLabel, button -> this.f_96541_.setScreen(this.parent)));
    }

    private void constructEntries() {
        List<ChangeEnumScreen.Entry> entries = new ArrayList();
        if (this.holder instanceof IAllowedEnums) {
            ((IAllowedEnums) this.holder).getAllowedValues().forEach(ex -> entries.add(new ChangeEnumScreen.Entry((Enum<?>) ex)));
        } else {
            Enum<?> value = this.selectedValue;
            if (value != null) {
                Object[] enums = value.getDeclaringClass().getEnumConstants();
                for (Object e : enums) {
                    entries.add(new ChangeEnumScreen.Entry((Enum<?>) e));
                }
            }
        }
        entries.sort(Comparator.comparing(entry -> entry.getFormattedLabel().getString()));
        this.entries = ImmutableList.copyOf(entries);
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTicks) {
        this.m_280273_(graphics);
        this.list.m_88315_(graphics, mouseX, mouseY, partialTicks);
        this.searchTextField.m_88315_(graphics, mouseX, mouseY, partialTicks);
        graphics.drawCenteredString(this.f_96547_, this.f_96539_, this.f_96543_ / 2, 7, 16777215);
        super.m_88315_(graphics, mouseX, mouseY, partialTicks);
        RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
        graphics.blit(ListMenuScreen.CONFIGURED_LOGO, 10, 13, 0, 0.0F, 0.0F, 23, 23, 32, 32);
        if (ScreenUtil.isMouseWithin(10, 13, 23, 23, mouseX, mouseY)) {
            this.setActiveTooltip(Component.translatable("configured.gui.info"));
        }
        this.drawTooltip(graphics, mouseX, mouseY);
    }

    @Override
    public IModConfig getActiveConfig() {
        return this.config;
    }

    @Override
    public ResourceLocation getBackgroundTexture() {
        return this.background;
    }

    public class Entry extends ObjectSelectionList.Entry<ChangeEnumScreen.Entry> implements ILabelProvider {

        private final Enum<?> enumValue;

        private final Component label;

        public Entry(Enum<?> enumValue) {
            this.enumValue = enumValue;
            this.label = Component.literal(ConfigScreen.createLabel(enumValue.name().toLowerCase(Locale.ENGLISH)));
        }

        public Enum<?> getEnumValue() {
            return this.enumValue;
        }

        @Override
        public String getLabel() {
            return this.label.getString();
        }

        public Component getFormattedLabel() {
            return this.label;
        }

        @Override
        public void render(GuiGraphics graphics, int index, int top, int left, int width, int p_230432_6_, int mouseX, int mouseY, boolean hovered, float partialTicks) {
            Component label = Component.literal(this.label.getString()).withStyle(ChangeEnumScreen.this.list.m_93511_() == this ? ChatFormatting.YELLOW : ChatFormatting.WHITE);
            graphics.drawString(ChangeEnumScreen.this.f_96541_.font, label, left + 5, top + 4, 16777215);
        }

        @Override
        public boolean mouseClicked(double mouseX, double mouseY, int button) {
            ChangeEnumScreen.this.list.m_6987_(this);
            ChangeEnumScreen.this.selectedValue = this.enumValue;
            return true;
        }

        @Override
        public Component getNarration() {
            return this.label;
        }
    }

    public class EnumList extends AbstractSelectionList<ChangeEnumScreen.Entry> implements IBackgroundTexture {

        public EnumList(List<ChangeEnumScreen.Entry> entries) {
            super(ChangeEnumScreen.this.f_96541_, ChangeEnumScreen.this.f_96543_, ChangeEnumScreen.this.f_96544_, 50, ChangeEnumScreen.this.f_96544_ - 36, 20);
            entries.forEach(x$0 -> this.m_7085_(x$0));
        }

        @Override
        public void replaceEntries(Collection<ChangeEnumScreen.Entry> entries) {
            super.replaceEntries(entries);
        }

        @Override
        public ResourceLocation getBackgroundTexture() {
            return ChangeEnumScreen.this.background;
        }

        @Override
        public void updateNarration(NarrationElementOutput output) {
            if (this.m_93511_() != null) {
                output.add(NarratedElementType.TITLE, ((ChangeEnumScreen.Entry) this.m_93511_()).label);
            }
        }

        @Override
        public boolean isMouseOver(double mouseX, double mouseY) {
            return ChangeEnumScreen.this.config.isReadOnly() ? false : super.isMouseOver(mouseX, mouseY);
        }
    }
}