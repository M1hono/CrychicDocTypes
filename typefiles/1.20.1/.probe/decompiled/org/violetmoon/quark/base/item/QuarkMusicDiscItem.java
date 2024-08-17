package org.violetmoon.quark.base.item;

import java.util.function.BooleanSupplier;
import java.util.function.Supplier;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.Rarity;
import net.minecraft.world.item.RecordItem;
import org.violetmoon.quark.base.Quark;
import org.violetmoon.zeta.item.IZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;
import org.violetmoon.zeta.util.BooleanSuppliers;

public class QuarkMusicDiscItem extends RecordItem implements IZetaItem {

    private final ZetaModule module;

    public final boolean isAmbient;

    public final Supplier<SoundEvent> soundSupplier;

    private BooleanSupplier enabledSupplier = BooleanSuppliers.TRUE;

    public QuarkMusicDiscItem(int comparatorValue, Supplier<SoundEvent> sound, String name, ZetaModule module, int lengthInTicks) {
        super(comparatorValue, sound, new Item.Properties().stacksTo(1).rarity(Rarity.RARE), lengthInTicks);
        Quark.ZETA.registry.registerItem(this, "music_disc_" + name);
        this.module = module;
        this.isAmbient = lengthInTicks == Integer.MAX_VALUE;
        this.soundSupplier = sound;
        CreativeTabManager.addToCreativeTabNextTo(CreativeModeTabs.TOOLS_AND_UTILITIES, this, Items.MUSIC_DISC_RELIC, false);
    }

    public QuarkMusicDiscItem setCondition(BooleanSupplier enabledSupplier) {
        this.enabledSupplier = enabledSupplier;
        return this;
    }

    @Override
    public ZetaModule getModule() {
        return this.module;
    }

    @Override
    public boolean doesConditionApply() {
        return this.enabledSupplier.getAsBoolean();
    }
}