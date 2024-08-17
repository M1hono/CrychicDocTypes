package mezz.jei.forge;

import mezz.jei.common.Constants;
import mezz.jei.common.config.IServerConfig;
import mezz.jei.common.util.MinecraftLocaleSupplier;
import mezz.jei.common.util.Translator;
import mezz.jei.forge.config.ServerConfig;
import mezz.jei.forge.events.PermanentEventSubscriptions;
import mezz.jei.forge.network.NetworkHandler;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

@Mod("jei")
public class JustEnoughItems {

    public JustEnoughItems() {
        Translator.setLocaleSupplier(new MinecraftLocaleSupplier());
        IEventBus eventBus = MinecraftForge.EVENT_BUS;
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();
        PermanentEventSubscriptions subscriptions = new PermanentEventSubscriptions(eventBus, modEventBus);
        ModLoadingContext modLoadingContext = ModLoadingContext.get();
        IServerConfig serverConfig = ServerConfig.register(modLoadingContext);
        NetworkHandler networkHandler = new NetworkHandler(Constants.NETWORK_CHANNEL_ID, "1.0.0");
        JustEnoughItemsCommon jeiCommon = new JustEnoughItemsCommon(networkHandler, serverConfig);
        jeiCommon.register(subscriptions);
        JustEnoughItemsClientSafeRunner clientSafeRunner = new JustEnoughItemsClientSafeRunner(networkHandler, subscriptions, serverConfig);
        DistExecutor.safeRunWhenOn(Dist.CLIENT, () -> clientSafeRunner::registerClient);
    }
}