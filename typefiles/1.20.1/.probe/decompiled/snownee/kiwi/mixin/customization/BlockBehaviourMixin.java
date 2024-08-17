package snownee.kiwi.mixin.customization;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Mirror;
import net.minecraft.world.level.block.Rotation;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.world.level.material.Fluids;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;
import snownee.kiwi.customization.CustomizationHooks;
import snownee.kiwi.customization.block.KBlockSettings;
import snownee.kiwi.customization.shape.BlockShapeType;

@Mixin({ BlockBehaviour.class })
public class BlockBehaviourMixin {

    @Shadow
    @Final
    protected boolean hasCollision;

    @Shadow
    public BlockBehaviour.Properties properties;

    @Inject(method = { "getShape" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getShape(BlockState pState, BlockGetter pLevel, BlockPos pPos, CollisionContext pContext, CallbackInfoReturnable<VoxelShape> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.getShape(BlockShapeType.MAIN) != null) {
            try {
                cir.setReturnValue(settings.getShape(BlockShapeType.MAIN).getShape(pState, pContext));
            } catch (Exception var8) {
            }
        }
    }

    @Inject(method = { "getCollisionShape" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getCollisionShape(BlockState pState, BlockGetter pLevel, BlockPos pPos, CollisionContext pContext, CallbackInfoReturnable<VoxelShape> cir) {
        if (this.hasCollision) {
            KBlockSettings settings = KBlockSettings.of(this);
            if (settings != null && settings.getShape(BlockShapeType.COLLISION) != null) {
                try {
                    cir.setReturnValue(settings.getShape(BlockShapeType.COLLISION).getShape(pState, pContext));
                } catch (Exception var8) {
                }
            }
        }
    }

    @Inject(method = { "getInteractionShape" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getInteractionShape(BlockState pState, BlockGetter pLevel, BlockPos pPos, CallbackInfoReturnable<VoxelShape> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.getShape(BlockShapeType.INTERACTION) != null) {
            try {
                cir.setReturnValue(settings.getShape(BlockShapeType.INTERACTION).getShape(pState, CollisionContext.empty()));
            } catch (Exception var7) {
            }
        }
    }

    @Inject(method = { "getShadeBrightness" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getShadeBrightness(BlockState state, BlockGetter world, BlockPos pos, CallbackInfoReturnable<Float> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.glassType != null) {
            cir.setReturnValue(settings.glassType.shadeBrightness());
        }
    }

    @Inject(method = { "skipRendering" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$skipRendering(BlockState pState, BlockState pAdjacentState, Direction pDirection, CallbackInfoReturnable<Boolean> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.glassType != null && CustomizationHooks.skipGlassRendering(pState, pAdjacentState, pDirection)) {
            cir.setReturnValue(true);
        }
    }

    @Inject(method = { "getVisualShape" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getVisualShape(BlockState pState, BlockGetter pLevel, BlockPos pPos, CollisionContext pContext, CallbackInfoReturnable<VoxelShape> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.glassType != null) {
            cir.setReturnValue(Shapes.empty());
        }
    }

    @Inject(method = { "getFluidState" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getFluidState(BlockState pState, CallbackInfoReturnable<FluidState> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && pState.m_61138_(BlockStateProperties.WATERLOGGED)) {
            cir.setReturnValue(pState.m_61143_(BlockStateProperties.WATERLOGGED) ? Fluids.WATER.getSource(false) : Fluids.EMPTY.defaultFluidState());
        }
    }

    @Inject(method = { "rotate" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$rotate(BlockState pState, Rotation pRotation, CallbackInfoReturnable<BlockState> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null) {
            cir.setReturnValue(settings.rotate(pState, pRotation));
        }
    }

    @Inject(method = { "mirror" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$mirror(BlockState pState, Mirror pMirror, CallbackInfoReturnable<BlockState> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null) {
            cir.setReturnValue(settings.mirror(pState, pMirror));
        }
    }

    @Inject(method = { "useShapeForLightOcclusion" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$useShapeForLightOcclusion(BlockState pState, CallbackInfoReturnable<Boolean> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null) {
            cir.setReturnValue(settings.useShapeForLightOcclusion(pState));
        }
    }

    @Inject(method = { "hasAnalogOutputSignal" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$hasAnalogOutputSignal(BlockState pState, CallbackInfoReturnable<Boolean> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.analogOutputSignal != null) {
            cir.setReturnValue(true);
        }
    }

    @Inject(method = { "getAnalogOutputSignal" }, at = { @At("HEAD") }, cancellable = true)
    private void kiwi$getAnalogOutputSignal(BlockState pState, Level pLevel, BlockPos pPos, CallbackInfoReturnable<Integer> cir) {
        KBlockSettings settings = KBlockSettings.of(this);
        if (settings != null && settings.analogOutputSignal != null) {
            cir.setReturnValue(settings.analogOutputSignal.applyAsInt(pState));
        }
    }
}