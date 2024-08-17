package mezz.jei.forge.config;

import java.util.function.Supplier;
import mezz.jei.common.config.IServerConfig;
import net.minecraftforge.common.ForgeConfigSpec;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.config.ModConfig.Type;

public final class ServerConfig implements IServerConfig {

    private final Supplier<Boolean> enableCheatModeForOp;

    private final Supplier<Boolean> enableCheatModeForCreative;

    private final Supplier<Boolean> enableCheatModeForGive;

    public static IServerConfig register(ModLoadingContext modLoadingContext) {
        ForgeConfigSpec.Builder builder = new ForgeConfigSpec.Builder();
        ServerConfig instance = new ServerConfig(builder);
        ForgeConfigSpec config = builder.build();
        modLoadingContext.registerConfig(Type.SERVER, config);
        return instance;
    }

    private ServerConfig(ForgeConfigSpec.Builder builder) {
        builder.push("cheat mode");
        builder.comment("Enable Cheat Mode for Operators (/op)");
        this.enableCheatModeForOp = builder.define("enableCheatModeForOp", true);
        builder.comment("Enable Cheat Mode for users in Creative Mode");
        this.enableCheatModeForCreative = builder.define("enableCheatModeForCreative", true);
        builder.comment("Enable Cheat Mode for users who can use /give");
        this.enableCheatModeForGive = builder.define("enableCheatModeForGive", false);
        builder.pop();
    }

    @Override
    public boolean isCheatModeEnabledForOp() {
        return (Boolean) this.enableCheatModeForOp.get();
    }

    @Override
    public boolean isCheatModeEnabledForCreative() {
        return (Boolean) this.enableCheatModeForCreative.get();
    }

    @Override
    public boolean isCheatModeEnabledForGive() {
        return (Boolean) this.enableCheatModeForGive.get();
    }
}