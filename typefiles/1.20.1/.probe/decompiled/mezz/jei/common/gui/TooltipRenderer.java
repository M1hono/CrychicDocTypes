package mezz.jei.common.gui;

import java.util.List;
import java.util.Optional;
import mezz.jei.api.ingredients.IIngredientRenderer;
import mezz.jei.api.ingredients.IIngredientType;
import mezz.jei.api.ingredients.ITypedIngredient;
import mezz.jei.api.runtime.IIngredientManager;
import mezz.jei.common.platform.IPlatformRenderHelper;
import mezz.jei.common.platform.Services;
import mezz.jei.common.util.ErrorUtil;
import net.minecraft.CrashReport;
import net.minecraft.CrashReportCategory;
import net.minecraft.ReportedException;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import net.minecraft.world.inventory.tooltip.TooltipComponent;
import net.minecraft.world.item.ItemStack;

public final class TooltipRenderer {

    private TooltipRenderer() {
    }

    public static void drawHoveringText(GuiGraphics guiGraphics, List<Component> textLines, int x, int y) {
        Minecraft minecraft = Minecraft.getInstance();
        Font font = minecraft.font;
        drawHoveringText(guiGraphics, textLines, x, y, ItemStack.EMPTY, font);
    }

    public static <T> void drawHoveringText(GuiGraphics guiGraphics, List<Component> textLines, int x, int y, ITypedIngredient<T> typedIngredient, IIngredientManager ingredientManager) {
        IIngredientType<T> ingredientType = typedIngredient.getType();
        IIngredientRenderer<T> ingredientRenderer = ingredientManager.getIngredientRenderer(ingredientType);
        drawHoveringText(guiGraphics, textLines, x, y, typedIngredient, ingredientRenderer, ingredientManager);
    }

    public static <T> void drawHoveringText(GuiGraphics guiGraphics, List<Component> textLines, int x, int y, ITypedIngredient<T> typedIngredient, IIngredientRenderer<T> ingredientRenderer, IIngredientManager ingredientManager) {
        Minecraft minecraft = Minecraft.getInstance();
        T ingredient = typedIngredient.getIngredient();
        Font font = ingredientRenderer.getFontRenderer(minecraft, ingredient);
        ItemStack itemStack = ingredient instanceof ItemStack i ? i : ItemStack.EMPTY;
        try {
            drawHoveringText(guiGraphics, textLines, x, y, itemStack, font);
        } catch (RuntimeException var18) {
            CrashReport crashReport = ErrorUtil.createIngredientCrashReport(var18, "Rendering ingredient tooltip", ingredientManager, typedIngredient);
            CrashReportCategory reportCategory = crashReport.addCategory("Tooltip");
            for (int ix = 0; ix < textLines.size(); ix++) {
                Component line = (Component) textLines.get(ix);
                reportCategory.setDetail("line #" + ix + " getString", line.getString());
                reportCategory.setDetail("line #" + ix + " getClass", line.getClass());
                try {
                    drawHoveringText(guiGraphics, List.of(line), x, y, itemStack, font);
                } catch (RuntimeException var17) {
                    reportCategory.setDetail("line #" + ix + " CRASHED", true);
                }
            }
            throw new ReportedException(crashReport);
        }
    }

    private static void drawHoveringText(GuiGraphics guiGraphics, List<Component> textLines, int x, int y, ItemStack itemStack, Font font) {
        Minecraft minecraft = Minecraft.getInstance();
        Screen screen = minecraft.screen;
        if (screen != null) {
            Optional<TooltipComponent> tooltipImage = itemStack.getTooltipImage();
            IPlatformRenderHelper renderHelper = Services.PLATFORM.getRenderHelper();
            renderHelper.renderTooltip(screen, guiGraphics, textLines, tooltipImage, x, y, font, itemStack);
        }
    }
}