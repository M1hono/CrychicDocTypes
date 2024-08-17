package net.mehvahdjukaar.supplementaries.client.tooltip;

import com.mojang.blaze3d.systems.RenderSystem;
import net.mehvahdjukaar.supplementaries.client.BlackboardManager;
import net.mehvahdjukaar.supplementaries.configs.ClientConfigs;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent;
import net.minecraft.resources.ResourceLocation;

public class BlackboardTooltipComponent implements ClientTooltipComponent {

    private final int size = (Integer) ClientConfigs.Tweaks.TOOLTIP_IMAGE_SIZE.get();

    private final ResourceLocation texture;

    public BlackboardTooltipComponent(BlackboardManager.Key key) {
        this.texture = BlackboardManager.getInstance(key).getTextureLocation();
    }

    @Override
    public int getHeight() {
        return this.size + 2;
    }

    @Override
    public int getWidth(Font pFont) {
        return this.size;
    }

    @Override
    public void renderImage(Font pFont, int x, int y, GuiGraphics graphics) {
        graphics.pose().pushPose();
        RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
        graphics.blit(this.texture, x, y, 0, 0.0F, 0.0F, this.size, this.size, this.size, this.size);
        graphics.pose().popPose();
    }
}