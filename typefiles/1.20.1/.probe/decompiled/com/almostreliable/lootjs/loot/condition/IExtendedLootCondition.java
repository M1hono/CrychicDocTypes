package com.almostreliable.lootjs.loot.condition;

import com.almostreliable.lootjs.core.ILootCondition;
import com.almostreliable.lootjs.core.LootConditionTypes;
import java.util.List;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
import net.minecraft.world.level.storage.loot.predicates.LootItemConditionType;

public interface IExtendedLootCondition extends ILootCondition, LootItemCondition {

    @Override
    default LootItemConditionType getType() {
        return LootConditionTypes.UNUSED;
    }

    @Override
    default boolean applyLootHandler(LootContext context, List<ItemStack> loot) {
        return this.test(context);
    }
}