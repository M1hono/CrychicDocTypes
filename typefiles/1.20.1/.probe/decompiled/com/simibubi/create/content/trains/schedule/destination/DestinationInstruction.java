package com.simibubi.create.content.trains.schedule.destination;

import com.google.common.collect.ImmutableList;
import com.simibubi.create.AllBlocks;
import com.simibubi.create.Create;
import com.simibubi.create.foundation.utility.Components;
import com.simibubi.create.foundation.utility.Lang;
import com.simibubi.create.foundation.utility.Pair;
import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.apache.commons.lang3.StringUtils;

public class DestinationInstruction extends TextScheduleInstruction {

    @Override
    public Pair<ItemStack, Component> getSummary() {
        return Pair.of(AllBlocks.TRACK_STATION.asStack(), Components.literal(this.getLabelText()));
    }

    @Override
    public boolean supportsConditions() {
        return true;
    }

    @Override
    public ResourceLocation getId() {
        return Create.asResource("destination");
    }

    @Override
    public ItemStack getSecondLineIcon() {
        return AllBlocks.TRACK_STATION.asStack();
    }

    public String getFilter() {
        return this.getLabelText();
    }

    public String getFilterForRegex() {
        String filter = this.getFilter();
        return filter.isBlank() ? filter : "\\Q" + filter.replace("*", "\\E.*\\Q") + "\\E";
    }

    @Override
    public List<Component> getSecondLineTooltip(int slot) {
        return ImmutableList.of(Lang.translateDirect("schedule.instruction.filter_edit_box"), Lang.translateDirect("schedule.instruction.filter_edit_box_1").withStyle(ChatFormatting.GRAY), Lang.translateDirect("schedule.instruction.filter_edit_box_2").withStyle(ChatFormatting.DARK_GRAY), Lang.translateDirect("schedule.instruction.filter_edit_box_3").withStyle(ChatFormatting.DARK_GRAY));
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    protected void modifyEditBox(EditBox box) {
        box.setFilter(s -> StringUtils.countMatches(s, '*') <= 3);
    }
}