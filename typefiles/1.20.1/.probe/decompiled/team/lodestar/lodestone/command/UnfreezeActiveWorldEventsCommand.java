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

public class UnfreezeActiveWorldEventsCommand {

    public static LiteralArgumentBuilder<CommandSourceStack> register() {
        return (LiteralArgumentBuilder<CommandSourceStack>) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) Commands.literal("unfreeze").requires(cs -> cs.hasPermission(2))).then(Commands.literal("all").executes(ctx -> {
            LodestoneWorldDataCapability.getCapabilityOptional(((CommandSourceStack) ctx.getSource()).getLevel()).ifPresent(c -> {
                List<WorldEventInstance> activeWorldEvents = c.activeWorldEvents;
                List<WorldEventInstance> currentlyFrozen = activeWorldEvents.stream().filter(WorldEventInstance::isFrozen).toList();
                if (currentlyFrozen.isEmpty()) {
                    ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.unfreeze.all.fail").withStyle(ChatFormatting.RED));
                } else {
                    currentlyFrozen.forEach(instance -> instance.frozen = false);
                    currentlyFrozen.forEach(WorldEventInstance::setDirty);
                    ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.unfreeze.all.success", currentlyFrozen.size()).withStyle(ChatFormatting.AQUA), true);
                }
            });
            return 1;
        }))).then(Commands.literal("single").then(Commands.argument("target", WorldEventInstanceArgument.worldEventInstance()).executes(ctx -> {
            WorldEventInstance event = WorldEventInstanceArgument.getEventInstance(ctx, "target");
            if (!event.isFrozen()) {
                ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.unfreeze.target.fail").withStyle(ChatFormatting.RED));
            } else {
                event.frozen = false;
                event.setDirty();
                ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.unfreeze.target.success", event.type.id.toString()).withStyle(ChatFormatting.AQUA), true);
            }
            return 1;
        })))).then(Commands.literal("type").then(Commands.argument("type", WorldEventTypeArgument.worldEventType()).executes(ctx -> {
            WorldEventType type = WorldEventTypeArgument.getEventType(ctx, "type");
            LodestoneWorldDataCapability.getCapabilityOptional(((CommandSourceStack) ctx.getSource()).getLevel()).ifPresent(c -> {
                List<WorldEventInstance> activeWorldEvents = c.activeWorldEvents.stream().filter(instance -> instance.type == type).toList();
                List<WorldEventInstance> currentlyFrozen = activeWorldEvents.stream().filter(WorldEventInstance::isFrozen).toList();
                if (currentlyFrozen.isEmpty()) {
                    ((CommandSourceStack) ctx.getSource()).sendFailure(Component.translatable("command.lodestone.worldevent.unfreeze.type.fail", type.id.toString()).withStyle(ChatFormatting.RED));
                } else {
                    currentlyFrozen.forEach(instance -> instance.frozen = false);
                    currentlyFrozen.forEach(WorldEventInstance::setDirty);
                    ((CommandSourceStack) ctx.getSource()).sendSuccess(() -> Component.translatable("command.lodestone.worldevent.unfreeze.type.success", currentlyFrozen.size(), type.id.toString()).withStyle(ChatFormatting.AQUA), true);
                }
            });
            return 1;
        })));
    }
}