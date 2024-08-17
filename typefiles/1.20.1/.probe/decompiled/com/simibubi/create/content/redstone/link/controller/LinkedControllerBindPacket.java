package com.simibubi.create.content.redstone.link.controller;

import com.simibubi.create.content.redstone.link.LinkBehaviour;
import com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour;
import net.minecraft.core.BlockPos;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.items.ItemStackHandler;

public class LinkedControllerBindPacket extends LinkedControllerPacketBase {

    private int button;

    private BlockPos linkLocation;

    public LinkedControllerBindPacket(int button, BlockPos linkLocation) {
        super((BlockPos) null);
        this.button = button;
        this.linkLocation = linkLocation;
    }

    public LinkedControllerBindPacket(FriendlyByteBuf buffer) {
        super(buffer);
        this.button = buffer.readVarInt();
        this.linkLocation = buffer.readBlockPos();
    }

    @Override
    public void write(FriendlyByteBuf buffer) {
        super.write(buffer);
        buffer.writeVarInt(this.button);
        buffer.writeBlockPos(this.linkLocation);
    }

    @Override
    protected void handleItem(ServerPlayer player, ItemStack heldItem) {
        if (!player.isSpectator()) {
            ItemStackHandler frequencyItems = LinkedControllerItem.getFrequencyItems(heldItem);
            LinkBehaviour linkBehaviour = BlockEntityBehaviour.get(player.m_9236_(), this.linkLocation, LinkBehaviour.TYPE);
            if (linkBehaviour != null) {
                linkBehaviour.getNetworkKey().forEachWithContext((f, first) -> frequencyItems.setStackInSlot(this.button * 2 + (first ? 0 : 1), f.getStack().copy()));
                heldItem.getTag().put("Items", frequencyItems.serializeNBT());
            }
        }
    }

    @Override
    protected void handleLectern(ServerPlayer player, LecternControllerBlockEntity lectern) {
    }
}