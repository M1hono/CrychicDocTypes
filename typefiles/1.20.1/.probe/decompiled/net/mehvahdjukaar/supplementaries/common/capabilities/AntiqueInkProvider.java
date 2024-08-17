package net.mehvahdjukaar.supplementaries.common.capabilities;

import net.mehvahdjukaar.supplementaries.api.IAntiqueTextProvider;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ICapabilitySerializable;
import net.minecraftforge.common.util.LazyOptional;
import org.jetbrains.annotations.NotNull;

public class AntiqueInkProvider implements IAntiqueTextProvider, ICapabilitySerializable<CompoundTag> {

    private boolean hasAntiqueInk = false;

    @NotNull
    @Override
    public <T> LazyOptional<T> getCapability(@NotNull Capability<T> capability, Direction facing) {
        return capability == CapabilityHandler.ANTIQUE_TEXT_CAP ? LazyOptional.<AntiqueInkProvider>of(() -> this).cast() : LazyOptional.empty();
    }

    public CompoundTag serializeNBT() {
        CompoundTag tag = new CompoundTag();
        tag.putBoolean("ink", this.hasAntiqueInk);
        return tag;
    }

    public void deserializeNBT(CompoundTag tag) {
        this.hasAntiqueInk = tag.getBoolean("ink");
    }

    @Override
    public boolean hasAntiqueInk() {
        return this.hasAntiqueInk;
    }

    @Override
    public void setAntiqueInk(boolean hasInk) {
        this.hasAntiqueInk = hasInk;
    }
}