package de.keksuccino.fancymenu.customization.customgui;

import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.rendering.ui.screen.CellScreen;
import de.keksuccino.fancymenu.util.rendering.ui.screen.ConfirmationScreen;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ManageCustomGuisScreen extends CellScreen {

    protected Runnable onCloseRunnable;

    protected List<CustomGui> guis = new ArrayList();

    @Nullable
    protected CustomGui selected;

    public ManageCustomGuisScreen(@NotNull Runnable onClose) {
        super(Component.translatable("fancymenu.custom_guis.manage"));
        for (CustomGui g : CustomGuiHandler.getGuis()) {
            this.guis.add(g.copy());
        }
        this.onCloseRunnable = onClose;
    }

    @Override
    protected void initCells() {
        for (CustomGui gui : this.guis) {
            this.addCell(new ManageCustomGuisScreen.CustomGuiCell(gui)).setSelectable(true);
        }
        this.addSpacerCell(20);
    }

    @Override
    protected void init() {
        this.selected = null;
        super.init();
    }

    @Override
    protected void initRightSideWidgets() {
        this.addRightSideButton(20, Component.translatable("fancymenu.custom_guis.manage.add"), var1 -> {
            Screen s = Minecraft.getInstance().screen;
            Minecraft.getInstance().setScreen(new BuildCustomGuiScreen(null, customGui -> {
                if (customGui != null) {
                    this.guis.add(customGui);
                }
                Minecraft.getInstance().setScreen(s);
            }));
        });
        this.addRightSideDefaultSpacer();
        this.addRightSideButton(20, Component.translatable("fancymenu.custom_guis.manage.open"), var1 -> {
            CustomGui selected = this.selected;
            if (selected != null) {
                CustomGuiHandler.CUSTOM_GUI_SCREENS.clear();
                for (CustomGui g : this.guis) {
                    if (!g.identifier.replace(" ", "").isEmpty()) {
                        CustomGuiHandler.CUSTOM_GUI_SCREENS.put(g.identifier, g);
                    }
                }
                CustomGuiHandler.saveChanges();
                Minecraft.getInstance().setScreen(CustomGuiHandler.constructInstance(selected, Minecraft.getInstance().screen, null));
            }
        }).setIsActiveSupplier(consumes -> this.selected != null);
        this.addRightSideButton(20, Component.translatable("fancymenu.custom_guis.manage.edit"), var1 -> {
            Screen s = Minecraft.getInstance().screen;
            CustomGui selected = this.selected;
            if (selected != null) {
                Minecraft.getInstance().setScreen(new BuildCustomGuiScreen(selected, customGui -> Minecraft.getInstance().setScreen(s)));
            }
        }).setIsActiveSupplier(consumes -> this.selected != null);
        this.addRightSideButton(20, Component.translatable("fancymenu.custom_guis.manage.remove"), var1 -> {
            Screen s = Minecraft.getInstance().screen;
            CustomGui selected = this.selected;
            if (selected != null) {
                Minecraft.getInstance().setScreen(ConfirmationScreen.warning(remove -> {
                    if (remove) {
                        this.guis.remove(selected);
                    }
                    Minecraft.getInstance().setScreen(s);
                }, LocalizationUtils.splitLocalizedLines("fancymenu.custom_guis.manage.remove.confirm")));
            }
        }).setIsActiveSupplier(consumes -> this.selected != null);
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partial) {
        this.selected = this.getSelectedGui();
        super.render(graphics, mouseX, mouseY, partial);
    }

    @Override
    protected void onCancel() {
        this.onCloseRunnable.run();
    }

    @Override
    protected void onDone() {
        CustomGuiHandler.CUSTOM_GUI_SCREENS.clear();
        for (CustomGui g : this.guis) {
            if (!g.identifier.replace(" ", "").isEmpty()) {
                CustomGuiHandler.CUSTOM_GUI_SCREENS.put(g.identifier, g);
            }
        }
        CustomGuiHandler.saveChanges();
        this.onCloseRunnable.run();
    }

    @Nullable
    protected CustomGui getSelectedGui() {
        return this.getSelectedCell() instanceof ManageCustomGuisScreen.CustomGuiCell c ? c.gui : null;
    }

    public class CustomGuiCell extends CellScreen.LabelCell {

        protected CustomGui gui;

        public CustomGuiCell(@NotNull CustomGui gui) {
            super(Component.literal(gui.identifier));
            this.gui = gui;
        }
    }
}