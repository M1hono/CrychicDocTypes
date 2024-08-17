package fuzs.puzzleslib.impl.client.init;

import com.google.common.base.Preconditions;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import fuzs.puzzleslib.api.client.init.v1.ItemModelDisplayOverrides;
import java.util.Arrays;
import java.util.EnumSet;
import java.util.Map;
import java.util.Objects;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.world.item.ItemDisplayContext;

public abstract class ItemDisplayOverridesImpl implements ItemModelDisplayOverrides {

    protected final Map<ModelResourceLocation, Map<ItemDisplayContext, ModelResourceLocation>> overrideLocations = Maps.newHashMap();

    @Override
    public final void register(ModelResourceLocation itemModel, ModelResourceLocation itemModelOverride, ItemDisplayContext... defaultContexts) {
        Objects.requireNonNull(itemModel, "item model is null");
        Objects.requireNonNull(itemModelOverride, "item model override is null");
        Preconditions.checkPositionIndex(0, defaultContexts.length - 1, "item display contexts is empty");
        Map<ItemDisplayContext, ModelResourceLocation> overrides = (Map<ItemDisplayContext, ModelResourceLocation>) this.overrideLocations.computeIfAbsent(itemModel, $ -> Maps.newEnumMap(ItemDisplayContext.class));
        for (ItemDisplayContext context : EnumSet.complementOf(Sets.newEnumSet(Arrays.asList(defaultContexts), ItemDisplayContext.class))) {
            if (overrides.put(context, itemModelOverride) != null) {
                throw new IllegalStateException("Attempting to register duplicate item model display override for model %s and display context %s".formatted(itemModel, context));
            }
        }
    }

    public BakedModel getItemModelDisplayOverride(BakedModel itemModel, ItemDisplayContext itemDisplayContext) {
        throw new UnsupportedOperationException();
    }
}