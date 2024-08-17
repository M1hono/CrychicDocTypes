package io.github.lightman314.lightmanscurrency.common.items;

import io.github.lightman314.lightmanscurrency.LCTags;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.common.core.variants.Color;
import io.github.lightman314.lightmanscurrency.common.tickets.TicketSaveData;
import io.github.lightman314.lightmanscurrency.util.InventoryUtil;
import java.util.List;
import java.util.UUID;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.NotNull;

public class TicketItem extends Item {

    public TicketItem(Item.Properties properties) {
        super(properties);
    }

    @Override
    public void appendHoverText(@NotNull ItemStack stack, @Nullable Level level, @NotNull List<Component> tooltip, @NotNull TooltipFlag flagIn) {
        if (isPass(stack)) {
            tooltip.add(LCText.TOOLTIP_PASS.get());
        }
        long ticketID = GetTicketID(stack);
        if (ticketID >= -2L) {
            tooltip.add(LCText.TOOLTIP_TICKET_ID.get(ticketID));
        }
    }

    @Override
    public void inventoryTick(@NotNull ItemStack stack, @NotNull Level level, @NotNull Entity entity, int slot, boolean selected) {
        GetTicketID(stack);
    }

    public static boolean isTicket(ItemStack ticket) {
        return !ticket.isEmpty() && ticket.hasTag() ? ticket.getItem() instanceof TicketItem && InventoryUtil.ItemHasTag(ticket, LCTags.Items.TICKETS_TICKET) : false;
    }

    public static boolean isPass(ItemStack ticket) {
        return !ticket.isEmpty() && ticket.hasTag() ? ticket.getItem() instanceof TicketItem && InventoryUtil.ItemHasTag(ticket, LCTags.Items.TICKETS_PASS) : false;
    }

    public static boolean isTicketOrPass(ItemStack ticket) {
        return isTicket(ticket) || isPass(ticket);
    }

    public static boolean isMasterTicket(ItemStack ticket) {
        return !ticket.isEmpty() && ticket.hasTag() ? ticket.getItem() instanceof TicketItem && InventoryUtil.ItemHasTag(ticket, LCTags.Items.TICKETS_MASTER) : false;
    }

    public static long GetTicketID(ItemStack ticket) {
        if (!ticket.isEmpty() && ticket.getItem() instanceof TicketItem && ticket.hasTag()) {
            CompoundTag ticketTag = ticket.getTag();
            if (ticketTag.contains("TicketID", 4)) {
                return ticketTag.getLong("TicketID");
            } else if (ticketTag.contains("TicketID")) {
                UUID oldID = ticketTag.getUUID("TicketID");
                long newID = TicketSaveData.getConvertedID(oldID);
                ticketTag.putLong("TicketID", newID);
                ticketTag.putInt("TicketColor", Color.getFromIndex(newID).hexColor);
                return newID;
            } else {
                return Long.MIN_VALUE;
            }
        } else {
            return Long.MIN_VALUE;
        }
    }

    public static int GetTicketColor(ItemStack ticket) {
        if (!ticket.isEmpty() && ticket.getItem() instanceof TicketItem && ticket.hasTag()) {
            CompoundTag ticketTag = ticket.getTag();
            return !ticketTag.contains("TicketColor") ? 16777215 : ticketTag.getInt("TicketColor");
        } else {
            return 16777215;
        }
    }

    public static int GetDefaultTicketColor(long ticketID) {
        if (ticketID == -1L) {
            return Color.YELLOW.hexColor;
        } else {
            return ticketID == -2L ? Color.BLUE.hexColor : Color.getFromIndex(ticketID).hexColor;
        }
    }

    public static ItemStack CraftTicket(@Nonnull ItemStack master, @Nonnull Item item) {
        return isMasterTicket(master) ? CreateTicket(item, GetTicketID(master), GetTicketColor(master)) : ItemStack.EMPTY;
    }

    public static ItemStack CreateTicket(Item item, long ticketID) {
        return CreateTicket(item, ticketID, GetDefaultTicketColor(ticketID));
    }

    public static ItemStack CreateTicket(Item item, long ticketID, int color) {
        return CreateTicket(item, ticketID, color, 1);
    }

    public static ItemStack CreateTicket(Item item, long ticketID, int color, int count) {
        ItemStack ticket = new ItemStack(item, count);
        CompoundTag tag = ticket.getOrCreateTag();
        tag.putLong("TicketID", ticketID);
        tag.putInt("TicketColor", color);
        return ticket;
    }

    public static ItemStack CreateExampleTicket(@Nonnull Item item, @Nonnull Color color) {
        ItemStack ticket = new ItemStack(item);
        CompoundTag tag = ticket.getOrCreateTag();
        tag.putInt("TicketColor", color.hexColor);
        return ticket;
    }

    public static void SetTicketColor(ItemStack ticket, Color color) {
        SetTicketColor(ticket, color.hexColor);
    }

    public static void SetTicketColor(ItemStack ticket, int color) {
        CompoundTag tag = ticket.getOrCreateTag();
        tag.putInt("TicketColor", color);
    }
}