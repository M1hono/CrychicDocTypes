package org.violetmoon.quark.base;

import net.minecraft.core.Registry;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.fml.common.Mod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.spongepowered.asm.mixin.MixinEnvironment;
import org.violetmoon.quark.base.proxy.ClientProxy;
import org.violetmoon.quark.base.proxy.CommonProxy;
import org.violetmoon.quark.integration.claim.FlanIntegration;
import org.violetmoon.quark.integration.claim.IClaimIntegration;
import org.violetmoon.quark.integration.lootr.ILootrIntegration;
import org.violetmoon.quark.integration.lootr.LootrIntegration;
import org.violetmoon.quark.integration.terrablender.AbstractUndergroundBiomeHandler;
import org.violetmoon.quark.integration.terrablender.TerrablenderUndergroundBiomeHandler;
import org.violetmoon.quark.integration.terrablender.VanillaUndergroundBiomeHandler;
import org.violetmoon.zeta.Zeta;
import org.violetmoon.zeta.multiloader.Env;
import org.violetmoon.zeta.util.Utils;
import org.violetmoon.zetaimplforge.ForgeZeta;

@Mod("quark")
public class Quark {

    public static final String MOD_ID = "quark";

    public static final String ODDITIES_ID = Utils.isDevEnv() ? "quark" : "quarkoddities";

    public static Quark instance;

    public static CommonProxy proxy;

    public static final Logger LOG = LogManager.getLogger("quark");

    public static final Zeta ZETA = new ForgeZeta("quark", LogManager.getLogger("quark-zeta"));

    public static final IClaimIntegration FLAN_INTEGRATION = ZETA.modIntegration("flan", () -> FlanIntegration::new, () -> IClaimIntegration.Dummy::new);

    public static final ILootrIntegration LOOTR_INTEGRATION = ZETA.modIntegration("lootr", () -> LootrIntegration::new, () -> ILootrIntegration.Dummy::new);

    public static final AbstractUndergroundBiomeHandler TERRABLENDER_INTEGRATION = ZETA.modIntegration("terrablender", () -> TerrablenderUndergroundBiomeHandler::new, () -> VanillaUndergroundBiomeHandler::new);

    public Quark() {
        instance = this;
        ZETA.start();
        proxy = Env.unsafeRunForDist(() -> ClientProxy::new, () -> CommonProxy::new);
        proxy.start();
        if (Utils.isDevEnv()) {
            MixinEnvironment.getCurrentEnvironment().audit();
        }
    }

    public static ResourceLocation asResource(String name) {
        return new ResourceLocation("quark", name);
    }

    public static <T> ResourceKey<T> asResourceKey(ResourceKey<? extends Registry<T>> base, String name) {
        return ResourceKey.create(base, asResource(name));
    }
}