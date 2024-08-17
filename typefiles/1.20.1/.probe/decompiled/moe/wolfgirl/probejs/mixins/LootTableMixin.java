package moe.wolfgirl.probejs.mixins;

import java.util.Map;
import moe.wolfgirl.probejs.GlobalStates;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.storage.loot.LootDataManager;
import net.minecraft.world.level.storage.loot.LootDataType;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ LootDataManager.class })
public class LootTableMixin {

    @Inject(method = { "apply*" }, at = { @At("RETURN") })
    public void apply(Map<LootDataType<?>, Map<ResourceLocation, ?>> parsedMap, CallbackInfo ci) {
        for (Map<ResourceLocation, ?> value : parsedMap.values()) {
            for (ResourceLocation resourceLocation : value.keySet()) {
                GlobalStates.LOOT_TABLES.add(resourceLocation.toString());
            }
        }
    }
}