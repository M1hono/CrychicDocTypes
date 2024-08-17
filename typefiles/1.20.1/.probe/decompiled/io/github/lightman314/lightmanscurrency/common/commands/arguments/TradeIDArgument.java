package io.github.lightman314.lightmanscurrency.common.commands.arguments;

import com.mojang.brigadier.StringReader;
import com.mojang.brigadier.arguments.ArgumentType;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.brigadier.exceptions.SimpleCommandExceptionType;
import com.mojang.brigadier.suggestion.Suggestions;
import com.mojang.brigadier.suggestion.SuggestionsBuilder;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.common.playertrading.PlayerTrade;
import io.github.lightman314.lightmanscurrency.common.playertrading.PlayerTradeManager;
import java.util.concurrent.CompletableFuture;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.server.level.ServerPlayer;

public class TradeIDArgument implements ArgumentType<Integer> {

    private static final SimpleCommandExceptionType ERROR_NOT_VALID = new SimpleCommandExceptionType(LCText.ARGUMENT_TRADEID_INVALID.get());

    private TradeIDArgument() {
    }

    public static TradeIDArgument argument() {
        return new TradeIDArgument();
    }

    public static int getTradeID(CommandContext<CommandSourceStack> commandContext, String name) {
        return (Integer) commandContext.getArgument(name, Integer.class);
    }

    public Integer parse(StringReader reader) throws CommandSyntaxException {
        String tradeID = reader.readUnquotedString();
        if (isNumerical(tradeID)) {
            try {
                return Integer.parseInt(tradeID);
            } catch (Throwable var4) {
            }
        }
        throw ERROR_NOT_VALID.createWithContext(reader);
    }

    private static boolean isNumerical(String string) {
        for (int i = 0; i < string.length(); i++) {
            char c = string.charAt(i);
            if (c < '0' || c > '9') {
                return false;
            }
        }
        return true;
    }

    public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> commandContext, SuggestionsBuilder suggestionsBuilder) {
        if (commandContext.getSource() instanceof CommandSourceStack source) {
            ServerPlayer player = source.getPlayer();
            if (player == null) {
                return suggestionsBuilder.buildFuture();
            }
            for (PlayerTrade trade : PlayerTradeManager.GetAllTrades()) {
                if (trade.isGuest(player)) {
                    suggestionsBuilder.suggest(trade.tradeID);
                }
            }
        }
        return suggestionsBuilder.buildFuture();
    }
}