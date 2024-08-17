package com.simibubi.create.content.processing.sequenced;

import com.simibubi.create.AllRecipeTypes;
import com.simibubi.create.Create;
import com.simibubi.create.content.processing.recipe.ProcessingOutput;
import com.simibubi.create.content.processing.recipe.ProcessingRecipe;
import com.simibubi.create.foundation.fluid.FluidIngredient;
import com.simibubi.create.foundation.utility.Components;
import com.simibubi.create.foundation.utility.Lang;
import com.simibubi.create.foundation.utility.Pair;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Stream;
import net.minecraft.ChatFormatting;
import net.minecraft.client.Minecraft;
import net.minecraft.core.RegistryAccess;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.Container;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.RecipeType;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.Level;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.event.entity.player.ItemTooltipEvent;
import net.minecraftforge.items.ItemHandlerHelper;
import net.minecraftforge.items.wrapper.RecipeWrapper;

public class SequencedAssemblyRecipe implements Recipe<RecipeWrapper> {

    protected ResourceLocation id;

    protected SequencedAssemblyRecipeSerializer serializer;

    protected Ingredient ingredient;

    protected List<SequencedRecipe<?>> sequence;

    protected int loops;

    protected ProcessingOutput transitionalItem;

    public final List<ProcessingOutput> resultPool;

    public SequencedAssemblyRecipe(ResourceLocation recipeId, SequencedAssemblyRecipeSerializer serializer) {
        this.id = recipeId;
        this.serializer = serializer;
        this.sequence = new ArrayList();
        this.resultPool = new ArrayList();
        this.loops = 5;
    }

    public static <C extends Container, R extends ProcessingRecipe<C>> Optional<R> getRecipe(Level world, C inv, RecipeType<R> type, Class<R> recipeClass) {
        return getRecipe(world, inv, type, recipeClass, r -> r.m_5818_(inv, world));
    }

    public static <C extends Container, R extends ProcessingRecipe<C>> Optional<R> getRecipe(Level world, C inv, RecipeType<R> type, Class<R> recipeClass, Predicate<? super R> recipeFilter) {
        return getRecipes(world, inv.getItem(0), type, recipeClass).filter(recipeFilter).findFirst();
    }

    public static <R extends ProcessingRecipe<?>> Optional<R> getRecipe(Level world, ItemStack item, RecipeType<R> type, Class<R> recipeClass) {
        for (SequencedAssemblyRecipe sequencedAssemblyRecipe : world.getRecipeManager().getAllRecipesFor(AllRecipeTypes.SEQUENCED_ASSEMBLY.getType())) {
            if (sequencedAssemblyRecipe.appliesTo(item)) {
                SequencedRecipe<?> nextRecipe = sequencedAssemblyRecipe.getNextRecipe(item);
                ProcessingRecipe<?> recipe = nextRecipe.getRecipe();
                if (recipe.getType() == type && recipeClass.isInstance(recipe)) {
                    recipe.enforceNextResult(() -> sequencedAssemblyRecipe.advance(item));
                    return Optional.of((ProcessingRecipe) recipeClass.cast(recipe));
                }
            }
        }
        return Optional.empty();
    }

    public static <R extends ProcessingRecipe<?>> Stream<R> getRecipes(Level world, ItemStack item, RecipeType<R> type, Class<R> recipeClass) {
        List<SequencedAssemblyRecipe> all = world.getRecipeManager().getAllRecipesFor(AllRecipeTypes.SEQUENCED_ASSEMBLY.getType());
        return all.stream().filter(it -> it.appliesTo(item)).map(it -> Pair.of(it, it.getNextRecipe(item).getRecipe())).filter(it -> ((ProcessingRecipe) it.getSecond()).getType() == type && recipeClass.isInstance(it.getSecond())).map(it -> {
            ((ProcessingRecipe) it.getSecond()).enforceNextResult(() -> ((SequencedAssemblyRecipe) it.getFirst()).advance(item));
            return (ProcessingRecipe) it.getSecond();
        }).map(recipeClass::cast);
    }

    private ItemStack advance(ItemStack input) {
        int step = this.getStep(input);
        if ((step + 1) / this.sequence.size() >= this.loops) {
            return this.rollResult();
        } else {
            ItemStack advancedItem = ItemHandlerHelper.copyStackWithSize(this.getTransitionalItem(), 1);
            CompoundTag itemTag = advancedItem.getOrCreateTag();
            CompoundTag tag = new CompoundTag();
            tag.putString("id", this.id.toString());
            tag.putInt("Step", step + 1);
            tag.putFloat("Progress", ((float) step + 1.0F) / (float) (this.sequence.size() * this.loops));
            itemTag.put("SequencedAssembly", tag);
            advancedItem.setTag(itemTag);
            return advancedItem;
        }
    }

    public int getLoops() {
        return this.loops;
    }

    public void addAdditionalIngredientsAndMachines(List<Ingredient> list) {
        this.sequence.forEach(sr -> sr.getAsAssemblyRecipe().addAssemblyIngredients(list));
        Set<ItemLike> machines = new HashSet();
        this.sequence.forEach(sr -> sr.getAsAssemblyRecipe().addRequiredMachines(machines));
        machines.stream().map(xva$0 -> Ingredient.of(xva$0)).forEach(list::add);
    }

    public void addAdditionalFluidIngredients(List<FluidIngredient> list) {
        this.sequence.forEach(sr -> sr.getAsAssemblyRecipe().addAssemblyFluidIngredients(list));
    }

    private ItemStack rollResult() {
        float totalWeight = 0.0F;
        for (ProcessingOutput entry : this.resultPool) {
            totalWeight += entry.getChance();
        }
        float number = Create.RANDOM.nextFloat() * totalWeight;
        for (ProcessingOutput entry : this.resultPool) {
            number -= entry.getChance();
            if (number < 0.0F) {
                return entry.getStack().copy();
            }
        }
        return ItemStack.EMPTY;
    }

    private boolean appliesTo(ItemStack input) {
        return this.ingredient.test(input) ? true : input.hasTag() && this.getTransitionalItem().getItem() == input.getItem() && input.getTag().contains("SequencedAssembly") && input.getTag().getCompound("SequencedAssembly").getString("id").equals(this.id.toString());
    }

    private SequencedRecipe<?> getNextRecipe(ItemStack input) {
        return (SequencedRecipe<?>) this.sequence.get(this.getStep(input) % this.sequence.size());
    }

    private int getStep(ItemStack input) {
        if (!input.hasTag()) {
            return 0;
        } else {
            CompoundTag tag = input.getTag();
            return !tag.contains("SequencedAssembly") ? 0 : tag.getCompound("SequencedAssembly").getInt("Step");
        }
    }

    public boolean matches(RecipeWrapper inv, Level p_77569_2_) {
        return false;
    }

    public ItemStack assemble(RecipeWrapper inv, RegistryAccess registryAccess) {
        return ItemStack.EMPTY;
    }

    @Override
    public boolean canCraftInDimensions(int p_194133_1_, int p_194133_2_) {
        return false;
    }

    @Override
    public ItemStack getResultItem(RegistryAccess registryAccess) {
        return ((ProcessingOutput) this.resultPool.get(0)).getStack();
    }

    public float getOutputChance() {
        float totalWeight = 0.0F;
        for (ProcessingOutput entry : this.resultPool) {
            totalWeight += entry.getChance();
        }
        return ((ProcessingOutput) this.resultPool.get(0)).getChance() / totalWeight;
    }

    @Override
    public ResourceLocation getId() {
        return this.id;
    }

    @Override
    public RecipeSerializer<?> getSerializer() {
        return this.serializer;
    }

    @Override
    public boolean isSpecial() {
        return true;
    }

    @Override
    public RecipeType<?> getType() {
        return AllRecipeTypes.SEQUENCED_ASSEMBLY.getType();
    }

    @OnlyIn(Dist.CLIENT)
    public static void addToTooltip(ItemTooltipEvent event) {
        ItemStack stack = event.getItemStack();
        if (stack.hasTag() && stack.getTag().contains("SequencedAssembly")) {
            CompoundTag compound = stack.getTag().getCompound("SequencedAssembly");
            ResourceLocation resourceLocation = new ResourceLocation(compound.getString("id"));
            Optional<? extends Recipe<?>> optionalRecipe = Minecraft.getInstance().level.getRecipeManager().byKey(resourceLocation);
            if (optionalRecipe.isPresent()) {
                Recipe<?> recipe = (Recipe<?>) optionalRecipe.get();
                if (recipe instanceof SequencedAssemblyRecipe sequencedAssemblyRecipe) {
                    int length = sequencedAssemblyRecipe.sequence.size();
                    int step = sequencedAssemblyRecipe.getStep(stack);
                    int total = length * sequencedAssemblyRecipe.loops;
                    List<Component> tooltip = event.getToolTip();
                    tooltip.add(Components.immutableEmpty());
                    tooltip.add(Lang.translateDirect("recipe.sequenced_assembly").withStyle(ChatFormatting.GRAY));
                    tooltip.add(Lang.translateDirect("recipe.assembly.progress", step, total).withStyle(ChatFormatting.DARK_GRAY));
                    int remaining = total - step;
                    for (int i = 0; i < length && i < remaining; i++) {
                        SequencedRecipe<?> sequencedRecipe = (SequencedRecipe<?>) sequencedAssemblyRecipe.sequence.get((i + step) % length);
                        Component textComponent = sequencedRecipe.getAsAssemblyRecipe().getDescriptionForAssembly();
                        if (i == 0) {
                            tooltip.add(Lang.translateDirect("recipe.assembly.next", textComponent).withStyle(ChatFormatting.AQUA));
                        } else {
                            tooltip.add(Components.literal("-> ").append(textComponent).withStyle(ChatFormatting.DARK_AQUA));
                        }
                    }
                }
            }
        }
    }

    public Ingredient getIngredient() {
        return this.ingredient;
    }

    public List<SequencedRecipe<?>> getSequence() {
        return this.sequence;
    }

    public ItemStack getTransitionalItem() {
        return this.transitionalItem.getStack();
    }
}