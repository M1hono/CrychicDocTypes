package net.mehvahdjukaar.moonlight.core.mixins;

import net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement;
import net.mehvahdjukaar.moonlight.core.misc.IExtendedItem;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.block.state.BlockState;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin({ BlockItem.class })
public abstract class BlockItemMixin extends Item implements IExtendedItem {

    protected BlockItemMixin(Item.Properties pProperties) {
        super(pProperties);
    }

    @Inject(method = { "getPlacementState" }, at = { @At("HEAD") }, cancellable = true)
    private void getPlacementState(BlockPlaceContext pContext, CallbackInfoReturnable<BlockState> cir) {
        AdditionalItemPlacement behavior = this.moonlight$getAdditionalBehavior();
        if (behavior != null) {
            BlockState overrideBlockState = behavior.overrideGetPlacementState(pContext);
            if (overrideBlockState != null) {
                cir.setReturnValue(overrideBlockState);
            }
        }
    }

    @Inject(method = { "place" }, at = { @At("HEAD") }, cancellable = true)
    private void place(BlockPlaceContext pContext, CallbackInfoReturnable<InteractionResult> cir) {
        AdditionalItemPlacement behavior = this.moonlight$getAdditionalBehavior();
        if (behavior != null) {
            InteractionResult result = behavior.overridePlace(pContext);
            if (result.consumesAction()) {
                cir.setReturnValue(result);
            }
        }
    }

    @Inject(method = { "updatePlacementContext" }, at = { @At("HEAD") }, cancellable = true)
    private void updatePlacementContext(BlockPlaceContext pContext, CallbackInfoReturnable<BlockPlaceContext> cir) {
        AdditionalItemPlacement behavior = this.moonlight$getAdditionalBehavior();
        if (behavior != null) {
            BlockPlaceContext result = behavior.overrideUpdatePlacementContext(pContext);
            if (result != null) {
                cir.setReturnValue(result);
            }
        }
    }
}