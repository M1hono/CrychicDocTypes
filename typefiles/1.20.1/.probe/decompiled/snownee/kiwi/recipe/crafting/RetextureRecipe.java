package snownee.kiwi.recipe.crafting;

import com.google.common.collect.Maps;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import it.unimi.dsi.fastutil.chars.Char2ObjectArrayMap;
import it.unimi.dsi.fastutil.chars.Char2ObjectMap;
import it.unimi.dsi.fastutil.chars.Char2ObjectMap.Entry;
import it.unimi.dsi.fastutil.objects.ObjectIterator;
import java.util.Map;
import net.minecraft.core.RegistryAccess;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.inventory.CraftingContainer;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.RecipeSerializer;
import snownee.kiwi.block.def.BlockDefinition;
import snownee.kiwi.block.entity.RetextureBlockEntity;
import snownee.kiwi.data.DataModule;
import snownee.kiwi.recipe.FullBlockIngredient;

public class RetextureRecipe extends DynamicShapedRecipe {

    private Char2ObjectMap<String[]> textureKeys;

    public RetextureRecipe(ResourceLocation idIn, CraftingBookCategory category) {
        super(idIn, category);
    }

    @Override
    public boolean matches(CraftingContainer inv, int x, int y, int rx, int ry) {
        ItemStack stack = inv.m_8020_(x + y * inv.getWidth());
        return (this.getEmpty().test(stack) || FullBlockIngredient.isTextureBlock(stack)) && super.matches(inv, x, y, rx, ry);
    }

    @Override
    public ItemStack assemble(CraftingContainer inv, RegistryAccess registryAccess) {
        int[] pos = this.search(inv);
        if (pos == null) {
            return ItemStack.EMPTY;
        } else {
            ItemStack stack = this.recipeOutput.copy();
            Map<String, BlockDefinition> map = Maps.newHashMap();
            ObjectIterator var6 = this.textureKeys.char2ObjectEntrySet().iterator();
            while (var6.hasNext()) {
                Entry<String[]> e = (Entry<String[]>) var6.next();
                ItemStack item = this.item(e.getCharKey(), inv, pos);
                BlockDefinition def = BlockDefinition.fromItem(item, null);
                for (String k : (String[]) e.getValue()) {
                    map.put(k, def);
                }
            }
            RetextureBlockEntity.writeTextures(map, stack.getOrCreateTagElement("BlockEntityTag"));
            return stack;
        }
    }

    @Override
    public RecipeSerializer<?> getSerializer() {
        return DataModule.RETEXTURE.get();
    }

    public static class Serializer extends DynamicShapedRecipe.Serializer<RetextureRecipe> {

        public RetextureRecipe fromJson(ResourceLocation pRecipeId, JsonObject pSerializedRecipe) {
            CraftingBookCategory category = (CraftingBookCategory) CraftingBookCategory.CODEC.byName(GsonHelper.getAsString(pSerializedRecipe, "category", null), CraftingBookCategory.MISC);
            RetextureRecipe recipe = new RetextureRecipe(pRecipeId, category);
            fromJson(recipe, pSerializedRecipe);
            JsonObject o = pSerializedRecipe.getAsJsonObject("texture");
            recipe.textureKeys = new Char2ObjectArrayMap(o.size());
            for (java.util.Map.Entry<String, JsonElement> e : o.entrySet()) {
                JsonArray jsonArray = ((JsonElement) e.getValue()).getAsJsonArray();
                String[] keys = new String[jsonArray.size()];
                for (int i = 0; i < keys.length; i++) {
                    keys[i] = jsonArray.get(i).getAsString();
                }
                recipe.textureKeys.put(((String) e.getKey()).charAt(0), keys);
            }
            return recipe;
        }

        public RetextureRecipe fromNetwork(ResourceLocation pRecipeId, FriendlyByteBuf pBuffer) {
            RetextureRecipe recipe = new RetextureRecipe(pRecipeId, pBuffer.readEnum(CraftingBookCategory.class));
            fromNetwork(recipe, pBuffer);
            int size = pBuffer.readVarInt();
            recipe.textureKeys = new Char2ObjectArrayMap(size);
            for (int i = 0; i < size; i++) {
                char ch = pBuffer.readChar();
                int size2 = pBuffer.readVarInt();
                String[] arr = new String[size2];
                for (int j = 0; j < size2; j++) {
                    arr[j] = pBuffer.readUtf(16);
                }
                recipe.textureKeys.put(ch, arr);
            }
            return recipe;
        }

        public void toNetwork(FriendlyByteBuf buffer, RetextureRecipe recipe) {
            buffer.writeEnum(recipe.m_245232_());
            super.toNetwork(buffer, recipe);
            buffer.writeVarInt(recipe.textureKeys.size());
            ObjectIterator var3 = recipe.textureKeys.char2ObjectEntrySet().iterator();
            while (var3.hasNext()) {
                Entry<String[]> e = (Entry<String[]>) var3.next();
                buffer.writeChar(e.getCharKey());
                buffer.writeVarInt(((String[]) e.getValue()).length);
                for (String s : (String[]) e.getValue()) {
                    buffer.writeUtf(s, 16);
                }
            }
        }
    }
}