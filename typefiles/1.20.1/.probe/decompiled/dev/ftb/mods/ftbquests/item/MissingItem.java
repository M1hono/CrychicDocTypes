package dev.ftb.mods.ftbquests.item;

import dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag;
import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.Level;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.jetbrains.annotations.Nullable;

public class MissingItem extends Item {

    private static final ResourceLocation AIR = new ResourceLocation("minecraft:air");

    public static ItemStack readItem(CompoundTag tag) {
        if (tag.isEmpty()) {
            return ItemStack.EMPTY;
        } else {
            ResourceLocation id = new ResourceLocation(tag.getString("id"));
            if (id.equals(AIR)) {
                return ItemStack.EMPTY;
            } else {
                Item item = BuiltInRegistries.ITEM.get(id);
                if (item == Items.AIR) {
                    ItemStack stack = new ItemStack((ItemLike) FTBQuestsItems.MISSING_ITEM.get());
                    stack.addTagElement("Item", tag);
                    return stack;
                } else {
                    ItemStack stack = ItemStack.of(tag);
                    stack.setCount(tag.getInt("Count"));
                    return stack;
                }
            }
        }
    }

    public static CompoundTag writeItem(ItemStack stack) {
        if (stack.getItem() instanceof MissingItem && stack.hasTag() && stack.getTag().contains("Item")) {
            return stack.getTag().getCompound("Item");
        } else {
            SNBTCompoundTag tag = new SNBTCompoundTag();
            stack.save(tag);
            tag.m_128405_("Count", stack.getCount());
            if (tag.m_128440_() == 2) {
                tag.singleLine();
            }
            return tag;
        }
    }

    public MissingItem() {
        super(FTBQuestsItems.defaultProps().stacksTo(1));
    }

    @Override
    public Component getName(ItemStack stack) {
        if (stack.hasTag() && stack.getTag().contains("Item")) {
            CompoundTag tag = stack.getTag().getCompound("Item");
            String id = tag.getString("id");
            int c = Math.max(1, tag.getInt("Count"));
            return c == 1 ? Component.literal(id) : Component.literal(c + "x " + id);
        } else {
            return super.getName(stack);
        }
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        if (stack.hasTag() && stack.getTag().contains("Item")) {
            tooltip.add(Component.translatable("item.ftbquests.missing_item").withStyle(ChatFormatting.RED));
        }
    }
}