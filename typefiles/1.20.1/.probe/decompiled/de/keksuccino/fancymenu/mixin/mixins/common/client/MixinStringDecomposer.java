package de.keksuccino.fancymenu.mixin.mixins.common.client;

import com.llamalad7.mixinextras.injector.wrapoperation.Operation;
import com.llamalad7.mixinextras.injector.wrapoperation.WrapOperation;
import de.keksuccino.fancymenu.util.rendering.text.color.TextColorFormatter;
import de.keksuccino.fancymenu.util.rendering.text.color.TextColorFormatterRegistry;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Style;
import net.minecraft.util.FormattedCharSink;
import net.minecraft.util.StringDecomposer;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ StringDecomposer.class })
public class MixinStringDecomposer {

    @Unique
    @Nullable
    private static Character cachedCharacterFancyMenu = null;

    @Unique
    @Nullable
    private static Style cachedEmptyStyleFancyMenu = null;

    @Inject(method = { "iterateFormatted(Ljava/lang/String;ILnet/minecraft/network/chat/Style;Lnet/minecraft/network/chat/Style;Lnet/minecraft/util/FormattedCharSink;)Z" }, at = { @At("HEAD") })
    private static void beforeIterateFormattedFancyMenu(String in, int i, Style style1, Style emptyStyle, FormattedCharSink sink, CallbackInfoReturnable<Boolean> info) {
        cachedEmptyStyleFancyMenu = emptyStyle;
    }

    @WrapOperation(method = { "iterateFormatted(Ljava/lang/String;ILnet/minecraft/network/chat/Style;Lnet/minecraft/network/chat/Style;Lnet/minecraft/util/FormattedCharSink;)Z" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/ChatFormatting;getByCode(C)Lnet/minecraft/ChatFormatting;") })
    private static ChatFormatting wrapGetByCodeFancyMenu(char c, Operation<ChatFormatting> original) {
        cachedCharacterFancyMenu = c;
        return ChatFormatting.WHITE;
    }

    @WrapOperation(method = { "iterateFormatted(Ljava/lang/String;ILnet/minecraft/network/chat/Style;Lnet/minecraft/network/chat/Style;Lnet/minecraft/util/FormattedCharSink;)Z" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/network/chat/Style;applyLegacyFormat(Lnet/minecraft/ChatFormatting;)Lnet/minecraft/network/chat/Style;") })
    private static Style wrapApplyLegacyFormatFancyMenu(Style instance, ChatFormatting chatFormatting, Operation<Style> original) {
        if (cachedCharacterFancyMenu != null && cachedEmptyStyleFancyMenu != null) {
            Style returnValue = instance;
            ChatFormatting vanillaFormatting = ChatFormatting.getByCode(cachedCharacterFancyMenu);
            if (vanillaFormatting != null) {
                returnValue = vanillaFormatting == ChatFormatting.RESET ? cachedEmptyStyleFancyMenu : (Style) original.call(new Object[] { instance, vanillaFormatting });
            } else {
                TextColorFormatter formatter = TextColorFormatterRegistry.getByCode(cachedCharacterFancyMenu);
                if (formatter != null) {
                    returnValue = formatter.getStyle();
                }
            }
            return returnValue;
        } else {
            return (Style) original.call(new Object[] { instance, chatFormatting });
        }
    }
}