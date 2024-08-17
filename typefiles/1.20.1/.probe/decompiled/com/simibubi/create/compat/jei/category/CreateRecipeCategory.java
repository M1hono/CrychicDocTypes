package com.simibubi.create.compat.jei.category;

import com.simibubi.create.AllFluids;
import com.simibubi.create.content.fluids.potion.PotionFluidHandler;
import com.simibubi.create.content.processing.recipe.ProcessingOutput;
import com.simibubi.create.foundation.gui.AllGuiTextures;
import com.simibubi.create.foundation.utility.Components;
import com.simibubi.create.foundation.utility.Lang;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import javax.annotation.ParametersAreNonnullByDefault;
import mezz.jei.api.forge.ForgeTypes;
import mezz.jei.api.gui.drawable.IDrawable;
import mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback;
import mezz.jei.api.recipe.RecipeType;
import mezz.jei.api.recipe.category.IRecipeCategory;
import mezz.jei.api.registration.IRecipeCatalystRegistration;
import mezz.jei.api.registration.IRecipeRegistration;
import net.minecraft.ChatFormatting;
import net.minecraft.MethodsReturnNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.level.material.Fluid;
import net.minecraftforge.fluids.FluidStack;
import org.jetbrains.annotations.NotNull;

@ParametersAreNonnullByDefault
@MethodsReturnNonnullByDefault
public abstract class CreateRecipeCategory<T extends Recipe<?>> implements IRecipeCategory<T> {

    private static final IDrawable BASIC_SLOT = asDrawable(AllGuiTextures.JEI_SLOT);

    private static final IDrawable CHANCE_SLOT = asDrawable(AllGuiTextures.JEI_CHANCE_SLOT);

    protected final RecipeType<T> type;

    protected final Component title;

    protected final IDrawable background;

    protected final IDrawable icon;

    private final Supplier<List<T>> recipes;

    private final List<Supplier<? extends ItemStack>> catalysts;

    public CreateRecipeCategory(CreateRecipeCategory.Info<T> info) {
        this.type = info.recipeType();
        this.title = info.title();
        this.background = info.background();
        this.icon = info.icon();
        this.recipes = info.recipes();
        this.catalysts = info.catalysts();
    }

    @NotNull
    @Override
    public RecipeType<T> getRecipeType() {
        return this.type;
    }

    @Override
    public Component getTitle() {
        return this.title;
    }

    @Override
    public IDrawable getBackground() {
        return this.background;
    }

    @Override
    public IDrawable getIcon() {
        return this.icon;
    }

    public void registerRecipes(IRecipeRegistration registration) {
        registration.addRecipes(this.type, (List<T>) this.recipes.get());
    }

    public void registerCatalysts(IRecipeCatalystRegistration registration) {
        this.catalysts.forEach(s -> registration.addRecipeCatalyst((ItemStack) s.get(), this.type));
    }

    public static IDrawable getRenderedSlot() {
        return BASIC_SLOT;
    }

    public static IDrawable getRenderedSlot(ProcessingOutput output) {
        return getRenderedSlot(output.getChance());
    }

    public static IDrawable getRenderedSlot(float chance) {
        return chance == 1.0F ? BASIC_SLOT : CHANCE_SLOT;
    }

    public static ItemStack getResultItem(Recipe<?> recipe) {
        ClientLevel level = Minecraft.getInstance().level;
        return level == null ? ItemStack.EMPTY : recipe.getResultItem(level.m_9598_());
    }

    public static IRecipeSlotTooltipCallback addStochasticTooltip(ProcessingOutput output) {
        return (view, tooltip) -> {
            float chance = output.getChance();
            if (chance != 1.0F) {
                tooltip.add(1, Lang.translateDirect("recipe.processing.chance", (double) chance < 0.01 ? "<1" : (int) (chance * 100.0F)).withStyle(ChatFormatting.GOLD));
            }
        };
    }

    public static List<FluidStack> withImprovedVisibility(List<FluidStack> stacks) {
        return (List<FluidStack>) stacks.stream().map(CreateRecipeCategory::withImprovedVisibility).collect(Collectors.toList());
    }

    public static FluidStack withImprovedVisibility(FluidStack stack) {
        FluidStack display = stack.copy();
        int displayedAmount = (int) ((float) stack.getAmount() * 0.75F) + 250;
        display.setAmount(displayedAmount);
        return display;
    }

    public static IRecipeSlotTooltipCallback addFluidTooltip() {
        return addFluidTooltip(-1);
    }

    public static IRecipeSlotTooltipCallback addFluidTooltip(int mbAmount) {
        return (view, tooltip) -> {
            Optional<FluidStack> displayed = view.getDisplayedIngredient(ForgeTypes.FLUID_STACK);
            if (!displayed.isEmpty()) {
                FluidStack fluidStack = (FluidStack) displayed.get();
                if (fluidStack.getFluid().isSame((Fluid) AllFluids.POTION.get())) {
                    Component name = fluidStack.getDisplayName();
                    if (tooltip.isEmpty()) {
                        tooltip.add(0, name);
                    } else {
                        tooltip.set(0, name);
                    }
                    ArrayList<Component> potionTooltip = new ArrayList();
                    PotionFluidHandler.addPotionTooltip(fluidStack, potionTooltip, 1.0F);
                    tooltip.addAll(1, potionTooltip.stream().toList());
                }
                int amount = mbAmount == -1 ? fluidStack.getAmount() : mbAmount;
                Component text = Components.literal(String.valueOf(amount)).append(Lang.translateDirect("generic.unit.millibuckets")).withStyle(ChatFormatting.GOLD);
                if (tooltip.isEmpty()) {
                    tooltip.add(0, text);
                } else {
                    List<Component> siblings = ((Component) tooltip.get(0)).getSiblings();
                    siblings.add(Components.literal(" "));
                    siblings.add(text);
                }
            }
        };
    }

    protected static IDrawable asDrawable(final AllGuiTextures texture) {
        return new IDrawable() {

            @Override
            public int getWidth() {
                return texture.width;
            }

            @Override
            public int getHeight() {
                return texture.height;
            }

            @Override
            public void draw(GuiGraphics graphics, int xOffset, int yOffset) {
                texture.render(graphics, xOffset, yOffset);
            }
        };
    }

    public interface Factory<T extends Recipe<?>> {

        CreateRecipeCategory<T> create(CreateRecipeCategory.Info<T> var1);
    }

    public static record Info<T extends Recipe<?>>(RecipeType<T> recipeType, Component title, IDrawable background, IDrawable icon, Supplier<List<T>> recipes, List<Supplier<? extends ItemStack>> catalysts) {
    }
}