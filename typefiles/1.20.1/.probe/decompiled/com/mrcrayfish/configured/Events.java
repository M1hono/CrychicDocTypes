package com.mrcrayfish.configured;

import com.mrcrayfish.configured.platform.Services;
import net.minecraft.server.level.ServerPlayer;

public class Events {

    public static void onPlayerLoggedIn(ServerPlayer player) {
        Services.PLATFORM.sendSessionData(player);
    }
}