package net.mehvahdjukaar.supplementaries.common.misc.map_markers.markers;

import net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration;
import net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker;
import net.mehvahdjukaar.supplementaries.common.misc.map_markers.ModMapMarkers;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.block.entity.BeaconBlockEntity;
import org.jetbrains.annotations.Nullable;

public class BeaconMarker extends MapBlockMarker<CustomMapDecoration> {

    public BeaconMarker() {
        super(ModMapMarkers.BEACON_DECORATION_TYPE);
    }

    public BeaconMarker(BlockPos pos, @Nullable Component name) {
        super(ModMapMarkers.BEACON_DECORATION_TYPE);
        this.setName(name);
        this.setPos(pos);
    }

    @Nullable
    public static BeaconMarker getFromWorld(BlockGetter world, BlockPos pos) {
        if (world.getBlockEntity(pos) instanceof BeaconBlockEntity tile) {
            Component name = tile.name;
            return new BeaconMarker(pos, name);
        } else {
            return null;
        }
    }

    @Nullable
    @Override
    public CustomMapDecoration doCreateDecoration(byte mapX, byte mapY, byte rot) {
        return new CustomMapDecoration(this.getType(), mapX, mapY, rot, this.getName());
    }
}