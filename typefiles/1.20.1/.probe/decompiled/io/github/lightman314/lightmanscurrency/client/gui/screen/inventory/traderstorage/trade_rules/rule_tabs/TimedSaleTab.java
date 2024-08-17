package io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.rule_tabs;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.misc.client.rendering.EasyGuiGraphics;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRuleSubTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.trade_rules.TradeRulesClientTab;
import io.github.lightman314.lightmanscurrency.client.gui.widget.TimeInputWidget;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyAddonHelper;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyTextButton;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import io.github.lightman314.lightmanscurrency.client.util.ScreenArea;
import io.github.lightman314.lightmanscurrency.client.util.TextInputUtil;
import io.github.lightman314.lightmanscurrency.common.traders.rules.types.TimedSale;
import io.github.lightman314.lightmanscurrency.util.TimeUtil;
import javax.annotation.Nonnull;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.Component;

public class TimedSaleTab extends TradeRuleSubTab<TimedSale> {

    EditBox discountInput;

    EasyButton buttonSetDiscount;

    EasyButton buttonStartSale;

    TimeInputWidget durationInput;

    public TimedSaleTab(@Nonnull TradeRulesClientTab<?> parent) {
        super(parent, TimedSale.TYPE);
    }

    @Nonnull
    @Override
    public IconData getIcon() {
        return IconAndButtonUtil.ICON_TIMED_SALE;
    }

    @Override
    public void initialize(ScreenArea screenArea, boolean firstOpen) {
        this.discountInput = this.addChild(new EditBox(this.getFont(), screenArea.x + 25, screenArea.y + 9, 20, 20, EasyText.empty()));
        this.discountInput.setMaxLength(2);
        TimedSale rule = this.getRule();
        if (rule != null) {
            this.discountInput.setValue(Integer.toString(rule.getDiscount()));
        }
        this.buttonSetDiscount = this.addChild(new EasyTextButton(screenArea.pos.offset(125, 10), 50, 20, LCText.BUTTON_SET.get(), this::PressSetDiscountButton));
        this.buttonStartSale = this.addChild(new EasyTextButton(screenArea.pos.offset(25, 45), 156, 20, this::getButtonText, this::PressStartButton).withAddons(EasyAddonHelper.tooltip(this::getButtonTooltip)));
        this.durationInput = this.addChild(new TimeInputWidget(screenArea.pos.offset(63, 75), 10, TimeUtil.TimeUnit.DAY, TimeUtil.TimeUnit.MINUTE, this::onTimeSet));
        this.durationInput.setTime(this.getRule().getDuration());
    }

    @Override
    public void renderBG(@Nonnull EasyGuiGraphics gui) {
        if (this.getRule() != null) {
            gui.pushOffset(this.discountInput);
            gui.drawString(LCText.GUI_PLAYER_DISCOUNTS_INFO.get(), this.discountInput.m_5711_() + 4, 3, 16777215);
            gui.popOffset();
            Component infoText = LCText.GUI_TIMED_SALE_INFO_INACTIVE.get(new TimeUtil.TimeData(this.getRule().getDuration()).getShortString());
            if (this.getRule().timerActive()) {
                infoText = LCText.GUI_TIMED_SALE_INFO_ACTIVE.get(this.getRule().getTimeRemaining().getShortString(3));
            }
            gui.drawString(infoText, 25, 35, 16777215);
        }
    }

    @Override
    public void tick() {
        this.buttonStartSale.m_93666_(this.getButtonText());
        TimedSale rule = this.getRule();
        this.buttonStartSale.f_93623_ = rule != null && (rule.timerActive() || rule.getDuration() > 0L && rule.isActive());
        TextInputUtil.whitelistInteger(this.discountInput, 0L, 99L);
    }

    private Component getButtonText() {
        TimedSale rule = this.getRule();
        return rule != null && rule.timerActive() ? LCText.BUTTON_TIMED_SALE_STOP.get() : LCText.BUTTON_TIMED_SALE_START.get();
    }

    private Component getButtonTooltip() {
        TimedSale rule = this.getRule();
        return rule != null && rule.timerActive() ? LCText.TOOLTIP_TIMED_SALE_STOP.get() : LCText.TOOLTIP_TIMED_SALE_START.get();
    }

    void PressSetDiscountButton(EasyButton button) {
        int discount = TextInputUtil.getIntegerValue(this.discountInput, 1);
        TimedSale rule = this.getRule();
        if (rule != null) {
            rule.setDiscount(discount);
        }
        this.sendUpdateMessage(LazyPacketData.simpleInt("Discount", discount));
    }

    void PressStartButton(EasyButton button) {
        TimedSale rule = this.getRule();
        boolean setActive = rule != null && !rule.timerActive();
        if (rule != null) {
            rule.setStartTime(rule.timerActive() ? 0L : TimeUtil.getCurrentTime());
        }
        this.sendUpdateMessage(LazyPacketData.simpleBoolean("StartSale", setActive));
    }

    public void onTimeSet(TimeUtil.TimeData newTime) {
        TimedSale rule = this.getRule();
        if (rule != null) {
            rule.setDuration(newTime.miliseconds);
        }
        this.sendUpdateMessage(LazyPacketData.simpleLong("Duration", newTime.miliseconds));
    }
}