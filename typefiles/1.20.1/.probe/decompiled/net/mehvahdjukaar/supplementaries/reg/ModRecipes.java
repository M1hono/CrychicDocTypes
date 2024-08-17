package net.mehvahdjukaar.supplementaries.reg;

import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.platform.RegHelper;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.common.items.crafting.BlackboardDuplicateRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.FlagFromBannerRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.ItemLoreRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.PresentDyeRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.RepairBubbleBlowerRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.RopeArrowAddRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.RopeArrowCreateRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.SoapClearRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.TatteredBookRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.TippedBambooSpikesRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.TrappedPresentRecipe;
import net.mehvahdjukaar.supplementaries.common.items.crafting.WeatheredMapRecipe;
import net.minecraft.world.item.crafting.CraftingRecipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer;

public class ModRecipes {

    public static final Supplier<RecipeSerializer<BlackboardDuplicateRecipe>> BLACKBOARD_DUPLICATE = reg("blackboard_duplicate", BlackboardDuplicateRecipe::new);

    public static final Supplier<RecipeSerializer<TippedBambooSpikesRecipe>> BAMBOO_SPIKES_TIPPED = reg("bamboo_spikes_tipped", TippedBambooSpikesRecipe::new);

    public static final Supplier<RecipeSerializer<RopeArrowCreateRecipe>> ROPE_ARROW_CREATE = reg("rope_arrow_create", RopeArrowCreateRecipe::new);

    public static final Supplier<RecipeSerializer<RopeArrowAddRecipe>> ROPE_ARROW_ADD = reg("rope_arrow_add", RopeArrowAddRecipe::new);

    public static final Supplier<RecipeSerializer<RepairBubbleBlowerRecipe>> BUBBLE_BLOWER_REPAIR = reg("bubble_blower_charge", RepairBubbleBlowerRecipe::new);

    public static final Supplier<RecipeSerializer<FlagFromBannerRecipe>> FLAG_FROM_BANNER = reg("flag_from_banner", FlagFromBannerRecipe::new);

    public static final Supplier<RecipeSerializer<WeatheredMapRecipe>> ANTIQUE_MAP = reg("weathered_map", WeatheredMapRecipe::new);

    public static final Supplier<RecipeSerializer<TatteredBookRecipe>> ANTIQUE_BOOK = reg("antique_book", TatteredBookRecipe::new);

    public static final Supplier<RecipeSerializer<SoapClearRecipe>> SOAP_CLEARING = reg("soap_clearing", SoapClearRecipe::new);

    public static final Supplier<RecipeSerializer<PresentDyeRecipe>> PRESENT_DYE = reg("present_dye", PresentDyeRecipe::new);

    public static final Supplier<RecipeSerializer<TrappedPresentRecipe>> TRAPPED_PRESENT = reg("trapped_present", TrappedPresentRecipe::new);

    public static final Supplier<RecipeSerializer<ItemLoreRecipe>> ITEM_LORE = reg("item_lore", ItemLoreRecipe::new);

    public static void init() {
    }

    private static <T extends CraftingRecipe> Supplier<RecipeSerializer<T>> reg(String name, SimpleCraftingRecipeSerializer.Factory<T> factory) {
        return RegHelper.registerSpecialRecipe(Supplementaries.res(name), factory);
    }
}