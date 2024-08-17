package dev.ftb.mods.ftbquests.item;

import dev.ftb.mods.ftblibrary.icon.Icon;
import dev.ftb.mods.ftblibrary.icon.ItemIcon;
import dev.ftb.mods.ftbquests.client.FTBQuestsClient;
import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.jetbrains.annotations.Nullable;

public class CustomIconItem extends Item {

    public CustomIconItem() {
        super(FTBQuestsItems.defaultProps().stacksTo(1));
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand interactionHand) {
        if (level.isClientSide()) {
            FTBQuestsClient.openCustomIconGui(player, interactionHand);
        }
        return new InteractionResultHolder<>(InteractionResult.SUCCESS, player.m_21120_(interactionHand));
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        tooltip.add(Component.translatable("item.ftbquests.custom_icon.tooltip").withStyle(ChatFormatting.GRAY));
        if (stack.hasTag() && stack.getTag().contains("Icon")) {
            tooltip.add(Component.literal(stack.getTag().getString("Icon")).withStyle(ChatFormatting.DARK_GRAY));
        } else {
            tooltip.add(Component.literal("-").withStyle(ChatFormatting.DARK_GRAY));
        }
    }

    public static Icon getIcon(ItemStack stack) {
        if (stack.getItem() instanceof CustomIconItem) {
            return stack.hasTag() && stack.getTag().contains("Icon") ? Icon.getIcon(stack.getTag().getString("Icon")) : Icon.getIcon("minecraft:textures/misc/unknown_pack.png");
        } else {
            return ItemIcon.getItemIcon(stack);
        }
    }
}