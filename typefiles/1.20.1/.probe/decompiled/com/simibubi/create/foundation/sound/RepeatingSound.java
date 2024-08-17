package com.simibubi.create.foundation.sound;

import com.simibubi.create.foundation.utility.AnimationTickHolder;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.phys.Vec3;

public class RepeatingSound {

    private SoundEvent event;

    private float sharedPitch;

    private int repeatDelay;

    private SoundScape scape;

    private float relativeVolume;

    public RepeatingSound(SoundEvent event, SoundScape scape, float sharedPitch, float relativeVolume, int repeatDelay) {
        this.event = event;
        this.scape = scape;
        this.sharedPitch = sharedPitch;
        this.relativeVolume = relativeVolume;
        this.repeatDelay = Math.max(1, repeatDelay);
    }

    public void tick() {
        if (AnimationTickHolder.getTicks() % this.repeatDelay == 0) {
            ClientLevel world = Minecraft.getInstance().level;
            Vec3 meanPos = this.scape.getMeanPos();
            world.playLocalSound(meanPos.x, meanPos.y, meanPos.z, this.event, SoundSource.AMBIENT, this.scape.getVolume() * this.relativeVolume, this.sharedPitch, true);
        }
    }
}