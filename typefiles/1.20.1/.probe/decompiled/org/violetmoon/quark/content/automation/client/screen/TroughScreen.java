package org.violetmoon.quark.content.automation.client.screen;

import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.inventory.DispenserScreen;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.inventory.DispenserMenu;
import org.violetmoon.quark.base.Quark;

public class TroughScreen extends DispenserScreen {

    private static final ResourceLocation CONTAINER_LOCATION = Quark.asResource("textures/gui/container/feeding_trough.png");

    public TroughScreen(DispenserMenu pMenu, Inventory pPlayerInventory, Component pTitle) {
        super(pMenu, pPlayerInventory, pTitle);
    }

    @Override
    protected void renderBg(GuiGraphics pGuiGraphics, float pPartialTick, int pMouseX, int pMouseY) {
        int i = (this.f_96543_ - this.f_97726_) / 2;
        int j = (this.f_96544_ - this.f_97727_) / 2;
        pGuiGraphics.blit(CONTAINER_LOCATION, i, j, 0, 0, this.f_97726_, this.f_97727_);
    }
}