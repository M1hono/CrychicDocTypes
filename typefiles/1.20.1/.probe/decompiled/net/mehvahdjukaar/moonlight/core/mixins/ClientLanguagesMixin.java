package net.mehvahdjukaar.moonlight.core.mixins;

import com.llamalad7.mixinextras.sugar.Local;
import java.util.List;
import java.util.Map;
import net.mehvahdjukaar.moonlight.api.events.AfterLanguageLoadEvent;
import net.mehvahdjukaar.moonlight.api.events.MoonlightEventsHelper;
import net.mehvahdjukaar.moonlight.api.set.BlockSetAPI;
import net.minecraft.client.resources.language.ClientLanguage;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;

@Mixin({ ClientLanguage.class })
public abstract class ClientLanguagesMixin {

    @ModifyArg(method = { "loadFrom" }, at = @At(value = "INVOKE", target = "Lcom/google/common/collect/ImmutableMap;copyOf(Ljava/util/Map;)Lcom/google/common/collect/ImmutableMap;"))
    private static Map<String, String> addEntries(Map<String, String> map, @Local List<String> languageInfo) {
        AfterLanguageLoadEvent event = new AfterLanguageLoadEvent(map, languageInfo);
        if (event.isDefault()) {
            BlockSetAPI.getRegistries().forEach(r -> r.addTypeTranslations(event));
            MoonlightEventsHelper.postEvent(event, AfterLanguageLoadEvent.class);
        }
        return map;
    }
}