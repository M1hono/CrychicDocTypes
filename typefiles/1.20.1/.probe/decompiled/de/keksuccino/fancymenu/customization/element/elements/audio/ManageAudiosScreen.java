package de.keksuccino.fancymenu.customization.element.elements.audio;

import de.keksuccino.fancymenu.customization.layout.editor.LayoutEditorScreen;
import de.keksuccino.fancymenu.util.ListUtils;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.rendering.ui.UIBase;
import de.keksuccino.fancymenu.util.rendering.ui.screen.CellScreen;
import de.keksuccino.fancymenu.util.rendering.ui.screen.ConfirmationScreen;
import de.keksuccino.fancymenu.util.rendering.ui.screen.resource.ResourceChooserScreen;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ManageAudiosScreen extends CellScreen {

    @NotNull
    protected List<AudioElement.AudioInstance> audios;

    @NotNull
    protected AudioElement element;

    @NotNull
    protected List<AudioElement.AudioInstance> tempAudios;

    protected LayoutEditorScreen editor;

    @Nullable
    protected String lastSelectedSource;

    protected ManageAudiosScreen(@NotNull AudioElement element, @NotNull List<AudioElement.AudioInstance> audios, @NotNull LayoutEditorScreen editor) {
        super(Component.translatable("fancymenu.elements.audio.manage_audios"));
        this.audios = (List<AudioElement.AudioInstance>) Objects.requireNonNull(audios);
        this.tempAudios = new ArrayList(audios);
        this.element = element;
        this.editor = editor;
    }

    @Override
    protected void initCells() {
        this.addSpacerCell(10);
        for (AudioElement.AudioInstance instance : this.tempAudios) {
            MutableComponent sourceName = Component.literal("[").append(instance.supplier.getSourceType().getValueComponent().setStyle(Style.EMPTY)).append("] ").setStyle(Style.EMPTY.withColor(UIBase.getUIColorTheme().warning_text_color.getColorInt()));
            MutableComponent name = Component.literal(instance.supplier.getSourceWithoutPrefix()).setStyle(Style.EMPTY.withColor(UIBase.getUIColorTheme().element_label_color_normal.getColorInt()));
            CellScreen.RenderCell cell = this.addLabelCell(sourceName.append(name)).putMemoryValue("source", instance.supplier.getSourceWithPrefix()).setHeight(80).setSelectable(true);
            if (this.lastSelectedSource != null && instance.supplier.getSourceWithPrefix().equals(this.lastSelectedSource)) {
                cell.setSelected(true);
                this.lastSelectedSource = null;
            }
        }
        this.addStartEndSpacerCell();
    }

    @Override
    protected void updateSelectedCell() {
        super.updateSelectedCell();
        CellScreen.RenderCell selected = this.getSelectedCell();
        if (selected != null) {
            this.lastSelectedSource = selected.getMemoryValue("source");
        } else {
            this.lastSelectedSource = null;
        }
    }

    @Override
    protected void initRightSideWidgets() {
        this.addRightSideButton(20, Component.translatable("fancymenu.elements.audio.manage_audios.add_audio"), button -> Minecraft.getInstance().setScreen(ResourceChooserScreen.audio(null, s -> {
            if (s != null) {
                this.addAudio(s);
            }
            Minecraft.getInstance().setScreen(this);
        })));
        this.addRightSideDefaultSpacer();
        this.addRightSideButton(20, Component.translatable("fancymenu.elements.audio.manage_audios.remove_audio"), extendedButton -> {
            CellScreen.RenderCell selected = this.getSelectedCell();
            if (selected != null) {
                String source = selected.getMemoryValue("source");
                if (source != null) {
                    Minecraft.getInstance().setScreen(ConfirmationScreen.warning(aBoolean -> {
                        if (aBoolean) {
                            this.removeAudio(source);
                        }
                        Minecraft.getInstance().setScreen(this);
                    }, LocalizationUtils.splitLocalizedLines("fancymenu.elements.audio.manage_audios.remove_audio.confirm")));
                }
            }
        }).setIsActiveSupplier(consumes -> this.getSelectedCell() != null);
        this.addRightSideDefaultSpacer();
        this.addRightSideButton(20, Component.translatable("fancymenu.elements.audio.manage_audios.move_up"), extendedButton -> {
            CellScreen.RenderCell selected = this.getSelectedCell();
            if (selected != null) {
                String source = selected.getMemoryValue("source");
                if (source != null) {
                    this.moveAudioUp(source);
                }
            }
        }).setIsActiveSupplier(consumes -> this.getSelectedCell() != null);
        this.addRightSideButton(20, Component.translatable("fancymenu.elements.audio.manage_audios.move_down"), extendedButton -> {
            CellScreen.RenderCell selected = this.getSelectedCell();
            if (selected != null) {
                String source = selected.getMemoryValue("source");
                if (source != null) {
                    this.moveAudioDown(source);
                }
            }
        }).setIsActiveSupplier(consumes -> this.getSelectedCell() != null);
    }

    protected void removeAudio(@NotNull String source) {
        this.tempAudios.removeIf(audioInstance -> audioInstance.supplier.getSourceWithPrefix().equals(source));
        this.rebuild();
    }

    protected void addAudio(@NotNull String source) {
        this.tempAudios.add(new AudioElement.AudioInstance(ResourceSupplier.audio(source)));
        this.rebuild();
    }

    protected void moveAudioUp(@NotNull String source) {
        AudioElement.AudioInstance instance = this.findAudio(source);
        if (instance != null) {
            ListUtils.offsetIndexOf(this.tempAudios, instance, -1);
        }
        this.rebuild();
    }

    protected void moveAudioDown(@NotNull String source) {
        AudioElement.AudioInstance instance = this.findAudio(source);
        if (instance != null) {
            ListUtils.offsetIndexOf(this.tempAudios, instance, 1);
        }
        this.rebuild();
    }

    @Nullable
    protected AudioElement.AudioInstance findAudio(@NotNull String source) {
        for (AudioElement.AudioInstance instance : this.tempAudios) {
            if (instance.supplier.getSourceWithPrefix().equals(source)) {
                return instance;
            }
        }
        return null;
    }

    @Override
    protected void onCancel() {
        Minecraft.getInstance().setScreen(this.editor);
    }

    @Override
    protected void onDone() {
        this.audios.clear();
        this.audios.addAll(this.tempAudios);
        this.element.resetAudioElementKeepAudios();
        Minecraft.getInstance().setScreen(this.editor);
    }
}