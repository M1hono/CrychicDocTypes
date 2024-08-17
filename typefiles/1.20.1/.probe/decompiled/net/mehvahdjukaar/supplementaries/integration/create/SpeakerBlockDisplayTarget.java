package net.mehvahdjukaar.supplementaries.integration.create;

import com.simibubi.create.content.redstone.displayLink.DisplayLinkContext;
import com.simibubi.create.content.redstone.displayLink.target.DisplayTarget;
import com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats;
import java.util.List;
import net.mehvahdjukaar.supplementaries.common.block.tiles.SpeakerBlockTile;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.level.block.entity.BlockEntity;

public class SpeakerBlockDisplayTarget extends DisplayTarget {

    @Override
    public void acceptText(int line, List<MutableComponent> text, DisplayLinkContext context) {
        BlockEntity te = context.getTargetBlockEntity();
        if (te instanceof SpeakerBlockTile tile && text.size() > 0) {
            reserve(line, te, context);
            tile.setMessage((Component) text.get(0));
            context.level().sendBlockUpdated(context.getTargetPos(), te.getBlockState(), te.getBlockState(), 2);
        }
    }

    @Override
    public DisplayTargetStats provideStats(DisplayLinkContext context) {
        return new DisplayTargetStats(1, 32, this);
    }
}