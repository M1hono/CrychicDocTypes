package com.craisinlord.integrated_api.mixins.entities;

import net.minecraft.core.Direction;
import net.minecraft.world.entity.monster.Shulker;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Invoker;

@Mixin({ Shulker.class })
public interface ShulkerEntityInvoker {

    @Invoker("setAttachFace")
    void integratedapi_callSetAttachFace(Direction var1);
}