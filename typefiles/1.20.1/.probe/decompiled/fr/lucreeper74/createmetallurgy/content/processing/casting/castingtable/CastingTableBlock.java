package fr.lucreeper74.createmetallurgy.content.processing.casting.castingtable;

import com.simibubi.create.AllShapes;
import com.simibubi.create.Create;
import com.simibubi.create.content.equipment.wrench.IWrenchable;
import com.simibubi.create.foundation.block.IBE;
import fr.lucreeper74.createmetallurgy.registries.CMBlockEntityTypes;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Mirror;
import net.minecraft.world.level.block.Rotation;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.DirectionProperty;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.VoxelShape;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.fluids.FluidStack;
import net.minecraftforge.fluids.capability.IFluidHandler;
import net.minecraftforge.items.IItemHandlerModifiable;
import net.minecraftforge.items.ItemStackHandler;
import org.jetbrains.annotations.Nullable;

public class CastingTableBlock extends Block implements IBE<CastingTableBlockEntity>, IWrenchable {

    public static final DirectionProperty FACING = BlockStateProperties.HORIZONTAL_FACING;

    public CastingTableBlock(BlockBehaviour.Properties pProperties) {
        super(pProperties);
    }

    @Nullable
    @Override
    public BlockState getStateForPlacement(BlockPlaceContext pContext) {
        return (BlockState) this.m_49966_().m_61124_(FACING, pContext.m_8125_().getOpposite());
    }

    @Override
    public InteractionResult use(BlockState state, Level worldIn, BlockPos pos, Player player, InteractionHand handIn, BlockHitResult ray) {
        ItemStack heldItem = player.m_21120_(handIn);
        if (ray.getDirection() != Direction.UP) {
            return InteractionResult.PASS;
        } else {
            return worldIn.isClientSide ? InteractionResult.SUCCESS : this.onBlockEntityUse(worldIn, pos, be -> {
                if (!heldItem.isEmpty()) {
                    if (heldItem.getItem().equals(Items.SPONGE) && !((FluidStack) be.getCapability(ForgeCapabilities.FLUID_HANDLER).map(iFluidHandler -> iFluidHandler.drain(Integer.MAX_VALUE, IFluidHandler.FluidAction.EXECUTE)).orElse(FluidStack.EMPTY)).isEmpty()) {
                        return InteractionResult.SUCCESS;
                    }
                    if (be.moldInv.m_7983_()) {
                        be.moldInv.insertItem(0, heldItem, false);
                        player.m_21008_(handIn, heldItem.split(heldItem.getCount() - 1));
                        worldIn.playSound(null, pos, SoundEvents.ITEM_FRAME_ADD_ITEM, SoundSource.PLAYERS, 1.0F, 1.0F + Create.RANDOM.nextFloat());
                        return InteractionResult.SUCCESS;
                    }
                }
                IItemHandlerModifiable inv = be.itemCapability.orElse(new ItemStackHandler());
                for (int slot = 0; slot < inv.getSlots(); slot++) {
                    ItemStack stackInSlot = inv.getStackInSlot(slot);
                    if (!stackInSlot.isEmpty()) {
                        player.getInventory().placeItemBackInInventory(stackInSlot);
                        inv.setStackInSlot(slot, ItemStack.EMPTY);
                        worldIn.playSound(null, pos, SoundEvents.ITEM_PICKUP, SoundSource.PLAYERS, 0.2F, 1.0F + Create.RANDOM.nextFloat());
                        return InteractionResult.SUCCESS;
                    }
                }
                return InteractionResult.FAIL;
            });
        }
    }

    @Override
    public BlockState rotate(BlockState pState, Rotation pRotation) {
        return (BlockState) pState.m_61124_(FACING, pRotation.rotate((Direction) pState.m_61143_(FACING)));
    }

    @Override
    public BlockState mirror(BlockState pState, Mirror pMirror) {
        return pState.m_60717_(pMirror.getRotation((Direction) pState.m_61143_(FACING)));
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> pBuilder) {
        pBuilder.add(FACING);
    }

    @Override
    public VoxelShape getShape(BlockState state, BlockGetter worldIn, BlockPos pos, CollisionContext context) {
        return AllShapes.CASING_14PX.get(Direction.UP);
    }

    @Override
    public void onRemove(BlockState state, Level worldIn, BlockPos pos, BlockState newState, boolean isMoving) {
        IBE.onRemove(state, worldIn, pos, newState);
    }

    @Override
    public Class<CastingTableBlockEntity> getBlockEntityClass() {
        return CastingTableBlockEntity.class;
    }

    @Override
    public BlockEntityType<? extends CastingTableBlockEntity> getBlockEntityType() {
        return (BlockEntityType<? extends CastingTableBlockEntity>) CMBlockEntityTypes.CASTING_TABLE.get();
    }
}