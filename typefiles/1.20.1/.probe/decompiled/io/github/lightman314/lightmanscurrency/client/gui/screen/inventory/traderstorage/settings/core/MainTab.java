package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.core;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.SettingsSubTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.settings.TraderSettingsClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.PlainButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyAddonHelper;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.common.core.ModItems;
import io.github.lightman314.lightmanscurrency.common.player.LCAdminMode;
import io.github.lightman314.lightmanscurrency.network.message.persistentdata.CPacketCreatePersistentTrader;
import io.github.lightman314.lightmanscurrency.network.message.trader.CPacketAddOrRemoveTrade;
import javax.annotation.Nonnull;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.MutableComponent;

public class MainTab extends SettingsSubTab {

    EditBox nameInput;

    EasyButton buttonSetName;

    EasyButton buttonResetName;

    PlainButton buttonToggleBankLink;

    IconButton buttonToggleCreative;

    EasyButton buttonAddTrade;

    EasyButton buttonRemoveTrade;

    EasyButton buttonSavePersistentTrader;

    EditBox persistentTraderIDInput;

    EditBox persistentTraderOwnerInput;

    public MainTab(@Nonnull TraderSettingsClientTab parent) {
        super(parent);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconData.of(ModItems.TRADING_CORE);
    }

    public MutableComponent getTooltip() {
        return LCText.TOOLTIP_TRADER_SETTINGS_NAME.get();
    }

    @Override
    public boolean canOpen() {
        return true;
    }

    @Override
    public void initialize(ScreenArea screenArea, boolean firstOpen) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.nameInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 20, screenArea.y + 25, 160, 20, EasyText.empty()));
            this.nameInput.setMaxLength(32);
            this.nameInput.setValue(trader.getCustomName());
            this.buttonSetName = this.addChild(new EasyTextButton(screenArea.pos.offset(20, 50), 74, 20, LCText.BUTTON_SETTINGS_CHANGE_NAME.get(), this::SetName));
            this.buttonResetName = this.addChild(new EasyTextButton(screenArea.pos.offset(screenArea.width - 93, 50), 74, 20, LCText.BUTTON_SETTINGS_RESET_NAME.get(), this::ResetName));
            this.buttonToggleCreative = this.addChild(IconAndButtonUtil.creativeToggleButton(screenArea.pos.offset(176, 110), this::ToggleCreative, () -> {
                TraderData t = this.menu.getTrader();
                return t != null && t.isCreative();
            }));
            this.buttonAddTrade = this.addChild(IconAndButtonUtil.plusButton(screenArea.pos.offset(166, 110), this::AddTrade).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_SETTINGS_CREATIVE_ADD_TRADE)));
            this.buttonRemoveTrade = this.addChild(IconAndButtonUtil.minusButton(screenArea.pos.offset(166, 120), this::RemoveTrade).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_SETTINGS_CREATIVE_REMOVE_TRADE)));
            this.buttonToggleBankLink = this.addChild(IconAndButtonUtil.checkmarkButton(screenArea.pos.offset(20, 72), this::ToggleBankLink, () -> {
                TraderData t = this.menu.getTrader();
                return t != null && t.getLinkedToBank();
            }));
            this.buttonToggleBankLink.f_93624_ = this.menu.hasPermission("bankLink");
            this.buttonSavePersistentTrader = this.addChild(new IconButton(screenArea.pos.offset(10, 110), this::SavePersistentTraderData, IconAndButtonUtil.ICON_PERSISTENT_DATA).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_PERSISTENT_CREATE_TRADER)));
            this.buttonSavePersistentTrader.f_93624_ = LCAdminMode.isAdminPlayer(this.menu.getPlayer());
            int idWidth = this.getFont().width(LCText.GUI_PERSISTENT_ID.get());
            this.persistentTraderIDInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 37 + idWidth, screenArea.y + 110, 108 - idWidth, 18, EasyText.empty()));
            int ownerWidth = this.getFont().width(LCText.GUI_PERSISTENT_OWNER.get());
            this.persistentTraderOwnerInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 12 + ownerWidth, screenArea.y + 85, 178 - ownerWidth, 18, EasyText.empty()));
            this.tick();
        }
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            gui.drawString(LCText.GUI_NAME.get(), 20, 15, 4210752);
            if (this.menu.hasPermission("bankLink") && !trader.isCreative()) {
                gui.drawString(LCText.GUI_SETTINGS_BANK_LINK.get(), 32, 73, 4210752);
            }
            if (LCAdminMode.isAdminPlayer(this.menu.getPlayer())) {
                String count = String.valueOf(trader.getTradeCount());
                int width = gui.font.width(count);
                gui.drawString(count, 164 - width, 115, 4210752);
                if (this.persistentTraderIDInput != null) {
                    gui.drawString(LCText.GUI_PERSISTENT_ID.get(), 35, 115, 16777215);
                    gui.drawString(LCText.GUI_PERSISTENT_OWNER.get(), 10, 90, 16777215);
                }
            }
        }
    }

    @Override
    public void tick() {
        boolean canChangeName = this.menu.hasPermission("changeName");
        this.nameInput.setEditable(canChangeName);
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.buttonSetName.f_93623_ = !this.nameInput.getValue().contentEquals(trader.getCustomName());
            this.buttonSetName.f_93624_ = canChangeName;
            this.buttonResetName.f_93623_ = trader.hasCustomName();
            this.buttonResetName.f_93624_ = canChangeName;
            boolean isAdmin = LCAdminMode.isAdminPlayer(this.menu.getPlayer());
            this.buttonToggleCreative.f_93624_ = isAdmin;
            if (this.buttonToggleCreative.f_93624_) {
                this.buttonAddTrade.f_93624_ = true;
                this.buttonAddTrade.f_93623_ = trader.getTradeCount() < 100;
                this.buttonRemoveTrade.f_93624_ = true;
                this.buttonRemoveTrade.f_93623_ = trader.getTradeCount() > 1;
            } else {
                this.buttonAddTrade.f_93624_ = false;
                this.buttonRemoveTrade.f_93624_ = false;
            }
            boolean canLinkAccount = this.menu.hasPermission("bankLink") && !trader.isCreative();
            this.buttonToggleBankLink.f_93624_ = canLinkAccount;
            if (canLinkAccount) {
                this.buttonToggleBankLink.f_93623_ = trader.canLinkBankAccount() || trader.getLinkedToBank();
            }
            if (this.buttonSavePersistentTrader != null) {
                this.buttonSavePersistentTrader.f_93624_ = isAdmin;
                this.buttonSavePersistentTrader.f_93623_ = trader.hasValidTrade();
            }
            if (this.persistentTraderIDInput != null) {
                this.persistentTraderIDInput.f_93624_ = isAdmin;
                this.persistentTraderIDInput.tick();
            }
            if (this.persistentTraderOwnerInput != null) {
                this.persistentTraderOwnerInput.f_93624_ = isAdmin;
                this.persistentTraderOwnerInput.tick();
            }
        }
    }

    private void SetName(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            String customName = trader.getCustomName();
            if (!customName.contentEquals(this.nameInput.getValue())) {
                this.sendMessage(LazyPacketData.simpleString("ChangeName", this.nameInput.getValue()));
            }
        }
    }

    private void ResetName(EasyButton button) {
        this.nameInput.setValue("");
        this.SetName(button);
    }

    private void ToggleCreative(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.sendMessage(LazyPacketData.simpleBoolean("MakeCreative", !trader.isCreative()));
        }
    }

    private void ToggleBankLink(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            this.sendMessage(LazyPacketData.simpleBoolean("LinkToBankAccount", !trader.getLinkedToBank()));
        }
    }

    private void AddTrade(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            new CPacketAddOrRemoveTrade(trader.getID(), true).send();
        }
    }

    private void RemoveTrade(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null) {
            new CPacketAddOrRemoveTrade(trader.getID(), false).send();
        }
    }

    private void SavePersistentTraderData(EasyButton button) {
        TraderData trader = this.menu.getTrader();
        if (trader != null && trader.canMakePersistent()) {
            new CPacketCreatePersistentTrader(trader.getID(), this.persistentTraderIDInput.getValue(), this.persistentTraderOwnerInput.getValue()).send();
        }
    }
}