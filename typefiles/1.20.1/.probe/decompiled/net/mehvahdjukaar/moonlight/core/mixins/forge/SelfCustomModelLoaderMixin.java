package net.mehvahdjukaar.moonlight.core.mixins.forge;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import net.mehvahdjukaar.moonlight.api.client.model.CustomModelLoader;
import net.mehvahdjukaar.moonlight.api.client.model.forge.GeometryWrapper;
import net.minecraftforge.client.model.geometry.IGeometryLoader;
import org.spongepowered.asm.mixin.Mixin;

@Mixin({ CustomModelLoader.class })
public interface SelfCustomModelLoaderMixin extends CustomModelLoader, IGeometryLoader<GeometryWrapper> {

    default GeometryWrapper read(JsonObject jsonObject, JsonDeserializationContext context) throws JsonParseException {
        return new GeometryWrapper(this.deserialize(jsonObject, context));
    }
}