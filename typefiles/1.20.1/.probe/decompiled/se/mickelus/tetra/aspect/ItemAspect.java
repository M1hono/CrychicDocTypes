package se.mickelus.tetra.aspect;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import java.lang.reflect.Type;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

public class ItemAspect {

    private static final Map<String, ItemAspect> map = new ConcurrentHashMap();

    public static final ItemAspect armor = get("armor");

    public static final ItemAspect armorFeet = get("armor_feet");

    public static final ItemAspect armorLegs = get("armor_legs");

    public static final ItemAspect armorChest = get("armor_chest");

    public static final ItemAspect armorHead = get("armor_head");

    public static final ItemAspect edgedWeapon = get("edged_weapon");

    public static final ItemAspect bluntWeapon = get("blunt_weapon");

    public static final ItemAspect pointyWeapon = get("pointy_weapon");

    public static final ItemAspect throwable = get("throwable");

    public static final ItemAspect blockBreaker = get("block_breaker");

    public static final ItemAspect fishingRod = get("fishing_rod");

    public static final ItemAspect breakable = get("breakable");

    public static final ItemAspect bow = get("bow");

    public static final ItemAspect wearable = get("wearable");

    public static final ItemAspect crossbow = get("crossbow");

    public static final ItemAspect vanishable = get("vanishable");

    private final String key;

    private ItemAspect(String key) {
        this.key = key;
    }

    public static ItemAspect get(String key) {
        return (ItemAspect) map.computeIfAbsent(key, k -> new ItemAspect(key));
    }

    public String getKey() {
        return this.key;
    }

    public static class Deserializer implements JsonDeserializer<ItemAspect> {

        public ItemAspect deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
            return (ItemAspect) Optional.ofNullable(json).map(JsonElement::getAsString).map(ItemAspect::get).orElse(null);
        }
    }
}