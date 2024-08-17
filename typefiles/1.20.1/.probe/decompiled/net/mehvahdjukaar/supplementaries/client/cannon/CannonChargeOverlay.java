package net.mehvahdjukaar.supplementaries.client.cannon;

import com.mojang.blaze3d.platform.GlStateManager;
import com.mojang.blaze3d.systems.RenderSystem;
import net.mehvahdjukaar.supplementaries.common.block.tiles.CannonBlockTile;
import net.mehvahdjukaar.supplementaries.reg.ModTextures;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.Gui;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.renderer.GameRenderer;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;

public abstract class CannonChargeOverlay extends Gui {

    private final Minecraft minecraft;

    protected CannonChargeOverlay(Minecraft minecraft, ItemRenderer itemRenderer) {
        super(minecraft, itemRenderer);
        this.minecraft = minecraft;
    }

    public void renderBar(GuiGraphics graphics, float partialTicks, int screenWidth, int screenHeight) {
        if (!this.minecraft.options.hideGui && CannonController.isActive()) {
            this.setupOverlayRenderState();
            ResourceLocation texture = ModTextures.CANNON_ICONS_TEXTURE;
            CannonBlockTile cannon = CannonController.cannon;
            int left = screenWidth / 2 - 91;
            graphics.pose().pushPose();
            graphics.pose().translate(0.0F, 0.0F, -90.0F);
            graphics.blit(texture, left, screenHeight - 22, 0, 19, 182, 22);
            graphics.pose().popPose();
            Player player = Minecraft.getInstance().player;
            int k2 = screenHeight - 16 - 3;
            this.renderSlot(graphics, left + 1 + 50 + 2, k2, player, cannon.getFuel(), 1);
            this.renderSlot(graphics, left + 1 + 110 + 2, k2, player, cannon.getProjectile(), 1);
            graphics.pose().pushPose();
            graphics.pose().translate(0.0F, 0.0F, -90.0F);
            RenderSystem.blendFuncSeparate(GlStateManager.SourceFactor.ONE_MINUS_DST_COLOR, GlStateManager.DestFactor.ONE_MINUS_SRC_COLOR, GlStateManager.SourceFactor.ONE, GlStateManager.DestFactor.ZERO);
            int w = 9;
            graphics.blit(texture, (screenWidth - w) / 2, (screenHeight - w) / 2, 0, 10, w, w);
            RenderSystem.defaultBlendFunc();
            graphics.pose().popPose();
            int i = screenWidth / 2 - 91;
            float c = 1.0F - cannon.getCooldown();
            int k = (int) (c * 183.0F);
            int l = screenHeight - 32 + 3;
            graphics.blit(texture, i, l, 0, 0, 182, 5);
            float f = cannon.getFireTimer();
            if (f > 0.0F) {
                RenderSystem.setShaderColor(1.0F, 0.6F + 0.4F * f, f, 1.0F);
            }
            graphics.blit(texture, i, l, 0, 5, k, 5);
            int power = CannonController.cannon.getFirePower();
            int color = switch(power) {
                case 2 ->
                    16755200;
                case 3 ->
                    16746496;
                case 4 ->
                    16737792;
                default ->
                    16763904;
            };
            RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
            String s = String.valueOf(power);
            int i1 = (screenWidth - this.m_93082_().width(s)) / 2;
            int j1 = screenHeight - 31 - 4;
            graphics.drawString(this.m_93082_(), s, i1 + 1, j1, 0, false);
            graphics.drawString(this.m_93082_(), s, i1 - 1, j1, 0, false);
            graphics.drawString(this.m_93082_(), s, i1, j1 + 1, 0, false);
            graphics.drawString(this.m_93082_(), s, i1, j1 - 1, 0, false);
            graphics.drawString(this.m_93082_(), s, i1, j1, color, false);
        }
    }

    public void setupOverlayRenderState() {
        RenderSystem.enableBlend();
        RenderSystem.defaultBlendFunc();
        RenderSystem.disableDepthTest();
        RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
        RenderSystem.setShader(GameRenderer::m_172817_);
    }

    private void renderSlot(GuiGraphics guiGraphics, int x, int y, Player player, ItemStack itemStack, int seed) {
        if (!itemStack.isEmpty()) {
            guiGraphics.renderItem(player, itemStack, x, y, seed);
            guiGraphics.renderItemDecorations(this.minecraft.font, itemStack, x, y);
        }
    }
}