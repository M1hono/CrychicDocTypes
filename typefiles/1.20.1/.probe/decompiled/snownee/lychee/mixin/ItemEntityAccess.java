package snownee.lychee.mixin;

import net.minecraft.world.entity.item.ItemEntity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ ItemEntity.class })
public interface ItemEntityAccess {

    @Accessor
    void setHealth(int var1);
}