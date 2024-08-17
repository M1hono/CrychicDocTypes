package de.keksuccino.fancymenu.customization.customgui;

import de.keksuccino.fancymenu.util.LocalizationUtils;
import de.keksuccino.fancymenu.util.rendering.ui.UIBase;
import de.keksuccino.fancymenu.util.rendering.ui.screen.CellScreen;
import de.keksuccino.fancymenu.util.rendering.ui.screen.ConfirmationScreen;
import de.keksuccino.fancymenu.util.rendering.ui.widget.button.ExtendedButton;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.Style;
import org.jetbrains.annotations.NotNull;

public class ManageOverriddenGuisScreen extends CellScreen {

    protected Runnable onCloseRunnable;

    protected List<String> removedOverrides = new ArrayList();

    public ManageOverriddenGuisScreen(@NotNull Runnable onClose) {
        super(Component.translatable("fancymenu.custom_guis.manage_overridden"));
        this.onCloseRunnable = onClose;
    }

    @Override
    protected void initCells() {
        this.addSpacerCell(20);
        boolean first = true;
        for (Entry<String, String> m : CustomGuiHandler.getOverriddenScreens().entrySet()) {
            String overriddenScreen = (String) m.getKey();
            String overriddenWith = (String) m.getValue();
            if (!this.removedOverrides.contains(overriddenScreen)) {
                if (!first) {
                    this.addDescriptionEndSeparatorCell();
                }
                first = false;
                this.addLabelCell(Component.translatable("fancymenu.custom_guis.manage_overridden.screen", Component.literal(overriddenScreen).setStyle(Style.EMPTY.withBold(false))).setStyle(Style.EMPTY.withBold(true)));
                this.addLabelCell(Component.translatable("fancymenu.custom_guis.manage_overridden.overridden_with", Component.literal(overriddenWith).setStyle(Style.EMPTY.withBold(false))).setStyle(Style.EMPTY.withBold(true)));
                this.addWidgetCell(new ExtendedButton(0, 0, 20, 20, Component.translatable("fancymenu.custom_guis.manage_overridden.remove_override").withStyle(Style.EMPTY.withColor(UIBase.getUIColorTheme().warning_text_color.getColorInt())), var1x -> Minecraft.getInstance().setScreen(ConfirmationScreen.warning(remove -> {
                    if (remove) {
                        this.removedOverrides.add(overriddenScreen);
                    }
                    Minecraft.getInstance().setScreen(this);
                }, LocalizationUtils.splitLocalizedLines("fancymenu.custom_guis.manage_overridden.remove_override.confirm")))), true);
            }
        }
        this.addSpacerCell(20);
    }

    @Override
    protected void onCancel() {
        this.onCloseRunnable.run();
    }

    @Override
    protected void onDone() {
        for (String s : this.removedOverrides) {
            CustomGuiHandler.removeScreenOverrideFor(s);
        }
        this.onCloseRunnable.run();
    }
}