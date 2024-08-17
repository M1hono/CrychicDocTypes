package se.mickelus.tetra.gui.stats.getter;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.enchantment.Enchantment;
import net.minecraft.world.item.enchantment.EnchantmentHelper;
import net.minecraftforge.registries.ForgeRegistries;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.tetra.items.modular.IModularItem;
import se.mickelus.tetra.module.ItemModuleMajor;

@ParametersAreNonnullByDefault
public class StatGetterEnchantmentLevel implements IStatGetter {

    private final Enchantment enchantment;

    private final String enchantmentKey;

    private final double multiplier;

    private final double base;

    public StatGetterEnchantmentLevel(Enchantment enchantment, double multiplier) {
        this(enchantment, multiplier, 0.0);
    }

    public StatGetterEnchantmentLevel(Enchantment enchantment, double multiplier, double base) {
        this.enchantment = enchantment;
        this.enchantmentKey = ForgeRegistries.ENCHANTMENTS.getKey(enchantment).toString();
        this.multiplier = multiplier;
        this.base = base;
    }

    @Override
    public double getValue(Player player, ItemStack itemStack) {
        return (Double) CastOptional.cast(itemStack.getItem(), IModularItem.class).map(item -> EnchantmentHelper.getItemEnchantmentLevel(this.enchantment, itemStack)).filter(level -> level > 0).map(level -> (double) level.intValue() * this.multiplier + this.base).orElse(0.0);
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot) {
        return (Double) CastOptional.cast(itemStack.getItem(), IModularItem.class).flatMap(item -> CastOptional.cast(item.getModuleFromSlot(itemStack, slot), ItemModuleMajor.class)).map(module -> module.getEnchantments(itemStack)).map(enchantments -> (Integer) enchantments.get(this.enchantment)).filter(level -> level > 0).map(level -> (double) level.intValue() * this.multiplier + this.base).orElse(0.0);
    }

    @Override
    public double getValue(Player player, ItemStack itemStack, String slot, String improvement) {
        return improvement.startsWith("enchantment:") && this.enchantmentKey.equals(improvement.substring(12)) ? this.getValue(player, itemStack) : 0.0;
    }
}