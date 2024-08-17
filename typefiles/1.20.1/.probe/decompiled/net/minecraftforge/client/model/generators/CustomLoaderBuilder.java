package net.minecraftforge.client.model.generators;

import com.google.common.base.Preconditions;
import com.google.gson.JsonObject;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.data.ExistingFileHelper;

public abstract class CustomLoaderBuilder<T extends ModelBuilder<T>> {

    protected final ResourceLocation loaderId;

    protected final T parent;

    protected final ExistingFileHelper existingFileHelper;

    protected final Map<String, Boolean> visibility = new LinkedHashMap();

    protected CustomLoaderBuilder(ResourceLocation loaderId, T parent, ExistingFileHelper existingFileHelper) {
        this.loaderId = loaderId;
        this.parent = parent;
        this.existingFileHelper = existingFileHelper;
    }

    public CustomLoaderBuilder<T> visibility(String partName, boolean show) {
        Preconditions.checkNotNull(partName, "partName must not be null");
        this.visibility.put(partName, show);
        return this;
    }

    public T end() {
        return this.parent;
    }

    public JsonObject toJson(JsonObject json) {
        json.addProperty("loader", this.loaderId.toString());
        if (this.visibility.size() > 0) {
            JsonObject visibilityObj = new JsonObject();
            for (Entry<String, Boolean> entry : this.visibility.entrySet()) {
                visibilityObj.addProperty((String) entry.getKey(), (Boolean) entry.getValue());
            }
            json.add("visibility", visibilityObj);
        }
        return json;
    }
}