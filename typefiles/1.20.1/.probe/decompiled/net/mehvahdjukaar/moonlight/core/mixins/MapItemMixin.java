package net.mehvahdjukaar.moonlight.core.mixins;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import net.mehvahdjukaar.moonlight.api.map.ExpandedMapData;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.MapItem;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.saveddata.maps.MapItemSavedData;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ MapItem.class })
public abstract class MapItemMixin {

    @Inject(method = { "appendHoverText" }, at = { @At("HEAD") })
    private void appendHoverText(ItemStack stack, Level level, List<Component> tooltips, TooltipFlag tooltipFlag, CallbackInfo ci) {
        Integer integer = MapItem.getMapId(stack);
        MapItemSavedData mapData = level == null ? null : MapItem.getSavedData(integer, level);
        if (mapData instanceof ExpandedMapData data) {
            data.getCustomData().forEach((s, o) -> {
                Component c = o.onItemTooltip(mapData, stack);
                if (c != null) {
                    tooltips.add(c);
                }
            });
        }
    }

    @Inject(method = { "update" }, at = { @At("HEAD") }, cancellable = true)
    private void update(Level level, Entity entity, MapItemSavedData data, CallbackInfo ci) {
        AtomicBoolean b = new AtomicBoolean(false);
        if (data instanceof ExpandedMapData d) {
            d.getCustomData().forEach((s, o) -> {
                if (o.onItemUpdate(data, entity)) {
                    b.set(true);
                }
            });
        }
        if (b.get()) {
            ci.cancel();
        }
    }
}