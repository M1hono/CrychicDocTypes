package team.lodestar.lodestone.command;

import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.network.chat.Component;
import team.lodestar.lodestone.capability.LodestoneWorldDataCapability;
import team.lodestar.lodestone.command.arguments.WorldEventInstanceArgument;
import team.lodestar.lodestone.command.arguments.WorldEventTypeArgument;
import team.lodestar.lodestone.systems.worldevent.WorldEventInstance;
import team.lodestar.lodestone.systems.worldevent.WorldEventType;

public class FreezeActiveWorldEventsCommand {

    public static LiteralArgumentBuilder<CommandSourceStack> register() {
        return (LiteralArgumentBuilder<CommandSourceStack>) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) Commands.literal("freeze").requires(cs -> cs.hasPermission(2))).then(Commands.literal("all").executes(ctx -> {
            LodestoneWorldDataCapability.getCapabilityOptional(((CommandSourceStack) ctx.getSource()).getLevel()).ifPresent(c -> {
                List<WorldEventInstance> activeWorldEvents = c.activeWorldEvents;
                List<WorldEventInstance> notCurrentlyFrozen = activeWorldEvents.stream().filter(event -> !event.isFrozen()).toList();
                if (notCurrentlyFrozen.isEmpty()) {
                    ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.freeze.all.fail").withStyle(ChatFormatting.RED));
                } else {
                    notCurrentlyFrozen.forEach(instance -> instance.frozen = true);
                    notCurrentlyFrozen.forEach(WorldEventInstance::setDirty);
                    ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.freeze.all.success", notCurrentlyFrozen.size()).withStyle(ChatFormatting.AQUA), true);
                }
            });
            return 1;
        }))).then(Commands.literal("single").then(Commands.argument("target", WorldEventInstanceArgument.worldEventInstance()).executes(ctx -> {
            WorldEventInstance event = WorldEventInstanceArgument.getEventInstance(ctx, "target");
            if (event.isFrozen()) {
                ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.freeze.target.fail").withStyle(ChatFormatting.RED));
            } else {
                event.frozen = true;
                event.setDirty();
                ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.freeze.target.success", event.type.id.toString()).withStyle(ChatFormatting.AQUA), true);
            }
            return 1;
        })))).then(Commands.literal("type").then(Commands.argument("type", WorldEventTypeArgument.worldEventType()).executes(ctx -> {
            WorldEventType type = WorldEventTypeArgument.getEventType(ctx, "type");
            LodestoneWorldDataCapability.getCapabilityOptional(((CommandSourceStack) ctx.getSource()).getLevel()).ifPresent(c -> {
                List<WorldEventInstance> activeWorldEvents = c.activeWorldEvents.stream().filter(instance -> instance.type == type).toList();
                List<WorldEventInstance> notCurrentlyFrozen = activeWorldEvents.stream().filter(event -> !event.isFrozen()).toList();
                if (notCurrentlyFrozen.isEmpty()) {
                    ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.freeze.type.fail", type.id.toString()).withStyle(ChatFormatting.RED));
                } else {
                    notCurrentlyFrozen.forEach(instance -> instance.frozen = true);
                    notCurrentlyFrozen.forEach(WorldEventInstance::setDirty);
                    ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.freeze.type.success", notCurrentlyFrozen.size(), type.id.toString()).withStyle(ChatFormatting.AQUA), true);
                }
            });
            return 1;
        })));
    }
}