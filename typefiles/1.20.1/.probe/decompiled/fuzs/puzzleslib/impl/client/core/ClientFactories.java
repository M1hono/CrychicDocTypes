package fuzs.puzzleslib.impl.client.core;

import fuzs.puzzleslib.api.client.core.v1.ClientModConstructor;
import fuzs.puzzleslib.api.client.screen.v2.KeyMappingActivationHelper;
import fuzs.puzzleslib.api.client.screen.v2.ScreenHelper;
import fuzs.puzzleslib.api.core.v1.ContentRegistrationFlags;
import fuzs.puzzleslib.api.core.v1.ServiceProviderHelper;
import fuzs.puzzleslib.impl.client.init.ItemDisplayOverridesImpl;
import java.util.Set;

public interface ClientFactories {

    ClientFactories INSTANCE = ServiceProviderHelper.load(ClientFactories.class);

    void constructClientMod(String var1, ClientModConstructor var2, Set<ContentRegistrationFlags> var3, Set<ContentRegistrationFlags> var4);

    ScreenHelper getScreenHelper();

    ItemDisplayOverridesImpl getItemModelDisplayOverrides();

    KeyMappingActivationHelper getKeyMappingActivationHelper();
}