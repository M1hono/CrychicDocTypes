package se.mickelus.tetra.module;

import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.arguments.StringArgumentType;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.brigadier.suggestion.Suggestions;
import com.mojang.brigadier.suggestion.SuggestionsBuilder;
import java.util.concurrent.CompletableFuture;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.commands.CommandBuildContext;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.commands.SharedSuggestionProvider;
import net.minecraft.commands.arguments.item.ItemArgument;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.decoration.ItemFrame;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import se.mickelus.tetra.items.modular.IModularItem;
import se.mickelus.tetra.module.data.VariantData;

@ParametersAreNonnullByDefault
public class ModuleDevCommand {

    private static final Logger logger = LogManager.getLogger();

    public static void register(CommandDispatcher<CommandSourceStack> dispatcher, CommandBuildContext context) {
        dispatcher.register((LiteralArgumentBuilder) ((LiteralArgumentBuilder) Commands.literal("tmdev").requires(source -> source.hasPermission(2))).then(Commands.argument("item", ItemArgument.item(context)).then(Commands.argument("module", StringArgumentType.greedyString()).suggests(ModuleDevCommand::getModuleSuggestions).executes(ModuleDevCommand::run))));
    }

    private static int run(CommandContext<CommandSourceStack> context) throws CommandSyntaxException {
        BlockPos pos = BlockPos.containing(((CommandSourceStack) context.getSource()).getPosition());
        Level world = ((CommandSourceStack) context.getSource()).getLevel();
        ItemStack baseStack = ItemArgument.getItem(context, "item").createItemStack(1, false);
        if (!(baseStack.getItem() instanceof IModularItem)) {
            baseStack = ItemUpgradeRegistry.instance.getReplacement(baseStack);
        }
        ItemModule module = ItemUpgradeRegistry.instance.getModule(StringArgumentType.getString(context, "module"));
        VariantData[] data = module.getVariantData();
        for (int i = 0; i < data.length; i++) {
            ItemStack itemStack = baseStack.copy();
            module.addModule(itemStack, data[i].key, ((CommandSourceStack) context.getSource()).getPlayerOrException());
            IModularItem.updateIdentifier(itemStack);
            plopFrame(world, pos.offset(i / 5, i % 5, 0), itemStack, module.getName(itemStack));
        }
        return 1;
    }

    private static void plopFrame(Level world, BlockPos pos, ItemStack itemStack, String label) {
        itemStack.setHoverName(Component.literal(label));
        ItemFrame itemFrame = new ItemFrame(world, pos, Direction.SOUTH);
        itemFrame.setItem(itemStack);
        world.m_7967_(itemFrame);
    }

    private static CompletableFuture<Suggestions> getModuleSuggestions(CommandContext<CommandSourceStack> context, SuggestionsBuilder builder) {
        return SharedSuggestionProvider.suggest((String[]) ItemUpgradeRegistry.instance.getAllModules().stream().map(ItemModule::getKey).toArray(String[]::new), builder);
    }
}