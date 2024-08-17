package io.redspace.ironsspellbooks.network;

import io.redspace.ironsspellbooks.player.ClientMagicData;
import java.util.function.Supplier;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraftforge.network.NetworkEvent;

public class ClientboundSyncCooldown {

    private final String spellId;

    private final int duration;

    public ClientboundSyncCooldown(String spellId, int duration) {
        this.spellId = spellId;
        this.duration = duration;
    }

    public ClientboundSyncCooldown(FriendlyByteBuf buf) {
        this.spellId = buf.readUtf();
        this.duration = buf.readInt();
    }

    public void toBytes(FriendlyByteBuf buf) {
        buf.writeUtf(this.spellId);
        buf.writeInt(this.duration);
    }

    public boolean handle(Supplier<NetworkEvent.Context> supplier) {
        NetworkEvent.Context ctx = (NetworkEvent.Context) supplier.get();
        ctx.enqueueWork(() -> ClientMagicData.getCooldowns().addCooldown(this.spellId, this.duration));
        return true;
    }
}