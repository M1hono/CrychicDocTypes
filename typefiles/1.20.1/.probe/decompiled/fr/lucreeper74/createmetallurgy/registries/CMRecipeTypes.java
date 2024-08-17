package fr.lucreeper74.createmetallurgy.registries;

import com.simibubi.create.content.processing.recipe.ProcessingRecipeBuilder;
import com.simibubi.create.content.processing.recipe.ProcessingRecipeSerializer;
import com.simibubi.create.foundation.recipe.IRecipeTypeInfo;
import fr.lucreeper74.createmetallurgy.CreateMetallurgy;
import fr.lucreeper74.createmetallurgy.content.belt_grinder.GrindingRecipe;
import fr.lucreeper74.createmetallurgy.content.casting.recipe.CastingRecipeSerializer;
import fr.lucreeper74.createmetallurgy.content.foundry_lid.MeltingRecipe;
import fr.lucreeper74.createmetallurgy.content.foundry_mixer.AlloyingRecipe;
import fr.lucreeper74.createmetallurgy.utils.CMLang;
import java.util.function.Supplier;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.RecipeType;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;
import org.jetbrains.annotations.Nullable;

public enum CMRecipeTypes implements IRecipeTypeInfo {

    MELTING(MeltingRecipe::new), ALLOYING(AlloyingRecipe::new), GRINDING(GrindingRecipe::new), CASTING_IN_BASIN(CastingRecipeSerializer.CastingBasinRecipeSerializer::new), CASTING_IN_TABLE(CastingRecipeSerializer.CastingTableRecipeSerializer::new);

    private final ResourceLocation id;

    private final RegistryObject<RecipeSerializer<?>> serializerObject;

    @Nullable
    private final RegistryObject<RecipeType<?>> typeObject;

    private final Supplier<RecipeType<?>> type;

    private CMRecipeTypes(Supplier<RecipeSerializer<?>> serializerSupplier) {
        String name = CMLang.asId(this.name());
        this.id = CreateMetallurgy.genRL(name);
        this.serializerObject = CMRecipeTypes.Registers.SERIALIZER_REGISTER.register(name, serializerSupplier);
        this.typeObject = CMRecipeTypes.Registers.TYPE_REGISTER.register(name, () -> RecipeType.simple(this.id));
        this.type = this.typeObject;
    }

    private CMRecipeTypes(ProcessingRecipeBuilder.ProcessingRecipeFactory<?> processingFactory) {
        this(() -> new ProcessingRecipeSerializer<>(processingFactory));
    }

    public static void register(IEventBus modEventBus) {
        CMRecipeTypes.Registers.SERIALIZER_REGISTER.register(modEventBus);
        CMRecipeTypes.Registers.TYPE_REGISTER.register(modEventBus);
    }

    @Override
    public ResourceLocation getId() {
        return this.id;
    }

    @Override
    public <T extends RecipeSerializer<?>> T getSerializer() {
        return (T) this.serializerObject.get();
    }

    @Override
    public <T extends RecipeType<?>> T getType() {
        return (T) this.type.get();
    }

    private static class Registers {

        private static final DeferredRegister<RecipeSerializer<?>> SERIALIZER_REGISTER = DeferredRegister.create(ForgeRegistries.RECIPE_SERIALIZERS, "createmetallurgy");

        private static final DeferredRegister<RecipeType<?>> TYPE_REGISTER = DeferredRegister.create(Registries.RECIPE_TYPE, "createmetallurgy");
    }
}