package org.violetmoon.quark.content.client.module;

import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.PoseStack;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Stack;
import java.util.function.BooleanSupplier;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.inventory.AbstractContainerScreen;
import net.minecraft.client.gui.screens.inventory.CraftingScreen;
import net.minecraft.client.gui.screens.recipebook.GhostRecipe;
import net.minecraft.client.gui.screens.recipebook.RecipeBookComponent;
import net.minecraft.client.gui.screens.recipebook.RecipeBookPage;
import net.minecraft.client.gui.screens.recipebook.RecipeCollection;
import net.minecraft.client.renderer.GameRenderer;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.core.RegistryAccess;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.Recipe;
import org.apache.commons.lang3.tuple.Pair;
import org.violetmoon.quark.base.QuarkClient;
import org.violetmoon.quark.base.client.handler.ClientUtil;
import org.violetmoon.zeta.client.event.play.ZClientTick;
import org.violetmoon.zeta.client.event.play.ZRenderContainerScreen;
import org.violetmoon.zeta.client.event.play.ZScreen;
import org.violetmoon.zeta.event.bus.PlayEvent;
import org.violetmoon.zeta.event.bus.ZPhase;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;

@ZetaLoadModule(category = "client")
public class MicrocraftingHelperModule extends ZetaModule {

    @ZetaLoadModule(clientReplacement = true)
    public static class Client extends MicrocraftingHelperModule {

        private static Screen currentScreen;

        private static Recipe<?> currentRecipe;

        private static final Stack<MicrocraftingHelperModule.Client.StackedRecipe> recipes = new Stack();

        private static int compoundCount = 1;

        @PlayEvent
        public void onClick(ZScreen.MouseButtonPressed.Pre event) {
            Minecraft mc = Minecraft.getInstance();
            Screen screen = mc.screen;
            RegistryAccess registryAccess = QuarkClient.ZETA_CLIENT.hackilyGetCurrentClientLevelRegistryAccess();
            if (screen instanceof CraftingScreen cscreen && event.getButton() == 1) {
                RecipeBookComponent recipeBook = cscreen.getRecipeBookComponent();
                Pair<GhostRecipe, GhostRecipe.GhostIngredient> pair = this.getHoveredGhost(cscreen, recipeBook);
                if (pair != null) {
                    GhostRecipe ghost = (GhostRecipe) pair.getLeft();
                    GhostRecipe.GhostIngredient ghostIngr = (GhostRecipe.GhostIngredient) pair.getRight();
                    Ingredient ingr = ghostIngr.ingredient;
                    Recipe<?> recipeToSet = this.getRecipeToSet(recipeBook, ingr, true);
                    if (recipeToSet == null) {
                        recipeToSet = this.getRecipeToSet(recipeBook, ingr, false);
                    }
                    if (recipeToSet != null) {
                        int ourCount = 0;
                        ItemStack testStack = recipeToSet.getResultItem(registryAccess);
                        for (int j = 1; j < ghost.size(); j++) {
                            GhostRecipe.GhostIngredient testGhostIngr = ghost.get(j);
                            Ingredient testIngr = testGhostIngr.ingredient;
                            if (testIngr.test(testStack)) {
                                ourCount++;
                            }
                        }
                        if (ourCount > 0) {
                            int prevCount = compoundCount;
                            int reqCount = ourCount * prevCount;
                            int mult = (int) Math.ceil((double) ourCount / (double) testStack.getCount());
                            compoundCount *= mult;
                            Recipe<?> ghostRecipe = ghost.getRecipe();
                            MicrocraftingHelperModule.Client.StackedRecipe stackedRecipe = new MicrocraftingHelperModule.Client.StackedRecipe(ghostRecipe, testStack, compoundCount, this.getClearCondition(ingr, reqCount));
                            boolean stackIt = true;
                            if (recipes.isEmpty()) {
                                ItemStack rootDisplayStack = ghostRecipe.getResultItem(registryAccess);
                                MicrocraftingHelperModule.Client.StackedRecipe rootRecipe = new MicrocraftingHelperModule.Client.StackedRecipe(null, rootDisplayStack, rootDisplayStack.getCount(), () -> recipes.size() == 1);
                                recipes.add(rootRecipe);
                            } else {
                                for (int i = 0; i < recipes.size(); i++) {
                                    MicrocraftingHelperModule.Client.StackedRecipe currRecipe = (MicrocraftingHelperModule.Client.StackedRecipe) recipes.get(recipes.size() - i - 1);
                                    if (currRecipe.recipe == recipeToSet) {
                                        for (int jx = 0; jx <= i; jx++) {
                                            recipes.pop();
                                        }
                                        stackIt = false;
                                        compoundCount = currRecipe.count;
                                        break;
                                    }
                                }
                            }
                            if (stackIt) {
                                recipes.add(stackedRecipe);
                            }
                        }
                        ghost.clear();
                        mc.gameMode.handlePlaceRecipe(mc.player.f_36096_.containerId, recipeToSet, true);
                        currentRecipe = recipeToSet;
                    }
                    event.setCanceled(true);
                }
            }
        }

        @PlayEvent
        public void onDrawGui(ZRenderContainerScreen.Background event) {
            Minecraft mc = Minecraft.getInstance();
            if (mc.screen instanceof CraftingScreen cscreen) {
                GuiGraphics guiGraphics = event.getGuiGraphics();
                PoseStack mstack = guiGraphics.pose();
                int left = cscreen.getGuiLeft() + 95;
                int top = cscreen.getGuiTop() + 6;
                if (!recipes.isEmpty()) {
                    RenderSystem.setShader(GameRenderer::m_172817_);
                    RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
                    mstack.pushPose();
                    guiGraphics.blit(ClientUtil.GENERAL_ICONS, left, top, 0, 0.0F, 108.0F, 80, 20, 256, 256);
                    mstack.popPose();
                    int start = Math.max(0, recipes.size() - 3);
                    for (int i = start; i < recipes.size(); i++) {
                        int index = i - start;
                        MicrocraftingHelperModule.Client.StackedRecipe recipe = (MicrocraftingHelperModule.Client.StackedRecipe) recipes.get(i);
                        int x = left + index * 24 + 2;
                        int y = top + 2;
                        ItemStack drawStack = recipe.displayItem;
                        guiGraphics.renderItem(drawStack, x, y);
                        guiGraphics.renderItemDecorations(mc.font, drawStack, x, y);
                        if (index > 0) {
                            guiGraphics.drawString(mc.font, "<", x - 6, y + 4, 4144959, false);
                        }
                    }
                }
                Pair<GhostRecipe, GhostRecipe.GhostIngredient> pair = this.getHoveredGhost(cscreen, cscreen.getRecipeBookComponent());
                if (pair != null) {
                    GhostRecipe.GhostIngredient ingr = (GhostRecipe.GhostIngredient) pair.getRight();
                    if (ingr != null) {
                        QuarkClient.ZETA_CLIENT.topLayerTooltipHandler.setTooltip(List.of(I18n.get("quark.misc.rightclick_to_craft")), event.getMouseX(), event.getMouseY() - 17);
                    }
                }
            }
        }

        @PlayEvent
        public void onTick(ZClientTick event) {
            if (event.getPhase() == ZPhase.START) {
                Minecraft mc = Minecraft.getInstance();
                Screen prevScreen = currentScreen;
                currentScreen = mc.screen;
                boolean clearCompound = true;
                if (prevScreen != currentScreen) {
                    recipes.clear();
                    currentRecipe = null;
                }
                if (!recipes.isEmpty()) {
                    if (currentScreen instanceof CraftingScreen crafting) {
                        RecipeBookComponent book = crafting.getRecipeBookComponent();
                        if (book != null) {
                            GhostRecipe ghost = book.ghostRecipe;
                            if (ghost == null || currentRecipe != null && ghost.getRecipe() != null && ghost.getRecipe() != currentRecipe) {
                                recipes.clear();
                                currentRecipe = null;
                            }
                        }
                    }
                    if (!recipes.isEmpty()) {
                        MicrocraftingHelperModule.Client.StackedRecipe top = (MicrocraftingHelperModule.Client.StackedRecipe) recipes.peek();
                        if (top.clearCondition.getAsBoolean()) {
                            if (top.recipe != null) {
                                mc.gameMode.handlePlaceRecipe(mc.player.f_36096_.containerId, top.recipe, true);
                                currentRecipe = top.recipe;
                                compoundCount = top.count;
                            }
                            recipes.pop();
                        }
                        clearCompound = false;
                    }
                }
                if (clearCompound) {
                    compoundCount = 1;
                }
            }
        }

        private Recipe<?> getRecipeToSet(RecipeBookComponent recipeBook, Ingredient ingr, boolean craftableOnly) {
            EditBox text = recipeBook.searchBox;
            RegistryAccess registryAccess = QuarkClient.ZETA_CLIENT.hackilyGetCurrentClientLevelRegistryAccess();
            for (ItemStack stack : ingr.getItems()) {
                String itemName = stack.getHoverName().copy().getString().toLowerCase(Locale.ROOT).trim();
                text.setValue(itemName);
                recipeBook.checkSearchStringUpdate();
                RecipeBookPage page = recipeBook.recipeBookPage;
                if (page != null) {
                    List<RecipeCollection> recipeLists = page.recipeCollections;
                    List<RecipeCollection> var18 = new ArrayList(recipeLists);
                    if (var18 != null && var18.size() > 0) {
                        var18.removeIf(rl -> {
                            List<Recipe<?>> listx = rl.getDisplayRecipes(craftableOnly);
                            return listx == null || listx.isEmpty();
                        });
                        if (var18.isEmpty()) {
                            return null;
                        }
                        Collections.sort(var18, (rl1, rl2) -> {
                            if (rl1 == rl2) {
                                return 0;
                            } else {
                                Recipe<?> r1 = (Recipe<?>) rl1.getDisplayRecipes(craftableOnly).get(0);
                                Recipe<?> r2 = (Recipe<?>) rl2.getDisplayRecipes(craftableOnly).get(0);
                                return this.compareRecipes(r1, r2);
                            }
                        });
                        for (RecipeCollection list : var18) {
                            List<Recipe<?>> recipeList = list.getDisplayRecipes(craftableOnly);
                            recipeList.sort(this::compareRecipes);
                            for (Recipe<?> recipe : recipeList) {
                                if (ingr.test(recipe.getResultItem(registryAccess))) {
                                    return recipe;
                                }
                            }
                        }
                    }
                }
            }
            return null;
        }

        private int compareRecipes(Recipe<?> r1, Recipe<?> r2) {
            if (r1 == r2) {
                return 0;
            } else {
                String id1 = r1.getId().toString();
                String id2 = r2.getId().toString();
                boolean id1Mc = id1.startsWith("minecraft");
                boolean id2Mc = id2.startsWith("minecraft");
                if (id1Mc != id2Mc) {
                    return id1Mc ? -1 : 1;
                } else {
                    return id1.compareTo(id2);
                }
            }
        }

        private BooleanSupplier getClearCondition(Ingredient ingr, int req) {
            Minecraft mc = Minecraft.getInstance();
            return () -> {
                int missing = req;
                for (ItemStack invStack : mc.player.m_150109_().items) {
                    if (ingr.test(invStack)) {
                        missing -= invStack.getCount();
                        if (missing <= 0) {
                            return true;
                        }
                    }
                }
                return false;
            };
        }

        private Pair<GhostRecipe, GhostRecipe.GhostIngredient> getHoveredGhost(AbstractContainerScreen<?> cscreen, RecipeBookComponent recipeBook) {
            Slot slot = cscreen.getSlotUnderMouse();
            if (recipeBook != null && slot != null) {
                GhostRecipe ghost = recipeBook.ghostRecipe;
                if (ghost != null && ghost.getRecipe() != null) {
                    for (int i = 1; i < ghost.size(); i++) {
                        GhostRecipe.GhostIngredient ghostIngr = ghost.get(i);
                        if (ghostIngr.getX() == slot.x && ghostIngr.getY() == slot.y) {
                            return Pair.of(ghost, ghostIngr);
                        }
                    }
                }
            }
            return null;
        }

        private static record StackedRecipe(Recipe<?> recipe, ItemStack displayItem, int count, BooleanSupplier clearCondition) {

            private StackedRecipe(Recipe<?> recipe, ItemStack displayItem, int count, BooleanSupplier clearCondition) {
                this.recipe = recipe;
                this.count = count;
                this.clearCondition = clearCondition;
                this.displayItem = displayItem.copy();
                this.displayItem.setCount(count);
            }
        }
    }
}