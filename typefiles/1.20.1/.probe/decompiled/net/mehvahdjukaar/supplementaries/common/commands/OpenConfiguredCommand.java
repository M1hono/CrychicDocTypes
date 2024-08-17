package net.mehvahdjukaar.supplementaries.common.commands;

import com.mojang.brigadier.Command;
import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.builder.ArgumentBuilder;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import net.mehvahdjukaar.supplementaries.common.network.ClientBoundOpenConfigsPacket;
import net.mehvahdjukaar.supplementaries.common.network.ModNetwork;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerPlayer;

public class OpenConfiguredCommand implements Command<CommandSourceStack> {

    public static ArgumentBuilder<CommandSourceStack, ?> register(CommandDispatcher<CommandSourceStack> dispatcher) {
        return ((LiteralArgumentBuilder) Commands.literal("configs").requires(cs -> cs.hasPermission(0))).executes(new OpenConfiguredCommand());
    }

    public int run(CommandContext<CommandSourceStack> context) {
        if (CommonConfigs.SPEC.hasConfigScreen()) {
            if (((CommandSourceStack) context.getSource()).getEntity() instanceof ServerPlayer serverPlayer) {
                ModNetwork.CHANNEL.sendToClientPlayer(serverPlayer, new ClientBoundOpenConfigsPacket());
            }
        } else {
            ((CommandSourceStack) context.getSource()).sendSuccess(() -> Component.translatable("message.supplementaries.command.configs"), false);
        }
        return 0;
    }
}