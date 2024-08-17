package se.mickelus.tetra.gui.stats.getter;

import java.util.Arrays;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;

public class StatGetterAnd implements IStatGetter {

    IStatGetter[] statGetters;

    public StatGetterAnd(IStatGetter... statGetters) {
        this.statGetters = statGetters;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack) {
        return Arrays.stream(this.statGetters).map(statGetter -> statGetter.getValue(player, itemStack)).allMatch(value -> value > 0.0) ? 1.0 : 0.0;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot) {
        return Arrays.stream(this.statGetters).map(statGetter -> statGetter.getValue(player, itemStack, slot)).allMatch(value -> value > 0.0) ? 1.0 : 0.0;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot, String improvement) {
        return Arrays.stream(this.statGetters).map(statGetter -> statGetter.getValue(player, itemStack, slot, improvement)).allMatch(value -> value > 0.0) ? 1.0 : 0.0;
    }
}