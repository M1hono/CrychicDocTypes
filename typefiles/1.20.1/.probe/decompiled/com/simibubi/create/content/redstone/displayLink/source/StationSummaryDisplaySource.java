package com.simibubi.create.content.redstone.displayLink.source;

import com.google.common.collect.ImmutableList;
import com.simibubi.create.content.redstone.displayLink.DisplayLinkContext;
import com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats;
import com.simibubi.create.content.trains.display.FlapDisplayBlockEntity;
import com.simibubi.create.content.trains.display.FlapDisplayLayout;
import com.simibubi.create.content.trains.display.FlapDisplaySection;
import com.simibubi.create.content.trains.display.GlobalTrainDisplayData;
import com.simibubi.create.content.trains.station.GlobalStation;
import com.simibubi.create.content.trains.station.StationBlockEntity;
import com.simibubi.create.foundation.advancement.AllAdvancements;
import com.simibubi.create.foundation.gui.ModularGuiLineBuilder;
import com.simibubi.create.foundation.utility.Components;
import com.simibubi.create.foundation.utility.Lang;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.util.Mth;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class StationSummaryDisplaySource extends DisplaySource {

    protected static final MutableComponent UNPREDICTABLE = Components.literal(" ~ ");

    protected static final List<MutableComponent> EMPTY_ENTRY_4 = ImmutableList.of(WHITESPACE, Components.literal(" . "), WHITESPACE, WHITESPACE);

    protected static final List<MutableComponent> EMPTY_ENTRY_5 = ImmutableList.of(WHITESPACE, Components.literal(" . "), WHITESPACE, WHITESPACE, WHITESPACE);

    @Override
    public List<MutableComponent> provideText(DisplayLinkContext context, DisplayTargetStats stats) {
        return EMPTY;
    }

    @Override
    public List<List<MutableComponent>> provideFlapDisplayText(DisplayLinkContext context, DisplayTargetStats stats) {
        String filter = context.sourceConfig().getString("Filter");
        boolean hasPlatform = filter.contains("*");
        List<List<MutableComponent>> list = new ArrayList();
        GlobalTrainDisplayData.prepare(filter, stats.maxRows()).forEach(prediction -> {
            List<MutableComponent> lines = new ArrayList();
            if (prediction.ticks == -1 || prediction.ticks >= 11700) {
                lines.add(WHITESPACE);
                lines.add(UNPREDICTABLE);
            } else if (prediction.ticks < 200) {
                lines.add(WHITESPACE);
                lines.add(Lang.translateDirect("display_source.station_summary.now"));
            } else {
                int min = prediction.ticks / 1200;
                int sec = prediction.ticks / 20 % 60;
                sec = Mth.ceil((float) sec / 15.0F) * 15;
                if (sec == 60) {
                    min++;
                    sec = 0;
                }
                lines.add(min > 0 ? Components.literal(String.valueOf(min)) : WHITESPACE);
                lines.add(min > 0 ? Lang.translateDirect("display_source.station_summary.minutes") : Lang.translateDirect("display_source.station_summary.seconds", sec));
            }
            lines.add(prediction.train.name.copy());
            lines.add(prediction.scheduleTitle);
            if (!hasPlatform) {
                list.add(lines);
            } else {
                String platform = prediction.destination;
                for (String string : filter.split("\\*")) {
                    if (!string.isEmpty()) {
                        platform = platform.replace(string, "");
                    }
                }
                platform = platform.replace("*", "?");
                lines.add(Components.literal(platform.trim()));
                list.add(lines);
            }
        });
        if (list.size() > 0) {
            context.blockEntity().award(AllAdvancements.DISPLAY_BOARD);
        }
        int toPad = stats.maxRows() - list.size();
        for (int padding = 0; padding < toPad; padding++) {
            list.add(hasPlatform ? EMPTY_ENTRY_5 : EMPTY_ENTRY_4);
        }
        return list;
    }

    @Override
    public void loadFlapDisplayLayout(DisplayLinkContext context, FlapDisplayBlockEntity flapDisplay, FlapDisplayLayout layout) {
        CompoundTag conf = context.sourceConfig();
        int columnWidth = conf.getInt("NameColumn");
        int columnWidth2 = conf.getInt("PlatformColumn");
        boolean hasPlatform = conf.getString("Filter").contains("*");
        String layoutName = "StationSummary" + columnWidth + hasPlatform + columnWidth2;
        if (!layout.isLayout(layoutName)) {
            ArrayList<FlapDisplaySection> list = new ArrayList();
            int timeWidth = 20;
            float gapSize = 8.0F;
            float platformWidth = (float) columnWidth2 * 7.0F;
            FlapDisplaySection minutes = new FlapDisplaySection(7.0F, "numeric", false, false);
            FlapDisplaySection time = new FlapDisplaySection((float) timeWidth, "arrival_time", true, true);
            float totalSize = (float) flapDisplay.xSize * 32.0F - 4.0F - gapSize * 2.0F;
            totalSize = totalSize - (float) timeWidth - 7.0F;
            platformWidth = Math.min(platformWidth, totalSize - gapSize);
            platformWidth = (float) ((int) (platformWidth / 7.0F)) * 7.0F;
            if (hasPlatform) {
                totalSize = totalSize - gapSize - platformWidth;
            }
            if (platformWidth == 0.0F && hasPlatform) {
                totalSize += gapSize;
            }
            int trainNameWidth = (int) ((float) columnWidth / 100.0F * totalSize / 7.0F);
            int destinationWidth = Math.round((1.0F - (float) columnWidth / 100.0F) * totalSize / 7.0F);
            FlapDisplaySection trainName = new FlapDisplaySection((float) trainNameWidth * 7.0F, "alphabet", false, trainNameWidth > 0);
            FlapDisplaySection destination = new FlapDisplaySection((float) destinationWidth * 7.0F, "alphabet", false, hasPlatform && destinationWidth > 0 && platformWidth > 0.0F);
            FlapDisplaySection platform = new FlapDisplaySection(platformWidth, "numeric", false, false).rightAligned();
            list.add(minutes);
            list.add(time);
            list.add(trainName);
            list.add(destination);
            if (hasPlatform) {
                list.add(platform);
            }
            layout.configure(layoutName, list);
        }
    }

    @Override
    protected String getTranslationKey() {
        return "station_summary";
    }

    @Override
    public void populateData(DisplayLinkContext context) {
        CompoundTag conf = context.sourceConfig();
        if (!conf.contains("PlatformColumn")) {
            conf.putInt("PlatformColumn", 3);
        }
        if (!conf.contains("NameColumn")) {
            conf.putInt("NameColumn", 50);
        }
        if (!conf.contains("Filter")) {
            if (context.getSourceBlockEntity() instanceof StationBlockEntity stationBe) {
                GlobalStation station = stationBe.getStation();
                if (station != null) {
                    conf.putString("Filter", station.name);
                }
            }
        }
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void initConfigurationWidgets(DisplayLinkContext context, ModularGuiLineBuilder builder, boolean isFirstLine) {
        if (isFirstLine) {
            builder.addTextInput(0, 137, (e, t) -> {
                e.setValue("");
                t.withTooltip(ImmutableList.of(Lang.translateDirect("display_source.station_summary.filter").withStyle(s -> s.withColor(5476833)), Lang.translateDirect("gui.schedule.lmb_edit").withStyle(ChatFormatting.DARK_GRAY, ChatFormatting.ITALIC)));
            }, "Filter");
        } else {
            builder.addScrollInput(0, 32, (si, l) -> {
                si.titled(Lang.translateDirect("display_source.station_summary.train_name_column")).withRange(0, 73).withShiftStep(12);
                si.setState(50);
                l.withSuffix("%");
            }, "NameColumn");
            builder.addScrollInput(36, 22, (si, l) -> {
                si.titled(Lang.translateDirect("display_source.station_summary.platform_column")).withRange(0, 16).withShiftStep(4);
                si.setState(3);
            }, "PlatformColumn");
        }
    }
}