package net.mehvahdjukaar.moonlight.api.fluids;

import com.mojang.serialization.Codec;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import java.util.Map;
import java.util.function.Consumer;
import net.mehvahdjukaar.moonlight.api.misc.StrOpt;
import net.mehvahdjukaar.moonlight.api.platform.ForgeHelper;
import net.mehvahdjukaar.moonlight.api.platform.PlatHelper;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;

public class FoodProvider {

    public static final Codec<FoodProvider> CODEC = RecordCodecBuilder.create(instance -> instance.group(BuiltInRegistries.ITEM.m_194605_().fieldOf("item").forGetter(f -> f.food), StrOpt.of(SoftFluid.Capacity.INT_CODEC, "divider", 1).forGetter(f -> f.divider)).apply(instance, FoodProvider::create));

    public static final FoodProvider EMPTY = new FoodProvider(Items.AIR, 1);

    protected final Item food;

    protected final int divider;

    private static final FoodProvider XP = new FoodProvider(Items.EXPERIENCE_BOTTLE, 1) {

        @Override
        public boolean consume(Player player, Level world, @Nullable Consumer<ItemStack> nbtApplier) {
            player.giveExperiencePoints(Utils.getXPinaBottle(1, world.random));
            player.playSound(SoundEvents.EXPERIENCE_ORB_PICKUP, 1.0F, 1.0F);
            return true;
        }
    };

    private static final FoodProvider MILK = new FoodProvider(Items.MILK_BUCKET, 3) {

        @Override
        public boolean consume(Player player, Level world, @Nullable Consumer<ItemStack> nbtApplier) {
            ItemStack stack = this.food.getDefaultInstance();
            if (nbtApplier != null) {
                nbtApplier.accept(stack);
            }
            for (MobEffectInstance effect : player.m_21221_().values()) {
                if (ForgeHelper.isCurativeItem(stack, effect)) {
                    player.m_21195_(effect.getEffect());
                    break;
                }
            }
            player.playSound(this.food.getDrinkingSound(), 1.0F, 1.0F);
            return true;
        }
    };

    private static final FoodProvider SUS_STEW = new FoodProvider(Items.SUSPICIOUS_STEW, 2) {

        @Override
        public boolean consume(Player player, Level world, @Nullable Consumer<ItemStack> nbtApplier) {
            ItemStack stack = this.food.getDefaultInstance();
            if (nbtApplier != null) {
                nbtApplier.accept(stack);
            }
            FoodProperties foodProperties = this.food.getFoodProperties();
            if (foodProperties != null && player.canEat(false)) {
                CompoundTag tag = stack.getTag();
                if (tag != null && tag.contains("Effects", 9)) {
                    ListTag effects = tag.getList("Effects", 10);
                    for (int i = 0; i < effects.size(); i++) {
                        int j = 160;
                        CompoundTag effectsCompound = effects.getCompound(i);
                        if (effectsCompound.contains("EffectDuration", 3)) {
                            j = effectsCompound.getInt("EffectDuration") / this.divider;
                        }
                        MobEffect effect = MobEffect.byId(effectsCompound.getByte("EffectId"));
                        if (effect != null) {
                            player.m_7292_(new MobEffectInstance(effect, j));
                        }
                    }
                }
                player.getFoodData().eat(foodProperties.getNutrition() / this.divider, foodProperties.getSaturationModifier() / (float) this.divider);
                player.playSound(this.food.getDrinkingSound(), 1.0F, 1.0F);
                return true;
            } else {
                return false;
            }
        }
    };

    public static final Map<Item, FoodProvider> CUSTOM_PROVIDERS = Map.of(Items.AIR, EMPTY, Items.SUSPICIOUS_STEW, SUS_STEW, Items.MILK_BUCKET, MILK, Items.EXPERIENCE_BOTTLE, XP);

    private FoodProvider(Item food, int divider) {
        this.food = food;
        this.divider = divider;
    }

    public Item getFood() {
        return this.food;
    }

    public int getDivider() {
        return this.divider;
    }

    public boolean isEmpty() {
        return this == EMPTY;
    }

    public boolean consume(Player player, Level world, @Nullable Consumer<ItemStack> nbtApplier) {
        ItemStack stack = this.food.getDefaultInstance();
        if (nbtApplier != null) {
            nbtApplier.accept(stack);
        }
        FoodProperties foodProperties = PlatHelper.getFoodProperties(this.food, stack, player);
        if (this.divider != 1) {
            if (foodProperties != null && player.canEat(false)) {
                player.getFoodData().eat(foodProperties.getNutrition() / this.divider, foodProperties.getSaturationModifier() / (float) this.divider);
                player.playSound(this.food.getDrinkingSound(), 1.0F, 1.0F);
                return true;
            } else {
                return false;
            }
        } else {
            this.food.finishUsingItem(stack.copy(), world, player);
            if (foodProperties == null || stack.getItem().isEdible()) {
                player.playSound(this.food.getDrinkingSound(), 1.0F, 1.0F);
            }
            return true;
        }
    }

    public static FoodProvider create(Item item, int divider) {
        return (FoodProvider) CUSTOM_PROVIDERS.getOrDefault(item, new FoodProvider(item, divider));
    }
}