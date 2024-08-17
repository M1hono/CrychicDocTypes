package fuzs.puzzleslib.impl.entity;

import fuzs.puzzleslib.api.entity.v1.AdditionalAddEntityData;
import fuzs.puzzleslib.api.network.v3.ClientMessageListener;
import fuzs.puzzleslib.api.network.v3.ClientboundMessage;
import fuzs.puzzleslib.impl.PuzzlesLib;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.client.multiplayer.ClientPacketListener;
import net.minecraft.client.player.LocalPlayer;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.protocol.game.ClientboundAddEntityPacket;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;

public record ClientboundAddEntityDataMessage(ClientboundAddEntityPacket vanillaPacket, FriendlyByteBuf additionalData) implements ClientboundMessage<ClientboundAddEntityDataMessage> {

    public ClientMessageListener<ClientboundAddEntityDataMessage> getHandler() {
        return new ClientMessageListener<ClientboundAddEntityDataMessage>() {

            public void handle(ClientboundAddEntityDataMessage message, Minecraft client, ClientPacketListener handler, LocalPlayer player, ClientLevel level) {
                try {
                    ClientboundAddEntityPacket packet = message.vanillaPacket();
                    handler.handleAddEntity(packet);
                    Entity entity = level.getEntity(packet.getId());
                    if (entity instanceof AdditionalAddEntityData) {
                        ((AdditionalAddEntityData) entity).readAdditionalAddEntityData(message.additionalData());
                    } else {
                        EntityType<?> entitytype = packet.getType();
                        PuzzlesLib.LOGGER.warn("Skipping additional add entity data for entity with id {}", entitytype);
                    }
                } finally {
                    message.additionalData().release();
                }
            }
        };
    }
}