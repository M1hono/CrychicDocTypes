package dev.ftb.mods.ftbquests.client.gui.quests;

import dev.ftb.mods.ftblibrary.ui.Theme;
import dev.ftb.mods.ftblibrary.ui.Widget;
import net.minecraft.client.gui.GuiGraphics;

public class ExpandChaptersButton extends Widget {

    private final QuestScreen questScreen;

    public ExpandChaptersButton(QuestScreen panel) {
        super(panel);
        this.questScreen = panel;
    }

    @Override
    public void draw(GuiGraphics graphics, Theme theme, int x, int y, int w, int h) {
        if (!this.questScreen.chapterPanel.expanded) {
            ChapterPanel.ARROW_COLLAPSED.draw(graphics, x + (w - 12) / 2, y + (h - 12) / 2, 12, 12);
        }
    }

    @Override
    public void updateMouseOver(int mouseX, int mouseY) {
        super.updateMouseOver(mouseX, mouseY);
        if (!this.questScreen.chapterPanel.expanded && this.isMouseOver() && !this.questScreen.isViewingQuest()) {
            this.questScreen.chapterPanel.setExpanded(true);
        }
    }
}