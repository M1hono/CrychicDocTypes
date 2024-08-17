package io.github.lightman314.lightmanscurrency.api.taxes.reference;

import javax.annotation.Nonnull;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;

public abstract class TaxReferenceType {

    public final ResourceLocation typeID;

    protected TaxReferenceType(@Nonnull ResourceLocation typeID) {
        this.typeID = typeID;
    }

    public abstract TaxableReference load(CompoundTag var1);
}