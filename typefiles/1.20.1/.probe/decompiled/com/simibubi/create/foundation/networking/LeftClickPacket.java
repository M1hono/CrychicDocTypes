package com.simibubi.create.foundation.networking;

import com.simibubi.create.foundation.events.CommonEvents;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraftforge.network.NetworkDirection;
import net.minecraftforge.network.NetworkEvent;

public class LeftClickPacket extends SimplePacketBase {

    public LeftClickPacket() {
    }

    public LeftClickPacket(FriendlyByteBuf buffer) {
    }

    @Override
    public void write(FriendlyByteBuf buffer) {
    }

    @Override
    public boolean handle(NetworkEvent.Context context) {
        if (context.getDirection() != NetworkDirection.PLAY_TO_SERVER) {
            return false;
        } else {
            context.enqueueWork(() -> CommonEvents.leftClickEmpty(context.getSender()));
            return true;
        }
    }
}