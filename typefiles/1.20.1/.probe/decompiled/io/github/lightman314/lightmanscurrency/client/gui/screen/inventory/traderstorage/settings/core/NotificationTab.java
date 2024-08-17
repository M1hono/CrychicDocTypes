package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.core;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.ownership.Owner;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.SettingsSubTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.TraderSettingsClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.PlainButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.common.teams.Team;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.item.Items;

public class NotificationTab extends SettingsSubTab {

    PlainButton buttonToggleNotifications;

    PlainButton buttonToggleChatNotifications;

    EasyButton buttonToggleTeamLevel;

    public NotificationTab(@Nonnull TraderSettingsClientTab parent) {
        super(parent);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconData.of(Items.ENDER_PEARL);
    }

    public MutableComponent getTooltip() {
        return LCText.TOOLTIP_TRADER_SETTINGS_NOTIFICATIONS.get();
    }

    @Override
    public boolean canOpen() {
        return this.menu.hasPermission("notifications");
    }

    @Override
    public void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.buttonToggleNotifications = this.addChild(IconAndButtonUtil.checkmarkButton(screenArea.pos.offset(35, 35), this::ToggleNotifications, this::notificationsEnabled));
        this.buttonToggleChatNotifications = this.addChild(IconAndButtonUtil.checkmarkButton(screenArea.pos.offset(35, 55), this::ToggleChatNotifications, this::notificationsToChat));
        this.buttonToggleTeamLevel = this.addChild(new EasyTextButton(screenArea.pos.offset(20, 80), screenArea.width - 40, 20, EasyText.empty(), this::ToggleTeamNotificationLevel));
    }

    private boolean notificationsEnabled() {
        TraderData t = this.menu.getTrader();
        return t != null && t.notificationsEnabled();
    }

    private boolean notificationsToChat() {
        TraderData t = this.menu.getTrader();
        return t != null && t.notificationsToChat();
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            gui.drawString(LCText.GUI_TRADER_SETTINGS_NOTIFICATIONS_ENABLED.get(), 47, 35, 4210752);
            gui.drawString(LCText.GUI_TRADER_SETTINGS_NOTIFICATIONS_CHAT.get(), 47, 55, 4210752);
            this.buttonToggleTeamLevel.f_93624_ = trader.getOwner().getValidOwner().hasNotificationLevels();
            if (this.buttonToggleTeamLevel.f_93624_) {
                Component message = LCText.GUI_TRADER_SETTINGS_NOTIFICATIONS_TARGET.get(Owner.getOwnerLevelBlurb(trader.teamNotificationLevel()));
                this.buttonToggleTeamLevel.m_93666_(message);
            }
        }
    }

    private void ToggleNotifications(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.sendMessage(LazyPacketData.simpleBoolean("Notifications", !trader.notificationsEnabled()));
        }
    }

    private void ToggleChatNotifications(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.sendMessage(LazyPacketData.simpleBoolean("NotificationsToChat", !trader.notificationsToChat()));
        }
    }

    private void ToggleTeamNotificationLevel(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.sendMessage(LazyPacketData.simpleInt("TeamNotificationLevel", Team.NextBankLimit(trader.teamNotificationLevel())));
        }
    }
}