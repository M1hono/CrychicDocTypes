package net.mehvahdjukaar.amendments.common.item;

import com.google.common.collect.HashBiMap;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.function.Function;
import java.util.stream.Collectors;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack;
import net.mehvahdjukaar.moonlight.api.util.math.ColorUtils;
import net.mehvahdjukaar.moonlight.api.util.math.colors.LABColor;
import net.mehvahdjukaar.moonlight.api.util.math.colors.RGBColor;
import net.minecraft.ChatFormatting;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.animal.Sheep;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class DyeBottleItem extends Item {

    public static final String COLOR_TAG = "color";

    protected static final HashBiMap<DyeColor, Integer> COLOR_TO_DIFFUSE = (HashBiMap<DyeColor, Integer>) Arrays.stream(DyeColor.values()).collect(Collectors.toMap(Function.identity(), color -> ColorUtils.pack(color.getTextureDiffuseColors()), (color, color2) -> color2, HashBiMap::create));

    public DyeBottleItem(Item.Properties properties) {
        super(properties);
    }

    public static int getColor(ItemStack stack) {
        CompoundTag compoundTag = stack.getTag();
        return compoundTag != null ? compoundTag.getInt("color") : 0;
    }

    public static SoftFluidStack toFluidStack(DyeColor color, int amount) {
        CompoundTag tag = new CompoundTag();
        tag.putInt("color", getDyeInt(color));
        return SoftFluidStack.of(ModRegistry.DYE_SOFT_FLUID.getHolder(), amount, tag);
    }

    public static ItemStack fromFluidStack(SoftFluidStack stack) {
        ItemStack item = new ItemStack((ItemLike) ModRegistry.DYE_BOTTLE_ITEM.get());
        item.getOrCreateTag().putInt("color", stack.getTag().getInt("color"));
        return item;
    }

    public static int mixColor(int oldColor, int newColor, int oldAmount, int newAmount) {
        return new RGBColor(oldColor).asHCL().mixWith(new RGBColor(newColor).asHCL(), (float) newAmount / (float) (oldAmount + newAmount)).asRGB().toInt();
    }

    @NotNull
    private static Integer getDyeInt(DyeColor color) {
        return (Integer) COLOR_TO_DIFFUSE.get(color);
    }

    public static DyeColor getClosestDye(SoftFluidStack stack) {
        return getClosestDye(stack.getTag().getInt("color"));
    }

    public static DyeColor getClosestDye(ItemStack stack) {
        return getClosestDye(stack.getOrCreateTag().getInt("color"));
    }

    public static DyeColor getClosestDye(int tintColor) {
        LABColor color = new RGBColor(tintColor).asLAB();
        double minDist = Double.MAX_VALUE;
        DyeColor minColor = null;
        for (DyeColor dyeColor : DyeColor.values()) {
            LABColor c2 = new RGBColor(getDyeInt(dyeColor)).asLAB();
            double dist = (double) c2.distTo(color);
            if (dist < minDist) {
                minDist = dist;
                minColor = dyeColor;
            }
        }
        return minColor;
    }

    @Override
    public ItemStack getDefaultInstance() {
        ItemStack stack = super.getDefaultInstance();
        stack.getOrCreateTag().putInt("color", getDyeInt(DyeColor.RED));
        return stack;
    }

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level level, List<Component> list, TooltipFlag isAdvanced) {
        CompoundTag tag = stack.getOrCreateTag();
        int col = tag.getInt("color");
        DyeColor color = (DyeColor) COLOR_TO_DIFFUSE.inverse().get(col);
        if (color != null) {
            list.add(Component.translatable("item.amendments.dye_bottle." + color.getName()).withStyle(ChatFormatting.GRAY));
        } else {
            list.add(Component.translatable("item.color", String.format(Locale.ROOT, "#%06X", col)).withStyle(ChatFormatting.GRAY));
        }
        super.appendHoverText(stack, level, list, isAdvanced);
    }

    @Override
    public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity interactionTarget, InteractionHand usedHand) {
        if (interactionTarget instanceof Sheep sheep) {
            DyeColor dye = getClosestDye(stack);
            if (sheep.m_6084_() && !sheep.isSheared() && sheep.getColor() != dye) {
                sheep.m_9236_().playSound(player, sheep, SoundEvents.DYE_USE, SoundSource.PLAYERS, 1.0F, 1.0F);
                if (!player.m_9236_().isClientSide) {
                    sheep.setColor(dye);
                    stack.shrink(1);
                }
                return InteractionResult.sidedSuccess(player.m_9236_().isClientSide);
            }
        }
        return InteractionResult.PASS;
    }
}