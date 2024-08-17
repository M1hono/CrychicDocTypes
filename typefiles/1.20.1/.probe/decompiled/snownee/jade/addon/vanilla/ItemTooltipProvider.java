package snownee.jade.addon.vanilla;

import com.google.common.collect.Lists;
import com.mojang.datafixers.util.Either;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import net.minecraft.ChatFormatting;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.Font;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.FormattedText;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.TextColor;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.inventory.tooltip.TooltipComponent;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import snownee.jade.JadeClient;
import snownee.jade.api.EntityAccessor;
import snownee.jade.api.IEntityComponentProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.impl.ui.TextElement;
import snownee.jade.util.ModIdentification;
import snownee.jade.util.WailaExceptionHandler;

public enum ItemTooltipProvider implements IEntityComponentProvider {

    INSTANCE;

    @Override
    public void appendTooltip(ITooltip tooltip, EntityAccessor accessor, IPluginConfig config) {
        ItemStack stack = ((ItemEntity) accessor.getEntity()).getItem();
        JadeClient.hideModName = true;
        List<Either<FormattedText, TooltipComponent>> lines = Lists.newArrayList();
        try {
            stack.getTooltipLines(null, TooltipFlag.Default.f_256752_).stream().peek(component -> {
                if (component instanceof MutableComponent mutable && mutable.getStyle().getColor() != null) {
                    mutable.setStyle(mutable.getStyle().withColor((TextColor) null));
                }
            }).map(Either::left).forEach(lines::add);
        } catch (Throwable var13) {
            String namespace = BuiltInRegistries.ITEM.getKey(stack.getItem()).getNamespace();
            WailaExceptionHandler.handleErr(var13, this, tooltip, namespace);
        }
        JadeClient.hideModName = false;
        if (!lines.isEmpty()) {
            List<FormattedText> realLines = lines.stream().map($ -> $.left()).filter(Optional::isPresent).map(Optional::get).skip(1L).toList();
            String modName = ModIdentification.getModName(stack);
            Font font = Minecraft.getInstance().font;
            int maxWidth = 250;
            for (FormattedText text : realLines) {
                if (!Objects.equals(ChatFormatting.stripFormatting(text.getString()), modName)) {
                    int width = font.width(text);
                    if (width > maxWidth) {
                        tooltip.add(Component.literal(font.substrByWidth(text, maxWidth - 5).getString() + ".."));
                    } else {
                        tooltip.add(new TextElement(text));
                    }
                }
            }
        }
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.MC_ITEM_TOOLTIP;
    }
}