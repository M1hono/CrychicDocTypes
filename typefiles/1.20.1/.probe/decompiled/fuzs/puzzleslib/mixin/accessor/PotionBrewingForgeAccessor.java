package fuzs.puzzleslib.mixin.accessor;

import java.util.List;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.alchemy.Potion;
import net.minecraft.world.item.alchemy.PotionBrewing;
import net.minecraft.world.item.crafting.Ingredient;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

@Mixin({ PotionBrewing.class })
public interface PotionBrewingForgeAccessor {

    @Accessor("POTION_MIXES")
    static List<PotionBrewing.Mix<Potion>> puzzleslib$getPotionMixes() {
        throw new RuntimeException();
    }

    @Accessor("CONTAINER_MIXES")
    static List<PotionBrewing.Mix<Item>> puzzleslib$getContainerMixes() {
        throw new RuntimeException();
    }

    @Accessor("ALLOWED_CONTAINERS")
    static List<Ingredient> puzzleslib$getAllowedContainers() {
        throw new RuntimeException();
    }
}