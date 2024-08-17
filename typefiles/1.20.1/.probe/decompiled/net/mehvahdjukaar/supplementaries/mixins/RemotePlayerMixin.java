package net.mehvahdjukaar.supplementaries.mixins;

import com.mojang.authlib.GameProfile;
import net.mehvahdjukaar.supplementaries.api.IQuiverEntity;
import net.mehvahdjukaar.supplementaries.common.items.QuiverItem;
import net.minecraft.client.player.RemotePlayer;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.At.Shift;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ RemotePlayer.class })
public abstract class RemotePlayerMixin extends Player implements IQuiverEntity {

    @Unique
    private ItemStack supplementaries$quiver = ItemStack.EMPTY;

    protected RemotePlayerMixin(Level level, BlockPos blockPos, float f, GameProfile gameProfile) {
        super(level, blockPos, f, gameProfile);
    }

    @Inject(method = { "tick" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/player/AbstractClientPlayer;tick()V", shift = Shift.AFTER) })
    private void checkIfHasQuiver(CallbackInfo ci) {
        this.supplementaries$quiver = QuiverItem.getQuiver(this);
    }

    @Override
    public ItemStack supplementaries$getQuiver() {
        return this.supplementaries$quiver;
    }

    @Override
    public void supplementaries$setQuiver(ItemStack quiver) {
        this.supplementaries$quiver = quiver;
    }
}