package se.mickelus.tetra.items.cell;

import java.util.List;
import javax.annotation.Nullable;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.renderer.item.ItemProperties;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraftforge.registries.RegistryObject;
import se.mickelus.tetra.blocks.forged.ForgedBlockCommon;
import se.mickelus.tetra.items.TetraItem;

@ParametersAreNonnullByDefault
public class ThermalCellItem extends TetraItem {

    public static final int maxCharge = 128;

    public static final String identifier = "thermal_cell";

    public static RegistryObject<ThermalCellItem> instance;

    private final String chargedPropKey = "tetra:charged";

    public ThermalCellItem() {
        super(new Item.Properties().stacksTo(1).durability(128));
    }

    public static int getCharge(ItemStack itemStack) {
        return itemStack.getMaxDamage() - itemStack.getDamageValue();
    }

    public static int drainCharge(ItemStack itemStack, int amount) {
        if (itemStack.getDamageValue() + amount < itemStack.getMaxDamage()) {
            itemStack.setDamageValue(itemStack.getDamageValue() + amount);
            return amount;
        } else {
            int actualAmount = itemStack.getMaxDamage() - itemStack.getDamageValue();
            itemStack.setDamageValue(itemStack.getMaxDamage());
            return actualAmount;
        }
    }

    public static int recharge(ItemStack itemStack, int amount) {
        if (itemStack.getDamageValue() - amount >= 0) {
            itemStack.setDamageValue(itemStack.getDamageValue() - amount);
            return 0;
        } else {
            int overfill = amount - itemStack.getDamageValue();
            itemStack.setDamageValue(0);
            return overfill;
        }
    }

    @Override
    public void clientInit() {
        ItemProperties.register(this, new ResourceLocation("tetra:charged"), (itemStack, world, livingEntity, i) -> getCharge(itemStack) > 0 ? 1.0F : 0.0F);
    }

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level world, List<Component> tooltip, TooltipFlag advanced) {
        int charge = getCharge(stack);
        MutableComponent chargeLine = Component.translatable("item.tetra.thermal_cell.charge");
        if (charge == 128) {
            chargeLine.append(Component.translatable("item.tetra.thermal_cell.charge_full"));
        } else if ((double) charge > 51.2) {
            chargeLine.append(Component.translatable("item.tetra.thermal_cell.charge_good"));
        } else if (charge > 0) {
            chargeLine.append(Component.translatable("item.tetra.thermal_cell.charge_low"));
        } else {
            chargeLine.append(Component.translatable("item.tetra.thermal_cell.charge_empty"));
        }
        tooltip.add(chargeLine);
        tooltip.add(Component.literal(" "));
        tooltip.add(Component.literal(" "));
        tooltip.add(ForgedBlockCommon.locationTooltip);
    }

    public boolean showDurabilityBar(ItemStack stack) {
        return false;
    }
}