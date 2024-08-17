package fr.frinn.custommachinery.common.component.variant;

import fr.frinn.custommachinery.api.codec.NamedCodec;
import fr.frinn.custommachinery.api.component.IMachineComponent;
import fr.frinn.custommachinery.api.component.MachineComponentType;
import fr.frinn.custommachinery.api.component.variant.IComponentVariant;
import fr.frinn.custommachinery.api.component.variant.RegisterComponentVariantEvent;
import java.util.Collections;
import java.util.Map;
import net.minecraft.resources.ResourceLocation;
import org.jetbrains.annotations.Nullable;

public class ComponentVariantRegistry {

    private static Map<MachineComponentType<? extends IMachineComponent>, Map<ResourceLocation, NamedCodec<IComponentVariant>>> map = Collections.emptyMap();

    public static void init() {
        RegisterComponentVariantEvent event = new RegisterComponentVariantEvent();
        RegisterComponentVariantEvent.EVENT.invoker().registerComponentVariant(event);
        map = event.getComponentVariants();
    }

    @Nullable
    public static <C extends IMachineComponent> NamedCodec<IComponentVariant> getVariantCodec(MachineComponentType<C> type, ResourceLocation id) {
        Map<ResourceLocation, NamedCodec<IComponentVariant>> variantsMap = (Map<ResourceLocation, NamedCodec<IComponentVariant>>) map.get(type);
        return variantsMap == null ? null : (NamedCodec) variantsMap.get(id);
    }
}