package fuzs.puzzleslib.api.data.v1;

import java.util.Objects;
import net.minecraft.data.PackOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.client.model.generators.BlockStateProvider;
import net.minecraftforge.client.model.generators.ItemModelBuilder;
import net.minecraftforge.client.model.generators.ModelFile;
import net.minecraftforge.common.data.ExistingFileHelper;
import net.minecraftforge.data.event.GatherDataEvent;
import net.minecraftforge.registries.ForgeRegistries;
import org.apache.commons.lang3.ArrayUtils;

public abstract class AbstractModelProvider extends BlockStateProvider {

    public AbstractModelProvider(GatherDataEvent evt, String modId) {
        this(evt.getGenerator().getPackOutput(), evt.getExistingFileHelper(), modId);
    }

    public AbstractModelProvider(PackOutput packOutput, ExistingFileHelper fileHelper, String modId) {
        super(packOutput, modId, fileHelper);
    }

    @Deprecated(forRemoval = true)
    public AbstractModelProvider(PackOutput packOutput, String modId, ExistingFileHelper fileHelper) {
        this(packOutput, fileHelper, modId);
    }

    @Override
    protected abstract void registerStatesAndModels();

    public void simpleExistingBlock(Block block) {
        this.simpleBlock(block, this.existingBlockModel(block));
    }

    public void simpleExistingBlockWithItem(Block block) {
        ModelFile.ExistingModelFile model = this.existingBlockModel(block);
        this.simpleBlock(block, model);
        this.simpleBlockItem(block, model);
    }

    public ModelFile.ExistingModelFile existingBlockModel(Block block) {
        return new ModelFile.ExistingModelFile(this.blockTexture(block), this.models().existingFileHelper);
    }

    public void builtInBlock(Block block, Block particleTexture) {
        this.builtInBlock(block, this.blockTexture(particleTexture));
    }

    public void builtInBlock(Block block, ResourceLocation particleTexture) {
        this.simpleBlock(block, this.models().getBuilder(this.name(block)).texture("particle", particleTexture));
    }

    public void cubeBottomTopBlock(Block block) {
        this.cubeBottomTopBlock(block, this.extend(this.blockTexture(block), "_side"), this.extend(this.blockTexture(block), "_bottom"), this.extend(this.blockTexture(block), "_top"));
        this.itemModels().withExistingParent(this.name(block), this.extendKey(block, "block"));
    }

    public void cubeBottomTopBlock(Block block, ResourceLocation side, ResourceLocation bottom, ResourceLocation top) {
        this.simpleBlock(block, this.models().cubeBottomTop(this.name(block), side, bottom, top));
    }

    @Override
    public ResourceLocation key(Block block) {
        return ForgeRegistries.BLOCKS.getKey(block);
    }

    @Override
    public String name(Block block) {
        return this.key(block).getPath();
    }

    public String itemName(Item item) {
        return ForgeRegistries.ITEMS.getKey(item).getPath();
    }

    public ItemModelBuilder builtInItem(Item item, Block texture) {
        return this.builtInItem(item, texture, this.mcLoc("builtin/entity"));
    }

    public ItemModelBuilder builtInItem(Item item, Block texture, ResourceLocation parent) {
        return this.itemModels().getBuilder(this.itemName(item)).parent(this.itemModels().getExistingFile(parent)).texture("particle", this.blockTexture(texture));
    }

    public ResourceLocation extendKey(Block block, String... extensions) {
        ResourceLocation loc = this.key(block);
        extensions = (String[]) ArrayUtils.add(extensions, loc.getPath());
        return new ResourceLocation(loc.getNamespace(), String.join("/", extensions));
    }

    @Override
    public ResourceLocation extend(ResourceLocation rl, String suffix) {
        return new ResourceLocation(rl.getNamespace(), rl.getPath() + suffix);
    }

    public ItemModelBuilder basicItem(Item item) {
        return this.itemModels().basicItem(item);
    }

    public ItemModelBuilder basicItem(ResourceLocation item) {
        return this.itemModels().basicItem(item);
    }

    public ItemModelBuilder spawnEgg(Item item) {
        return this.spawnEgg((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)));
    }

    public ItemModelBuilder spawnEgg(ResourceLocation item) {
        return this.itemModels().getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("minecraft:item/template_spawn_egg"));
    }

    public ItemModelBuilder handheldItem(Item item) {
        return this.handheldItem((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)));
    }

    public ItemModelBuilder handheldItem(ResourceLocation item) {
        return this.itemModels().getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("item/handheld")).texture("layer0", new ResourceLocation(item.getNamespace(), "item/" + item.getPath()));
    }

    public ItemModelBuilder basicItem(Item item, ResourceLocation texture) {
        return this.basicItem((ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(item)), texture);
    }

    public ItemModelBuilder basicItem(ResourceLocation item, Item texture) {
        return this.basicItem(item, (ResourceLocation) Objects.requireNonNull(ForgeRegistries.ITEMS.getKey(texture)));
    }

    public ItemModelBuilder basicItem(ResourceLocation item, ResourceLocation texture) {
        return this.itemModels().getBuilder(item.toString()).parent(new ModelFile.UncheckedModelFile("item/generated")).texture("layer0", new ResourceLocation(texture.getNamespace(), "item/" + texture.getPath()));
    }
}