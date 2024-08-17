package io.github.lightman314.lightmanscurrency.client.gui.screen.team;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.TeamManagerScreen;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.common.teams.Team;
import javax.annotation.Nonnull;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.entity.player.Player;
import org.jetbrains.annotations.NotNull;

public class TeamNameTab extends TeamTab {

    EditBox nameInput;

    EasyButton buttonChangeName;

    public TeamNameTab(TeamManagerScreen screen) {
        super(screen);
    }

    @Nonnull
    @NotNull
    @Override
    public IconData getIcon() {
        return LCText.BUTTON_CHANGE_NAME_ICON.icon();
    }

    public MutableComponent getTooltip() {
        return LCText.TOOLTIP_TEAM_NAME.get();
    }

    @Override
    public boolean allowViewing(Player player, Team team) {
        return team != null && team.isAdmin(player);
    }

    @Override
    public boolean blockInventoryClosing() {
        return true;
    }

    @Override
    public void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.nameInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 20, screenArea.y + 20, 160, 20, EasyText.empty()));
        this.nameInput.setMaxLength(32);
        this.nameInput.setValue(this.getActiveTeam().getName());
        this.buttonChangeName = this.addChild(new EasyTextButton(screenArea.pos.offset(20, 45), 160, 20, LCText.BUTTON_TEAM_RENAME.get(), this::changeName));
        this.buttonChangeName.f_93623_ = false;
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        String currentName = "NULL";
        if (this.getActiveTeam() != null) {
            currentName = this.getActiveTeam().getName();
        }
        gui.drawString(LCText.GUI_TEAM_NAME_CURRENT.get(currentName), 20, 10, 4210752);
    }

    @Override
    public void tick() {
        this.nameInput.tick();
        this.buttonChangeName.f_93623_ = !this.nameInput.getValue().isBlank() && !this.nameInput.getValue().contentEquals(this.getActiveTeam().getName());
    }

    private void changeName(EasyButton button) {
        if (!this.nameInput.getValue().isBlank() && this.getActiveTeam() != null) {
            this.getActiveTeam().changeName(this.getPlayer(), this.nameInput.getValue());
            this.RequestChange(LazyPacketData.simpleString("ChangeName", this.nameInput.getValue()));
        }
    }
}