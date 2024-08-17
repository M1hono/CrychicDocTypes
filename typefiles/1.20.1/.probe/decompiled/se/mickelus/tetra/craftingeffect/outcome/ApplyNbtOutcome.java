package se.mickelus.tetra.craftingeffect.outcome;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import java.util.Map;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.ToolAction;
import se.mickelus.tetra.module.schematic.UpgradeSchematic;

@ParametersAreNonnullByDefault
public class ApplyNbtOutcome implements CraftingEffectOutcome {

    JsonObject nbt;

    boolean force = false;

    @Override
    public boolean apply(ResourceLocation[] unlockedEffects, ItemStack upgradedStack, String slot, boolean isReplacing, Player player, ItemStack[] preMaterials, Map<ToolAction, Integer> tools, Level world, UpgradeSchematic schematic, BlockPos pos, BlockState blockState, boolean consumeResources, ItemStack[] postMaterials) {
        if (this.nbt != null) {
            CompoundTag tag = upgradedStack.getOrCreateTag();
            this.writeObject(this.nbt, tag);
            return true;
        } else {
            return false;
        }
    }

    private void writeObject(JsonObject json, CompoundTag tag) {
        json.entrySet().forEach(pair -> {
            JsonElement value = (JsonElement) pair.getValue();
            String key = (String) pair.getKey();
            if (value.isJsonPrimitive()) {
                JsonPrimitive primitive = value.getAsJsonPrimitive();
                if (primitive.isNumber()) {
                    Number numberValue = primitive.getAsNumber();
                    String stringValue = value.getAsString();
                    boolean isFloat = stringValue.matches("[-+]?[0-9]*\\.[0-9]+");
                    if (isFloat) {
                        tag.putFloat(key, numberValue.floatValue());
                    } else {
                        tag.putInt(key, numberValue.intValue());
                    }
                } else if (primitive.isBoolean()) {
                    tag.putBoolean(key, primitive.getAsBoolean());
                } else if (primitive.isString()) {
                    tag.putString(key, primitive.getAsString());
                }
            } else if (json.isJsonObject()) {
                CompoundTag childTag = new CompoundTag();
                this.writeObject(value.getAsJsonObject(), childTag);
                tag.put(key, childTag);
            } else if (value.isJsonArray()) {
            }
        });
    }
}