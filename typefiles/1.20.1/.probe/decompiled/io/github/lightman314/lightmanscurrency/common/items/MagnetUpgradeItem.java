package io.github.lightman314.lightmanscurrency.common.items;

import io.github.lightman314.lightmanscurrency.api.upgrades.UpgradeData;
import io.github.lightman314.lightmanscurrency.common.upgrades.Upgrades;
import java.util.function.Supplier;
import javax.annotation.Nonnull;
import net.minecraft.world.item.Item;

public class MagnetUpgradeItem extends UpgradeItem {

    private final Supplier<Integer> radius;

    public MagnetUpgradeItem(Supplier<Integer> radius, Item.Properties properties) {
        super(Upgrades.COIN_CHEST_MAGNET, properties);
        this.radius = radius;
    }

    @Override
    public void fillUpgradeData(@Nonnull UpgradeData data) {
        data.setValue("magnet_range", Math.max((Integer) this.radius.get(), 1));
    }
}