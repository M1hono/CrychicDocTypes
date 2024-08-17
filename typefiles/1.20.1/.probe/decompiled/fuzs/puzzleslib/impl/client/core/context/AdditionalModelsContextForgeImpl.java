package fuzs.puzzleslib.impl.client.core.context;

import com.google.common.base.Preconditions;
import fuzs.puzzleslib.api.client.core.v1.context.AdditionalModelsContext;
import java.util.Objects;
import java.util.function.Consumer;
import net.minecraft.resources.ResourceLocation;

public record AdditionalModelsContextForgeImpl(Consumer<ResourceLocation> consumer) implements AdditionalModelsContext {

    @Override
    public void registerAdditionalModel(ResourceLocation... models) {
        Objects.requireNonNull(models, "models is null");
        Preconditions.checkPositionIndex(1, models.length, "models is empty");
        for (ResourceLocation model : models) {
            Objects.requireNonNull(model, "model is null");
            this.consumer.accept(model);
        }
    }
}