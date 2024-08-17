package software.bernie.geckolib.loading.json.raw;

import com.google.gson.JsonDeserializer;
import com.google.gson.JsonParseException;
import javax.annotation.Nullable;
import software.bernie.geckolib.util.JsonUtil;

public record UVUnion(double[] boxUVCoords, @Nullable UVFaces faceUV, boolean isBoxUV) {

    public static JsonDeserializer<UVUnion> deserializer() throws JsonParseException {
        return (json, type, context) -> {
            if (json.isJsonObject()) {
                return new UVUnion(new double[0], (UVFaces) context.deserialize(json.getAsJsonObject(), UVFaces.class), false);
            } else if (json.isJsonArray()) {
                return new UVUnion(JsonUtil.jsonArrayToDoubleArray(json.getAsJsonArray()), null, true);
            } else {
                throw new JsonParseException("Invalid format provided for UVUnion, must be either double array or UVFaces collection");
            }
        };
    }
}