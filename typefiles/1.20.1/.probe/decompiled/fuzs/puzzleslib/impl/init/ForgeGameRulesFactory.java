package fuzs.puzzleslib.impl.init;

import fuzs.puzzleslib.api.init.v2.GameRulesFactory;
import java.util.function.BiConsumer;
import net.minecraft.server.MinecraftServer;
import net.minecraft.world.level.GameRules;

public final class ForgeGameRulesFactory implements GameRulesFactory {

    @Override
    public <T extends GameRules.Value<T>> GameRules.Key<T> register(String name, GameRules.Category category, GameRules.Type<T> type) {
        return GameRules.register(name, category, type);
    }

    @Override
    public GameRules.Type<GameRules.BooleanValue> createBooleanRule(boolean defaultValue, BiConsumer<MinecraftServer, GameRules.BooleanValue> callback) {
        return GameRules.BooleanValue.create(defaultValue, callback);
    }

    @Override
    public GameRules.Type<GameRules.IntegerValue> createIntRule(int defaultValue, int minimumValue, int maximumValue, BiConsumer<MinecraftServer, GameRules.IntegerValue> callback) {
        return GameRules.IntegerValue.create(defaultValue, callback);
    }
}