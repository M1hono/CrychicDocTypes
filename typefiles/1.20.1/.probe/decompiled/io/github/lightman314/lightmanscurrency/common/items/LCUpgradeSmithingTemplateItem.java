package io.github.lightman314.lightmanscurrency.common.items;

import io.github.lightman314.lightmanscurrency.common.text.MultiLineTextEntry;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;

public class LCUpgradeSmithingTemplateItem extends Item {

    private final MultiLineTextEntry tooltip;

    public LCUpgradeSmithingTemplateItem(@Nonnull MultiLineTextEntry tooltip, Item.Properties properties) {
        super(properties);
        this.tooltip = tooltip;
    }

    @Override
    public void appendHoverText(@Nonnull ItemStack stack, @Nullable Level level, @Nonnull List<Component> tooltip, @Nonnull TooltipFlag flag) {
        super.appendHoverText(stack, level, tooltip, flag);
        tooltip.addAll(this.tooltip.getWithStyle(ChatFormatting.GRAY));
    }
}