package dev.ftb.mods.ftbquests.net;

import dev.architectury.networking.NetworkManager;
import dev.architectury.networking.simple.BaseC2SMessage;
import dev.architectury.networking.simple.MessageType;
import dev.ftb.mods.ftbquests.integration.PermissionsHelper;
import dev.ftb.mods.ftbquests.quest.ServerQuestFile;
import dev.ftb.mods.ftbquests.quest.TeamData;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.server.level.ServerPlayer;

public class ToggleEditingModeMessage extends BaseC2SMessage {

    public ToggleEditingModeMessage() {
    }

    public ToggleEditingModeMessage(FriendlyByteBuf friendlyByteBuf) {
    }

    @Override
    public MessageType getType() {
        return FTBQuestsNetHandler.TOGGLE_EDITING_MODE;
    }

    @Override
    public void write(FriendlyByteBuf buf) {
    }

    @Override
    public void handle(NetworkManager.PacketContext context) {
        ServerPlayer player = (ServerPlayer) context.getPlayer();
        if (PermissionsHelper.hasEditorPermission(player, false) || player.m_20194_() != null && player.m_20194_().isSingleplayerOwner(player.m_36316_())) {
            TeamData data = ServerQuestFile.INSTANCE.getOrCreateTeamData(player);
            data.setCanEdit(player, !data.getCanEdit(player));
        }
    }
}