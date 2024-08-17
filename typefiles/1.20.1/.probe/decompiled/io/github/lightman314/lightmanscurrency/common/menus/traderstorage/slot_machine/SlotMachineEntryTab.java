package io.github.lightman314.lightmanscurrency.common.menus.traderstorage.slot_machine;

import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.network.LazyPacketData;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.ITraderStorageMenu;
import io.github.lightman314.lightmanscurrency.api.traders.menu.storage.TraderStorageTab;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.traderstorage.slot_machine.SlotMachineEntryClientTab;
import io.github.lightman314.lightmanscurrency.common.traders.permissions.Permissions;
import io.github.lightman314.lightmanscurrency.common.traders.slot_machine.SlotMachineEntry;
import io.github.lightman314.lightmanscurrency.common.traders.slot_machine.SlotMachineTraderData;
import io.github.lightman314.lightmanscurrency.util.DebugUtil;
import java.util.List;
import java.util.function.Function;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class SlotMachineEntryTab extends TraderStorageTab {

    public SlotMachineEntryTab(@Nonnull ITraderStorageMenu menu) {
        super(menu);
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public Object createClientTab(Object screen) {
        return new SlotMachineEntryClientTab(screen, this);
    }

    @Override
    public boolean canOpen(Player player) {
        return true;
    }

    @Override
    public void onTabOpen() {
    }

    @Override
    public void onTabClose() {
    }

    @Override
    public void addStorageMenuSlots(Function<Slot, Slot> addSlot) {
    }

    public void AddEntry() {
        if (this.menu.hasPermission("editTrades")) {
            if (this.menu.getTrader() instanceof SlotMachineTraderData trader) {
                trader.addEntry();
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.simpleFlag("AddEntry"));
                }
            }
        }
    }

    public void RemoveEntry(int entryIndex) {
        if (this.menu.hasPermission("editTrades")) {
            if (this.menu.getTrader() instanceof SlotMachineTraderData trader) {
                trader.removeEntry(entryIndex);
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.simpleInt("RemoveEntry", entryIndex));
                }
            }
        }
    }

    private void markEntriesDirty() {
        if (this.menu.getTrader() instanceof SlotMachineTraderData trader) {
            trader.markEntriesDirty();
        }
    }

    @Nullable
    private SlotMachineEntry getEntry(int entryIndex) {
        if (this.menu.getTrader() instanceof SlotMachineTraderData trader) {
            List<SlotMachineEntry> entries = trader.getAllEntries();
            return entryIndex >= 0 && entryIndex < entries.size() ? (SlotMachineEntry) entries.get(entryIndex) : null;
        } else {
            return null;
        }
    }

    public void AddEntryItem(int entryIndex, ItemStack item) {
        if (!this.menu.hasPermission("editTrades")) {
            Permissions.PermissionWarning(this.menu.getPlayer(), "edit slot machine trade", "editTrades");
        } else {
            SlotMachineEntry entry = this.getEntry(entryIndex);
            if (entry != null) {
                entry.TryAddItem(item);
                entry.validateItems();
                this.markEntriesDirty();
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.builder().setInt("EditEntry", entryIndex).setCompound("AddItem", item.save(new CompoundTag())));
                }
            }
        }
    }

    public void EditEntryItem(int entryIndex, int itemIndex, ItemStack item) {
        if (!this.menu.hasPermission("editTrades")) {
            Permissions.PermissionWarning(this.menu.getPlayer(), "edit slot machine trade", "editTrades");
        } else if (item.isEmpty()) {
            this.RemoveEntryItem(entryIndex, itemIndex);
        } else {
            SlotMachineEntry entry = this.getEntry(entryIndex);
            if (entry != null) {
                if (itemIndex < 0 || itemIndex >= entry.items.size()) {
                    return;
                }
                entry.items.set(itemIndex, item);
                entry.validateItems();
                this.markEntriesDirty();
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.builder().setInt("EditEntry", entryIndex).setInt("ItemIndex", itemIndex).setCompound("EditItem", item.save(new CompoundTag())));
                }
            }
        }
    }

    public void RemoveEntryItem(int entryIndex, int itemIndex) {
        if (!this.menu.hasPermission("editTrades")) {
            Permissions.PermissionWarning(this.menu.getPlayer(), "edit slot machine trade", "editTrades");
        } else {
            SlotMachineEntry entry = this.getEntry(entryIndex);
            if (entry != null) {
                if (itemIndex < 0 || itemIndex >= entry.items.size()) {
                    return;
                }
                entry.items.remove(itemIndex);
                entry.validateItems();
                this.markEntriesDirty();
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.builder().setInt("EditEntry", entryIndex).setInt("RemoveItem", itemIndex));
                }
            }
        }
    }

    public void ChangeEntryWeight(int entryIndex, int newWeight) {
        if (!this.menu.hasPermission("editTrades")) {
            Permissions.PermissionWarning(this.menu.getPlayer(), "edit slot machine trade", "editTrades");
        } else {
            SlotMachineEntry entry = this.getEntry(entryIndex);
            if (entry != null) {
                entry.setWeight(newWeight);
                this.markEntriesDirty();
                LightmansCurrency.LogDebug("Changed entry[" + entryIndex + "]'s weight on the " + DebugUtil.getSideText(this.menu) + "!");
                if (this.menu.isClient()) {
                    this.menu.SendMessage(LazyPacketData.builder().setInt("EditEntry", entryIndex).setInt("SetWeight", newWeight));
                }
            }
        }
    }

    @Override
    public void receiveMessage(LazyPacketData message) {
        if (message.contains("AddEntry")) {
            this.AddEntry();
        }
        if (message.contains("RemoveEntry")) {
            this.RemoveEntry(message.getInt("RemoveEntry"));
        }
        if (message.contains("EditEntry")) {
            int entryIndex = message.getInt("EditEntry");
            if (message.contains("AddItem")) {
                this.AddEntryItem(entryIndex, ItemStack.of(message.getNBT("AddItem")));
            } else if (message.contains("EditItem") && message.contains("ItemIndex")) {
                this.EditEntryItem(entryIndex, message.getInt("ItemIndex"), ItemStack.of(message.getNBT("EditItem")));
            } else if (message.contains("RemoveItem")) {
                this.RemoveEntryItem(entryIndex, message.getInt("RemoveItem"));
            } else if (message.contains("SetWeight")) {
                this.ChangeEntryWeight(entryIndex, message.getInt("SetWeight"));
            }
        }
    }
}