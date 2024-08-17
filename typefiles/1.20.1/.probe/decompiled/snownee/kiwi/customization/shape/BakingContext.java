package snownee.kiwi.customization.shape;

import com.google.common.base.Preconditions;
import com.google.common.collect.Maps;
import java.util.Map;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.phys.shapes.Shapes;
import snownee.kiwi.Kiwi;

public interface BakingContext {

    ShapeGenerator getShape(ResourceLocation var1);

    public static class Impl implements BakingContext {

        public final Map<ResourceLocation, ShapeGenerator> byId;

        private final ShapeGenerator fallbackShape;

        public Impl(Map<ResourceLocation, UnbakedShape> unbaked) {
            this.byId = Maps.newHashMapWithExpectedSize(unbaked.size());
            this.fallbackShape = ShapeGenerator.unit(Shapes.block());
        }

        @Override
        public ShapeGenerator getShape(ResourceLocation id) {
            return (ShapeGenerator) Preconditions.checkNotNull((ShapeGenerator) this.byId.get(id), "Shape not found: %s", id);
        }

        public void bake(ResourceLocation id, UnbakedShape unbaked) {
            ShapeGenerator baked;
            try {
                baked = unbaked.bake(this);
            } catch (Exception var5) {
                Kiwi.LOGGER.error("Failed to bake shape: %s".formatted(id), var5);
                baked = this.fallbackShape;
            }
            this.byId.put(id, baked);
        }
    }
}