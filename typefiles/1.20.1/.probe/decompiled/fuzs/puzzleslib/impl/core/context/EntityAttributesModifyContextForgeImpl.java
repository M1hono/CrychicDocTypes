package fuzs.puzzleslib.impl.core.context;

import fuzs.puzzleslib.api.core.v1.context.EntityAttributesModifyContext;
import java.util.Objects;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.ai.attributes.Attribute;

public record EntityAttributesModifyContextForgeImpl(EntityAttributesModifyContext context) implements EntityAttributesModifyContext {

    @Override
    public void registerAttributeModification(EntityType<? extends LivingEntity> entityType, Attribute attribute, double value) {
        Objects.requireNonNull(entityType, "entity type is null");
        Objects.requireNonNull(attribute, "attribute is null");
        this.context.registerAttributeModification(entityType, attribute, value);
    }
}