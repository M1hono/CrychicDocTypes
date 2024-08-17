package io.github.lightman314.lightmanscurrency.client.resourcepacks.data.item_trader;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonSyntaxException;
import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Nonnull;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener;
import net.minecraft.util.GsonHelper;
import net.minecraft.util.profiling.ProfilerFiller;

public class ItemPositionManager extends SimpleJsonResourceReloadListener {

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create();

    public static final ItemPositionManager INSTANCE = new ItemPositionManager();

    private final Map<ResourceLocation, ItemPositionData> itemPositions = new HashMap();

    @Nonnull
    public static ItemPositionData getDataOrEmpty(@Nonnull ResourceLocation id) {
        return (ItemPositionData) INSTANCE.itemPositions.getOrDefault(id, ItemPositionData.EMPTY);
    }

    private ItemPositionManager() {
        super(GSON, "lightmanscurrency/item_position_data");
    }

    protected void apply(@Nonnull Map<ResourceLocation, JsonElement> map, @Nonnull ResourceManager resourceManager, @Nonnull ProfilerFiller filler) {
        this.itemPositions.clear();
        RotationHandler.debugRegisteredHandlers();
        map.forEach((id, json) -> {
            try {
                ItemPositionData data = ItemPositionData.parse(GsonHelper.convertToJsonObject(json, "top element"));
                this.itemPositions.put(id, data);
            } catch (IllegalArgumentException | JsonSyntaxException var4) {
                LightmansCurrency.LogError("Parsing error loading item position data " + id, var4);
            }
        });
        LightmansCurrency.LogDebug("Loaded " + this.itemPositions.size() + " Item Position entries!");
    }
}