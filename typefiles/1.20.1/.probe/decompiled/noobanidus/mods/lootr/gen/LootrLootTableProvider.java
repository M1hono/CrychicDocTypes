package noobanidus.mods.lootr.gen;

import java.util.List;
import java.util.Set;
import java.util.function.BiConsumer;
import net.minecraft.data.PackOutput;
import net.minecraft.data.loot.LootTableProvider;
import net.minecraft.data.loot.LootTableSubProvider;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.storage.loot.LootPool;
import net.minecraft.world.level.storage.loot.LootTable;
import net.minecraft.world.level.storage.loot.entries.LootItem;
import net.minecraft.world.level.storage.loot.functions.SetItemCountFunction;
import net.minecraft.world.level.storage.loot.parameters.LootContextParamSets;
import net.minecraft.world.level.storage.loot.providers.number.ConstantValue;
import noobanidus.mods.lootr.api.LootrAPI;

public class LootrLootTableProvider {

    public static LootTableProvider create(PackOutput output) {
        return new LootTableProvider(output, Set.of(LootrAPI.ELYTRA_CHEST), List.of(new LootTableProvider.SubProviderEntry(LootrLootTableProvider.ChestLootTables::new, LootContextParamSets.CHEST)));
    }

    public static class ChestLootTables implements LootTableSubProvider {

        @Override
        public void generate(BiConsumer<ResourceLocation, LootTable.Builder> biConsumerResourceLocationLootTableBuilder0) {
            biConsumerResourceLocationLootTableBuilder0.accept(LootrAPI.ELYTRA_CHEST, LootTable.lootTable().withPool(LootPool.lootPool().setRolls(ConstantValue.exactly(1.0F)).add(LootItem.lootTableItem(Items.ELYTRA).apply(SetItemCountFunction.setCount(ConstantValue.exactly(1.0F))))));
        }
    }
}