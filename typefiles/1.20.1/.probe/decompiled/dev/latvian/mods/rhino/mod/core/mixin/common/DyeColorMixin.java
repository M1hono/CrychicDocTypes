package dev.latvian.mods.rhino.mod.core.mixin.common;

import dev.latvian.mods.rhino.mod.util.color.Color;
import net.minecraft.world.item.DyeColor;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;

@Mixin({ DyeColor.class })
public abstract class DyeColorMixin implements Color {

    @Shadow
    @Final
    private int textColor;

    @Shadow
    @Final
    private int fireworkColor;

    @Override
    public int getArgbJS() {
        return 0xFF000000 | this.textColor;
    }

    @Override
    public int getRgbJS() {
        return this.textColor;
    }

    @Override
    public int getFireworkColorJS() {
        return this.fireworkColor;
    }
}