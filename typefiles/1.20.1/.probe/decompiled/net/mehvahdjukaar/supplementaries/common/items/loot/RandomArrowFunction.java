package net.mehvahdjukaar.supplementaries.common.items.loot;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import java.util.ArrayList;
import java.util.List;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.mehvahdjukaar.supplementaries.common.items.QuiverItem;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.mehvahdjukaar.supplementaries.reg.ModTags;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.util.GsonHelper;
import net.minecraft.util.RandomSource;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.alchemy.Potion;
import net.minecraft.world.item.alchemy.PotionUtils;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction;
import net.minecraft.world.level.storage.loot.functions.LootItemFunction;
import net.minecraft.world.level.storage.loot.functions.LootItemFunctionType;
import net.minecraft.world.level.storage.loot.predicates.LootItemCondition;

public class RandomArrowFunction extends LootItemConditionalFunction {

    private static final List<ItemStack> RANDOM_ARROWS = new ArrayList();

    final int min;

    final int max;

    public static void setup() {
        for (Potion potion : BuiltInRegistries.POTION) {
            if (!Utils.isTagged(potion, BuiltInRegistries.POTION, ModTags.QUIVER_POTION_BLACKLIST)) {
                boolean isNegative = false;
                for (MobEffectInstance e : potion.getEffects()) {
                    if (!e.getEffect().isBeneficial()) {
                        isNegative = true;
                        break;
                    }
                }
                if (isNegative) {
                    RANDOM_ARROWS.add(PotionUtils.setPotion(new ItemStack(Items.TIPPED_ARROW), potion));
                }
            }
        }
        RANDOM_ARROWS.add(new ItemStack(Items.SPECTRAL_ARROW));
    }

    RandomArrowFunction(LootItemCondition[] pConditions, int min, int max) {
        super(pConditions);
        this.min = min;
        this.max = max;
    }

    @Override
    public LootItemFunctionType getType() {
        return (LootItemFunctionType) ModRegistry.RANDOM_ARROW_FUNCTION.get();
    }

    @Override
    public ItemStack run(ItemStack pStack, LootContext pContext) {
        RandomSource random = pContext.getRandom();
        createRandomQuiver(random, pStack, random.nextInt(this.min, this.max + 1));
        return pStack;
    }

    public static ItemStack createRandomQuiver(RandomSource random, float specialMultiplier) {
        ItemStack quiver = new ItemStack((ItemLike) ModRegistry.QUIVER_ITEM.get());
        int amount = random.nextInt(3, (int) (8.0F + specialMultiplier * 4.0F));
        return createRandomQuiver(random, quiver, amount);
    }

    private static ItemStack createRandomQuiver(RandomSource random, ItemStack quiver, int amount) {
        QuiverItem.Data data = QuiverItem.getQuiverData(quiver);
        if (data == null) {
            return quiver;
        } else {
            for (int tries = 0; amount > 0 && tries < 10; tries++) {
                int stackAmount = random.nextInt(1, 7);
                ItemStack arrow = ((ItemStack) RANDOM_ARROWS.get(random.nextInt(RANDOM_ARROWS.size()))).copy();
                stackAmount = Math.min(amount, stackAmount);
                amount -= stackAmount;
                arrow.setCount(stackAmount);
                data.tryAdding(arrow);
            }
            data.setSelectedSlot(0);
            return quiver;
        }
    }

    public static class Builder extends LootItemConditionalFunction.Builder<RandomArrowFunction.Builder> {

        private final int min;

        private final int max;

        public Builder() {
            this(3, 12);
        }

        public Builder(int min, int max) {
            this.min = min;
            this.max = max;
        }

        protected RandomArrowFunction.Builder getThis() {
            return this;
        }

        @Override
        public LootItemFunction build() {
            return new RandomArrowFunction(this.m_80699_(), this.min, this.max);
        }
    }

    public static class Serializer extends LootItemConditionalFunction.Serializer<RandomArrowFunction> {

        public void serialize(JsonObject jsonObject, RandomArrowFunction function, JsonSerializationContext context) {
            super.serialize(jsonObject, function, context);
            jsonObject.addProperty("min", function.min);
            jsonObject.addProperty("max", function.max);
        }

        public RandomArrowFunction deserialize(JsonObject pObject, JsonDeserializationContext context, LootItemCondition[] pConditions) {
            int min = GsonHelper.getAsInt(pObject, "min", 3);
            int max = GsonHelper.getAsInt(pObject, "max", 12);
            return new RandomArrowFunction(pConditions, min, max);
        }
    }
}