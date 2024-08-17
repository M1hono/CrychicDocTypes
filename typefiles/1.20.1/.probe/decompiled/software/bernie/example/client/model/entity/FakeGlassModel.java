package software.bernie.example.client.model.entity;

import net.minecraft.client.renderer.RenderType;
import net.minecraft.resources.ResourceLocation;
import software.bernie.example.entity.FakeGlassEntity;
import software.bernie.geckolib.model.DefaultedEntityGeoModel;

public class FakeGlassModel extends DefaultedEntityGeoModel<FakeGlassEntity> {

    private static final ResourceLocation REDSTONE_BLOCK_TEXTURE = new ResourceLocation("minecraft", "textures/block/redstone_block.png");

    public FakeGlassModel() {
        super(new ResourceLocation("geckolib", "fake_glass"));
    }

    public ResourceLocation getTextureResource(FakeGlassEntity animatable) {
        return REDSTONE_BLOCK_TEXTURE;
    }

    public RenderType getRenderType(FakeGlassEntity animatable, ResourceLocation texture) {
        return RenderType.entityTranslucent(texture);
    }
}