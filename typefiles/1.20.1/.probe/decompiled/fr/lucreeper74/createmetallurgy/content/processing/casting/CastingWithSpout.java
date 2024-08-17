package fr.lucreeper74.createmetallurgy.content.processing.casting;

import com.simibubi.create.api.behaviour.BlockSpoutingBehaviour;
import com.simibubi.create.content.fluids.spout.SpoutBlockEntity;
import com.simibubi.create.foundation.fluid.FluidHelper;
import fr.lucreeper74.createmetallurgy.CreateMetallurgy;
import fr.lucreeper74.createmetallurgy.content.processing.casting.castingBasin.CastingBasinBlockEntity;
import fr.lucreeper74.createmetallurgy.content.processing.casting.castingtable.CastingTableBlockEntity;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.fluids.FluidStack;
import net.minecraftforge.fluids.capability.IFluidHandler;
import net.minecraftforge.items.IItemHandler;

public class CastingWithSpout extends BlockSpoutingBehaviour {

    @Override
    public int fillBlock(Level level, BlockPos pos, SpoutBlockEntity spout, FluidStack availableFluid, boolean simulate) {
        BlockEntity blockEntity = level.getBlockEntity(pos);
        if (blockEntity == null) {
            return 0;
        } else {
            IFluidHandler fluidHandler = (IFluidHandler) blockEntity.getCapability(ForgeCapabilities.FLUID_HANDLER, Direction.UP).orElse(null);
            if (fluidHandler == null) {
                return 0;
            } else if (fluidHandler.getTanks() != 1) {
                return 0;
            } else if (!(blockEntity instanceof CastingTableBlockEntity) && !(blockEntity instanceof CastingBasinBlockEntity)) {
                return 0;
            } else if (!fluidHandler.isFluidValid(0, availableFluid)) {
                return 0;
            } else {
                FluidStack containedFluid = fluidHandler.getFluidInTank(0);
                if (!containedFluid.isEmpty() && !containedFluid.isFluidEqual(availableFluid)) {
                    return 0;
                } else {
                    IItemHandler itemHandler = (IItemHandler) blockEntity.getCapability(ForgeCapabilities.ITEM_HANDLER, Direction.UP).orElse(null);
                    if (itemHandler == null) {
                        return 0;
                    } else {
                        ItemStack containedItem = itemHandler.getStackInSlot(0);
                        if (!containedItem.isEmpty()) {
                            return 0;
                        } else {
                            int amount = availableFluid.getAmount();
                            return amount < 1000 && fluidHandler.fill(FluidHelper.copyStackWithAmount(availableFluid, amount + 1), IFluidHandler.FluidAction.SIMULATE) > amount ? 0 : fluidHandler.fill(availableFluid, simulate ? IFluidHandler.FluidAction.SIMULATE : IFluidHandler.FluidAction.EXECUTE);
                        }
                    }
                }
            }
        }
    }

    public static void registerDefaults() {
        addCustomSpoutInteraction(CreateMetallurgy.genRL("spout_casting"), new CastingWithSpout());
    }
}