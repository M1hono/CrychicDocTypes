package io.github.lightman314.lightmanscurrency.integration.claiming;

import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.arguments.IntegerArgumentType;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import io.github.lightman314.lightmanscurrency.LCConfig;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.capability.money.IMoneyHandler;
import io.github.lightman314.lightmanscurrency.api.misc.EasyText;
import io.github.lightman314.lightmanscurrency.api.money.MoneyAPI;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import javax.annotation.Nonnull;
import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.RegisterCommandsEvent;

public class LCClaiming {

    private static IClaimPurchaseHandler currentHandler = null;

    public static void setup(@Nonnull IClaimPurchaseHandler handler) {
        if (currentHandler != null && currentHandler != handler) {
            LightmansCurrency.LogWarning("Multiple compatible Claim Mods are available!");
        }
        if (currentHandler == null) {
            MinecraftForge.EVENT_BUS.addListener(LCClaiming::registerCommand);
        }
        currentHandler = handler;
    }

    private static void registerCommand(@Nonnull RegisterCommandsEvent event) {
        if (currentHandler != null) {
            CommandDispatcher<CommandSourceStack> dispatcher = event.getDispatcher();
            LiteralArgumentBuilder<CommandSourceStack> lcclaimscommand = (LiteralArgumentBuilder<CommandSourceStack>) ((LiteralArgumentBuilder) ((LiteralArgumentBuilder) Commands.literal("lcclaims").requires(CommandSourceStack::m_230897_)).then(((LiteralArgumentBuilder) Commands.literal("buy").then(((LiteralArgumentBuilder) Commands.literal("claim").executes(c -> tryBuyClaim(c, 1))).then(Commands.argument("count", IntegerArgumentType.integer(1)).executes(c -> tryBuyClaim(c, IntegerArgumentType.getInteger(c, "count")))))).then(((LiteralArgumentBuilder) Commands.literal("forceload").executes(c -> tryBuyForceload(c, 1))).then(Commands.argument("count", IntegerArgumentType.integer(1)).executes(c -> tryBuyForceload(c, IntegerArgumentType.getInteger(c, "count"))))))).then(Commands.literal("info").executes(LCClaiming::info));
            dispatcher.register(lcclaimscommand);
        }
    }

    private static int info(CommandContext<CommandSourceStack> commandContext) throws CommandSyntaxException {
        CommandSourceStack source = (CommandSourceStack) commandContext.getSource();
        ServerPlayer player = source.getPlayerOrException();
        if (currentHandler == null) {
            EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_FAIL_NO_DATA.get());
            return 0;
        } else {
            int count = 0;
            if (currentHandler.canBuyClaims(player)) {
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_INFO_CLAIMS.get(currentHandler.getCurrentBonusClaims(player), LCConfig.SERVER.claimingMaxClaimCount.get()), false);
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_INFO_PRICE.get(LCConfig.SERVER.claimingClaimPrice.get().getText(LCText.COMMAND_CLAIM_INVALID.get())), false);
                count++;
            }
            if (currentHandler.canBuyForceload(player)) {
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_INFO_FORCELOAD.get(currentHandler.getCurrentBonusForceloadChunks(player), LCConfig.SERVER.claimingMaxForceloadCount.get()), false);
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_INFO_PRICE.get(LCConfig.SERVER.claimingForceloadPrice.get().getText(LCText.COMMAND_CLAIM_INVALID.get())), false);
                count++;
            }
            if (count <= 0) {
                EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_INFO_DISABLED.get());
            }
            return count;
        }
    }

    private static int tryBuyClaim(CommandContext<CommandSourceStack> commandContext, int count) throws CommandSyntaxException {
        CommandSourceStack source = (CommandSourceStack) commandContext.getSource();
        ServerPlayer player = source.getPlayerOrException();
        if (currentHandler == null) {
            EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_FAIL_NO_DATA.get());
            return 0;
        } else if (!currentHandler.canBuyClaims(player)) {
            EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_CLAIM_DISABLED.get());
            return 0;
        } else {
            MoneyValue price = LCConfig.SERVER.claimingClaimPrice.get();
            int boughtCount = 0;
            boolean hitLimit = false;
            boolean invalidPrice;
            for (invalidPrice = price.isEmpty(); boughtCount < count && !invalidPrice; boughtCount++) {
                int allowedToBuy = LCConfig.SERVER.claimingMaxClaimCount.get() - currentHandler.getCurrentBonusClaims(player) - boughtCount;
                if (allowedToBuy <= 0) {
                    hitLimit = true;
                    break;
                }
                IMoneyHandler handler = MoneyAPI.API.GetPlayersMoneyHandler(player);
                if (!handler.extractMoney(price, true).isEmpty()) {
                    break;
                }
                handler.extractMoney(price, false);
            }
            if (boughtCount > 0) {
                currentHandler.addBonusClaims(player, boughtCount);
                if (hitLimit) {
                    EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_BUY_CLAIM_LIMIT_REACHED.get(LCConfig.SERVER.claimingMaxClaimCount.get()), true);
                }
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_BUY_CLAIM_SUCCESS.get(boughtCount), true);
                return boughtCount;
            } else {
                if (invalidPrice) {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_FAIL_INVALID_PRICE.get());
                } else if (hitLimit) {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_CLAIM_LIMIT_REACHED.get(LCConfig.SERVER.claimingMaxClaimCount.get()));
                } else {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_CLAIM_CANNOT_AFFORD.get());
                }
                return 0;
            }
        }
    }

    private static int tryBuyForceload(CommandContext<CommandSourceStack> commandContext, int count) throws CommandSyntaxException {
        CommandSourceStack source = (CommandSourceStack) commandContext.getSource();
        ServerPlayer player = source.getPlayerOrException();
        if (currentHandler == null) {
            EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_FAIL_NO_DATA.get());
            return 0;
        } else if (!currentHandler.canBuyForceload(player)) {
            EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_FORCELOAD_DISABLED.get());
            return 0;
        } else {
            MoneyValue price = LCConfig.SERVER.claimingForceloadPrice.get();
            int boughtCount = 0;
            boolean hitLimit = false;
            boolean invalidPrice;
            for (invalidPrice = price.isEmpty(); boughtCount < count && !invalidPrice; boughtCount++) {
                int allowedToBuy = LCConfig.SERVER.claimingMaxForceloadCount.get() - currentHandler.getCurrentBonusForceloadChunks(player) - boughtCount;
                if (allowedToBuy <= 0) {
                    hitLimit = true;
                    break;
                }
                IMoneyHandler handler = MoneyAPI.API.GetPlayersMoneyHandler(player);
                if (!handler.extractMoney(price, true).isEmpty()) {
                    break;
                }
                handler.extractMoney(price, false);
            }
            if (boughtCount > 0) {
                currentHandler.addBonusForceloadChunks(player, boughtCount);
                if (hitLimit) {
                    EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_BUY_FORCELOAD_LIMIT_REACHED.get(LCConfig.SERVER.claimingMaxForceloadCount.get()), true);
                }
                EasyText.sendCommandSucess(source, LCText.COMMAND_CLAIM_BUY_FORCELOAD_SUCCESS.get(boughtCount), true);
                return boughtCount;
            } else {
                if (invalidPrice) {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_FAIL_INVALID_PRICE.get());
                } else if (hitLimit) {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_FORCELOAD_LIMIT_REACHED.get(LCConfig.SERVER.claimingMaxForceloadCount.get()));
                } else {
                    EasyText.sendCommandFail(source, LCText.COMMAND_CLAIM_BUY_FORCELOAD_CANNOT_AFFORD.get());
                }
                return 0;
            }
        }
    }
}