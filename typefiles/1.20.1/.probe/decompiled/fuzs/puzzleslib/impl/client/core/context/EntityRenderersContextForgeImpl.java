package fuzs.puzzleslib.impl.client.core.context;

import fuzs.puzzleslib.api.client.core.v1.context.EntityRenderersContext;
import java.util.Objects;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;

public record EntityRenderersContextForgeImpl(EntityRenderersContext context) implements EntityRenderersContext {

    @Override
    public <T extends Entity> void registerEntityRenderer(EntityType<? extends T> entityType, EntityRendererProvider<T> entityRendererProvider) {
        Objects.requireNonNull(entityType, "entity type is null");
        Objects.requireNonNull(entityRendererProvider, "entity renderer provider is null");
        this.context.registerEntityRenderer(entityType, entityRendererProvider);
    }
}