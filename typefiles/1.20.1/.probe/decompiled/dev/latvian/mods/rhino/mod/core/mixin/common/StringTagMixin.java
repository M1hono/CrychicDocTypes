package dev.latvian.mods.rhino.mod.core.mixin.common;

import dev.latvian.mods.rhino.util.SpecialEquality;
import net.minecraft.nbt.StringTag;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;

@Mixin({ StringTag.class })
public abstract class StringTagMixin implements SpecialEquality {

    @Shadow
    public abstract String getAsString();

    @Override
    public boolean specialEquals(Object o, boolean shallow) {
        return o instanceof CharSequence s ? s.equals(this.getAsString()) : this.equals(o);
    }
}