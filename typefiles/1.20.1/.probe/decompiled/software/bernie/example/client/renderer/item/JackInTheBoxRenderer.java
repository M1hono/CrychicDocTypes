package software.bernie.example.client.renderer.item;

import net.minecraft.resources.ResourceLocation;
import software.bernie.example.item.JackInTheBoxItem;
import software.bernie.geckolib.model.DefaultedItemGeoModel;
import software.bernie.geckolib.renderer.GeoItemRenderer;

public class JackInTheBoxRenderer extends GeoItemRenderer<JackInTheBoxItem> {

    public JackInTheBoxRenderer() {
        super(new DefaultedItemGeoModel<>(new ResourceLocation("geckolib", "jack_in_the_box")));
    }
}