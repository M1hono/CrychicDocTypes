package io.github.lightman314.lightmanscurrency.common.items;

import io.github.lightman314.lightmanscurrency.api.upgrades.UpgradeData;
import io.github.lightman314.lightmanscurrency.common.upgrades.Upgrades;
import io.github.lightman314.lightmanscurrency.common.upgrades.types.SpeedUpgrade;
import javax.annotation.Nonnull;
import net.minecraft.world.item.Item;

public class SpeedUpgradeItem extends UpgradeItem {

    private final int delayAmount;

    public SpeedUpgradeItem(int delayAmount, Item.Properties properties) {
        super(Upgrades.SPEED, properties);
        this.delayAmount = delayAmount;
    }

    @Override
    public void fillUpgradeData(@Nonnull UpgradeData data) {
        data.setValue(SpeedUpgrade.DELAY_AMOUNT, Math.max(this.delayAmount, 1));
    }
}