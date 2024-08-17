package snownee.jade.addon.vanilla;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.BaseCommandBlock;
import net.minecraft.world.level.block.entity.CommandBlockEntity;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.IBlockComponentProvider;
import snownee.jade.api.IServerDataProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;

public enum CommandBlockProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> {

    INSTANCE;

    @Override
    public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) {
        if (accessor.getServerData().contains("Command")) {
            tooltip.add(Component.literal("> " + accessor.getServerData().getString("Command")));
        }
    }

    public void appendServerData(CompoundTag tag, BlockAccessor accessor) {
        Player player = accessor.getPlayer();
        if (player.canUseGameMasterBlocks()) {
            BaseCommandBlock logic = ((CommandBlockEntity) accessor.getBlockEntity()).getCommandBlock();
            String command = logic.getCommand();
            if (!command.isEmpty()) {
                if (command.length() > 40) {
                    command = command.substring(0, 37) + "...";
                }
                tag.putString("Command", command);
            }
        }
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.MC_COMMAND_BLOCK;
    }
}