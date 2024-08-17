package org.violetmoon.zetaimplforge.mod;

import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import org.apache.logging.log4j.LogManager;
import org.violetmoon.zeta.mod.ZetaClientProxy;
import org.violetmoon.zeta.mod.ZetaMod;
import org.violetmoon.zeta.mod.ZetaModProxy;
import org.violetmoon.zeta.util.handler.ToolInteractionHandler;
import org.violetmoon.zetaimplforge.ForgeZeta;
import org.violetmoon.zetaimplforge.client.ForgeZetaClient;
import org.violetmoon.zetaimplforge.config.ConfigEventDispatcher;
import org.violetmoon.zetaimplforge.world.ZetaBiomeModifier;

@Mod("zeta")
public class ZetaForgeMod {

    public ZetaForgeMod() {
        ForgeZeta zeta = new ForgeZeta("zeta", LogManager.getLogger("zeta-internal"));
        ZetaModProxy proxy = (ZetaModProxy) DistExecutor.runForDist(() -> ZetaClientProxy::new, () -> ZetaModProxy::new);
        Object zetaClient = DistExecutor.runForDist(() -> () -> new ForgeZetaClient(zeta), () -> () -> new Object());
        ZetaMod.start(zeta, proxy);
        ZetaMod.proxy.setClientZeta(zetaClient);
        MinecraftForge.EVENT_BUS.register(ToolInteractionHandler.class);
        ZetaBiomeModifier.registerBiomeModifier(FMLJavaModLoadingContext.get().getModEventBus());
        IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
        bus.addListener(this::setup);
    }

    public void setup(FMLCommonSetupEvent event) {
        event.enqueueWork(ConfigEventDispatcher::dispatchAllInitialLoads);
    }
}