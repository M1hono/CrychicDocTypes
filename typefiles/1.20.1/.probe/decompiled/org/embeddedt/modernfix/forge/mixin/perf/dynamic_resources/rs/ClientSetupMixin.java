package org.embeddedt.modernfix.forge.mixin.perf.dynamic_resources.rs;

import com.refinedmods.refinedstorage.render.BakedModelOverrideRegistry;
import com.refinedmods.refinedstorage.render.BakedModelOverrideRegistry.BakedModelOverrideFactory;
import com.refinedmods.refinedstorage.setup.ClientSetup;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.client.resources.model.ModelBakery;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.client.resources.model.ModelState;
import net.minecraft.client.resources.model.UnbakedModel;
import net.minecraft.resources.ResourceLocation;
import org.embeddedt.modernfix.ModernFixClient;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.embeddedt.modernfix.annotation.RequiresMod;
import org.embeddedt.modernfix.api.entrypoint.ModernFixClientIntegration;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ ClientSetup.class })
@RequiresMod("refinedstorage")
@ClientOnlyMixin
public class ClientSetupMixin {

    @Shadow(remap = false)
    @Final
    private static BakedModelOverrideRegistry BAKED_MODEL_OVERRIDE_REGISTRY;

    @Inject(method = { "registerBakedModelOverrides" }, at = { @At("RETURN") }, remap = false)
    private static void addDynamicListener(CallbackInfo ci) {
        ModernFixClient.CLIENT_INTEGRATIONS.add(new ModernFixClientIntegration() {

            @Override
            public BakedModel onBakedModelLoad(ResourceLocation location, UnbakedModel baseModel, BakedModel originalModel, ModelState state, ModelBakery bakery) {
                BakedModelOverrideFactory factory = ClientSetupMixin.BAKED_MODEL_OVERRIDE_REGISTRY.get(location instanceof ModelResourceLocation ? new ResourceLocation(location.getNamespace(), location.getPath()) : location);
                return factory != null ? factory.create(originalModel, bakery.getBakedTopLevelModels()) : originalModel;
            }
        });
    }
}