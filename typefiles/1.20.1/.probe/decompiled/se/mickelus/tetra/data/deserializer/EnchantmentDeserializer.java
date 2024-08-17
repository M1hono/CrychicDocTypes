package se.mickelus.tetra.data.deserializer;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import java.lang.reflect.Type;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.enchantment.Enchantment;
import net.minecraftforge.registries.ForgeRegistries;

@ParametersAreNonnullByDefault
public class EnchantmentDeserializer implements JsonDeserializer<Enchantment> {

    public Enchantment deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        String string = json.getAsString();
        if (string != null) {
            ResourceLocation resourceLocation = new ResourceLocation(string);
            if (ForgeRegistries.ENCHANTMENTS.containsKey(resourceLocation)) {
                return ForgeRegistries.ENCHANTMENTS.getValue(resourceLocation);
            }
        }
        return null;
    }
}