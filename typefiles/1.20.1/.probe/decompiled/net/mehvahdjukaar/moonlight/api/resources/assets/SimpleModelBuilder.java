package net.mehvahdjukaar.moonlight.api.resources.assets;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.util.HashMap;
import java.util.Map;
import net.minecraft.resources.ResourceLocation;

public class SimpleModelBuilder {

    private final ResourceLocation parent;

    private final Map<String, ResourceLocation> textures = new HashMap();

    public SimpleModelBuilder(ResourceLocation parent) {
        this.parent = parent;
    }

    public SimpleModelBuilder texture(String name, ResourceLocation texture) {
        this.textures.put(name, texture);
        return this;
    }

    public JsonElement build() {
        JsonObject json = new JsonObject();
        json.addProperty("parent", this.parent.toString());
        JsonObject text = new JsonObject();
        this.textures.forEach((key, value) -> text.addProperty(key, value.toString()));
        json.add("textures", text);
        return json;
    }
}