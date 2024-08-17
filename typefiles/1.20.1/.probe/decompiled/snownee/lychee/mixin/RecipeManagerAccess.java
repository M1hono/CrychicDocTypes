package snownee.lychee.mixin;

import java.util.Map;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.Container;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeManager;
import net.minecraft.world.item.crafting.RecipeType;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Invoker;

@Mixin({ RecipeManager.class })
public interface RecipeManagerAccess {

    @Invoker
    <C extends Container, T extends Recipe<C>> Map<ResourceLocation, Recipe<C>> callByType(RecipeType<T> var1);
}