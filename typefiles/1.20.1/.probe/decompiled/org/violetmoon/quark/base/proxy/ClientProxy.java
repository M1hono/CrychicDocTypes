package org.violetmoon.quark.base.proxy;

import java.time.LocalDateTime;
import java.time.Month;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.player.LocalPlayer;
import net.minecraft.core.RegistryAccess;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraftforge.client.ConfigScreenHandler;
import net.minecraftforge.fml.ModLoadingContext;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.quark.base.Quark;
import org.violetmoon.quark.base.QuarkClient;
import org.violetmoon.quark.base.client.config.QButtonHandler;
import org.violetmoon.quark.base.client.config.QuarkConfigHomeScreen;
import org.violetmoon.quark.base.client.handler.ClientUtil;
import org.violetmoon.quark.base.client.handler.InventoryButtonHandler;
import org.violetmoon.quark.base.client.handler.ModelHandler;
import org.violetmoon.quark.base.client.handler.QuarkProgrammerArtHandler;
import org.violetmoon.quark.base.handler.ContributorRewardHandler;
import org.violetmoon.quark.base.handler.WoodSetHandler;
import org.violetmoon.quark.mixin.mixins.client.accessor.AccessorMultiPlayerGameMode;

public class ClientProxy extends CommonProxy {

    public static boolean jingleBellsMotherfucker = false;

    @Override
    public void start() {
        LocalDateTime now = LocalDateTime.now();
        if (now.getMonth() == Month.DECEMBER && now.getDayOfMonth() >= 16 || now.getMonth() == Month.JANUARY && now.getDayOfMonth() <= 6) {
            jingleBellsMotherfucker = true;
        }
        QuarkClient.start();
        Quark.ZETA.loadBus.subscribe(ModelHandler.class).subscribe(ContributorRewardHandler.Client.class).subscribe(WoodSetHandler.Client.class).subscribe(QuarkProgrammerArtHandler.class).subscribe(ClientUtil.class);
        Quark.ZETA.playBus.subscribe(ContributorRewardHandler.Client.class).subscribe(ClientUtil.class).subscribe(InventoryButtonHandler.class).subscribe(QButtonHandler.class);
        super.start();
        ModLoadingContext.get().registerExtensionPoint(ConfigScreenHandler.ConfigScreenFactory.class, () -> new ConfigScreenHandler.ConfigScreenFactory((minecraft, screen) -> new QuarkConfigHomeScreen(screen)));
    }

    @Override
    public InteractionResult clientUseItem(Player player, Level level, InteractionHand hand, BlockHitResult hit) {
        if (player instanceof LocalPlayer lPlayer) {
            Minecraft mc = Minecraft.getInstance();
            if (mc.gameMode != null && mc.level != null) {
                if (!mc.level.m_6857_().isWithinBounds(hit.getBlockPos())) {
                    return InteractionResult.FAIL;
                }
                return ((AccessorMultiPlayerGameMode) mc.gameMode).quark$performUseItemOn(lPlayer, hand, hit);
            }
        }
        return InteractionResult.PASS;
    }

    @Override
    public boolean isClientPlayerHoldingShift() {
        return Screen.hasShiftDown();
    }

    @Override
    public float getVisualTime() {
        return QuarkClient.ticker.total;
    }

    @Nullable
    @Override
    public RegistryAccess hackilyGetCurrentClientLevelRegistryAccess() {
        return QuarkClient.ZETA_CLIENT.hackilyGetCurrentClientLevelRegistryAccess();
    }
}