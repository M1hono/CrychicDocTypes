package net.mehvahdjukaar.supplementaries.common.events.overrides;

import net.mehvahdjukaar.moonlight.api.map.MapHelper;
import net.mehvahdjukaar.supplementaries.configs.CommonConfigs;
import net.mehvahdjukaar.supplementaries.integration.CompatHandler;
import net.mehvahdjukaar.supplementaries.integration.CompatObjects;
import net.minecraft.core.BlockPos;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.MapItem;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.BlockHitResult;

class MapMarkerBehavior implements ItemUseOnBlockOverride {

    @Override
    public boolean isEnabled() {
        return (Boolean) CommonConfigs.Tweaks.MAP_MARKERS.get();
    }

    @Override
    public boolean appliesToItem(Item item) {
        return item instanceof MapItem || CompatHandler.MAPATLAS && item == CompatObjects.ATLAS.get();
    }

    @Override
    public InteractionResult tryPerformingAction(Level level, Player player, InteractionHand hand, ItemStack stack, BlockHitResult hit) {
        BlockPos pos = hit.getBlockPos();
        return MapHelper.toggleMarkersAtPos(level, pos, stack, player) ? InteractionResult.sidedSuccess(level.isClientSide) : InteractionResult.PASS;
    }
}