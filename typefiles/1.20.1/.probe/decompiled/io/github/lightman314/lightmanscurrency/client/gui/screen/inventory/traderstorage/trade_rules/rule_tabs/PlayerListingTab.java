package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.rule_tabs;

import com.google.common.collect.Lists;
import com.google.common.collect.UnmodifiableIterator;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.misc.player.PlayerReference;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.rules.TradeRuleType;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRuleSubTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRulesClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.ScrollTextDisplay;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.common.traders.rules.types.PlayerListing;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.Component;

public class PlayerListingTab extends TradeRuleSubTab<PlayerListing> {

    EasyButton buttonToggleMode;

    EditBox nameInput;

    EasyButton buttonAddPlayer;

    EasyButton buttonRemovePlayer;

    ScrollTextDisplay playerDisplay;

    public PlayerListingTab(@Nonnull TradeRulesClientTab<?> parent, @Nonnull TradeRuleType<PlayerListing> ruleType) {
        super(parent, ruleType);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return this.isWhitelistMode() ? IconAndButtonUtil.ICON_WHITELIST : IconAndButtonUtil.ICON_BLACKLIST;
    }

    @Override
    protected void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.buttonToggleMode = this.addChild(new EasyTextButton(screenArea.pos.offset(10, 7), screenArea.width - 20, 20, this::getModeText, this::PressToggleModeButton));
        this.nameInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 10, screenArea.y + 29, screenArea.width - 20, 20, EasyText.empty()));
        this.buttonAddPlayer = this.addChild(new EasyTextButton(screenArea.pos.offset(10, 50), 78, 20, LCText.BUTTON_ADD.get(), this::PressAddButton));
        this.buttonRemovePlayer = this.addChild(new EasyTextButton(screenArea.pos.offset(screenArea.width - 88, 50), 78, 20, LCText.BUTTON_REMOVE.get(), this::PressForgetButton));
        this.playerDisplay = this.addChild(new ScrollTextDisplay(screenArea.pos.offset(7, 75), screenArea.width - 14, 64, this::getPlayers));
        this.playerDisplay.setColumnCount(2);
    }

    protected boolean isWhitelistMode() {
        PlayerListing rule = this.getRule();
        return rule == null || rule.isWhitelistMode();
    }

    protected Component getModeText() {
        return this.isWhitelistMode() ? LCText.BUTTON_PLAYER_LISTING_MODE_WHITELIST.get() : LCText.BUTTON_PLAYER_LISTING_MODE_BLACKLIST.get();
    }

    private List<Component> getPlayers() {
        List<Component> playerList = Lists.newArrayList();
        PlayerListing rule = this.getRule();
        if (rule == null) {
            return playerList;
        } else {
            UnmodifiableIterator var3 = rule.getPlayerList().iterator();
            while (var3.hasNext()) {
                PlayerReference player = (PlayerReference) var3.next();
                playerList.add(player.getNameComponent(true));
            }
            return playerList;
        }
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
    }

    void PressAddButton(EasyButton button) {
        String name = this.nameInput.getValue();
        if (!name.isBlank()) {
            this.nameInput.setValue("");
            this.sendUpdateMessage(LazyPacketData.builder().setBoolean("Add", true).setString("Name", name));
        }
    }

    void PressForgetButton(EasyButton button) {
        String name = this.nameInput.getValue();
        if (!name.isBlank()) {
            this.nameInput.setValue("");
            this.sendUpdateMessage(LazyPacketData.builder().setBoolean("Add", false).setString("Name", name));
        }
    }

    void PressToggleModeButton(EasyButton button) {
        PlayerListing rule = this.getRule();
        if (rule != null) {
            this.sendUpdateMessage(LazyPacketData.simpleBoolean("ChangeMode", rule.isBlacklistMode()));
        }
    }
}