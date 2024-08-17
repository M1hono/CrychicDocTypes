package net.mehvahdjukaar.moonlight.api;

import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem;
import net.mehvahdjukaar.moonlight.api.platform.RegHelper;
import net.mehvahdjukaar.moonlight.core.Moonlight;
import net.mehvahdjukaar.moonlight.core.criteria_triggers.GrindItemTrigger;
import net.mehvahdjukaar.moonlight.core.loot.OptionalItemPool;
import net.mehvahdjukaar.moonlight.core.loot.OptionalPropertyCondition;
import net.mehvahdjukaar.moonlight.core.misc.CaveFilter;
import net.minecraft.advancements.CriteriaTriggers;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.levelgen.placement.PlacementModifierType;
import net.minecraft.world.level.storage.loot.entries.LootPoolEntryType;
import net.minecraft.world.level.storage.loot.predicates.LootItemConditionType;
import org.jetbrains.annotations.ApiStatus.Internal;

public class MoonlightRegistry {

    public static final TagKey<Block> SHEARABLE_TAG = TagKey.create(Registries.BLOCK, new ResourceLocation("mineable/shear"));

    public static final TagKey<Block> NON_RECOLORABLE_BLOCKS_TAG = TagKey.create(Registries.BLOCK, new ResourceLocation("non_recolorable"));

    public static final TagKey<Item> NON_RECOLORABLE_ITEMS_TAG = TagKey.create(Registries.ITEM, new ResourceLocation("non_recolorable"));

    public static final Supplier<PlacementModifierType<CaveFilter>> CAVE_MODIFIER = RegHelper.register(Moonlight.res("below_heightmaps"), CaveFilter.Type::new, Registries.PLACEMENT_MODIFIER_TYPE);

    public static final Supplier<BlockPlacerItem> BLOCK_PLACER = RegHelper.registerItem(Moonlight.res("placeable_item"), () -> new BlockPlacerItem(Blocks.VOID_AIR, new Item.Properties()));

    public static final Supplier<LootPoolEntryType> LAZY_ITEM = RegHelper.register(Moonlight.res("optional_item"), () -> new LootPoolEntryType(new OptionalItemPool.Serializer()), Registries.LOOT_POOL_ENTRY_TYPE);

    public static final Supplier<LootItemConditionType> LAZY_PROPERTY = RegHelper.register(Moonlight.res("optional_block_state_property"), () -> new LootItemConditionType(new OptionalPropertyCondition.ConditionSerializer()), Registries.LOOT_CONDITION_TYPE);

    public static final GrindItemTrigger GRIND_TRIGGER = CriteriaTriggers.register(new GrindItemTrigger());

    @Internal
    public static void init() {
    }
}