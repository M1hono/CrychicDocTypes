package com.github.alexmodguy.alexscaves.client.sound;

import com.github.alexmodguy.alexscaves.server.item.ACItemRegistry;
import com.github.alexmodguy.alexscaves.server.item.GalenaGauntletItem;
import com.github.alexmodguy.alexscaves.server.misc.ACSoundRegistry;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;

public class GalenaGauntletSound extends ItemTickableSound {

    public GalenaGauntletSound(LivingEntity user) {
        super(user, ACSoundRegistry.GALENA_GAUNTLET_USE_LOOP.get());
    }

    @Override
    public void tickVolume(ItemStack itemStack) {
        float useAmount = GalenaGauntletItem.getLerpedUseTime(itemStack, 1.0F) / 5.0F;
        this.f_119573_ = useAmount;
        this.f_119574_ = 0.2F + 0.8F * useAmount;
    }

    @Override
    public boolean isValidItem(ItemStack itemStack) {
        return itemStack.is(ACItemRegistry.GALENA_GAUNTLET.get());
    }
}