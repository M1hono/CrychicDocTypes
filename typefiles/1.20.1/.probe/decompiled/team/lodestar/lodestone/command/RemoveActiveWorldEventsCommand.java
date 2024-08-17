package team.lodestar.lodestone.command;

import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import net.minecraft.ChatFormatting;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.network.chat.Component;
import net.minecraft.world.level.Level;
import net.minecraftforge.network.PacketDistributor;
import team.lodestar.lodestone.capability.LodestoneWorldDataCapability;
import team.lodestar.lodestone.command.arguments.WorldEventInstanceArgument;
import team.lodestar.lodestone.command.arguments.WorldEventTypeArgument;
import team.lodestar.lodestone.network.worldevent.UpdateWorldEventPacket;
import team.lodestar.lodestone.registry.common.LodestonePacketRegistry;
import team.lodestar.lodestone.systems.worldevent.WorldEventInstance;
import team.lodestar.lodestone.systems.worldevent.WorldEventType;

public class RemoveActiveWorldEventsCommand {

    public static LiteralArgumentBuilder<CommandSourceStack> register() {
        return (LiteralArgumentBuilder<CommandSourceStack>) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) Commands.literal("remove").requires(cs -> cs.hasPermission(2))).then(Commands.literal("all").executes(ctx -> {
            CommandSourceStack source = (CommandSourceStack) ctx.getSource();
            Level level = source.getLevel();
            AtomicInteger count = new AtomicInteger();
            LodestoneWorldDataCapability.getCapabilityOptional(level).ifPresent(c -> {
                count.set(c.activeWorldEvents.size());
                c.activeWorldEvents.forEach(instance -> {
                    instance.end(level);
                    LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.ALL.noArg(), new UpdateWorldEventPacket(instance.uuid, instance.synchronizeNBT()));
                });
            });
            if (count.get() > 0) {
                source.sendSuccess(() -> Component.translatable("command.lodestone.worldevent.remove.all.success", String.valueOf(count.get())), true);
                return 1;
            } else {
                source.sendFailure(Component.translatable("command.lodestone.worldevent.remove.all.fail"));
                return 0;
            }
        }))).then(Commands.literal("single").then(Commands.argument("target", WorldEventInstanceArgument.worldEventInstance()).executes(ctx -> {
            CommandSourceStack source = (CommandSourceStack) ctx.getSource();
            WorldEventInstance event = WorldEventInstanceArgument.getEventInstance(ctx, "target");
            event.end(source.getLevel());
            LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.ALL.noArg(), new UpdateWorldEventPacket(event.uuid, event.synchronizeNBT()));
            source.sendSuccess(() -> Component.translatable("command.lodestone.worldevent.remove.target.success", event.type.id.toString()).withStyle(ChatFormatting.AQUA), true);
            return 1;
        })))).then(Commands.literal("type").then(Commands.argument("type", WorldEventTypeArgument.worldEventType()).executes(ctx -> {
            CommandSourceStack source = (CommandSourceStack) ctx.getSource();
            WorldEventType type = WorldEventTypeArgument.getEventType(ctx, "type");
            AtomicInteger count = new AtomicInteger();
            LodestoneWorldDataCapability.getCapabilityOptional(source.getLevel()).ifPresent(c -> {
                List<WorldEventInstance> activeWorldEvents = c.activeWorldEvents.stream().filter(instance -> instance.type == type).toList();
                count.set(activeWorldEvents.size());
                activeWorldEvents.forEach(instance -> {
                    instance.end(source.getLevel());
                    LodestonePacketRegistry.LODESTONE_CHANNEL.send(PacketDistributor.ALL.noArg(), new UpdateWorldEventPacket(instance.uuid, instance.synchronizeNBT()));
                });
            });
            if (count.get() > 0) {
                source.sendSuccess(() -> Component.translatable("command.lodestone.worldevent.remove.type.success", String.valueOf(count.get()), type.id.toString()).withStyle(ChatFormatting.AQUA), true);
                return 1;
            } else {
                source.sendFailure(Component.translatable("command.lodestone.worldevent.remove.type.fail", type.id.toString()).withStyle(ChatFormatting.RED));
                return 0;
            }
        })));
    }
}