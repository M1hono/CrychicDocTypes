package io.github.lightman314.lightmanscurrency.common.core;

import io.github.lightman314.lightmanscurrency.common.commands.arguments.ColorArgument;
import io.github.lightman314.lightmanscurrency.common.commands.arguments.MoneyValueArgument;
import io.github.lightman314.lightmanscurrency.common.commands.arguments.TradeIDArgument;
import io.github.lightman314.lightmanscurrency.common.commands.arguments.TraderArgument;
import net.minecraft.commands.synchronization.ArgumentTypeInfo;
import net.minecraft.commands.synchronization.ArgumentTypeInfos;
import net.minecraft.commands.synchronization.SingletonArgumentInfo;
import net.minecraftforge.registries.RegistryObject;

public class ModCommandArguments {

    public static final RegistryObject<ArgumentTypeInfo<TraderArgument, ?>> TRADER_ARGUMENT = ModRegistries.COMMAND_ARGUMENT_TYPES.register("trader_argument", () -> ArgumentTypeInfos.registerByClass(TraderArgument.class, new TraderArgument.Info()));

    public static final RegistryObject<ArgumentTypeInfo<TradeIDArgument, ?>> TRADE_ID_ARGUMENT = ModRegistries.COMMAND_ARGUMENT_TYPES.register("trade_id_argument", () -> ArgumentTypeInfos.registerByClass(TradeIDArgument.class, SingletonArgumentInfo.contextFree(TradeIDArgument::argument)));

    public static final RegistryObject<ArgumentTypeInfo<ColorArgument, ?>> COLOR_ARGUMENT = ModRegistries.COMMAND_ARGUMENT_TYPES.register("color_argument", () -> ArgumentTypeInfos.registerByClass(ColorArgument.class, SingletonArgumentInfo.contextFree(ColorArgument::argument)));

    public static final RegistryObject<ArgumentTypeInfo<MoneyValueArgument, ?>> COIN_VALUE_ARGUMENT = ModRegistries.COMMAND_ARGUMENT_TYPES.register("coin_value_argument", () -> ArgumentTypeInfos.registerByClass(MoneyValueArgument.class, SingletonArgumentInfo.contextAware(MoneyValueArgument::argument)));

    public static void init() {
    }
}