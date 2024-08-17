package io.redspace.ironsspellbooks.item;

import io.redspace.ironsspellbooks.api.item.ISpellbook;
import io.redspace.ironsspellbooks.api.magic.SpellSelectionManager;
import io.redspace.ironsspellbooks.api.spells.CastSource;
import io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer;
import io.redspace.ironsspellbooks.api.spells.ISpellContainer;
import io.redspace.ironsspellbooks.api.spells.SpellData;
import io.redspace.ironsspellbooks.api.spells.SpellRarity;
import io.redspace.ironsspellbooks.api.util.Utils;
import io.redspace.ironsspellbooks.compat.Curios;
import io.redspace.ironsspellbooks.item.curios.CurioBaseItem;
import io.redspace.ironsspellbooks.player.ClientMagicData;
import io.redspace.ironsspellbooks.registries.SoundRegistry;
import io.redspace.ironsspellbooks.util.ItemPropertiesHelper;
import io.redspace.ironsspellbooks.util.MinecraftInstanceHelper;
import io.redspace.ironsspellbooks.util.TooltipsUtils;
import java.util.List;
import java.util.stream.Collectors;
import net.minecraft.ChatFormatting;
import net.minecraft.client.player.LocalPlayer;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Rarity;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import top.theillusivec4.curios.api.SlotContext;
import top.theillusivec4.curios.api.type.capability.ICurio;

public class SpellBook extends CurioBaseItem implements ISpellbook, IPresetSpellContainer {

    protected final SpellRarity rarity;

    protected final int maxSpellSlots;

    public SpellBook() {
        this(1, SpellRarity.COMMON);
    }

    public SpellBook(int maxSpellSlots, SpellRarity rarity) {
        this(maxSpellSlots, rarity, ItemPropertiesHelper.equipment().stacksTo(1).rarity(Rarity.UNCOMMON));
    }

    public SpellBook(int maxSpellSlots, SpellRarity rarity, Item.Properties pProperties) {
        super(pProperties);
        this.maxSpellSlots = maxSpellSlots;
        this.rarity = SpellRarity.LEGENDARY;
    }

    public SpellRarity getRarity() {
        return this.rarity;
    }

    public int getMaxSpellSlots() {
        return this.maxSpellSlots;
    }

    @Override
    public boolean canEquipFromUse(SlotContext slotContext, ItemStack stack) {
        return true;
    }

    public boolean isUnique() {
        return false;
    }

    @Override
    public void appendHoverText(@NotNull ItemStack itemStack, @Nullable Level level, @NotNull List<Component> lines, @NotNull TooltipFlag flag) {
        if (this.isUnique()) {
            lines.add(Component.translatable("tooltip.irons_spellbooks.spellbook_rarity", Component.translatable("tooltip.irons_spellbooks.spellbook_unique").withStyle(TooltipsUtils.UNIQUE_STYLE)).withStyle(ChatFormatting.GRAY));
        }
        Player player = MinecraftInstanceHelper.getPlayer();
        if (player != null && ISpellContainer.isSpellContainer(itemStack)) {
            ISpellContainer spellList = ISpellContainer.get(itemStack);
            lines.add(Component.translatable("tooltip.irons_spellbooks.spellbook_spell_count", spellList.getMaxSpellCount()).withStyle(ChatFormatting.GRAY));
            List<SpellData> activeSpellSlots = spellList.getActiveSpells();
            if (!activeSpellSlots.isEmpty()) {
                lines.add(Component.empty());
                lines.add(Component.translatable("tooltip.irons_spellbooks.press_to_cast", Component.keybind("key.irons_spellbooks.spellbook_cast")).withStyle(ChatFormatting.GOLD));
                lines.add(Component.empty());
                lines.add(Component.translatable("tooltip.irons_spellbooks.spellbook_tooltip").withStyle(ChatFormatting.GRAY));
                SpellSelectionManager spellSelectionManager = ClientMagicData.getSpellSelectionManager();
                for (int i = 0; i < activeSpellSlots.size(); i++) {
                    MutableComponent spellText = TooltipsUtils.getTitleComponent((SpellData) activeSpellSlots.get(i), (LocalPlayer) player).setStyle(Style.EMPTY);
                    if (MinecraftInstanceHelper.getPlayer() != null && Utils.getPlayerSpellbookStack(MinecraftInstanceHelper.getPlayer()) == itemStack && spellSelectionManager.getCurrentSelection().equipmentSlot.equals(Curios.SPELLBOOK_SLOT) && i == spellSelectionManager.getSelectionIndex()) {
                        List<MutableComponent> shiftMessage = TooltipsUtils.formatActiveSpellTooltip(itemStack, spellSelectionManager.getSelectedSpellData(), CastSource.SPELLBOOK, (LocalPlayer) player);
                        shiftMessage.remove(0);
                        TooltipsUtils.addShiftTooltip(lines, Component.literal("> ").append(spellText).withStyle(ChatFormatting.YELLOW), (List<Component>) shiftMessage.stream().map(component -> Component.literal(" ").append(component)).collect(Collectors.toList()));
                    } else {
                        lines.add(Component.literal(" ").append(spellText.withStyle(Style.EMPTY.withColor(8947966))));
                    }
                }
            }
        }
        super.m_7373_(itemStack, level, lines, flag);
    }

    @NotNull
    @Override
    public ICurio.SoundInfo getEquipSound(SlotContext slotContext, ItemStack stack) {
        return new ICurio.SoundInfo(SoundRegistry.EQUIP_SPELL_BOOK.get(), 1.0F, 1.0F);
    }

    @Override
    public void initializeSpellContainer(ItemStack itemStack) {
        if (itemStack != null) {
            if (!ISpellContainer.isSpellContainer(itemStack)) {
                ISpellContainer spellContainer = ISpellContainer.create(this.getMaxSpellSlots(), true, true);
                spellContainer.save(itemStack);
            }
        }
    }
}