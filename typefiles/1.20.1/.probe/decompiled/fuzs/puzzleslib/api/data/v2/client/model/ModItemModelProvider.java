package fuzs.puzzleslib.api.data.v2.client.model;

import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import net.minecraft.data.CachedOutput;
import net.minecraft.data.PackOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.client.model.generators.BlockStateProvider;
import net.minecraftforge.client.model.generators.ItemModelBuilder;
import net.minecraftforge.client.model.generators.ItemModelProvider;
import net.minecraftforge.client.model.generators.ModelFile;
import net.minecraftforge.common.data.ExistingFileHelper;
import net.minecraftforge.registries.ForgeRegistries;

public class ModItemModelProvider extends ItemModelProvider {

    private final BlockStateProvider provider;

    public ModItemModelProvider(PackOutput output, String modId, ExistingFileHelper fileHelper, BlockStateProvider provider) {
        super(output, modId, fileHelper);
        this.provider = provider;
    }

    public ResourceLocation key(Item item) {
        return ForgeRegistries.ITEMS.getKey(item);
    }

    public String name(Item item) {
        return this.key(item).getPath();
    }

    public ItemModelBuilder basicItem(Item item, ResourceLocation texture) {
        return this.basicItem((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)), texture);
    }

    public ItemModelBuilder basicItem(ResourceLocation item, Item texture) {
        return this.basicItem(item, (ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(texture)));
    }

    public ItemModelBuilder basicItem(ResourceLocation item, ResourceLocation texture) {
        return this.getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("item/generated")).texture("layer0", new ResourceLocation(texture.getNamespace(), "item/" + texture.getPath()));
    }

    public ItemModelBuilder handheldItem(Item item) {
        return this.handheldItem((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)));
    }

    public ItemModelBuilder handheldItem(ResourceLocation item) {
        return this.getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("item/handheld")).texture("layer0", new ResourceLocation(item.getNamespace(), "item/" + item.getPath()));
    }

    public ItemModelBuilder spawnEgg(Item item) {
        return this.spawnEgg((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)));
    }

    public ItemModelBuilder spawnEgg(ResourceLocation item) {
        return this.getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("minecraft:item/template_spawn_egg"));
    }

    public ItemModelBuilder builtInItem(Item item, Block texture) {
        return this.builtInItem(item, texture, this.mcLoc("builtin/entity"));
    }

    public ItemModelBuilder builtInItem(Item item, Block texture, ResourceLocation parent) {
        return this.getBuilder(this.name(item)).parent(this.getExistingFile(parent)).texture("particle", this.provider.blockTexture(texture));
    }

    @Override
    protected final void registerModels() {
    }

    @Override
    public final CompletableFuture<?> run(CachedOutput cache) {
        return CompletableFuture.completedFuture(null);
    }
}