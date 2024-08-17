package org.embeddedt.modernfix.common.mixin.devenv;

import com.mojang.text2speech.Narrator;
import net.minecraft.client.GameNarrator;
import org.embeddedt.modernfix.annotation.ClientOnlyMixin;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin({ GameNarrator.class })
@ClientOnlyMixin
public class NarratorMixin {

    @Redirect(method = { "<init>" }, at = @At(value = "INVOKE", target = "Lcom/mojang/text2speech/Narrator;getNarrator()Lcom/mojang/text2speech/Narrator;", remap = false))
    private Narrator useDummyNarrator() {
        return Narrator.EMPTY;
    }
}