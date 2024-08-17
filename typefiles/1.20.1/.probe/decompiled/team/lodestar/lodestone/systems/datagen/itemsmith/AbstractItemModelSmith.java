package team.lodestar.lodestone.systems.datagen.itemsmith;

import java.util.function.Consumer;
import java.util.function.Supplier;
import net.minecraft.world.item.Item;
import team.lodestar.lodestone.systems.datagen.providers.LodestoneItemModelProvider;

public abstract class AbstractItemModelSmith {

    public static class ItemModelSmithData {

        public final LodestoneItemModelProvider provider;

        public final Consumer<Supplier<? extends Item>> consumer;

        public ItemModelSmithData(LodestoneItemModelProvider provider, Consumer<Supplier<? extends Item>> consumer) {
            this.provider = provider;
            this.consumer = consumer;
        }
    }
}