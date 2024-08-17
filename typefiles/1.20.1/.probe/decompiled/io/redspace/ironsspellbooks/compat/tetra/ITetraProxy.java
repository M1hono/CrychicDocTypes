package io.redspace.ironsspellbooks.compat.tetra;

import net.minecraft.world.item.ItemStack;
import net.minecraftforge.event.entity.living.LivingAttackEvent;

public interface ITetraProxy {

    void initClient();

    boolean canImbue(ItemStack var1);

    void handleLivingAttackEvent(LivingAttackEvent var1);
}