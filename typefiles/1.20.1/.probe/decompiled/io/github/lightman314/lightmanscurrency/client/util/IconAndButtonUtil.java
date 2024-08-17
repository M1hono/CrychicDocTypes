package io.github.lightman314.lightmanscurrency.client.util;

import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyStorage;
import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.api.money.value.holder.IMoneyHolder;
import io.github.lightman314.lightmanscurrency.api.trader_interface.blockentity.TraderInterfaceBlockEntity;
import io.github.lightman314.lightmanscurrency.api.traders.TraderData;
import io.github.lightman314.lightmanscurrency.client.gui.easy.rendering.Sprite;
import io.github.lightman314.lightmanscurrency.client.gui.screen.inventory.TraderScreen;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.PlainButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.button.icon.IconData;
import io.github.lightman314.lightmanscurrency.client.gui.widget.dropdown.DropdownWidget;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyAddonHelper;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.common.core.ModItems;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.alchemy.PotionUtils;
import net.minecraft.world.item.alchemy.Potions;
import net.minecraftforge.common.util.NonNullFunction;
import net.minecraftforge.common.util.NonNullSupplier;

public class IconAndButtonUtil {

    public static final ResourceLocation ICON_TEXTURE = new ResourceLocation("lightmanscurrency", "textures/gui/icons.png");

    public static final ResourceLocation WIDGET_TEXTURE = new ResourceLocation("lightmanscurrency", "textures/gui/widgets.png");

    public static final IconData ICON_TRADER = IconData.of(ModItems.TRADING_CORE);

    public static final IconData ICON_TRADER_ALT = IconData.of(ICON_TEXTURE, 80, 0);

    public static final IconData ICON_STORAGE = IconData.of(Items.CHEST);

    public static final IconData ICON_COLLECT_COINS = IconData.of(ICON_TEXTURE, 0, 0);

    public static final IconData ICON_STORE_COINS = IconData.of(ICON_TEXTURE, 16, 0);

    public static final IconData ICON_TRADE_RULES = IconData.of(Items.BOOK);

    public static final IconData ICON_SETTINGS = IconData.of(ICON_TEXTURE, 32, 0);

    public static final IconData ICON_BACK = IconData.of(ICON_TEXTURE, 0, 16);

    public static final IconData ICON_LEFT = IconData.of(ICON_TEXTURE, 16, 16);

    public static final IconData ICON_RIGHT = IconData.of(ICON_TEXTURE, 32, 16);

    public static final IconData ICON_UP = IconData.of(ICON_TEXTURE, 112, 16);

    public static final IconData ICON_DOWN = IconData.of(ICON_TEXTURE, 128, 16);

    public static final IconData ICON_SHOW_LOGGER = IconData.of(Items.WRITABLE_BOOK);

    public static final IconData ICON_CLEAR_LOGGER = IconData.of(PotionUtils.setPotion(new ItemStack(Items.POTION), Potions.WATER));

    private static final IconData ICON_CREATIVE_ON = IconData.of(ICON_TEXTURE, 48, 16);

    private static final IconData ICON_CREATIVE_OFF = IconData.of(ICON_TEXTURE, 64, 16);

    public static final IconData ICON_PERSISTENT_DATA = IconData.of(ICON_TEXTURE, 80, 16);

    private static final IconData ICON_INTERFACE_ON = IconData.of(Items.REDSTONE_TORCH);

    private static final IconData ICON_INTERFACE_OFF = IconData.of(Items.TORCH);

    public static final IconData ICON_PLUS = IconData.of(ICON_TEXTURE, 0, 32);

    public static final IconData ICON_X = IconData.of(ICON_TEXTURE, 16, 32);

    public static final IconData ICON_WHITELIST = IconData.of(ICON_TEXTURE, 32, 32);

    public static final IconData ICON_BLACKLIST = IconData.of(ICON_TEXTURE, 48, 32);

    public static final IconData ICON_COUNT = IconData.of(ICON_TEXTURE, 64, 32);

    public static final IconData ICON_COUNT_PLAYER = IconData.of(ICON_TEXTURE, 80, 32);

    public static final IconData ICON_TIMED_SALE = IconData.of(Items.CLOCK);

    public static final IconData ICON_DISCOUNT_LIST = IconData.of(ICON_TEXTURE, 96, 32);

    public static final IconData ICON_FREE_SAMPLE = IconData.of(ICON_TEXTURE, 112, 32);

    public static final IconData ICON_PRICE_FLUCTUATION = IconData.of(ICON_TEXTURE, 128, 32);

    public static final IconData ICON_TRADELIST = IconData.of(ICON_TEXTURE, 48, 0);

    public static final IconData ICON_MODE_DISABLED = IconData.of(Items.BARRIER);

    public static final IconData ICON_MODE_REDSTONE_OFF = IconData.of(ICON_TEXTURE, 64, 0);

    public static final IconData ICON_MODE_REDSTONE = IconData.of(Items.REDSTONE_TORCH);

    public static final IconData ICON_MODE_ALWAYS_ON = IconData.of(Items.REDSTONE_BLOCK);

    public static final IconData ICON_CHECKMARK = IconData.of(ICON_TEXTURE, 0, 48);

    public static final IconData ICON_ALEX_HEAD;

    public static final IconData ICON_TAXES = IconData.of(ICON_TEXTURE, 96, 0);

    public static final Sprite SPRITE_PLUS = Sprite.SimpleSprite(TraderScreen.GUI_TEXTURE, 224, 20, 10, 10);

    public static final Sprite SPRITE_MINUS = Sprite.SimpleSprite(TraderScreen.GUI_TEXTURE, 234, 20, 10, 10);

    public static final Sprite SPRITE_CHECK_ACTIVE = Sprite.SimpleSprite(WIDGET_TEXTURE, 10, 200, 10, 10);

    public static final Sprite SPRITE_CHECK_INACTIVE = Sprite.SimpleSprite(WIDGET_TEXTURE, 10, 220, 10, 10);

    public static final IconData ICON_ONLINEMODE_TRUE = IconData.of(Items.PLAYER_HEAD);

    public static final IconData ICON_ONLINEMODE_FALSE = ICON_CHECKMARK;

    public static NonNullFunction<IconButton, IconData> ICON_CREATIVE(NonNullSupplier<Boolean> isCreative) {
        return b -> {
            boolean creative = b.m_198029_() != isCreative.get();
            return creative ? ICON_CREATIVE_ON : ICON_CREATIVE_OFF;
        };
    }

    public static NonNullSupplier<IconData> ICON_INTERFACE_ACTIVE(NonNullSupplier<Boolean> isActive) {
        return () -> isActive.get() ? ICON_INTERFACE_ON : ICON_INTERFACE_OFF;
    }

    public static IconData GetIcon(TraderInterfaceBlockEntity.ActiveMode mode) {
        return switch(mode) {
            case DISABLED ->
                ICON_MODE_DISABLED;
            case REDSTONE_OFF ->
                ICON_MODE_REDSTONE_OFF;
            case REDSTONE_ONLY ->
                ICON_MODE_REDSTONE;
            case ALWAYS_ON ->
                ICON_MODE_ALWAYS_ON;
        };
    }

    public static IconButton traderButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_TRADER).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_OPEN_TRADES));
    }

    public static IconButton storageButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_STORAGE).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_OPEN_STORAGE));
    }

    public static IconButton storageButton(int x, int y, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> visiblityCheck) {
        return storageButton(x, y, pressable).withAddons(EasyAddonHelper.visibleCheck(visiblityCheck));
    }

    public static IconButton collectCoinButton(int x, int y, Consumer<EasyButton> pressable, Player player, Supplier<TraderData> traderSource) {
        return new IconButton(x, y, pressable, ICON_COLLECT_COINS).withAddons(EasyAddonHelper.tooltips((Supplier<List<Component>>) (() -> {
            TraderData trader = (TraderData) traderSource.get();
            if (trader != null && !trader.hasBankAccount() && !trader.getStoredMoney().getStoredMoney().isEmpty()) {
                List<Component> result = new ArrayList();
                result.add(LCText.TOOLTIP_TRADER_COLLECT_COINS.get());
                IMoneyHolder storage = trader.getStoredMoney();
                for (MoneyValue value : storage.getStoredMoney().allValues()) {
                    result.add(value.getText());
                }
                return result;
            } else {
                return new ArrayList();
            }
        })), EasyAddonHelper.visibleCheck((NonNullSupplier<Boolean>) (() -> {
            TraderData trader = (TraderData) traderSource.get();
            return trader == null ? false : trader.hasPermission(player, "collectCoins") && !trader.hasBankAccount();
        })), EasyAddonHelper.activeCheck((NonNullSupplier<Boolean>) (() -> {
            TraderData trader = (TraderData) traderSource.get();
            return trader == null ? false : !trader.getInternalStoredMoney().isEmpty();
        })));
    }

    public static IconButton collectCoinButtonAlt(int x, int y, Consumer<EasyButton> pressable, Supplier<MoneyStorage> moneyStorageSource) {
        return collectCoinButtonAlt(ScreenPosition.of(x, y), pressable, moneyStorageSource);
    }

    public static IconButton collectCoinButtonAlt(ScreenPosition pos, Consumer<EasyButton> pressable, Supplier<MoneyStorage> moneyStorageSource) {
        return new IconButton(pos.x, pos.y, pressable, ICON_COLLECT_COINS).withAddons(EasyAddonHelper.tooltips((Supplier<List<Component>>) (() -> {
            MoneyStorage storage = (MoneyStorage) moneyStorageSource.get();
            if (storage != null && !storage.isEmpty()) {
                List<Component> result = new ArrayList();
                result.add(LCText.TOOLTIP_TRADER_COLLECT_COINS.get());
                for (MoneyValue value : storage.allValues()) {
                    result.add(value.getText());
                }
                return result;
            } else {
                return new ArrayList();
            }
        })));
    }

    public static IconButton storeCoinButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_STORE_COINS).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_STORE_COINS));
    }

    public static IconButton leftButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_LEFT);
    }

    public static IconButton rightButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_RIGHT);
    }

    public static PlainButton plusButton(ScreenPosition pos, Consumer<EasyButton> pressable) {
        return plusButton(pos.x, pos.y, pressable);
    }

    public static PlainButton plusButton(int x, int y, Consumer<EasyButton> pressable) {
        return new PlainButton(x, y, pressable, SPRITE_PLUS);
    }

    public static PlainButton minusButton(ScreenPosition pos, Consumer<EasyButton> pressable) {
        return minusButton(pos.x, pos.y, pressable);
    }

    public static PlainButton minusButton(int x, int y, Consumer<EasyButton> pressable) {
        return new PlainButton(x, y, pressable, SPRITE_MINUS);
    }

    public static IconButton backToTerminalButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_BACK).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_NETWORK_BACK));
    }

    public static IconButton backToTerminalButton(int x, int y, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> visibilityCheck) {
        return new IconButton(x, y, pressable, ICON_BACK).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_NETWORK_BACK), EasyAddonHelper.visibleCheck(visibilityCheck));
    }

    public static IconButton tradeRuleButton(int x, int y, Consumer<EasyButton> pressable) {
        return new IconButton(x, y, pressable, ICON_TRADE_RULES).withAddons(EasyAddonHelper.tooltip(LCText.TOOLTIP_TRADER_TRADE_RULES_TRADE));
    }

    public static IconButton creativeToggleButton(ScreenPosition pos, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> isCreative) {
        return creativeToggleButton(pos.x, pos.y, pressable, isCreative);
    }

    public static IconButton creativeToggleButton(int x, int y, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> isCreative) {
        return new IconButton(x, y, pressable, ICON_CREATIVE(isCreative)).withAddons(EasyAddonHelper.toggleTooltip(isCreative, LCText.TOOLTIP_TRADER_SETTINGS_CREATIVE_DISABLE.get(), LCText.TOOLTIP_TRADER_SETTINGS_CREATIVE_ENABLE.get()));
    }

    public static PlainButton quickInsertButton(ScreenPosition pos, Consumer<EasyButton> pressable) {
        return new PlainButton(pos, pressable, Sprite.SimpleSprite(TraderScreen.GUI_TEXTURE, 224, 0, 10, 10));
    }

    public static PlainButton quickExtractButton(ScreenPosition pos, Consumer<EasyButton> pressable) {
        return new PlainButton(pos, pressable, Sprite.SimpleSprite(TraderScreen.GUI_TEXTURE, 234, 0, 10, 10));
    }

    public static PlainButton checkmarkButton(ScreenPosition pos, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> isActive) {
        return checkmarkButton(pos.x, pos.y, pressable, isActive);
    }

    public static PlainButton checkmarkButton(int x, int y, Consumer<EasyButton> pressable, NonNullSupplier<Boolean> isActive) {
        return new PlainButton(x, y, pressable, () -> isActive.get() ? SPRITE_CHECK_ACTIVE : SPRITE_CHECK_INACTIVE);
    }

    public static DropdownWidget interactionTypeDropdown(ScreenPosition pos, int width, TraderInterfaceBlockEntity.InteractionType currentlySelected, Consumer<Integer> onSelect, List<TraderInterfaceBlockEntity.InteractionType> blacklist) {
        return interactionTypeDropdown(pos.x, pos.y, width, currentlySelected, onSelect, blacklist);
    }

    public static DropdownWidget interactionTypeDropdown(int x, int y, int width, TraderInterfaceBlockEntity.InteractionType currentlySelected, Consumer<Integer> onSelect, List<TraderInterfaceBlockEntity.InteractionType> blacklist) {
        List<Component> options = new ArrayList();
        for (int i = 0; i < TraderInterfaceBlockEntity.InteractionType.size(); i++) {
            options.add(TraderInterfaceBlockEntity.InteractionType.fromIndex(i).getDisplayText());
        }
        return new DropdownWidget(x, y, width, currentlySelected.index, onSelect, index -> !blacklist.contains(TraderInterfaceBlockEntity.InteractionType.fromIndex(index)), options);
    }

    static {
        ItemStack alexHead = new ItemStack(Items.PLAYER_HEAD);
        CompoundTag headData = new CompoundTag();
        CompoundTag skullOwner = new CompoundTag();
        skullOwner.putIntArray("Id", new int[] { -731408145, -304985227, -1778597514, 158507129 });
        CompoundTag properties = new CompoundTag();
        ListTag textureList = new ListTag();
        CompoundTag texture = new CompoundTag();
        texture.putString("Value", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjNiMDk4OTY3MzQwZGFhYzUyOTI5M2MyNGUwNDkxMDUwOWIyMDhlN2I5NDU2M2MzZWYzMWRlYzdiMzc1MCJ9fX0=");
        textureList.add(texture);
        properties.put("textures", textureList);
        skullOwner.put("Properties", properties);
        headData.put("SkullOwner", skullOwner);
        alexHead.setTag(headData);
        ICON_ALEX_HEAD = IconData.of(alexHead);
    }
}