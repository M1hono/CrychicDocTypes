package dev.kosmx.playerAnim.core.data.gson;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import dev.kosmx.playerAnim.core.data.AnimationFormat;
import dev.kosmx.playerAnim.core.data.KeyframeAnimation;
import dev.kosmx.playerAnim.core.util.Ease;
import dev.kosmx.playerAnim.core.util.Easing;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;

public class GeckoLibSerializer {

    public static List<KeyframeAnimation> serialize(JsonObject node) {
        try {
            return readAnimations(node.get("animations").getAsJsonObject());
        } catch (NumberFormatException var2) {
            throw new JsonParseException(var2);
        }
    }

    private static List<KeyframeAnimation> readAnimations(JsonObject jsonEmotes) {
        List<KeyframeAnimation> emotes = new ArrayList();
        jsonEmotes.entrySet().forEach(stringJsonElementEntry -> {
            KeyframeAnimation.AnimationBuilder builder = new KeyframeAnimation.AnimationBuilder(AnimationFormat.JSON_MC_ANIM);
            String name = (String) stringJsonElementEntry.getKey();
            JsonObject node = ((JsonElement) stringJsonElementEntry.getValue()).getAsJsonObject();
            builder.name = name;
            if (node.has("animation_length")) {
                builder.endTick = (int) Math.ceil((double) (node.get("animation_length").getAsFloat() * 20.0F));
                if (node.has("loop")) {
                    builder.isLooped = node.get("loop").getAsJsonPrimitive().isBoolean() && node.get("loop").getAsBoolean();
                    if (!builder.isLooped && node.get("loop").getAsJsonPrimitive().isString() && node.get("loop").getAsString().equals("hold_on_last_frame")) {
                        builder.isLooped = true;
                        builder.returnTick = builder.endTick;
                    } else {
                        builder.endTick--;
                    }
                }
                builder.fullyEnableParts();
                builder.optimizeEmote();
                keyframeSerializer(builder, node.get("bones").getAsJsonObject());
            } else {
                if (!node.has("loop") || !node.get("loop").getAsBoolean()) {
                    throw new JsonParseException("Could not recognise GeckoLib animation: " + name);
                }
                builder.endTick = builder.stopTick = 1;
                builder.isLooped = true;
                builder.returnTick = 0;
                keyframeSerializer(builder, node.get("bones").getAsJsonObject());
            }
            emotes.add(builder.build());
        });
        return emotes;
    }

    private static void keyframeSerializer(KeyframeAnimation.AnimationBuilder emoteData, JsonObject node) {
        for (Entry<String, JsonElement> entry : node.entrySet()) {
            readBone(emoteData.getOrCreatePart(snake2Camel((String) entry.getKey())), ((JsonElement) entry.getValue()).getAsJsonObject(), emoteData);
        }
    }

    private static void readBone(KeyframeAnimation.StateCollection stateCollection, JsonObject node, KeyframeAnimation.AnimationBuilder emoteData) {
        if (node.has("rotation")) {
            JsonElement jsonRotation = node.get("rotation");
            if (jsonRotation.isJsonArray()) {
                readCollection(getRots(stateCollection), 0, Ease.LINEAR, jsonRotation.getAsJsonArray(), emoteData, false);
            } else {
                jsonRotation.getAsJsonObject().entrySet().forEach(entry -> {
                    if (((String) entry.getKey()).equals("vector")) {
                        readCollection(getRots(stateCollection), 0, Ease.LINEAR, ((JsonElement) entry.getValue()).getAsJsonArray(), emoteData, false);
                    } else if (!((String) entry.getKey()).equals("easing")) {
                        int tick = (int) (Float.parseFloat((String) entry.getKey()) * 20.0F);
                        if (((JsonElement) entry.getValue()).isJsonArray()) {
                            readCollection(getRots(stateCollection), tick, Ease.CONSTANT, ((JsonElement) entry.getValue()).getAsJsonArray(), emoteData, false);
                        } else {
                            readDataAtTick(((JsonElement) entry.getValue()).getAsJsonObject(), stateCollection, tick, emoteData, false);
                        }
                    }
                });
            }
        }
        if (node.has("position")) {
            JsonElement jsonPosition = node.get("position");
            if (jsonPosition.isJsonArray()) {
                readCollection(getOffs(stateCollection), 0, Ease.LINEAR, jsonPosition.getAsJsonArray(), emoteData, true);
            } else {
                jsonPosition.getAsJsonObject().entrySet().forEach(entry -> {
                    if (((String) entry.getKey()).equals("vector")) {
                        readCollection(getOffs(stateCollection), 0, Ease.LINEAR, ((JsonElement) entry.getValue()).getAsJsonArray(), emoteData, true);
                    } else if (!((String) entry.getKey()).equals("easing")) {
                        int tick = (int) (Float.parseFloat((String) entry.getKey()) * 20.0F);
                        if (((JsonElement) entry.getValue()).isJsonArray()) {
                            readCollection(getOffs(stateCollection), tick, Ease.LINEAR, ((JsonElement) entry.getValue()).getAsJsonArray(), emoteData, true);
                        } else {
                            readDataAtTick(((JsonElement) entry.getValue()).getAsJsonObject(), stateCollection, tick, emoteData, true);
                        }
                    }
                });
            }
        }
    }

    private static void readDataAtTick(JsonObject currentNode, KeyframeAnimation.StateCollection stateCollection, int tick, KeyframeAnimation.AnimationBuilder emoteData, boolean isPos) {
        Ease ease = Ease.LINEAR;
        if (currentNode.has("lerp_mode")) {
            String lerp = currentNode.get("lerp_mode").getAsString();
            ease = lerp.equals("catmullrom") ? Ease.INOUTSINE : Easing.easeFromString(lerp);
        }
        KeyframeAnimation.StateCollection.State[] targetVec = isPos ? getOffs(stateCollection) : getRots(stateCollection);
        if (currentNode.has("easing")) {
            ease = Easing.easeFromString(currentNode.get("easing").getAsString());
        }
        if (currentNode.has("pre")) {
            readCollection(targetVec, tick, ease, getVector(currentNode.get("pre")), emoteData, isPos);
        }
        if (currentNode.has("vector")) {
            readCollection(targetVec, tick, ease, currentNode.get("vector").getAsJsonArray(), emoteData, isPos);
        }
        if (currentNode.has("post")) {
            readCollection(targetVec, tick, ease, getVector(currentNode.get("post")), emoteData, isPos);
        }
    }

    public static JsonArray getVector(JsonElement element) {
        return element.isJsonArray() ? element.getAsJsonArray() : ((JsonObject) element).get("vector").getAsJsonArray();
    }

    private static void readCollection(KeyframeAnimation.StateCollection.State[] a, int tick, Ease ease, JsonArray array, KeyframeAnimation.AnimationBuilder emoteData, boolean isPos) {
        if (a.length != 3) {
            throw new ArrayStoreException("wrong array length");
        } else {
            for (int i = 0; i < 3; i++) {
                float value = array.get(i).getAsFloat();
                if (isPos) {
                    if (a[0] == emoteData.body.x) {
                        value /= 16.0F;
                        if (i == 0) {
                            value = -value;
                        }
                    } else if (i == 1) {
                        value = -value;
                    }
                } else if (a[0] == emoteData.body.pitch && i != 2) {
                    value = -value;
                }
                value += a[i].defaultValue;
                a[i].addKeyFrame(tick, value, ease, 0, true);
            }
        }
    }

    public static String snake2Camel(String original) {
        StringBuilder builder = new StringBuilder();
        StringReader reader = new StringReader(original);
        boolean upperNext = false;
        int c;
        try {
            while ((c = reader.read()) != -1) {
                if (c == 95) {
                    upperNext = true;
                } else {
                    if (upperNext) {
                        builder.appendCodePoint(Character.toUpperCase(c));
                    } else {
                        builder.appendCodePoint(c);
                    }
                    upperNext = false;
                }
            }
        } catch (IOException var6) {
            return original;
        }
        return builder.toString();
    }

    private static KeyframeAnimation.StateCollection.State[] getRots(KeyframeAnimation.StateCollection stateCollection) {
        return new KeyframeAnimation.StateCollection.State[] { stateCollection.pitch, stateCollection.yaw, stateCollection.roll };
    }

    private static KeyframeAnimation.StateCollection.State[] getOffs(KeyframeAnimation.StateCollection stateCollection) {
        return new KeyframeAnimation.StateCollection.State[] { stateCollection.x, stateCollection.y, stateCollection.z };
    }
}