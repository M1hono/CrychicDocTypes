package mezz.jei.forge.plugins.forge;

import mezz.jei.api.IModPlugin;
import mezz.jei.api.JeiPlugin;
import mezz.jei.api.registration.IRuntimeRegistration;
import mezz.jei.forge.events.RuntimeEventSubscriptions;
import mezz.jei.forge.startup.EventRegistration;
import mezz.jei.gui.startup.JeiEventHandlers;
import mezz.jei.gui.startup.JeiGuiStarter;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.MinecraftForge;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@JeiPlugin
public class ForgeGuiPlugin implements IModPlugin {

    private static final Logger LOGGER = LogManager.getLogger();

    private final RuntimeEventSubscriptions runtimeSubscriptions = new RuntimeEventSubscriptions(MinecraftForge.EVENT_BUS);

    @Override
    public ResourceLocation getPluginUid() {
        return new ResourceLocation("jei", "forge_gui");
    }

    @Override
    public void registerRuntime(IRuntimeRegistration registration) {
        if (!this.runtimeSubscriptions.isEmpty()) {
            LOGGER.error("JEI GUI is already running.");
            this.runtimeSubscriptions.clear();
        }
        JeiEventHandlers eventHandlers = JeiGuiStarter.start(registration);
        EventRegistration.registerEvents(this.runtimeSubscriptions, eventHandlers);
    }

    @Override
    public void onRuntimeUnavailable() {
        LOGGER.info("Stopping JEI GUI");
        this.runtimeSubscriptions.clear();
    }
}