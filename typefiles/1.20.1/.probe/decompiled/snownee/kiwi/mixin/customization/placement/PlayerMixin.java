package snownee.kiwi.mixin.customization.placement;

import net.minecraft.world.entity.player.Player;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import snownee.kiwi.customization.duck.KPlayer;

@Mixin({ Player.class })
public class PlayerMixin implements KPlayer {

    @Unique
    private int placeCount;

    @Override
    public void kiwi$setPlaceCount(int i) {
        this.placeCount = i;
    }

    @Override
    public int kiwi$getPlaceCount() {
        return this.placeCount;
    }
}