package noobanidus.mods.lootr.init;

import net.minecraft.core.registries.Registries;
import net.minecraft.world.level.storage.loot.predicates.LootItemConditionType;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.RegistryObject;
import noobanidus.mods.lootr.loot.conditions.LootCount;

public class ModLoot {

    private static final DeferredRegister<LootItemConditionType> REGISTER = DeferredRegister.create(Registries.LOOT_CONDITION_TYPE, "lootr");

    public static final RegistryObject<LootItemConditionType> LOOT_COUNT = REGISTER.register("loot_count", () -> new LootItemConditionType(new LootCount.Serializer()));

    public static void register(IEventBus bus) {
        REGISTER.register(bus);
    }
}