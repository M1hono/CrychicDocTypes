package org.violetmoon.zeta.client.event.play;

import com.mojang.datafixers.util.Either;
import java.util.List;
import net.minecraft.network.chat.FormattedText;
import net.minecraft.world.inventory.tooltip.TooltipComponent;
import net.minecraft.world.item.ItemStack;
import org.violetmoon.zeta.event.bus.IZetaPlayEvent;

public interface ZRenderTooltip extends IZetaPlayEvent {

    public interface GatherComponents extends IZetaPlayEvent, ZRenderTooltip {

        ItemStack getItemStack();

        List<Either<FormattedText, TooltipComponent>> getTooltipElements();

        public interface Low extends ZRenderTooltip.GatherComponents {
        }
    }
}