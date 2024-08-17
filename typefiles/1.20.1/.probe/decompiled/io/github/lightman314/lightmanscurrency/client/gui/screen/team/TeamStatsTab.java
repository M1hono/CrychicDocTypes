package io.github.lightman314.lightmanscurrency.client.gui.screen.team;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.TeamManagerScreen;
import io.github.lightman314.lightmanscurrency.client.gui.widget.ScrollListener;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.scroll.IScrollable;
import io.github.lightman314.lightmanscurrency.client.gui.widget.scroll.ScrollBarWidget;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.client.util.TextRenderUtil;
import io.github.lightman314.lightmanscurrency.common.teams.Team;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.entity.player.Player;

public class TeamStatsTab extends TeamTab implements IScrollable {

    private static final int LINE_COUNT = 10;

    private static final int LINE_SIZE = 10;

    private static final int START_POS = 37;

    private int scroll = 0;

    private EasyButton buttonClear;

    public TeamStatsTab(TeamManagerScreen screen) {
        super(screen);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconAndButtonUtil.ICON_PRICE_FLUCTUATION;
    }

    @Nullable
    @Override
    public Component getTooltip() {
        return LCText.TOOLTIP_TEAM_STATS.get();
    }

    @Override
    public boolean allowViewing(Player player, Team team) {
        return team != null && team.isMember(player);
    }

    @Override
    protected void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.buttonClear = this.addChild(new EasyTextButton(screenArea.pos.offset(10, 10), screenArea.width - 20, 20, LCText.BUTTON_TRADER_STATS_CLEAR.get(), this::clearStats));
        this.addChild(new ScrollBarWidget(screenArea.pos.offset(screenArea.width - 10 - 8, 37), 100, this));
        this.addChild(new ScrollListener(screenArea.ofSize(screenArea.width, 137), this));
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        this.validateScroll();
        int yPos = 37;
        List<MutableComponent> lines = this.getLines();
        if (lines.isEmpty()) {
            TextRenderUtil.drawVerticallyCenteredMultilineText(gui, LCText.GUI_TRADER_STATS_EMPTY.get(), 10, this.screen.getXSize() - 20, yPos, 100, 4210752);
        } else {
            for (int i = this.scroll; i < this.scroll + 10 && i < lines.size(); i++) {
                gui.drawString((Component) lines.get(i), 10, yPos, 4210752);
                yPos += 10;
            }
        }
    }

    @Override
    public void tick() {
        Team team = this.getActiveTeam();
        this.buttonClear.f_93623_ = team != null && team.isAdmin(this.getPlayer());
    }

    private List<MutableComponent> getLines() {
        Team team = this.getActiveTeam();
        return (List<MutableComponent>) (team == null ? new ArrayList() : team.getStats().getDisplayLines());
    }

    @Override
    public int currentScroll() {
        return this.scroll;
    }

    @Override
    public void setScroll(int newScroll) {
        this.scroll = newScroll;
    }

    @Override
    public int getMaxScroll() {
        return IScrollable.calculateMaxScroll(10, this.getLines().size());
    }

    private void clearStats() {
        this.RequestChange(LazyPacketData.simpleFlag("ClearStats"));
    }
}