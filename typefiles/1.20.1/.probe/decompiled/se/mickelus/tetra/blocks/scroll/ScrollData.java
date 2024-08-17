package se.mickelus.tetra.blocks.scroll;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.mojang.datafixers.util.Pair;
import com.mojang.serialization.Codec;
import com.mojang.serialization.DataResult;
import com.mojang.serialization.JsonOps;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.nbt.NbtOps;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import se.mickelus.mutil.util.HexCodec;

@ParametersAreNonnullByDefault
public class ScrollData {

    private static final Codec<ScrollData> codec = RecordCodecBuilder.create(instance -> instance.group(Codec.STRING.fieldOf("key").forGetter(i -> i.key), Codec.STRING.optionalFieldOf("details").forGetter(i -> Optional.ofNullable(i.details)), Codec.BOOL.fieldOf("intricate").forGetter(i -> i.isIntricate), Codec.INT.fieldOf("material").forGetter(i -> i.material), HexCodec.instance.fieldOf("ribbon").forGetter(i -> i.ribbon), Codec.INT.listOf().optionalFieldOf("glyphs", Collections.emptyList()).forGetter(i -> i.glyphs), ResourceLocation.CODEC.listOf().optionalFieldOf("schematics", Collections.emptyList()).forGetter(i -> i.schematics), ResourceLocation.CODEC.listOf().optionalFieldOf("effects", Collections.emptyList()).forGetter(i -> i.craftingEffects)).apply(instance, ScrollData::new));

    public String key;

    public String details;

    public boolean isIntricate;

    public int material = 0;

    public int ribbon = 16777215;

    public List<Integer> glyphs = Collections.emptyList();

    public List<ResourceLocation> schematics = Collections.emptyList();

    public List<ResourceLocation> craftingEffects = Collections.emptyList();

    public ScrollData() {
        this.key = "unknown";
    }

    public ScrollData(String name, Optional<String> details, boolean isIntricate, int material, int ribbon, List<Integer> glyphs, List<ResourceLocation> schematics, List<ResourceLocation> craftingEffects) {
        this.key = name;
        this.details = (String) details.orElse(null);
        this.isIntricate = isIntricate;
        this.material = material;
        this.ribbon = ribbon;
        this.glyphs = glyphs;
        if (!schematics.isEmpty()) {
            this.schematics = schematics;
        }
        if (!craftingEffects.isEmpty()) {
            this.craftingEffects = craftingEffects;
        }
    }

    public static int readMaterialFast(ItemStack itemStack) {
        return (Integer) Optional.ofNullable(itemStack.getTagElement("BlockEntityTag")).map(tag -> tag.getList("data", 10)).filter(list -> list.size() > 0).map(list -> list.getCompound(0)).map(tag -> tag.getInt("material")).orElse(0);
    }

    public static int readRibbonFast(ItemStack itemStack) {
        return (Integer) Optional.ofNullable(itemStack.getTagElement("BlockEntityTag")).map(tag -> tag.getList("data", 10)).filter(list -> list.size() > 0).map(list -> list.getCompound(0)).map(tag -> tag.getString("ribbon")).map(hex -> (int) Long.parseLong(hex, 16)).orElse(0);
    }

    public static ScrollData read(ItemStack itemStack) {
        return (ScrollData) Optional.ofNullable(itemStack.getTagElement("BlockEntityTag")).map(ScrollData::read).filter(data -> data.length > 0).map(data -> data[0]).orElseGet(ScrollData::new);
    }

    public static ScrollData[] read(CompoundTag tag) {
        return (ScrollData[]) tag.getList("data", 10).stream().map(nbt -> codec.decode(NbtOps.INSTANCE, nbt)).map(DataResult::result).filter(Optional::isPresent).map(Optional::get).map(Pair::getFirst).toArray(ScrollData[]::new);
    }

    public static CompoundTag write(ScrollData[] data, CompoundTag tag) {
        ListTag list = (ListTag) Arrays.stream(data).map(scroll -> codec.encodeStart(NbtOps.INSTANCE, scroll)).map(DataResult::result).filter(Optional::isPresent).map(Optional::get).collect(Collectors.toCollection(ListTag::new));
        tag.put("data", list);
        return tag;
    }

    public static ScrollData read(JsonObject json) {
        return (ScrollData) Optional.of(codec.decode(JsonOps.INSTANCE, json)).flatMap(DataResult::result).map(Pair::getFirst).orElse(null);
    }

    public void write(ItemStack itemStack) {
        itemStack.addTagElement("BlockEntityTag", write(new ScrollData[] { this }, new CompoundTag()));
    }

    public JsonElement write(JsonObject json) {
        return (JsonElement) Optional.of(codec.encode(this, JsonOps.INSTANCE, json)).flatMap(DataResult::result).orElse(null);
    }
}