package net.mehvahdjukaar.amendments.integration;

import fuzs.thinair.api.v1.AirQualityHelper;
import fuzs.thinair.world.level.block.SafetyLanternBlock;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.Nullable;

public class ThinAirCompat {

    @Nullable
    public static BlockState maybeSetAirQuality(BlockState state, Vec3 pos, Level level) {
        return isAirLantern(state) ? (BlockState) state.m_61124_(SafetyLanternBlock.AIR_QUALITY, AirQualityHelper.INSTANCE.getAirQualityAtLocation(level, pos)) : null;
    }

    public static boolean isAirLantern(BlockState pState) {
        return pState.m_61138_(SafetyLanternBlock.AIR_QUALITY);
    }
}