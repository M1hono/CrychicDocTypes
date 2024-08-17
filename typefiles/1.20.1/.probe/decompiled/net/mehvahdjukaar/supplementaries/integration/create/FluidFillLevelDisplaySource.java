package net.mehvahdjukaar.supplementaries.integration.create;

import com.simibubi.create.content.redstone.displayLink.DisplayLinkContext;
import com.simibubi.create.content.redstone.displayLink.source.PercentOrProgressBarDisplaySource;
import com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats;
import com.simibubi.create.foundation.gui.ModularGuiLineBuilder;
import com.simibubi.create.foundation.utility.Components;
import com.simibubi.create.foundation.utility.Lang;
import net.mehvahdjukaar.moonlight.api.block.ISoftFluidTankProvider;
import net.minecraft.network.chat.MutableComponent;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class FluidFillLevelDisplaySource extends PercentOrProgressBarDisplaySource {

    @Override
    protected MutableComponent provideLine(DisplayLinkContext context, DisplayTargetStats stats) {
        return context.sourceConfig().getInt("Mode") == 2 && context.getSourceBlockEntity() instanceof ISoftFluidTankProvider tp ? Components.literal(tp.getSoftFluidTank().getFluidCount() + " mBtl") : super.provideLine(context, stats);
    }

    @Override
    protected Float getProgress(DisplayLinkContext context) {
        return context.getSourceBlockEntity() instanceof ISoftFluidTankProvider tp ? tp.getSoftFluidTank().getHeight(1.0F) : null;
    }

    @Override
    protected boolean progressBarActive(DisplayLinkContext context) {
        return context.sourceConfig().getInt("Mode") == 1;
    }

    @Override
    protected String getTranslationKey() {
        return "fluid_amount";
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void initConfigurationWidgets(DisplayLinkContext context, ModularGuiLineBuilder builder, boolean isFirstLine) {
        super.initConfigurationWidgets(context, builder, isFirstLine);
        if (!isFirstLine) {
            builder.addSelectionScrollInput(0, 120, (si, l) -> si.forOptions(Lang.translatedOptions("display_source.fill_level", "percent", "progress_bar", "fluid_amount")).titled(Lang.translateDirect("display_source.fill_level.display")), "Mode");
        }
    }

    @Override
    protected boolean allowsLabeling(DisplayLinkContext context) {
        return true;
    }
}