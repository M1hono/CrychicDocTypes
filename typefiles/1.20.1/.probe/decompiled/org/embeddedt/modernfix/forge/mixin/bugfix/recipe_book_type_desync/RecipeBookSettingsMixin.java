package org.embeddedt.modernfix.forge.mixin.bugfix.recipe_book_type_desync;

import com.llamalad7.mixinextras.sugar.Local;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.stats.RecipeBookSettings;
import net.minecraft.world.inventory.RecipeBookType;
import org.embeddedt.modernfix.ModernFix;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.embeddedt.modernfix.forge.packet.NetworkUtils;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin({ RecipeBookSettings.class })
@ClientOnlyMixin
public class RecipeBookSettingsMixin {

    private static int mfix$maxVanillaOrdinal;

    @Redirect(method = { "read(Lnet/minecraft/network/FriendlyByteBuf;)Lnet/minecraft/stats/RecipeBookSettings;" }, at = @At(value = "INVOKE", target = "Lnet/minecraft/network/FriendlyByteBuf;readBoolean()Z"))
    private static boolean useDefaultBooleanIfVanilla(FriendlyByteBuf buf, @Local(ordinal = 0) RecipeBookType type) {
        if (type.ordinal() >= mfix$maxVanillaOrdinal + 1 && NetworkUtils.isCurrentlyVanilla) {
            ModernFix.LOGGER.warn("Not reading recipe book data for type '{}' as we are using vanilla connection", type.name());
            return false;
        } else {
            return buf.readBoolean();
        }
    }

    static {
        int ord = 0;
        for (Field f : RecipeBookType.class.getDeclaredFields()) {
            if (RecipeBookType.class.isAssignableFrom(f.getType()) && Modifier.isStatic(f.getModifiers()) && Modifier.isPublic(f.getModifiers())) {
                try {
                    f.setAccessible(true);
                    RecipeBookType type = (RecipeBookType) f.get(null);
                    ord = Math.max(type.ordinal(), ord);
                } catch (Exception var6) {
                    var6.printStackTrace();
                    ord = 2147483646;
                    break;
                }
            }
        }
        mfix$maxVanillaOrdinal = ord;
    }
}