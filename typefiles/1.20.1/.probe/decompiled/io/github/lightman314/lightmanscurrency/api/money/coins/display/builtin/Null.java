package io.github.lightman314.lightmanscurrency.api.money.coins.display.builtin;

import com.google.gson.JsonObject;
import io.github.lightman314.lightmanscurrency.api.money.coins.display.ValueDisplayData;
import io.github.lightman314.lightmanscurrency.api.money.coins.display.ValueDisplaySerializer;
import io.github.lightman314.lightmanscurrency.api.money.value.builtin.CoinValue;
import java.util.List;
import javax.annotation.Nonnull;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;

public class Null extends ValueDisplayData {

    public static final ResourceLocation TYPE = new ResourceLocation("lightmanscurrency", "null");

    public static final Null INSTANCE = new Null();

    public static final ValueDisplaySerializer SERIALIZER = new Null.Serializer();

    private Null() {
    }

    @Nonnull
    @Override
    public ValueDisplaySerializer getSerializer() {
        return SERIALIZER;
    }

    @Nonnull
    @Override
    public MutableComponent formatValue(@Nonnull CoinValue value, @Nonnull MutableComponent emptyText) {
        return emptyText;
    }

    @Override
    public void formatCoinTooltip(@Nonnull ItemStack stack, @Nonnull List<Component> tooltip) {
    }

    protected static class Serializer extends ValueDisplaySerializer {

        @Nonnull
        @Override
        public ResourceLocation getType() {
            return Null.TYPE;
        }

        @Override
        public void resetBuilder() {
        }

        @Override
        public void parseAdditional(@Nonnull JsonObject chainJson) {
        }

        @Override
        public void writeAdditional(@Nonnull ValueDisplayData data, @Nonnull JsonObject chainJson) {
        }

        @Nonnull
        public Null build() {
            return Null.INSTANCE;
        }
    }
}