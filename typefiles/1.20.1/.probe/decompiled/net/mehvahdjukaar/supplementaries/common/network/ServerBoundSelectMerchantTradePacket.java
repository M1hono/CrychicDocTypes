package net.mehvahdjukaar.supplementaries.common.network;

import net.mehvahdjukaar.moonlight.api.platform.network.ChannelHandler;
import net.mehvahdjukaar.moonlight.api.platform.network.Message;
import net.mehvahdjukaar.supplementaries.common.inventories.RedMerchantMenu;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.inventory.AbstractContainerMenu;

public class ServerBoundSelectMerchantTradePacket implements Message {

    private final int item;

    public ServerBoundSelectMerchantTradePacket(FriendlyByteBuf buf) {
        this.item = buf.readVarInt();
    }

    public ServerBoundSelectMerchantTradePacket(int slot) {
        this.item = slot;
    }

    @Override
    public void writeToBuffer(FriendlyByteBuf buf) {
        buf.writeVarInt(this.item);
    }

    @Override
    public void handle(ChannelHandler.Context context) {
        AbstractContainerMenu container = context.getSender().containerMenu;
        int i = this.item;
        if (container instanceof RedMerchantMenu redMerchantContainerMenu) {
            redMerchantContainerMenu.setSelectionHint(i);
            redMerchantContainerMenu.tryMoveItems(i);
        }
    }
}