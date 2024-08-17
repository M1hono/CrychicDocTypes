package io.github.lightman314.lightmanscurrency.common.menus.tax_collector.tabs;

import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.tax_collector.BasicSettingsClientTab;
import io.github.lightman314.lightmanscurrency.common.menus.TaxCollectorMenu;
import io.github.lightman314.lightmanscurrency.common.menus.tax_collector.TaxCollectorTab;
import io.github.lightman314.lightmanscurrency.common.taxes.TaxEntry;
import java.util.function.Function;
import net.minecraft.world.inventory.Slot;

public class BasicSettingsTab extends TaxCollectorTab {

    public BasicSettingsTab(TaxCollectorMenu menu) {
        super(menu);
    }

    @Override
    public Object createClientTab(Object screen) {
        return new BasicSettingsClientTab(screen, this);
    }

    @Override
    public void onTabOpen() {
    }

    @Override
    public void onTabClose() {
    }

    @Override
    public void addMenuSlots(Function<Slot, Slot> addSlot) {
    }

    public void SetActive(boolean newState) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setActive(newState, this.menu.player);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleBoolean("SetActive", newState));
            }
        }
    }

    public void SetRadius(int newRadius) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setRadius(newRadius);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleInt("ChangeRadius", newRadius));
            }
        }
    }

    public void SetHeight(int newHeight) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setHeight(newHeight);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleInt("ChangeHeight", newHeight));
            }
        }
    }

    public void SetVertOffset(int newVertOffset) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setVertOffset(newVertOffset);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleInt("ChangeVertOffset", newVertOffset));
            }
        }
    }

    public void SetRate(int newRate) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setTaxRate(newRate);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleInt("ChangeTaxRate", newRate));
            }
        }
    }

    public void SetRenderMode(int newMode) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setRenderMode(newMode);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleInt("ChangeRenderMode", newMode));
            }
        }
    }

    public void SetName(String name) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setName(name);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleString("ChangeName", name));
            }
        }
    }

    public void SetBankAccountLink(boolean newState) {
        TaxEntry entry = this.getEntry();
        if (entry != null && this.hasAccess()) {
            entry.setLinkedToBank(newState);
            if (this.isClient()) {
                this.menu.SendMessageToServer(LazyPacketData.simpleBoolean("ChangeLinkedToBank", newState));
            }
        }
    }

    @Override
    public void receiveMessage(LazyPacketData message) {
        if (message.contains("SetActive")) {
            this.SetActive(message.getBoolean("SetActive"));
        }
        if (message.contains("ChangeRadius")) {
            this.SetRadius(message.getInt("ChangeRadius"));
        }
        if (message.contains("ChangeHeight")) {
            this.SetHeight(message.getInt("ChangeHeight"));
        }
        if (message.contains("ChangeVertOffset")) {
            this.SetVertOffset(message.getInt("ChangeVertOffset"));
        }
        if (message.contains("ChangeTaxRate")) {
            this.SetRate(message.getInt("ChangeTaxRate"));
        }
        if (message.contains("ChangeRenderMode")) {
            this.SetRenderMode(message.getInt("ChangeRenderMode"));
        }
        if (message.contains("ChangeName")) {
            this.SetName(message.getString("ChangeName"));
        }
        if (message.contains("ChangeLinkedToBank")) {
            this.SetBankAccountLink(message.getBoolean("ChangeLinkedToBank"));
        }
    }
}