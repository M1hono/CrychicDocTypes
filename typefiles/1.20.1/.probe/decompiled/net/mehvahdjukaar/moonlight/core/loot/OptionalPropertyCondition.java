package net.mehvahdjukaar.moonlight.core.loot;

import com.google.common.collect.ImmutableSet;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSyntaxException;
import java.util.Set;
import net.mehvahdjukaar.moonlight.api.MoonlightRegistry;
import net.minecraft.advancements.critereon.StatePropertiesPredicate;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraft.world.level.storage.loot.Serializer;
import net.minecraft.world.level.storage.loot.parameters.LootContextParam;
import net.minecraft.world.level.storage.loot.parameters.LootContextParams;
import net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
import net.minecraft.world.level.storage.loot.predicates.LootItemConditionType;
import org.jetbrains.annotations.Nullable;

public class OptionalPropertyCondition implements LootItemCondition {

    @Nullable
    final Block block;

    final StatePropertiesPredicate properties;

    private final ResourceLocation blockId;

    OptionalPropertyCondition(ResourceLocation blockId, Block block, StatePropertiesPredicate predicate) {
        this.properties = predicate;
        this.block = block;
        this.blockId = blockId;
    }

    @Override
    public LootItemConditionType getType() {
        return (LootItemConditionType) MoonlightRegistry.LAZY_PROPERTY.get();
    }

    @Override
    public Set<LootContextParam<?>> getReferencedContextParams() {
        return ImmutableSet.of(LootContextParams.BLOCK_STATE);
    }

    public boolean test(LootContext lootContext) {
        if (this.block == null) {
            return false;
        } else {
            BlockState blockState = lootContext.getParamOrNull(LootContextParams.BLOCK_STATE);
            return blockState != null && blockState.m_60713_(this.block) && this.properties.matches(blockState);
        }
    }

    public static class ConditionSerializer implements Serializer<OptionalPropertyCondition> {

        public void serialize(JsonObject jsonObject, OptionalPropertyCondition condition, JsonSerializationContext context) {
            jsonObject.addProperty("block", condition.blockId.toString());
            jsonObject.add("properties", condition.properties.serializeToJson());
        }

        public OptionalPropertyCondition deserialize(JsonObject jsonObject, JsonDeserializationContext context) {
            ResourceLocation resourceLocation = new ResourceLocation(GsonHelper.getAsString(jsonObject, "block"));
            Block block = (Block) BuiltInRegistries.BLOCK.m_6612_(resourceLocation).orElse(null);
            StatePropertiesPredicate predicate = StatePropertiesPredicate.ANY;
            if (block != null) {
                predicate = StatePropertiesPredicate.fromJson(jsonObject.get("properties"));
                predicate.checkState(block.getStateDefinition(), string -> {
                    throw new JsonSyntaxException("Block " + block + " has no property " + string);
                });
            }
            return new OptionalPropertyCondition(resourceLocation, block, predicate);
        }
    }
}