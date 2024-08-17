package net.mehvahdjukaar.supplementaries.mixins.forge;

import net.mehvahdjukaar.supplementaries.client.renderers.forge.PicklePlayer;
import net.minecraft.client.gui.screens.ChatScreen;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ ChatScreen.class })
public abstract class ChatMixin {

    @Inject(method = { "handleChatInput" }, at = { @At("HEAD") })
    private void interceptMessage(String string, boolean bl, CallbackInfoReturnable<Boolean> callback) {
        PicklePlayer.onChatEvent(string);
    }
}