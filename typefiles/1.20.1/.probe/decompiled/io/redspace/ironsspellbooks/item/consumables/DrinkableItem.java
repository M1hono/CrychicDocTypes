package io.redspace.ironsspellbooks.item.consumables;

import java.util.List;
import java.util.function.BiConsumer;
import javax.annotation.Nullable;
import net.minecraft.ChatFormatting;
import net.minecraft.advancements.CriteriaTriggers;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.ItemUtils;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;

public class DrinkableItem extends Item {

    private final BiConsumer<ItemStack, LivingEntity> drinkAction;

    private final Item returnItem;

    private final boolean showDesc;

    public DrinkableItem(Item.Properties pProperties, BiConsumer<ItemStack, LivingEntity> drinkAction, @Nullable Item returnItem, boolean showDescription) {
        super(pProperties);
        this.drinkAction = drinkAction;
        this.returnItem = returnItem;
        this.showDesc = showDescription;
    }

    public DrinkableItem(Item.Properties pProperties, BiConsumer<ItemStack, LivingEntity> drinkAction) {
        this(pProperties, drinkAction, null, true);
    }

    @Override
    public ItemStack finishUsingItem(ItemStack pStack, Level pLevel, LivingEntity pEntityLiving) {
        Player player = pEntityLiving instanceof Player ? (Player) pEntityLiving : null;
        if (player instanceof ServerPlayer) {
            CriteriaTriggers.CONSUME_ITEM.trigger((ServerPlayer) player, pStack);
        }
        if (!pLevel.isClientSide) {
            this.drinkAction.accept(pStack, pEntityLiving);
        }
        if (player != null && !player.getAbilities().instabuild) {
            pStack.shrink(1);
        }
        if (this.returnItem != null && (player == null || !player.getAbilities().instabuild)) {
            if (pStack.isEmpty()) {
                return new ItemStack(this.returnItem);
            }
            if (player != null) {
                player.getInventory().add(new ItemStack(this.returnItem));
            }
        }
        pEntityLiving.m_146850_(GameEvent.DRINK);
        return pStack;
    }

    @Override
    public int getUseDuration(ItemStack pStack) {
        return 32;
    }

    @Override
    public UseAnim getUseAnimation(ItemStack pStack) {
        return UseAnim.DRINK;
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level pLevel, Player pPlayer, InteractionHand pHand) {
        return ItemUtils.startUsingInstantly(pLevel, pPlayer, pHand);
    }

    @Override
    public void appendHoverText(ItemStack pStack, @org.jetbrains.annotations.Nullable Level pLevel, List<Component> pTooltipComponents, TooltipFlag pIsAdvanced) {
        super.appendHoverText(pStack, pLevel, pTooltipComponents, pIsAdvanced);
        if (this.showDesc) {
            pTooltipComponents.add(Component.empty());
            pTooltipComponents.add(Component.translatable("potion.whenDrank").withStyle(ChatFormatting.DARK_PURPLE));
            pTooltipComponents.add(Component.translatable(this.m_5524_() + ".desc").withStyle(ChatFormatting.BLUE));
        }
    }
}