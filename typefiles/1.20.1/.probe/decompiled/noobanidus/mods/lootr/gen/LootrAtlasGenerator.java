package noobanidus.mods.lootr.gen;

import java.util.Optional;
import net.minecraft.client.renderer.texture.atlas.sources.SingleFile;
import net.minecraft.data.PackOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.data.ExistingFileHelper;
import net.minecraftforge.common.data.SpriteSourceProvider;
import noobanidus.mods.lootr.client.block.LootrChestBlockRenderer;
import noobanidus.mods.lootr.client.block.LootrShulkerBlockRenderer;

public class LootrAtlasGenerator extends SpriteSourceProvider {

    public LootrAtlasGenerator(PackOutput output, ExistingFileHelper fileHelper) {
        super(output, fileHelper, "lootr");
    }

    @Override
    protected void addSources() {
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.MATERIAL.texture(), Optional.empty()));
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.MATERIAL2.texture(), Optional.empty()));
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.MATERIAL3.texture(), Optional.empty()));
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.MATERIAL4.texture(), Optional.empty()));
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.OLD_MATERIAL.texture(), Optional.empty()));
        this.atlas(CHESTS_ATLAS).addSource(new SingleFile(LootrChestBlockRenderer.OLD_MATERIAL2.texture(), Optional.empty()));
        this.atlas(SHULKER_BOXES_ATLAS).addSource(new SingleFile(LootrShulkerBlockRenderer.MATERIAL.texture(), Optional.empty()));
        this.atlas(SHULKER_BOXES_ATLAS).addSource(new SingleFile(LootrShulkerBlockRenderer.MATERIAL2.texture(), Optional.empty()));
        this.atlas(SHULKER_BOXES_ATLAS).addSource(new SingleFile(LootrShulkerBlockRenderer.MATERIAL3.texture(), Optional.empty()));
        this.atlas(SHULKER_BOXES_ATLAS).addSource(new SingleFile(LootrShulkerBlockRenderer.MATERIAL4.texture(), Optional.empty()));
        this.atlas(BLOCKS_ATLAS).addSource(new SingleFile(new ResourceLocation("lootr", "chest_opened"), Optional.empty()));
        this.atlas(BLOCKS_ATLAS).addSource(new SingleFile(new ResourceLocation("minecraft", "entity/player/wide/steve"), Optional.empty()));
    }
}