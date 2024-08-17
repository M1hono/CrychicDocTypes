package top.theillusivec4.curios.client.gui;

import com.mojang.blaze3d.systems.RenderSystem;
import javax.annotation.Nonnull;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.components.ImageButton;
import net.minecraft.resources.ResourceLocation;
import top.theillusivec4.curios.common.inventory.CurioSlot;

public class RenderButton extends ImageButton {

    private final ResourceLocation resourceLocation;

    private final int yTexStart;

    private final int xTexStart;

    private final CurioSlot slot;

    public RenderButton(CurioSlot slot, int xIn, int yIn, int widthIn, int heightIn, int xTexStartIn, int yTexStartIn, int yDiffTextIn, ResourceLocation resourceLocationIn, Button.OnPress onPressIn) {
        super(xIn, yIn, widthIn, heightIn, xTexStartIn, yTexStartIn, yDiffTextIn, resourceLocationIn, 256, 256, onPressIn);
        this.resourceLocation = resourceLocationIn;
        this.yTexStart = yTexStartIn;
        this.xTexStart = xTexStartIn;
        this.slot = slot;
    }

    @Override
    public void renderWidget(@Nonnull GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTicks) {
    }

    public void renderButtonOverlay(@Nonnull GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTicks) {
        RenderSystem.disableDepthTest();
        int j = this.xTexStart;
        if (!this.slot.getRenderStatus()) {
            j += 8;
        }
        guiGraphics.blit(this.resourceLocation, this.m_252754_(), this.m_252907_(), (float) j, (float) this.yTexStart, this.f_93618_, this.f_93619_, 256, 256);
        RenderSystem.enableDepthTest();
    }
}