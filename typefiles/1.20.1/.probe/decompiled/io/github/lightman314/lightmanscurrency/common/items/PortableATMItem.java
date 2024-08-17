package io.github.lightman314.lightmanscurrency.common.items;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.common.menus.ATMMenu;
import io.github.lightman314.lightmanscurrency.common.menus.validation.EasyMenu;
import io.github.lightman314.lightmanscurrency.common.menus.validation.types.SimpleValidator;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.MenuProvider;
import net.minecraft.world.SimpleMenuProvider;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraftforge.network.NetworkHooks;

public class PortableATMItem extends TooltipItem {

    public PortableATMItem(Item.Properties properties) {
        super(properties.stacksTo(1), LCText.TOOLTIP_ATM.asTooltip());
    }

    @Nonnull
    @Override
    public InteractionResultHolder<ItemStack> use(@Nonnull Level world, @Nonnull Player player, @Nonnull InteractionHand hand) {
        if (player instanceof ServerPlayer sp) {
            NetworkHooks.openScreen(sp, getMenuProvider(), EasyMenu.nullEncoder());
        }
        return InteractionResultHolder.success(player.m_21120_(hand));
    }

    public static MenuProvider getMenuProvider() {
        return new SimpleMenuProvider((windowId, playerInventory, playerEntity) -> new ATMMenu(windowId, playerInventory, SimpleValidator.NULL), Component.empty());
    }
}