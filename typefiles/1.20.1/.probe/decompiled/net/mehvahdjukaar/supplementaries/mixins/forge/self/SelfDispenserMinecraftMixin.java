package net.mehvahdjukaar.supplementaries.mixins.forge.self;

import javax.annotation.Nullable;
import net.mehvahdjukaar.supplementaries.common.entities.dispenser_minecart.DispenserMinecartEntity;
import net.minecraft.core.Direction;
import net.minecraft.world.Container;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.vehicle.Minecart;
import net.minecraft.world.level.Level;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.common.util.LazyOptional;
import net.minecraftforge.items.wrapper.InvWrapper;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;

@Mixin({ DispenserMinecartEntity.class })
public abstract class SelfDispenserMinecraftMixin extends Minecart implements Container {

    @Unique
    private LazyOptional<?> itemHandler = LazyOptional.of(() -> new InvWrapper(this));

    protected SelfDispenserMinecraftMixin(EntityType<?> arg, Level arg2) {
        super(arg, arg2);
    }

    public <T> LazyOptional<T> getCapability(Capability<T> capability, @Nullable Direction facing) {
        return this.m_6084_() && capability == ForgeCapabilities.ITEM_HANDLER ? this.itemHandler.cast() : super.getCapability(capability, facing);
    }

    public void invalidateCaps() {
        super.invalidateCaps();
        this.itemHandler.invalidate();
    }

    public void reviveCaps() {
        super.reviveCaps();
        this.itemHandler = LazyOptional.of(() -> new InvWrapper(this));
    }
}