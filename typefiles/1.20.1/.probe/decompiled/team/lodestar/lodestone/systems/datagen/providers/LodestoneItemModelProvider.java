package team.lodestar.lodestone.systems.datagen.providers;

import net.minecraft.data.PackOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraftforge.client.model.generators.ItemModelProvider;
import net.minecraftforge.common.data.ExistingFileHelper;
import net.minecraftforge.registries.ForgeRegistries;

public abstract class LodestoneItemModelProvider extends ItemModelProvider {

    private String texturePath = "";

    public LodestoneItemModelProvider(PackOutput output, String modid, ExistingFileHelper existingFileHelper) {
        super(output, modid, existingFileHelper);
    }

    public void setTexturePath(String texturePath) {
        this.texturePath = texturePath;
    }

    public String getTexturePath() {
        return this.texturePath;
    }

    public String getItemName(Item item) {
        return ForgeRegistries.ITEMS.getKey(item).getPath();
    }

    public ResourceLocation getItemTexture(String path) {
        return this.modLoc("item/" + this.getTexturePath() + path);
    }

    public ResourceLocation getBlockTexture(String path) {
        return this.modLoc("block/" + LodestoneBlockStateProvider.getTexturePath() + path);
    }

    public void createGenericModel(Item item, ResourceLocation modelType, ResourceLocation textureLocation) {
        this.withExistingParent(this.getItemName(item), modelType).texture("layer0", textureLocation);
    }

    public ResourceLocation getBlockTextureFromCache(String key) {
        return (ResourceLocation) LodestoneBlockModelProvider.BLOCK_TEXTURE_CACHE.get(key);
    }
}